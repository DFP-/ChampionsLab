// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - SPEED TIER ENGINE
// Dynamic speed comparison against the full roster
// ═══════════════════════════════════════════════════════════════════════════════

import type { ChampionsPokemon, BaseStats, StatPoints } from "@/lib/types";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { calculateStats, getEffectiveSpeed } from "./stat-calc";
import { getNatureModifier, type NatureName } from "./natures";
import { getItemSpeedMultiplier } from "./items";
import { ABILITY_DATA } from "./ability-data";

const LEVEL = 50;
const IV = 31;
const MAX_SP = 32;

/** Moves that boost Speed by +1 stage */
export const SPEED_BOOST_MOVES_PLUS_1 = new Set([
  "Dragon Dance",
  "Quiver Dance",
  "Flame Charge",
  "Trailblaze",
  "Scale Shot",
]);

/** Moves that boost Speed by +2 stages */
export const SPEED_BOOST_MOVES_PLUS_2 = new Set([
  "Agility",
  "Rock Polish",
  "Shell Smash",
  "Autotomize",
]);

/** Get the speed boost stage from a user's selected moves */
export function getSpeedBoostFromMoves(moveNames: string[]): number {
  const moves = moveNames.filter(Boolean);
  if (moves.some((m) => SPEED_BOOST_MOVES_PLUS_2.has(m))) return 2;
  if (moves.some((m) => SPEED_BOOST_MOVES_PLUS_1.has(m))) return 1;
  return 0;
}

/** Check if a move is a speed-boosting setup move */
export function hasSpeedBoostMove(moveNames: string[]): boolean {
  return getSpeedBoostFromMoves(moveNames) > 0;
}

/** Calculate raw speed stat at Level 50 for a given base speed, SP, and nature */
export function calcRawSpeed(baseSpeed: number, sp: number, nature: NatureName): number {
  const baseValue = Math.floor(((2 * baseSpeed + IV) * LEVEL) / 100) + 5 + sp;
  return Math.floor(baseValue * getNatureModifier(nature, "speed"));
}

/** Build the effective speed for the user's Pokémon with all current modifiers */
export function calcUserSpeed(params: {
  baseStats: BaseStats;
  statPoints: StatPoints;
  nature: NatureName;
  item?: string;
  ability?: string;
  moves: string[];
  setupBoost?: number; // additional stat stages from setup (e.g. after Dragon Dance)
  weatherActive?: boolean; // is the weather this ability needs active?
}): number {
  const raw = calcRawSpeed(params.baseStats.speed, params.statPoints.speed, params.nature);

  // Item multiplier
  const itemMult = params.item ? getItemSpeedMultiplier(params.item) : 1;

  // Ability weather speed doubling
  const ability = params.ability ? ABILITY_DATA[params.ability] : undefined;
  const weatherDoubled =
    params.weatherActive && !!ability?.weatherSpeed;

  // Setup boost stages
  const moveBoost = getSpeedBoostFromMoves(params.moves);
  const totalBoost = (params.setupBoost ?? 0) + moveBoost;

  return getEffectiveSpeed(raw, {
    choiceScarf: itemMult === 1.5,
    weatherSpeedDoubled: weatherDoubled,
    boostStages: totalBoost,
  });
}

/** Calculate "threat speed" for an opponent Pokémon (max investment baseline) */
export function calcThreatSpeed(
  pokemon: ChampionsPokemon,
  options: {
    nature?: NatureName; // defaults to +Spe nature if exists, else Jolly
    sp?: number; // defaults to MAX_SP
    item?: string; // optional item like Choice Scarf
    ability?: string; // optional ability
    weatherActive?: boolean;
    setupBoost?: number;
  } = {}
): number {
  const base = pokemon.baseStats.speed;

  // Default to a +Speed nature if available, otherwise Jolly
  let nature: NatureName = options.nature ?? "Jolly";
  if (!options.nature) {
    // Try to find a +speed nature from the Pokémon's common sets, else default Jolly
    const hasSpeedNature = ["Timid", "Hasty", "Jolly", "Naive"].some((n) =>
      pokemon.abilities.some((a) => true) // just keeping structure
    );
    nature = hasSpeedNature ? "Jolly" : "Jolly";
  }

  const sp = options.sp ?? MAX_SP;
  const raw = calcRawSpeed(base, sp, nature);

  const itemMult = options.item ? getItemSpeedMultiplier(options.item) : 1;
  const ability = options.ability ? ABILITY_DATA[options.ability] : undefined;
  const weatherDoubled = options.weatherActive && !!ability?.weatherSpeed;

  return getEffectiveSpeed(raw, {
    choiceScarf: itemMult === 1.5,
    weatherSpeedDoubled: weatherDoubled,
    boostStages: options.setupBoost ?? 0,
  });
}

export interface SpeedTierEntry {
  pokemon: ChampionsPokemon;
  rawSpeed: number; // speed with +Spe nature, 32 SP, no item/ability
  threatSpeed: number; // speed with common competitive assumptions
  rank: number;
}

export interface UserSpeedInfo {
  raw: number; // current raw speed
  withItem: number; // with item multiplier
  withAbility: number; // with ability weather boost (if applicable)
  afterSetup: number; // after fastest setup move
  afterPlus1: number; // after +1 boost
  afterPlus2: number; // after +2 boost
  withItemAndPlus1: number; // item + setup
  withItemAndPlus2: number; // item + setup
}

export interface SpeedComparisonResult {
  userSpeed: number; // the primary comparison speed (current with item)
  userRank: number;
  totalThreats: number;
  fasterThan: number;
  slowerThan: number;
  speedTies: number;
  entries: SpeedTierEntry[];
  userInfo: UserSpeedInfo;
}

/** Build the full speed tier list for the roster */
export function buildSpeedTiers(
  options: {
    compareNature?: NatureName; // nature to use for threat calc
  } = {}
): SpeedTierEntry[] {
  const nature = options.compareNature ?? "Jolly";

  const entries = POKEMON_SEED.filter((p) => !p.hidden)
    .map((p) => {
      const rawSpeed = calcRawSpeed(p.baseStats.speed, MAX_SP, nature);
      const threatSpeed = rawSpeed; // baseline threat = max invested, no item/ability
      return { pokemon: p, rawSpeed, threatSpeed, rank: 0 };
    })
    .sort((a, b) => b.rawSpeed - a.rawSpeed);

  entries.forEach((e, i) => {
    e.rank = i + 1;
  });

  return entries;
}

/** Compare user's Pokémon against the full roster */
export function compareUserSpeed(
  userBaseStats: BaseStats,
  userSP: StatPoints,
  userNature: NatureName,
  userItem: string | undefined,
  userAbility: string | undefined,
  userMoves: string[],
  options: {
    weatherActive?: boolean;
    setupBoost?: number;
  } = {}
): SpeedComparisonResult {
  const userRaw = calcRawSpeed(userBaseStats.speed, userSP.speed, userNature);

  // Build user speed variants
  const itemMult = userItem ? getItemSpeedMultiplier(userItem) : 1;
  const withItem = Math.floor(userRaw * itemMult);

  const ability = userAbility ? ABILITY_DATA[userAbility] : undefined;
  const weatherDoubled = options.weatherActive && !!ability?.weatherSpeed;
  const withAbility = weatherDoubled ? Math.floor(userRaw * 2) : userRaw;

  const moveBoost = getSpeedBoostFromMoves(userMoves);
  const totalBoost = moveBoost + (options.setupBoost ?? 0);
  const afterSetup = getEffectiveSpeed(userRaw, { boostStages: totalBoost });
  const afterPlus1 = getEffectiveSpeed(userRaw, { boostStages: 1 + (options.setupBoost ?? 0) });
  const afterPlus2 = getEffectiveSpeed(userRaw, { boostStages: 2 + (options.setupBoost ?? 0) });
  const withItemAndPlus1 = getEffectiveSpeed(userRaw, {
    choiceScarf: itemMult === 1.5,
    boostStages: 1 + (options.setupBoost ?? 0),
  });
  const withItemAndPlus2 = getEffectiveSpeed(userRaw, {
    choiceScarf: itemMult === 1.5,
    boostStages: 2 + (options.setupBoost ?? 0),
  });

  const userInfo: UserSpeedInfo = {
    raw: userRaw,
    withItem,
    withAbility,
    afterSetup,
    afterPlus1,
    afterPlus2,
    withItemAndPlus1,
    withItemAndPlus2,
  };

  // For comparison, use current speed with item + simulated boost as primary
  const userSpeed = getEffectiveSpeed(withItem, { boostStages: options.setupBoost ?? 0 });

  const tiers = buildSpeedTiers();
  let userRank = 0;
  let fasterThan = 0;
  let slowerThan = 0;
  let speedTies = 0;

  // Insert user into sorted list conceptually
  const entriesWithUser = tiers.map((e) => {
    if (e.rawSpeed > userSpeed) {
      slowerThan++;
    } else if (e.rawSpeed < userSpeed) {
      fasterThan++;
    } else {
      speedTies++;
    }
    return e;
  });

  // Calculate rank (1-based): count how many are strictly faster + 1
  userRank = entriesWithUser.filter((e) => e.rawSpeed > userSpeed).length + 1;

  return {
    userSpeed,
    userRank,
    totalThreats: tiers.length,
    fasterThan,
    slowerThan,
    speedTies,
    entries: entriesWithUser,
    userInfo,
  };
}

/** Calculate how many additional SP are needed to outspeed a target speed */
export function spNeededToOutspeed(
  baseSpeed: number,
  currentSP: number,
  nature: NatureName,
  targetSpeed: number
): number | null {
  // Try increasing SP from current up to MAX_SP
  for (let sp = currentSP + 2; sp <= MAX_SP; sp += 2) {
    const speed = calcRawSpeed(baseSpeed, sp, nature);
    if (speed > targetSpeed) {
      return sp - currentSP;
    }
  }
  return null; // cannot outspeed even at max
}

/** Calculate SP needed with a +Spe nature change */
export function spNeededWithNatureChange(
  baseSpeed: number,
  currentSP: number,
  currentNature: NatureName,
  targetSpeed: number
): { spNeeded: number; nature: NatureName } | null {
  const speedNatures: NatureName[] = ["Timid", "Jolly", "Naive", "Hasty"];
  // If already +speed, don't suggest change
  if (speedNatures.includes(currentNature)) return null;

  for (const nature of speedNatures) {
    for (let sp = currentSP; sp <= MAX_SP; sp += 2) {
      const speed = calcRawSpeed(baseSpeed, sp, nature);
      if (speed > targetSpeed) {
        return { spNeeded: sp - currentSP, nature };
      }
    }
  }
  return null;
}

/** Get a display label for speed comparison */
export function speedComparisonLabel(userSpeed: number, targetSpeed: number): "faster" | "slower" | "tie" {
  if (userSpeed > targetSpeed) return "faster";
  if (userSpeed < targetSpeed) return "slower";
  return "tie";
}
