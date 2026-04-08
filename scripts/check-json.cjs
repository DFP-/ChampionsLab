const fs = require('fs');
const content = fs.readFileSync('src/lib/pokemon-data.ts', 'utf8');
const match = content.match(/POKEMON_SEED[^=]*=\s*(\[[\s\S]*\]);/);
if (!match) { console.log('No array match found'); process.exit(1); }
try {
  const arr = JSON.parse(match[1]);
  console.log('Parsed OK:', arr.length, 'entries');
} catch(e) {
  console.log('Parse error:', e.message.slice(0, 200));
}
