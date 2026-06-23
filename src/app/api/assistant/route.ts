// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - AI ASSISTANT API ROUTE
// Handles chat messages with OpenAI-compatible function calling
// Streams responses via SSE
// ═══════════════════════════════════════════════════════════════════════════════

import { NextResponse, type NextRequest } from "next/server";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { getTopUsagePokemon } from "@/lib/engine/vgc-data";
import type { NatureName } from "@/lib/engine/natures";
import type { ChampionsPokemon, PokemonType, StatPoints } from "@/lib/types";
import {
  executeAssistantTool,
  getPokemon,
  type ToolContext,
} from "@/lib/assistant/execute";
import { selfCheck } from "@/lib/assistant/self-check";
// Re-export for other agentic interfaces
export {
  executeAssistantTool,
  getPokemon,
  type ToolContext,
} from "@/lib/assistant/execute";
export {
  ALL_TOOLS,
  TEAM_BUILDING_TOOLS,
  MATCHUP_TOOLS,
  META_TOOLS,
  TYPE_TOOLS,
  STAT_TOOLS,
  ITEM_TOOLS,
  GENERATION_TOOLS,
} from "@/lib/assistant/assistant-tools";

// ── Environment Config ──────────────────────────────────────────────────────

const API_BASE = process.env.ASSISTANT_API_BASE || "https://api.openai.com/v1";
const API_KEY = process.env.ASSISTANT_API_KEY;
const MODEL = process.env.ASSISTANT_MODEL || "gpt-4o";

if (!API_KEY) {
  console.warn(
    "[Assistant] ASSISTANT_API_KEY not set. The assistant will return a placeholder response.",
  );
}

// ── Helper: Resolve Pokemon by ID (shared via execute.ts) ────────────────────

function resolvePokemonIds(ids: number[]): ChampionsPokemon[] {
  return ids
    .map(getPokemon)
    .filter((p): p is ChampionsPokemon => p !== undefined);
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

function serializePokemon(p: ChampionsPokemon): Record<string, unknown> {
  return {
    id: p.id,
    name: p.name,
    types: p.types,
    baseStats: p.baseStats,
    abilities: p.abilities.map((a) => ({
      name: a.name,
      description: a.description,
    })),
    moves: p.moves.map((m) => ({
      name: m.name,
      type: m.type,
      category: m.category,
      power: m.power,
    })),
  };
}

// ── Tool execution (delegates to shared engine) ─────────────────────────────

async function executeTool(
  name: string,
  args: Record<string, unknown>,
  context?: { teamSlots?: any[]; teamName?: string },
): Promise<string> {
  const toolContext: ToolContext = {
    teamSlots: context?.teamSlots,
    teamName: context?.teamName,
  };
  return executeAssistantTool(name, args, toolContext);
}

// ── OpenAI API Client ───────────────────────────────────────────────────────

interface ChatCompletionMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  tool_calls?: Array<{
    id: string;
    function: { name: string; arguments: string };
    type?: string;
  }>;
  tool_call_id?: string;
}

async function callOpenAICompatible(
  messages: ChatCompletionMessage[],
  tools: Array<{
    name: string;
    description: string;
    parameters: Record<string, unknown>;
  }>,
): Promise<{
  content: string | null;
  toolCalls: Array<{
    id: string;
    name: string;
    arguments: Record<string, unknown>;
  }>;
} | null> {
  if (!API_KEY) {
    return null;
  }

  try {
    console.log(
      `[Assistant] Calling ${API_BASE}/chat/completions with model ${MODEL}, ${messages.length} messages, ${tools.length} tools`,
    );
    const response = await fetch(`${API_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        tools: tools.map((t) => ({
          type: "function",
          function: {
            name: t.name,
            description: t.description,
            parameters: t.parameters,
          },
        })),
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Assistant] API error (${response.status}): ${errorText}`);
      return null;
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message;
    if (!message) return null;

    const content = message.content ?? null;
    const toolCalls: Array<{
      id: string;
      name: string;
      arguments: Record<string, unknown>;
    }> = [];

    if (message.tool_calls) {
      for (const tc of message.tool_calls) {
        try {
          toolCalls.push({
            id: tc.id,
            name: tc.function.name,
            arguments: JSON.parse(tc.function.arguments),
          });
        } catch {
          toolCalls.push({ id: tc.id, name: tc.function.name, arguments: {} });
        }
      }
    }

    return { content, toolCalls };
  } catch (error) {
    console.error("[Assistant] Fetch error:", error);
    return null;
  }
}

// ── POST Handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Check API key
  if (!API_KEY) {
    return new NextResponse(
      JSON.stringify({
        error:
          "Assistant API key not configured. Set ASSISTANT_API_KEY in your environment.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  const controller = new AbortController();

  try {
    console.log("[Assistant] Request received");
    const body = await request.json();
    const userMessage = body.message as string;
    const existingMessages = (body.messages as any[]) || [];
    const teamSlots = (body.teamSlots as any[]) || [];
    const teamName = (body.teamName as string) || "My Team";

    console.log("[Assistant] User message:", userMessage?.slice(0, 100));
    console.log(
      "[Assistant] Team slots:",
      teamSlots.length,
      "Team name:",
      teamName,
    );

    if (!userMessage && existingMessages.length === 0) {
      return NextResponse.json(
        { error: "No message provided." },
        { status: 400 },
      );
    }

    // Import tool definitions (already imported above)
    const { ALL_TOOLS } = await import("@/lib/assistant/assistant-tools");

    // Build messages array
    const chatMessages: ChatCompletionMessage[] = [];

    // Add system message
    chatMessages.push({
      role: "system",
      content: `You are an expert VGC (Video Game Championships) assistant for Pokemon Champions. You have access to tools that provide accurate, up-to-date competitive data.

KEY RULES:
- ALWAYS use your tools to get data. Never guess Pokemon stats, moves, abilities, sets, matchups, or type effectiveness from memory.
- For ANY type effectiveness question (e.g., "is Ghost immune to Dark?"), you MUST call the get_matchup tool with the attack type and defender types. Do NOT reason about it yourself — the tool gives the definitive answer.
- For damage calculations, ALWAYS use calc_survival_scenario or get_best_offensive_move rather than estimating.
- When the user has a team loaded, you can analyze it directly using tools like analyze_team_synergy, detect_archetypes, suggest_teammates, etc.
- You do NOT need Pokemon IDs from the user — the team is already provided in context below. Use the tools with the team data you have.
- For tools that accept pokemon IDs, use the "pokemon_id" field from the team context to look up each Pokemon.
- Be direct and helpful. Don't ask the user for information you already have.
- If you are unsure about any Pokemon data, call a tool to check rather than guessing.`,
    });

    // Add existing conversation history (filter out system messages that were context)
    for (const msg of existingMessages) {
      if (msg.role === "system" && msg.content.includes("CURRENT TEAM CONTEXT"))
        continue;
      chatMessages.push({
        role: msg.role as ChatCompletionMessage["role"],
        content: msg.content,
        tool_calls: msg.tool_calls?.map(
          (tc: { id: string; name: string; arguments: Record<string, unknown> }) => ({
            id: tc.id,
            name: tc.name,
            arguments: JSON.stringify(tc.arguments),
          }),
        ),
        tool_call_id: msg.tool_call_id,
      });
    }

    // Inject team context if available (and not already in conversation)
    const hasTeamContext = existingMessages.some(
      (m: any) =>
        m.role === "system" && m.content.includes("CURRENT TEAM CONTEXT"),
    );
    if (teamSlots.length > 0 && !hasTeamContext) {
      const teamPokemonIds = teamSlots
        .filter((s: any) => s.pokemonId)
        .map((s: any) => s.pokemonId);

      const teamSummary = teamSlots
        .filter((s: any) => s.pokemonId)
        .map((s: any) => {
          const p = getPokemon(s.pokemonId);
          return `${p?.name || "Unknown"} (ID: ${s.pokemonId})${s.isMega ? " [Mega]" : ""} | Ability: ${s.ability || "?"} | Nature: ${s.nature || "?"} | Item: ${s.item || "?"} | Moves: ${(s.moves || []).join(", ")}`;
        })
        .join("\n");

      const topThreats = getTopUsagePokemon(10);
      const threatSummary = topThreats
        .map(
          (t) =>
            `${t.name} (ID: ${t.pokemonId}, ${Math.round(t.bringRate)}% bring rate, ${Math.round(t.winRate)}% win rate)`,
        )
        .join(", ");

      chatMessages.push({
        role: "system",
        content: `CURRENT TEAM CONTEXT:
Team: ${teamName}
Pokemon IDs for tools: [${teamPokemonIds.join(", ")}]

Team Composition:
${teamSummary}

Top 10 Meta Threats (by bring rate): ${threatSummary}

When analyzing this team, use the Pokemon IDs above with tools like analyze_team_synergy, detect_archetypes, suggest_teammates, etc.`,
      });
    }

    // Add current user message if provided
    if (userMessage) {
      chatMessages.push({ role: "user", content: userMessage });
    }

    // Tool execution loop with max iterations
    const MAX_TOOL_ITERATIONS = 10;
    let iteration = 0;
    let assistantContent: string | null = "";
    const toolResultsTracked: Array<{ name: string; content: string }> = [];

    // Use a queue-based approach for SSE streaming
    const encoder = new TextEncoder();
    const chunks: string[] = [];
    let resolveNext: (() => void) | null = null;
    let finished = false;

    // Push an SSE message into the queue
    async function pushSSE(data: Record<string, unknown>, event?: string) {
      const line = event ? `event: ${event}\n` : "";
      const sseMessage = `${line}data: ${JSON.stringify(data)}\n\n`;
      console.log(`[Assistant] SSE: ${sseMessage.slice(0, 100)}...`);
      chunks.push(sseMessage);
      if (resolveNext) {
        const fn = resolveNext;
        resolveNext = null;
        fn();
      }
    }

    // ReadableStream that pulls from the queue
    const readable = new ReadableStream({
      async pull(controller) {
        // If chunks are available, send them immediately
        while (chunks.length > 0) {
          controller.enqueue(encoder.encode(chunks.shift()!));
        }

        // If not finished, wait for more data
        if (!finished) {
          await new Promise<void>((resolve) => {
            resolveNext = resolve;
          });
          // After resolving, pull again to send the new chunk
        } else {
          controller.close();
        }
      },
    });

    async function sendSSE(data: Record<string, unknown>, event?: string) {
      await pushSSE(data, event);
    }

    try {
      while (iteration < MAX_TOOL_ITERATIONS) {
        iteration++;

        // Call the LLM
        console.log(`[Assistant] Iteration ${iteration}: calling LLM`);
        const result = await callOpenAICompatible(chatMessages, ALL_TOOLS);
        console.log(
          `[Assistant] LLM response: content=${!!result?.content}, toolCalls=${result?.toolCalls.length}`,
        );

        if (!result) {
          assistantContent =
            "I'm sorry, I encountered an error processing your request. Please try again.";
          break;
        }

        if (result.toolCalls.length > 0) {
          // LLM wants to call tools — execute them
          await sendSSE(
            {
              type: "tool_start",
              toolCalls: result.toolCalls.map((tc) => ({
                name: tc.name,
                id: tc.id,
              })),
            },
            "tool",
          );

          for (const tc of result.toolCalls) {
            const toolOutput = await executeTool(tc.name, tc.arguments, {
              teamSlots,
              teamName,
            });

            // Track tool results for self-checking
            toolResultsTracked.push({ name: tc.name, content: toolOutput });

            // Send tool result as SSE
            await sendSSE(
              {
                type: "tool_result",
                toolCallId: tc.id,
                name: tc.name,
                content: toolOutput,
              },
              "tool",
            );

            // Add to chat history
            chatMessages.push({
              role: "assistant",
              content: "",
              tool_calls: [
                {
                  id: tc.id,
                  function: {
                    name: tc.name,
                    arguments: JSON.stringify(tc.arguments),
                  },
                },
              ],
            });

            chatMessages.push({
              role: "tool",
              content: toolOutput,
              tool_call_id: tc.id,
            });
          }

          await sendSSE({ type: "tool_complete" }, "tool");
          continue; // Loop back to LLM with tool results
        }

        // No tool calls — this is the final response
        assistantContent = result.content || "";
        break;
      }

      if (!assistantContent && iteration >= MAX_TOOL_ITERATIONS) {
        assistantContent =
          "I reached the maximum number of tool calls. Please rephrase your question.";
      }

      // Self-check the final response before sending to user
      if (assistantContent) {
        console.log(
          `[Assistant] Running self-check on ${assistantContent.length} char response`,
        );

        // Send "checking" event to frontend
        await sendSSE({ type: "checking" }, "checking");

        // Build the self-check request
        const checkMessages: any[] = [];
        for (const msg of chatMessages) {
          if (msg.role === "system" && msg.content.includes("CURRENT TEAM CONTEXT"))
            continue;
          checkMessages.push({
            role: msg.role,
            content: msg.content,
            tool_calls: msg.tool_calls,
            tool_call_id: msg.tool_call_id,
          });
        }

        const checkResult = await selfCheck({
          llmResponse: assistantContent,
          toolResults: toolResultsTracked,
          conversationHistory: checkMessages as any[],
        });

        if (checkResult.needsCorrections) {
          console.log(
            `[Assistant] Self-check found ${checkResult.corrections.length} corrections`,
          );
          assistantContent = checkResult.finalResponse;

          // Send correction info to frontend for display
          await sendSSE(
            {
              type: "corrections",
              corrections: checkResult.corrections,
            },
            "correction",
          );
        }

        console.log(
          `[Assistant] Self-check complete, sending response: ${assistantContent.length} chars`,
        );
      }

      // Send final text response as a single event
      if (assistantContent) {
        await sendSSE({ type: "content", text: assistantContent });
      }

      await sendSSE({ type: "done" }, "done");
    } catch (error) {
      await sendSSE(
        {
          type: "error",
          message: error instanceof Error ? error.message : "Unknown error",
        },
        "error",
      );
    } finally {
      finished = true;
      // Signal any pending pull
      if (resolveNext) {
        const fn = resolveNext;
        resolveNext = null;
        fn();
      }
    }

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
        Connection: "keep-alive",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
