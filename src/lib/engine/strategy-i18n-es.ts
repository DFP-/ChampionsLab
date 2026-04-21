// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - STRATEGY TREE & INSIGHTS SPANISH TRANSLATION
// Mirror of strategy-i18n.ts (French) but in Spanish.
// ═══════════════════════════════════════════════════════════════════════════════

import type { StrategyTree, StrategyNode } from "./strategy-tree";

type TM = (name: string) => string;
type TA = (name: string) => string;

// ── LABEL TRANSLATION ────────────────────────────────────────────────────────

function translateLabel(label: string, tm: TM, _ta: TA): string {
  const exact: Record<string, string> = {
    "Turn 1": "Turno 1",
    "Turn 2": "Turno 2",
    "Turn 3+": "Turno 3+",
    "Intimidate partially blocked": "Intimidación parcialmente bloqueada",
    "Opponent Intimidate: -1 Atk": "Intimidación rival: -1 Ata",
    "No speed control  -  opponent moves first!": "Sin control de velocidad  -  ¡el rival ataca primero!",
    "Both attack  -  you outspeed": "Ambos atacan  -  eres más rápido",
    "Continue offense or pivot?": "¿Seguir atacando o pivotar?",
  };
  if (exact[label]) return exact[label];

  let m: RegExpMatchArray | null;

  m = label.match(/^Lead: (.+) \+ (.+)$/);
  if (m) return `Salida: ${m[1]} + ${m[2]}`;

  m = label.match(/^vs (.+) \+ (.+)$/);
  if (m) return `vs ${m[1]} + ${m[2]}`;

  m = label.match(/^TAILWIND: (\d+) Turns left$/);
  if (m) return `VIENTO AFÍN: quedan ${m[1]} turnos`;

  m = label.match(/^TRICK ROOM: (\d+) Turns left$/);
  if (m) return `ESPACIO RARO: quedan ${m[1]} turnos`;

  m = label.match(/^(.+) persists \((.+) slower → sets last\)$/);
  if (m) return `${m[1]} persiste (${m[2]} más lento → activa al final)`;

  m = label.match(/^(.+) overrides \((.+) slower\)$/);
  if (m) return `${m[1]} sobrescribe (${m[2]} más lento)`;

  m = label.match(/^(.+) TERRAIN: 5 Turns$/);
  if (m) return `CAMPO ${m[1]}: 5 turnos`;

  m = label.match(/^(.+): 5 Turns$/);
  if (m) return `${m[1]}: 5 turnos`;

  m = label.match(/^(.+) threatens Fake Out → (.+)$/);
  if (m) return `${m[1]} amenaza con ${tm("Fake Out")} → ${m[2]}`;

  m = label.match(/^(.+) may Fake Out (.+)$/);
  if (m) return `${m[1]} puede usar ${tm("Fake Out")} sobre ${m[2]}`;

  m = label.match(/^(.+) may set Trick Room$/);
  if (m) return `${m[1]} puede activar ${tm("Trick Room")}`;

  m = label.match(/^(.+) gets flinched$/);
  if (m) return `${m[1]} se amedrenta`;

  m = label.match(/^⚠ (.+) redirects single-target attacks$/);
  if (m) return `⚠ ${m[1]} redirige los ataques de objetivo único`;

  m = label.match(/^Did (.+) set (.+) Turn 1\?$/);
  if (m) return `¿${m[1]} activó ${tm(m[2])} en el Turno 1?`;

  m = label.match(/^Both attack under (.+)$/);
  if (m) return `Ambos atacan bajo ${tm(m[1])}`;

  m = label.match(/^Double into (.+)$/);
  if (m) return m[1] === "threats" ? "Doble sobre las amenazas" : `Doble sobre ${m[1]}`;

  m = label.match(/^Bring: (.+)$/);
  if (m) return `Llevar: ${m[1]}`;

  m = label.match(/^Focus (.+)$/);
  if (m) return `Enfocar a ${m[1]}`;

  if (label.startsWith("Favorable")) return "Favorable  -  mantén el control y cambia eficientemente";
  if (label.startsWith("Close matchup")) return "Enfrentamiento ajustado  -  evita errores, protege las piezas clave";
  if (label.startsWith("Uphill battle")) return "Batalla cuesta arriba  -  necesitas KOs tempranos para el momentum";
  if (label.startsWith("Tough matchup")) return "Enfrentamiento muy difícil  -  considera otra salida o sorpresa";

  const colonIdx = label.indexOf(": ");
  if (colonIdx > 0 && !label.startsWith("Opponent") && !label.startsWith("TAILWIND") && !label.startsWith("TRICK ROOM")) {
    return translateActionLabel(label, colonIdx, tm);
  }

  return label;
}

function translateActionLabel(label: string, colonIdx: number, tm: TM): string {
  const name = label.substring(0, colonIdx);
  const action = label.substring(colonIdx + 2);

  if (action === "attacks") return `${name}: ataca`;

  if (action.endsWith(" to finish")) {
    const moveName = action.replace(" to finish", "");
    return `${name}: ${tm(moveName)} para cerrar`;
  }

  const protectSwitch = action.match(/^Protect · Switch (.+)$/);
  if (protectSwitch) return `${name}: ${tm("Protect")} · Cambio ${protectSwitch[1]}`;

  if (action.endsWith("?")) {
    const moveName = action.slice(0, -1);
    return `${name}: ${tm(moveName)}?`;
  }

  if (action.endsWith(" → both foes")) {
    const moveName = action.replace(" → both foes", "");
    return `${name}: ${tm(moveName)} → ambos rivales`;
  }

  const arrowIdx = action.indexOf(" → ");
  if (arrowIdx > 0) {
    const moveName = action.substring(0, arrowIdx);
    const target = action.substring(arrowIdx + 3);
    return `${name}: ${tm(moveName)} → ${target}`;
  }

  return `${name}: ${tm(action)}`;
}

// ── DETAIL TRANSLATION ───────────────────────────────────────────────────────

function translateFieldNote(note: string): string {
  if (note === "No entry effects") return "Sin efectos de entrada";
  if (note === "Intimidate on entry") return "Intimidación al entrar";
  const terrainM = note.match(/^Sets (.+) terrain$/);
  if (terrainM) return `Activa el campo ${terrainM[1]}`;
  const weatherM = note.match(/^Sets (.+)$/);
  if (weatherM) return `Activa ${weatherM[1]}`;
  return note;
}

function translateReason(reason: string): string {
  switch (reason) {
    case "block setup": return "bloquear el set-up";
    case "remove redirection": return "eliminar la redirección";
    case "biggest threat": return "mayor amenaza";
    default: return reason;
  }
}

function translateDetail(detail: string | undefined, tm: TM, ta: TA): string | undefined {
  if (!detail) return undefined;

  const exact: Record<string, string> = {
    "Most likely lead": "Salida más probable",
    "Alternative lead": "Salida alternativa",
    "Possible lead": "Salida posible",
    "Boosts your moves": "Potencia tus ataques",
    "Boosts opponent's moves": "Potencia los ataques rivales",
    "Maintain tempo": "Mantén el tempo",
    "Contest speed advantage": "Disputa la ventaja de velocidad",
    "Close out the game": "Cierra la partida",
    "Full offense": "Ofensiva total",
    "Double your side's speed for 4 turns": "Duplica la velocidad de tu equipo durante 4 turnos",
    "Reverse speed for 5 turns  -  your slow mons move first": "Invierte la velocidad durante 5 turnos  -  tus Pokémon lentos atacan primero",
    "Redirect attacks to protect partner": "Redirige los ataques para proteger al compañero",
    "Boost while partner covers": "Potencia mientras el compañero cubre",
    "Draw all single-target attacks  -  protect partner": "Atrae todos los ataques de objetivo único  -  protege al compañero",
    "Safely boost while partner redirects": "Potencia con seguridad mientras el compañero redirige",
    "Your side doubles speed for 4 turns total": "Tu equipo duplica la velocidad durante 4 turnos en total",
    "Slower Pokémon move first": "Los Pokémon más lentos atacan primero",
    "Double speed for 4 turns": "Doble velocidad durante 4 turnos",
    "Reverse speed for 5 turns": "Velocidad invertida durante 5 turnos",
    "KO the TR setter before it moves (-7 priority)": "KO al usuario de Espacio Raro antes de que mueva (prioridad -7)",
    "Stall a turn and bring in a better matchup": "Gana un turno y trae un mejor enfrentamiento",
    "Under speed control, consider boosting for a sweep": "Bajo control de velocidad, considera potenciar para barrer",
    "Cover while partner sets up": "Cubre mientras el compañero prepara",
    "Set speed after turn 1 disruption": "Control de velocidad tras la disrupción del turno 1",
    "Continue pressing advantage": "Continúa presionando la ventaja",
    "Depends on which Turn 1 branch was taken": "Depende de la rama elegida en el Turno 1",
    "Delayed from Turn 1  -  set up now": "Retrasado del Turno 1  -  prepara ahora",
  };
  if (exact[detail]) return exact[detail];

  if (detail === "Counters Tailwind by reversing speed") return `Contrarresta ${tm("Tailwind")} invirtiendo la velocidad`;
  if (detail === "Consider bringing a Tailwind/Trick Room user or Protect to survive turn 1") return `Considera llevar ${tm("Tailwind")}/${tm("Trick Room")} o ${tm("Protect")} para sobrevivir al turno 1`;
  if (detail === "Depends on whether opponent Faked Out") return `Depende de si el rival usó ${tm("Fake Out")}`;
  if (detail === "Tailwind active  -  you outspeed") return `${tm("Tailwind")} activo  -  eres más rápido`;
  if (detail === "Trick Room active  -  slowest moves first") return `${tm("Trick Room")} activo  -  los más lentos atacan primero`;

  let m: RegExpMatchArray | null;

  m = detail.match(/^(\d+)% Win Rate · (.+)$/);
  if (m) {
    const notes = m[2].split(" · ").map(translateFieldNote).join(" · ");
    return `Tasa de victoria: ${m[1]}% · ${notes}`;
  }

  m = detail.match(/^Speed order: (.+)$/);
  if (m) return `Orden de velocidad: ${m[1]}`;

  m = detail.match(/^Your (.+) is active  -  5 turns$/);
  if (m) return `Tu ${m[1]} está activo  -  5 turnos`;

  m = detail.match(/^Opponent's (.+) is active\. Consider manual weather reset\.$/);
  if (m) return `El ${m[1]} rival está activo. Considera reiniciar el clima manualmente.`;

  m = detail.match(/^Set by (.+) on entry$/);
  if (m) return `Activado por ${m[1]} al entrar`;

  m = detail.match(/^(.+)'s (.+) blocks Intimidate$/);
  if (m) return `${ta(m[2])} de ${m[1]} bloquea Intimidación`;

  m = detail.match(/^(.+) lowers your physical damage$/);
  if (m) return `${m[1]} reduce tu daño físico`;

  m = detail.match(/^May block your (.+)  -  choose your play$/);
  if (m) return `Puede bloquear tu ${tm(m[1])}  -  elige tu jugada`;

  m = detail.match(/^Flinch to (.+)  -  partner sets up freely$/);
  if (m) return `Amedrentar para ${translateReason(m[1])}  -  el compañero prepara libremente`;

  m = detail.match(/^Flinch to (.+) \(priority \+3, always goes first\)$/);
  if (m) return `Amedrentar para ${translateReason(m[1])} (prioridad +3, siempre primero)`;

  m = detail.match(/^Partner Protects to block Fake Out  -  (.+) delayed to Turn 2$/);
  if (m) return `El compañero usa ${tm("Protect")} para bloquear ${tm("Fake Out")}  -  ${tm(m[1])} retrasado al Turno 2`;

  m = detail.match(/^Block opponent's Fake Out  -  set up (.+) next turn$/);
  if (m) return `Bloquea el ${tm("Fake Out")} rival  -  ${tm(m[1])} en el siguiente turno`;

  m = detail.match(/^No Protect  -  (.+) delayed to Turn 2\. (.+) still flinches (.+)\.$/);
  if (m) return `Sin ${tm("Protect")}  -  ${tm(m[1])} retrasado al Turno 2. ${m[2]} aún amedrenta a ${m[3]}.`;

  m = detail.match(/^Threatens to block your (.+)$/);
  if (m) return `Amenaza con bloquear tu ${tm(m[1])}`;

  m = detail.match(/^Block Fake Out  -  set (.+) Turn 2$/);
  if (m) return `Bloquea ${tm("Fake Out")}  -  ${tm(m[1])} en el Turno 2`;

  m = detail.match(/^(.+) delayed to Turn 2$/);
  if (m) return `${tm(m[1])} retrasado al Turno 2`;

  m = detail.match(/^Ignore TR threat  -  deal maximum damage\. Counter-TR later if needed\.$/);
  if (m) return "Ignora la amenaza de Espacio Raro  -  daño máximo. Contrarresta después si es necesario.";

  m = detail.match(/^Fake Out used  -  switch to offense$/);
  if (m) return `${tm("Fake Out")} usado  -  pasa a la ofensiva`;

  m = detail.match(/^You outspeed  -  full offense$/);
  if (m) return "Eres más rápido  -  ofensiva total";

  m = detail.match(/^Press advantage under (.+)$/);
  if (m) return `Presiona la ventaja bajo ${tm(m[1])}`;

  m = detail.match(/^(.+) has best coverage vs opponent's remaining team$/);
  if (m) return `${m[1]} tiene la mejor cobertura contra el resto del equipo rival`;

  m = detail.match(/^Priority \+(\d+)  -  pick off weakened targets$/);
  if (m) return `Prioridad +${m[1]}  -  remata objetivos debilitados`;

  m = detail.match(/^(.+): (.+) \+ (.+): (.+)$/);
  if (m) {
    const m1 = m[2] === "attacks" ? "ataca" : tm(m[2]);
    const m2 = m[4] === "attacks" ? "ataca" : tm(m[4]);
    return `${m[1]}: ${m1} + ${m[3]}: ${m2}`;
  }

  let result = detail;
  result = result.replace("Super effective! ", "¡Supereficaz! ");
  result = result.replace("Focus fire! ", "¡Fuego concentrado! ");
  result = result.replace("Free to attack while partner absorbs hits", "Libre para atacar mientras el compañero encaja");
  result = result.replace(/(\d+) BP (.+)-type$/, "$1 PA tipo $2");
  result = result.replace(/(\d+) BP$/, "$1 PA");
  return result;
}

// ── BRANCH LABEL TRANSLATION ────────────────────────────────────────────────

function translateBranchLabel(label: string | undefined, tm: TM): string | undefined {
  if (!label) return undefined;

  const exact: Record<string, string> = {
    "Scenario 1": "Escenario 1",
    "Scenario 2": "Escenario 2",
    "Scenario 3": "Escenario 3",
    "Ideal play": "Jugada ideal",
    "Safe play": "Jugada segura",
    "If flinched": "Si amedrentado",
    "Protect first": `${tm("Protect")} primero`,
    "Prevent TR": "Evitar Espacio Raro",
    "Press damage": "Daño máximo",
    "Setup went up": "El setup se activó",
    "Setup delayed": "Setup retrasado",
    "Offense": "Ofensiva",
    "Pivot": "Pivotar",
    "Optional": "Opcional",
  };
  if (exact[label]) return exact[label];

  const m = label.match(/^(.+) goes up$/);
  if (m) return `${tm(m[1])} activo`;

  return label;
}

// ── ARCHETYPE TRANSLATION ───────────────────────────────────────────────────

function translateArchetype(archetype: string): string {
  const translations: Record<string, string> = {
    "Rain team with Drizzle setter and Swift Swim sweepers for speed dominance.":
      "Equipo de lluvia con activador de Llovizna y sweepers Nado Rápido para dominar la velocidad.",
    "Sun team with Drought setter and Chlorophyll sweepers for offensive pressure.":
      "Equipo de sol con activador de Sequía y sweepers Clorofila para presión ofensiva.",
    "Sand team with Sand Stream and physical attackers boosted by sandstorm.":
      "Equipo de arena con Arena Veloz y atacantes físicos potenciados por la tormenta.",
    "Dedicated Trick Room with multiple setters and slow powerhouses.":
      "Espacio Raro dedicado con múltiples activadores y Pokémon lentos y potentes.",
    "Trick Room mode available with slow attackers to abuse reversed speed.":
      "Modo Espacio Raro disponible con atacantes lentos para abusar de la velocidad invertida.",
    "Flexible team with Trick Room as an option for specific matchups.":
      "Equipo flexible con Espacio Raro como opción para ciertos enfrentamientos.",
    "Tailwind-based speed control to let moderate-speed attackers outpace threats.":
      "Control de velocidad basado en Viento Afín para superar amenazas con atacantes medios.",
    "All-out offense with fast, powerful attackers and minimal defensive play.":
      "Ofensiva total con atacantes rápidos y potentes, poco juego defensivo.",
    "Balanced team with offensive, defensive, and support options.":
      "Equipo equilibrado con opciones ofensivas, defensivas y de apoyo.",
    "Collection of individually strong Pokémon with general type synergy.":
      "Colección de Pokémon fuertes individualmente con sinergia general de tipos.",
  };
  if (translations[archetype]) return translations[archetype];

  const m = archetype.match(/^(.+) team$/);
  if (m) {
    const archetypeTranslations: Record<string, string> = {
      rain: "de lluvia", sun: "de sol", sand: "de arena",
      "trick-room": "Espacio Raro", "hard-trick-room": "Espacio Raro puro",
      tailwind: "Viento Afín", "hyper-offense": "hiperofensivo",
      balance: "equilibrado", goodstuffs: "goodstuffs",
    };
    const t = archetypeTranslations[m[1]] ?? m[1];
    return `equipo ${t}`;
  }

  return archetype;
}

// ── WIN CONDITION TRANSLATION ───────────────────────────────────────────────

function translateWinCondition(wc: string, tm: TM): string {
  const exact: Record<string, string> = {
    "Dominate with rain-boosted Water moves + Swift Swim speed":
      "Domina con ataques Agua potenciados por la lluvia + velocidad Nado Rápido",
    "Overwhelm with sun-boosted Fire moves + Chlorophyll speed":
      "Arrolla con ataques Fuego potenciados por el sol + velocidad Clorofila",
    "Chip with sandstorm + Sand Rush physical sweeping":
      "Desgasta con tormenta de arena + barrido físico de Ímpetu Arena",
    "Maximum turn 1 pressure  -  KO before they set up":
      "Presión máxima en el turno 1  -  KO antes de que preparen",
    "Set up safely then sweep  -  protect your booster":
      "Prepara con seguridad y luego barre  -  protege a tu booster",
    "Disrupt turn 1, establish board control, then overwhelm":
      "Interrumpe el turno 1, toma el control del tablero, luego arrolla",
    "Trade favorably and maintain board advantage":
      "Intercambia favorablemente y mantén la ventaja en el tablero",
  };
  if (exact[wc]) return exact[wc];

  if (wc === "Set Trick Room and let slow powerhouses sweep")
    return `Activa ${tm("Trick Room")} y deja que los lentos y potentes barran`;
  if (wc === "Set Tailwind early and outpace with strong attacks")
    return `Activa ${tm("Tailwind")} pronto y supera en velocidad con ataques fuertes`;

  let m: RegExpMatchArray | null;

  m = wc.match(/^Control the game under (.+)  -  leverage weather-boosted attacks$/);
  if (m) return `Controla la partida bajo ${m[1]}  -  aprovecha los ataques potenciados por el clima`;

  m = wc.match(/^Capitalize on (.+) terrain  -  position to maximize its boost$/);
  if (m) return `Aprovecha el campo ${m[1]}  -  posiciónate para maximizar su boost`;

  return wc;
}

// ── BACKUP PLAN TRANSLATION ─────────────────────────────────────────────────

function translateBackupPlan(plan: string, tm: TM): string {
  let m: RegExpMatchArray | null;

  m = plan.match(/^If losing speed war, pivot to (.+) for Trick Room mode$/);
  if (m) return `Si pierdes la guerra de velocidad, pivota a ${m[1]} para el modo ${tm("Trick Room")}`;

  m = plan.match(/^Switch to (.+) to reset weather in your favor$/);
  if (m) return `Cambia a ${m[1]} para reiniciar el clima a tu favor`;

  m = plan.match(/^Cycle (.+) for repeated Intimidate to weaken physical attackers$/);
  if (m) return `Rota ${m[1]} para Intimidación repetida y debilitar atacantes físicos`;

  m = plan.match(/^Pivot to (.+)  -  fresh matchup and momentum reset$/);
  if (m) return `Pivota a ${m[1]}  -  nuevo enfrentamiento y reinicio del momentum`;

  if (plan === "Adjust your game plan based on what the opponent reveals")
    return "Ajusta tu plan de juego según lo que revele el rival";

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

export function translateStrategyTreeES(
  tree: StrategyTree,
  tm: TM,
  ta: TA,
): StrategyTree {
  return {
    root: translateNode(tree.root, tm, ta),
    archetype: translateArchetype(tree.archetype),
    winCondition: translateWinCondition(tree.winCondition, tm),
    keyThreats: tree.keyThreats,
    backupPlan: translateBackupPlan(tree.backupPlan, tm),
  };
}

// ── INSIGHTS ────────────────────────────────────────────────────────────────

function translateInsight(insight: string, tm: TM): string {
  if (insight === "Lead with Fake Out + Speed Control for maximum turn 1 pressure")
    return `Saca de salida ${tm("Fake Out")} + control de velocidad para máxima presión en el turno 1`;
  if (insight === "Lead with Fake Out user to disrupt the opponent's setup")
    return `Saca de salida un usuario de ${tm("Fake Out")} para interrumpir la preparación rival`;
  if (insight === "Prioritize setting up speed control on turn 1")
    return "Prioriza establecer el control de velocidad en el turno 1";
  if (insight === "Strong matchup  -  focus on consistent play and don't overextend")
    return "Enfrentamiento favorable  -  juega consistente y no te extiendas";
  if (insight === "Tough matchup  -  look for surprise leads or alternate game plans")
    return "Enfrentamiento difícil  -  busca salidas sorpresa o planes alternativos";

  let m: RegExpMatchArray | null;

  m = insight.match(/^Best leads: (.+) \+ (.+) \((\d+(?:\.\d+)?)% win rate over (\d+) battles\)$/);
  if (m) return `Mejores salidas: ${m[1]} + ${m[2]} (${m[3]}% de victorias en ${m[4]} combates)`;

  m = insight.match(/^Avoid leading (.+) \+ (.+) \(only (\d+(?:\.\d+)?)%\)$/);
  if (m) return `Evita sacar de salida ${m[1]} + ${m[2]} (solo ${m[3]}%)`;

  m = insight.match(/^Lead choice matters a lot here  -  (\d+(?:\.\d+)?)% gap between best and worst$/);
  if (m) return `La elección de salida es crucial aquí  -  ${m[1]}% de diferencia entre la mejor y la peor`;

  m = insight.match(/^(.+) is your MVP for this matchup \(\+(\d+(?:\.\d+)?)% win rate when brought\)$/);
  if (m) return `${m[1]} es tu MVP para este enfrentamiento (+${m[2]}% de victorias cuando lo llevas)`;

  m = insight.match(/^Consider leaving (.+) in the back vs this team \((-?\d+(?:\.\d+)?)% impact\)$/);
  if (m) return `Considera dejar a ${m[1]} en reserva contra este equipo (${m[2]}% de impacto)`;

  return insight;
}

export function translateInsightsES(insights: string[], tm: TM): string[] {
  return insights.map(i => translateInsight(i, tm));
}
