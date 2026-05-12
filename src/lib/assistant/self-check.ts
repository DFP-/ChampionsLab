// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - AI ASSISTANT SELF-CHECKER
// Agentic self-checking: validates LLM responses against tool results before
// showing to the user. Catches hallucinated movesets, abilities, stats, etc.
// ═══════════════════════════════════════════════════════════════════════════

import type {
  AssistantMessage,
  CheckResult,
  SelfCheckRequest,
} from "./assistant-types";

// ── Smart Gating ────────────────────────────────────────────────────────────

interface GateDecision {
  shouldCheck: boolean;
  mode: "strict" | "soft" | "skip";
}

const MOVE_NAME_PATTERN = /\b(?:Solar Beam|Weather Ball|Pollen Puff|Protect|Thunderbolt|Hydro Pump|Flare Blitz|Ice Beam|Psychic|Earthquake|Rock Slide|Dragon Claw|Dark Pulse|Shadow Ball|Giga Drain|Leaf Storm|Surf|Fire Blast| Blizzard|Volt Tackle|Close Combat|Sacred Sword|Knock Off|U-turn|Parting Shot|Tailwind|Trick Room|Helping Hand|Wide Guard|Quick Guard|Protect|Detect|King's Shield|Spiky Shield|Baneful Bunker|Obstruct|Cotton Guard|Heal Pulse|Aromatherapy|Sweet Scent|Defog|Stealth Rock|Spikes|Toxic Spikes|Sticky Web|Reflect|Light Screen|Aurora Veil|Rain Dance|Sunny Day|Sandstorm|Hail|Snow|Tailwind|Trick Room|Wish|Heal Pulse|Moonlight|Synthesis|Morning Sun|Roost|Recover|Soft-Boiled|Slack Off|Drain Punch|Hi Jump Kick|Jump Kick|High Horsepower|Megahorn|Leaf Blade|Stone Edge|Ice Shard|Aqua Jet|Bullet Punch|Iron Head|Flash Cannon|Dazzling Gleam|Moonblast|Sludge Wave|Poison Jab|Shadow Claw|Psyshock|Focus Blast|Aura Sphere|Thunderbolt|Thunder|Wild Charge|Volt Switch|Discharge|Heat Wave|Overheat|Flamethrower|Fire Blast|Burn Up|Eruption|Water Spout|Hydro Pump|Surf|Scald|Ice Beam|Blizzard|Thunderbolt|Thunder|Psychic|Psybeam|Psystrike|Shadow Ball|Shadow Sneak|Dark Pulse|Night Slash|Sucker Punch|Foul Play|Brave Bird|U-Turn|Pivot|Quick Attack|Extreme Speed|Bullet Seed|Energy Ball|Solar Beam|Leaf Storm|Grass Knot|Giga Drain|Megahorn|Earthquake|Dig|Bulldoze|Stone Edge|Rock Slide|Power Gem|Rock Wrecker|Drill Run|Iron Head|Flash Cannon|Metal Claw|Metal Sound|Steel Beam|Iron Tail|Crunch|Bite|咬|Fang|Claw|Punch|Kick|Slash|Stab|Beam|Blast|Wave|Pulse|Ball|Shot|Strike|Bolt|Drive|Crash|Slam|Fury|Barrage|Salvo|Jet|Dance|Storm|Blizzard|Hail|Sand|Stream|Current|Flood|Surge|Quake|Shake|Tremor|Ground|Rock|Fire|Water|Electric|Grass|Ice|Fighting|Poison|Ghost|Dragon|Dark|Steel|Psychic|Fairy|Normal|Flying|Bug|Self-Check)\b/gi;

const POKEMON_NAME_PATTERN =
  /\b(Venusaur|Charizard|Blastoise|Eevee|Garchomp|Landorus|Incineroar|Persian|Tapu Koko|Tapu Lele|Tapu Bulu|Tapu Fini|Marshadow|Zeraora|Magearna|Zamazenta|Zacian|Calyrex|Urshifu|Pajama|Single Strike|Martial Law|Water Absorb|Drizzle|Drought|Sand Stream|Snow Warning|Intimidate|Prankster|Libero|Protosynthesis|Quark Drive|Gluttony|Weak Armor|Swift Swim|Sand Rush|Slush Rush|Opposing Team|VGC|Video Game Championships|Level 50|Stat Point|Choice Scarf|Choice Band|Choice Specs|Life Orb|Assault Vest|Focus Sash|Protective Pads|Red Card|Sitrus Berry|Figy Berry|Wiki Berry|Mago Berry| Aguav Berry|Iapapa Berry|Lum Berry|Leftovers|Black Sludge|Air Balloon|Weakness Policy|Occa Berry|Passho Berry|Wacan Berry|Rindo Berry|Yache Berry|Chople Berry|Kebia Berry|Shuca Berry|Coba Berry|Payapa Berry|Tanga Berry|Charti Berry|Kasib Berry|Haban Berry|Colbur Berry|Babiri Berry|Chilan Berry|Misty Seed|Grassy Seed|Psychic Seed|Electric Seed|Dynamax|Gigantamax|Terastallize|Tera Type|Spectral Thief|Max Guard|Z-Move|Crit Ratio|Base Power|DPPC|Damage Percentage|Hit Point|HP|Attack|Defense|Special Attack|Special Defense|Speed|Base Stat|BST|Competitive Set|Tournament|Meta|Usage Rate|Win Rate|Bring Rate|Lead Rate|Top Cut Rate|Slot Analysis|Speed Tier|KO Threshold|Survival Scenario|Damage Calculation|Type Coverage|Defensive Synergy|Offensive Coverage|Archetype|Role|Threat|Counter|Check|Wall|Sweeper|Setup|Recovery|Support|Redirect|Weather|Terrain|Field Effect|Status Condition|Burn|Paralysis|Poison|Toxic|Sleep|Freeze|Confusion|Flinch|Stat Stage|Stat Boost|Stat Drop|Substitute|Safeguard|Aurora Veil|Light Screen|Reflect|Mist|Reflect Type|Natural Cure|Poison Heal|Magic Bounce|Prankster|Filter|Fluffy|Multiscale|Shed Skin|Sturdy|Damp|Liquid Ooze|Soundproof|Volt Absorb|Water Absorb|Flash Fire|Solar Power|Leaf Guard|Poison Heal|Iron Barbs|Rough Skin|Static|Limber|Flame Body|Magnet Pull|Compound Eyes|Sniper|Moody|Own Tempo|Super Luck|Adaptability|Skilled|Technician|Reckless|Sheer Force|Triage|Gale Wings|Schooling|Strong Jaw|Aura Break|Psychic Surge|Misty Surge|Grassy Surge|Electric Surge|Dancer|Drought|Drizzle|Snow Warning|Sand Stream|Defiant|Competitive|Flare Boost|Harvest|Regenerator|Battery|Flower Gift|Bad Dreams|Infiltrator|Cursed Body|Pickpocket|Magician|Queenly Majesty|Inner Focus|Oblivious|Truant|Hunger Switch|Rattled|Stakeout|Tangling Hair|Gooey|Battle Bond|Comatose|Disguise|Receiver|Orichalcum Pulse|Dauntless Shield|Wonder Skin|Slush Rush|Oppressor|Schooling|Grim Neigh|As One|Embody Aspect|Zero to Hero|Corrosion|Stalwart|Slush Rush|Tangling Hair|Gooey|Dazzling|Parental Bond|Power Construct|Disguise|Schooling|Orichalcum Pulse|As One|RKS System|Battle Bond|Comatose|Dauntless Shield|Determined Flywheel|Gorilla Tactics|Huge Power|Illusion|Imposter|Libero|Mimicry|Multitype|Neutralizing Gas|Parental Bond|Power Construct|Psychic Surge|Queenly Majesty|RKS System|Schooling|Shadow Shield|Shields Down|Simple|Slush Rush|Stakeout|Stance Change|Steelworker|Sturdy|Surge Surfer|Swarm|Sweet Veil|Symphony|Tangling Hair|Technician|Teravolt|Thermal Exchange|Trace|Transistor|Unaware|Unnerve|Victory Star|Volt Absorb|Wandering Spirit|Water Bubble|Water Compaction|Weak Armor|White Smoke|Wonder Skin|Zen Mode)\b/gi;

const STAT_PATTERN = /\b\d+(?:\.\d+)?%?\b/;

function hasToolCallsInHistory(messages: AssistantMessage[]): boolean {
  return messages.some(
    (m) => m.tool_calls && m.tool_calls.length > 0,
  );
}

function hasFactualClaims(response: string): boolean {
  // Check if response contains move names, pokemon names, stat numbers, or type claims
  return (
    MOVE_NAME_PATTERN.test(response) ||
    POKEMON_NAME_PATTERN.test(response) ||
    STAT_PATTERN.test(response) ||
    /\b(super effective|not very effective|immune|resists|weak to|4x|2x|0.5x|0.25x)\b/i.test(
      response,
    ) ||
    /\b(ability|moveset|learn|has |runs |should use |recommended)\b/i.test(
      response,
    )
  );
}

function isPureGeneration(toolNames: string[]): boolean {
  const generationTools = [
    "generate_teams",
    "generate_teams_with_pokemon",
    "generate_from_archetype",
  ];
  return toolNames.some((t) => generationTools.includes(t));
}

export function gateCheck(
  messages: AssistantMessage[],
  toolResults: Array<{ name: string; content: string }>,
  llmResponse: string,
): GateDecision {
  // Skip if no tool calls were made — nothing to validate against
  if (!hasToolCallsInHistory(messages)) {
    return { shouldCheck: false, mode: "skip" };
  }

  // Skip pure generation — engine provides accurate data, LLM just formats
  const toolNames = toolResults.map((r) => r.name);
  if (isPureGeneration(toolNames)) {
    return { shouldCheck: false, mode: "skip" };
  }

  // Skip if response has no factual claims (greeting, simple acknowledgment)
  if (!hasFactualClaims(llmResponse)) {
    return { shouldCheck: false, mode: "skip" };
  }

  // Determine strict vs soft mode
  const hasMovesOrAbilities =
    /\b(suggest_moves|suggest_abilities|suggest_sets|get_slot_suggestions|load_threat|get_threat_damaging_moves)\b/i.test(
      messages.map((m) => m.content).join(" ") +
        toolResults.map((r) => r.name).join(" "),
    );

  return {
    shouldCheck: true,
    mode: hasMovesOrAbilities ? "strict" : "soft",
  };
}

// ── Checker System Prompt ───────────────────────────────────────────────────

const CHECKER_SYSTEM_PROMPT = `You are a fact-checker for a Pokemon VGC (doubles) competitive assistant.
Your job is to verify that the AI's response matches the tool data it received.

CHECKING RULES:

STRICT MODE (for moves, abilities, stats, type effectiveness):
- Every move name the AI mentions MUST appear in the tool results. If it doesn't, remove it from the response.
- Every ability name must match what the tools returned.
- Every stat number must match the tool output exactly.
- Type effectiveness claims (super effective, immune, etc.) must match get_matchup results.
- If the AI adds information NOT in the tool results, remove it.

SOFT MODE (for strategic advice, team composition):
- Flag any obvious contradictions with tool data.
- Allow reasonable interpretation and strategic reasoning.
- Add "Based on the competitive data" or similar phrasing when making recommendations.

IMPORTANT:
- Do NOT add new information that wasn't in the tool results.
- Do NOT change the meaning of the response — only fix factual errors.
- If everything is correct, return the response unchanged.
- Return your result as JSON with this exact structure: {"needsCorrections": boolean, "corrections": [{"type": "factual"|"strategic", "original": string, "corrected": string}], "finalResponse": string}`;

// ── Prompt Builder ──────────────────────────────────────────────────────────

function buildCheckerPrompt(
  mode: "strict" | "soft" | "skip",
  llmResponse: string,
  toolResults: Array<{ name: string; content: string }>,
): string {
  const toolSummary = toolResults
    .map(
      (r) =>
        `--- TOOL: ${r.name} ---\n${r.content.slice(0, 3000)}`,
    )
    .join("\n\n");

  return `${CHECKER_SYSTEM_PROMPT}

MODE: ${mode.toUpperCase()}

LLM RESPONSE TO CHECK:
${llmResponse}

TOOL RESULTS (ground truth):
${toolSummary}

Analyze the response against the tool results. Return JSON.`;
}

// ── Response Parser ─────────────────────────────────────────────────────────

function parseCheckResponse(text: string): CheckResult {
  try {
    // Try to extract JSON from the response (may have markdown formatting)
    const jsonMatch = text.match(/\{[\s\S]*"needsCorrections"[^}]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as CheckResult;
    }

    // If no structured JSON, assume response is clean
    return {
      needsCorrections: false,
      corrections: [],
      finalResponse: text,
    };
  } catch {
    // If parsing fails, return the original response (fail open)
    return {
      needsCorrections: false,
      corrections: [],
      finalResponse: text,
    };
  }
}

// ── Main Self-Check Function ────────────────────────────────────────────────

const API_BASE = process.env.ASSISTANT_API_BASE || "https://api.openai.com/v1";
const API_KEY = process.env.ASSISTANT_API_KEY;
const MODEL = process.env.ASSISTANT_MODEL || "agent";

export async function selfCheck(
  request: SelfCheckRequest,
): Promise<CheckResult> {
  if (!API_KEY) {
    return {
      needsCorrections: false,
      corrections: [],
      finalResponse: request.llmResponse,
    };
  }

  // Gate check — decide if we need to check at all
  const gate = gateCheck(
    request.conversationHistory,
    request.toolResults,
    request.llmResponse,
  );

  if (!gate.shouldCheck) {
    return {
      needsCorrections: false,
      corrections: [],
      finalResponse: request.llmResponse,
    };
  }

  // Build the checker prompt
  const prompt = buildCheckerPrompt(gate.mode, request.llmResponse, request.toolResults);

  try {
    const response = await fetch(`${API_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: CHECKER_SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
        max_tokens: 2048,
        temperature: 0,
      }),
    });

    if (!response.ok) {
      console.error(
        `[SelfCheck] API error (${response.status}): ${await response.text()}`,
      );
      // Fail open — return original response
      return {
        needsCorrections: false,
        corrections: [],
        finalResponse: request.llmResponse,
      };
    }

    const data = await response.json();
    const checkerOutput = data.choices?.[0]?.message?.content;

    if (!checkerOutput) {
      return {
        needsCorrections: false,
        corrections: [],
        finalResponse: request.llmResponse,
      };
    }

    return parseCheckResponse(checkerOutput);
  } catch (error) {
    console.error("[SelfCheck] Error:", error);
    // Fail open — return original response
    return {
      needsCorrections: false,
      corrections: [],
      finalResponse: request.llmResponse,
    };
  }
}
