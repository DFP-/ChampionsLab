"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { TrendingUp, TrendingDown, Minus, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { spriteUrl } from "@/lib/sprite-url";
import type { ChampionsPokemon, BaseStats, StatPoints } from "@/lib/types";
import type { NatureName } from "@/lib/engine/natures";
import {
  buildSpeedTiers,
  compareUserSpeed,
  spNeededToOutspeed,
  speedComparisonLabel,
  getSpeedBoostFromMoves,
  SPEED_BOOST_MOVES_PLUS_1,
  SPEED_BOOST_MOVES_PLUS_2,
} from "@/lib/engine/speed-tiers";
import { getItemSpeedMultiplier } from "@/lib/engine/items";
import { ABILITY_DATA } from "@/lib/engine/ability-data";
import { useI18n } from "@/lib/i18n";

interface SpeedTierPanelProps {
  userPokemon: ChampionsPokemon;
  userBaseStats: BaseStats;
  userSP: StatPoints;
  userNature: NatureName;
  userItem?: string;
  userAbility?: string;
  userMoves: string[];
  onSpeedChange?: (value: number) => void;
}

export function SpeedTierPanel({
  userPokemon,
  userBaseStats,
  userSP,
  userNature,
  userItem,
  userAbility,
  userMoves,
  onSpeedChange,
}: SpeedTierPanelProps) {
  const { t } = useI18n();
  const [weatherActive, setWeatherActive] = useState(false);
  const [simulatedBoost, setSimulatedBoost] = useState(0);
  const userRowRef = useRef<HTMLDivElement>(null);

  // Detect speed-boosting moves in the pokemon's movepool
  const availableSpeedMoves = useMemo(() => {
    const moves = userPokemon.moves.map((m) => m.name);
    const plus1 = moves.filter((m) => SPEED_BOOST_MOVES_PLUS_1.has(m));
    const plus2 = moves.filter((m) => SPEED_BOOST_MOVES_PLUS_2.has(m));
    return { plus1, plus2, hasAny: plus1.length > 0 || plus2.length > 0 };
  }, [userPokemon]);

  const comparison = useMemo(
    () =>
      compareUserSpeed(
        userBaseStats,
        userSP,
        userNature,
        userItem,
        userAbility,
        userMoves,
        { weatherActive, setupBoost: simulatedBoost }
      ),
    [userBaseStats, userSP, userNature, userItem, userAbility, userMoves, weatherActive, simulatedBoost]
  );

  // Auto-scroll user row into view when rank changes
  useEffect(() => {
    if (userRowRef.current) {
      userRowRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [comparison.userRank]);

  const speedBoostStage = useMemo(() => getSpeedBoostFromMoves(userMoves), [userMoves]);

  const abilityEffect = userAbility ? ABILITY_DATA[userAbility] : undefined;
  const hasWeatherSpeed = !!abilityEffect?.weatherSpeed;
  const itemSpeedMult = userItem ? getItemSpeedMultiplier(userItem) : 1;

  // Build merged list: roster entries + user inserted at correct position
  // Show only ±15 around user's rank for focus
  const visibleList = useMemo(() => {
    const all = buildSpeedTiers();
    const userSpeed = comparison.userSpeed;
    const userRank = comparison.userRank;

    // Insert user into sorted list
    const merged: {
      pokemon: ChampionsPokemon;
      rawSpeed: number;
      isUser: boolean;
      originalRank?: number;
    }[] = [];

    let userInserted = false;
    let rank = 1;

    for (const entry of all) {
      if (!userInserted && userSpeed > entry.rawSpeed) {
        merged.push({
          pokemon: userPokemon,
          rawSpeed: userSpeed,
          isUser: true,
        });
        userInserted = true;
      }
      if (entry.pokemon.id !== userPokemon.id) {
        merged.push({
          pokemon: entry.pokemon,
          rawSpeed: entry.rawSpeed,
          isUser: false,
          originalRank: rank,
        });
        rank++;
      }
    }

    if (!userInserted) {
      merged.push({
        pokemon: userPokemon,
        rawSpeed: userSpeed,
        isUser: true,
      });
    }

    // Find user index and slice ±15 around them
    const userIdx = merged.findIndex((e) => e.isUser);
    const start = Math.max(0, userIdx - 15);
    const end = Math.min(merged.length, userIdx + 16);
    return merged.slice(start, end);
  }, [comparison.userSpeed, comparison.userRank, userPokemon]);

  return (
    <div className="mt-3 border rounded-xl overflow-hidden bg-white/40 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="px-3 py-2 border-b bg-pink-500/[0.04] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-pink-500" />
          <span className="text-[11px] font-bold">{t("speedTiers.title")}</span>
          <span className="text-[10px] text-muted-foreground">
            #{comparison.userRank} / {comparison.totalThreats}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {hasWeatherSpeed && (
            <button
              onClick={() => setWeatherActive((v) => !v)}
              className={cn(
                "px-2 py-0.5 rounded text-[9px] font-medium transition-colors",
                weatherActive
                  ? "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300"
                  : "bg-gray-100 text-muted-foreground dark:bg-white/5"
              )}
            >
              {weatherActive ? t("speedTiers.weatherOn") : t("speedTiers.weatherOff")}
            </button>
          )}
          <span className="text-[10px] font-bold tabular-nums text-pink-600 dark:text-pink-400">
            {comparison.userSpeed}
          </span>
        </div>
      </div>

      {/* Speed chips + setup move controls */}
      <div className="px-3 py-2 border-b flex flex-wrap items-center gap-1.5">
        <SpeedChip label={t("speedTiers.base")} value={comparison.userInfo.raw} active={simulatedBoost === 0 && speedBoostStage === 0} />
        {itemSpeedMult !== 1 && (
          <SpeedChip label={userItem!} value={comparison.userInfo.withItem} active={simulatedBoost === 0 && speedBoostStage === 0} color="amber" />
        )}
        {hasWeatherSpeed && weatherActive && (
          <SpeedChip label={t("speedTiers.ability")} value={comparison.userInfo.withAbility} active={false} color="sky" />
        )}
        {simulatedBoost > 0 && (
          <SpeedChip label={`Setup +${simulatedBoost}`} value={comparison.userInfo.afterSetup} active color="emerald" />
        )}
        {simulatedBoost === 0 && speedBoostStage > 0 && (
          <SpeedChip label={t("speedTiers.afterSetup")} value={comparison.userInfo.afterSetup} active color="emerald" />
        )}
        {simulatedBoost === 0 && speedBoostStage === 0 && (
          <>
            <SpeedChip label="+1" value={comparison.userInfo.afterPlus1} active={false} color="emerald" small />
            <SpeedChip label="+2" value={comparison.userInfo.afterPlus2} active={false} color="emerald" small />
          </>
        )}
      </div>

      {/* Setup move boost controls */}
      {availableSpeedMoves.hasAny && (
        <div className="px-3 py-2 border-b bg-emerald-500/[0.03]">
          <p className="text-[9px] text-muted-foreground uppercase font-bold mb-1.5">Setup Moves</p>
          <div className="flex flex-wrap gap-2">
            {[...availableSpeedMoves.plus1, ...availableSpeedMoves.plus2].map((moveName) => {
              const isPlus2 = SPEED_BOOST_MOVES_PLUS_2.has(moveName);
              const stagesPerUse = isPlus2 ? 2 : 1;
              const maxUses = isPlus2 ? 2 : 3;
              return (
                <div key={moveName} className="flex items-center gap-1">
                  <span className="text-[10px] font-medium">{moveName}</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: maxUses + 1 }).map((_, i) => {
                      const active = simulatedBoost === i * stagesPerUse;
                      return (
                        <button
                          key={i}
                          onClick={() => setSimulatedBoost(i * stagesPerUse)}
                          className={cn(
                            "px-1.5 py-0.5 rounded text-[9px] font-bold transition-colors",
                            active
                              ? "bg-emerald-500 text-white"
                              : "bg-gray-100 text-muted-foreground hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10"
                          )}
                        >
                          {i}x
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* User highlight bar */}
      <div className="px-3 py-1.5 border-b bg-pink-500/[0.06] flex items-center gap-2">
        <div className="relative w-5 h-5 shrink-0">
          <Image
            src={spriteUrl(userPokemon.sprite)}
            alt={userPokemon.name}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400">
          {userPokemon.name}
        </span>
        <span className="text-[9px] text-muted-foreground">
          Rank #{comparison.userRank} · Speed {comparison.userSpeed}
        </span>
        <span className="ml-auto text-[9px] font-medium text-pink-500">
          {comparison.fasterThan} faster · {comparison.slowerThan} slower
        </span>
      </div>

      {/* List Header */}
      <div className="px-3 py-1 bg-gray-50/50 dark:bg-white/[0.02] grid grid-cols-[28px_1fr_40px_40px_48px] gap-2 items-center text-[9px] font-semibold text-muted-foreground uppercase">
        <span>#</span>
        <span>{t("speedTiers.pokemon")}</span>
        <span className="text-right">{t("speedTiers.base")}</span>
        <span className="text-right">{t("speedTiers.max")}</span>
        <span className="text-right">{t("speedTiers.vsYou")}</span>
      </div>

      {/* List */}
      <div className="max-h-[280px] overflow-y-auto">
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {visibleList.map((entry) => {
            const comp = entry.isUser
              ? "user"
              : speedComparisonLabel(comparison.userSpeed, entry.rawSpeed);
            const needSP =
              !entry.isUser && comp === "slower"
                ? spNeededToOutspeed(
                    userBaseStats.speed,
                    userSP.speed,
                    userNature,
                    entry.rawSpeed
                  )
                : null;

            return (
              <div
                key={entry.isUser ? "user" : entry.pokemon.id}
                ref={entry.isUser ? userRowRef : undefined}
                className={cn(
                  "px-3 py-1 grid grid-cols-[28px_1fr_40px_40px_48px] gap-2 items-center transition-colors",
                  entry.isUser
                    ? "bg-pink-500/10 dark:bg-pink-500/10 border-l-2 border-l-pink-500"
                    : comp === "faster"
                    ? "hover:bg-emerald-500/[0.02]"
                    : comp === "slower"
                    ? "hover:bg-red-500/[0.02]"
                    : "hover:bg-gray-500/[0.02]"
                )}
              >
                <span className="text-[9px] font-mono text-muted-foreground">
                  {entry.isUser ? comparison.userRank : entry.originalRank}
                </span>

                <div className="flex items-center gap-2 min-w-0">
                  <div className="relative w-5 h-5 shrink-0">
                    <Image
                      src={spriteUrl(entry.pokemon.sprite)}
                      alt={entry.pokemon.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-[10px] truncate",
                        entry.isUser
                          ? "text-pink-600 dark:text-pink-400 font-bold"
                          : "font-medium"
                      )}
                    >
                      {entry.pokemon.name}
                    </p>
                    {needSP !== null && (
                      <p className="text-[8px] text-amber-600 dark:text-amber-400">
                        {needSP === 0
                          ? t("speedTiers.needSp0")
                          : t("speedTiers.needSp", { sp: needSP })}
                      </p>
                    )}
                  </div>
                </div>

                <span className="text-[9px] text-right text-muted-foreground tabular-nums">
                  {entry.pokemon.baseStats.speed}
                </span>

                <span className="text-[9px] text-right font-medium tabular-nums">
                  {entry.rawSpeed}
                </span>

                <div className="flex justify-end">
                  {entry.isUser ? (
                    <span className="text-[9px] font-bold text-pink-500">YOU</span>
                  ) : comp === "faster" ? (
                    <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400">
                      <TrendingUp className="w-2.5 h-2.5" />
                      <span className="text-[8px] font-bold">
                        +{comparison.userSpeed - entry.rawSpeed}
                      </span>
                    </div>
                  ) : comp === "slower" ? (
                    <div className="flex items-center gap-0.5 text-red-500">
                      <TrendingDown className="w-2.5 h-2.5" />
                      <span className="text-[8px] font-bold">
                        -{entry.rawSpeed - comparison.userSpeed}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Minus className="w-2.5 h-2.5" />
                      <span className="text-[8px] font-bold">=</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-1.5 border-t bg-gray-50/50 dark:bg-white/[0.02] flex items-center justify-between text-[9px]">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="w-2.5 h-2.5" />
            {comparison.fasterThan}
          </span>
          <span className="flex items-center gap-0.5 text-red-500">
            <TrendingDown className="w-2.5 h-2.5" />
            {comparison.slowerThan}
          </span>
          <span className="flex items-center gap-0.5 text-amber-500">
            <Minus className="w-2.5 h-2.5" />
            {comparison.speedTies}
          </span>
        </div>
      </div>
    </div>
  );
}

function SpeedChip({
  label,
  value,
  active,
  color = "pink",
  small,
}: {
  label: string;
  value: number;
  active: boolean;
  color?: "pink" | "amber" | "sky" | "emerald" | "violet";
  small?: boolean;
}) {
  const colorMap = {
    pink: "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300 border-pink-200 dark:border-pink-500/30",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 border-amber-200 dark:border-amber-500/30",
    sky: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300 border-sky-200 dark:border-sky-500/30",
    emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
    violet: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 border-violet-200 dark:border-violet-500/30",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 px-1 rounded border font-medium tabular-nums",
        small ? "text-[8px] py-0" : "text-[9px] py-0",
        active
          ? colorMap[color]
          : "bg-gray-100 text-muted-foreground border-gray-200 dark:bg-white/5 dark:border-white/10"
      )}
    >
      <span className="truncate max-w-[60px]">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
