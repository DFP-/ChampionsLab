// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - AI ASSISTANT TOOL DEFINITIONS
// Maps engine functions to OpenAI function calling schema
// ═══════════════════════════════════════════════════════════════════════════════

import type { ChampionTool } from "./assistant-types";
import type {
  ChampionsPokemon,
  BaseStats,
  StatPoints,
  PokemonType,
} from "@/lib/types";

// ── Helper: serialize ChampionsPokemon for tool input ────────────────────────

function pokemonToId(pokemon: ChampionsPokemon | unknown): number {
  if (typeof pokemon === "number") return pokemon;
  if (pokemon && typeof pokemon === "object" && "id" in pokemon)
    return (pokemon as { id: number }).id;
  if (typeof pokemon === "string") return parseInt(pokemon, 10);
  return 0;
}

// ── TEAM BUILDING & ANALYSIS TOOLS (8) ──────────────────────────────────────

export const TEAM_BUILDING_TOOLS: ChampionTool[] = [
  {
    name: "suggest_teammates",
    description:
      "Recommend Pokemon to add to a partially-built team. Returns ranked suggestions with scores, reasons for synergy, roles filled, and role overlaps.",
    parameters: {
      type: "object",
      properties: {
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs currently on the team",
        },
        count: {
          type: "number",
          description: "Number of suggestions to return (default: 12)",
        },
      },
      required: ["teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "get_slot_suggestions",
    description:
      "Get a complete set recommendation for a Pokemon slot including best competitive set, alternative sets, suggested moves, abilities, nature, SP distribution, and role classification.",
    parameters: {
      type: "object",
      properties: {
        pokemonId: {
          type: "number",
          description: "Pokemon ID to get suggestions for",
        },
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description:
            "Array of Pokemon IDs currently on the team (for context)",
        },
      },
      required: ["pokemonId", "teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "suggest_sets",
    description:
      "Suggest the best competitive sets for a Pokemon given team context. Scores each set by how well it fits with existing teammates (weather synergy, trick room, etc.).",
    parameters: {
      type: "object",
      properties: {
        pokemonId: {
          type: "number",
          description: "Pokemon ID to suggest sets for",
        },
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs currently on the team",
        },
      },
      required: ["pokemonId", "teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "suggest_moves",
    description:
      "Suggest the best moves for a Pokemon on this team. Considers STAB, coverage gaps in team attacks, VGC staples (Protect, Tailwind, Fake Out), and speed control.",
    parameters: {
      type: "object",
      properties: {
        pokemonId: {
          type: "number",
          description: "Pokemon ID to suggest moves for",
        },
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs currently on the team",
        },
      },
      required: ["pokemonId", "teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "suggest_abilities",
    description:
      "Suggest the best ability for a Pokemon on this team. Considers VGC meta (Intimidate is king), weather synergy, anti-Intimidate options, and Prankster.",
    parameters: {
      type: "object",
      properties: {
        pokemonId: {
          type: "number",
          description: "Pokemon ID to suggest abilities for",
        },
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs currently on the team",
        },
      },
      required: ["pokemonId", "teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "analyze_partial_team",
    description:
      "Analyze an in-progress team and provide actionable feedback. Returns synergy score, missing roles, critical type weaknesses, threat analysis, and overall rating.",
    parameters: {
      type: "object",
      properties: {
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs currently on the team",
        },
      },
      required: ["teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "analyze_team_synergy",
    description:
      "Comprehensive team synergy analysis. Returns overall score (0-100), type/speed/role/archetype scores, weakness and resistance profiles, detected archetypes, roles, strengths, weaknesses, and suggestions.",
    parameters: {
      type: "object",
      properties: {
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs on the team to analyze",
        },
      },
      required: ["teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "detect_archetypes",
    description:
      "Detect team archetype from Pokemon composition. Identifies weather teams (rain, sun, sand, snow), trick room, tailwind, hyper-offense, bulky offense, balance, and more with confidence scores.",
    parameters: {
      type: "object",
      properties: {
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs on the team",
        },
      },
      required: ["teamPokemonIds"],
    },
    requiresTeam: true,
  },
];

// ── MATCHUP & DAMAGE ANALYSIS TOOLS (7) ─────────────────────────────────────

export const MATCHUP_TOOLS: ChampionTool[] = [
  {
    name: "analyze_team",
    description:
      "Run speed tier and KO threshold analysis against top meta threats. Returns per-Pokemon speed comparisons (within +/-50 speed) and KO data (threatened by, you KO, survives and threatens back).",
    parameters: {
      type: "object",
      properties: {
        teamName: {
          type: "string",
          description: "Name of the team for the report",
        },
        threatCount: {
          type: "number",
          description:
            "Number of top meta threats to analyze against (default: 30)",
        },
      },
      required: ["teamName"],
    },
    requiresTeam: true,
  },
  {
    name: "generate_strategy_tree",
    description:
      "Generate a multi-turn branching decision tree for a matchup. Provides strategic game plan with lead options, opponent responses, turn-by-turn actions, and endgame recommendations.",
    parameters: {
      type: "object",
      properties: {
        myTeamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of your team Pokemon IDs",
        },
        opponentTeamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of opponent team Pokemon IDs",
        },
      },
      required: ["myTeamPokemonIds", "opponentTeamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "calc_survival_scenario",
    description:
      "Calculate if a Pokemon survives a specific move from a threat. Returns damage range, percentage HP remaining, KO chance text, and whether it survives worst/best roll. Requires user Pokemon details and threat info.",
    parameters: {
      type: "object",
      properties: {
        userPokemonId: { type: "number", description: "Your Pokemon ID" },
        userAbility: { type: "string", description: "Your Pokemon's ability" },
        userItem: { type: "string", description: "Your Pokemon's held item" },
        userSP: {
          type: "object",
          description:
            "Stat points distribution {hp, attack, defense, spAtk, spDef, speed}",
        },
        userNature: {
          type: "string",
          description: "Nature name (e.g., 'Jolly', 'Modest')",
        },
        threatPokemonId: { type: "number", description: "Threat Pokemon ID" },
        moveName: {
          type: "string",
          description: "Move name to test survival against",
        },
      },
      required: [
        "userPokemonId",
        "userAbility",
        "userItem",
        "userSP",
        "userNature",
        "threatPokemonId",
        "moveName",
      ],
    },
    requiresTeam: false,
  },
  {
    name: "suggest_survival_investments",
    description:
      "Suggest SP investments to survive a specific hit. Returns multiple options: invest in HP, Def, SpD, or reallocate from offensive stats.",
    parameters: {
      type: "object",
      properties: {
        userPokemonId: { type: "number", description: "Your Pokemon ID" },
        userAbility: { type: "string", description: "Your Pokemon's ability" },
        userItem: { type: "string", description: "Your Pokemon's held item" },
        userSP: {
          type: "object",
          description: "Current stat points distribution",
        },
        userNature: { type: "string", description: "Nature name" },
        threatPokemonId: { type: "number", description: "Threat Pokemon ID" },
        moveName: { type: "string", description: "Move to survive" },
        require2HKO: {
          type: "boolean",
          description: "Require surviving 2 hits instead of 1",
        },
      },
      required: [
        "userPokemonId",
        "userAbility",
        "userItem",
        "userSP",
        "userNature",
        "threatPokemonId",
        "moveName",
      ],
    },
    requiresTeam: false,
  },
  {
    name: "get_best_offensive_move",
    description:
      "Find the best attacking move your Pokemon has against a specific threat. Returns the move name and damage result.",
    parameters: {
      type: "object",
      properties: {
        userPokemonId: { type: "number", description: "Your Pokemon ID" },
        userMoves: {
          type: "array",
          items: { type: "string" },
          description: "Your Pokemon's move names",
        },
        userAbility: { type: "string", description: "Your Pokemon's ability" },
        userItem: { type: "string", description: "Your Pokemon's held item" },
        userSP: { type: "object", description: "Stat points distribution" },
        userNature: { type: "string", description: "Nature name" },
        threatPokemonId: { type: "number", description: "Threat Pokemon ID" },
      },
      required: [
        "userPokemonId",
        "userMoves",
        "userAbility",
        "userItem",
        "userSP",
        "userNature",
        "threatPokemonId",
      ],
    },
    requiresTeam: false,
  },
  {
    name: "optimize_sp_for_survival",
    description:
      "Optimize SP distribution to minimize bulk needed while maximizing offense within the 66 SP cap. Returns optimal SP spread to survive a threat's move.",
    parameters: {
      type: "object",
      properties: {
        userPokemonId: { type: "number", description: "Your Pokemon ID" },
        userAbility: { type: "string", description: "Your Pokemon's ability" },
        userItem: { type: "string", description: "Your Pokemon's held item" },
        userSP: {
          type: "object",
          description: "Current stat points distribution",
        },
        userNature: { type: "string", description: "Nature name" },
        threatPokemonId: { type: "number", description: "Threat Pokemon ID" },
        moveName: { type: "string", description: "Move to survive" },
        require2HKO: {
          type: "boolean",
          description: "Require surviving 2 hits",
        },
      },
      required: [
        "userPokemonId",
        "userAbility",
        "userItem",
        "userSP",
        "userNature",
        "threatPokemonId",
        "moveName",
      ],
    },
    requiresTeam: false,
  },
  {
    name: "get_effective_speed",
    description:
      "Calculate effective speed of a Pokemon after applying modifiers like Choice Scarf, Tailwind, paralysis, weather doubles, or Trick Room.",
    parameters: {
      type: "object",
      properties: {
        baseSpeed: {
          type: "number",
          description: "Base speed stat (after SP and nature)",
        },
        tailwind: { type: "boolean", description: "If Tailwind is active" },
        choiceScarf: {
          type: "boolean",
          description: "If holding Choice Scarf",
        },
        paralysis: { type: "boolean", description: "If paralyzed (75% speed)" },
        weatherSpeedDoubled: {
          type: "boolean",
          description: "If weather doubles speed (e.g., Swift Swim in rain)",
        },
        trickRoom: { type: "boolean", description: "If Trick Room is active" },
      },
      required: ["baseSpeed"],
    },
    requiresTeam: false,
  },
];

// ── META & THREAT DATA TOOLS (5) ────────────────────────────────────────────

export const META_TOOLS: ChampionTool[] = [
  {
    name: "get_top_threats",
    description:
      "Get the top meta threats ranked by tournament bring rate. Returns Pokemon names, usage rates, win rates, and lead rates.",
    parameters: {
      type: "object",
      properties: {
        limit: {
          type: "number",
          description: "Number of top threats to return (default: 30)",
        },
      },
    },
    requiresTeam: false,
  },
  {
    name: "load_threat",
    description:
      "Load a threat Pokemon with its most common competitive set from usage data. Returns the Pokemon's standard ability, item, moves, and SP distribution.",
    parameters: {
      type: "object",
      properties: {
        pokemonId: { type: "number", description: "Pokemon ID to load" },
        isMega: {
          type: "boolean",
          description: "Whether this is a Mega evolution",
        },
      },
      required: ["pokemonId"],
    },
    requiresTeam: false,
  },
  {
    name: "get_threat_damaging_moves",
    description:
      "Get the damaging moves available to a threat Pokemon from its loaded competitive set.",
    parameters: {
      type: "object",
      properties: {
        threatPokemonId: { type: "number", description: "Threat Pokemon ID" },
        isMega: {
          type: "boolean",
          description: "Whether this is a Mega evolution",
        },
      },
      required: ["threatPokemonId"],
    },
    requiresTeam: false,
  },
  {
    name: "get_speed_tier_report",
    description:
      "Get per-Pokemon speed report including min/neutral/max speed values and scarf/tailwind modifiers. Useful for understanding who outspeeds whom.",
    parameters: {
      type: "object",
      properties: {
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs on the team",
        },
        nature: {
          type: "string",
          description: "Nature to use (default: Jolly)",
        },
        maxSP: { type: "number", description: "Max SP per stat (default: 32)" },
      },
      required: ["teamPokemonIds"],
    },
    requiresTeam: true,
  },
  {
    name: "identify_roles",
    description:
      "Identify VGC roles for a Pokemon (sweeper, wall, support, speed-control, redirector, etc.) with a VGC viability score from 0-10.",
    parameters: {
      type: "object",
      properties: {
        pokemonId: { type: "number", description: "Pokemon ID to analyze" },
      },
      required: ["pokemonId"],
    },
    requiresTeam: false,
  },
];

// ── TYPE CHART & COVERAGE TOOLS (8) ─────────────────────────────────────────
// These tools are the SOURCE OF TRUTH for all type-related questions.
// Models frequently hallucinate type matchups (e.g., assuming Dark is super effective against Fairy).
// ALWAYS call these tools before making ANY type-based claim in a response.

export const TYPE_TOOLS: ChampionTool[] = [
  {
    name: "get_all_types",
    description:
      "[CALL FIRST when discussing types] Returns the complete list of all 18 Pokemon types. Call this first if you need to know valid type names or want to reference a specific type.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
    requiresTeam: false,
  },
  {
    name: "get_matchup",
    description:
      "[CALL BEFORE any type claim] Get the EXACT damage multiplier of an attack type against a defender's typing. Returns a single number: 0 (immune), 0.25 (double resist), 0.5 (resist), 1 (neutral), 2 (super effective), or 4 (double super effective). NEVER reason about type effectiveness from memory — models get this wrong frequently. Common examples of model mistakes: Dark is NOT super effective against Fairy (it's 0.5x), Ice is NOT super effective against Steel (it's 0.5x), Poison is NOT effective against Fairy (it's 0x/immune). ALWAYS verify with this tool.",
    parameters: {
      type: "object",
      properties: {
        attackType: {
          type: "string",
          description: "Attack type (e.g., 'dark', 'ghost', 'ice')",
        },
        defenderTypes: {
          type: "array",
          items: { type: "string" },
          description: "Defender's types (e.g., ['ghost', 'dark'] for a dual-type)",
        },
      },
      required: ["attackType", "defenderTypes"],
    },
    requiresTeam: false,
  },
  {
    name: "get_weaknesses",
    description:
      "[CALL BEFORE stating a Pokemon's weaknesses] Returns the list of attack types that are super effective (>=2x) against a Pokemon's typing. Use this whenever you need to say 'X is weak to Y'. Models frequently hallucinate weaknesses — always verify. Example: a Fairy/Dark type's weaknesses must be checked with this tool, not guessed from individual type charts.",
    parameters: {
      type: "object",
      properties: {
        types: {
          type: "array",
          items: { type: "string" },
          description: "Pokemon's types (e.g., ['ghost', 'dark'] for a dual-type)",
        },
      },
      required: ["types"],
    },
    requiresTeam: false,
  },
  {
    name: "get_resistances",
    description:
      "[CALL BEFORE stating a Pokemon's resistances] Returns the list of attack types that are resisted (>0x and <1x) by a Pokemon's typing. Use this whenever you need to say 'X resists Y'. Resistances include partial resists (0.5x) but not immunities (0x).",
    parameters: {
      type: "object",
      properties: {
        types: {
          type: "array",
          items: { type: "string" },
          description: "Pokemon's types (e.g., ['fire', 'steel'] for a dual-type)",
        },
      },
      required: ["types"],
    },
    requiresTeam: false,
  },
  {
    name: "get_immunities",
    description:
      "[CALL BEFORE stating a Pokemon's immunities] Returns the list of attack types that deal 0 damage to a Pokemon based on its typing. Use this whenever you need to say 'X is immune to Y'. Immunities are absolute — the move does zero damage regardless of power or abilities.",
    parameters: {
      type: "object",
      properties: {
        types: {
          type: "array",
          items: { type: "string" },
          description: "Pokemon's types (e.g., ['ground'] for Ground-type immunity to Electric)",
        },
      },
      required: ["types"],
    },
    requiresTeam: false,
  },
  {
    name: "defensive_synergy",
    description:
      "[USE for team composition analysis] Calculate defensive synergy score (0-1) between two Pokemon's typings. A higher score means the second Pokemon covers more of the first Pokemon's weaknesses. Use this when evaluating whether two Pokemon work well together defensively.",
    parameters: {
      type: "object",
      properties: {
        types1: {
          type: "array",
          items: { type: "string" },
          description: "First Pokemon's types",
        },
        types2: {
          type: "array",
          items: { type: "string" },
          description: "Second Pokemon's types",
        },
      },
      required: ["types1", "types2"],
    },
    requiresTeam: false,
  },
  {
    name: "offensive_coverage",
    description:
      "[USE for move coverage analysis] Calculate what fraction of 18 types are hit super-effectively by a set of move types. Returns score 0-1 (e.g., 0.61 means 11 of 18 types are covered). Use this to evaluate whether a Pokemon's movepool has sufficient coverage against common threats.",
    parameters: {
      type: "object",
      properties: {
        moveTypes: {
          type: "array",
          items: { type: "string" },
          description: "Types of moves on the Pokemon (e.g., ['water', 'grass', 'electric'])",
        },
      },
      required: ["moveTypes"],
    },
    requiresTeam: false,
  },
  {
    name: "team_type_coverage",
    description:
      "[USE for team analysis] Get per-type effectiveness map for an entire team. Shows which types the team can hit super-effectively and which are uncovered. Use this when evaluating a full team's offensive coverage.",
    parameters: {
      type: "object",
      properties: {
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs on the team",
        },
      },
      required: ["teamPokemonIds"],
    },
    requiresTeam: true,
  },
];

// ── STATS & CALCULATION TOOLS (5) ───────────────────────────────────────────

export const STAT_TOOLS: ChampionTool[] = [
  {
    name: "calculate_stats",
    description:
      "Calculate level-50 stats from base stats, stat point distribution, and nature. Returns hp, attack, defense, spAtk, spDef, speed.",
    parameters: {
      type: "object",
      properties: {
        baseStats: {
          type: "object",
          properties: {
            hp: { type: "number" },
            attack: { type: "number" },
            defense: { type: "number" },
            spAtk: { type: "number" },
            spDef: { type: "number" },
            speed: { type: "number" },
          },
          description: "Base stats of the Pokemon",
        },
        sp: {
          type: "object",
          properties: {
            hp: { type: "number" },
            attack: { type: "number" },
            defense: { type: "number" },
            spAtk: { type: "number" },
            spDef: { type: "number" },
            speed: { type: "number" },
          },
          description: "Stat point distribution (max 66 total, 32 per stat)",
        },
        nature: {
          type: "string",
          description: "Nature name (e.g., 'Jolly', 'Modest')",
        },
      },
      required: ["baseStats", "sp", "nature"],
    },
    requiresTeam: false,
  },
  {
    name: "classify_stat_profile",
    description:
      "Classify a Pokemon's stat profile (physical-attacker, special-attacker, mixed-attacker, physical-wall, special-wall, tank, support, fast-attacker) plus primary and dump stats.",
    parameters: {
      type: "object",
      properties: {
        baseStats: {
          type: "object",
          properties: {
            hp: { type: "number" },
            attack: { type: "number" },
            defense: { type: "number" },
            spAtk: { type: "number" },
            spDef: { type: "number" },
            speed: { type: "number" },
          },
          description: "Base stats of the Pokemon",
        },
      },
      required: ["baseStats"],
    },
    requiresTeam: false,
  },
  {
    name: "get_nature_modifier",
    description:
      "Get the stat multiplier (1.1, 0.9, or 1) from a nature for a specific stat.",
    parameters: {
      type: "object",
      properties: {
        nature: {
          type: "string",
          description: "Nature name (e.g., 'Jolly', 'Modest')",
        },
        stat: {
          type: "string",
          description: "Stat name (attack, defense, spAtk, spDef, speed)",
        },
      },
      required: ["nature", "stat"],
    },
    requiresTeam: false,
  },
  {
    name: "suggest_nature",
    description:
      "Suggest a nature based on SP distribution and role category (physical, special, mixed, support).",
    parameters: {
      type: "object",
      properties: {
        sp: {
          type: "object",
          description: "Stat point distribution",
        },
        category: {
          type: "string",
          enum: ["physical", "special", "mixed", "support"],
          description: "Role category",
        },
      },
      required: ["sp", "category"],
    },
    requiresTeam: false,
  },
  {
    name: "suggest_sp_distribution",
    description:
      "Suggest the best SP distribution for a Pokemon given team context. Returns focus label (Speed+Offense, Bulk, Balanced) and reasoning.",
    parameters: {
      type: "object",
      properties: {
        pokemonId: { type: "number", description: "Pokemon ID" },
        teamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs on the team",
        },
      },
      required: ["pokemonId", "teamPokemonIds"],
    },
    requiresTeam: true,
  },
];

// ── ITEMS & OPTIMIZATION TOOLS (4) ──────────────────────────────────────────

export const ITEM_TOOLS: ChampionTool[] = [
  {
    name: "suggest_items",
    description:
      "Suggest recommended items for a given role (physical-attacker, special-attacker, support, tank, sweeper).",
    parameters: {
      type: "object",
      properties: {
        role: {
          type: "string",
          enum: [
            "physical-attacker",
            "special-attacker",
            "support",
            "tank",
            "sweeper",
          ],
          description: "Role to suggest items for",
        },
      },
      required: ["role"],
    },
    requiresTeam: false,
  },
  {
    name: "get_item_damage_multiplier",
    description:
      "Get the damage multiplier from a held item for a specific move type and category (e.g., 1.3 for Life Orb, 1.5 for Choice Band on physical).",
    parameters: {
      type: "object",
      properties: {
        itemName: {
          type: "string",
          description: "Item name (e.g., 'Life Orb', 'Choice Band')",
        },
        moveType: {
          type: "string",
          description: "Move type (e.g., 'fire', 'water')",
        },
        moveCategory: {
          type: "string",
          enum: ["physical", "special", "status"],
          description: "Move category",
        },
        isSuperEffective: {
          type: "boolean",
          description: "If the move is super effective",
        },
      },
      required: ["itemName", "moveType", "moveCategory", "isSuperEffective"],
    },
    requiresTeam: false,
  },
  {
    name: "get_item_speed_multiplier",
    description:
      "Get the speed multiplier from a held item (1.5 for Choice Scarf, 0.5 for Iron Ball, 1 for everything else).",
    parameters: {
      type: "object",
      properties: {
        itemName: {
          type: "string",
          description: "Item name (e.g., 'Choice Scarf', 'Iron Ball')",
        },
      },
      required: ["itemName"],
    },
    requiresTeam: false,
  },
  {
    name: "score_pokemon_fit",
    description:
      "Score how well a candidate Pokemon fits with an existing team. Returns score (0-100), reasons for the fit, gaps filled, and role overlaps.",
    parameters: {
      type: "object",
      properties: {
        candidatePokemonId: {
          type: "number",
          description: "Candidate Pokemon ID",
        },
        existingTeamPokemonIds: {
          type: "array",
          items: { type: "number" },
          description: "Array of Pokemon IDs currently on the team",
        },
      },
      required: ["candidatePokemonId", "existingTeamPokemonIds"],
    },
    requiresTeam: true,
  },
];

// ── TEAM GENERATION TOOLS (3) ───────────────────────────────────────────────

export const GENERATION_TOOLS: ChampionTool[] = [
  {
    name: "generate_teams",
    description:
      "Generate ready-to-use teams ranked by synergy score. Useful for getting inspiration or complete team ideas.",
    parameters: {
      type: "object",
      properties: {
        count: {
          type: "number",
          description: "Number of teams to generate (default: 5)",
        },
      },
    },
    requiresTeam: false,
  },
  {
    name: "generate_teams_with_pokemon",
    description:
      "Generate teams that include a specific Pokemon, ranked by synergy score.",
    parameters: {
      type: "object",
      properties: {
        pokemonId: {
          type: "number",
          description: "Pokemon ID to include in teams",
        },
        count: {
          type: "number",
          description: "Number of teams to generate (default: 5)",
        },
      },
      required: ["pokemonId"],
    },
    requiresTeam: false,
  },
  {
    name: "generate_from_archetype",
    description:
      "Generate a team for a named archetype template (e.g., 'Rain Offense', 'Hard Trick Room', 'Incineroar Balance').",
    parameters: {
      type: "object",
      properties: {
        archetypeName: {
          type: "string",
          description: "Archetype name to generate team for",
        },
      },
      required: ["archetypeName"],
    },
    requiresTeam: false,
  },
];

// ── ALL TOOLS FLATTENED ─────────────────────────────────────────────────────
// TYPE_TOOLS listed first — models have recency bias and need type tools available consistently.

export const ALL_TOOLS: ChampionTool[] = [
  ...TYPE_TOOLS,
  ...TEAM_BUILDING_TOOLS,
  ...MATCHUP_TOOLS,
  ...META_TOOLS,
  ...STAT_TOOLS,
  ...ITEM_TOOLS,
  ...GENERATION_TOOLS,
];
