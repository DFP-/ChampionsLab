// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - PICKER ROLE CLASSIFIER
// Lightweight role tagging for the Team Builder "Choose Pokémon" modal.
// Classifies Pokémon by base stats + most common tournament sets so users
// can filter by role (physical tank, special sweeper, support, etc.) before
// committing to a pick. When the user selects a mon while a role is active,
// `addPokemon` already auto-applies the top usage preset — this module also
// exposes `pickSetForRole` so the preset can be biased toward the chosen role.
// ═══════════════════════════════════════════════════════════════════════════════

import type { ChampionsPokemon, CommonSet } from "@/lib/types";

export type PickerRole =
  | "physical-sweeper"
  | "special-sweeper"
  | "physical-tank"
  | "special-tank"
  | "support"
  | "speed-control"
  | "redirector"
  | "trick-room"
  | "setup-sweeper";

export const PICKER_ROLES: PickerRole[] = [
  "physical-sweeper",
  "special-sweeper",
  "physical-tank",
  "special-tank",
  "support",
  "speed-control",
  "redirector",
  "trick-room",
  "setup-sweeper",
];

// Move → role signals. Any set that contains one of these moves tags the mon.
const SUPPORT_MOVES = new Set([
  "Fake Out", "Helping Hand", "Light Screen", "Reflect", "Aurora Veil",
  "Protect", "Wide Guard", "Quick Guard", "Safeguard", "Ally Switch",
]);
const SPEED_CONTROL_MOVES = new Set([
  "Tailwind", "Icy Wind", "Electroweb", "Thunder Wave", "Sticky Web", "Bulldoze",
]);
const REDIRECTOR_MOVES = new Set(["Follow Me", "Rage Powder"]);
const TRICK_ROOM_MOVES = new Set(["Trick Room"]);
const SETUP_MOVES = new Set([
  "Swords Dance", "Dragon Dance", "Nasty Plot", "Calm Mind",
  "Shell Smash", "Belly Drum", "Quiver Dance", "Bulk Up",
  "Iron Defense", "Coil", "Victory Dance", "Tidy Up",
]);

function setHasAny(set: CommonSet, pool: Set<string>): boolean {
  return set.moves.some(m => pool.has(m));
}

/**
 * Classify a Pokémon into one or more roles using base stats + its common
 * tournament sets. Pure and memo-safe.
 */
export function classifyPickerRoles(
  pokemon: ChampionsPokemon,
  sets: CommonSet[] = [],
): Set<PickerRole> {
  const roles = new Set<PickerRole>();
  const { hp, attack, defense, spAtk, spDef, speed } = pokemon.baseStats;

  // ── stat-based offensive roles ──────────────────────────────────────────
  // A mon is a "sweeper" if it has solid offensive stats. Speed threshold is
  // intentionally low (≥60) so Trick Room sweepers (Conkeldurr, Rhyperior…)
  // also show up; they are separately tagged "trick-room" below.
  const fastEnough = speed >= 60;
  if (attack >= 100 && fastEnough) roles.add("physical-sweeper");
  if (spAtk >= 100 && fastEnough) roles.add("special-sweeper");

  // ── stat-based defensive roles ──────────────────────────────────────────
  // HP×Def / HP×SpDef as bulk proxy. Thresholds set so typical VGC walls
  // (Hippowdon 108×118=12744, Slowbro 95×110=10450, Forretress 75×140=10500,
  //  Blissey 255×135=34425 SpDef, Snorlax 160×65 SpDef 110=17600) qualify.
  const physBulk = hp * defense;
  const specBulk = hp * spDef;
  if (physBulk >= 8000) roles.add("physical-tank");
  if (specBulk >= 8000) roles.add("special-tank");

  // ── move-based roles (pulled from usage presets) ────────────────────────
  for (const set of sets) {
    if (setHasAny(set, REDIRECTOR_MOVES)) roles.add("redirector");
    if (setHasAny(set, TRICK_ROOM_MOVES)) roles.add("trick-room");
    if (setHasAny(set, SPEED_CONTROL_MOVES)) roles.add("speed-control");
    if (setHasAny(set, SETUP_MOVES)) roles.add("setup-sweeper");
    // Support: Fake Out / Helping Hand are the strong signals. Screens alone
    // don't count — too many mons learn them without running them.
    if (set.moves.includes("Fake Out") || set.moves.includes("Helping Hand")) {
      roles.add("support");
    }
  }

  // Trick-Room abuser fallback: slow + strong mons often belong on TR teams
  // even when the setter isn't on their own sheet.
  if (speed <= 55 && Math.max(attack, spAtk) >= 100) {
    roles.add("trick-room");
  }

  return roles;
}

/**
 * Given a list of usage sets, pick the one that best matches the requested
 * role. Falls back to `sets[0]` when no set is a good fit. Used by the
 * team-builder so that auto-filling after a role-filtered pick gives the
 * user the preset they expected.
 */
export function pickSetForRole(
  sets: CommonSet[],
  role: PickerRole | null,
): CommonSet | null {
  if (!sets.length) return null;
  if (!role) return sets[0];

  const scoreSet = (set: CommonSet): number => {
    let score = 0;
    switch (role) {
      case "redirector":
        if (setHasAny(set, REDIRECTOR_MOVES)) score += 10;
        break;
      case "trick-room":
        if (setHasAny(set, TRICK_ROOM_MOVES)) score += 10;
        break;
      case "speed-control":
        if (setHasAny(set, SPEED_CONTROL_MOVES)) score += 8;
        break;
      case "support":
        if (set.moves.includes("Fake Out")) score += 6;
        if (set.moves.includes("Helping Hand")) score += 5;
        if (setHasAny(set, SUPPORT_MOVES)) score += 2;
        break;
      case "setup-sweeper":
        if (setHasAny(set, SETUP_MOVES)) score += 8;
        break;
      case "physical-sweeper":
        if (set.sp.attack >= 150) score += 3;
        if (set.sp.speed >= 100) score += 2;
        break;
      case "special-sweeper":
        if (set.sp.spAtk >= 150) score += 3;
        if (set.sp.speed >= 100) score += 2;
        break;
      case "physical-tank":
        if (set.sp.hp >= 150) score += 2;
        if (set.sp.defense >= 120) score += 3;
        break;
      case "special-tank":
        if (set.sp.hp >= 150) score += 2;
        if (set.sp.spDef >= 120) score += 3;
        break;
    }
    return score;
  };

  let best = sets[0];
  let bestScore = scoreSet(best);
  for (let i = 1; i < sets.length; i++) {
    const s = scoreSet(sets[i]);
    if (s > bestScore) {
      best = sets[i];
      bestScore = s;
    }
  }
  return best;
}
