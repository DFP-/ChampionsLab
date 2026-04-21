"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { inflateRaw } from "pako";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import {
  ChampionsPokemon, PokemonType, TYPE_COLORS, StatPoints,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { Copy, Check, ArrowLeft } from "lucide-react";

const STAT_KEYS: (keyof StatPoints)[] = ["hp", "attack", "defense", "spAtk", "spDef", "speed"];
const STAT_LABELS: Record<string, string> = { hp: "HP", attack: "Atk", defense: "Def", spAtk: "SpA", spDef: "SpD", speed: "Spe" };

interface PasteSlot {
  pokemon: ChampionsPokemon;
  ability?: string;
  nature?: string;
  moves: string[];
  statPoints: StatPoints;
  item?: string;
  isMega?: boolean;
  megaFormIndex?: number;
  preMegaAbility?: string;
}

export default function PastePage() {
  const { t, tp, tm, ta, tn, ti, tt } = useI18n();
  const [teamName, setTeamName] = useState("");
  const [slots, setSlots] = useState<PasteSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [builderUrl, setBuilderUrl] = useState("/team-builder");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shortId = params.get("s");
    const teamParam = params.get("t");

    const hydrate = (data: { n?: string; s: Array<{ p: number; a?: string; t?: string; m: string[]; sp: number[]; i?: string; mg?: boolean; mgi?: number; pa?: string }> }) => {
      setTeamName(data.n || t("teamBuilder.sharedTeam"));
      const parsed: PasteSlot[] = [];
      for (const s of data.s) {
        const pokemon = POKEMON_SEED.find(p => p.id === s.p);
        if (!pokemon) continue;
        let megaFormIndex = s.mgi;
        if (s.mg && megaFormIndex === undefined) {
          const megaForms = pokemon.forms?.filter(f => f.isMega && !f.hidden) ?? [];
          if (s.a) {
            const idx = megaForms.findIndex(f => f.abilities.some(a => a.name === s.a));
            megaFormIndex = idx >= 0 ? idx : 0;
          } else {
            megaFormIndex = 0;
          }
        }
        parsed.push({
          pokemon,
          ability: s.a,
          nature: s.t,
          moves: s.m || [],
          statPoints: { hp: s.sp?.[0] || 0, attack: s.sp?.[1] || 0, defense: s.sp?.[2] || 0, spAtk: s.sp?.[3] || 0, spDef: s.sp?.[4] || 0, speed: s.sp?.[5] || 0 },
          item: s.i,
          isMega: s.mg,
          megaFormIndex,
          preMegaAbility: s.pa,
        });
      }
      setSlots(parsed);
      setLoading(false);
    };

    if (shortId) {
      fetch(`/api/share/${encodeURIComponent(shortId)}`)
        .then(r => {
          if (!r.ok) throw new Error("not found");
          return r.json();
        })
        .then(data => { if (data?.s) hydrate(data); else throw new Error("invalid"); })
        .catch(() => { setError(t("teamBuilder.sharedExpired")); setLoading(false); });
      setBuilderUrl(`/team-builder?s=${encodeURIComponent(shortId)}`);
      return;
    }

    if (teamParam) {
      try {
        const b64 = teamParam.replace(/-/g, "+").replace(/_/g, "/");
        const binary = atob(b64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const data = JSON.parse(new TextDecoder().decode(inflateRaw(bytes)));
        if (data?.s) {
          hydrate(data);
          setBuilderUrl(`/team-builder?t=${encodeURIComponent(teamParam)}`);
          return;
        }
      } catch { /* invalid */ }
    }

    setError(t("paste.noTeam"));
    setLoading(false);
  }, []);

  const buildPasteText = () => {
    return slots.map(s => {
      const p = s.pokemon;
      const megaForms = p.forms?.filter(f => f.isMega && !f.hidden) ?? [];
      const activeMega = s.isMega ? megaForms[s.megaFormIndex ?? 0] : null;
      let exportName = activeMega?.name ?? (p.showdownName ?? p.name);
      if (s.isMega && p.hasMega && !activeMega) {
        exportName = megaForms.length > 1
          ? `${p.name}-Mega-${s.megaFormIndex === 1 ? "Y" : "X"}`
          : `${p.name}-Mega`;
      }
      // Gendered forms: "Basculegion-M" → "Basculegion" (male = default in Showdown), "Meowstic-M" → "Meowstic"
      if (exportName.endsWith("-M") && !exportName.startsWith("Rotom")) {
        exportName = exportName.slice(0, -2);
      }
      // Convert regional prefix to Showdown suffix: "Hisuian Samurott" → "Samurott-Hisui"
      const regionalPrefixes: Record<string, string> = { hisuian: "Hisui", alolan: "Alola", galarian: "Galar", paldean: "Paldea" };
      for (const [prefix, suffix] of Object.entries(regionalPrefixes)) {
        if (exportName.toLowerCase().startsWith(prefix + " ")) {
          exportName = `${exportName.slice(prefix.length + 1)}-${suffix}`;
          break;
        }
      }
      const nameLine = s.item ? `${exportName} @ ${s.item}` : exportName;
      const lines = [nameLine];
      if (s.ability) lines.push(`Ability: ${s.ability}`);
      if (s.nature) lines.push(`${s.nature} Nature`);
      {
        const spParts = STAT_KEYS
          .map(k => ({ val: s.statPoints[k], label: STAT_LABELS[k] }))
          .filter(e => e.val > 0)
          .map(e => `${e.val} ${e.label}`);
        if (spParts.length > 0) lines.push(`EVs: ${spParts.join(" / ")}`);
      }
      s.moves.forEach(m => lines.push(`- ${m}`));
      return lines.join("\n");
    }).join("\n\n");
  };

  const copyPaste = async () => {
    await navigator.clipboard.writeText(buildPasteText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="animate-pulse text-muted-foreground">{t("common.loading")}...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Link href="/team-builder" className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center justify-center gap-1">
          <ArrowLeft className="w-4 h-4" /> {t("paste.backToBuilder")}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-1">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            PokéPaste
          </span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-xl">
          {t("paste.pageDesc")}
        </p>
      </div>

      {/* Team Info */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{teamName}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{t("paste.subtitle", { count: slots.length })}</p>
        </div>
        <button
          onClick={copyPaste}
          className={cn(
            "px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all",
            copied
              ? "bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400"
              : "glass glass-hover text-muted-foreground hover:text-foreground"
          )}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? t("common.copied") : t("paste.copyPaste")}
        </button>
      </div>

      {/* Team Grid */}
      <div className="space-y-3">
        {slots.map((s, i) => {
          const p = s.pokemon;
          const displaySprite = p.officialArt;
          const displayName = p.name;
          const displayTypes = p.types as PokemonType[];
          const totalSP = Object.values(s.statPoints).reduce((a, b) => a + b, 0);

          return (
            <div
              key={i}
              className="glass rounded-2xl border border-gray-200/60 dark:border-white/10 p-4 sm:p-5"
            >
              <div className="flex gap-4">
                {/* Sprite */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: `radial-gradient(ellipse, ${TYPE_COLORS[displayTypes[0]]}15 0%, transparent 70%)` }}
                >
                  <Image src={displaySprite} alt={displayName} width={80} height={80} className="drop-shadow-lg object-contain" unoptimized />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  {/* Name + Types */}
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-base sm:text-lg font-bold">{tp(displayName)}</h2>
                    {s.isMega && (
                      <span className="px-1.5 py-0.5 text-[8px] font-bold rounded bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30">MEGA</span>
                    )}
                    <div className="flex gap-1">
                      {displayTypes.map(ty => (
                        <span key={ty} className="px-1.5 py-0.5 text-[8px] font-bold uppercase rounded text-white/90" style={{ backgroundColor: `${TYPE_COLORS[ty]}CC` }}>{tt(ty)}</span>
                      ))}
                    </div>
                  </div>

                  {/* Item */}
                  {s.item && (
                    <p className="text-xs text-amber-700 dark:text-amber-400 font-medium mb-1">@ {ti(s.item)}</p>
                  )}

                  {/* Ability */}
                  {s.ability && (
                    <p className="text-xs text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">{ta(s.ability)}</span>
                      {s.isMega && s.preMegaAbility && (
                        <span className="text-muted-foreground"> ({ta(s.preMegaAbility)} → {ta(s.ability)})</span>
                      )}
                    </p>
                  )}

                  {/* Nature */}
                  {s.nature && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-2">{tn(s.nature)} Nature</p>
                  )}

                  {/* Moves */}
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    {s.moves.filter(Boolean).map(m => {
                      const moveData = p.moves.find(mv => mv.name === m);
                      return (
                        <div key={m} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06]">
                          {moveData && (
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: TYPE_COLORS[moveData.type] }} />
                          )}
                          <span className="text-[11px] font-medium truncate">{tm(m)}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stat Points */}
                  {totalSP > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {STAT_KEYS.filter(k => s.statPoints[k] > 0).map(k => (
                        <span key={k} className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-gray-100 dark:bg-white/[0.06] text-muted-foreground">
                          {s.statPoints[k]} {STAT_LABELS[k]}
                        </span>
                      ))}
                      <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        {totalSP} SP
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground mb-2">{t("paste.footer")}</p>
        <Link
          href={builderUrl}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-90 transition-opacity"
        >
          {t("paste.openInBuilder")}
        </Link>
      </div>
    </div>
  );
}
