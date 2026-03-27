// scripts/check-form-sprites.cjs
// Verify all regional form sprite URLs use the correct PokeAPI ID
const fs = require('fs');
const pd = fs.readFileSync('src/lib/pokemon-data.ts', 'utf8');

// Find all entries with both id and sprite
const entries = [];
const blocks = pd.split(/\n  \{[\s]*\n/);
for (const block of blocks) {
  const idMatch = block.match(/"id":\s*(\d+)/);
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  const spriteMatch = block.match(/"sprite":\s*"([^"]+)"/);
  if (idMatch && nameMatch && spriteMatch) {
    entries.push({
      id: Number(idMatch[1]),
      name: nameMatch[1],
      sprite: spriteMatch[1],
    });
  }
}

// Check regional forms (names containing Alolan, Galarian, Hisuian, or IDs >= 10000)
const regionalForms = entries.filter(e =>
  e.name.includes('Alolan') || e.name.includes('Galarian') || e.name.includes('Hisuian') ||
  e.id >= 10000
);

console.log('Regional/Form entries:');
for (const e of regionalForms) {
  // Extract sprite ID from URL  
  const spriteId = e.sprite.match(/\/(\d+)\.png/);
  const sid = spriteId ? spriteId[1] : 'unknown';
  const matches = Number(sid) === e.id;
  console.log(`  ${e.id} ${e.name} — sprite ID: ${sid} ${matches ? '✓' : '⚠️ MISMATCH'}`);
}

// Also check other forms with names suggesting regional variants
const others = entries.filter(e => {
  const n = e.name.toLowerCase();
  return (n.includes('-hisui') || n.includes('-galar') || n.includes('-alola')) && 
         !regionalForms.includes(e);
});
if (others.length > 0) {
  console.log('\nOther regional name matches:');
  others.forEach(e => console.log(`  ${e.id} ${e.name}`));
}
