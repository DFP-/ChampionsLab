// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - AI ASSISTANT TOOL EXECUTOR
// Shared tool execution engine — import from "@/lib/assistant/execute" in any
// route, component, or worker that needs to run assistant tools.
// ═══════════════════════════════════════════════════════════════════════════════

import { POKEMON_SEED } from "@/lib/pokemon-data";
import { getTopUsagePokemon } from "@/lib/engine/vgc-data";
import {
  calculateStats,
  getEffectiveSpeed,
  classifyStatProfile,
} from "@/lib/engine/stat-calc";
import {
  getNatureModifier,
  suggestNature,
  type NatureName,
} from "@/lib/engine/natures";
import {
  getItemDamageMultiplier,
  getItemSpeedMultiplier,
  suggestItems,
  getAllItems,
  ITEMS,
} from "@/lib/engine/items";
import {
  suggestTeammates,
  suggestSets,
  suggestMoves,
  suggestAbilities,
  suggestBestNature,
  suggestSPDistribution,
  getSlotSuggestions,
  analyzePartialTeam,
  type TeammateSuggestion,
  type SetSuggestion,
  type MoveSuggestion,
  type AbilitySuggestion,
  type NatureSuggestion,
  type SPSuggestion,
  type SlotSuggestion,
  type TeamAnalysis,
} from "@/lib/engine/suggestions";
import {
  analyzeTeamSynergy,
  scorePokemonFit,
  identifyRoles,
  detectArchetypes,
  getSpeedTierReport,
  type TeamSynergy,
  type PokemonRole,
  type ArchetypeProfile,
} from "@/lib/engine/synergy";
import {
  generateTeams,
  generateTeamsWithPokemon,
  generateFromArchetype,
  getArchetypeNames,
  type GeneratedTeam,
} from "@/lib/engine/team-generator";
import {
  calcSurvivalScenario,
  suggestSurvivalInvestments,
  loadThreat,
  getTopThreats as getTopThreatsRaw,
  getBestOffensiveMove,
  optimizeSPForSurvival,
  type SurvivalSuggestion,
} from "@/lib/engine/survival-calc";
import {
  getWeaknesses,
  getResistances,
  getImmunities,
  defensiveSynergy,
  offensiveCoverage,
  offensiveTypeCoverage,
  getMatchup,
  getAllTypes,
} from "@/lib/engine/type-chart";
import { analyzeTeam } from "@/lib/engine/assist-analysis";
import { getMove } from "@/lib/engine/move-data";
import { generateStrategyTree } from "@/lib/engine/strategy-tree";
import { runTeamTestSimulation } from "@/lib/engine/battle-sim";
import { getAllTeams, setActiveTeam } from "@/lib/db/json";
import type {
  ChampionsPokemon,
  StatPoints,
  PokemonType,
  CommonSet,
} from "@/lib/types";

// ── Helpers ─────────────────────────────────────────────────────────────────

export function getPokemon(id: number): ChampionsPokemon | undefined {
  return (
    POKEMON_SEED.find((p) => p.id === id) ??
    POKEMON_SEED.find((p) => p.dexNumber === id)
  );
}

function deserializeStatPoints(sp: Record<string, unknown>): StatPoints {
  return {
    hp: Number(sp.hp) || 0,
    attack: Number(sp.attack) || 0,
    defense: Number(sp.defense) || 0,
    spAtk: Number(sp.spAtk) || 0,
    spDef: Number(sp.spDef) || 0,
    speed: Number(sp.speed) || 0,
  };
}

function serializeStatPoints(sp: StatPoints): Record<string, number> {
  return {
    hp: sp.hp,
    attack: sp.attack,
    defense: sp.defense,
    spAtk: sp.spAtk,
    spDef: sp.spDef,
    speed: sp.speed,
  };
}

// ── Tool Context ────────────────────────────────────────────────────────────

export interface ToolContext {
  teamSlots?: Array<{
    pokemonId?: number;
    ability?: string;
    nature?: string;
    moves?: string[];
    item?: string;
    statPoints?: StatPoints;
    isMega?: boolean;
  }>;
  teamName?: string;
}

// ── Execute Tool ────────────────────────────────────────────────────────────

export async function executeAssistantTool(
  name: string,
  args: Record<string, unknown>,
  context?: ToolContext,
): Promise<string> {
  try {
    switch (name) {
      // ── Game Info & Data Lookup ────────────────────────────────────────

      case "get_game_info": {
        return JSON.stringify(
          {
            game: "Pokemon Champions",
            format: "Level 50 Doubles VGC",
            rosterSize: POKEMON_SEED.filter((p) => !p.hidden).length,
            rosterNote:
              "The Champions roster is a curated subset of ~235 Pokemon — this is the COMPLETE list, not a subset of a larger pool. Do not assume Pokemon are missing.",
            statSystem: {
              name: "Stat Points (SP)",
              totalSP: 66,
              maxPerStat: 32,
              replacesEVs: true,
              note: "32 SP in a stat is MAXIMUM investment (equivalent to 252 EVs in mainline games). A value of 32 does NOT mean minimal investment. 0 means no investment.",
            },
            items: {
              count: getAllItems().length,
              note: "The Champions item pool is a curated subset (~80 base items + mega stones). This is the FULL list. Items not in this pool are not available in the game.",
            },
            natures: {
              count: 25,
              mechanic: "+10% to one stat, -10% to another (or neutral)",
            },
            megaEvolution: "Some Pokemon can Mega Evolve once per battle",
            keyMechanics: [
              "Protect",
              "Fake Out",
              "Tailwind",
              "Trick Room",
              "Intimidate",
              "Follow Me",
            ],
            teamFormat: "6 Pokemon on roster, pick 4 to battle",
            weatherAbilities: [
              "Drought (sun)",
              "Drizzle (rain)",
              "Sand Stream (sand)",
              "Snow Warning (snow)",
            ],
            trickRoom: "Reverses speed order (slowest moves first) for 5 turns",
            doublesNote:
              "Both Pokemon attack simultaneously; many moves target both sides (spread moves do 75% damage in doubles)",
          },
          null,
          2,
        );
      }

      case "get_pokemon_details": {
        const pokemonId = Number(args.pokemonId);
        const pokemon = getPokemon(pokemonId);
        if (!pokemon)
          return `Error: Pokemon with ID ${pokemonId} not found. Use search_pokemon to find the correct ID.`;
        return JSON.stringify(
          {
            id: pokemon.id,
            name: pokemon.name,
            dexNumber: pokemon.dexNumber,
            types: pokemon.types,
            baseStats: pokemon.baseStats,
            abilities: pokemon.abilities.map((a) => ({
              name: a.name,
              description: a.description,
              isHidden: a.isHidden,
              isChampions: a.isChampions,
            })),
            moves: pokemon.moves.map((m) => ({
              name: m.name,
              type: m.type,
              category: m.category,
              power: m.power,
              accuracy: m.accuracy,
              pp: m.pp,
              description: m.description,
            })),
            forms: pokemon.forms?.map((f) => ({
              name: f.name,
              types: f.types,
              baseStats: f.baseStats,
              isMega: f.isMega,
            })),
            hasMega: pokemon.hasMega,
            tier: pokemon.tier,
            usageRate: pokemon.usageRate,
            generation: pokemon.generation,
            season: pokemon.season,
          },
          null,
          2,
        );
      }

      case "list_available_items": {
        const itemNames = getAllItems();
        return JSON.stringify(
          {
            count: itemNames.length,
            note: "This is the COMPLETE list of items available in Pokemon Champions. Items not listed here are not in the game.",
            items: itemNames.map((name) => ({
              name,
              description: ITEMS[name]?.description ?? "Unknown effect",
            })),
          },
          null,
          2,
        );
      }

      case "get_move_info": {
        const moveName = String(args.moveName || "");
        const move = getMove(moveName);
        if (!move)
          return `Error: Move "${moveName}" not found in the move database. Check the spelling or use get_pokemon_details to see a Pokemon's learnable moves.`;
        return JSON.stringify(
          {
            name: move.name,
            type: move.type,
            category: move.category,
            basePower: move.basePower,
            accuracy: move.accuracy === 0 ? "Always hits" : move.accuracy,
            pp: move.pp,
            priority: move.priority,
            target: move.target,
            flags: move.flags,
            secondaryEffect: move.secondary,
            selfBoost: move.selfBoost,
            fieldEffect: move.fieldEffect,
            effect: move.effect,
            multiHit: move.multiHit,
            ignoresAbility: move.ignoresAbility,
          },
          null,
          2,
        );
      }

      case "list_available_archetypes": {
        const names = getArchetypeNames();
        return JSON.stringify(
          {
            count: names.length,
            archetypes: names,
          },
          null,
          2,
        );
      }

      // ── Team Building & Analysis ───────────────────────────────────────

      case "suggest_teammates": {
        const teamIds = args.teamPokemonIds as number[];
        const count = Number(args.count) || 12;
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const results = suggestTeammates(team, count);
        return JSON.stringify(
          results.map((r: TeammateSuggestion) => ({
            pokemon: r.pokemon.name,
            score: r.score,
            reasons: r.reasons,
            fills: r.fills,
            overlaps: r.overlaps,
          })),
          null,
          2,
        );
      }

      case "get_slot_suggestions": {
        const pokemonId = Number(args.pokemonId);
        const teamIds = args.teamPokemonIds as number[];
        const pokemon = getPokemon(pokemonId);
        if (!pokemon) return `Error: Pokemon with ID ${pokemonId} not found.`;
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const result = getSlotSuggestions(pokemon, team);
        return JSON.stringify(
          {
            bestSet: result.bestSet
              ? {
                  name: result.bestSet.name,
                  ability: result.bestSet.ability,
                  item: result.bestSet.item,
                  moves: result.bestSet.moves,
                  sp: serializeStatPoints(result.bestSet.sp),
                }
              : null,
            altSets: result.altSets.map((s: SetSuggestion) => ({
              name: s.set.name,
              reason: s.reason,
              matchScore: s.matchScore,
            })),
            suggestedMoves: result.suggestedMoves.map((m: MoveSuggestion) => ({
              name: m.name,
              score: m.score,
              reason: m.reason,
            })),
            suggestedAbilities: result.suggestedAbilities.map(
              (a: AbilitySuggestion) => ({
                name: a.name,
                score: a.score,
                reason: a.reason,
              }),
            ),
            suggestedNature: result.suggestedNature as NatureSuggestion,
            suggestedSP: result.suggestedSP as SPSuggestion,
            role: result.role,
          },
          null,
          2,
        );
      }

      case "suggest_sets": {
        const pokemonId = Number(args.pokemonId);
        const teamIds = args.teamPokemonIds as number[];
        const pokemon = getPokemon(pokemonId);
        if (!pokemon) return `Error: Pokemon with ID ${pokemonId} not found.`;
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const results = suggestSets(pokemon, team);
        return JSON.stringify(
          results.map((s: SetSuggestion) => ({
            name: s.set.name,
            ability: s.set.ability,
            item: s.set.item,
            moves: s.set.moves,
            sp: serializeStatPoints(s.set.sp),
            reason: s.reason,
            matchScore: s.matchScore,
          })),
          null,
          2,
        );
      }

      case "suggest_moves": {
        const pokemonId = Number(args.pokemonId);
        const teamIds = args.teamPokemonIds as number[];
        const pokemon = getPokemon(pokemonId);
        if (!pokemon) return `Error: Pokemon with ID ${pokemonId} not found.`;
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const results = suggestMoves(pokemon, team);
        return JSON.stringify(
          results.map((m: MoveSuggestion) => ({
            name: m.name,
            score: m.score,
            reason: m.reason,
          })),
          null,
          2,
        );
      }

      case "suggest_abilities": {
        const pokemonId = Number(args.pokemonId);
        const teamIds = args.teamPokemonIds as number[];
        const pokemon = getPokemon(pokemonId);
        if (!pokemon) return `Error: Pokemon with ID ${pokemonId} not found.`;
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const results = suggestAbilities(pokemon, team);
        return JSON.stringify(
          results.map((a: AbilitySuggestion) => ({
            name: a.name,
            score: a.score,
            reason: a.reason,
          })),
          null,
          2,
        );
      }

      case "analyze_partial_team": {
        const teamIds = args.teamPokemonIds as number[];
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const result = analyzePartialTeam(team);
        return JSON.stringify(
          {
            overallRating: result.overallRating,
            synergyScore: result.synergy.overallScore,
            missingRoles: result.missingRoles,
            criticalWeaknesses: result.criticalWeaknesses,
            threatAnalysis: result.threatAnalysis,
            suggestions: result.synergy.suggestions.slice(0, 8),
          },
          null,
          2,
        );
      }

      case "analyze_team_synergy": {
        const teamIds = args.teamPokemonIds as number[];
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const result = analyzeTeamSynergy(team);
        return JSON.stringify(
          {
            overallScore: result.overallScore,
            typeScore: result.typeScore,
            speedScore: result.speedScore,
            roleScore: result.roleScore,
            archetypeScore: result.archetypeScore,
            weaknessProfile: result.weaknessProfile,
            resistanceProfile: result.resistanceProfile,
            uncoveredTypes: result.uncoveredTypes,
            detectedArchetypes: result.detectedArchetypes.map(
              (a: ArchetypeProfile) => ({
                archetype: a.archetype,
                confidence: a.confidence,
                description: a.description,
              }),
            ),
            roles: result.roles.map((r: PokemonRole) => ({
              pokemon: r.pokemonName,
              roles: r.roles,
              primaryRole: r.primaryRole,
            })),
            strengths: result.strengths,
            weaknesses: result.weaknesses,
            suggestions: result.suggestions,
          },
          null,
          2,
        );
      }

      case "detect_archetypes": {
        const teamIds = args.teamPokemonIds as number[];
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const results = detectArchetypes(team);
        return JSON.stringify(
          results.map((a: ArchetypeProfile) => ({
            archetype: a.archetype,
            confidence: a.confidence,
            description: a.description,
            keyPokemon: a.keyPokemon,
          })),
          null,
          2,
        );
      }

      // ── Matchup & Damage Analysis ──────────────────────────────────────

      case "analyze_team": {
        const teamName = String(
          args.teamName || context?.teamName || "My Team",
        );
        const threatCount = Number(args.threatCount) || 30;
        const teamSlots = (args.teamSlots as any[]) || context?.teamSlots || [];

        if (teamSlots.length === 0) {
          return JSON.stringify(
            {
              note: "Team slot data not provided. Include teamSlots in the request body for full analysis.",
              teamName,
              threatCount,
            },
            null,
            2,
          );
        }

        const deserializedSlots = teamSlots.map((s: any) => {
          const pokemon = getPokemon(s.pokemonId);
          return {
            pokemon,
            ability: s.ability,
            nature: s.nature,
            moves: s.moves || [],
            statPoints: deserializeStatPoints(s.statPoints || {}),
            item: s.item,
            isMega: s.isMega,
          };
        });

        const result = analyzeTeam(deserializedSlots, teamName, threatCount);
        return JSON.stringify(
          {
            teamName: result.teamName,
            results: result.results.map((r: any) => ({
              pokemonName: r.pokemonName,
              speedValue: r.speedValue,
              speedEntriesCount: r.speedEntries.length,
              threatenedByCount: r.threatenedBy.length,
              youKOCount: r.youKO.length,
              survivesAndThreatensCount: r.survivesAndThreatens.length,
            })),
          },
          null,
          2,
        );
      }

      case "generate_strategy_tree": {
        const oppTeamIds = args.opponentTeamPokemonIds as number[];

        // Build "my team" from the active team context
        const myTeamSlots = context?.teamSlots ?? [];
        if (myTeamSlots.length < 2) {
          return JSON.stringify(
            {
              error:
                "Strategy tree generation requires an active team with at least 2 Pokemon. Call set_active_team first, then call this tool.",
            },
            null,
            2,
          );
        }

        // Resolve my team Pokemon and sets from context
        const myTeamPokemon: ChampionsPokemon[] = [];
        const myTeamSets: CommonSet[] = [];
        for (const slot of myTeamSlots) {
          if (slot.pokemonId === undefined) continue;
          const pokemon = getPokemon(slot.pokemonId);
          if (!pokemon) continue;
          myTeamPokemon.push(pokemon);
          myTeamSets.push({
            name: pokemon.name,
            nature: slot.nature ?? "Hardy",
            ability: slot.ability ?? "",
            item: slot.item ?? "",
            moves: slot.moves ?? [],
            sp: (slot.statPoints as StatPoints) ?? {
              hp: 0,
              attack: 0,
              defense: 0,
              spAtk: 0,
              spDef: 0,
              speed: 0,
            },
          });
        }

        if (myTeamPokemon.length < 2) {
          return JSON.stringify(
            {
              error:
                "Active team has fewer than 2 valid Pokemon. Add more Pokemon to your team.",
            },
            null,
            2,
          );
        }

        // Resolve opponent team from threat data (competitive sets)
        const oppTeamPokemon: ChampionsPokemon[] = [];
        const oppTeamSets: CommonSet[] = [];
        for (const oppId of oppTeamIds) {
          const id = Number(oppId);
          const threat = loadThreat(id);
          if (threat) {
            oppTeamPokemon.push(threat.pokemon);
            oppTeamSets.push({
              name: threat.pokemon.name,
              nature: threat.set.nature,
              ability: threat.set.ability,
              item: threat.set.item,
              moves: threat.set.moves,
              sp: threat.set.sp,
            });
          } else {
            const pokemon = getPokemon(id);
            if (pokemon) {
              oppTeamPokemon.push(pokemon);
              oppTeamSets.push({
                name: pokemon.name,
                nature: "Hardy",
                ability: pokemon.abilities[0]?.name ?? "",
                item: "",
                moves: pokemon.moves.slice(0, 4).map((m) => m.name),
                sp: {
                  hp: 0,
                  attack: 0,
                  defense: 0,
                  spAtk: 0,
                  spDef: 0,
                  speed: 0,
                },
              });
            }
          }
        }

        if (oppTeamPokemon.length < 2) {
          return JSON.stringify(
            {
              error:
                "Opponent team has fewer than 2 valid Pokemon. Provide valid Pokemon IDs in opponentTeamPokemonIds.",
            },
            null,
            2,
          );
        }

        // Run simulation to get best lead combo + win rate
        const simResult = runTeamTestSimulation(
          myTeamPokemon,
          myTeamSets,
          oppTeamPokemon,
          oppTeamSets,
          200,
        );

        const bestLead = simResult.leadCombos[0];
        if (!bestLead) {
          return JSON.stringify(
            {
              error:
                "Could not determine a best lead combination for this matchup.",
              winRate: simResult.winRate,
            },
            null,
            2,
          );
        }

        // Generate the strategy tree
        const tree = generateStrategyTree(
          myTeamPokemon,
          myTeamSets,
          oppTeamPokemon,
          oppTeamSets,
          bestLead,
          simResult.winRate,
        );

        if (!tree) {
          return JSON.stringify(
            {
              error: "Strategy tree could not be generated for this matchup.",
              bestLead: { lead1: bestLead.lead1, lead2: bestLead.lead2 },
              winRate: simResult.winRate,
            },
            null,
            2,
          );
        }

        return JSON.stringify(
          {
            archetype: tree.archetype,
            winCondition: tree.winCondition,
            winRate: simResult.winRate,
            bestLead: { lead1: bestLead.lead1, lead2: bestLead.lead2 },
            myTeam: myTeamPokemon.map((p) => p.name),
            opponentTeam: oppTeamPokemon.map((p) => p.name),
            scenarios: tree.root.children.map((scenario) => ({
              label: scenario.label,
              detail: scenario.detail,
              nodes: scenario.children,
            })),
          },
          null,
          2,
        );
      }

      case "calc_survival_scenario": {
        const userPokemonId = Number(args.userPokemonId);
        const threatPokemonId = Number(args.threatPokemonId);
        const moveName = String(args.moveName);
        const userAbility = String(args.userAbility || "");
        const userItem = String(args.userItem || "");
        const userSP = deserializeStatPoints(
          args.userSP as Record<string, unknown>,
        );
        const userNature = String(args.userNature || "Hardy") as NatureName;

        const userPokemon = getPokemon(userPokemonId);
        if (!userPokemon)
          return `Error: Pokemon with ID ${userPokemonId} not found.`;
        const threat = loadThreat(threatPokemonId);
        if (!threat)
          return `Error: Pokemon with ID ${threatPokemonId} not found as a threat.`;

        const scenario = calcSurvivalScenario(
          userPokemon.baseStats,
          userSP,
          userNature,
          userPokemon.types as PokemonType[],
          userAbility,
          userItem,
          threat,
          moveName,
        );
        return JSON.stringify(
          {
            userPokemon: userPokemon.name,
            threat: {
              name: threat.pokemon.name,
              ability: threat.set.ability,
              item: threat.set.item,
            },
            move: moveName,
            damageMin: scenario.damageResult.damage[0],
            damageMax: scenario.damageResult.damage[1],
            percentMin: scenario.damageResult.percentHP[0],
            percentMax: scenario.damageResult.percentHP[1],
            survivesMin: scenario.survivesMin,
            survivesMax: scenario.survivesMax,
            koChanceText: scenario.koChanceText,
            is2HKO: scenario.is2HKO,
          },
          null,
          2,
        );
      }

      case "suggest_survival_investments": {
        const userPokemonId = Number(args.userPokemonId);
        const threatPokemonId = Number(args.threatPokemonId);
        const moveName = String(args.moveName);
        const userAbility = String(args.userAbility || "");
        const userItem = String(args.userItem || "");
        const userSP = deserializeStatPoints(
          args.userSP as Record<string, unknown>,
        );
        const userNature = String(args.userNature || "Hardy") as NatureName;
        const require2HKO = Boolean(args.require2HKO);

        const userPokemon = getPokemon(userPokemonId);
        if (!userPokemon)
          return `Error: Pokemon with ID ${userPokemonId} not found.`;
        const threat = loadThreat(threatPokemonId);
        if (!threat)
          return `Error: Pokemon with ID ${threatPokemonId} not found as a threat.`;

        const suggestions = suggestSurvivalInvestments(
          userPokemon.baseStats,
          userSP,
          userNature,
          userPokemon.types as PokemonType[],
          userAbility,
          userItem,
          threat,
          moveName,
          require2HKO,
        );
        return JSON.stringify(
          suggestions.map((s: SurvivalSuggestion) => ({
            label: s.label,
            description: s.description,
            type: s.type,
            newSP: serializeStatPoints(s.newSP),
          })),
          null,
          2,
        );
      }

      case "get_best_offensive_move": {
        const userPokemonId = Number(args.userPokemonId);
        const threatPokemonId = Number(args.threatPokemonId);
        const userMoves = args.userMoves as string[];
        const userAbility = String(args.userAbility || "");
        const userItem = String(args.userItem || "");
        const userSP = deserializeStatPoints(
          args.userSP as Record<string, unknown>,
        );
        const userNature = String(args.userNature || "Hardy") as NatureName;

        const userPokemon = getPokemon(userPokemonId);
        if (!userPokemon)
          return `Error: Pokemon with ID ${userPokemonId} not found.`;
        const threat = loadThreat(threatPokemonId);
        if (!threat)
          return `Error: Pokemon with ID ${threatPokemonId} not found as a threat.`;

        const result = getBestOffensiveMove(
          userMoves,
          userPokemon.baseStats,
          userSP,
          userNature,
          userPokemon.types as PokemonType[],
          userAbility,
          userItem,
          threat,
        );
        if (!result)
          return JSON.stringify(
            { message: "No damaging moves found or move not effective." },
            null,
            2,
          );
        return JSON.stringify(
          {
            moveName: result.moveName,
            damageMin: result.damageResult.damage[0],
            damageMax: result.damageResult.damage[1],
            percentMin: result.damageResult.percentHP[0],
            percentMax: result.damageResult.percentHP[1],
          },
          null,
          2,
        );
      }

      case "optimize_sp_for_survival": {
        const userPokemonId = Number(args.userPokemonId);
        const threatPokemonId = Number(args.threatPokemonId);
        const moveName = String(args.moveName);
        const userAbility = String(args.userAbility || "");
        const userItem = String(args.userItem || "");
        const userSP = deserializeStatPoints(
          args.userSP as Record<string, unknown>,
        );
        const userNature = String(args.userNature || "Hardy") as NatureName;
        const require2HKO = Boolean(args.require2HKO);

        const userPokemon = getPokemon(userPokemonId);
        if (!userPokemon)
          return `Error: Pokemon with ID ${userPokemonId} not found.`;
        const threat = loadThreat(threatPokemonId);
        if (!threat)
          return `Error: Pokemon with ID ${threatPokemonId} not found as a threat.`;

        const result = optimizeSPForSurvival(
          userPokemon.baseStats,
          userSP,
          userNature,
          userPokemon.types as PokemonType[],
          userAbility,
          userItem,
          threat,
          moveName,
          require2HKO,
        );
        if (!result)
          return JSON.stringify(
            {
              message:
                "Cannot survive this hit even with optimal SP distribution.",
            },
            null,
            2,
          );
        return JSON.stringify(
          { optimizedSP: serializeStatPoints(result) },
          null,
          2,
        );
      }

      case "get_effective_speed": {
        const baseSpeed = Number(args.baseSpeed);
        const result = getEffectiveSpeed(baseSpeed, {
          tailwind: Boolean(args.tailwind),
          choiceScarf: Boolean(args.choiceScarf),
          paralysis: Boolean(args.paralysis),
          weatherSpeedDoubled: Boolean(args.weatherSpeedDoubled),
          trickRoom: Boolean(args.trickRoom),
        });
        return JSON.stringify({ effectiveSpeed: result }, null, 2);
      }

      // ── Meta & Threat Data ─────────────────────────────────────────────

      case "search_pokemon": {
        const query = String(args.query || "").trim();
        if (!query) return JSON.stringify({ error: "No query provided." });
        const numQuery = Number(query);
        const results = POKEMON_SEED.filter((p) => {
          if (!isNaN(numQuery) && String(numQuery) === query)
            return p.id === numQuery || p.dexNumber === numQuery;
          return p.name.toLowerCase().includes(query.toLowerCase());
        }).slice(0, 10);
        if (results.length === 0)
          return JSON.stringify({
            error: `No Pokemon found matching "${query}".`,
          });
        return JSON.stringify(
          results.map((p) => ({
            id: p.id,
            name: p.name,
            dexNumber: p.dexNumber,
            types: p.types,
            baseStats: p.baseStats,
            abilities: p.abilities.map((a) => ({
              name: a.name,
              description: a.description,
              isHidden: a.isHidden,
            })),
          })),
          null,
          2,
        );
      }

      case "get_top_threats": {
        const limit = Number(args.limit) || 30;
        const threats = getTopThreatsRaw(limit);
        return JSON.stringify(
          {
            dataDate: "2026-05-27",
            source: "Pikalytics Champions Tournaments",
            warning:
              "Tournament data may be stale — verify with current sources before relying on meta rankings",
            threatCount: threats.length,
            threats: threats.map((t) => ({
              name: t.name,
              pokemonId: t.pokemonId,
              usageRate: t.usageRate,
              winRate: t.winRate,
              bringRate: t.bringRate,
              leadRate: t.leadRate,
            })),
          },
          null,
          2,
        );
      }

      case "load_threat": {
        const pokemonId = Number(args.pokemonId);
        const isMega = Boolean(args.isMega);
        const threat = loadThreat(pokemonId, isMega);
        if (!threat) return `Error: Pokemon with ID ${pokemonId} not found.`;
        return JSON.stringify(
          {
            name: threat.pokemon.name,
            isMega: threat.isMega,
            ability: threat.set.ability,
            item: threat.set.item,
            moves: threat.set.moves,
            sp: serializeStatPoints(threat.set.sp),
            nature: threat.set.nature,
          },
          null,
          2,
        );
      }

      case "get_threat_damaging_moves": {
        const pokemonId = Number(args.threatPokemonId);
        const isMega = Boolean(args.isMega);
        const threat = loadThreat(pokemonId, isMega);
        if (!threat) return `Error: Pokemon with ID ${pokemonId} not found.`;
        const damagingMoves = threat.set.moves.filter((moveName) => {
          const move = threat.pokemon.moves.find((m) => m.name === moveName);
          return move && move.category !== "status" && (move.power ?? 0) > 0;
        });
        return JSON.stringify({ damagingMoves }, null, 2);
      }

      case "get_speed_tier_report": {
        const teamIds = args.teamPokemonIds as number[];
        const nature = String(args.nature || "Jolly") as NatureName;
        const maxSP = Number(args.maxSP) || 32;
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const report = getSpeedTierReport(team, nature, maxSP);
        return JSON.stringify(
          report.map((r: any) => ({
            name: r.name,
            baseSpeed: r.baseSpeed,
            minSpeed: r.minSpeed,
            neutralSpeed: r.neutralSpeed,
            maxSpeed: r.maxSpeed,
            scarfSpeed: r.scarfSpeed,
            tailwindSpeed: r.tailwindSpeed,
          })),
          null,
          2,
        );
      }

      case "identify_roles": {
        const pokemonId = Number(args.pokemonId);
        const pokemon = getPokemon(pokemonId);
        if (!pokemon) return `Error: Pokemon with ID ${pokemonId} not found.`;
        const result = identifyRoles(pokemon);
        return JSON.stringify(
          {
            name: result.pokemonName,
            roles: result.roles,
            primaryRole: result.primaryRole,
            vgcViability: result.vgcViability,
          },
          null,
          2,
        );
      }

      // ── Type Chart & Coverage ──────────────────────────────────────────

      case "get_all_types": {
        const result = getAllTypes();
        return JSON.stringify({ types: result }, null, 2);
      }

      case "get_weaknesses": {
        const types = args.types as string[];
        const result = getWeaknesses(types as PokemonType[]);
        return JSON.stringify({ weaknesses: result }, null, 2);
      }

      case "get_resistances": {
        const types = args.types as string[];
        const result = getResistances(types as PokemonType[]);
        return JSON.stringify({ resistances: result }, null, 2);
      }

      case "get_immunities": {
        const types = args.types as string[];
        const result = getImmunities(types as PokemonType[]);
        return JSON.stringify({ immunities: result }, null, 2);
      }

      case "get_matchup": {
        const attackType = String(args.attackType) as PokemonType;
        const defenderTypes = args.defenderTypes as string[];
        const result = getMatchup(attackType, defenderTypes as PokemonType[]);
        return JSON.stringify(
          { attackType, defenderTypes, effectiveness: result },
          null,
          2,
        );
      }

      case "defensive_synergy": {
        const types1 = args.types1 as string[];
        const types2 = args.types2 as string[];
        const result = defensiveSynergy(
          types1 as PokemonType[],
          types2 as PokemonType[],
        );
        return JSON.stringify({ synergyScore: result }, null, 2);
      }

      case "offensive_coverage": {
        const moveTypes = args.moveTypes as string[];
        const result = offensiveCoverage(moveTypes as PokemonType[]);
        return JSON.stringify(
          { coverage: result, coveragePercent: Math.round(result * 100) + "%" },
          null,
          2,
        );
      }

      case "team_type_coverage": {
        const teamIds = args.teamPokemonIds as number[];
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        // Extract move types from each Pokemon's full moveset (not their typing)
        const teamMoveTypes = team.map((p) =>
          p.moves
            .filter((m) => m.category !== "status")
            .map((m) => m.type as PokemonType),
        );
        const result = offensiveTypeCoverage(teamMoveTypes);
        return JSON.stringify({ coverage: result }, null, 2);
      }

      case "list_saved_teams": {
        const teams = getAllTeams();
        return JSON.stringify(
          teams.map((t) => ({
            id: t.id,
            name: t.name,
            is_active: t.is_active ?? false,
            updatedAt: t.updated_at,
            slotCount: JSON.parse(t.slots).length,
          })),
          null,
          2,
        );
      }

      case "set_active_team": {
        const teamId = String(args.teamId);
        const result = setActiveTeam(teamId);
        if (!result) {
          return `Error: Team with ID "${teamId}" not found.`;
        }
        return JSON.stringify(
          {
            message: `Team "${result.name}" is now active.`,
            teamId: result.id,
            name: result.name,
            slotCount: JSON.parse(result.slots).length,
          },
          null,
          2,
        );
      }

      // ── Stats & Calculation ────────────────────────────────────────────

      case "calculate_stats": {
        const baseStats = args.baseStats as Record<string, number>;
        const sp = deserializeStatPoints(args.sp as Record<string, unknown>);
        const nature = String(args.nature || "Hardy") as NatureName;
        const result = calculateStats(baseStats, sp, nature);
        return JSON.stringify(result, null, 2);
      }

      case "classify_stat_profile": {
        const baseStats = args.baseStats as Record<string, number>;
        const result = classifyStatProfile(baseStats);
        return JSON.stringify(result, null, 2);
      }

      case "get_nature_modifier": {
        const nature = String(args.nature || "Hardy") as NatureName;
        const stat = String(args.stat || "attack");
        const result = getNatureModifier(nature, stat as any);
        return JSON.stringify({ nature, stat, modifier: result }, null, 2);
      }

      case "suggest_nature": {
        const sp = deserializeStatPoints(args.sp as Record<string, unknown>);
        const category = String(args.category || "physical") as
          | "physical"
          | "special"
          | "mixed"
          | "support";
        const result = suggestNature(sp, category);
        return JSON.stringify({ suggestedNature: result }, null, 2);
      }

      case "suggest_sp_distribution": {
        const pokemonId = Number(args.pokemonId);
        const teamIds = args.teamPokemonIds as number[];
        const pokemon = getPokemon(pokemonId);
        if (!pokemon) return `Error: Pokemon with ID ${pokemonId} not found.`;
        const team = teamIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const result = suggestSPDistribution(pokemon, team);
        return JSON.stringify(
          {
            sp: serializeStatPoints(result.sp),
            focus: result.focus,
            reason: result.reason,
          },
          null,
          2,
        );
      }

      // ── Items & Optimization ───────────────────────────────────────────

      case "suggest_items": {
        const role = String(args.role || "support") as
          | "physical-attacker"
          | "special-attacker"
          | "support"
          | "tank"
          | "sweeper";
        const result = suggestItems(role);
        return JSON.stringify({ recommendedItems: result }, null, 2);
      }

      case "get_item_damage_multiplier": {
        const itemName = String(args.itemName || "");
        const moveType = String(args.moveType || "normal") as PokemonType;
        const moveCategory = String(args.moveCategory || "physical") as
          | "physical"
          | "special"
          | "status";
        const isSuperEffective = Boolean(args.isSuperEffective);
        const result = getItemDamageMultiplier(
          itemName,
          moveType,
          moveCategory,
          isSuperEffective,
        );
        return JSON.stringify({ itemName, multiplier: result }, null, 2);
      }

      case "get_item_speed_multiplier": {
        const itemName = String(args.itemName || "");
        const result = getItemSpeedMultiplier(itemName);
        return JSON.stringify({ itemName, multiplier: result }, null, 2);
      }

      case "score_pokemon_fit": {
        const candidateId = Number(args.candidatePokemonId);
        const existingIds = args.existingTeamPokemonIds as number[];
        const candidate = getPokemon(candidateId);
        if (!candidate)
          return `Error: Pokemon with ID ${candidateId} not found.`;
        const existingTeam = existingIds
          .map(getPokemon)
          .filter((p): p is ChampionsPokemon => p !== undefined);
        const result = scorePokemonFit(candidate, existingTeam);
        return JSON.stringify(result, null, 2);
      }

      // ── Team Generation ────────────────────────────────────────────────

      case "generate_teams": {
        const count = Number(args.count) || 5;
        const results = generateTeams(count);
        return JSON.stringify(
          results.map((t: GeneratedTeam) => ({
            name: t.name,
            synergyScore: t.synergy?.overallScore,
            pokemon: t.pokemon.map((p: ChampionsPokemon) => p.name),
            sets: t.sets?.map((s: any) => ({
              pokemon: s.pokemon,
              set: s.set.name,
            })),
          })),
          null,
          2,
        );
      }

      case "generate_teams_with_pokemon": {
        const pokemonId = Number(args.pokemonId);
        const count = Number(args.count) || 5;
        const results = generateTeamsWithPokemon(pokemonId, count);
        return JSON.stringify(
          results.map((t: GeneratedTeam) => ({
            name: t.name,
            synergyScore: t.synergy?.overallScore,
            pokemon: t.pokemon.map((p: ChampionsPokemon) => p.name),
          })),
          null,
          2,
        );
      }

      case "generate_from_archetype": {
        const archetypeName = String(args.archetypeName || "");
        const result = generateFromArchetype(archetypeName);
        if (!result) {
          const available = getArchetypeNames();
          return JSON.stringify(
            {
              error: `Archetype "${archetypeName}" not found. Available: ${available.join(", ")}`,
            },
            null,
            2,
          );
        }
        return JSON.stringify(
          {
            name: result.name,
            description: result.description,
            synergyScore: result.synergy?.overallScore,
            pokemon: result.pokemon.map((p: ChampionsPokemon) => p.name),
            sets: result.sets?.map((s: any) => ({
              pokemon: s.pokemon,
              set: s.set.name,
            })),
          },
          null,
          2,
        );
      }

      default:
        return `Error: Unknown tool "${name}". Available tools: get_game_info, get_pokemon_details, list_available_items, get_move_info, list_available_archetypes, search_pokemon, list_saved_teams, set_active_team, get_all_types, get_matchup, get_weaknesses, get_resistances, get_immunities, defensive_synergy, offensive_coverage, team_type_coverage, suggest_teammates, get_slot_suggestions, suggest_sets, suggest_moves, suggest_abilities, analyze_partial_team, analyze_team_synergy, detect_archetypes, analyze_team, generate_strategy_tree, calc_survival_scenario, suggest_survival_investments, get_best_offensive_move, optimize_sp_for_survival, get_effective_speed, get_top_threats, load_threat, get_threat_damaging_moves, get_speed_tier_report, identify_roles, calculate_stats, classify_stat_profile, get_nature_modifier, suggest_nature, suggest_sp_distribution, suggest_items, get_item_damage_multiplier, get_item_speed_multiplier, score_pokemon_fit, generate_teams, generate_teams_with_pokemon, generate_from_archetype`;
    }
  } catch (error) {
    return `Error executing tool "${name}": ${error instanceof Error ? error.message : String(error)}`;
  }
}
