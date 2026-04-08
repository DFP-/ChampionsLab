const fs = require('fs');
const src = fs.readFileSync('src/lib/pokemon-data.ts','utf8');

const seedMatch = src.match(/POKEMON_SEED[^=]*=\s*(\[[\s\S]*\]);/);
if (!seedMatch) { console.error('Could not find POKEMON_SEED'); process.exit(1); }
const data = JSON.parse(seedMatch[1]);
console.log('Total entries:', data.length);

const issues = [];
for (const p of data) {
  if (p.hidden) continue;
  const missing = [];
  if (p.usageRate === null || p.usageRate === undefined) missing.push('usageRate');
  if (!p.sets || p.sets.length === 0) missing.push('sets');
  if (!p.tier) missing.push('tier');
  if (!p.moves || p.moves.length === 0) missing.push('moves');
  if (!p.abilities || p.abilities.length === 0) missing.push('abilities');
  if (!p.sharedTeams || p.sharedTeams.length === 0) missing.push('sharedTeams');
  if (missing.length > 0) issues.push(p.name + ' (#' + p.dexNumber + '): ' + missing.join(', '));
}
console.log('\\nPokemon with missing data (' + issues.length + '):');
issues.forEach(i => console.log('  ' + i));
