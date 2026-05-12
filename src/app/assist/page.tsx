"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { TrendingUp, TrendingDown, Minus, Shield, Swords, AlertTriangle, Sparkles, ArrowLeft, Loader2, Target, ChevronDown, ChevronUp, MessageSquare, X } from "lucide-react";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { TYPE_COLORS, type PokemonType, type TeamSlot } from "@/lib/types";
import { cn } from "@/lib/utils";
import { spriteUrl } from "@/lib/sprite-url";
import { getLastTeam, deserializeTeam, getSavedTeams, type SavedTeamSlot } from "@/lib/storage";
import { analyzeTeam, type AssistTeamResult, type AssistPokemonResult, type KOEntry, type AssistSpeedEntry } from "@/lib/engine/assist-analysis";
import { useI18n } from "@/lib/i18n";
import AssistantChat from "@/lib/assistant/AssistantChat";

// ── Team loading from URL params or localStorage ────────────────────────────

function loadTeamFromURL(): TeamSlot[] | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);

  // Direct paste link: /assist?s=abc123
  const shortId = params.get("s");
  if (shortId) {
    return null; // Would need to fetch from API — handled below
  }

  // Team param: /assist?t=base64encoded...
  const teamParam = params.get("t");
  if (teamParam) {
    try {
      const decoded = JSON.parse(decodeURIComponent(teamParam));
      return deserializeTeam(decoded.slots || decoded);
    } catch {
      return null;
    }
  }

  // Last team: /assist?team=last
  const lastTeam = params.get("team");
  if (lastTeam === "last") {
    const last = getLastTeam();
    if (last) return deserializeTeam(last.slots);
  }

  return null;
}

function loadTeamFromAPI(shortId: string): Promise<TeamSlot[] | null> {
  return fetch(`/api/share/${encodeURIComponent(shortId)}`)
    .then(r => {
      if (!r.ok) throw new Error("not found");
      return r.json();
    })
    .then(data => {
      const parsed: SavedTeamSlot[] = data.s.map((s: any) => ({
        pokemonId: s.p,
        ability: s.a,
        nature: s.t,
        moves: s.m || [],
        statPoints: { hp: s.sp?.[0] || 0, attack: s.sp?.[1] || 0, defense: s.sp?.[2] || 0, spAtk: s.sp?.[3] || 0, spDef: s.sp?.[4] || 0, speed: s.sp?.[5] || 0 },
        item: s.i,
        isMega: s.mg,
        megaFormIndex: s.mgi,
        preMegaAbility: s.pa,
      }));
      return deserializeTeam(parsed);
    })
    .catch(() => null);
}

// ── KO Entry formatting helpers ─────────────────────────────────────────────

function formatKOEntry(entry: KOEntry): string {
  const range = `${entry.damageMin}-${entry.damageMax}`;
  const percentRange = `${Math.round(entry.percentMin)}-${Math.round(entry.percentMax)}%`;

  if (entry.isOHKO) {
    return `${range} (${percentRange}) — guaranteed OHKO`;
  }
  if (entry.is2HKO) {
    return `${range} (${percentRange}) — 2HKO`;
  }
  if (entry.percentMax >= 100) {
    return `${range} (${percentRange}) — OHKO`;
  }
  return `${range} (${percentRange})`;
}

function speedComparisonIcon(comp: AssistSpeedEntry["comparison"]) {
  switch (comp) {
    case "faster":
      return <TrendingUp className="w-3 h-3 text-emerald-500" />;
    case "slower":
      return <TrendingDown className="w-3 h-3 text-red-500" />;
    case "tie":
      return <Minus className="w-3 h-3 text-amber-500" />;
  }
}

function speedComparisonText(comp: AssistSpeedEntry["comparison"], diff: number) {
  switch (comp) {
    case "faster":
      return `+${diff} faster`;
    case "slower":
      return `${diff} slower`;
    case "tie":
      return "tie";
  }
}

// ── Speed Tier Bar (collapsed view with sprites) ────────────────────────────

function SpeedTierBar({ entries }: { entries: AssistSpeedEntry[] }) {
  const [expanded, setExpanded] = useState(false);

  if (entries.length === 0) return null;

  const closeToUser = entries.filter(e => Math.abs(e.diff) <= 25);
  const furtherAway = entries.filter(e => Math.abs(e.diff) > 25);

  const fasterEntries = entries.filter(e => e.comparison === "faster");
  const slowerEntries = entries.filter(e => e.comparison === "slower");
  const tieEntries = entries.filter(e => e.comparison === "tie");

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between mb-2 group"
      >
        <div className="flex items-center gap-1.5">
          <Target className="w-3 h-3 text-pink-500" />
          <span className="text-[9px] font-bold uppercase text-pink-600 dark:text-pink-400">Speed Tiers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-muted-foreground">
            {entries.length} threats within ±50 &middot; {closeToUser.length} within ±25
          </span>
          {expanded ? (
            <ChevronUp className="w-3 h-3 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-3 h-3 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Compact sprite bar */}
      <div className="border rounded-lg overflow-hidden bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="p-2 space-y-2">
          {/* Faster group (user outruns them) */}
          {fasterEntries.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[8px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                <TrendingUp className="w-2.5 h-2.5" />
                <span>You outrun ({fasterEntries.length})</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {fasterEntries.map((entry, i) => (
                  <SpeedTierSprite key={i} entry={entry} size={Math.abs(entry.diff) <= 25 ? "md" : "sm"} />
                ))}
              </div>
            </div>
          )}

          {/* Slower group (they outrun user) */}
          {slowerEntries.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[8px] font-semibold text-red-600 dark:text-red-400 uppercase">
                <TrendingDown className="w-2.5 h-2.5" />
                <span>Outspeed by ({slowerEntries.length})</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {slowerEntries.map((entry, i) => (
                  <SpeedTierSprite key={i} entry={entry} size={Math.abs(entry.diff) <= 25 ? "md" : "sm"} />
                ))}
              </div>
            </div>
          )}

          {/* Ties */}
          {tieEntries.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[8px] font-semibold text-amber-600 dark:text-amber-400 uppercase">
                <Minus className="w-2.5 h-2.5" />
                <span>Ties ({tieEntries.length})</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tieEntries.map((entry, i) => (
                  <SpeedTierSprite key={i} entry={entry} size="md" />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Expanded table view */}
        {expanded && (
          <div className="border-t border-gray-100 dark:border-white/5">
            <div className="px-3 py-1 bg-gray-100/50 dark:bg-white/[0.03] grid grid-cols-[1fr_48px_60px] gap-3 items-center text-[8px] font-semibold text-muted-foreground uppercase">
              <span>Pok&eacute;mon</span>
              <span className="text-right font-bold">Speed</span>
              <span className="text-right">vs You</span>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {entries.map((entry, i) => (
                <SpeedTierRow key={i} entry={entry} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SpeedTierSprite({ entry, size }: { entry: AssistSpeedEntry; size: "sm" | "md" }) {
  const isClose = Math.abs(entry.diff) <= 25;
  const w = size === "md" ? "w-8 h-8" : "w-6 h-6";
  const badgeSize = size === "md" ? "text-[7px]" : "text-[6px]";

  let borderColor = "";
  if (entry.comparison === "faster") {
    borderColor = isClose ? "border-emerald-400 dark:border-emerald-500" : "border-emerald-300 dark:border-emerald-600/50";
  } else if (entry.comparison === "slower") {
    borderColor = isClose ? "border-red-400 dark:border-red-500" : "border-red-300 dark:border-red-600/50";
  } else {
    borderColor = "border-amber-400 dark:border-amber-500";
  }

  return (
    <div
      className={cn(
        "relative group shrink-0",
        w,
        "rounded-lg border-2 bg-white dark:bg-gray-900",
        borderColor,
        "transition-transform hover:scale-110"
      )}
    >
      <Image
        src={spriteUrl(entry.pokemon.sprite)}
        alt={entry.pokemonName}
        fill
        className="object-contain"
        unoptimized
      />
      {entry.isScarf && (
        <span className={cn(
          "absolute top-0 right-0 px-0.5 rounded-bl bg-amber-400 text-amber-900 font-bold",
          badgeSize
        )}>
          SC
        </span>
      )}
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 rounded bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[8px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
        {entry.pokemonName}
        <span className="ml-1 opacity-75">{entry.speed}</span>
        <span className={cn(
          "ml-1",
          entry.comparison === "faster" ? "text-emerald-300 dark:text-emerald-400" :
          entry.comparison === "slower" ? "text-red-300 dark:text-red-400" :
          "text-amber-300 dark:text-amber-400"
        )}>
          {speedComparisonText(entry.comparison, entry.diff)}
        </span>
      </div>
    </div>
  );
}

// ── Speed Tier Row (expanded table view) ────────────────────────────────────

function SpeedTierRow({ entry }: { entry: AssistSpeedEntry }) {
  return (
    <div className="px-3 py-1 grid grid-cols-[1fr_48px_60px] gap-3 items-center transition-colors hover:bg-gray-500/[0.02]">
      <div className="flex items-center gap-2 min-w-0">
        <div className="relative w-5 h-5 shrink-0">
          <Image
            src={spriteUrl(entry.pokemon.sprite)}
            alt={entry.pokemonName}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        {entry.isScarf && (
          <span className="text-[7px] px-1 rounded bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 font-bold shrink-0">SCARF</span>
        )}
        <span className="text-[10px] font-medium truncate">{entry.pokemonName}</span>
      </div>

      <span className="text-[10px] text-right font-bold tabular-nums">{entry.speed}</span>

      <div className="flex items-center gap-1 justify-end">
        {speedComparisonIcon(entry.comparison)}
        <span className="text-[9px] font-bold tabular-nums">
          {speedComparisonText(entry.comparison, entry.diff)}
        </span>
      </div>
    </div>
  );
}

// ── KO Section ──────────────────────────────────────────────────────────────

function KOSection({
  title,
  icon,
  entries,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  entries: KOEntry[];
  color: string;
}) {
  if (entries.length === 0) return null;

  return (
    <div className="space-y-1.5">
      <div className={cn("flex items-center gap-1.5 text-[10px] font-bold uppercase", color)}>
        {icon}
        <span>{title}</span>
        <span className="text-[8px] text-muted-foreground font-normal">({entries.length})</span>
      </div>
      <div className="space-y-1">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-[9px] text-muted-foreground truncate">
                  {entry.attackerName} uses <span className="font-medium text-foreground">{entry.moveName}</span>
                  {entry.attackerItem && <span className="ml-1 text-[8px] px-1 rounded bg-gray-200 dark:bg-white/10 text-muted-foreground">{entry.attackerItem}</span>}
                  {entry.attackerAtkSp === 32 && <span className="ml-1 text-[8px] text-muted-foreground">32 Atk SP</span>}
                  {entry.attackerSpkSp === 32 && <span className="ml-1 text-[8px] text-muted-foreground">32 SpA SP</span>}
                </p>
                <p className="text-[8px] text-muted-foreground mt-0.5">
                  vs {entry.defenderName} &middot; Nature: {entry.attackerNature ?? "?"}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[9px] font-bold tabular-nums">
                  {entry.damageMin}-{entry.damageMax}
                </p>
                <p className="text-[8px] text-muted-foreground tabular-nums">
                  {Math.round(entry.percentMin)}-{Math.round(entry.percentMax)}%
                </p>
                {(entry.isOHKO || entry.is2HKO) && (
                  <p className={cn(
                    "text-[7px] font-bold uppercase mt-0.5",
                    entry.isOHKO ? "text-red-500" : "text-amber-500"
                  )}>
                    {entry.isOHKO ? "OHKO" : "2HKO"}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Per-Pokemon Result Card ─────────────────────────────────────────────────

function PokemonResultCard({ result }: { result: AssistPokemonResult }) {
  const [expanded, setExpanded] = useState(true);

  if (result.pokemonName === "Empty Slot") return null;

  const hasSpeedEntries = result.speedEntries.length > 0;
  const hasKOData = result.threatenedBy.length > 0 || result.youKO.length > 0 || result.survivesAndThreatens.length > 0;

  return (
    <div className="border rounded-xl overflow-hidden bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/10">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <div className="relative w-8 h-8 shrink-0">
          <Image
            src={spriteUrl(POKEMON_SEED.find(p => p.name === result.pokemonName)?.sprite || "")}
            alt={result.pokemonName}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="flex-1 text-left min-w-0">
          <p className="text-[12px] font-bold truncate">{result.pokemonName}</p>
          <p className="text-[9px] text-muted-foreground">Speed: {result.speedValue}</p>
        </div>
        <div className="flex items-center gap-2">
          {hasSpeedEntries && (
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300 font-bold">
              {result.speedEntries.length} threats
            </span>
          )}
          {hasKOData && (
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 font-bold">
              KO data
            </span>
          )}
          <Sparkles className={cn("w-3.5 h-3.5 transition-transform", expanded ? "rotate-90" : "")} />
        </div>
      </button>

      {/* Body */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 dark:border-white/5 pt-3 space-y-4">
          {/* Speed Tiers */}
          {hasSpeedEntries && (
            <SpeedTierBar entries={result.speedEntries} />
          )}

          {/* KO Thresholds */}
          {(result.threatenedBy.length > 0 || result.youKO.length > 0 || result.survivesAndThreatens.length > 0) && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Swords className="w-3 h-3 text-amber-500" />
                <span className="text-[9px] font-bold uppercase text-amber-600 dark:text-amber-400">Key KO Thresholds</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <KOSection
                  title="Threats KO you"
                  icon={<AlertTriangle className="w-3 h-3" />}
                  entries={result.threatenedBy}
                  color="text-red-500"
                />
                <KOSection
                  title="You KO threats"
                  icon={<Swords className="w-3 h-3" />}
                  entries={result.youKO}
                  color="text-emerald-500"
                />
                <KOSection
                  title="Survives + threatens back"
                  icon={<Shield className="w-3 h-3" />}
                  entries={result.survivesAndThreatens}
                  color="text-sky-500"
                />
              </div>
            </div>
          )}

          {/* Empty state */}
          {!hasSpeedEntries && !hasKOData && (
            <div className="text-center py-4 text-muted-foreground">
              <p className="text-[10px]">No relevant meta threats within ±50 speed points.</p>
              <p className="text-[9px] mt-1">Add more common sets to USAGE_DATA for deeper analysis.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────

export default function AssistPage() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [teamName, setTeamName] = useState("My Team");
  const [slots, setSlots] = useState<TeamSlot[]>([]);
  const [result, setResult] = useState<AssistTeamResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);

  // Load team on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shortId = params.get("s");

    if (shortId) {
      loadTeamFromAPI(shortId).then(team => {
        if (team && team.some(s => s.pokemon !== null)) {
          setSlots(team);
          setTeamName("Shared Team");
        } else {
          setError("No team found. Check the share link and try again.");
        }
      });
    } else {
      // Try ?team=last first, then fall back to any saved team
      const last = getLastTeam();
      if (last && last.slots.length > 0) {
        const team = deserializeTeam(last.slots);
        if (team.some(s => s.pokemon !== null)) {
          setSlots(team);
          setTeamName(last.name || "My Team");
          return;
        }
      }

      // Fall back: try any saved team from the teams list
      const savedTeams = getSavedTeams();
      if (savedTeams.length > 0) {
        const latest = savedTeams.sort((a, b) => b.updatedAt - a.updatedAt)[0];
        const team = deserializeTeam(latest.slots);
        if (team.some(s => s.pokemon !== null)) {
          setSlots(team);
          setTeamName(latest.name || "My Team");
          return;
        }
      }

      setError("No team found. Build a team in the Team Builder first, then click &quot;Run Assist Analysis&quot;.");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const runAnalysis = useCallback(() => {
    if (slots.length === 0) {
      setError("No team loaded. Make sure you have at least one Pokemon selected.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    // Run analysis synchronously (it's fast — pure JS)
    try {
      const analysisResult = analyzeTeam(slots, teamName);
      setResult(analysisResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Analysis failed.");
    } finally {
      setLoading(false);
    }
  }, [slots, teamName]);

  const nonEmptySlots = slots.filter(s => s.pokemon !== null);
  const hasTeam = nonEmptySlots.length > 0;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-16 z-40 border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shrink-0">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
          <Link href="/team-builder" className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <h1 className="text-lg font-bold">{t("assist.title")}</h1>
          </div>
          <div className="flex-1" />
          <button
            onClick={() => setShowChat(!showChat)}
            className={cn(
              "p-2 rounded-lg transition-colors flex items-center gap-1.5",
              showChat
                ? "bg-pink-500 text-white hover:bg-pink-600"
                : "hover:bg-gray-100 dark:hover:bg-white/5 text-muted-foreground"
            )}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-medium hidden sm:inline">Chat</span>
          </button>
        </div>
      </header>

      {/* Content area with optional chat panel */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Main content */}
        <main className={cn(
          "flex-1 overflow-y-auto",
          showChat ? "max-w-[calc(100%-320px)]" : "max-w-[1920px]"
        )} style={{ height: "calc(100vh - 4rem)" }}>
          <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6 overflow-x-hidden">
        {/* Error state */}
        {error && (
          <div className="p-4 rounded-xl border bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-700 dark:text-red-300">{error}</p>
                <Link
                  href="/team-builder"
                  className="text-xs text-red-600 dark:text-red-400 underline mt-1 inline-block"
                >
                  Go to Team Builder &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Team info + Run button */}
        {hasTeam && !result && (
          <div className="p-4 rounded-xl border bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">{teamName}</p>
                <p className="text-xs text-muted-foreground">
                  {nonEmptySlots.length} Pok&eacute;mon &middot; Click below to run analysis
                </p>
              </div>
              <button
                onClick={runAnalysis}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white font-bold text-sm flex items-center gap-2 transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Run Assist Analysis
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="space-y-4">
            {/* Summary bar */}
            <div className="p-4 rounded-xl border bg-gradient-to-r from-pink-50 to-amber-50 dark:from-pink-500/5 dark:to-amber-500/5 border-pink-200/50 dark:border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <h2 className="text-sm font-bold">{result.teamName}</h2>
              </div>
              <p className="text-xs text-muted-foreground">
                Analysis against top {30} meta threats &middot; {result.results.filter(r => r.speedEntries.length > 0).length} Pok&eacute;mon with speed threats &middot; {result.results.filter(r => r.threatenedBy.length > 0).length} Pok&eacute;mon with defensive concerns
              </p>
            </div>

            {/* Per-pokemon results */}
            {result.results.map((r, i) => (
              <PokemonResultCard key={i} result={r} />
            ))}

            {/* Re-run button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={runAnalysis}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 font-medium text-sm flex items-center gap-2 transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Re-run Analysis
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Loading state */}
        {loading && !result && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-pink-500" />
          </div>
        )}
        </div>
        </main>

        {/* Chat side panel */}
        {showChat && (
          <aside className="w-80 border-l bg-background shrink-0 flex flex-col h-[calc(100vh-4rem)]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span className="text-xs font-bold">AI Assistant</span>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <AssistantChat teamSlots={slots} teamName={teamName} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
