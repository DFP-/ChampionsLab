# Champions Lab MCP Server

Standalone MCP server that exposes 42 battle engine tools for AI agents (Hermes Agent, Open WebUI, etc.).

## Known Issues & Limitations

### Custom Pokemon IDs
This project uses **custom Champions Lab IDs** (e.g., Blaziken = `10905`, Staraptor = `10919`) instead of standard national Pokédex numbers for 26 late-added Pokemon. All tools accepting `pokemonId` now accept **both** custom IDs and standard dex numbers, but ambiguity exists for Pokemon with gender/regional forms (Meowstic, Basculegion). Use the `search_pokemon` tool to look up the correct ID by name before calling other tools.

### Stale Tournament Data
The `get_top_threats` tool and threat data sourced from `TOURNAMENT_USAGE` is dated **May 2026** — the top-threat rankings may not reflect the current competitive meta. Update `src/lib/engine/vgc-data.ts` when new tournament data becomes available.

## Quick Start

```bash
# Stdio mode (for agent-to-agent communication)
npm start

# HTTP mode (for Open WebUI / external clients)
npm run start/http   # listens on port 3334
```

## HTTP Access

The MCP server is exposed at: `https://champions-lab.mcp.dfp.club/mcp`

Configure clients with this URL using the Streamable HTTP transport.

## Tool Categories

| Category | Tools | Description |
|---|---|---|
| **Team Management** (2) | `list_saved_teams`, `set_active_team` | List saved teams, set active team for MCP context |
| **Type Chart** (8) | `get_all_types`, `get_matchup`, `get_weaknesses`, `get_resistances`, `get_immunities`, `defensive_synergy`, `offensive_coverage`, `team_type_coverage` | Type effectiveness, coverage analysis |
| Team Building (8) | `suggest_teammates`, `get_slot_suggestions`, `suggest_sets`, `suggest_moves`, `suggest_abilities`, `analyze_partial_team`, `analyze_team_synergy`, `detect_archetypes` | Team composition and analysis |
| Matchup & Damage (7) | `analyze_team`, `generate_strategy_tree`, `calc_survival_scenario`, `suggest_survival_investments`, `get_best_offensive_move`, `optimize_sp_for_survival`, `get_effective_speed` | Damage calculation, survival scenarios |
| Meta & Threats (5) | `get_top_threats`, `load_threat`, `get_threat_damaging_moves`, `get_speed_tier_report`, `identify_roles` | VGC meta data and threat analysis |
| Stats & Calculation (5) | `calculate_stats`, `classify_stat_profile`, `get_nature_modifier`, `suggest_nature`, `suggest_sp_distribution` | Stat computation and nature/SP advice |
| Items & Optimization (4) | `suggest_items`, `get_item_damage_multiplier`, `get_item_speed_multiplier`, `score_pokemon_fit` | Item recommendations and damage multipliers |
| Team Generation (3) | `generate_teams`, `generate_teams_with_pokemon`, `generate_from_archetype` | Auto-generate ready-to-use teams |

## Active Team Feature

The MCP server automatically loads the **active team** as context for all team-dependent tools. When a model calls a tool that requires team data (synergy analysis, suggestions, matchup analysis, etc.), the active team's slots are passed automatically — no need to manually provide team data.

**How it works:**
1. Call `list_saved_teams` to see all saved teams and which one is active
2. Call `set_active_team` with a team ID to set it as active
3. All subsequent team-dependent tools automatically use that team's data
4. Only one team can be active at a time — setting a new team deactivates the previous one

**Example workflow:**
```
Model: "Let me check your saved teams..."
→ calls list_saved_teams
Model: "I'll activate 'Birbs' for analysis..."
→ calls set_active_team(teamId: '032abf45-2255-449c-8d4d-cd07ae5ba2e0')
Model: "Now analyzing team synergy..."
→ calls analyze_team_synergy (automatically uses 'Birbs' team data)
```

## Mandatory Tool Instructions for Models

These instructions are embedded in tool descriptions. This README documents them for reference and debugging.

### TYPE TOOLS — Source of Truth for Type Effectiveness

**Models frequently hallucinate type matchups.** The following tools are the SOURCE OF TRUTH. Models must call them before making ANY type-based claim.

**Common model mistakes that have been observed:**
- Assuming Dark is super effective against Fairy (it's 0.5x, not 2x)
- Assuming Ice is super effective against Steel (it's 0.5x, not 2x)
- Assuming Poison is effective against Fairy (it's 0x/immune, not 2x)
- Calculating dual-type effectiveness incorrectly (must multiply both type modifiers)

**Tool behavior:**
- `get_matchup(attackType, defenderTypes)` — Returns exact multiplier: 0 (immune), 0.25 (double resist), 0.5 (resist), 1 (neutral), 2 (super effective), or 4 (double super effective). **Call this before ANY type claim.**
- `get_weaknesses(types)` — Returns list of types that are super effective against the given typing. Use when saying "X is weak to Y".
- `get_resistances(types)` — Returns list of types resisted by the given typing. Includes partial resists (0.5x) but not immunities (0x).
- `get_immunities(types)` — Returns list of types that deal 0 damage to the given typing.
- `defensive_synergy(types1, types2)` — Returns 0-1 score of how well two Pokemon cover each other's weaknesses.
- `offensive_coverage(moveTypes)` — Returns 0-1 score of what fraction of 18 types are hit super-effectively by a move set.
- `team_type_coverage(teamPokemonIds)` — Per-type effectiveness map for an entire team.
- `get_all_types()` — Returns all 18 valid type names. Call first if unsure about type names.

**Rule: NEVER reason about type effectiveness from memory. Always call `get_matchup` or the relevant type tool.**

### Other Tools

All other tools are advisory/recommendation tools. They don't have the same strict mandatory requirement as type tools, but models should prefer calling them over generating advice from memory.

## Architecture

- Tool definitions: `../../src/lib/assistant/assistant-tools.ts`
- Tool execution: `../../src/lib/assistant/execute.ts`
- Type chart engine: `../../src/lib/engine/type-chart.ts`
- Team storage: `../../src/lib/db/json.ts`
- Server entry points: `src/mcp-server.ts` (stdio), `src/mcp-server-http.ts` (HTTP)

## Testing

```bash
npm test
```
