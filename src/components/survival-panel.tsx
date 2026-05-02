"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Shield, Swords, Skull, HeartPulse, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { spriteUrl } from "@/lib/sprite-url";
import type { ChampionsPokemon, BaseStats, StatPoints, PokemonType } from "@/lib/types";
import type { NatureName } from "@/lib/engine/natures";
import {
  calcSurvivalScenario,
  suggestSurvivalInvestments,
  optimizeSPForSurvival,
  loadThreat,
  getThreatDamagingMoves,
  getBestOffensiveMove,
  type ThreatSet,
  type SurvivalSuggestion,
} from "@/lib/engine/survival-calc";
import { calculateStats } from "@/lib/engine/stat-calc";
import { getMatchup } from "@/lib/engine/type-chart";
import { SearchSelect, type SearchSelectOption } from "@/components/search-select";
import { useI18n } from "@/lib/i18n";

import { POKEMON_SEED } from "@/lib/pokemon-data";

interface SurvivalPanelProps {
  userPokemon: ChampionsPokemon;
  userBaseStats: BaseStats;
  userSP: StatPoints;
  userNature: NatureName;
  userItem?: string;
  userAbility?: string;
  userMoves: string[];
  onSPChange?: (sp: StatPoints) => void;
}

export function SurvivalPanel({
  userPokemon,
  userBaseStats,
  userSP,
  userNature,
  userItem,
  userAbility,
  userMoves,
  onSPChange,
}: SurvivalPanelProps) {
  const { t, tp, tm, tt } = useI18n();
  const [selectedThreatId, setSelectedThreatId] = useState<string>("");
  const [selectedMove, setSelectedMove] = useState<string>("");
  const [require2HKO, setRequire2HKO] = useState(false);


  // Full roster — all Pokemon available as threats
  const threatOptions: SearchSelectOption[] = useMemo(() => {
    return POKEMON_SEED.map((p) => ({
      value: String(p.id),
      label: p.name,
      badge: p.types[0].slice(0, 3).toUpperCase(),
      badgeColor: TYPE_COLORS[p.types[0]] ?? "#888",
    }));
  }, []);

  const threat = useMemo(() => {
    if (!selectedThreatId) return null;
    return loadThreat(Number(selectedThreatId));
  }, [selectedThreatId]);

  // ALL damaging moves from the Pokemon's FULL movepool — not just the set's 4 moves
  const allDamagingMoves = useMemo(() => {
    if (!threat) return [];
    // Use the full movepool, not just the set's moves
    return threat.pokemon.moves
      .filter(m => m.category !== "status" && (m.power ?? 0) > 0)
      .map(m => m.name);
  }, [threat]);

  // Auto-select first move when threat changes
  useEffect(() => {
    if (allDamagingMoves.length > 0 && (!selectedMove || !allDamagingMoves.includes(selectedMove))) {
      setSelectedMove(allDamagingMoves[0]);
    }
  }, [allDamagingMoves, selectedMove]);



  const scenario = useMemo(() => {
    if (!threat || !selectedMove) return null;
    return calcSurvivalScenario(
      userBaseStats,
      userSP,
      userNature,
      userPokemon.types,
      userAbility ?? "",
      userItem ?? "",
      threat,
      selectedMove,
      { isDoubles: true }
    );
  }, [userBaseStats, userSP, userNature, userPokemon.types, userAbility, userItem, threat, selectedMove]);

  const suggestions = useMemo(() => {
    if (!threat || !selectedMove) return [];
    return suggestSurvivalInvestments(
      userBaseStats,
      userSP,
      userNature,
      userPokemon.types,
      userAbility ?? "",
      userItem ?? "",
      threat,
      selectedMove,
      require2HKO
    );
  }, [userBaseStats, userSP, userNature, userPokemon.types, userAbility, userItem, threat, selectedMove, require2HKO]);

  const returnDamage = useMemo(() => {
    if (!threat || userMoves.length === 0) return null;
    return getBestOffensiveMove(
      userMoves,
      userBaseStats,
      userSP,
      userNature,
      userPokemon.types,
      userAbility ?? "",
      userItem ?? "",
      threat
    );
  }, [userMoves, userBaseStats, userSP, userNature, userPokemon.types, userAbility, userItem, threat]);

  const userStats = useMemo(() => calculateStats(userBaseStats, userSP, userNature), [userBaseStats, userSP, userNature]);

  // ── SMART AUTO-ADJUST: when threat/move changes, run the optimizer which
  // finds the MINIMUM bulk needed to survive and dumps everything else into
  // offense (Speed → Attack → SpAtk).  Also trims excess bulk if the user
  // was over-invested.
  const lastAutoCombo = useRef<string>("");

  useEffect(() => {
    if (!threat || !selectedMove || !onSPChange) return;

    const comboKey = `${selectedThreatId}-${selectedMove}-${require2HKO}`;
    if (lastAutoCombo.current === comboKey) return; // already handled this combo

    const optimized = optimizeSPForSurvival(
      userBaseStats,
      userSP,
      userNature,
      userPokemon.types,
      userAbility ?? "",
      userItem ?? "",
      threat,
      selectedMove,
      require2HKO
    );

    if (optimized) {
      // Only apply if something actually changed
      const changed = (Object.keys(optimized) as (keyof StatPoints)[]).some(
        (k) => optimized[k] !== userSP[k]
      );
      if (changed) onSPChange(optimized);
    }

    lastAutoCombo.current = comboKey;
  }, [
    selectedThreatId,
    selectedMove,
    require2HKO,
    threat,
    userBaseStats,
    userSP,
    userNature,
    userPokemon.types,
    userAbility,
    userItem,
    onSPChange,
  ]);

  const handleApplySuggestion = useCallback((suggestion: SurvivalSuggestion) => {
    if (!onSPChange) return;
    const newSP = { ...userSP };
    for (const [stat, delta] of Object.entries(suggestion.spChanges)) {
      newSP[stat as keyof StatPoints] = Math.max(0, Math.min(MAX_PER_STAT, newSP[stat as keyof StatPoints] + (delta ?? 0)));
    }
    onSPChange(newSP);
  }, [onSPChange, userSP]);

  if (!threat) {
    return (
      <div className="mt-3 border rounded-xl overflow-hidden bg-white/40 dark:bg-white/[0.03]">
        <div className="px-3 py-2 border-b bg-emerald-500/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] font-bold">{t("survivalCalc.title")}</span>
          </div>
        </div>
        <div className="px-3 py-4">
          <p className="text-[10px] text-muted-foreground mb-2">{t("survivalCalc.selectThreat")}</p>
          <SearchSelect
            value={selectedThreatId}
            options={threatOptions}
            onChange={setSelectedThreatId}
            placeholder={t("survivalCalc.searchPlaceholder")}
          />
        </div>
      </div>
    );
  }

  const moveObj = threat.pokemon.moves.find(m => m.name === selectedMove);
  const effectiveness = moveObj ? getMatchup(moveObj.type, userPokemon.types) : 1;

  // Determine survival status for messaging
  const survivalStatus = scenario
    ? scenario.survivesMax
      ? "survives"
      : scenario.survivesMin
      ? "rolls"
      : "faints"
    : null;

  // Health bar: show REMAINING HP after damage, not damage taken
  const remainingMin = scenario ? Math.max(0, 100 - scenario.hpPercent[1]) : 0;
  const remainingMax = scenario ? Math.max(0, 100 - scenario.hpPercent[0]) : 0;

  return (
    <div className="mt-3 border rounded-xl overflow-hidden bg-white/40 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="px-3 py-2 border-b bg-emerald-500/[0.04] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[11px] font-bold">{t("survivalCalc.title")}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setRequire2HKO(false)}
            className={cn(
              "px-2 py-0.5 rounded text-[9px] font-medium transition-colors",
              !require2HKO
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
                : "bg-gray-100 text-muted-foreground dark:bg-white/5"
            )}
          >
            {t("survivalCalc.modeOHKO")}
          </button>
          <button
            onClick={() => setRequire2HKO(true)}
            className={cn(
              "px-2 py-0.5 rounded text-[9px] font-medium transition-colors",
              require2HKO
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
                : "bg-gray-100 text-muted-foreground dark:bg-white/5"
            )}
          >
            {t("survivalCalc.mode2HKO")}
          </button>
        </div>
      </div>

      {/* Threat selector */}
      <div className="px-3 py-2 border-b">
        <SearchSelect
          value={selectedThreatId}
          options={threatOptions}
          onChange={setSelectedThreatId}
          placeholder={t("survivalCalc.searchPlaceholder")}
          triggerBadge={threat ? {
            text: threat.pokemon.types[0].slice(0, 3).toUpperCase(),
            color: TYPE_COLORS[threat.pokemon.types[0]] ?? "#888",
          } : null}
        />
      </div>

      {/* Threat info + Move selector */}
      <div className="px-3 py-2 border-b flex items-center gap-2">
        <div className="relative w-7 h-7 shrink-0">
          <Image
            src={spriteUrl(threat.pokemon.sprite)}
            alt={threat.pokemon.name}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold">{tp(threat.pokemon.name)}</p>
          <p className="text-[9px] text-muted-foreground truncate">
            {threat.set.nature} · {threat.set.ability} · {threat.set.item}
          </p>
        </div>
        {/* Move selector */}
        <div className="min-w-[180px]">
          <SearchSelect
            value={selectedMove}
            options={allDamagingMoves.map(moveName => {
              const move = threat.pokemon.moves.find(m => m.name === moveName);
              return {
                value: moveName,
                label: tm(moveName),
                sub: move ? `${move.type} · ${move.category}${move.power ? ` · ${move.power}bp` : ""}${move.accuracy ? ` · ${move.accuracy}%` : ""} · ${move.pp}pp` : "",
                badge: move ? tt(move.type) : undefined,
                badgeColor: move ? `${TYPE_COLORS[move.type]}AA` : undefined,
              };
            })}
            onChange={setSelectedMove}
            placeholder={t("survivalCalc.selectMove")}
            triggerBadge={moveObj ? { text: tt(moveObj.type), color: `${TYPE_COLORS[moveObj.type]}AA` } : null}
          />
        </div>
      </div>

      {/* Damage Result with Health Bar */}
      {scenario && (
        <div className="px-3 py-3 border-b">
          {/* Survival status message */}
          <div className="flex items-center gap-2 mb-2">
            {survivalStatus === "survives" && (
              <>
                <HeartPulse className="w-4 h-4 text-emerald-500" />
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  {require2HKO ? t("survivalCalc.survives2HKO") : t("survivalCalc.survives")}
                </span>
              </>
            )}
            {survivalStatus === "rolls" && (
              <>
                <TrendingDown className="w-4 h-4 text-amber-500" />
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                  {t("survivalCalc.rollDependent")}
                </span>
              </>
            )}
            {survivalStatus === "faints" && (
              <>
                <Skull className="w-4 h-4 text-red-500" />
                <span className="text-[11px] font-bold text-red-500">
                  {t("survivalCalc.faints")}
                </span>
              </>
            )}
            <span className="text-[9px] text-muted-foreground ml-auto">
              {scenario.koChanceText}
            </span>
          </div>

          {/* Health Bar — shows REMAINING HP after hit */}
          <div className="h-6 rounded-lg bg-red-100 dark:bg-red-500/10 overflow-hidden border border-red-200 dark:border-red-500/20 relative">
            {/* Remaining HP portion */}
            <div
              className={cn(
                "h-full transition-all duration-500",
                remainingMin >= 50
                  ? "bg-emerald-400"
                  : remainingMin >= 25
                  ? "bg-amber-400"
                  : "bg-red-400"
              )}
              style={{ width: `${remainingMax}%` }}
            />
            {/* Min remaining marker line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/80 dark:bg-black/60 z-10"
              style={{ left: `${remainingMin}%` }}
            />
            {/* Center text */}
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white drop-shadow z-10">
              {remainingMin}-{remainingMax}% remaining
            </span>
          </div>
          {/* Labels below bar */}
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-muted-foreground">
              {t("survivalCalc.remainingHP")}: <span className="font-bold tabular-nums">{remainingMin}–{remainingMax}%</span>
            </span>
            <span className="text-[9px] text-muted-foreground">
              {scenario.damageResult.damage[0]}–{scenario.damageResult.damage[1]} / {userStats.hp} HP
            </span>
          </div>

          {/* Effectiveness + category badges */}
          <div className="flex items-center gap-1.5 mt-2">
            {moveObj && (
              <span className={cn(
                "text-[9px] font-bold px-1.5 py-0.5 rounded",
                moveObj.category === "physical"
                  ? "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
                  : "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300"
              )}>
                {moveObj.category === "physical" ? "PHY" : "SPE"}
              </span>
            )}
            {effectiveness !== 1 && (
              <span className={cn(
                "text-[9px] font-bold px-1.5 py-0.5 rounded",
                effectiveness > 1
                  ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300"
                  : effectiveness < 1 && effectiveness > 0
                  ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300"
                  : "bg-gray-100 text-gray-600 dark:bg-white/10"
              )}>
                {effectiveness > 1 ? `×${effectiveness} Super Effective` : effectiveness === 0 ? "Immune" : `×${effectiveness} Resisted`}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Survival Suggestions */}
      {suggestions.length > 0 && (
        <div className="px-3 py-2.5 border-b bg-emerald-500/[0.03]">
          <p className="text-[9px] text-muted-foreground uppercase font-bold mb-2">
            {t("survivalCalc.suggestions")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {suggestions.slice(0, 5).map((s, i) => (
              <button
                key={i}
                onClick={() => handleApplySuggestion(s)}
                className={cn(
                  "px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all border active:scale-95",
                  s.type === "reallocate"
                    ? "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20 hover:bg-sky-100 dark:hover:bg-sky-500/20"
                    : "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/20"
                )}
                title={s.description}
              >
                {s.type === "reallocate" && "⇄ "}
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No survival possible */}
      {scenario && !scenario.survivesMin && suggestions.length === 0 && (
        <div className="px-3 py-2.5 border-b bg-red-500/[0.03]">
          <div className="flex items-center gap-1.5">
            <Skull className="w-3.5 h-3.5 text-red-500" />
            <p className="text-[10px] text-red-500 font-bold">
              {t("survivalCalc.cannotSurvive")}
            </p>
          </div>
        </div>
      )}

      {/* Return Damage */}
      {returnDamage && (
        <div className="px-3 py-2.5 border-b">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] text-muted-foreground uppercase font-bold flex items-center gap-1">
              <Swords className="w-3 h-3" />
              {t("survivalCalc.returnDamage")}
            </span>
            <span className="text-[10px] font-bold">
              {returnDamage.damageResult.percentHP[0]}–{returnDamage.damageResult.percentHP[1]}%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium">{tm(returnDamage.moveName)}</span>
            <span className="text-[9px] text-muted-foreground">
              {returnDamage.damageResult.koChance?.text ?? ""}
            </span>
          </div>
        </div>
      )}

      {/* User bulk stats — animated when changed */}
      <div className="px-3 py-2.5 border-t bg-gray-50/50 dark:bg-white/[0.02] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <StatPill label="HP" value={userStats.hp} color="emerald" />
          <StatPill label="Def" value={userStats.defense} color="sky" />
          <StatPill label="SpD" value={userStats.spDef} color="violet" />
        </div>
        <span className="text-[9px] text-muted-foreground">
          SP: {userSP.hp}/{userSP.defense}/{userSP.spDef}
        </span>
      </div>
    </div>
  );
}

function StatPill({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "emerald" | "sky" | "violet";
}) {
  const colorMap = {
    emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
    sky: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300 border-sky-200 dark:border-sky-500/30",
    violet: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 border-violet-200 dark:border-violet-500/30",
  };
  return (
    <div
      key={value}
      className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-medium", colorMap[color])}
    >
      <span>{label}</span>
      <span className="font-bold tabular-nums">{value}</span>
    </div>
  );
}

const MAX_PER_STAT = 32;

const TYPE_COLORS: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};
