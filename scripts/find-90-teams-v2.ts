/**
 * Phase 2: Try 3-mon cores + smarter type-aware selection to push past 90%.
 * Run: npx tsx scripts/find-90-teams-v2.ts
 */

import { POKEMON_SEED } from "../src/lib/pokemon-data";
import { analyzeTeamSynergy } from "../src/lib/engine/synergy";
import type { ChampionsPokemon } from "../src/lib/types";

const roster = POKEMON_SEED.filter(p => !p.hidden);
const byName = (name: string) => roster.find(p => p.name === name)!;

function score(team: ChampionsPokemon[]) {
  const s = analyzeTeamSynergy(team);
  return s;
}

// Greedy: pick the next mon that maximizes overallScore
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

function buildTeam(core: ChampionsPokemon[]): { team: ChampionsPokemon[]; synergy: ReturnType<typeof score> } {
  const team = [...core];
  while (team.length < 6) {
    const pick = greedyPick(team);
    if (!pick) break;
    team.push(pick);
  }
  return { team, synergy: score(team) };
}

// ── Curated 3-mon cores designed for maximum sub-score coverage ──
// Need: speed-control + intimidate + redirector + phys/spec sweeper + weather
// + good type diversity + priority moves

const tripleCores: string[][] = [
  // Rain cores with support
  ["Politoed", "Basculegion-M", "Arcanine"],
  ["Politoed", "Basculegion-M", "Clefable"],
  ["Pelipper", "Beartic", "Arcanine"],
  ["Pelipper", "Basculegion-M", "Incineroar"],
  ["Pelipper", "Basculegion-M", "Clefable"],
  ["Pelipper", "Barraskewda", "Incineroar"],
  ["Pelipper", "Ludicolo", "Incineroar"],
  ["Pelipper", "Beartic", "Clefable"],
  
  // Sun cores with support
  ["Torkoal", "Venusaur", "Arcanine"],
  ["Torkoal", "Venusaur", "Incineroar"],
  ["Torkoal", "Venusaur", "Clefable"],
  ["Torkoal", "Victreebel", "Arcanine"],
  ["Torkoal", "Scovillain", "Incineroar"],
  ["Ninetales", "Venusaur", "Incineroar"],
  ["Ninetales", "Venusaur", "Clefable"],
  ["Ninetales", "Leafeon", "Arcanine"],
  
  // Sand cores
  ["Tyranitar", "Excadrill", "Arcanine"],
  ["Tyranitar", "Excadrill", "Clefable"],
  ["Hippowdon", "Excadrill", "Arcanine"],
  ["Hippowdon", "Excadrill", "Clefable"],
  
  // Trick Room + support
  ["Cofagrigus", "Aromatisse", "Gyarados"],
  ["Cofagrigus", "Aromatisse", "Incineroar"],
  ["Slowbro", "Aromatisse", "Arcanine"],
  ["Reuniclus", "Aromatisse", "Incineroar"],
  ["Slowbro", "Ariados", "Gyarados"],
  ["Espathra", "Aromatisse", "Gyarados"],
  ["Slowbro", "Aromatisse", "Gyarados"],
  
  // Tailwind + coverage
  ["Whimsicott", "Incineroar", "Clefable"],
  ["Whimsicott", "Arcanine", "Greninja"],
  ["Whimsicott", "Gyarados", "Arcanine"],
  ["Tornadus", "Incineroar", "Clefable"],
  ["Scizor", "Charizard", "Gyarados"],
  ["Scizor", "Charizard", "Clefable"],
  ["Skarmory", "Arcanine", "Clefable"],
  
  // Intimidate + redirect + sweeper
  ["Arcanine", "Clefable", "Greninja"],
  ["Arcanine", "Clefable", "Hydreigon"],
  ["Arcanine", "Clefable", "Dragonite"],
  ["Gyarados", "Clefable", "Greninja"],
  ["Incineroar", "Amoonguss", "Greninja"],
  ["Incineroar", "Clefable", "Hydreigon"],
  ["Krookodile", "Clefable", "Greninja"],
  
  // Mixed support + sweeper
  ["Arcanine", "Ariados", "Whimsicott"],
  ["Hisuian Arcanine", "Ariados", "Whimsicott"],
  ["Arcanine", "Ariados", "Clefable"],
  ["Hisuian Arcanine", "Ariados", "Clefable"],
  ["Arcanine", "Amoonguss", "Whimsicott"],
  
  // The 90% teams from v1 with tweaks
  ["Arcanine", "Ariados", "Hippowdon"],
  ["Hisuian Arcanine", "Ariados", "Hippowdon"],
  ["Arcanine", "Ariados", "Empoleon"],
  
  // New weather + redirect combos
  ["Torkoal", "Venusaur", "Ariados"],
  ["Pelipper", "Basculegion-M", "Ariados"],
  ["Politoed", "Basculegion-M", "Ariados"],
  ["Ninetales", "Venusaur", "Ariados"],
  
  // Try covering more types
  ["Arcanine", "Clefable", "Hippowdon"],
  ["Hisuian Arcanine", "Clefable", "Hippowdon"],
  ["Arcanine", "Clefable", "Empoleon"],
  ["Gyarados", "Ariados", "Hippowdon"],
  ["Gyarados", "Clefable", "Hippowdon"],
];

console.log(`\n🔍 Testing ${tripleCores.length} triple cores...\n`);

interface Result { names: string[]; ids: number[]; overall: number; type: number; speed: number; role: number; arch: number; archName: string }
const results: Result[] = [];

for (let i = 0; i < tripleCores.length; i++) {
  const core = tripleCores[i];
  const pokemon = core.map(byName).filter(Boolean);
  if (pokemon.length !== 3) { console.log(`  ⚠ Skipping ${core.join(" / ")} (missing mon)`); continue; }
  
  const { team, synergy } = buildTeam(pokemon);
  results.push({
    names: team.map(p => p.name),
    ids: team.map(p => p.id),
    overall: synergy.overallScore,
    type: synergy.typeScore,
    speed: synergy.speedScore,
    role: synergy.roleScore,
    arch: synergy.archetypeScore,
    archName: synergy.detectedArchetypes[0]?.archetype ?? "none",
  });
}

// Also try: for every 89%+ team from v1, try swapping each member for every roster mon
console.log(`\n🔄 Trying swaps on top v1 results...\n`);

const topV1Teams: string[][] = [
  ["Arcanine", "Ariados", "Whimsicott", "Hippowdon", "Slowbro", "Empoleon"],
  ["Politoed", "Basculegion-M", "Simisage", "Forretress", "Arcanine", "Clefable"],
  ["Torkoal", "Victreebel", "Greninja", "Arcanine", "Sinistcha", "Blastoise"],
  ["Scizor", "Charizard", "Hippowdon", "Gyarados", "Clefable", "Archaludon"],
  ["Arbok", "Clefable", "Hippowdon", "Greninja", "Forretress", "Hydreigon"],
  ["Arcanine", "Clefable", "Hippowdon", "Greninja", "Forretress", "Dragonite"],
];

for (const teamNames of topV1Teams) {
  const baseTeam = teamNames.map(byName).filter(Boolean);
  if (baseTeam.length !== 6) continue;
  
  // Try swapping each slot
  for (let slot = 0; slot < 6; slot++) {
    const teamIds = new Set(baseTeam.map(p => p.id));
    for (const candidate of roster) {
      if (teamIds.has(candidate.id)) continue;
      const newTeam = [...baseTeam];
      newTeam[slot] = candidate;
      const synergy = analyzeTeamSynergy(newTeam);
      if (synergy.overallScore >= 89) {
        results.push({
          names: newTeam.map(p => p.name),
          ids: newTeam.map(p => p.id),
          overall: synergy.overallScore,
          type: synergy.typeScore,
          speed: synergy.speedScore,
          role: synergy.roleScore,
          arch: synergy.archetypeScore,
          archName: synergy.detectedArchetypes[0]?.archetype ?? "none",
        });
      }
    }
  }
}

// Sort and deduplicate
results.sort((a, b) => b.overall - a.overall);
const seen = new Set<string>();
const unique: Result[] = [];
for (const r of results) {
  const key = [...r.ids].sort().join(",");
  if (!seen.has(key)) { seen.add(key); unique.push(r); }
}

console.log(`\n═══════════════════════════════════════════════════════`);
console.log(`  TOP TEAMS (${unique.filter(r => r.overall >= 90).length} scoring 90%+)`);
console.log(`═══════════════════════════════════════════════════════\n`);

for (const r of unique.filter(r => r.overall >= 89).slice(0, 40)) {
  const emoji = r.overall >= 90 ? "🏆" : "⭐";
  console.log(`${emoji} ${r.overall}% — ${r.names.join(" / ")}`);
  console.log(`   Type: ${r.type} | Speed: ${r.speed} | Role: ${r.role} | Arch: ${r.arch} (${r.archName})`);
  console.log(`   IDs: [${r.ids.join(", ")}]`);
  console.log();
}
