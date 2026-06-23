// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - AI ASSISTANT CHAT UI
// Chat interface component for the Assist tab side panel
// ═══════════════════════════════════════════════════════════════════════════════

"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Loader2,
  ChevronRight,
  ChevronDown,
  Wrench,
  Sparkles,
  Bot,
  User,
  AlertCircle,
} from "lucide-react";
import type { TeamSlot } from "@/lib/types";

// ── Message Types ───────────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  toolCalls?: ToolCallInfo[];
  isError?: boolean;
}

interface ToolCallInfo {
  id: string;
  name: string;
  result?: string;
}

interface CorrectionInfo {
  type: "factual" | "strategic";
  original: string;
  corrected: string;
}

interface SSEEvent {
  type:
    | "content"
    | "tool_start"
    | "tool_result"
    | "tool_complete"
    | "checking"
    | "correction"
    | "done"
    | "error";
  text?: string;
  toolCalls?: Array<{ id: string; name: string }>;
  toolCallId?: string;
  name?: string;
  content?: string;
  message?: string;
  corrections?: CorrectionInfo[];
}

// ── Suggestion Chips ────────────────────────────────────────────────────────

const SUGGESTIONS = [
  "What are my team's biggest weaknesses?",
  "Suggest teammates for my team",
  "What archetype is my team?",
  "Can you analyze my team's synergy?",
  "What item should Incineroar run?",
];

// ── Tool Call Display ───────────────────────────────────────────────────────

function ToolCallDisplay({ call }: { call: ToolCallInfo }) {
  const [expanded, setExpanded] = useState(false);

  let parsedResult: unknown;
  try {
    parsedResult = call.result ? JSON.parse(call.result) : null;
  } catch {
    parsedResult = call.result;
  }

  return (
    <div className="mt-2 ml-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {expanded ? (
          <ChevronDown className="w-3 h-3" />
        ) : (
          <ChevronRight className="w-3 h-3" />
        )}
        <Wrench className="w-3 h-3" />
        <span>{call.name}</span>
      </button>

      {expanded && parsedResult && (
        <pre className="mt-1 ml-5 p-2 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 text-[9px] overflow-x-auto max-h-48 overflow-y-auto font-mono whitespace-pre-wrap">
          {JSON.stringify(parsedResult, null, 2)}
        </pre>
      )}
    </div>
  );
}

// ── Message Bubble ──────────────────────────────────────────────────────────

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  if (message.isError) {
    return (
      <div className="flex gap-2 px-3 py-2">
        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
        <p className="text-xs text-red-600 dark:text-red-400">
          {message.content}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex gap-2 px-3 py-2 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
          isUser
            ? "bg-pink-500 text-white"
            : "bg-gray-200 dark:bg-white/10 text-muted-foreground"
        }`}
      >
        {isUser ? (
          <User className="w-3.5 h-3.5" />
        ) : (
          <Bot className="w-3.5 h-3.5" />
        )}
      </div>

      <div className={`max-w-[85%] ${isUser ? "text-right" : ""}`}>
        {!isUser && message.content && (
          <div className="text-xs leading-relaxed whitespace-pre-wrap">
            {message.content}
          </div>
        )}

        {isUser && (
          <div className="text-xs leading-relaxed">{message.content}</div>
        )}

        {/* Tool calls */}
        {!isUser && message.toolCalls && message.toolCalls.length > 0 && (
          <div>
            {message.toolCalls.map((call) => (
              <ToolCallDisplay key={call.id} call={call} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Chat Component ─────────────────────────────────────────────────────

interface AssistantChatProps {
  teamSlots: TeamSlot[];
  teamName: string;
}

export default function AssistantChat({
  teamSlots,
  teamName,
}: AssistantChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Track pending tool calls during streaming
  const [pendingToolCalls, setPendingToolCalls] = useState<
    Map<string, ToolCallInfo>
  >(new Map());
  const [currentAssistantContent, setCurrentAssistantContent] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [corrections, setCorrections] = useState<CorrectionInfo[]>([]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages, currentAssistantContent, pendingToolCalls]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setPendingToolCalls(new Map());
    setCurrentAssistantContent("");

    try {
      console.log("[Assistant] Sending request to /api/assistant");
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          messages,
          teamSlots: teamSlots.map((s) => ({
            pokemonId: s.pokemon?.id,
            ability: s.ability,
            nature: s.nature,
            moves: s.moves,
            item: s.item,
            statPoints: s.statPoints,
            isMega: s.isMega,
          })),
          teamName,
        }),
      });

      console.log("[Assistant] Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[Assistant] API error:", errorText);
        let errorMessage = "Failed to get response.";
        try {
          const error = JSON.parse(errorText);
          errorMessage = error.error || errorMessage;
        } catch {
          errorMessage = errorText || errorMessage;
        }
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: errorMessage,
            isError: true,
          },
        ]);
        setIsLoading(false);
        return;
      }

      // Handle SSE stream
      const reader = response.body?.getReader();
      if (!reader) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "No response stream.",
            isError: true,
          },
        ]);
        setIsLoading(false);
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";
      let assistantId = (Date.now() + 1).toString();
      let currentToolCalls: ToolCallInfo[] = [];
      let receivedContent = "";
      let receivedDone = false;
      let finalized = false;

      console.log("[Assistant] Starting SSE stream read");

      while (true) {
        const { done: streamDone, value } = await reader.read();
        if (streamDone && !receivedDone) {
          console.log(
            "[Assistant] Stream ended without done event, finalizing",
          );
          // Fallback: finalize with whatever content we got
          if (receivedContent && !finalized) {
            setMessages((prev) => [
              ...prev,
              {
                id: assistantId,
                role: "assistant",
                content: receivedContent,
                toolCalls:
                  currentToolCalls.length > 0
                    ? [...currentToolCalls]
                    : undefined,
              },
            ]);
            finalized = true;
          }
          setIsLoading(false);
          break;
        }
        if (streamDone) break;

        buffer += decoder.decode(value, { stream: true });

        // Process complete SSE messages
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") {
            console.log("[Assistant] Received [DONE]");
            continue;
          }

          try {
            const event: SSEEvent = JSON.parse(data);
            console.log("[Assistant] SSE event:", event.type);

            switch (event.type) {
              case "content":
                if (event.text !== undefined) {
                  receivedContent += event.text;
                  setCurrentAssistantContent(receivedContent);
                }
                break;

              case "tool_start":
                if (event.toolCalls) {
                  currentToolCalls = event.toolCalls.map((tc) => ({
                    id: tc.id,
                    name: tc.name,
                  }));
                }
                break;

              case "tool_result":
                if (
                  event.toolCallId &&
                  event.name &&
                  event.content !== undefined
                ) {
                  const newPending = new Map(pendingToolCalls);
                  newPending.set(event.toolCallId!, {
                    id: event.toolCallId!,
                    name: event.name!,
                    result: event.content,
                  });
                  setPendingToolCalls(newPending);
                }
                break;

              case "done":
                receivedDone = true;
                finalized = true;
                // Finalize the assistant message
                const finalContent =
                  currentAssistantContent || receivedContent || "";
                console.log(
                  "[Assistant] Finalizing message, content:",
                  finalContent.slice(0, 100),
                );
                setMessages((prev) => [
                  ...prev.filter((m) => m.id !== assistantId),
                  {
                    id: assistantId,
                    role: "assistant",
                    content: finalContent,
                    toolCalls:
                      currentToolCalls.length > 0
                        ? [...currentToolCalls]
                        : undefined,
                  },
                ]);
                setCurrentAssistantContent("");
                setPendingToolCalls(new Map());
                setIsChecking(false);
                setCorrections([]);
                setIsLoading(false);
                break;

              case "checking":
                setIsChecking(true);
                break;

              case "correction":
                if (event.corrections && event.corrections.length > 0) {
                  setCorrections(event.corrections);
                }
                break;

              case "error":
                setMessages((prev) => [
                  ...prev,
                  {
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content: event.message || "An error occurred.",
                    isError: true,
                  },
                ]);
                setIsLoading(false);
                break;
            }
          } catch {
            // Skip malformed SSE events
          }
        }
      }

      // If we exit the loop without finalizing, set an error
      if (!finalized && !messages.some((m) => m.isError)) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "Stream ended without a response.",
            isError: true,
          },
        ]);
      }
    } catch (error) {
      console.error("[Assistant] Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
          isError: true,
        },
      ]);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Messages area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto py-2 space-y-1"
      >
        {messages.length === 0 && !isLoading && (
          <div className="px-4 py-6 text-center">
            <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <p className="text-xs font-medium text-muted-foreground mb-1">
              Champions AI Assistant
            </p>
            <p className="text-[10px] text-muted-foreground/70 mb-4">
              Ask about your team, meta threats, or competitive strategy. I use
              real tournament data to give accurate answers.
            </p>

            {/* Suggestion chips */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  disabled={isLoading}
                  className="text-[9px] px-2 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-muted-foreground disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Streaming assistant message */}
        {isLoading && currentAssistantContent && (
          <div className="flex gap-2 px-3 py-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 text-muted-foreground flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="max-w-[85%]">
              <p className="text-xs leading-relaxed whitespace-pre-wrap">
                {currentAssistantContent}
              </p>
              {pendingToolCalls.size > 0 && (
                <div>
                  {Array.from(pendingToolCalls.values()).map((call) => (
                    <ToolCallDisplay key={call.id} call={call} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && !currentAssistantContent && (
          <div className="flex gap-2 px-3 py-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 text-muted-foreground flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}

        {/* Self-checking indicator */}
        {isChecking && (
          <div className="flex gap-2 px-3 py-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 text-muted-foreground flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Checking response...</span>
            </div>
          </div>
        )}

        {/* Corrections display */}
        {corrections.length > 0 && (
          <div className="mx-3 py-2 px-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
            <p className="text-[9px] font-medium text-amber-700 dark:text-amber-400 mb-1">
              Response verified and corrected:
            </p>
            <div className="space-y-1">
              {corrections.map((c, i) => (
                <div key={i} className="text-[9px] text-amber-600 dark:text-amber-500">
                  <span className="line-through opacity-60">{c.original}</span>
                  {" → "}
                  <span className="font-medium">{c.corrected}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSubmit}
        className="p-3 border-t border-gray-200 dark:border-white/10"
      >
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your team..."
            disabled={isLoading}
            className="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-pink-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-3 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 dark:disabled:bg-pink-500/30 text-white transition-colors disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
