// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - AI ASSISTANT CONTEXT BUILDER
// Builds system prompt and injects team context for the AI assistant
// ═══════════════════════════════════════════════════════════════════════════════

import type {
  ChampionTool,
  AssistantMessage,
  TeamContext,
} from "./assistant-types";
import type { ChampionsPokemon, StatPoints } from "@/lib/types";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { getTopUsagePokemon } from "@/lib/engine/vgc-data";

// ── Champions Rules Summary ─────────────────────────────────────────────────

const CHAMPIONS_RULES = `You are an expert VGC (Video Game Championships) assistant for Pokemon Champions.
Champions is a competitive Pokemon game with these key rules:

- Level 50 doubles format
- 6 Pokemon on roster, pick 4 to battle
- Stat Points (SP) system: each Pokemon gets 66 total SP to distribute across 6 stats
  - Max 32 SP per stat
  - Replaces traditional EV/IV system
- Natures: +10% to one stat, -10% to another (25 natures total)
- Items: Held items provide stat modifiers, damage multipliers, and effects
  - Choice Scarf: 1.5x speed, locks to first move
  - Choice Band/Specs: 1.5x damage, locks to first move
  - Life Orb: 1.3x damage with recoil
- Mega Evolution: Some Pokemon can mega evolve once per battle
- Weather: Drought (sun), Drizzle (rain), Sand Stream (sand), Snow Warning (snow)
- Key VGC mechanics: Protect, Fake Out, Tailwind, Trick Room, Intimidate, Follow Me
- Trick Room reverses speed order (slowest moves first) for 5 turns
- Doubles format: Both Pokemon attack simultaneously, many moves target both sides

When answering questions, ALWAYS use the available tools to get accurate data.
Never guess or hallucinate Pokemon stats, moves, abilities, or competitive sets.
If you need data about a Pokemon's set, win rate, or matchups, call the appropriate tool.`;

// ── System Prompt Builder ───────────────────────────────────────────────────

export function buildSystemPrompt(tools: ChampionTool[]): string {
  const toolDescriptions = tools
    .map(
      (t) =>
        `TOOL: ${t.name}\n  Description: ${t.description}\n  Parameters: ${JSON.stringify(t.parameters)}`,
    )
    .join("\n\n");

  return `${CHAMPIONS_RULES}

AVAILABLE TOOLS:
${toolDescriptions}

INSTRUCTIONS:
1. Use tools to get accurate data before answering
2. When the user has a team loaded, reference it in your responses
3. If a tool requires team context and the user has a team, use it automatically
4. Be concise but thorough in your explanations
5. When showing damage calculations or survival scenarios, explain what the numbers mean
6. For team building advice, consider role balance, type coverage, and meta threats
7. If you need more information to give good advice, ask the user clarifying questions
8. Tool calls should be specific and include all required parameters`;
}

// ── Team Context Builder ────────────────────────────────────────────────────

export function buildTeamContext(
  slots: Array<{
    pokemon: ChampionsPokemon | null;
    ability?: string;
    nature?: string;
    moves: string[];
    item?: string;
    statPoints: StatPoints;
    isMega?: boolean;
  }>,
  teamName: string,
): TeamContext | null {
  const nonEmptySlots = slots.filter((s) => s.pokemon !== null);
  if (nonEmptySlots.length === 0) return null;

  const topThreats = getTopUsagePokemon(10).map((t) => ({
    name: t.name,
    bringRate: t.bringRate,
    winRate: t.winRate,
  }));

  return {
    teamName,
    slots: nonEmptySlots.map((s) => ({
      pokemonName: s.pokemon!.name,
      ability: s.ability,
      nature: s.nature,
      moves: s.moves,
      item: s.item,
      statPoints: s.statPoints,
      isMega: s.isMega,
    })),
    topThreats,
  };
}

// ── Team Context Message Injector ───────────────────────────────────────────

export function injectTeamContext(
  messages: AssistantMessage[],
  teamContext: TeamContext | null,
): AssistantMessage[] {
  if (!teamContext || teamContext.slots.length === 0) return messages;

  const teamSummary = teamContext.slots
    .map(
      (s) =>
        `${s.pokemonName}${s.isMega ? " (Mega)" : ""} | Ability: ${s.ability || "?"} | Nature: ${s.nature || "?"} | Item: ${s.item || "?"} | Moves: ${s.moves.join(", ")}`,
    )
    .join("\n");

  const threatSummary = teamContext.topThreats
    .map(
      (t) =>
        `${t.name} (${Math.round(t.bringRate)}% bring rate, ${Math.round(t.winRate)}% win rate)`,
    )
    .join(", ");

  const contextMessage: AssistantMessage = {
    role: "system",
    content: `CURRENT TEAM CONTEXT:
Team: ${teamContext.teamName}
${teamSummary}

Top 10 Meta Threats (by bring rate): ${threatSummary}

When answering questions about this team, use the tools to get accurate data rather than guessing.`,
  };

  // Insert after any existing system messages but before user messages
  const firstUserIndex = messages.findIndex((m) => m.role === "user");
  if (firstUserIndex >= 0) {
    return [
      ...messages.slice(0, firstUserIndex),
      contextMessage,
      ...messages.slice(firstUserIndex),
    ];
  }

  return [...messages, contextMessage];
}

// ── Pokemon ID to ChampionsPokemon resolver ─────────────────────────────────

export function getPokemonById(id: number): ChampionsPokemon | undefined {
  return POKEMON_SEED.find((p) => p.id === id);
}

export function resolvePokemonIds(ids: number[]): ChampionsPokemon[] {
  return ids
    .map((id) => getPokemonById(id))
    .filter((p): p is ChampionsPokemon => p !== undefined);
}
