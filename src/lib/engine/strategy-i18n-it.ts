// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - STRATEGY TREE & INSIGHTS ITALIAN TRANSLATION
// Post-processes English engine output into Italian for display.
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
    "Turn 1": "Turno 1",
    "Turn 2": "Turno 2",
    "Turn 3+": "Turno 3+",
    "Intimidate partially blocked": "Intimidazione parzialmente bloccata",
    "Opponent Intimidate: -1 Atk": "Intimidazione avversaria: -1 Att",
    "No speed control  -  opponent moves first!": "Nessun controllo di velocità  -  il nemico agisce per primo!",
    "Both attack  -  you outspeed": "Entrambi attaccano  -  sei più veloce",
    "Continue offense or pivot?": "Continuare l'offensiva o fare pivot?",
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
  if (m) return `VENTOINCODA: ${m[1]} turni rimanenti`;

  // TRICK ROOM: N Turns left
  m = label.match(/^TRICK ROOM: (\d+) Turns left$/);
  if (m) return `TRICK ROOM: ${m[1]} turni rimanenti`;

  // {WEATHER} persists ({name} slower → sets last)
  m = label.match(/^(.+) persists \((.+) slower → sets last\)$/);
  if (m) return `${m[1]} persiste (${m[2]} più lento → attiva per ultimo)`;

  // {WEATHER} overrides ({name} slower)
  m = label.match(/^(.+) overrides \((.+) slower\)$/);
  if (m) return `${m[1]} sovrascrive (${m[2]} più lento)`;

  // {NAME} TERRAIN: 5 Turns
  m = label.match(/^(.+) TERRAIN: 5 Turns$/);
  if (m) return `CAMPO ${m[1]}: 5 turni`;

  // {WEATHER}: 5 Turns
  m = label.match(/^(.+): 5 Turns$/);
  if (m) return `${m[1]}: 5 turni`;

  // {name} threatens Fake Out → {name}
  m = label.match(/^(.+) threatens Fake Out → (.+)$/);
  if (m) return `${m[1]} minaccia ${tm("Fake Out")} → ${m[2]}`;

  // {name} may Fake Out {name}
  m = label.match(/^(.+) may Fake Out (.+)$/);
  if (m) return `${m[1]} può usare ${tm("Fake Out")} su ${m[2]}`;

  // {name} may set Trick Room
  m = label.match(/^(.+) may set Trick Room$/);
  if (m) return `${m[1]} può attivare ${tm("Trick Room")}`;

  // {name} gets flinched
  m = label.match(/^(.+) gets flinched$/);
  if (m) return `${m[1]} tentenna`;

  // ⚠ {name} redirects single-target attacks
  m = label.match(/^⚠ (.+) redirects single-target attacks$/);
  if (m) return `⚠ ${m[1]} redirige gli attacchi singolo bersaglio`;

  // Did {name} set {move} Turn 1?
  m = label.match(/^Did (.+) set (.+) Turn 1\?$/);
  if (m) return `${m[1]} ha attivato ${tm(m[2])} al Turno 1?`;

  // Both attack under {move}
  m = label.match(/^Both attack under (.+)$/);
  if (m) return `Entrambi attaccano con ${tm(m[1])}`;

  // Double into {name|threats}
  m = label.match(/^Double into (.+)$/);
  if (m) return m[1] === "threats" ? "Doppio sulle minacce" : `Doppio su ${m[1]}`;

  // Bring: {names}
  m = label.match(/^Bring: (.+)$/);
  if (m) return `Porta: ${m[1]}`;

  // Focus {name}
  m = label.match(/^Focus (.+)$/);
  if (m) return `Concentra ${m[1]}`;

  // Outcome labels
  if (label.startsWith("Favorable")) return "Favorevole  -  mantieni il controllo e fai cambio efficiente";
  if (label.startsWith("Close matchup")) return "Matchup equilibrato  -  evita errori, proteggi i pezzi chiave";
  if (label.startsWith("Uphill battle")) return "Battaglia in salita  -  KO precoci necessari per il momentum";
  if (label.startsWith("Tough matchup")) return "Matchup difficile  -  considera un lead diverso o una sorpresa";

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

  if (action === "attacks") return `${name} : attacca`;

  // {name}: {move} to finish
  if (action.endsWith(" to finish")) {
    const moveName = action.replace(" to finish", "");
    return `${name} : ${tm(moveName)} per finire`;
  }

  // {name}: Protect · Switch {rest}
  const protectSwitch = action.match(/^Protect · Switch (.+)$/);
  if (protectSwitch) return `${name} : ${tm("Protect")} · Cambio ${protectSwitch[1]}`;

  // {name}: {move}? (optional setup)
  if (action.endsWith("?")) {
    const moveName = action.slice(0, -1);
    return `${name} : ${tm(moveName)}?`;
  }

  // {name}: {move} → both foes
  if (action.endsWith(" → both foes")) {
    const moveName = action.replace(" → both foes", "");
    return `${name} : ${tm(moveName)} → entrambi i nemici`;
  }

  // {name}: {move} → {target}
  const arrowIdx = action.indexOf(" → ");
  if (arrowIdx > 0) {
    const moveName = action.substring(0, arrowIdx);
    const target = action.substring(arrowIdx + 3);
    return `${name} : ${tm(moveName)} → ${target}`;
  }

  // {name}: {move} (simple)
  return `${name} : ${tm(action)}`;
}

// ── DETAIL TRANSLATION ───────────────────────────────────────────────────────

function translateFieldNote(note: string): string {
  if (note === "No entry effects") return "Nessun effetto d'ingresso";
  if (note === "Intimidate on entry") return "Intimidazione all'ingresso";
  const terrainM = note.match(/^Sets (.+) terrain$/);
  if (terrainM) return `Attiva il campo ${terrainM[1]}`;
  const weatherM = note.match(/^Sets (.+)$/);
  if (weatherM) return `Attiva ${weatherM[1]}`;
  return note;
}

function translateReason(reason: string): string {
  switch (reason) {
    case "block setup": return "bloccare il setup";
    case "remove redirection": return "rimuovere la redirezione";
    case "biggest threat": return "minaccia principale";
    default: return reason;
  }
}

function translateDetail(detail: string | undefined, tm: TM, ta: TA): string | undefined {
  if (!detail) return undefined;

  // ── EXACT MATCHES (no interpolation needed) ──
  const exact: Record<string, string> = {
    "Most likely lead": "Lead più probabile",
    "Alternative lead": "Lead alternativo",
    "Possible lead": "Lead possibile",
    "Boosts your moves": "Potenzia le tue mosse",
    "Boosts opponent's moves": "Potenzia le mosse avversarie",
    "Maintain tempo": "Mantieni il ritmo",
    "Contest speed advantage": "Contesta il vantaggio di velocità",
    "Close out the game": "Chiudi la partita",
    "Full offense": "Offensiva totale",
    "Double your side's speed for 4 turns": "Raddoppia la velocità del tuo campo per 4 turni",
    "Reverse speed for 5 turns  -  your slow mons move first": "Inverte la velocità per 5 turni  -  i tuoi Pokémon lenti agiscono per primi",
    "Redirect attacks to protect partner": "Redirige gli attacchi per proteggere il compagno",
    "Boost while partner covers": "Potenzia mentre il compagno copre",
    "Draw all single-target attacks  -  protect partner": "Attira tutti gli attacchi singolo bersaglio  -  proteggi il compagno",
    "Safely boost while partner redirects": "Potenzia in sicurezza mentre il compagno redirige",
    "Your side doubles speed for 4 turns total": "Il tuo campo raddoppia la velocità per 4 turni totali",
    "Slower Pokémon move first": "I Pokémon più lenti agiscono per primi",
    "Double speed for 4 turns": "Raddoppia la velocità per 4 turni",
    "Reverse speed for 5 turns": "Inverte la velocità per 5 turni",
    "KO the TR setter before it moves (-7 priority)": "KO il setter di TR prima che agisca (priorità -7)",
    "Stall a turn and bring in a better matchup": "Guadagna un turno e porta un matchup migliore",
    "Under speed control, consider boosting for a sweep": "Con controllo di velocità, considera di potenziare per uno sweep",
    "Cover while partner sets up": "Copri mentre il compagno si prepara",
    "Set speed after turn 1 disruption": "Imposta la velocità dopo il disturbo del turno 1",
    "Continue pressing advantage": "Continua a spingere il vantaggio",
    "Depends on which Turn 1 branch was taken": "Dipende da quale ramo del Turno 1 è stato scelto",
    "Delayed from Turn 1  -  set up now": "Rimandato dal Turno 1  -  prepara ora",
  };
  if (exact[detail]) return exact[detail];

  // ── EXACT MATCHES REQUIRING tm/ta ──
  if (detail === "Counters Tailwind by reversing speed") return `Contro ${tm("Tailwind")} invertendo la velocità`;
  if (detail === "Consider bringing a Tailwind/Trick Room user or Protect to survive turn 1") return `Considera di portare un utilizzatore di ${tm("Tailwind")}/${tm("Trick Room")} o ${tm("Protect")} per sopravvivere al turno 1`;
  if (detail === "Depends on whether opponent Faked Out") return `Dipende se l'avversario ha usato ${tm("Fake Out")}`;
  if (detail === "Tailwind active  -  you outspeed") return `${tm("Tailwind")} attivo  -  sei più veloce`;
  if (detail === "Trick Room active  -  slowest moves first") return `${tm("Trick Room")} attivo  -  i più lenti agiscono per primi`;

  let m: RegExpMatchArray | null;

  // ── REGEX PATTERNS ──

  // Win Rate · field notes
  m = detail.match(/^(\d+)% Win Rate · (.+)$/);
  if (m) {
    const notes = m[2].split(" · ").map(translateFieldNote).join(" · ");
    return `Tasso di vittoria: ${m[1]}% · ${notes}`;
  }

  // Speed order
  m = detail.match(/^Speed order: (.+)$/);
  if (m) return `Ordine di velocità: ${m[1]}`;

  // Weather details
  m = detail.match(/^Your (.+) is active  -  5 turns$/);
  if (m) return `Il tuo ${m[1]} è attivo  -  5 turni`;

  m = detail.match(/^Opponent's (.+) is active\. Consider manual weather reset\.$/);
  if (m) return `Il ${m[1]} avversario è attivo. Considera un reset manuale della condizione atmosferica.`;

  m = detail.match(/^Set by (.+) on entry$/);
  if (m) return `Attivato da ${m[1]} all'ingresso`;

  // Intimidate
  m = detail.match(/^(.+)'s (.+) blocks Intimidate$/);
  if (m) return `${ta(m[2])} di ${m[1]} blocca Intimidazione`;

  m = detail.match(/^(.+) lowers your physical damage$/);
  if (m) return `${m[1]} riduce i tuoi danni fisici`;

  // Fake Out details
  m = detail.match(/^May block your (.+)  -  choose your play$/);
  if (m) return `Può bloccare la tua ${tm(m[1])}  -  scegli la tua mossa`;

  m = detail.match(/^Flinch to (.+)  -  partner sets up freely$/);
  if (m) return `Tentenna per ${translateReason(m[1])}  -  il compagno si prepara liberamente`;

  m = detail.match(/^Flinch to (.+) \(priority \+3, always goes first\)$/);
  if (m) return `Tentenna per ${translateReason(m[1])} (priorità +3, sempre per primo)`;

  m = detail.match(/^Partner Protects to block Fake Out  -  (.+) delayed to Turn 2$/);
  if (m) return `Il compagno usa ${tm("Protect")} per bloccare ${tm("Fake Out")}  -  ${tm(m[1])} rimandato al Turno 2`;

  m = detail.match(/^Block opponent's Fake Out  -  set up (.+) next turn$/);
  if (m) return `Blocca il ${tm("Fake Out")} avversario  -  ${tm(m[1])} al turno successivo`;

  m = detail.match(/^No Protect  -  (.+) delayed to Turn 2\. (.+) still flinches (.+)\.$/);
  if (m) return `Nessuna ${tm("Protect")}  -  ${tm(m[1])} rimandato al Turno 2. ${m[2]} tentenna ancora ${m[3]}.`;

  m = detail.match(/^Threatens to block your (.+)$/);
  if (m) return `Minaccia di bloccare la tua ${tm(m[1])}`;

  m = detail.match(/^Block Fake Out  -  set (.+) Turn 2$/);
  if (m) return `Blocca ${tm("Fake Out")}  -  ${tm(m[1])} al Turno 2`;

  m = detail.match(/^(.+) delayed to Turn 2$/);
  if (m) return `${tm(m[1])} rimandato al Turno 2`;

  m = detail.match(/^Ignore TR threat  -  deal maximum damage\. Counter-TR later if needed\.$/);
  if (m) return "Ignora la minaccia TR  -  infliggi danni massimi. Contrattacca TR più tardi se necessario.";

  // Turn 2 post-Fake Out
  m = detail.match(/^Fake Out used  -  switch to offense$/);
  if (m) return `${tm("Fake Out")} usato  -  passa all'offensiva`;

  m = detail.match(/^You outspeed  -  full offense$/);
  if (m) return "Sei più veloce  -  offensiva totale";

  m = detail.match(/^Press advantage under (.+)$/);
  if (m) return `Spingi il vantaggio con ${tm(m[1])}`;

  // Endgame
  m = detail.match(/^(.+) has best coverage vs opponent's remaining team$/);
  if (m) return `${m[1]} ha la migliore copertura contro il resto della squadra avversaria`;

  m = detail.match(/^Priority \+(\d+)  -  pick off weakened targets$/);
  if (m) return `Priorità +${m[1]}  -  elimina i bersagli indeboliti`;

  // Compound attack detail: "{name}: {move} + {name}: {move}"
  m = detail.match(/^(.+): (.+) \+ (.+): (.+)$/);
  if (m) {
    const m1 = m[2] === "attacks" ? "attacca" : tm(m[2]);
    const m2 = m[4] === "attacks" ? "attacca" : tm(m[4]);
    return `${m[1]} : ${m1} + ${m[3]} : ${m2}`;
  }

  // ── SUBSTRING REPLACEMENTS for composite details ──
  let result = detail;
  result = result.replace("Super effective! ", "Superefficace! ");
  result = result.replace("Focus fire! ", "Fuoco concentrato! ");
  result = result.replace("Free to attack while partner absorbs hits", "Libero di attaccare mentre il compagno assorbe i colpi");
  result = result.replace(/(\d+) BP (.+)-type$/, "$1 Potenza tipo $2");
  result = result.replace(/(\d+) BP$/, "$1 Potenza");
  return result;
}

// ── BRANCH LABEL TRANSLATION ────────────────────────────────────────────────

function translateBranchLabel(label: string | undefined, tm: TM): string | undefined {
  if (!label) return undefined;

  const exact: Record<string, string> = {
    "Scenario 1": "Scenario 1",
    "Scenario 2": "Scenario 2",
    "Scenario 3": "Scenario 3",
    "Ideal play": "Gioco ideale",
    "Safe play": "Gioco sicuro",
    "If flinched": "Se tentennato",
    "Protect first": `${tm("Protect")} per primo`,
    "Prevent TR": "Impedisci TR",
    "Press damage": "Danni massimi",
    "Setup went up": "Il setup è andato a segno",
    "Setup delayed": "Setup rimandato",
    "Offense": "Offensiva",
    "Pivot": "Pivot",
    "Optional": "Opzionale",
  };
  if (exact[label]) return exact[label];

  // {move} goes up
  const m = label.match(/^(.+) goes up$/);
  if (m) return `${tm(m[1])} è attivo`;

  return label;
}

// ── ARCHETYPE TRANSLATION ───────────────────────────────────────────────────

function translateArchetype(archetype: string): string {
  const translations: Record<string, string> = {
    "Rain team with Drizzle setter and Swift Swim sweepers for speed dominance.":
      "Squadra pioggia con setter di pioggia e sweepers Nuotavelox per dominare in velocità.",
    "Sun team with Drought setter and Chlorophyll sweepers for offensive pressure.":
      "Squadra sole con setter di sole e sweepers Clorofilla per la pressione offensiva.",
    "Sand team with Sand Stream and physical attackers boosted by sandstorm.":
      "Squadra sabbia con Sand Stream e attaccanti fisici potenziati dalla tempesta di sabbia.",
    "Dedicated Trick Room with multiple setters and slow powerhouses.":
      "Trick Room dedicato con più setter e Pokémon lenti e potenti.",
    "Trick Room mode available with slow attackers to abuse reversed speed.":
      "Modalità Trick Room disponibile con attaccanti lenti per sfruttare la velocità invertita.",
    "Flexible team with Trick Room as an option for specific matchups.":
      "Squadra flessibile con Trick Room come opzione per matchup specifici.",
    "Tailwind-based speed control to let moderate-speed attackers outpace threats.":
      "Controllo di velocità basato su Ventoincoda per superare le minacce.",
    "All-out offense with fast, powerful attackers and minimal defensive play.":
      "Offensiva totale con attaccanti veloci e potenti, poca difesa.",
    "Balanced team with offensive, defensive, and support options.":
      "Squadra equilibrata con opzioni offensive, difensive e di supporto.",
    "Collection of individually strong Pokémon with general type synergy.":
      "Collezione di Pokémon individualmente forti con sinergia di tipi.",
  };
  if (translations[archetype]) return translations[archetype];

  // Fallback: "{archetype} team"
  const m = archetype.match(/^(.+) team$/);
  if (m) {
    const archetypeTranslations: Record<string, string> = {
      rain: "pioggia", sun: "sole", sand: "sabbia",
      "trick-room": "Trick Room", "hard-trick-room": "full Trick Room",
      tailwind: "Ventoincoda", "hyper-offense": "iperoffensiva",
      balance: "equilibrata", goodstuffs: "goodstuffs",
    };
    const t = archetypeTranslations[m[1]] ?? m[1];
    return `squadra ${t}`;
  }

  return archetype;
}

// ── WIN CONDITION TRANSLATION ───────────────────────────────────────────────

function translateWinCondition(wc: string, tm: TM): string {
  const exact: Record<string, string> = {
    "Dominate with rain-boosted Water moves + Swift Swim speed":
      "Domina con le mosse Acqua potenziate dalla pioggia + velocità Nuotavelox",
    "Overwhelm with sun-boosted Fire moves + Chlorophyll speed":
      "Sovrasta con le mosse Fuoco potenziate dal sole + velocità Clorofilla",
    "Chip with sandstorm + Sand Rush physical sweeping":
      "Erodi con tempesta di sabbia + sweeping fisico Sabbiavelo",
    "Maximum turn 1 pressure  -  KO before they set up":
      "Pressione massima al turno 1  -  KO prima che si preparino",
    "Set up safely then sweep  -  protect your booster":
      "Preparati in sicurezza poi fai sweep  -  proteggi il tuo booster",
    "Disrupt turn 1, establish board control, then overwhelm":
      "Disturba al turno 1, stabilisci il controllo del campo, poi sovrasta",
    "Trade favorably and maintain board advantage":
      "Scambia favorevolmente e mantieni il vantaggio di campo",
  };
  if (exact[wc]) return exact[wc];

  if (wc === "Set Trick Room and let slow powerhouses sweep")
    return `Attiva ${tm("Trick Room")} e lascia che i powerhouse lenti facciano sweep`;
  if (wc === "Set Tailwind early and outpace with strong attacks")
    return `Attiva ${tm("Tailwind")} presto e supera con attacchi potenti`;

  let m: RegExpMatchArray | null;

  m = wc.match(/^Control the game under (.+)  -  leverage weather-boosted attacks$/);
  if (m) return `Controlla il gioco sotto ${m[1]}  -  sfrutta gli attacchi potenziati dalla condizione atmosferica`;

  m = wc.match(/^Capitalize on (.+) terrain  -  position to maximize its boost$/);
  if (m) return `Capitalizza sul campo ${m[1]}  -  posizionati per massimizzarne il potenziamento`;

  return wc;
}

// ── BACKUP PLAN TRANSLATION ─────────────────────────────────────────────────

function translateBackupPlan(plan: string, tm: TM): string {
  let m: RegExpMatchArray | null;

  m = plan.match(/^If losing speed war, pivot to (.+) for Trick Room mode$/);
  if (m) return `Se perdi la guerra di velocità, fai pivot su ${m[1]} per la modalità ${tm("Trick Room")}`;

  m = plan.match(/^Switch to (.+) to reset weather in your favor$/);
  if (m) return `Passa a ${m[1]} per reimpostare la condizione atmosferica a tuo favore`;

  m = plan.match(/^Cycle (.+) for repeated Intimidate to weaken physical attackers$/);
  if (m) return `Fai ruotare ${m[1]} per Intimidazione ripetuta contro gli attaccanti fisici`;

  m = plan.match(/^Pivot to (.+)  -  fresh matchup and momentum reset$/);
  if (m) return `Fai pivot su ${m[1]}  -  nuovo matchup e reset del momentum`;

  if (plan === "Adjust your game plan based on what the opponent reveals")
    return "Adatta il tuo piano di gioco in base a ciò che rivela l'avversario";

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

export function translateStrategyTreeIT(
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
    return `Inizia con ${tm("Fake Out")} + controllo di velocità per pressione massima al turno 1`;
  if (insight === "Lead with Fake Out user to disrupt the opponent's setup")
    return `Inizia con un utilizzatore di ${tm("Fake Out")} per disturbare il setup avversario`;
  if (insight === "Prioritize setting up speed control on turn 1")
    return "Dai priorità al controllo di velocità al turno 1";
  if (insight === "Strong matchup  -  focus on consistent play and don't overextend")
    return "Matchup favorevole  -  concentrati su un gioco costante e non esagerare";
  if (insight === "Tough matchup  -  look for surprise leads or alternate game plans")
    return "Matchup difficile  -  cerca lead a sorpresa o piani alternativi";

  let m: RegExpMatchArray | null;

  // Best leads: {name1} + {name2} ({n}% win rate over {n} battles)
  m = insight.match(/^Best leads: (.+) \+ (.+) \((\d+(?:\.\d+)?)% win rate over (\d+) battles\)$/);
  if (m) return `Migliori lead: ${m[1]} + ${m[2]} (${m[3]}% tasso di vittoria su ${m[4]} battaglie)`;

  // Avoid leading {name1} + {name2} (only {n}%)
  m = insight.match(/^Avoid leading (.+) \+ (.+) \(only (\d+(?:\.\d+)?)%\)$/);
  if (m) return `Evita di iniziare con ${m[1]} + ${m[2]} (solo ${m[3]}%)`;

  // Lead choice matters a lot here  -  {n}% gap between best and worst
  m = insight.match(/^Lead choice matters a lot here  -  (\d+(?:\.\d+)?)% gap between best and worst$/);
  if (m) return `La scelta del lead conta molto  -  ${m[1]}% di gap tra il migliore e il peggiore`;

  // {name} is your MVP for this matchup (+{n}% win rate when brought)
  m = insight.match(/^(.+) is your MVP for this matchup \(\+(\d+(?:\.\d+)?)% win rate when brought\)$/);
  if (m) return `${m[1]} è il tuo MVP per questo matchup (+${m[2]}% tasso di vittoria quando portato)`;

  // Consider leaving {name} in the back vs this team ({n}% impact)
  m = insight.match(/^Consider leaving (.+) in the back vs this team \((-?\d+(?:\.\d+)?)% impact\)$/);
  if (m) return `Considera di lasciare ${m[1]} in back contro questa squadra (${m[2]}% impatto)`;

  return insight;
}

export function translateInsightsIT(insights: string[], tm: TM): string[] {
  return insights.map(i => translateInsight(i, tm));
}
