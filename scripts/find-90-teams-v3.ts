/**
 * Find 90%+ teams using only competitively viable Pokémon (S/A/B tier).
 * No Ariados allowed.
 * 
 * Run: npx tsx scripts/find-90-teams-v3.ts
 */

import { POKEMON_SEED } from "../src/lib/pokemon-data";
import { analyzeTeamSynergy } from "../src/lib/engine/synergy";
import type { ChampionsPokemon } from "../src/lib/types";

// Only use S, A, B tier mons (competitive viable)
const roster = POKEMON_SEED.filter(p => !p.hidden && (p.tier === "S" || p.tier === "A" || p.tier === "B"));
console.log(`Viable roster: ${roster.length} Pokémon (S/A/B tier only)`);
console.log(`  S: ${roster.filter(p => p.tier === "S").length}, A: ${roster.filter(p => p.tier === "A").length}, B: ${roster.filter(p => p.tier === "B").length}`);

const byName = (name: string) => roster.find(p => p.name === name);

// Categorize by role
const intimidators = roster.filter(p => p.abilities.some(a => a.name === "Intimidate"));
const redirectors = roster.filter(p => p.moves.some(m => m.name === "Follow Me" || m.name === "Rage Powder"));
const tailwinders = roster.filter(p => p.moves.some(m => m.name === "Tailwind"));
const trSetters = roster.filter(p => p.moves.some(m => m.name === "Trick Room"));
const fakeOuters = roster.filter(p => p.moves.some(m => m.name === "Fake Out"));
const priorityUsers = roster.filter(p => p.moves.some(m => 
  ["Extreme Speed", "Aqua Jet", "Mach Punch", "Bullet Punch", "Ice Shard", "Shadow Sneak", "Sucker Punch", "Quick Attack", "Accelerock", "Grassy Glide"].includes(m.name)
));
const drizzlers = roster.filter(p => p.abilities.some(a => a.name === "Drizzle"));
const droughters = roster.filter(p => p.abilities.some(a => a.name === "Drought"));
const sandStreamers = roster.filter(p => p.abilities.some(a => a.name === "Sand Stream"));
const swiftSwimmers = roster.filter(p => p.abilities.some(a => a.name === "Swift Swim"));
const chlorophyllers = roster.filter(p => p.abilities.some(a => a.name === "Chlorophyll"));
const sandRushers = roster.filter(p => p.abilities.some(a => a.name === "Sand Rush" || a.name === "Sand Force"));

console.log(`\nRole counts:`);
console.log(`  Intimidate: ${intimidators.map(p=>p.name).join(", ")}`);
console.log(`  Redirectors: ${redirectors.map(p=>p.name).join(", ")}`);
console.log(`  Tailwind: ${tailwinders.map(p=>p.name).join(", ")}`);
console.log(`  Trick Room: ${trSetters.map(p=>p.name).join(", ")}`);
console.log(`  Fake Out: ${fakeOuters.map(p=>p.name).join(", ")}`);
console.log(`  Priority: ${priorityUsers.map(p=>p.name).join(", ")}`);
console.log(`  Drizzle: ${drizzlers.map(p=>p.name).join(", ")}`);
console.log(`  Drought: ${droughters.map(p=>p.name).join(", ")}`);
console.log(`  Sand Stream: ${sandStreamers.map(p=>p.name).join(", ")}`);

function greedyPick(team: ChampionsPokemon[]): ChampionsPokemon | null {
  let best: ChampionsPokemon | null = null;
  let bestScore = -1;
  const teamIds = new Set(team.map(p => p.id));
  for (const c of roster) {
    if (teamIds.has(c.id)) continue;
    const s = analyzeTeamSynergy([...team, c]);
    if (s.overallScore > bestScore) {
      bestScore = s.overallScore;
      best = c;
    }
  }
  return best;
}

function buildTeam(core: ChampionsPokemon[]): { team: ChampionsPokemon[]; synergy: ReturnType<typeof analyzeTeamSynergy> } {
  const team = [...core];
  while (team.length < 6) {
    const pick = greedyPick(team);
    if (!pick) break;
    team.push(pick);
  }
  return { team, synergy: analyzeTeamSynergy(team) };
}

// ── Generate many 2-mon and 3-mon cores from competitive mons ──
interface Core { pokemon: ChampionsPokemon[] }
const cores: Core[] = [];

// All weather cores
for (const setter of drizzlers) {
  for (const abuser of swiftSwimmers) {
    if (setter.id !== abuser.id) cores.push({ pokemon: [setter, abuser] });
  }
}
for (const setter of droughters) {
  for (const abuser of chlorophyllers) {
    if (setter.id !== abuser.id) cores.push({ pokemon: [setter, abuser] });
  }
}
for (const setter of sandStreamers) {
  for (const abuser of sandRushers) {
    if (setter.id !== abuser.id) cores.push({ pokemon: [setter, abuser] });
  }
}

// Intimidate + Redirector
for (const intim of intimidators) {
  for (const redir of redirectors) {
    if (intim.id !== redir.id) cores.push({ pokemon: [intim, redir] });
  }
}

// Intimidate + Tailwind
for (const intim of intimidators) {
  for (const tw of tailwinders) {
    if (intim.id !== tw.id) cores.push({ pokemon: [intim, tw] });
  }
}

// TR setter + Intimidator
for (const tr of trSetters) {
  for (const intim of intimidators) {
    if (tr.id !== intim.id) cores.push({ pokemon: [tr, intim] });
  }
}

// TR + slow powerhouse (speed <= 60, ATK or SPA >= 90)
const slowPower = roster.filter(p => p.baseStats.speed <= 60 && Math.max(p.baseStats.attack, p.baseStats.spAtk) >= 90);
for (const tr of trSetters) {
  for (const slow of slowPower) {
    if (tr.id !== slow.id) cores.push({ pokemon: [tr, slow] });
  }
}

// Tailwind + fast attacker
const fastAttackers = roster.filter(p => p.baseStats.speed >= 95 && Math.max(p.baseStats.attack, p.baseStats.spAtk) >= 90);
for (const tw of tailwinders) {
  for (const fa of fastAttackers) {
    if (tw.id !== fa.id) cores.push({ pokemon: [tw, fa] });
  }
}

// Triple cores: weather + intim
for (const setter of [...drizzlers, ...droughters, ...sandStreamers]) {
  const abusers = setter.abilities.some(a => a.name === "Drizzle") ? swiftSwimmers
    : setter.abilities.some(a => a.name === "Drought") ? chlorophyllers
    : sandRushers;
  for (const abuser of abusers) {
    if (setter.id === abuser.id) continue;
    for (const intim of intimidators) {
      if (intim.id === setter.id || intim.id === abuser.id) continue;
      cores.push({ pokemon: [setter, abuser, intim] });
    }
  }
}

// Triple: Intim + Redirect + Sweeper (top 15 by BST)
const topSweepers = [...roster]
  .filter(p => Math.max(p.baseStats.attack, p.baseStats.spAtk) >= 100)
  .sort((a, b) => {
    const bstA = Object.values(a.baseStats).reduce((x,y)=>x+y,0);
    const bstB = Object.values(b.baseStats).reduce((x,y)=>x+y,0);
    return bstB - bstA;
  }).slice(0, 15);

for (const intim of intimidators) {
  for (const redir of redirectors) {
    if (intim.id === redir.id) continue;
    for (const sweep of topSweepers) {
      if (sweep.id === intim.id || sweep.id === redir.id) continue;
      cores.push({ pokemon: [intim, redir, sweep] });
    }
  }
}

// Triple: TR + Intim + Redirector
for (const tr of trSetters) {
  for (const intim of intimidators) {
    if (tr.id === intim.id) continue;
    for (const redir of redirectors) {
      if (redir.id === tr.id || redir.id === intim.id) continue;
      cores.push({ pokemon: [tr, intim, redir] });
    }
  }
}

// Deduplicate cores
const coreKeys = new Set<string>();
const uniqueCores: Core[] = [];
for (const c of cores) {
  const key = [...c.pokemon.map(p=>p.id)].sort().join(",");
  if (!coreKeys.has(key)) { coreKeys.add(key); uniqueCores.push(c); }
}

console.log(`\n🔍 Testing ${uniqueCores.length} cores (S/A/B tier only)...\n`);

interface Result { names: string[]; ids: number[]; overall: number; type: number; speed: number; role: number; arch: number; archName: string; tiers: string[] }
const results: Result[] = [];

for (let i = 0; i < uniqueCores.length; i++) {
  const { team, synergy } = buildTeam(uniqueCores[i].pokemon);
  if (synergy.overallScore >= 85) {
    results.push({
      names: team.map(p => p.name),
      ids: team.map(p => p.id),
      overall: synergy.overallScore,
      type: synergy.typeScore,
      speed: synergy.speedScore,
      role: synergy.roleScore,
      arch: synergy.archetypeScore,
      archName: synergy.detectedArchetypes[0]?.archetype ?? "none",
      tiers: team.map(p => p.tier ?? "?"),
    });
  }
  if ((i + 1) % 200 === 0) process.stdout.write(`  ${i + 1}/${uniqueCores.length} cores...\r`);
}

// Now for every 88%+ result, try swapping each member
console.log(`\n🔄 Optimizing ${results.filter(r=>r.overall>=88).length} top results with swaps...\n`);
const topResults = results.filter(r => r.overall >= 88);
for (const r of topResults) {
  const baseTeam = r.ids.map(id => roster.find(p => p.id === id)!).filter(Boolean);
  if (baseTeam.length !== 6) continue;
  for (let slot = 0; slot < 6; slot++) {
    for (const candidate of roster) {
      if (baseTeam.some(p => p.id === candidate.id)) continue;
      const newTeam = [...baseTeam];
      newTeam[slot] = candidate;
      const syn = analyzeTeamSynergy(newTeam);
      if (syn.overallScore >= 88) {
        results.push({
          names: newTeam.map(p => p.name),
          ids: newTeam.map(p => p.id),
          overall: syn.overallScore,
          type: syn.typeScore, speed: syn.speedScore, role: syn.roleScore, arch: syn.archetypeScore,
          archName: syn.detectedArchetypes[0]?.archetype ?? "none",
          tiers: newTeam.map(p => p.tier ?? "?"),
        });
      }
    }
  }
}

// Sort, dedup, show
results.sort((a, b) => b.overall - a.overall);
const seen = new Set<string>();
const unique: Result[] = [];
for (const r of results) {
  const key = [...r.ids].sort().join(",");
  if (!seen.has(key)) { seen.add(key); unique.push(r); }
}

console.log(`\n═══════════════════════════════════════════════════════`);
console.log(`  TOP TEAMS — S/A/B TIER ONLY (${unique.filter(r => r.overall >= 90).length} at 90%+)`);
console.log(`═══════════════════════════════════════════════════════\n`);

for (const r of unique.slice(0, 40)) {
  const emoji = r.overall >= 90 ? "🏆" : r.overall >= 88 ? "⭐" : "📊";
  console.log(`${emoji} ${r.overall}% — ${r.names.map((n,i) => `${n}(${r.tiers[i]})`).join(" / ")}`);
  console.log(`   Type: ${r.type} | Speed: ${r.speed} | Role: ${r.role} | Arch: ${r.arch} (${r.archName})`);
  console.log();
}
