const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const spritesDir = path.join(__dirname, '..', 'public', 'sprites');
const dataFile = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');

const content = fs.readFileSync(dataFile, 'utf8');

// Find all sprite paths referenced in the data
const spriteRefs = [...content.matchAll(/"sprite":\s*"([^"]+)"/g)].map(m => m[1]);
const uniqueRefs = [...new Set(spriteRefs)];

console.log(`Total sprite references: ${spriteRefs.length}`);
console.log(`Unique sprite paths: ${uniqueRefs.length}`);

// Check for missing files
const missing = [];
const existing = [];
for (const ref of uniqueRefs) {
  const file = path.join(__dirname, '..', 'public', ref);
  if (!fs.existsSync(file)) {
    missing.push(ref);
  } else {
    existing.push({ ref, file });
  }
}

if (missing.length > 0) {
  console.log(`\nMISSING sprites (${missing.length}):`);
  missing.forEach(m => console.log(`  ${m}`));
}

// Find mega form sprites that are identical to base form
console.log('\nChecking for placeholder mega sprites (identical to base)...');
const hashes = {};

for (const { ref, file } of existing) {
  const buf = fs.readFileSync(file);
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  const filename = path.basename(file, '.png');
  hashes[filename] = { hash, ref, size: buf.length };
}

// Check oa- files against their base
for (const [filename, info] of Object.entries(hashes)) {
  if (filename.startsWith('oa-')) {
    const baseId = filename.replace('oa-', '');
    if (hashes[baseId] && hashes[baseId].hash === info.hash) {
      console.log(`  DUPLICATE: ${filename}.png == ${baseId}.png (${info.size} bytes)`);
    }
  }
}

// Also find mega forms and check their sprites against base pokemon sprites
// Extract mega entries from pokemon-data.ts
const megaPattern = /"name":\s*"Mega ([^"]+)"[\s\S]*?"sprite":\s*"([^"]+)"/g;
let match;
const megaSprites = [];
while ((match = megaPattern.exec(content)) !== null) {
  megaSprites.push({ name: match[1], sprite: match[2] });
}

// Find base pokemon sprites
const basePattern = /"name":\s*"([^"]+)"[\s\S]*?"sprite":\s*"([^"]+)"[\s\S]*?"isMega"/g;

console.log(`\nMega form sprites found: ${megaSprites.length}`);
for (const ms of megaSprites) {
  const file = path.join(__dirname, '..', 'public', ms.sprite);
  if (!fs.existsSync(file)) {
    console.log(`  MISSING MEGA SPRITE: Mega ${ms.name} -> ${ms.sprite}`);
  }
}

// Check new pokemon sprites (the 38 we added) - IDs that use oa- prefix
const newOaSprites = uniqueRefs.filter(r => r.includes('oa-'));
console.log(`\nOA (official art) sprites: ${newOaSprites.length}`);
for (const ref of newOaSprites) {
  const file = path.join(__dirname, '..', 'public', ref);
  if (fs.existsSync(file)) {
    const size = fs.statSync(file).size;
    if (size < 1000) { 
      console.log(`  TINY (possibly broken): ${ref} (${size} bytes)`);
    }
  }
}
