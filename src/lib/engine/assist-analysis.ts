// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - ASSIST ANALYSIS ENGINE
// Automated damage calculations and speed tier analysis against meta threats
// ═══════════════════════════════════════════════════════════════════════════════

import type { ChampionsPokemon, BaseStats, StatPoints, PokemonType, TeamSlot } from "@/lib/types";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { USAGE_DATA } from "@/lib/usage-data";
import { TOURNAMENT_USAGE, getTopUsagePokemon } from "./vgc-data";
import { calculateDamage, type DamageResult } from "./damage-calc";
import { calcUserSpeed, calcRawSpeed } from "./speed-tiers";
import { getEffectiveSpeed } from "./stat-calc";
import { getNatureModifier, type NatureName } from "./natures";
import { getItemSpeedMultiplier } from "./items";
import { ABILITY_DATA } from "./ability-data";
import { getMatchup } from "./type-chart";

const LEVEL = 50;
const IV = 31;
const MAX_SP = 32;
const MAX_TOTAL_SP = 66;

// ── Top meta threats (by bring rate, filtered to active roster) ─────────────

const VALID_ROSTER_IDS = new Set(POKEMON_SEED.filter(p => !p.hidden).map(p => p.id));

export interface MetaThreat {
  pokemon: ChampionsPokemon;
  set: {
    nature: NatureName;
    ability: string;
    item: string;
    moves: string[];
    sp: StatPoints;
  };
  isMega: boolean;
  tournamentUsage: number; // bring rate %
}

export function buildThreats(limit: number = 30): MetaThreat[] {
  const topUsage = getTopUsagePokemon(limit);
  return topUsage
    .filter(u => VALID_ROSTER_IDS.has(u.pokemonId))
    .map(u => {
      const pokemon = POKEMON_SEED.find(p => p.id === u.pokemonId);
      if (!pokemon) return null;
      const usage = USAGE_DATA[u.pokemonId];
      const set = usage && usage.length > 0 ? usage[0] : null;
      if (!set) return null;
      return {
        pokemon,
        set: set as unknown as MetaThreat["set"],
        isMega: false,
        tournamentUsage: u.bringRate,
      } as MetaThreat;
    })
    .filter((t): t is MetaThreat => t !== null);
}

// ── KO Entry (a specific threat move or user move result) ───────────────────

export interface KOEntry {
  attackerName: string;
  defenderName: string;
  moveName: string;
  damageMin: number;
  damageMax: number;
  percentMin: number;
  percentMax: number;
  isOHKO: boolean;
  is2HKO: boolean;
  koText: string;
  attackerNature?: string;
  attackerAbility?: string;
  attackerItem?: string;
  attackerAtkSp?: number;
  attackerSpkSp?: number;
}

// ── Speed Tier Entry for Assist ─────────────────────────────────────────────

export interface AssistSpeedEntry {
  pokemon: ChampionsPokemon;
  pokemonName: string;
  speed: number;
  comparison: "faster" | "slower" | "tie";
  diff: number; // userSpeed - threatSpeed (positive = faster)
  isScarf?: boolean;
}

// ── Per-Pokemon Assist Result ───────────────────────────────────────────────

export interface AssistPokemonResult {
  pokemonName: string;
  speedValue: number; // effective speed with current item/nature
  speedEntries: AssistSpeedEntry[];
  threatenedBy: KOEntry[];    // threats that KO this pokemon
  youKO: KOEntry[];           // this pokemon KOing threats
  survivesAndThreatens: KOEntry[]; // survives threat, can damage back
}

export interface AssistTeamResult {
  teamName: string;
  results: AssistPokemonResult[];
}

// ── Speed calculation helpers ───────────────────────────────────────────────

function calcEffectiveSpeed(
  baseStats: BaseStats,
  sp: StatPoints,
  nature: NatureName,
  item?: string,
  ability?: string,
  weatherActive?: boolean
): number {
  const raw = calcRawSpeed(baseStats.speed, sp.speed, nature);
  const itemMult = item ? getItemSpeedMultiplier(item) : 1;
  const abilityData = ability ? ABILITY_DATA[ability] : undefined;
  const weatherDoubled = weatherActive && !!abilityData?.weatherSpeed;

  return getEffectiveSpeed(raw, {
    choiceScarf: itemMult === 1.5,
    weatherSpeedDoubled: weatherDoubled,
  });
}

// ── Build attacker/defender objects for damage calc ─────────────────────────

interface DamageCalcEntity {
  baseStats: BaseStats;
  sp: StatPoints;
  nature: NatureName;
  types: PokemonType[];
  ability: string;
  item: string;
}

function buildEntity(
  threat: MetaThreat,
  moveName: string
): DamageCalcEntity {
  const { pokemon, set, isMega } = threat;
  let baseStats = pokemon.baseStats;
  let types = [...pokemon.types] as PokemonType[];
  let ability = set.ability;

  if (isMega) {
    const megaForm = pokemon.forms?.find(f => f.isMega);
    if (megaForm) {
      baseStats = megaForm.baseStats;
      types = [...megaForm.types] as PokemonType[];
      ability = megaForm.abilities[0]?.name ?? set.ability;
    }
  }

  if (pokemon.name === "Aegislash" && ability === "Stance Change") {
    baseStats = { hp: 60, attack: 140, defense: 50, spAtk: 140, spDef: 50, speed: 60 };
  }
  if (pokemon.name === "Palafin" && ability === "Zero To Hero") {
    baseStats = { hp: 100, attack: 160, defense: 97, spAtk: 106, spDef: 87, speed: 100 };
  }

  return { baseStats, sp: set.sp, nature: set.nature as NatureName, types, ability, item: set.item };
}

function getDamagingMoves(threat: MetaThreat): string[] {
  return threat.set.moves.filter(moveName => {
    const move = threat.pokemon.moves.find(m => m.name === moveName);
    return move && move.category !== "status" && (move.power ?? 0) > 0;
  });
}

// ── Run damage calculation between two entities ─────────────────────────────

function runDamage(
  attacker: DamageCalcEntity,
  defender: DamageCalcEntity,
  moveName: string
): DamageResult | null {
  try {
    return calculateDamage(
      attacker,
      defender,
      moveName,
      { isDoubles: true, computeKOChance: true }
    );
  } catch {
    return null;
  }
}

// ── Check if a KO entry is meaningful (worth showing) ───────────────────────

function isMeaningfulKO(entry: KOEntry): boolean {
  // OHKO always meaningful
  if (entry.isOHKO) return true;
  // 2HKO with high max damage% (likely to KO in practice)
  if (entry.is2HKO && entry.percentMax >= 45) return true;
  // OHKO with good min damage% (e.g. 40%+ to show as "watch out")
  if (!entry.isOHKO && !entry.is2HKO && entry.percentMax >= 100) return true;
  // High chance 2HKO
  if (entry.is2HKO && entry.percentMin >= 40) return true;
  return false;
}

// ── Main analysis function ──────────────────────────────────────────────────

export function analyzeTeamSlot(
  slot: TeamSlot,
  threats: MetaThreat[]
): AssistPokemonResult {
  const pokemon = slot.pokemon;
  if (!pokemon) {
    return {
      pokemonName: "Empty Slot",
      speedValue: 0,
      speedEntries: [],
      threatenedBy: [],
      youKO: [],
      survivesAndThreatens: [],
    };
  }

  const nature = (slot.nature || "Hardy") as NatureName;
  const ability = slot.ability || pokemon.abilities[0]?.name || "";
  const megaForms = pokemon.forms?.filter(f => f.isMega && !f.hidden) ?? [];
  const activeBase = slot.isMega && megaForms[slot.megaFormIndex ?? 0]
    ? megaForms[slot.megaFormIndex ?? 0].baseStats
    : pokemon.baseStats;
  const activeTypes = slot.isMega && megaForms[slot.megaFormIndex ?? 0]
    ? megaForms[slot.megaFormIndex ?? 0].types
    : pokemon.types;

  // User's effective speed
  const userSpeed = calcEffectiveSpeed(
    activeBase, slot.statPoints, nature, slot.item, ability
  );

  // Build user entity for damage calc
  const userEntity: DamageCalcEntity = {
    baseStats: activeBase,
    sp: slot.statPoints,
    nature,
    types: activeTypes,
    ability,
    item: slot.item || "",
  };

  // ── Speed analysis ──────────────────────────────────────────────────────
  const speedEntries: AssistSpeedEntry[] = [];
  const userIsScarf = slot.item === "Choice Scarf";

  for (const threat of threats) {
    const tNature = threat.set.nature as NatureName;

    // Check if threat has Scarf
    const isScarf = threat.set.item === "Choice Scarf";

    // Threat speed: use actual set (including Scarf if present)
    const threatSpeed = calcEffectiveSpeed(
      threat.pokemon.baseStats,
      threat.set.sp,
      tNature,
      threat.set.item,
      threat.set.ability
    );

    const diff = userSpeed - threatSpeed;

    // Only show within ±50 speed points
    if (Math.abs(diff) > 50) continue;

    // Also skip speed ties with raw threats that are far apart without scarf
    // (the user said don't show things like Aerodactyl vs Tyranitar)
    if (diff === 0) {
      speedEntries.push({
        pokemon: threat.pokemon,
        pokemonName: threat.pokemon.name,
        speed: threatSpeed,
        comparison: "tie",
        diff: 0,
        isScarf: userIsScarf || isScarf,
      });
    } else if (diff > 0) {
      speedEntries.push({
        pokemon: threat.pokemon,
        pokemonName: threat.pokemon.name,
        speed: threatSpeed,
        comparison: "faster",
        diff,
        isScarf: userIsScarf || isScarf,
      });
    } else {
      speedEntries.push({
        pokemon: threat.pokemon,
        pokemonName: threat.pokemon.name,
        speed: threatSpeed,
        comparison: "slower",
        diff,
        isScarf: userIsScarf || isScarf,
      });
    }
  }

  // Sort by speed (fastest first)
  speedEntries.sort((a, b) => b.speed - a.speed);

  // ── KO analysis ─────────────────────────────────────────────────────────
  const threatenedBy: KOEntry[] = [];
  const youKO: KOEntry[] = [];
  const survivesAndThreatens: KOEntry[] = [];

  // Get user's damaging moves
  const userDamagingMoves = slot.moves.filter(moveName => {
    const move = pokemon.moves.find(m => m.name === moveName);
    return move && move.category !== "status" && (move.power ?? 0) > 0;
  });

  for (const threat of threats) {
    const damagingMoves = getDamagingMoves(threat);
    if (damagingMoves.length === 0) continue;

    // ── Check: does threat KO user? ─────────────────────────────────────
    const attacker = buildEntity(threat, damagingMoves[0]);

    for (const moveName of damagingMoves) {
      const result = runDamage(attacker, userEntity, moveName);
      if (!result) continue;

      const entry: KOEntry = {
        attackerName: threat.pokemon.name,
        defenderName: pokemon.name,
        moveName,
        damageMin: result.damage[0],
        damageMax: result.damage[1],
        percentMin: result.percentHP[0],
        percentMax: result.percentHP[1],
        isOHKO: result.isOHKO,
        is2HKO: result.is2HKO,
        koText: result.koChance?.text ?? "",
        attackerNature: threat.set.nature,
        attackerAbility: threat.set.ability,
        attackerItem: threat.set.item,
        attackerAtkSp: threat.set.sp.attack,
        attackerSpkSp: threat.set.sp.spAtk,
      };

      if (isMeaningfulKO(entry)) {
        threatenedBy.push(entry);
      }

      // ── Check: does user survive this hit? ────────────────────────────
      const userHP = Math.floor(((2 * activeBase.hp + IV) * LEVEL) / 100) + LEVEL + slot.statPoints.hp + 5;
      const actuallySurvives = result.damage[1] < userHP;

      if (actuallySurvives && userDamagingMoves.length > 0) {
        // User survives — can they threaten back?
        for (const userMove of userDamagingMoves) {
          const userResult = runDamage(userEntity, attacker, userMove);
          if (!userResult) continue;

          const counterEntry: KOEntry = {
            attackerName: pokemon.name,
            defenderName: threat.pokemon.name,
            moveName: userMove,
            damageMin: userResult.damage[0],
            damageMax: userResult.damage[1],
            percentMin: userResult.percentHP[0],
            percentMax: userResult.percentHP[1],
            isOHKO: userResult.isOHKO,
            is2HKO: userResult.is2HKO,
            koText: userResult.koChance?.text ?? "",
          };

          if (isMeaningfulKO(counterEntry)) {
            survivesAndThreatens.push(counterEntry);
          }

          // Also add to youKO if it's a clean KO
          if (userResult.isOHKO || userResult.is2HKO) {
            youKO.push(counterEntry);
          }
        }
      }
    }
  }



  // ── Deduplicate and sort ────────────────────────────────────────────────
  const dedup = <T extends { attackerName: string; defenderName: string; moveName: string }>(arr: T[]): T[] => {
    const seen = new Set<string>();
    return arr.filter(e => {
      const key = `${e.attackerName}|${e.defenderName}|${e.moveName}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  threatenedBy.sort((a, b) => {
    // OHKO first, then by highest damage %
    if (a.isOHKO !== b.isOHKO) return a.isOHKO ? -1 : 1;
    return b.percentMax - a.percentMax;
  });

  youKO.sort((a, b) => {
    if (a.isOHKO !== b.isOHKO) return a.isOHKO ? -1 : 1;
    return b.percentMax - a.percentMax;
  });

  survivesAndThreatens.sort((a, b) => {
    if (a.isOHKO !== b.isOHKO) return a.isOHKO ? -1 : 1;
    if (a.is2HKO !== b.is2HKO) return a.is2HKO ? -1 : 1;
    return b.percentMax - a.percentMax;
  });

  // Limit to top entries to avoid overwhelming display
  const maxEntries = 8;
  return {
    pokemonName: pokemon.name,
    speedValue: userSpeed,
    speedEntries,
    threatenedBy: dedup(threatenedBy).slice(0, maxEntries),
    youKO: dedup(youKO).slice(0, maxEntries),
    survivesAndThreatens: dedup(survivesAndThreatens).slice(0, maxEntries),
  };
}

// ── Public API ──────────────────────────────────────────────────────────────

export function analyzeTeam(
  slots: TeamSlot[],
  teamName: string,
  threatCount: number = 30
): AssistTeamResult {
  const threats = buildThreats(threatCount);
  const results = slots.map(slot => analyzeTeamSlot(slot, threats));
  return { teamName, results };
}
