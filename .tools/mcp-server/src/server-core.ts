// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - MCP SERVER CORE
// Shared logic for stdio and HTTP entry points: tool registration, active-team
// context loading, zod schema precomputation, and startup banner.
// ═══════════════════════════════════════════════════════════════════════════════

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const MCP_SERVER_NAME = "champions-lab";
export const MCP_SERVER_VERSION = "0.1.0";

export const CHAMPIONS_ROOT =
  process.env.CHAMPIONS_ROOT ?? "/home/dfp/code/ChampionsLab";

// Load AGENTS.md for context logging
const AGENTS_MD_PATH = resolve(CHAMPIONS_ROOT, "AGENTS.md");
try {
  const agentsContext = readFileSync(AGENTS_MD_PATH, "utf-8");
  console.error(
    `[Champions Lab MCP Server] Loaded AGENTS.md (${agentsContext.length} bytes)`,
  );
} catch {
  console.error(
    `[Champions Lab MCP Server] AGENTS.md not found at ${AGENTS_MD_PATH}`,
  );
}

const { ALL_TOOLS } = await import(
  `${CHAMPIONS_ROOT}/src/lib/assistant/assistant-tools.ts`
);
const { executeAssistantTool } = await import(
  `${CHAMPIONS_ROOT}/src/lib/assistant/execute.ts`
);
const { getActiveTeam } = await import(`${CHAMPIONS_ROOT}/src/lib/db/json.ts`);

export type ToolContext = {
  teamSlots?: Array<{
    pokemonId?: number;
    ability?: string;
    nature?: string;
    moves?: string[];
    item?: string;
    statPoints?: unknown;
    isMega?: boolean;
  }>;
  teamName?: string;
};

type ToolDef = {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
};

// ── LLM-argument coercion ───────────────────────────────────────────────────
// The MCP SDK validates args against the zod schema *before* the tool handler
// runs (server/mcp.js validateToolInput → safeParseAsync). A malformed arg
// (e.g. a stringified number, a comma-separated array, or an enum alias like
// "physical" for "physical-attacker") therefore trips a -32602 InvalidParams
// error and never reaches the handler. Hermes' 3-strike circuit breaker then
// parks the whole server, making it appear "unreachable" even though it is
// alive and serving other tools fine.
//
// To tolerate the shapes LLMs commonly emit, each schema is wrapped in
// z.preprocess(coerceArgs, strictSchema). The preprocessor normalizes args
// using the *original* JSON Schema (tool.parameters) as the type oracle; the
// strict fromJSONSchema schema then validates the coerced result. This keeps
// validation honest (a genuinely bad value still fails) while absorbing
// trivial type drift (string→number, "1,2,3"→[1,2,3], enum aliases).

type JsonSchemaProp = {
  type?: string;
  enum?: unknown[];
  items?: JsonSchemaProp;
  properties?: Record<string, JsonSchemaProp>;
};

const ENUM_ALIASES: Record<string, Record<string, string>> = {
  role: {
    physical: "physical-attacker",
    special: "special-attacker",
    attacker: "physical-attacker",
  },
  category: {
    physical_attacker: "physical",
    special_attacker: "special",
    physicalattacker: "physical",
    specialattacker: "special",
  },
};

function coerceScalar(
  value: unknown,
  prop: JsonSchemaProp,
  propName: string,
): unknown {
  if (value === null || value === undefined) return value;
  const expected = prop.type;

  if (expected === "number" || expected === "integer") {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed === "") return value;
      const n = Number(trimmed);
      if (Number.isFinite(n)) return n;
    }
    return value;
  }

  if (expected === "string") {
    if (typeof value === "string") {
      // pass through
    } else if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    // fall through to enum handling below
  }

  if (expected === "boolean") {
    if (typeof value === "string") {
      const v = value.trim().toLowerCase();
      if (v === "true") return true;
      if (v === "false") return false;
    }
  }

  // Enum normalization (case-insensitive + alias table). Runs for any
  // string-typed field that declares an enum. Leave non-strings alone —
  // a number where a string-enum is expected should fail honestly.
  if (prop.enum && typeof value === "string") {
    const allowed = prop.enum as string[];
    const lower = value.toLowerCase();
    const direct = allowed.find((a) => String(a).toLowerCase() === lower);
    if (direct !== undefined) return direct;
    const alias = ENUM_ALIASES[propName]?.[lower];
    if (alias && allowed.includes(alias)) return alias;
  }

  return value;
}

function coerceArray(value: unknown, prop: JsonSchemaProp): unknown {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) {
    const itemSchema = prop.items ?? {};
    return value.map((el) => coerceValue(el, itemSchema, ""));
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "") return [];
    // Try JSON array first: '[1,2,3]' or '["a","b"]'
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          const itemSchema = prop.items ?? {};
          return parsed.map((el) => coerceValue(el, itemSchema, ""));
        }
      } catch {
        // fall through to comma-split
      }
    }
    // Comma-separated fallback: "1,2,3" or "a, b, c"
    const parts = trimmed
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p !== "");
    const itemSchema = prop.items ?? {};
    return parts.map((el) => coerceValue(el, itemSchema, ""));
  }
  // Single non-array value where an array is expected: wrap it.
  const itemSchema = prop.items ?? {};
  return [coerceValue(value, itemSchema, "")];
}

function coerceObject(value: unknown, prop: JsonSchemaProp): unknown {
  if (value === null || value === undefined) return value;
  if (typeof value === "object" && !Array.isArray(value)) {
    const props = prop.properties ?? {};
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = coerceValue(v, props[k] ?? {}, k);
    }
    return out;
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (
          typeof parsed === "object" &&
          parsed !== null &&
          !Array.isArray(parsed)
        ) {
          return coerceObject(parsed, prop);
        }
      } catch {
        // leave as-is so the strict schema fails honestly
      }
    }
  }
  return value;
}

function coerceValue(
  value: unknown,
  prop: JsonSchemaProp,
  propName: string,
): unknown {
  if (value === null || value === undefined) return value;
  const t = prop.type;
  if (t === "array") return coerceArray(value, prop);
  if (t === "object") return coerceObject(value, prop);
  return coerceScalar(value, prop, propName);
}

function buildCoercer(parametersSchema: Record<string, unknown>) {
  const props = (parametersSchema.properties ?? {}) as Record<
    string,
    JsonSchemaProp
  >;
  return (input: unknown): unknown => {
    if (typeof input !== "object" || input === null || Array.isArray(input)) {
      return input;
    }
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      out[k] = coerceValue(v, props[k] ?? {}, k);
    }
    return out;
  };
}

// Precompute zod schemas once at module load instead of per-session.
// z.fromJSONSchema is expensive and the tool list is static. Each schema is
// wrapped in z.preprocess so LLM-emitted arg shapes are normalized before
// strict validation runs (see coerceArgs above).
const ZOD_SCHEMAS = ALL_TOOLS.map((tool: ToolDef) => {
  const strict = z.fromJSONSchema(tool.parameters as Record<string, unknown>);
  const coercer = buildCoercer(tool.parameters as Record<string, unknown>);
  return z.preprocess(coercer, strict);
});

const MCP_INSTRUCTIONS = `You are connected to the Champions Lab MCP Server for Pokemon Champions — a competitive Pokemon spin-off game.

CRITICAL: This is NOT mainline VGC. Key differences:
- Stat Points (SP) system replaces EVs: 66 total, 32 max per stat. 32 is MAXIMUM investment (equivalent to 252 EVs), NOT minimal.
- Curated roster of ~235 Pokemon (not 1000+). This is the complete pool — Pokemon are not "missing".
- ~80 available items (curated subset). This is the complete item pool.
- Level 50 Doubles format, 6 on roster / pick 4 to battle.

GETTING STARTED:
1. Call get_game_info first to understand the game format.
2. Use search_pokemon to resolve Pokemon names to IDs (some use custom 109xx IDs).
3. Use get_pokemon_details for full movesets and abilities.
4. Use list_available_items to see all available items.

TYPE EFFECTIVENESS:
Always call get_matchup or related type tools before making ANY type claim. Models frequently hallucinate type matchups.

TOOL LABELS:
- [FACTUAL] tools return authoritative game data — trust these over your own knowledge.
- [ADVISORY] tools return heuristic recommendations — useful but opinionated.

ACTIVE TEAM:
Call list_saved_teams and set_active_team to work with a user's saved team. Team-dependent tools auto-load the active team.`;

export function createChampionsMCPServer(): McpServer {
  const server = new McpServer(
    { name: MCP_SERVER_NAME, version: MCP_SERVER_VERSION },
    {
      capabilities: { logging: {} },
      instructions: MCP_INSTRUCTIONS,
    },
  );

  for (let i = 0; i < ALL_TOOLS.length; i++) {
    const tool = ALL_TOOLS[i];
    const zodSchema = ZOD_SCHEMAS[i];

    server.registerTool(
      tool.name,
      {
        description: tool.description,
        inputSchema: zodSchema,
      },
      async (args: Record<string, unknown>) => {
        try {
          // Load active team context if one exists
          const activeTeam = getActiveTeam();
          const context: ToolContext = activeTeam
            ? {
                teamName: activeTeam.name,
                teamSlots: JSON.parse(activeTeam.slots).map((slot: any) => ({
                  pokemonId: slot.pokemonId,
                  ability: slot.ability,
                  nature: slot.nature,
                  moves: slot.moves,
                  item: slot.item,
                  statPoints: slot.statPoints,
                  isMega: slot.isMega,
                })),
              }
            : {};

          const result = await executeAssistantTool(tool.name, args, context);
          return {
            content: [
              {
                type: "text" as const,
                text: result,
              },
            ],
          };
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : String(error);
          return {
            content: [
              {
                type: "text" as const,
                text: `Error executing tool "${tool.name}": ${errorMessage}`,
              },
            ],
            isError: true,
          };
        }
      },
    );
  }

  return server;
}

export function logStartup(transport: "stdio" | "http", port?: number): void {
  console.error(
    "[Champions Lab MCP Server] ==========================================",
  );
  console.error(
    `[Champions Lab MCP Server]  Champions Lab MCP Server v${MCP_SERVER_VERSION} (${transport})`,
  );
  console.error(
    `[Champions Lab MCP Server]  ${ALL_TOOLS.length} tools registered`,
  );
  if (port !== undefined) {
    console.error(`[Champions Lab MCP Server]  Listening on port ${port}`);
  }
  console.error("[Champions Lab MCP Server]");
  console.error("[Champions Lab MCP Server]  ⚠ Known issues:");
  console.error(
    "[Champions Lab MCP Server]   - Tournament usage data (get_top_threats) is from May 2026 and may be stale",
  );
  console.error(
    "[Champions Lab MCP Server]   - 26 late-added Pokemon use custom IDs (109xx), not national dex numbers",
  );
  console.error(
    "[Champions Lab MCP Server]   - Use search_pokemon tool to resolve Pokemon by name",
  );
  console.error(
    "[Champions Lab MCP Server]   - SP system: 32 = MAX investment per stat (not minimal)",
  );
  console.error(
    "[Champions Lab MCP Server] ==========================================",
  );
}

export { ALL_TOOLS };
