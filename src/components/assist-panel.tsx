"use client";

import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, Zap, AlertTriangle, Target, Shield, Wand2, Move } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChampionsPokemon, TeamSlot, StatPoints } from "@/lib/types";
import { generateAssistSuggestions, type AssistBuildSuggestion } from "@/lib/engine/assist-suggest";

interface AssistPanelProps {
  slot: TeamSlot;
  teamPokemon: ChampionsPokemon[];
  onApplySet: (setPatch: { ability?: string; moves?: string[]; sp?: StatPoints; nature?: string; item?: string }) => void;
}

export function AssistPanel({ slot, teamPokemon, onApplySet }: AssistPanelProps) {
  const suggestions = useMemo(
    () => generateAssistSuggestions(slot, teamPokemon),
    [slot, teamPokemon]
  );

  if (suggestions.length === 0) {
    return (
      <div className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
        <p className="text-[11px] text-muted-foreground text-center">No suggestions available for this slot yet.</p>
      </div>
    );
  }

  const highPriority = suggestions.filter(s => s.priority === "high");
  const mediumPriority = suggestions.filter(s => s.priority === "medium");
  const lowPriority = suggestions.filter(s => s.priority === "low");

  return (
    <div className="mt-3 space-y-2">
      {/* Header */}
      <div className="flex items-center gap-1.5 px-1">
        <Wand2 className="w-3.5 h-3.5 text-pink-500" />
        <span className="text-[10px] font-bold uppercase text-pink-600 dark:text-pink-400">Assist Suggestions</span>
        <span className="text-[9px] text-muted-foreground ml-auto">{suggestions.length} found</span>
      </div>

      {/* High Priority */}
      {highPriority.length > 0 && (
        <div className="space-y-1.5">
          {highPriority.map((s, i) => (
            <SuggestionCard key={`high-${i}`} suggestion={s} onApply={onApplySet} priority="high" />
          ))}
        </div>
      )}

      {/* Medium Priority */}
      {mediumPriority.length > 0 && (
        <div className="space-y-1.5">
          {mediumPriority.map((s, i) => (
            <SuggestionCard key={`med-${i}`} suggestion={s} onApply={onApplySet} priority="medium" />
          ))}
        </div>
      )}

      {/* Low Priority */}
      {lowPriority.length > 0 && (
        <div className="space-y-1.5">
          {lowPriority.map((s, i) => (
            <SuggestionCard key={`low-${i}`} suggestion={s} onApply={onApplySet} priority="low" />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Suggestion Card ─────────────────────────────────────────────────────────

interface SuggestionCardProps {
  suggestion: AssistBuildSuggestion;
  onApply: (setPatch: { ability?: string; moves?: string[]; sp?: StatPoints; nature?: string; item?: string }) => void;
  priority: "high" | "medium" | "low";
}

function SuggestionCard({ suggestion, onApply, priority }: SuggestionCardProps) {
  const [expanded, setExpanded] = useState(false);

  const typeIcon = getSuggestionTypeIcon(suggestion.type);
  const borderClass = cn(
    "border-l-2",
    priority === "high" ? "border-l-red-400 dark:border-l-red-500" :
    priority === "medium" ? "border-l-amber-400 dark:border-l-amber-500" :
    "border-l-blue-400 dark:border-l-blue-500"
  );

  const canApply = !!suggestion.setPatch;

  return (
    <div className={cn(
      "rounded-lg border bg-white dark:bg-white/5 transition-all",
      borderClass,
      priority === "high" && "border-gray-200 dark:border-white/10 shadow-sm"
    )}>
      <div className="flex items-start gap-2 px-3 py-2">
        {/* Icon */}
        <div className={cn(
          "mt-0.5 flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center",
          priority === "high" ? "bg-red-50 dark:bg-red-500/10 text-red-500" :
          priority === "medium" ? "bg-amber-50 dark:bg-amber-500/10 text-amber-500" :
          "bg-blue-50 dark:bg-blue-500/10 text-blue-500"
        )}>
          {typeIcon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 leading-tight">{suggestion.title}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{suggestion.description}</p>
        </div>

        {/* Expand / Apply */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {canApply && suggestion.setPatch && (
            <button
              onClick={() => onApply(suggestion.setPatch!)}
              className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors"
            >
              Apply
            </button>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-0.5 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-muted-foreground transition-colors"
          >
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded details */}
      {expanded && canApply && suggestion.setPatch && (
        <div className="px-3 pb-2 pt-0 border-t border-gray-100 dark:border-white/5">
          <div className="grid grid-cols-2 gap-1 text-[9px] text-muted-foreground">
            {suggestion.setPatch.ability && (
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span>Ability: {suggestion.setPatch.ability}</span>
              </div>
            )}
            {suggestion.setPatch.nature && (
              <div className="flex items-center gap-1">
                <Target className="w-3 h-3" />
                <span>Nature: {suggestion.setPatch.nature}</span>
              </div>
            )}
            {suggestion.setPatch.item && (
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>Item: {suggestion.setPatch.item}</span>
              </div>
            )}
            {suggestion.setPatch.moves && suggestion.setPatch.moves.length > 0 && (
              <div className="col-span-2 flex items-center gap-1 flex-wrap">
                <Move className="w-3 h-3 flex-shrink-0" />
                <span>Moves:</span>
                {suggestion.setPatch.moves.map((m, i) => (
                  m && <span key={i} className="px-1 py-0 rounded bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300">{m}</span>
                ))}
              </div>
            )}
            {suggestion.setPatch.sp && (
              <div className="col-span-2 flex items-center gap-1 flex-wrap">
                <span>SP: HP:{suggestion.setPatch.sp.hp} Atk:{suggestion.setPatch.sp.attack} Def:{suggestion.setPatch.sp.defense} SpA:{suggestion.setPatch.sp.spAtk} SpD:{suggestion.setPatch.sp.spDef} Spe:{suggestion.setPatch.sp.speed}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function getSuggestionTypeIcon(type: string) {
  switch (type) {
    case "speed": return <Target className="w-3.5 h-3.5" />;
    case "move": return <Move className="w-3.5 h-3.5" />;
    case "stat": return <Zap className="w-3.5 h-3.5" />;
    case "nature": return <Target className="w-3.5 h-3.5" />;
    case "item": return <Zap className="w-3.5 h-3.5" />;
    case "set": return <Wand2 className="w-3.5 h-3.5" />;
    default: return <AlertTriangle className="w-3.5 h-3.5" />;
  }
}
