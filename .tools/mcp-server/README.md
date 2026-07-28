# Champions Lab MCP Server

Standalone MCP server that exposes 46 battle engine tools for AI agents (Hermes Agent, Open WebUI, etc.).

## Server Instructions

The server provides an `instructions` field in the MCP `InitializeResult` that tells connected models about the Pokemon Champions game format. This includes critical context like the SP system (32 = max investment, not minimal), the curated roster (~235 Pokemon, not 1000+), and the smaller item pool (~80 items).

## Known Issues & Limitations

### Custom Pokemon IDs

This project uses **custom Champions Lab IDs** (e.g., Blaziken = `10905`, Staraptor = `10919`) instead of standard national Pokédex numbers for 26 late-added Pokemon. All tools accepting `pokemonId` accept **both** custom IDs and standard dex numbers. Use `search_pokemon` to look up the correct ID by name before calling other tools.

### Stale Tournament Data

The `get_top_threats` tool returns data with a `dataDate` field (currently May 2026). The response payload includes freshness metadata so models can see the data age inline.

## Quick Start

```bash
# Stdio mode (for agent-to-agent communication)
npm start

# HTTP mode (for Open WebUI / external clients)
npm run start:http   # listens on port 3334
```

## HTTP Access

The MCP server is exposed at: `https://champions-lab.mcp.dfp.club/mcp`

Configure clients with this URL using the Streamable HTTP transport.

## Tool Categories

Tools are labeled `[FACTUAL]` (authoritative game data) or `[ADVISORY]` (heuristic recommendations). Models should trust `[FACTUAL]` tools over their own knowledge.

| Category                        | Tools                                                                                                                                                                            | Description                                                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Game Info & Data Lookup** (6) | `get_game_info`, `get_pokemon_details`, `list_available_items`, `get_move_info`, `list_available_archetypes`, `search_pokemon`                                                   | Factual game data: rules, full Pokemon details, item pool, move properties, archetype names, Pokemon search |
| **Team Management** (2)         | `list_saved_teams`, `set_active_team`                                                                                                                                            | List saved teams, set active team for MCP context                                                           |
| **Type Chart** (8)              | `get_all_types`, `get_matchup`, `get_weaknesses`, `get_resistances`, `get_immunities`, `defensive_synergy`, `offensive_coverage`, `team_type_coverage`                           | Type effectiveness, coverage analysis (SOURCE OF TRUTH)                                                     |
| Team Building (8)               | `suggest_teammates`, `get_slot_suggestions`, `suggest_sets`, `suggest_moves`, `suggest_abilities`, `analyze_partial_team`, `analyze_team_synergy`, `detect_archetypes`           | Team composition and analysis                                                                               |
| Matchup & Damage (7)            | `analyze_team`, `generate_strategy_tree`, `calc_survival_scenario`, `suggest_survival_investments`, `get_best_offensive_move`, `optimize_sp_for_survival`, `get_effective_speed` | Damage calculation, survival scenarios, strategy trees                                                      |
| Meta & Threats (5)              | `get_top_threats`, `load_threat`, `get_threat_damaging_moves`, `get_speed_tier_report`, `identify_roles`                                                                         | VGC meta data and threat analysis                                                                           |
| Stats & Calculation (5)         | `calculate_stats`, `classify_stat_profile`, `get_nature_modifier`, `suggest_nature`, `suggest_sp_distribution`                                                                   | Stat computation and nature/SP advice                                                                       |
| Items & Optimization (4)        | `suggest_items`, `get_item_damage_multiplier`, `get_item_speed_multiplier`, `score_pokemon_fit`                                                                                  | Item recommendations and damage multipliers                                                                 |
| Team Generation (3)             | `generate_teams`, `generate_teams_with_pokemon`, `generate_from_archetype`                                                                                                       | Auto-generate ready-to-use teams                                                                            |

## SP System Context

Pokemon Champions uses a **Stat Points (SP)** system instead of traditional EVs:

- **66 total SP** to distribute across 6 stats
- **32 max per stat** — 32 is MAXIMUM investment (equivalent to 252 EVs in mainline)
- All tool descriptions and parameter docs explicitly state this so models don't misinterpret `sp: {speed: 32}` as minimal investment

## Active Team Feature

The MCP server automatically loads the **active team** as context for all team-dependent tools.

**How it works:**

1. Call `list_saved_teams` to see all saved teams and which one is active
2. Call `set_active_team` with a team ID to set it as active
3. All subsequent team-dependent tools automatically use that team's data
4. Only one team can be active at a time

**Strategy tree generation** uses the active team for "my team" and resolves opponent Pokemon IDs to competitive sets via threat data automatically.

## Mandatory Tool Instructions for Models

### TYPE TOOLS — Source of Truth for Type Effectiveness

**Models frequently hallucinate type matchups.** The type tools are the SOURCE OF TRUTH. Models must call them before making ANY type-based claim.

**Common model mistakes:**

- Assuming Dark is super effective against Fairy (it's 0.5x)
- Assuming Ice is super effective against Steel (it's 0.5x)
- Assuming Poison is effective against Fairy (it's 0x/immune)
- Calculating dual-type effectiveness incorrectly

**Rule: NEVER reason about type effectiveness from memory. Always call `get_matchup` or the relevant type tool.**

### Data Freshness

`get_top_threats` includes `dataDate`, `source`, and `warning` fields in the response payload so models can see data age without relying on remembered tool descriptions.

## Architecture

- Tool definitions: `../../src/lib/assistant/assistant-tools.ts`
- Tool execution: `../../src/lib/assistant/execute.ts`
- Type chart engine: `../../src/lib/engine/type-chart.ts`
- Strategy tree engine: `../../src/lib/engine/strategy-tree.ts`
- Battle simulation: `../../src/lib/engine/battle-sim.ts`
- Team storage: `../../src/lib/db/json.ts`
- Server entry points: `src/mcp-server.ts` (stdio), `src/mcp-server-http.ts` (HTTP)

## Testing

```bash
npm test
```
