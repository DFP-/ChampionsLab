/**
 * Greedy search for teams scoring 90%+ in the Team Builder analysis.
 * 
 * Strategy: start from known-strong "anchor" cores (weather setters + abusers,
 * Intimidate + Fake Out support, etc.), then greedily add the mon that 
 * maximizes overallScore at each step. Try many anchor combos.
 * 
 * Run: npx tsx scripts/find-90-teams.ts
 */

import { POKEMON_SEED } from "../src/lib/pokemon-data";
import { analyzeTeamSynergy } from "../src/lib/engine/synergy";
import type { ChampionsPokemon } from "../src/lib/types";

const roster = POKEMON_SEED.filter(p => !p.hidden);

// Helper: score a team
function score(team: ChampionsPokemon[]) {
  const s = analyzeTeamSynergy(team);
  return { overall: s.overallScore, type: s.typeScore, speed: s.speedScore, role: s.roleScore, arch: s.archetypeScore, archName: s.detectedArchetypes[0]?.archetype ?? "none" };
}

// Greedy: given a partial team, pick the next mon that maximizes overallScore
function greedyPick(team: ChampionsPokemon[], candidates: ChampionsPokemon[]): ChampionsPokemon | null {
  let best: ChampionsPokemon | null = null;
  let bestScore = -1;
  const teamIds = new Set(team.map(p => p.id));
  for (const c of candidates) {
    if (teamIds.has(c.id)) continue;
    const s = analyzeTeamSynergy([...team, c]);
    if (s.overallScore > bestScore) {
      bestScore = s.overallScore;
      best = c;
    }
  }
  return best;
}

// Build a full 6-mon team greedily from a starting core
function buildTeam(core: ChampionsPokemon[]): ChampionsPokemon[] {
  const team = [...core];
  while (team.length < 6) {
    const pick = greedyPick(team, roster);
    if (!pick) break;
    team.push(pick);
  }
  return team;
}

// ── Identify anchor Pokémon by role ──
const byName = (name: string) => roster.find(p => p.name === name);

// Weather setters
const drizzlers = roster.filter(p => p.abilities.some(a => a.name === "Drizzle"));
const droughters = roster.filter(p => p.abilities.some(a => a.name === "Drought"));
const sandStreamers = roster.filter(p => p.abilities.some(a => a.name === "Sand Stream"));
// Weather abusers
const swiftSwimmers = roster.filter(p => p.abilities.some(a => a.name === "Swift Swim"));
const chlorophyllers = roster.filter(p => p.abilities.some(a => a.name === "Chlorophyll"));
const sandRushers = roster.filter(p => p.abilities.some(a => a.name === "Sand Rush" || a.name === "Sand Force"));
// Intimidate
const intimidators = roster.filter(p => p.abilities.some(a => a.name === "Intimidate"));
// Fake Out / Support
const fakeOuters = roster.filter(p => p.moves.some(m => m.name === "Fake Out"));
// Tailwind
const tailwinders = roster.filter(p => p.moves.some(m => m.name === "Tailwind"));
// Trick Room
const trSetters = roster.filter(p => p.moves.some(m => m.name === "Trick Room"));
// Redirectors
const redirectors = roster.filter(p => p.moves.some(m => m.name === "Follow Me" || m.name === "Rage Powder"));
// Priority users  
const priorityUsers = roster.filter(p => p.moves.some(m => {
  const n = m.name;
  return ["Extreme Speed", "Aqua Jet", "Mach Punch", "Bullet Punch", "Ice Shard", "Shadow Sneak", "Sucker Punch", "Quick Attack", "Accelerock"].includes(n);
}));

// ── Generate starting cores to explore ──
interface Core { name: string; pokemon: ChampionsPokemon[] }
const cores: Core[] = [];

// Rain cores
for (const setter of drizzlers) {
  for (const abuser of swiftSwimmers) {
    if (setter.id !== abuser.id) {
      cores.push({ name: `Rain: ${setter.name} + ${abuser.name}`, pokemon: [setter, abuser] });
    }
  }
}

// Sun cores
for (const setter of droughters) {
  for (const abuser of chlorophyllers) {
    if (setter.id !== abuser.id) {
      cores.push({ name: `Sun: ${setter.name} + ${abuser.name}`, pokemon: [setter, abuser] });
    }
  }
}

// Sand cores
for (const setter of sandStreamers) {
  for (const abuser of sandRushers) {
    if (setter.id !== abuser.id) {
      cores.push({ name: `Sand: ${setter.name} + ${abuser.name}`, pokemon: [setter, abuser] });
    }
  }
}

// Trick Room cores (setter + slow attacker)
const slowPowerhouses = roster.filter(p => p.baseStats.speed <= 55 && Math.max(p.baseStats.attack, p.baseStats.spAtk) >= 90);
for (const setter of trSetters.slice(0, 8)) {
  for (const abuser of slowPowerhouses.slice(0, 8)) {
    if (setter.id !== abuser.id) {
      cores.push({ name: `TR: ${setter.name} + ${abuser.name}`, pokemon: [setter, abuser] });
    }
  }
}

// Tailwind cores (tailwind + fast attacker)
const fastAttackers = roster.filter(p => p.baseStats.speed >= 100 && Math.max(p.baseStats.attack, p.baseStats.spAtk) >= 90);
for (const tw of tailwinders.slice(0, 8)) {
  for (const fa of fastAttackers.slice(0, 8)) {
    if (tw.id !== fa.id) {
      cores.push({ name: `TW: ${tw.name} + ${fa.name}`, pokemon: [tw, fa] });
    }
  }
}

// Intimidate + Redirect cores
for (const intim of intimidators.slice(0, 5)) {
  for (const redir of redirectors.slice(0, 5)) {
    if (intim.id !== redir.id) {
      cores.push({ name: `Support: ${intim.name} + ${redir.name}`, pokemon: [intim, redir] });
    }
  }
}

// Specific strong VGC cores
const specificCores: string[][] = [
  ["Incineroar", "Rillaboom"],
  ["Incineroar", "Tornadus"],
  ["Incineroar", "Amoonguss"],
  ["Pelipper", "Barraskewda"],
  ["Pelipper", "Ludicolo"],
  ["Torkoal", "Venusaur"],
  ["Tyranitar", "Excadrill"],
  ["Hippowdon", "Excadrill"],
];
for (const [a, b] of specificCores) {
  const pa = byName(a);
  const pb = byName(b);
  if (pa && pb) cores.push({ name: `${a} + ${b}`, pokemon: [pa, pb] });
}

console.log(`\n🔍 Testing ${cores.length} starting cores against ${roster.length} Pokémon...\n`);

// ── Run greedy builds ──
interface Result { names: string[]; ids: number[]; scores: ReturnType<typeof score>; coreName: string }
const results: Result[] = [];

for (let i = 0; i < cores.length; i++) {
  const core = cores[i];
  const team = buildTeam(core.pokemon);
  const s = score(team);
  results.push({
    names: team.map(p => p.name),
    ids: team.map(p => p.id),
    scores: s,
    coreName: core.name,
  });
  if ((i + 1) % 50 === 0) process.stdout.write(`  ${i + 1}/${cores.length} cores tested...\r`);
}

// Sort and show top results
results.sort((a, b) => b.scores.overall - a.scores.overall);

// Deduplicate (same 6 mons regardless of order)
const seen = new Set<string>();
const unique: Result[] = [];
for (const r of results) {
  const key = [...r.ids].sort().join(",");
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(r);
  }
}

console.log(`\n\n═══════════════════════════════════════════════════════`);
console.log(`  TOP TEAMS (${unique.filter(r => r.scores.overall >= 90).length} scoring 90%+)`);
console.log(`═══════════════════════════════════════════════════════\n`);

for (const r of unique.slice(0, 30)) {
  const s = r.scores;
  const emoji = s.overall >= 90 ? "🏆" : s.overall >= 85 ? "⭐" : "📊";
  console.log(`${emoji} ${s.overall}% — ${r.names.join(" / ")}`);
  console.log(`   Type: ${s.type} | Speed: ${s.speed} | Role: ${s.role} | Arch: ${s.arch} (${s.archName})`);
  console.log(`   Core: ${r.coreName}`);
  console.log(`   IDs: [${r.ids.join(", ")}]`);
  console.log();
}

if (unique.filter(r => r.scores.overall >= 90).length === 0) {
  console.log(`\nNo teams reached 90%. Highest: ${unique[0]?.scores.overall}%`);
  console.log(`\nTop 5 for reference:`);
  for (const r of unique.slice(0, 5)) {
    console.log(`  ${r.scores.overall}% — ${r.names.join(" / ")}`);
  }
}
