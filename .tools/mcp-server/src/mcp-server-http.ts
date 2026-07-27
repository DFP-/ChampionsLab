// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - MCP SERVER (HTTP/Streamable transport, stateful sessions)
// Entry point for external clients (Open WebUI, etc.) over HTTP.
// Shared logic lives in server-core.ts.
// ═══════════════════════════════════════════════════════════════════════════════

import { randomUUID } from "node:crypto";
import { createServer } from "node:http";
import {
  StreamableHTTPServerTransport,
} from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { createChampionsMCPServer, logStartup } from "./server-core.js";

type TransportMap = Record<string, StreamableHTTPServerTransport>;

export async function startHTTPServer(port: number): Promise<void> {
  const transports: TransportMap = {};

  const httpServer = createServer(async (req, res) => {
    try {
      // ── Route: POST /mcp ───────────────────────────────────────────────
      if (req.method === "POST") {
        const sessionId = req.headers["mcp-session-id"] as string | undefined;

        // Read request body
        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(Buffer.from(chunk));
        }
        const body = JSON.parse(Buffer.concat(chunks).toString());

        let transport: StreamableHTTPServerTransport | undefined;

        if (sessionId && transports[sessionId]) {
          // Reuse existing transport for subsequent requests in a session
          transport = transports[sessionId];
        } else if (!sessionId && isInitializeRequest(body)) {
          // New session — initialize
          const generatedId = randomUUID();
          transport = new StreamableHTTPServerTransport({
            sessionIdGenerator: () => generatedId,
            onsessioninitialized: (sid) => {
              console.error(`[Champions Lab MCP] Session initialized: ${sid}`);
            },
          });

          // Store session synchronously so subsequent requests can find it
          transports[generatedId] = transport!;

          transport.onclose = () => {
            const sid = transport!.sessionId;
            if (sid && transports[sid]) {
              console.error(`[Champions Lab MCP] Session closed: ${sid}`);
              delete transports[sid];
            }
          };

          const server = createChampionsMCPServer();
          await server.connect(transport!);
        } else {
          // No session ID and not an initialize request — reject
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              jsonrpc: "2.0",
              error: {
                code: -32000,
                message: "Bad Request: No valid session ID provided",
              },
              id: null,
            }),
          );
          return;
        }

        await transport!.handleRequest(req, res, body);
        return;
      }

      // ── Route: GET /mcp (SSE streaming) ────────────────────────────────
      if (req.method === "GET") {
        const sessionId = req.headers["mcp-session-id"] as string | undefined;

        if (!sessionId || !transports[sessionId]) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              jsonrpc: "2.0",
              error: {
                code: -32000,
                message: "Bad Request: No valid session ID provided",
              },
              id: null,
            }),
          );
          return;
        }

        const transport = transports[sessionId];
        await transport.handleRequest(req, res);
        return;
      }

      // ── Route: DELETE /mcp (session termination) ───────────────────────
      if (req.method === "DELETE") {
        const sessionId = req.headers["mcp-session-id"] as string | undefined;

        if (!sessionId || !transports[sessionId]) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              jsonrpc: "2.0",
              error: {
                code: -32000,
                message: "Bad Request: No valid session ID provided",
              },
              id: null,
            }),
          );
          return;
        }

        const transport = transports[sessionId];
        await transport.handleRequest(req, res);
        return;
      }

      // ── Fallback: method not allowed ───────────────────────────────────
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          jsonrpc: "2.0",
          error: {
            code: -32601,
            message: "Method not allowed",
          },
          id: null,
        }),
      );
    } catch (error) {
      console.error("[Champions Lab MCP] Error handling request:", error);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            jsonrpc: "2.0",
            error: {
              code: -32603,
              message: "Internal server error",
            },
            id: null,
          }),
        );
      }
    }
  });

  httpServer.listen(port, () => {
    logStartup("http", port);
  });

  // Graceful shutdown
  const shutdown = async () => {
    console.error("[Champions Lab MCP] Shutting down...");
    for (const sid in transports) {
      try {
        await transports[sid].close();
        delete transports[sid];
      } catch (e) {
        console.error(`[Champions Lab MCP] Error closing session ${sid}:`, e);
      }
    }
    await new Promise<void>((resolve) => httpServer.close(() => resolve()));
    process.exit(0);
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

const PORT = Number(process.env.MCP_SERVER_PORT) || 3334;

startHTTPServer(PORT).catch((error) => {
  console.error("[Champions Lab MCP Server] Fatal error:", error);
  process.exit(1);
});