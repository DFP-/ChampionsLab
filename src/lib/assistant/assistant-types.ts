// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - AI ASSISTANT TYPES
// Types for tool calling, chat messages, and API contract
// ═══════════════════════════════════════════════════════════════════════════════

import type {
  TeamSlot,
  ChampionsPokemon,
  StatPoints,
  PokemonType,
} from "@/lib/types";

// ── Chat Message Types ──────────────────────────────────────────────────────

export interface AssistantMessage {
  role: "user" | "assistant" | "system";
  content: string;
  tool_calls?: ToolCall[];
  tool_call_id?: string;
  tool_output?: string;
}

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ToolResult {
  tool_call_id: string;
  name: string;
  content: string;
}

// ── Tool Definition ─────────────────────────────────────────────────────────

export interface ChampionTool {
  name: string;
  description: string;
  parameters: Record<string, unknown>; // JSON Schema
  requiresTeam?: boolean;
}

// ── API Request/Response Types ──────────────────────────────────────────────

export interface AssistantRequest {
  messages: AssistantMessage[];
  teamSlots?: TeamSlot[];
  teamName?: string;
}

export interface AssistantResponse {
  content: string;
  toolCalls?: ToolCall[];
}

// ── Team Context for AI ─────────────────────────────────────────────────────

export interface TeamContext {
  teamName: string;
  slots: Array<{
    pokemonName: string;
    ability?: string;
    nature?: string;
    moves: string[];
    item?: string;
    statPoints: StatPoints;
    isMega?: boolean;
  }>;
  topThreats: Array<{ name: string; bringRate: number; winRate: number }>;
}

// ── Self-Checker Types ──────────────────────────────────────────────────────

export interface CheckResult {
  needsCorrections: boolean;
  corrections: Array<{
    type: "factual" | "strategic";
    original: string;
    corrected: string;
  }>;
  finalResponse: string;
}

export interface SelfCheckRequest {
  llmResponse: string;
  toolResults: Array<{ name: string; content: string }>;
  conversationHistory: AssistantMessage[];
}
