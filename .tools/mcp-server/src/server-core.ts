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

// Precompute zod schemas once at module load instead of per-session.
// z.fromJSONSchema is expensive and the tool list is static.
const ZOD_SCHEMAS = ALL_TOOLS.map((tool: ToolDef) =>
  z.fromJSONSchema(tool.parameters as Record<string, unknown>),
);

export function createChampionsMCPServer(): McpServer {
  const server = new McpServer(
    { name: MCP_SERVER_NAME, version: MCP_SERVER_VERSION },
    { capabilities: { logging: {} } },
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
  console.error("[Champions Lab MCP Server] ==========================================");
  console.error(
    `[Champions Lab MCP Server]  Champions Lab MCP Server v${MCP_SERVER_VERSION} (${transport})`,
  );
  console.error(`[Champions Lab MCP Server]  ${ALL_TOOLS.length} tools registered`);
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
  console.error("[Champions Lab MCP Server] ==========================================");
}

export { ALL_TOOLS };