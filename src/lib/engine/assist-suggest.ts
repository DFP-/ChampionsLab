// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - ASSIST SUGGESTION ENGINE
// Generates per-Pokemon build suggestions by combining assist analysis with
// the suggestion engine. Used for the inline assist panel in teambuilder.
// ═══════════════════════════════════════════════════════════════════════════════

import type { ChampionsPokemon, TeamSlot, StatPoints } from "@/lib/types";
import type { NatureName } from "./natures";
import { getSlotSuggestions, type SlotSuggestion, type MoveSuggestion } from "./suggestions";
import { analyzeTeamSlot, buildThreats, type AssistPokemonResult } from "./assist-analysis";
import { spNeededToOutspeed } from "./speed-tiers";

const MAX_SP = 32;

// ── Suggestion Types ────────────────────────────────────────────────────────

export type SuggestionType = "speed" | "move" | "stat" | "nature" | "item" | "set";

export interface AssistBuildSuggestion {
  type: SuggestionType;
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  apply?: () => void;
  setPatch?: { ability?: string; moves?: string[]; sp?: StatPoints; nature?: string; item?: string };
}

// ── Main Entry Point ────────────────────────────────────────────────────────

export function generateAssistSuggestions(
  slot: TeamSlot,
  teamPokemon: ChampionsPokemon[]
): AssistBuildSuggestion[] {
  if (!slot.pokemon) return [];

  const suggestions: AssistBuildSuggestion[] = [];
  const otherPokemon = teamPokemon.filter(p => p.id !== slot.pokemon!.id);

  // ── Base suggestion engine suggestions (always included) ────────────────
  const slotSuggestion = getSlotSuggestions(slot.pokemon!, otherPokemon);

  // Suggest moves that aren't currently equipped — only from competitive sets
  const currentMoves = new Set(slot.moves.filter(Boolean));
  const suggestedMoves = getCompetitiveMoveSuggestions(slotSuggestion.suggestedMoves);
  for (const ms of suggestedMoves.slice(0, 2)) {
    if (!currentMoves.has(ms.name)) {
      const moveData = slot.pokemon!.moves.find(m => m.name === ms.name);
      suggestions.push({
        type: "move",
        priority: ms.score >= 80 ? "high" : "medium",
        title: `Consider ${ms.name}`,
        description: ms.reason + (moveData ? ` — ${moveData.type} ${moveData.category}${moveData.power ? ` ${moveData.power}bp` : ""}` : ""),
        setPatch: { moves: replaceMoveInSlot(slot.moves, ms.name) },
      });
    }
  }

  // Suggest nature if different from current
  const currentNature = (slot.nature as NatureName) || "Impish";
  if (currentNature !== slotSuggestion.suggestedNature.nature) {
    suggestions.push({
      type: "nature",
      priority: "medium",
      title: `Try ${slotSuggestion.suggestedNature.nature} nature`,
      description: slotSuggestion.suggestedNature.reason,
      setPatch: { nature: slotSuggestion.suggestedNature.nature },
    });
  }

  // ── Assist analysis (threat-based) ──────────────────────────────────────
  const threats = buildThreats(30);
  if (threats.length === 0) return deduplicateAndLimit(suggestions, 8);

  const analysis = analyzeTeamSlot(slot, threats);
  if (!analysis) return deduplicateAndLimit(suggestions, 8);

  // Merge with analysis results
  mergeAssistSuggestions(suggestions, slot, analysis, otherPokemon, slotSuggestion);

  return deduplicateAndLimit(suggestions, 8);
}

// ── Filter moves to only those actually used in competitive sets ────────────

function getCompetitiveMoveSuggestions(moves: MoveSuggestion[]): MoveSuggestion[] {
  // Filter out moves with count=0 (from movelist but never in competitive sets)
  return moves.filter(m => m.score > 0);
}

// ── Replace a move in the slot, keeping existing slots for moves that remain ─

function replaceMoveInSlot(currentMoves: string[], newMove: string): string[] {
  const filled = currentMoves.filter(Boolean);
  if (!filled.includes(newMove)) {
    // Replace the first empty slot, or the last filled slot
    if (filled.length < 4) {
      return [...filled, newMove];
    }
    const result = [...filled];
    result[result.length - 1] = newMove;
    return result;
  }
  // Move is already in slot — find its index and keep as-is
  return currentMoves;
}

// ── Deduplicate and limit suggestions ───────────────────────────────────────

function deduplicateAndLimit(suggestions: AssistBuildSuggestion[], max: number): AssistBuildSuggestion[] {
  // Deduplicate by title (case-insensitive)
  const seen = new Set<string>();
  const deduped: AssistBuildSuggestion[] = [];
  for (const s of suggestions) {
    const key = s.title.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(s);
    }
  }
  return deduped.slice(0, max);
}

// ── Threat-Based Suggestions ────────────────────────────────────────────────

function mergeAssistSuggestions(
  suggestions: AssistBuildSuggestion[],
  slot: TeamSlot,
  analysis: AssistPokemonResult,
  otherPokemon: ChampionsPokemon[],
  slotSuggestion: SlotSuggestion
) {
  if (!slot.pokemon) return;

  // Track which threats we've already suggested something for, to avoid
  // generating multiple suggestion types per threat (e.g. speed + stat for same Pokemon)
  const suggestedThreats = new Set<string>();

  // ── Speed gap suggestions ─────────────────────────────────────────────
  const outspedByScarf = analysis.speedEntries.filter(
    e => e.isScarf && e.diff < 0
  );

  if (outspedByScarf.length > 0) {
    const topThreat = outspedByScarf[0];
    const threatKey = `speed-${topThreat.pokemonName}`;
    suggestedThreats.add(threatKey);

    const spToOutspeed = spNeededToOutspeed(
      slot.pokemon!.baseStats.speed,
      slot.statPoints.speed,
      (slot.nature as NatureName) || "Impish",
      topThreat.speed - 1
    );

    if (spToOutspeed !== null) {
      suggestions.push({
        type: "speed",
        priority: "high",
        title: `Outspeed ${topThreat.pokemonName}`,
        description: `Put ${spToOutspeed} SP in Speed to outspeed Scarf ${topThreat.pokemonName} (${topThreat.speed} speed)`,
        setPatch: { sp: { ...slot.statPoints, speed: slot.statPoints.speed + spToOutspeed } },
      });
    }

    // Suggest speed control moves instead (only if no speed suggestion was made)
    if (spToOutspeed === null) {
      const hasSpeedControl = slot.moves.some(m =>
        ["Icy Wind", "Electroweb", "Tailwind", "Trick Room"].includes(m)
      );
      if (!hasSpeedControl) {
        suggestions.push({
          type: "move",
          priority: "high",
          title: "Add speed control",
          description: `You're outsped by ${topThreat.pokemonName} even with Choice Scarf. Consider Icy Wind or Electroweb to slow them down.`,
        });
      }
    }
  }

  // ── KO vulnerability suggestions (only top 1, most dangerous) ─────────
  const majorThreats = analysis.threatenedBy.filter(e => e.isOHKO).slice(0, 1);
  for (const topThreat of majorThreats) {
    const threatKey = `vuln-${topThreat.attackerName}`;
    suggestedThreats.add(threatKey);

    // Only suggest if we haven't already suggested something for this threat
    if (!suggestedThreats.has(`speed-${topThreat.attackerName}`)) {
      suggestions.push({
        type: "stat",
        priority: "high",
        title: `Vulnerable to ${topThreat.attackerName}`,
        description: `${topThreat.attackerName}'s ${topThreat.moveName} OHKOs you (${Math.floor(topThreat.percentMin)}-${Math.floor(topThreat.percentMax)}% damage). Consider investing in bulk or changing your item.`,
      });
    }
  }

  // ── Role mismatch suggestion ──────────────────────────────────────────
  if (analysis.speedEntries.length > 0) {
    const slowerThan = analysis.speedEntries.filter(e => e.diff < -30).length;
    const fasterThan = analysis.speedEntries.filter(e => e.diff > 30).length;

    if (slowerThan > fasterThan * 2 && slowerThan >= 3) {
      const role = slotSuggestion.role;
      if (!role.roles.includes("wall") && !role.roles.includes("physical-wall") && !role.roles.includes("special-wall")) {
        suggestions.push({
          type: "stat",
          priority: "medium",
          title: "Consider a bulkier spread",
          description: `You're significantly slower than ${slowerThan} top threats. Consider investing in HP/Defense or switching to a bulkier set.`,
        });
      }
    }
  }

  // ── Set suggestion from best competitive set ──────────────────────────
  if (slotSuggestion.bestSet) {
    const currentMovesSet = new Set(slot.moves.filter(Boolean));
    const bestSetMoves = new Set(slotSuggestion.bestSet.moves.filter(Boolean));
    const movesDiffer = currentMovesSet.size !== bestSetMoves.size ||
      ![...currentMovesSet].every(m => bestSetMoves.has(m));

    if (movesDiffer || slot.statPoints.hp !== slotSuggestion.bestSet.sp.hp) {
      suggestions.push({
        type: "set",
        priority: "medium",
        title: `Apply "${slotSuggestion.bestSet.name}" set`,
        description: slotSuggestion.bestSet.reason,
        setPatch: {
          ability: slotSuggestion.bestSet.ability,
          moves: slotSuggestion.bestSet.moves,
          sp: { ...slotSuggestion.bestSet.sp },
          nature: slotSuggestion.bestSet.nature,
          item: slotSuggestion.bestSet.item,
        },
      });
    }
  }

  // ── Item suggestion: Choice Scarf if speed is a problem ───────────────
  const currentScarf = slot.item?.includes("Scar");
  if (!currentScarf && !suggestedThreats.has("speed-choice-scarf")) {
    const outspedByCount = analysis.speedEntries.filter(e => e.diff < 0 && !e.isScarf).length;
    const totalEntries = analysis.speedEntries.filter(e => !e.isScarf).length;

    if (outspedByCount > totalEntries * 0.5 && totalEntries >= 3) {
      suggestions.push({
        type: "item",
        priority: "medium",
        title: `Try Choice Scarf`,
        description: `You're outsped by ${outspedByCount}/${totalEntries} threats. Choice Scarf would give you a 1.5x speed boost.`,
        setPatch: { item: "Choice Scarf" },
      });
    }
  }

  // ── Tailwind suggestion if team lacks speed control ───────────────────
  const teamHasSpeedControl = otherPokemon.some(p =>
    p.moves.some(m => ["Tailwind", "Trick Room"].includes(m))
  ) || slot.moves.some(m => ["Tailwind", "Trick Room"].includes(m));

  if (!teamHasSpeedControl) {
    const tailwindMove = slot.pokemon.moves.find(m => m.name === "Tailwind");
    if (tailwindMove && !slot.moves.includes("Tailwind")) {
      suggestions.push({
        type: "move",
        priority: "medium",
        title: "Add Tailwind support",
        description: "Your team lacks speed control. Tailwind would help your whole team outspeed threats.",
      });
    }
  }
}
