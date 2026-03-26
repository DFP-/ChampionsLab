import fs from 'fs';
const content = fs.readFileSync('src/lib/pokemon-data.ts', 'utf8');

// Find all pokemon with hasMega: true
const pokemonBlocks = content.split(/\n  \{[\s]*\n/);
const megaPokemon = [];

// Simpler: find "hasMega": true and the pokemon name nearby
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"hasMega": true')) {
    // Search backwards for the pokemon name
    for (let j = i; j > Math.max(0, i-60); j--) {
      const nameMatch = lines[j].match(/^\s+"name": "([^"]+)"/);
      if (nameMatch && !nameMatch[1].startsWith('Mega ')) {
        // Check it's a top-level pokemon name (not a move/ability name)
        // Look for "id" nearby
        let hasId = false;
        for (let k = Math.max(0, j-5); k < j+5; k++) {
          if (lines[k] && lines[k].includes('"id":')) hasId = true;
        }
        if (hasId) {
          megaPokemon.push(nameMatch[1]);
          break;
        }
      }
    }
  }
}

console.log('Pokemon with Mega forms:', megaPokemon.length);
megaPokemon.forEach(p => console.log(' ', p));

// Now check which have Mega stone references in usage-data.ts
const usageContent = fs.readFileSync('src/lib/usage-data.ts', 'utf8');
console.log('\nChecking which have Mega sets in usage data...');
megaPokemon.forEach(name => {
  // Common mega stone naming patterns
  const stonePatterns = [
    name + 'ite',
    name + 'inite',
    name.replace('ss', 'sinite'), // Metagross -> Metagrossinite
  ];
  const hasStone = stonePatterns.some(s => usageContent.toLowerCase().includes(s.toLowerCase()));
  if (!hasStone) {
    console.log('  MISSING MEGA SET:', name);
  }
});

// Also check: which Pokemon DON'T have hasMega but have Mega sets?
console.log('\nAlso checking for Starmie specifically...');
console.log('Starmie hasMega:', content.includes('"Mega Starmie"'));
