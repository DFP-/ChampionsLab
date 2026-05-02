"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Swords, Sun, CloudRain, Snowflake, Wind, Skull } from "lucide-react";
import { cn } from "@/lib/utils";
import { spriteUrl } from "@/lib/sprite-url";
import type { ChampionsPokemon, BaseStats, StatPoints, PokemonType } from "@/lib/types";
import type { NatureName } from "@/lib/engine/natures";
import { calculateDamage, type DamageResult, type DamageCalcOptions } from "@/lib/engine/damage-calc";
import { calculateStats } from "@/lib/engine/stat-calc";
import { getMatchup } from "@/lib/engine/type-chart";
import { SearchSelect, type SearchSelectOption } from "@/components/search-select";
import { useI18n } from "@/lib/i18n";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { USAGE_DATA } from "@/lib/usage-data";

interface CompactDamageCalcProps {
  userPokemon: ChampionsPokemon;
  userBaseStats: BaseStats;
  userSP: StatPoints;
  userNature: NatureName;
  userItem?: string;
  userAbility?: string;
  userMoves: string[];
}

const WEATHER_OPTIONS = [
  { value: "none", label: "None" },
  { value: "sun", label: "Sun", Icon: Sun },
  { value: "rain", label: "Rain", Icon: CloudRain },
  { value: "sand", label: "Sand", Icon: Wind },
  { value: "snow", label: "Snow", Icon: Snowflake },
] as const;

export function CompactDamageCalc({
  userPokemon, userBaseStats, userSP, userNature, userItem, userAbility, userMoves,
}: CompactDamageCalcProps) {
  const { t, tp, tm } = useI18n();
  const [oppId, setOppId] = useState("");
  const [weather, setWeather] = useState<DamageCalcOptions["weather"]>("none");
  const [isCrit, setIsCrit] = useState(false);
  const [moveA, setMoveA] = useState("");
  const [moveB, setMoveB] = useState("");

  const opp = useMemo(() => {
    if (!oppId) return null;
    const p = POKEMON_SEED.find(x => x.id === Number(oppId));
    if (!p) return null;
    const usage = USAGE_DATA[p.id];
    const set = usage?.[0];
    return {
      pokemon: p,
      baseStats: p.baseStats,
      sp: set?.sp ?? { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
      nature: (set?.nature ?? "Hardy") as NatureName,
      ability: set?.ability ?? p.abilities[0]?.name ?? "",
      item: set?.item ?? "",
      types: p.types,
    };
  }, [oppId]);

  const oppOptions: SearchSelectOption[] = useMemo(() =>
    POKEMON_SEED.map(p => ({
      value: String(p.id),
      label: p.name,
      badge: p.types[0].slice(0, 3).toUpperCase(),
      badgeColor: TYPE_COLORS[p.types[0]] ?? "#888",
    }))
  , []);

  // User's 4 team-builder moves (filtered to attacking only)
  const userAtkMoves = useMemo(() =>
    userMoves
      .map(name => userPokemon.moves.find(m => m.name === name))
      .filter((m): m is NonNullable<typeof m> => !!m && m.category !== "status" && (m.power ?? 0) > 0)
      .map(m => m.name)
  , [userMoves, userPokemon]);

  // Enemy moves: start from competitive set, user can change them
  const [oppMoves, setOppMoves] = useState<string[]>([]);

  useEffect(() => {
    if (!opp) { setOppMoves([]); return; }
    const usage = USAGE_DATA[opp.pokemon.id];
    const set = usage?.[0];
    const moves = (set?.moves ?? [])
      .map(name => opp.pokemon.moves.find(m => m.name === name))
      .filter((m): m is NonNullable<typeof m> => !!m && m.category !== "status" && (m.power ?? 0) > 0)
      .map(m => m.name);
    const final = moves.length > 0 ? moves : opp.pokemon.moves
      .filter(m => m.category !== "status" && (m.power ?? 0) > 0)
      .sort((a, b) => (b.power ?? 0) - (a.power ?? 0))
      .map(m => m.name)
      .slice(0, 4);
    setOppMoves(final.slice(0, 4));
    setMoveB(final[0] ?? "");
  }, [opp]);

  useEffect(() => { if (userAtkMoves.length && !moveA) setMoveA(userAtkMoves[0]); }, [userAtkMoves, moveA]);

  // All enemy damaging moves for the change selector
  const allOppMoveOptions = useMemo(() => {
    if (!opp) return [];
    return opp.pokemon.moves
      .filter(m => m.category !== "status" && (m.power ?? 0) > 0)
      .map(m => ({ value: m.name, label: m.name }));
  }, [opp]);

  const opts = useMemo(() => ({ isDoubles: true, computeKOChance: true, weather, isCrit }), [weather, isCrit]);

  const calcA = useMemo(() => {
    if (!opp || !moveA) return null;
    return calculateDamage(
      { baseStats: userBaseStats, sp: userSP, nature: userNature, types: userPokemon.types, ability: userAbility ?? "", item: userItem ?? "" },
      { baseStats: opp.baseStats, sp: opp.sp, nature: opp.nature, types: opp.types, ability: opp.ability, item: opp.item },
      moveA, opts
    );
  }, [opp, moveA, userBaseStats, userSP, userNature, userPokemon.types, userAbility, userItem, opts]);

  const calcB = useMemo(() => {
    if (!opp || !moveB) return null;
    return calculateDamage(
      { baseStats: opp.baseStats, sp: opp.sp, nature: opp.nature, types: opp.types, ability: opp.ability, item: opp.item },
      { baseStats: userBaseStats, sp: userSP, nature: userNature, types: userPokemon.types, ability: userAbility ?? "", item: userItem ?? "" },
      moveB, opts
    );
  }, [opp, moveB, userBaseStats, userSP, userNature, userPokemon.types, userAbility, userItem, opts]);

  const userStats = useMemo(() => calculateStats(userBaseStats, userSP, userNature), [userBaseStats, userSP, userNature]);
  const oppStats = useMemo(() => opp ? calculateStats(opp.baseStats, opp.sp, opp.nature) : null, [opp]);

  return (
    <div className="mt-3 border rounded-xl overflow-hidden bg-white/40 dark:bg-white/[0.03]">
      <div className="px-3 py-2 border-b bg-amber-500/[0.04] flex items-center gap-2">
        <Swords className="w-3.5 h-3.5 text-amber-500" />
        <span className="text-[11px] font-bold">{t("damageCalc.title")}</span>
      </div>

      <div className="px-3 py-2 border-b">
        <p className="text-[10px] text-muted-foreground mb-1.5">Select opponent</p>
        <SearchSelect value={oppId} options={oppOptions} onChange={setOppId} placeholder="Search Pokemon..." />
      </div>

      {!opp && <div className="px-3 py-6 text-center"><p className="text-[10px] text-muted-foreground">Pick an opponent to see damage calcs</p></div>}

      {opp && (
        <>
          <div className="px-3 py-2 border-b grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-amber-500/[0.04] border border-amber-200/40 dark:border-amber-500/10 p-2">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="relative w-5 h-5 shrink-0"><Image src={spriteUrl(userPokemon.sprite)} alt={userPokemon.name} fill className="object-contain" unoptimized /></div>
                <span className="text-[10px] font-bold truncate">{tp(userPokemon.name)}</span>
              </div>
              <div className="flex flex-wrap gap-0.5 mb-1">
                {userPokemon.types.map(t => <span key={t} className="text-[8px] px-1 rounded font-bold" style={{ backgroundColor: TYPE_COLORS[t] + "30", color: TYPE_COLORS[t] }}>{t.slice(0,3).toUpperCase()}</span>)}
              </div>
              <div className="text-[9px] text-muted-foreground tabular-nums leading-tight">
                {userStats.hp}HP {userStats.attack}Atk {userStats.defense}Def<br/>{userStats.spAtk}SpA {userStats.spDef}SpD {userStats.speed}Spe
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-200/40 dark:border-white/5 p-2">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="relative w-5 h-5 shrink-0"><Image src={spriteUrl(opp.pokemon.sprite)} alt={opp.pokemon.name} fill className="object-contain" unoptimized /></div>
                <span className="text-[10px] font-bold truncate">{tp(opp.pokemon.name)}</span>
              </div>
              <div className="flex flex-wrap gap-0.5 mb-1">
                {opp.pokemon.types.map(t => <span key={t} className="text-[8px] px-1 rounded font-bold" style={{ backgroundColor: TYPE_COLORS[t] + "30", color: TYPE_COLORS[t] }}>{t.slice(0,3).toUpperCase()}</span>)}
              </div>
              <div className="text-[9px] text-muted-foreground tabular-nums leading-tight">
                {oppStats?.hp ?? 0}HP {oppStats?.attack ?? 0}Atk {oppStats?.defense ?? 0}Def<br/>{oppStats?.spAtk ?? 0}SpA {oppStats?.spDef ?? 0}SpD {oppStats?.speed ?? 0}Spe
              </div>
            </div>
          </div>

          <div className="px-3 py-2 border-b flex items-center gap-1.5 flex-wrap">
            {WEATHER_OPTIONS.map(w => {
              const WIcon = (w as any).Icon;
              return (
                <button key={w.value} onClick={() => setWeather(w.value as typeof weather)} className={cn("px-1.5 py-0.5 rounded text-[9px] font-medium transition-colors flex items-center gap-0.5", weather === w.value ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300" : "bg-gray-100 text-muted-foreground dark:bg-white/5")}>
                  {WIcon ? <WIcon className="w-2.5 h-2.5" /> : null}
                  {w.label}
                </button>
              );
            })}
            <button onClick={() => setIsCrit(v => !v)} className={cn("px-1.5 py-0.5 rounded text-[9px] font-medium transition-colors", isCrit ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300" : "bg-gray-100 text-muted-foreground dark:bg-white/5")}>Crit</button>
          </div>

          {calcA && <ExchangeRow label="You -> Them" moves={userAtkMoves} selected={moveA} onSelect={setMoveA} result={calcA} attackerMoves={userPokemon.moves} defenderTypes={opp.types} color="amber" />}
          {calcB && <ExchangeRow label="Them -> You" moves={oppMoves} selected={moveB} onSelect={setMoveB} result={calcB} attackerMoves={opp.pokemon.moves} defenderTypes={userPokemon.types} color="red" />}

          {/* Enemy move editor */}
          {opp && (
            <div className="px-3 py-2 border-b bg-gray-50/50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-muted-foreground shrink-0">{t("damageCalc.changeMove")}:</span>
                <SearchSelect
                  value={moveB}
                  options={allOppMoveOptions}
                  onChange={(newMove) => {
                    setOppMoves(prev => {
                      const idx = prev.indexOf(moveB);
                      if (idx === -1) return [...prev, newMove].slice(0, 4);
                      const next = [...prev];
                      next[idx] = newMove;
                      return next;
                    });
                    setMoveB(newMove);
                  }}
                  placeholder={t("damageCalc.selectMove")}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function ExchangeRow({ label, moves, selected, onSelect, result, attackerMoves, defenderTypes, color }: {
  label: string; moves: string[]; selected: string; onSelect: (m: string) => void;
  result: DamageResult; attackerMoves: { name: string; category?: string; power?: number | null; type: PokemonType }[];
  defenderTypes: PokemonType[]; color: "amber" | "red";
}) {
  const { tm } = useI18n();
  const move = attackerMoves.find(m => m.name === selected);
  const eff = move ? getMatchup(move.type, defenderTypes) : 1;
  const isKO = result.percentHP[0] >= 100;
  const high = result.percentHP[1] >= 50;

  return (
    <div className="px-3 py-2.5 border-b">
      <div className="flex items-center justify-between mb-1.5">
        <span className={cn("text-[9px] uppercase font-bold", color === "amber" ? "text-amber-600 dark:text-amber-400" : "text-red-500")}>{label}</span>
        <span className="text-[9px] font-bold text-muted-foreground">{result.koChance?.text ?? ""}</span>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-1.5 mb-1.5 scrollbar-hide">
        {moves.slice(0, 6).map(m => {
          const md = attackerMoves.find(x => x.name === m);
          const active = m === selected;
          return (
            <button key={m} onClick={() => onSelect(m)} className={cn("flex-shrink-0 px-2 py-1 rounded-lg text-[9px] font-bold border transition-all active:scale-95", active ? (color === "amber" ? "bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300" : "bg-red-100 text-red-700 border-red-300 dark:bg-red-500/20 dark:text-red-300") : "bg-gray-50 text-muted-foreground border-gray-200 hover:bg-gray-100 dark:bg-white/5 dark:border-white/10")}>
              <span className="flex items-center gap-1">
                <span className={cn("w-1.5 h-1.5 rounded-full", md?.category === "physical" ? "bg-orange-400" : "bg-purple-400")} />
                {tm(m)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="h-6 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 overflow-hidden relative">
        <div className={cn("absolute top-0 bottom-0 left-0 transition-all", isKO ? "bg-red-400" : high ? "bg-red-400" : "bg-amber-400")} style={{ width: `${Math.min(100, result.percentHP[1])}%` }} />
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/80 dark:bg-black/60 z-10" style={{ left: `${Math.min(100, result.percentHP[0])}%` }} />
        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white drop-shadow-sm z-10">{result.percentHP[0]}-{result.percentHP[1]}%</span>
      </div>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1">
          {eff !== 1 && (
            <span className={cn("text-[8px] font-bold px-1 py-0.5 rounded", eff > 1 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300" : eff < 1 && eff > 0 ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300" : "bg-gray-100 text-gray-600")}>
              {eff > 1 ? `x${eff}` : eff === 0 ? "Immune" : `x${eff}`}
            </span>
          )}
          <span className="text-[9px] text-muted-foreground tabular-nums">{result.damage[0]}-{result.damage[1]} dmg</span>
        </div>
        {isKO && <span className="flex items-center gap-0.5 text-[9px] font-bold text-red-500"><Skull className="w-3 h-3" />KO</span>}
        {!isKO && result.is2HKO && <span className="text-[9px] font-bold text-amber-500">2HKO</span>}
      </div>
    </div>
  );
}

const TYPE_COLORS: Record<string, string> = {
  normal: "#A8A878", fire: "#F08030", water: "#6890F0", electric: "#F8D030",
  grass: "#78C850", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
  ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
  rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
  steel: "#B8B8D0", fairy: "#EE99AC",
};
