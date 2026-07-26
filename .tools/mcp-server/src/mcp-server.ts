// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - MCP SERVER (stdio transport)
// Entry point for agent-to-agent communication over stdin/stdout.
// Shared logic lives in server-core.ts.
// ═══════════════════════════════════════════════════════════════════════════════

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createChampionsMCPServer, logStartup } from "./server-core.js";

async function main(): Promise<void> {
  logStartup("stdio");
  const server = createChampionsMCPServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("[Champions Lab MCP Server] Fatal error:", error);
  process.exit(1);
});