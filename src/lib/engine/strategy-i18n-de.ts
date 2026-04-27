// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - STRATEGY TREE & INSIGHTS GERMAN TRANSLATION
// Post-processes English engine output into German for display.
// The engine generates the tree in English (logic relies on English strings),
// then this module translates all labels/details/branchLabels for the UI.
// ═══════════════════════════════════════════════════════════════════════════════

import type { StrategyTree, StrategyNode } from "./strategy-tree";

type TM = (name: string) => string; // translate move name
type TA = (name: string) => string; // translate ability name

// ── LABEL TRANSLATION ────────────────────────────────────────────────────────

function translateLabel(label: string, tm: TM, _ta: TA): string {
  // Exact matches
  const exact: Record<string, string> = {
    "Turn 1": "Zug 1",
    "Turn 2": "Zug 2",
    "Turn 3+": "Zug 3+",
    "Intimidate partially blocked": "Intimidate teilweise blockiert",
    "Opponent Intimidate: -1 Atk": "Gegner-Intimidate: -1 Angr",
    "No speed control  -  opponent moves first!": "Keine Tempokontrolle  –  Gegner geht zuerst!",
    "Both attack  -  you outspeed": "Beide greifen an  –  du bist schneller",
    "Continue offense or pivot?": "Offensive fortsetzen oder wechseln?",
  };
  if (exact[label]) return exact[label];

  let m: RegExpMatchArray | null;

  // Lead: {name} + {name}
  m = label.match(/^Lead: (.+) \+ (.+)$/);
  if (m) return `Lead: ${m[1]} + ${m[2]}`;

  // vs {name} + {name}
  m = label.match(/^vs (.+) \+ (.+)$/);
  if (m) return `vs ${m[1]} + ${m[2]}`;

  // TAILWIND: N Turns left
  m = label.match(/^TAILWIND: (\d+) Turns left$/);
  if (m) return `TAILWIND: Noch ${m[1]} Züge`;

  // TRICK ROOM: N Turns left
  m = label.match(/^TRICK ROOM: (\d+) Turns left$/);
  if (m) return `TRICK ROOM: Noch ${m[1]} Züge`;

  // {WEATHER} persists ({name} slower → sets last)
  m = label.match(/^(.+) persists \((.+) slower → sets last\)$/);
  if (m) return `${m[1]} bleibt aktiv (${m[2]} langsamer → setzt zuletzt)`;

  // {WEATHER} overrides ({name} slower)
  m = label.match(/^(.+) overrides \((.+) slower\)$/);
  if (m) return `${m[1]} überschreibt (${m[2]} langsamer)`;

  // {NAME} TERRAIN: 5 Turns
  m = label.match(/^(.+) TERRAIN: 5 Turns$/);
  if (m) return `${m[1]} TERRAIN: 5 Züge`;

  // {WEATHER}: 5 Turns
  m = label.match(/^(.+): 5 Turns$/);
  if (m) return `${m[1]}: 5 Züge`;

  // {name} threatens Fake Out → {name}
  m = label.match(/^(.+) threatens Fake Out → (.+)$/);
  if (m) return `${m[1]} droht ${tm("Fake Out")} → ${m[2]}`;

  // {name} may Fake Out {name}
  m = label.match(/^(.+) may Fake Out (.+)$/);
  if (m) return `${m[1]} kann ${tm("Fake Out")} gegen ${m[2]} einsetzen`;

  // {name} may set Trick Room
  m = label.match(/^(.+) may set Trick Room$/);
  if (m) return `${m[1]} kann ${tm("Trick Room")} aufsetzen`;

  // {name} gets flinched
  m = label.match(/^(.+) gets flinched$/);
  if (m) return `${m[1]} ist zurückgeschreckt`;

  // ⚠ {name} redirects single-target attacks
  m = label.match(/^⚠ (.+) redirects single-target attacks$/);
  if (m) return `⚠ ${m[1]} lenkt Single-Target-Angriffe um`;

  // Did {name} set {move} Turn 1?
  m = label.match(/^Did (.+) set (.+) Turn 1\?$/);
  if (m) return `Hat ${m[1]} ${tm(m[2])} in Zug 1 aufgesetzt?`;

  // Both attack under {move}
  m = label.match(/^Both attack under (.+)$/);
  if (m) return `Beide greifen unter ${tm(m[1])} an`;

  // Double into {name|threats}
  m = label.match(/^Double into (.+)$/);
  if (m) return m[1] === "threats" ? "Doppelangriff auf die Bedrohungen" : `Doppelangriff auf ${m[1]}`;

  // Bring: {names}
  m = label.match(/^Bring: (.+)$/);
  if (m) return `Mitbringen: ${m[1]}`;

  // Focus {name}
  m = label.match(/^Focus (.+)$/);
  if (m) return `Fokus auf ${m[1]}`;

  // Outcome labels
  if (label.startsWith("Favorable")) return "Günstig  –  Kontrolle behalten und effizient wechseln";
  if (label.startsWith("Close matchup")) return "Ausgeglichenes Matchup  –  Fehler vermeiden, Schlüssel-Pokémon schützen";
  if (label.startsWith("Uphill battle")) return "Schwieriger Kampf  –  frühe KOs für Momentum nötig";
  if (label.startsWith("Tough matchup")) return "Hartes Matchup  –  anderen Lead oder Überraschung erwägen";

  // Action pattern: "{name}: {action}" — must come last (broadest match)
  const colonIdx = label.indexOf(": ");
  if (colonIdx > 0 && !label.startsWith("Opponent") && !label.startsWith("TAILWIND") && !label.startsWith("TRICK ROOM")) {
    return translateActionLabel(label, colonIdx, tm);
  }

  return label;
}

function translateActionLabel(label: string, colonIdx: number, tm: TM): string {
  const name = label.substring(0, colonIdx);
  const action = label.substring(colonIdx + 2);

  if (action === "attacks") return `${name}: greift an`;

  // {name}: {move} to finish
  if (action.endsWith(" to finish")) {
    const moveName = action.replace(" to finish", "");
    return `${name}: ${tm(moveName)} zum Beenden`;
  }

  // {name}: Protect · Switch {rest}
  const protectSwitch = action.match(/^Protect · Switch (.+)$/);
  if (protectSwitch) return `${name}: ${tm("Protect")} · Switch ${protectSwitch[1]}`;

  // {name}: {move}? (optional setup)
  if (action.endsWith("?")) {
    const moveName = action.slice(0, -1);
    return `${name}: ${tm(moveName)}?`;
  }

  // {name}: {move} → both foes
  if (action.endsWith(" → both foes")) {
    const moveName = action.replace(" → both foes", "");
    return `${name}: ${tm(moveName)} → beide Gegner`;
  }

  // {name}: {move} → {target}
  const arrowIdx = action.indexOf(" → ");
  if (arrowIdx > 0) {
    const moveName = action.substring(0, arrowIdx);
    const target = action.substring(arrowIdx + 3);
    return `${name}: ${tm(moveName)} → ${target}`;
  }

  // {name}: {move} (simple)
  return `${name}: ${tm(action)}`;
}

// ── DETAIL TRANSLATION ───────────────────────────────────────────────────────

function translateFieldNote(note: string): string {
  if (note === "No entry effects") return "Keine Eintrittseffekte";
  if (note === "Intimidate on entry") return "Intimidate beim Eintritt";
  const terrainM = note.match(/^Sets (.+) terrain$/);
  if (terrainM) return `Setzt ${terrainM[1]}-Terrain`;
  const weatherM = note.match(/^Sets (.+)$/);
  if (weatherM) return `Setzt ${weatherM[1]}`;
  return note;
}

function translateReason(reason: string): string {
  switch (reason) {
    case "block setup": return "Setup blockieren";
    case "remove redirection": return "Umleitung entfernen";
    case "biggest threat": return "größte Bedrohung";
    default: return reason;
  }
}

function translateDetail(detail: string | undefined, tm: TM, ta: TA): string | undefined {
  if (!detail) return undefined;

  // ── EXACT MATCHES (no interpolation needed) ──
  const exact: Record<string, string> = {
    "Most likely lead": "Wahrscheinlichster Lead",
    "Alternative lead": "Alternativer Lead",
    "Possible lead": "Möglicher Lead",
    "Boosts your moves": "Verstärkt deine Attacken",
    "Boosts opponent's moves": "Verstärkt gegnerische Attacken",
    "Maintain tempo": "Tempo aufrechterhalten",
    "Contest speed advantage": "Tempovorteil erkämpfen",
    "Close out the game": "Spiel zum Abschluss bringen",
    "Full offense": "Volle Offensive",
    "Double your side's speed for 4 turns": "Verdoppelt die Geschwindigkeit deines Teams für 4 Züge",
    "Reverse speed for 5 turns  -  your slow mons move first": "Dreht die Initiative für 5 Züge um  –  deine langsamen Pokémon greifen zuerst an",
    "Redirect attacks to protect partner": "Lenkt Attacken um, um den Partner zu schützen",
    "Boost while partner covers": "Verstärkt sich, während der Partner deckt",
    "Draw all single-target attacks  -  protect partner": "Zieht alle Single-Target-Attacken an  –  schützt den Partner",
    "Safely boost while partner redirects": "Sicher verstärken, während der Partner umleitet",
    "Your side doubles speed for 4 turns total": "Dein Team verdoppelt die Geschwindigkeit für insgesamt 4 Züge",
    "Slower Pokémon move first": "Langsamere Pokémon greifen zuerst an",
    "Double speed for 4 turns": "Geschwindigkeit für 4 Züge verdoppelt",
    "Reverse speed for 5 turns": "Initiative für 5 Züge umgedreht",
    "KO the TR setter before it moves (-7 priority)": "KO den TR-Setter, bevor er agiert (Priorität -7)",
    "Stall a turn and bring in a better matchup": "Zug hinauszögern und besseres Matchup holen",
    "Under speed control, consider boosting for a sweep": "Bei Tempokontrolle: Verstärkung für einen Sweep erwägen",
    "Cover while partner sets up": "Decken, während der Partner sich aufbaut",
    "Set speed after turn 1 disruption": "Tempo nach Störung in Zug 1 setzen",
    "Continue pressing advantage": "Vorteil weiter ausnutzen",
    "Depends on which Turn 1 branch was taken": "Hängt davon ab, welcher Zug-1-Zweig gewählt wurde",
    "Delayed from Turn 1  -  set up now": "Von Zug 1 verzögert  –  jetzt aufbauen",
  };
  if (exact[detail]) return exact[detail];

  // ── EXACT MATCHES REQUIRING tm/ta ──
  if (detail === "Counters Tailwind by reversing speed") return `Kontert ${tm("Tailwind")}, indem es die Initiative umkehrt`;
  if (detail === "Consider bringing a Tailwind/Trick Room user or Protect to survive turn 1") return `Erwäge ${tm("Tailwind")}/${tm("Trick Room")}-Nutzer oder ${tm("Protect")}, um Zug 1 zu überleben`;
  if (detail === "Depends on whether opponent Faked Out") return `Hängt davon ab, ob der Gegner ${tm("Fake Out")} eingesetzt hat`;
  if (detail === "Tailwind active  -  you outspeed") return `${tm("Tailwind")} aktiv  –  du bist schneller`;
  if (detail === "Trick Room active  -  slowest moves first") return `${tm("Trick Room")} aktiv  –  langsamste greifen zuerst an`;

  let m: RegExpMatchArray | null;

  // ── REGEX PATTERNS ──

  // Win Rate · field notes
  m = detail.match(/^(\d+)% Win Rate · (.+)$/);
  if (m) {
    const notes = m[2].split(" · ").map(translateFieldNote).join(" · ");
    return `Siegesrate: ${m[1]}% · ${notes}`;
  }

  // Speed order
  m = detail.match(/^Speed order: (.+)$/);
  if (m) return `Reihenfolge: ${m[1]}`;

  // Weather details
  m = detail.match(/^Your (.+) is active  -  5 turns$/);
  if (m) return `Dein ${m[1]} ist aktiv  –  5 Züge`;

  m = detail.match(/^Opponent's (.+) is active\. Consider manual weather reset\.$/);
  if (m) return `Gegnerisches ${m[1]} ist aktiv. Manuelles Wetter-Reset erwägen.`;

  m = detail.match(/^Set by (.+) on entry$/);
  if (m) return `Aktiviert von ${m[1]} beim Eintritt`;

  // Intimidate
  m = detail.match(/^(.+)'s (.+) blocks Intimidate$/);
  if (m) return `${ta(m[2])} von ${m[1]} blockiert Intimidate`;

  m = detail.match(/^(.+) lowers your physical damage$/);
  if (m) return `${m[1]} senkt deinen physischen Schaden`;

  // Fake Out details
  m = detail.match(/^May block your (.+)  -  choose your play$/);
  if (m) return `Kann dein ${tm(m[1])} blockieren  –  wähle deinen Zug`;

  m = detail.match(/^Flinch to (.+)  -  partner sets up freely$/);
  if (m) return `Zurückschrecken für ${translateReason(m[1])}  –  Partner baut sich frei auf`;

  m = detail.match(/^Flinch to (.+) \(priority \+3, always goes first\)$/);
  if (m) return `Zurückschrecken für ${translateReason(m[1])} (Priorität +3, greift immer zuerst an)`;

  m = detail.match(/^Partner Protects to block Fake Out  -  (.+) delayed to Turn 2$/);
  if (m) return `Partner nutzt ${tm("Protect")} gegen ${tm("Fake Out")}  –  ${tm(m[1])} auf Zug 2 verschoben`;

  m = detail.match(/^Block opponent's Fake Out  -  set up (.+) next turn$/);
  if (m) return `Gegnerisches ${tm("Fake Out")} blockieren  –  ${tm(m[1])} nächsten Zug aufbauen`;

  m = detail.match(/^No Protect  -  (.+) delayed to Turn 2\. (.+) still flinches (.+)\.$/);
  if (m) return `Kein ${tm("Protect")}  –  ${tm(m[1])} auf Zug 2 verschoben. ${m[2]} schreckt weiterhin ${m[3]} zurück.`;

  m = detail.match(/^Threatens to block your (.+)$/);
  if (m) return `Droht, dein ${tm(m[1])} zu blockieren`;

  m = detail.match(/^Block Fake Out  -  set (.+) Turn 2$/);
  if (m) return `${tm("Fake Out")} blockieren  –  ${tm(m[1])} in Zug 2 aufbauen`;

  m = detail.match(/^(.+) delayed to Turn 2$/);
  if (m) return `${tm(m[1])} auf Zug 2 verschoben`;

  m = detail.match(/^Ignore TR threat  -  deal maximum damage\. Counter-TR later if needed\.$/);
  if (m) return "TR-Bedrohung ignorieren  –  maximaler Schaden. Ggf. später kontern.";

  // Turn 2 post-Fake Out
  m = detail.match(/^Fake Out used  -  switch to offense$/);
  if (m) return `${tm("Fake Out")} eingesetzt  –  auf Offensive umschalten`;

  m = detail.match(/^You outspeed  -  full offense$/);
  if (m) return "Du bist schneller  –  volle Offensive";

  m = detail.match(/^Press advantage under (.+)$/);
  if (m) return `Vorteil unter ${tm(m[1])} ausnutzen`;

  // Endgame
  m = detail.match(/^(.+) has best coverage vs opponent's remaining team$/);
  if (m) return `${m[1]} hat die beste Coverage gegen das verbleibende gegnerische Team`;

  m = detail.match(/^Priority \+(\d+)  -  pick off weakened targets$/);
  if (m) return `Priorität +${m[1]}  –  geschwächte Ziele ausschalten`;

  // Compound attack detail: "{name}: {move} + {name}: {move}"
  m = detail.match(/^(.+): (.+) \+ (.+): (.+)$/);
  if (m) {
    const m1 = m[2] === "attacks" ? "greift an" : tm(m[2]);
    const m2 = m[4] === "attacks" ? "greift an" : tm(m[4]);
    return `${m[1]}: ${m1} + ${m[3]}: ${m2}`;
  }

  // ── SUBSTRING REPLACEMENTS for composite details ──
  let result = detail;
  result = result.replace("Super effective! ", "Sehr effektiv! ");
  result = result.replace("Focus fire! ", "Konzentriertes Feuer! ");
  result = result.replace("Free to attack while partner absorbs hits", "Frei zum Angreifen, während der Partner Treffer absorbiert");
  result = result.replace(/(\d+) BP (.+)-type$/, "$1 AP Typ $2");
  result = result.replace(/(\d+) BP$/, "$1 AP");
  return result;
}

// ── BRANCH LABEL TRANSLATION ────────────────────────────────────────────────

function translateBranchLabel(label: string | undefined, tm: TM): string | undefined {
  if (!label) return undefined;

  const exact: Record<string, string> = {
    "Scenario 1": "Szenario 1",
    "Scenario 2": "Szenario 2",
    "Scenario 3": "Szenario 3",
    "Ideal play": "Idealer Zug",
    "Safe play": "Sicherer Zug",
    "If flinched": "Falls zurückgeschreckt",
    "Protect first": `${tm("Protect")} zuerst`,
    "Prevent TR": "TR verhindern",
    "Press damage": "Schaden ausnutzen",
    "Setup went up": "Aufbau erfolgreich",
    "Setup delayed": "Aufbau verzögert",
    "Offense": "Offensive",
    "Pivot": "Wechsel",
    "Optional": "Optional",
  };
  if (exact[label]) return exact[label];

  // {move} goes up
  const m = label.match(/^(.+) goes up$/);
  if (m) return `${tm(m[1])} ist aktiv`;

  return label;
}

// ── ARCHETYPE TRANSLATION ───────────────────────────────────────────────────

function translateArchetype(archetype: string): string {
  const translations: Record<string, string> = {
    "Rain team with Drizzle setter and Swift Swim sweepers for speed dominance.":
      "Regen-Team mit Drizzle-Setter und Swift-Swim-Sweepern für Tempodominanz.",
    "Sun team with Drought setter and Chlorophyll sweepers for offensive pressure.":
      "Sonnen-Team mit Drought-Setter und Chlorophyll-Sweepern für offensiven Druck.",
    "Sand team with Sand Stream and physical attackers boosted by sandstorm.":
      "Sand-Team mit Sand Stream und physischen Angreifern, die durch Sandsturm verstärkt werden.",
    "Dedicated Trick Room with multiple setters and slow powerhouses.":
      "Dediziertes Trick Room mit mehreren Settern und langsamen Powerhouses.",
    "Trick Room mode available with slow attackers to abuse reversed speed.":
      "Trick-Room-Modus verfügbar mit langsamen Angreifern, die die umgekehrte Initiative ausnutzen.",
    "Flexible team with Trick Room as an option for specific matchups.":
      "Flexibles Team mit Trick Room als Option für bestimmte Matchups.",
    "Tailwind-based speed control to let moderate-speed attackers outpace threats.":
      "Tailwind-basierte Tempokontrolle, damit mittelschnelle Angreifer Bedrohungen überholen.",
    "All-out offense with fast, powerful attackers and minimal defensive play.":
      "Volle Offensive mit schnellen, starken Angreifern und minimaler Defensive.",
    "Balanced team with offensive, defensive, and support options.":
      "Ausgewogenes Team mit offensiven, defensiven und Support-Optionen.",
    "Collection of individually strong Pokémon with general type synergy.":
      "Sammlung individuell starker Pokémon mit allgemeiner Typ-Synergie.",
  };
  if (translations[archetype]) return translations[archetype];

  // Fallback: "{archetype} team"
  const m = archetype.match(/^(.+) team$/);
  if (m) {
    const archetypeTranslations: Record<string, string> = {
      rain: "Regen", sun: "Sonne", sand: "Sand",
      "trick-room": "Trick Room", "hard-trick-room": "Hard Trick Room",
      tailwind: "Tailwind", "hyper-offense": "Hyper-Offensive",
      balance: "Balanced", goodstuffs: "Goodstuffs",
    };
    const t = archetypeTranslations[m[1]] ?? m[1];
    return `${t}-Team`;
  }

  return archetype;
}

// ── WIN CONDITION TRANSLATION ───────────────────────────────────────────────

function translateWinCondition(wc: string, tm: TM): string {
  const exact: Record<string, string> = {
    "Dominate with rain-boosted Water moves + Swift Swim speed":
      "Mit regenverstärkten Wasser-Attacken + Swift-Swim-Tempo dominieren",
    "Overwhelm with sun-boosted Fire moves + Chlorophyll speed":
      "Mit sonnenverstärkten Feuer-Attacken + Chlorophyll-Tempo überwältigen",
    "Chip with sandstorm + Sand Rush physical sweeping":
      "Mit Sandsturm + Sand Rush physischen Sweep austricksen",
    "Maximum turn 1 pressure  -  KO before they set up":
      "Maximaler Druck in Zug 1  –  KO, bevor sie sich aufbauen",
    "Set up safely then sweep  -  protect your booster":
      "Sicher aufbauen, dann sweepen  –  schütze deinen Booster",
    "Disrupt turn 1, establish board control, then overwhelm":
      "Zug 1 stören, Board-Kontrolle etablieren, dann überwältigen",
    "Trade favorably and maintain board advantage":
      "Günstig traden und Board-Vorteil aufrechterhalten",
  };
  if (exact[wc]) return exact[wc];

  if (wc === "Set Trick Room and let slow powerhouses sweep")
    return `${tm("Trick Room")} aufsetzen und langsamen Powerhouses zum Sweepen lassen`;
  if (wc === "Set Tailwind early and outpace with strong attacks")
    return `${tm("Tailwind")} früh aufsetzen und mit starken Attacken überholen`;

  let m: RegExpMatchArray | null;

  m = wc.match(/^Control the game under (.+)  -  leverage weather-boosted attacks$/);
  if (m) return `Kontrolliere das Spiel unter ${m[1]}  –  nutze wetterverstärkte Attacken`;

  m = wc.match(/^Capitalize on (.+) terrain  -  position to maximize its boost$/);
  if (m) return `Profitiere vom ${m[1]}-Terrain  –  positioniere dich für maximalen Boost`;

  return wc;
}

// ── BACKUP PLAN TRANSLATION ─────────────────────────────────────────────────

function translateBackupPlan(plan: string, tm: TM): string {
  let m: RegExpMatchArray | null;

  m = plan.match(/^If losing speed war, pivot to (.+) for Trick Room mode$/);
  if (m) return `Bei verlorener Tempowechsel auf ${m[1]} für ${tm("Trick Room")}-Modus`;

  m = plan.match(/^Switch to (.+) to reset weather in your favor$/);
  if (m) return `Wechsle zu ${m[1]}, um Wetter zu deinen Gunsten zurückzusetzen`;

  m = plan.match(/^Cycle (.+) for repeated Intimidate to weaken physical attackers$/);
  if (m) return `Cycliere ${m[1]} für wiederholtes Intimidate, um physische Angreifer zu schwächen`;

  m = plan.match(/^Pivot to (.+)  -  fresh matchup and momentum reset$/);
  if (m) return `Wechsle zu ${m[1]}  –  frisches Matchup und Momentum-Reset`;

  if (plan === "Adjust your game plan based on what the opponent reveals")
    return "Passe deinen Spielplan basierend auf dem an, was der Gegner preisgibt";

  return plan;
}

// ── TREE WALKER ─────────────────────────────────────────────────────────────

function translateNode(node: StrategyNode, tm: TM, ta: TA): StrategyNode {
  return {
    ...node,
    label: translateLabel(node.label, tm, ta),
    detail: translateDetail(node.detail, tm, ta),
    branchLabel: translateBranchLabel(node.branchLabel, tm),
    children: node.children.map(c => translateNode(c, tm, ta)),
  };
}

// ── EXPORTED: TRANSLATE FULL STRATEGY TREE ──────────────────────────────────

export function translateStrategyTreeDE(
  tree: StrategyTree,
  tm: TM,
  ta: TA,
): StrategyTree {
  return {
    root: translateNode(tree.root, tm, ta),
    archetype: translateArchetype(tree.archetype),
    winCondition: translateWinCondition(tree.winCondition, tm),
    keyThreats: tree.keyThreats, // Pokémon names — no translation needed
    backupPlan: translateBackupPlan(tree.backupPlan, tm),
  };
}

// ── EXPORTED: TRANSLATE BATTLE INSIGHTS ─────────────────────────────────────

function translateInsight(insight: string, tm: TM): string {
  // Exact matches
  if (insight === "Lead with Fake Out + Speed Control for maximum turn 1 pressure")
    return `Lead mit ${tm("Fake Out")} + Tempokontrolle für maximalen Druck in Zug 1`;
  if (insight === "Lead with Fake Out user to disrupt the opponent's setup")
    return `Lead mit Fake-Out-Nutzer, um den gegnerischen Aufbau zu stören`;
  if (insight === "Prioritize setting up speed control on turn 1")
    return "Priorisiere Tempokontrolle in Zug 1";
  if (insight === "Strong matchup  -  focus on consistent play and don't overextend")
    return "Starkes Matchup  –  fokussiere dich auf konsistentes Spielen und überspiele nicht";
  if (insight === "Tough matchup  -  look for surprise leads or alternate game plans")
    return "Hartes Matchup  –  suche nach Überraschungs-Leads oder alternativen Spielplänen";

  let m: RegExpMatchArray | null;

  // Best leads: {name1} + {name2} ({n}% win rate over {n} battles)
  m = insight.match(/^Best leads: (.+) \+ (.+) \((\d+(?:\.\d+)?)% win rate over (\d+) battles\)$/);
  if (m) return `Beste Leads: ${m[1]} + ${m[2]} (${m[3]}% Siegquote über ${m[4]} Kämpfe)`;

  // Avoid leading {name1} + {name2} (only {n}%)
  m = insight.match(/^Avoid leading (.+) \+ (.+) \(only (\d+(?:\.\d+)?)%\)$/);
  if (m) return `Vermeide Lead mit ${m[1]} + ${m[2]} (nur ${m[3]}%)`;

  // Lead choice matters a lot here  -  {n}% gap between best and worst
  m = insight.match(/^Lead choice matters a lot here  -  (\d+(?:\.\d+)?)% gap between best and worst$/);
  if (m) return `Lead-Wahl ist hier sehr wichtig  –  ${m[1]}% Unterschied zwischen Bestem und Schlechtestem`;

  // {name} is your MVP for this matchup (+{n}% win rate when brought)
  m = insight.match(/^(.+) is your MVP for this matchup \+(\d+(?:\.\d+)?)% win rate when brought\)$/);
  if (m) return `${m[1]} ist dein MVP für dieses Matchup (+${m[2]}% Siegquote, wenn mitgebracht)`;

  // Consider leaving {name} in the back vs this team ({n}% impact)
  m = insight.match(/^Consider leaving (.+) in the back vs this team \((-?\d+(?:\.\d+)?)% impact\)$/);
  if (m) return `Erwäge, ${m[1]} in der Reserve zu lassen gegen dieses Team (${m[2]}% Einfluss)`;

  return insight;
}

export function translateInsightsDE(insights: string[], tm: TM): string[] {
  return insights.map(i => translateInsight(i, tm));
}
