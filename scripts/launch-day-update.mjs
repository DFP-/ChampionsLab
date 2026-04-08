#!/usr/bin/env node
/**
 * Launch Day Update Script — April 8, 2026
 * 
 * 1. Marks Pokémon NOT in the Serebii confirmed list as hidden
 * 2. Updates items to only show Champions-available ones
 * 3. Updates mega abilities with confirmed Serebii data
 * 4. Updates season info
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');

// ── SEREBII CONFIRMED POKEMON (dex numbers) ──────────────────────────────────
// From https://www.serebii.net/pokemonchampions/pokemon.shtml
const SEREBII_DEX = new Set([
  3, 6, 9, 15, 18, 24, 25, 26, 36, 38, 59, 65, 68, 71, 80, 94, 115, 121, 127,
  128, 130, 132, 134, 135, 136, 142, 143, 149, 154, 157, 160, 168, 181, 184,
  186, 196, 197, 199, 205, 208, 212, 214, 227, 229, 248, 279, 282, 302, 306,
  308, 310, 319, 323, 324, 334, 350, 351, 354, 358, 359, 362, 389, 392, 395,
  405, 407, 409, 411, 428, 442, 445, 448, 450, 454, 460, 461, 464, 470, 471,
  472, 473, 475, 478, 479, 497, 500, 503, 504, 510, 512, 514, 516, 530, 531,
  534, 547, 553, 563, 569, 571, 579, 584, 587, 609, 614, 618, 623, 635, 637,
  652, 655, 658, 660, 663, 666, 670, 671, 675, 676, 678, 681, 683, 685, 693,
  695, 697, 699, 700, 701, 702, 706, 707, 709, 711, 713, 715, 724, 727, 730,
  733, 740, 745, 748, 750, 752, 758, 763, 765, 766, 778, 780, 784, 823, 841,
  842, 844, 855, 858, 866, 867, 869, 877, 887, 899, 900, 902, 903, 908, 911,
  914, 925, 934, 936, 937, 939, 952, 956, 959, 964, 968, 970, 981, 983,
  1013, 1018, 1019
]);

// ── STEP 1: MARK HIDDEN POKEMON ──────────────────────────────────────────────
let src = fs.readFileSync(dataFile, 'utf8');

// Find all pokemon entries and their dexNumbers
const entryRegex = /"dexNumber":\s*(\d+)/g;
let match;
const hiddenDex = [];
const keptDex = [];

while ((match = entryRegex.exec(src))) {
  const dex = parseInt(match[1]);
  if (!SEREBII_DEX.has(dex)) {
    hiddenDex.push(dex);
  } else {
    keptDex.push(dex);
  }
}

console.log(`Found ${keptDex.length} Pokémon to keep, ${hiddenDex.length} to hide`);
console.log('Hiding dex numbers:', [...new Set(hiddenDex)].sort((a, b) => a - b));

// For each hidden dex entry, add "hidden": true after the "dexNumber" line
// We need to be careful since entries may already have hasMega etc. after dexNumber
for (const dex of [...new Set(hiddenDex)]) {
  // Match the specific dexNumber entry and add hidden field
  // Pattern: "dexNumber": <dex>,\n    "types":
  const pattern = new RegExp(
    `("dexNumber":\\s*${dex},\\n\\s*"types")`,
    'g'
  );
  
  // Check if any of these entries already have hidden
  const alreadyHidden = src.includes(`"dexNumber": ${dex},\n    "hidden": true`);
  if (alreadyHidden) {
    console.log(`  Dex ${dex} already hidden, skipping`);
    continue;
  }
  
  // Count replacements
  let count = 0;
  src = src.replace(pattern, (_, after) => {
    count++;
    return `"dexNumber": ${dex},\n    "hidden": true,\n    "types"`;
  });
  console.log(`  Dex ${dex}: added hidden to ${count} entries`);
}

// ── STEP 2: UPDATE SEASON INFO ───────────────────────────────────────────────
src = src.replace(
  /name: "Season 1 - Launch"/,
  'name: "Season M-1 — Regulation M-A"'
);

fs.writeFileSync(dataFile, src, 'utf8');
console.log('\n✅ pokemon-data.ts updated');

// ── STEP 3: Verify ──────────────────────────────────────────────────────────
const verifyRegex = /"dexNumber":\s*(\d+),\s*\n\s*"hidden":\s*true/g;
const hiddenVerify = [];
let vm;
while ((vm = verifyRegex.exec(src))) {
  hiddenVerify.push(parseInt(vm[1]));
}
console.log(`\nVerification: ${hiddenVerify.length} entries marked hidden`);
console.log('Hidden dex numbers:', [...new Set(hiddenVerify)].sort((a, b) => a - b));
