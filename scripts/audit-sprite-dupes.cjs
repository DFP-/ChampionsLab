const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const spritesDir = path.join(__dirname, '..', 'public', 'sprites');

// Build hash map of all sprites
const files = fs.readdirSync(spritesDir).filter(f => f.endsWith('.png'));
const hashes = {};
for (const f of files) {
  const buf = fs.readFileSync(path.join(spritesDir, f));
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  if (!hashes[hash]) hashes[hash] = [];
  hashes[hash].push(f);
}

// Find groups with duplicates
console.log('=== DUPLICATE SPRITE FILES ===');
let dupeCount = 0;
for (const [hash, group] of Object.entries(hashes)) {
  if (group.length > 1) {
    // Check if group has both base and oa- variant
    const oaFiles = group.filter(f => f.startsWith('oa-'));
    const baseFiles = group.filter(f => !f.startsWith('oa-') && !f.startsWith('mega-'));
    if (oaFiles.length > 0 && baseFiles.length > 0) {
      dupeCount++;
      console.log(`  ${oaFiles.join(', ')} == ${baseFiles.join(', ')} (${fs.statSync(path.join(spritesDir, group[0])).size} bytes)`);
    }
  }
}
if (dupeCount === 0) console.log('  None found');

// Also check which mega forms exist in pokemon-data but reference a sprite that's the same as base
const dataFile = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');
const content = fs.readFileSync(dataFile, 'utf8');

// Extract all entries with their mega forms
const megaEntries = [];
const megaRegex = /"name":\s*"Mega ([^"]+)"[^}]*?"sprite":\s*"([^"]+)"/g;
let m;
while ((m = megaRegex.exec(content)) !== null) {
  megaEntries.push({ name: `Mega ${m[1]}`, sprite: m[2] });
}

console.log(`\n=== ALL MEGA FORM SPRITES (${megaEntries.length}) ===`);
for (const entry of megaEntries) {
  const file = path.join(__dirname, '..', 'public', entry.sprite);
  if (!fs.existsSync(file)) {
    console.log(`  MISSING: ${entry.name} -> ${entry.sprite}`);
  } else {
    const megaBuf = fs.readFileSync(file);
    const megaHash = crypto.createHash('md5').update(megaBuf).digest('hex');
    // Find if any base sprite has same hash
    const dupes = (hashes[megaHash] || []).filter(f => !f.startsWith('oa-') && !f.startsWith('mega-'));
    if (dupes.length > 0) {
      console.log(`  PLACEHOLDER: ${entry.name} (${entry.sprite}) identical to base ${dupes.join(', ')}`);
    }
  }
}
