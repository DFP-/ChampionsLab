// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - STRATEGY TREE & INSIGHTS FRENCH TRANSLATION
// Post-processes English engine output into French for display.
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
    "Turn 1": "Tour 1",
    "Turn 2": "Tour 2",
    "Turn 3+": "Tour 3+",
    "Intimidate partially blocked": "Intimidation partiellement bloquée",
    "Opponent Intimidate: -1 Atk": "Intimidation adverse : -1 Atq",
    "No speed control  -  opponent moves first!": "Pas de contrôle de vitesse  -  l'adversaire joue en premier !",
    "Both attack  -  you outspeed": "Les deux attaquent  -  vous êtes plus rapide",
    "Continue offense or pivot?": "Continuer l'offensive ou pivoter ?",
  };
  if (exact[label]) return exact[label];

  let m: RegExpMatchArray | null;

  // Lead: {name} + {name}
  m = label.match(/^Lead: (.+) \+ (.+)$/);
  if (m) return `Lead : ${m[1]} + ${m[2]}`;

  // vs {name} + {name}
  m = label.match(/^vs (.+) \+ (.+)$/);
  if (m) return `vs ${m[1]} + ${m[2]}`;

  // TAILWIND: N Turns left
  m = label.match(/^TAILWIND: (\d+) Turns left$/);
  if (m) return `VENT ARRIÈRE : ${m[1]} tours restants`;

  // TRICK ROOM: N Turns left
  m = label.match(/^TRICK ROOM: (\d+) Turns left$/);
  if (m) return `DISTORSION : ${m[1]} tours restants`;

  // {WEATHER} persists ({name} slower → sets last)
  m = label.match(/^(.+) persists \((.+) slower → sets last\)$/);
  if (m) return `${m[1]} persiste (${m[2]} plus lent → active en dernier)`;

  // {WEATHER} overrides ({name} slower)
  m = label.match(/^(.+) overrides \((.+) slower\)$/);
  if (m) return `${m[1]} remplace (${m[2]} plus lent)`;

  // {NAME} TERRAIN: 5 Turns
  m = label.match(/^(.+) TERRAIN: 5 Turns$/);
  if (m) return `TERRAIN ${m[1]} : 5 tours`;

  // {WEATHER}: 5 Turns
  m = label.match(/^(.+): 5 Turns$/);
  if (m) return `${m[1]} : 5 tours`;

  // {name} threatens Fake Out → {name}
  m = label.match(/^(.+) threatens Fake Out → (.+)$/);
  if (m) return `${m[1]} menace ${tm("Fake Out")} → ${m[2]}`;

  // {name} may Fake Out {name}
  m = label.match(/^(.+) may Fake Out (.+)$/);
  if (m) return `${m[1]} peut utiliser ${tm("Fake Out")} sur ${m[2]}`;

  // {name} may set Trick Room
  m = label.match(/^(.+) may set Trick Room$/);
  if (m) return `${m[1]} peut activer ${tm("Trick Room")}`;

  // {name} gets flinched
  m = label.match(/^(.+) gets flinched$/);
  if (m) return `${m[1]} est apeuré(e)`;

  // ⚠ {name} redirects single-target attacks
  m = label.match(/^⚠ (.+) redirects single-target attacks$/);
  if (m) return `⚠ ${m[1]} redirige les attaques mono-cible`;

  // Did {name} set {move} Turn 1?
  m = label.match(/^Did (.+) set (.+) Turn 1\?$/);
  if (m) return `${m[1]} a-t-il activé ${tm(m[2])} au Tour 1 ?`;

  // Both attack under {move}
  m = label.match(/^Both attack under (.+)$/);
  if (m) return `Les deux attaquent sous ${tm(m[1])}`;

  // Double into {name|threats}
  m = label.match(/^Double into (.+)$/);
  if (m) return m[1] === "threats" ? "Double sur les menaces" : `Double sur ${m[1]}`;

  // Bring: {names}
  m = label.match(/^Bring: (.+)$/);
  if (m) return `Amener : ${m[1]}`;

  // Focus {name}
  m = label.match(/^Focus (.+)$/);
  if (m) return `Concentrer ${m[1]}`;

  // Outcome labels
  if (label.startsWith("Favorable")) return "Favorable  -  gardez le contrôle et échangez efficacement";
  if (label.startsWith("Close matchup")) return "Matchup serré  -  évitez les erreurs, protégez les pièces clés";
  if (label.startsWith("Uphill battle")) return "Combat difficile  -  KOs précoces nécessaires pour le momentum";
  if (label.startsWith("Tough matchup")) return "Matchup très dur  -  envisagez un lead différent ou une surprise";

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

  if (action === "attacks") return `${name} : attaque`;

  // {name}: {move} to finish
  if (action.endsWith(" to finish")) {
    const moveName = action.replace(" to finish", "");
    return `${name} : ${tm(moveName)} pour finir`;
  }

  // {name}: Protect · Switch {rest}
  const protectSwitch = action.match(/^Protect · Switch (.+)$/);
  if (protectSwitch) return `${name} : ${tm("Protect")} · Switch ${protectSwitch[1]}`;

  // {name}: {move}? (optional setup)
  if (action.endsWith("?")) {
    const moveName = action.slice(0, -1);
    return `${name} : ${tm(moveName)} ?`;
  }

  // {name}: {move} → both foes
  if (action.endsWith(" → both foes")) {
    const moveName = action.replace(" → both foes", "");
    return `${name} : ${tm(moveName)} → les deux adversaires`;
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
  if (note === "No entry effects") return "Pas d'effets d'entrée";
  if (note === "Intimidate on entry") return "Intimidation à l'entrée";
  const terrainM = note.match(/^Sets (.+) terrain$/);
  if (terrainM) return `Active le terrain ${terrainM[1]}`;
  const weatherM = note.match(/^Sets (.+)$/);
  if (weatherM) return `Active ${weatherM[1]}`;
  return note;
}

function translateReason(reason: string): string {
  switch (reason) {
    case "block setup": return "bloquer le set-up";
    case "remove redirection": return "supprimer la redirection";
    case "biggest threat": return "menace principale";
    default: return reason;
  }
}

function translateDetail(detail: string | undefined, tm: TM, ta: TA): string | undefined {
  if (!detail) return undefined;

  // ── EXACT MATCHES (no interpolation needed) ──
  const exact: Record<string, string> = {
    "Most likely lead": "Lead le plus probable",
    "Alternative lead": "Lead alternatif",
    "Possible lead": "Lead possible",
    "Boosts your moves": "Booste vos attaques",
    "Boosts opponent's moves": "Booste les attaques adverses",
    "Maintain tempo": "Maintenez le tempo",
    "Contest speed advantage": "Contestez l'avantage de vitesse",
    "Close out the game": "Conclure le match",
    "Full offense": "Offensive totale",
    "Double your side's speed for 4 turns": "Double la vitesse de votre camp pendant 4 tours",
    "Reverse speed for 5 turns  -  your slow mons move first": "Inverse la vitesse pendant 5 tours  -  vos Pokémon lents agissent d'abord",
    "Redirect attacks to protect partner": "Redirige les attaques pour protéger le partenaire",
    "Boost while partner covers": "Booste pendant que le partenaire couvre",
    "Draw all single-target attacks  -  protect partner": "Attire toutes les attaques mono-cible  -  protège le partenaire",
    "Safely boost while partner redirects": "Booste en sécurité pendant que le partenaire redirige",
    "Your side doubles speed for 4 turns total": "Votre camp double sa vitesse pendant 4 tours au total",
    "Slower Pokémon move first": "Les Pokémon les plus lents agissent d'abord",
    "Double speed for 4 turns": "Double la vitesse pendant 4 tours",
    "Reverse speed for 5 turns": "Inverse la vitesse pendant 5 tours",
    "KO the TR setter before it moves (-7 priority)": "KO le poseur de Distorsion avant qu'il agisse (priorité -7)",
    "Stall a turn and bring in a better matchup": "Gagner un tour et amener un meilleur matchup",
    "Under speed control, consider boosting for a sweep": "Sous contrôle de vitesse, envisagez de booster pour un sweep",
    "Cover while partner sets up": "Couvrir pendant que le partenaire prépare",
    "Set speed after turn 1 disruption": "Contrôle de vitesse après la perturbation du tour 1",
    "Continue pressing advantage": "Continuer à presser l'avantage",
    "Depends on which Turn 1 branch was taken": "Dépend du choix au Tour 1",
    "Delayed from Turn 1  -  set up now": "Reporté du Tour 1  -  prépare maintenant",
  };
  if (exact[detail]) return exact[detail];

  // ── EXACT MATCHES REQUIRING tm/ta ──
  if (detail === "Counters Tailwind by reversing speed") return `Contre ${tm("Tailwind")} en inversant la vitesse`;
  if (detail === "Consider bringing a Tailwind/Trick Room user or Protect to survive turn 1") return `Envisagez ${tm("Tailwind")}/${tm("Trick Room")} ou ${tm("Protect")} pour survivre au tour 1`;
  if (detail === "Depends on whether opponent Faked Out") return `Dépend si l'adversaire a utilisé ${tm("Fake Out")}`;
  if (detail === "Tailwind active  -  you outspeed") return `${tm("Tailwind")} actif  -  vous êtes plus rapide`;
  if (detail === "Trick Room active  -  slowest moves first") return `${tm("Trick Room")} actif  -  les plus lents agissent d'abord`;

  let m: RegExpMatchArray | null;

  // ── REGEX PATTERNS ──

  // Win Rate · field notes
  m = detail.match(/^(\d+)% Win Rate · (.+)$/);
  if (m) {
    const notes = m[2].split(" · ").map(translateFieldNote).join(" · ");
    return `Taux de victoire : ${m[1]}% · ${notes}`;
  }

  // Speed order
  m = detail.match(/^Speed order: (.+)$/);
  if (m) return `Ordre de vitesse : ${m[1]}`;

  // Weather details
  m = detail.match(/^Your (.+) is active  -  5 turns$/);
  if (m) return `Votre ${m[1]} est actif  -  5 tours`;

  m = detail.match(/^Opponent's (.+) is active\. Consider manual weather reset\.$/);
  if (m) return `Le ${m[1]} adverse est actif. Envisagez un reset manuel de la météo.`;

  m = detail.match(/^Set by (.+) on entry$/);
  if (m) return `Activé par ${m[1]} à l'entrée`;

  // Intimidate
  m = detail.match(/^(.+)'s (.+) blocks Intimidate$/);
  if (m) return `${ta(m[2])} de ${m[1]} bloque Intimidation`;

  m = detail.match(/^(.+) lowers your physical damage$/);
  if (m) return `${m[1]} réduit vos dégâts physiques`;

  // Fake Out details
  m = detail.match(/^May block your (.+)  -  choose your play$/);
  if (m) return `Peut bloquer votre ${tm(m[1])}  -  choisissez votre jeu`;

  m = detail.match(/^Flinch to (.+)  -  partner sets up freely$/);
  if (m) return `Apeurer pour ${translateReason(m[1])}  -  le partenaire prépare librement`;

  m = detail.match(/^Flinch to (.+) \(priority \+3, always goes first\)$/);
  if (m) return `Apeurer pour ${translateReason(m[1])} (priorité +3, toujours premier)`;

  m = detail.match(/^Partner Protects to block Fake Out  -  (.+) delayed to Turn 2$/);
  if (m) return `Le partenaire se Protège contre ${tm("Fake Out")}  -  ${tm(m[1])} repoussé au Tour 2`;

  m = detail.match(/^Block opponent's Fake Out  -  set up (.+) next turn$/);
  if (m) return `Bloque le ${tm("Fake Out")} adverse  -  ${tm(m[1])} au tour suivant`;

  m = detail.match(/^No Protect  -  (.+) delayed to Turn 2\. (.+) still flinches (.+)\.$/);
  if (m) return `Pas d'${tm("Protect")}  -  ${tm(m[1])} repoussé au Tour 2. ${m[2]} apeurer toujours ${m[3]}.`;

  m = detail.match(/^Threatens to block your (.+)$/);
  if (m) return `Menace de bloquer votre ${tm(m[1])}`;

  m = detail.match(/^Block Fake Out  -  set (.+) Turn 2$/);
  if (m) return `Bloque ${tm("Fake Out")}  -  ${tm(m[1])} au Tour 2`;

  m = detail.match(/^(.+) delayed to Turn 2$/);
  if (m) return `${tm(m[1])} repoussé au Tour 2`;

  m = detail.match(/^Ignore TR threat  -  deal maximum damage\. Counter-TR later if needed\.$/);
  if (m) return "Ignorer la menace Distorsion  -  dégâts max. Contrer plus tard si nécessaire.";

  // Turn 2 post-Fake Out
  m = detail.match(/^Fake Out used  -  switch to offense$/);
  if (m) return `${tm("Fake Out")} utilisé  -  passer à l'offensive`;

  m = detail.match(/^You outspeed  -  full offense$/);
  if (m) return "Vous êtes plus rapide  -  offensive totale";

  m = detail.match(/^Press advantage under (.+)$/);
  if (m) return `Presser l'avantage sous ${tm(m[1])}`;

  // Endgame
  m = detail.match(/^(.+) has best coverage vs opponent's remaining team$/);
  if (m) return `${m[1]} a la meilleure couverture contre le reste de l'équipe adverse`;

  m = detail.match(/^Priority \+(\d+)  -  pick off weakened targets$/);
  if (m) return `Priorité +${m[1]}  -  achever les cibles affaiblies`;

  // Compound attack detail: "{name}: {move} + {name}: {move}"
  m = detail.match(/^(.+): (.+) \+ (.+): (.+)$/);
  if (m) {
    const m1 = m[2] === "attacks" ? "attaque" : tm(m[2]);
    const m2 = m[4] === "attacks" ? "attaque" : tm(m[4]);
    return `${m[1]} : ${m1} + ${m[3]} : ${m2}`;
  }

  // ── SUBSTRING REPLACEMENTS for composite details ──
  let result = detail;
  result = result.replace("Super effective! ", "Super efficace ! ");
  result = result.replace("Focus fire! ", "Tir concentré ! ");
  result = result.replace("Free to attack while partner absorbs hits", "Libre d'attaquer pendant que le partenaire encaisse");
  result = result.replace(/(\d+) BP (.+)-type$/, "$1 PC type $2");
  result = result.replace(/(\d+) BP$/, "$1 PC");
  return result;
}

// ── BRANCH LABEL TRANSLATION ────────────────────────────────────────────────

function translateBranchLabel(label: string | undefined, tm: TM): string | undefined {
  if (!label) return undefined;

  const exact: Record<string, string> = {
    "Scenario 1": "Scénario 1",
    "Scenario 2": "Scénario 2",
    "Scenario 3": "Scénario 3",
    "Read no Fake Out": "Pas de Fake Out",
    "Protect": tm("Protect"),
    "No Protect": `Pas de ${tm("Protect")}`,
    "Prevent TR": "Empêcher Distorsion",
    "Press damage": "Dégâts max",
    "Setup went up": "Le setup est monté",
    "Setup delayed": "Setup reporté",
    "Offense": "Offensive",
    "Pivot": "Pivot",
    "Setup": "Setup",
    "Aggro": "Agressif",
    "We outspeed": "On outspeed",
    "If we outspeed": "Si on outspeed",
    "They outspeed": "Ils outspeed",
    "If they outspeed": "Si ils outspeed",
  };
  if (exact[label]) return exact[label];

  // {move} goes up
  const m = label.match(/^(.+) goes up$/);
  if (m) return `${tm(m[1])} est actif`;

  return label;
}

// ── ARCHETYPE TRANSLATION ───────────────────────────────────────────────────

function translateArchetype(archetype: string): string {
  const translations: Record<string, string> = {
    "Rain team with Drizzle setter and Swift Swim sweepers for speed dominance.":
      "Équipe pluie avec poseur de Crachin et sweepers Glissade pour dominer en vitesse.",
    "Sun team with Drought setter and Chlorophyll sweepers for offensive pressure.":
      "Équipe soleil avec poseur de Sécheresse et sweepers Chlorophylle pour la pression offensive.",
    "Sand team with Sand Stream and physical attackers boosted by sandstorm.":
      "Équipe sable avec Sable Volant et attaquants physiques boostés par la tempête.",
    "Dedicated Trick Room with multiple setters and slow powerhouses.":
      "Distorsion dédiée avec plusieurs poseurs et Pokémon lents et puissants.",
    "Trick Room mode available with slow attackers to abuse reversed speed.":
      "Mode Distorsion disponible avec des attaquants lents pour exploiter la vitesse inversée.",
    "Flexible team with Trick Room as an option for specific matchups.":
      "Équipe flexible avec Distorsion en option pour certains matchups.",
    "Tailwind-based speed control to let moderate-speed attackers outpace threats.":
      "Contrôle de vitesse basé sur Vent Arrière pour surpasser les menaces.",
    "All-out offense with fast, powerful attackers and minimal defensive play.":
      "Offensive totale avec des attaquants rapides et puissants, peu de défense.",
    "Balanced team with offensive, defensive, and support options.":
      "Équipe équilibrée avec des options offensives, défensives et de support.",
    "Collection of individually strong Pokémon with general type synergy.":
      "Collection de Pokémon individuellement forts avec synergie de types.",
  };
  if (translations[archetype]) return translations[archetype];

  // Fallback: "{archetype} team"
  const m = archetype.match(/^(.+) team$/);
  if (m) {
    const archetypeTranslations: Record<string, string> = {
      rain: "pluie", sun: "soleil", sand: "sable",
      "trick-room": "Distorsion", "hard-trick-room": "full Distorsion",
      tailwind: "Vent Arrière", "hyper-offense": "hyper offensive",
      balance: "équilibrée", goodstuffs: "goodstuffs",
    };
    const t = archetypeTranslations[m[1]] ?? m[1];
    return `équipe ${t}`;
  }

  return archetype;
}

// ── WIN CONDITION TRANSLATION ───────────────────────────────────────────────

function translateWinCondition(wc: string, tm: TM): string {
  const exact: Record<string, string> = {
    "Dominate with rain-boosted Water moves + Swift Swim speed":
      "Dominer avec les attaques Eau boostées par la pluie + vitesse Glissade",
    "Overwhelm with sun-boosted Fire moves + Chlorophyll speed":
      "Submerger avec les attaques Feu boostées par le soleil + vitesse Chlorophylle",
    "Chip with sandstorm + Sand Rush physical sweeping":
      "User avec tempête de sable + Baigne Sable offensif",
    "Maximum turn 1 pressure  -  KO before they set up":
      "Pression max au tour 1  -  KO avant qu'ils ne se préparent",
    "Set up safely then sweep  -  protect your booster":
      "Set-up en sécurité puis sweep  -  protégez votre booster",
    "Disrupt turn 1, establish board control, then overwhelm":
      "Perturber au tour 1, prendre le contrôle, puis submerger",
    "Trade favorably and maintain board advantage":
      "Échangez favorablement et maintenez l'avantage",
  };
  if (exact[wc]) return exact[wc];

  if (wc === "Set Trick Room and let slow powerhouses sweep")
    return `Activer ${tm("Trick Room")} et laisser les powerhouses lents sweeper`;
  if (wc === "Set Tailwind early and outpace with strong attacks")
    return `Activer ${tm("Tailwind")} tôt et surpasser avec des attaques puissantes`;

  let m: RegExpMatchArray | null;

  m = wc.match(/^Control the game under (.+)  -  leverage weather-boosted attacks$/);
  if (m) return `Contrôlez le jeu sous ${m[1]}  -  exploitez les attaques boostées par la météo`;

  m = wc.match(/^Capitalize on (.+) terrain  -  position to maximize its boost$/);
  if (m) return `Capitalisez sur le terrain ${m[1]}  -  positionnez-vous pour maximiser son boost`;

  return wc;
}

// ── BACKUP PLAN TRANSLATION ─────────────────────────────────────────────────

function translateBackupPlan(plan: string, tm: TM): string {
  let m: RegExpMatchArray | null;

  m = plan.match(/^If losing speed war, pivot to (.+) for Trick Room mode$/);
  if (m) return `Si vous perdez la guerre de vitesse, pivotez vers ${m[1]} pour le mode ${tm("Trick Room")}`;

  m = plan.match(/^Switch to (.+) to reset weather in your favor$/);
  if (m) return `Switch vers ${m[1]} pour rétablir la météo en votre faveur`;

  m = plan.match(/^Cycle (.+) for repeated Intimidate to weaken physical attackers$/);
  if (m) return `Cyclez ${m[1]} pour Intimidation répétée contre les attaquants physiques`;

  m = plan.match(/^Pivot to (.+)  -  fresh matchup and momentum reset$/);
  if (m) return `Pivot vers ${m[1]}  -  nouveau matchup et reset du momentum`;

  if (plan === "Adjust your game plan based on what the opponent reveals")
    return "Ajustez votre plan de jeu en fonction de ce que révèle l'adversaire";

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

export function translateStrategyTree(
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
    return `Leadez avec ${tm("Fake Out")} + contrôle de vitesse pour une pression max au tour 1`;
  if (insight === "Lead with Fake Out user to disrupt the opponent's setup")
    return `Leadez avec un utilisateur de ${tm("Fake Out")} pour perturber le set-up adverse`;
  if (insight === "Prioritize setting up speed control on turn 1")
    return "Priorisez le contrôle de vitesse au tour 1";
  if (insight === "Strong matchup  -  focus on consistent play and don't overextend")
    return "Matchup favorable  -  jouez de manière constante sans surjouer";
  if (insight === "Tough matchup  -  look for surprise leads or alternate game plans")
    return "Matchup difficile  -  cherchez des leads surprises ou des plans alternatifs";

  let m: RegExpMatchArray | null;

  // Best leads: {name1} + {name2} ({n}% win rate over {n} battles)
  m = insight.match(/^Best leads: (.+) \+ (.+) \((\d+(?:\.\d+)?)% win rate over (\d+) battles\)$/);
  if (m) return `Meilleurs leads : ${m[1]} + ${m[2]} (${m[3]}% de victoires sur ${m[4]} combats)`;

  // Avoid leading {name1} + {name2} (only {n}%)
  m = insight.match(/^Avoid leading (.+) \+ (.+) \(only (\d+(?:\.\d+)?)%\)$/);
  if (m) return `Évitez de lead ${m[1]} + ${m[2]} (seulement ${m[3]}%)`;

  // Lead choice matters a lot here  -  {n}% gap between best and worst
  m = insight.match(/^Lead choice matters a lot here  -  (\d+(?:\.\d+)?)% gap between best and worst$/);
  if (m) return `Le choix du lead est crucial  -  ${m[1]}% d'écart entre le meilleur et le pire`;

  // {name} is your MVP for this matchup (+{n}% win rate when brought)
  m = insight.match(/^(.+) is your MVP for this matchup \(\+(\d+(?:\.\d+)?)% win rate when brought\)$/);
  if (m) return `${m[1]} est votre MVP pour ce matchup (+${m[2]}% de victoires quand amené)`;

  // Consider leaving {name} in the back vs this team ({n}% impact)
  m = insight.match(/^Consider leaving (.+) in the back vs this team \((-?\d+(?:\.\d+)?)% impact\)$/);
  if (m) return `Envisagez de laisser ${m[1]} en back contre cette équipe (${m[2]}% d'impact)`;

  return insight;
}

export function translateInsights(insights: string[], tm: TM): string[] {
  return insights.map(i => translateInsight(i, tm));
}
