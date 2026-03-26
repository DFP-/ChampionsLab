import fs from 'fs';

const data = fs.readFileSync('src/lib/pokemon-data.ts', 'utf8');
// Match each top-level pokemon entry: "id": N, then "name": "X", then hasMega
const regex = /\{\s*"id":\s*(\d+),\s*"name":\s*"([^"]+)",\s*"dexNumber"[\s\S]*?"hasMega":\s*(true|false)/g;
let match;
const pokemon = [];
while ((match = regex.exec(data)) !== null) {
  pokemon.push({ name: match[2], id: parseInt(match[1]), hasMega: match[3] === 'true' });
}
console.log('Total Pokemon:', pokemon.length);
console.log('\nWith Mega:');
pokemon.filter(p => p.hasMega).forEach(p => console.log(`  YES ${p.name} (#${p.id})`));
console.log('\nWithout Mega:');
pokemon.filter(p => !p.hasMega).forEach(p => console.log(`  NO  ${p.name} (#${p.id})`));
