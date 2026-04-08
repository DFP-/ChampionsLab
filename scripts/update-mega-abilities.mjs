#!/usr/bin/env node
/**
 * Update mega abilities with confirmed Serebii data
 * From: https://www.serebii.net/pokemonchampions/megaabilities.shtml
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');

// Confirmed mega abilities from Serebii (only NEW champions megas — existing megas like
// Mega Charizard X (Tough Claws), Mega Venusaur (Thick Fat) etc. are already correct)
const CONFIRMED_ABILITIES = {
  "Mega Clefable": "Magic Bounce",
  "Mega Victreebel": "Innards Out",
  "Mega Starmie": "Huge Power",
  "Mega Dragonite": "Multiscale",
  "Mega Meganium": "Mega Sol",
  "Mega Feraligatr": "Dragonize",
  "Mega Skarmory": "Stalwart",
  "Mega Chimecho": "Levitate",
  "Mega Froslass": "Snow Warning",
  "Mega Emboar": "Mold Breaker",
  "Mega Excadrill": "Piercing Drill",
  "Mega Chandelure": "Infiltrator",
  "Mega Golurk": "Unseen Fist",
  "Mega Chesnaught": "Bulletproof",
  "Mega Delphox": "Levitate",
  "Mega Greninja": "Protean",
  "Mega Floette": "Fairy Aura",
  "Mega Meowstic": "Trace",
  "Mega Hawlucha": "No Guard",
  "Mega Crabominable": "Iron Fist",
  "Mega Drampa": "Berserk",
  "Mega Scovillain": "Spicy Spray",
  "Mega Glimmora": "Adaptability",
};

let src = fs.readFileSync(dataFile, 'utf8');
let updated = 0;

for (const [megaName, ability] of Object.entries(CONFIRMED_ABILITIES)) {
  // Find the mega form entry: "name": "Mega Clefable", ... "abilities": [{ "name": "OLD_ABILITY"
  // The pattern in the forms array is:
  // "name": "Mega Clefable",
  // "sprite": ...,
  // "types": [...],
  // "baseStats": {...},
  // "abilities": [{ "name": "SomeAbility", ... "isChampions": true/false }]
  
  // Find the mega entry by name
  const namePattern = `"name": "${megaName}"`;
  const nameIdx = src.indexOf(namePattern);
  
  if (nameIdx === -1) {
    console.log(`⚠️  ${megaName} not found in pokemon-data.ts`);
    continue;
  }
  
  // Find the abilities section after this mega name
  const abilitiesIdx = src.indexOf('"abilities":', nameIdx);
  if (abilitiesIdx === -1 || abilitiesIdx - nameIdx > 2000) {
    console.log(`⚠️  ${megaName}: abilities section not found nearby`);
    continue;
  }
  
  // Find the "name": "..." within the abilities array (first ability name)
  const abilityNameIdx = src.indexOf('"name": "', abilitiesIdx + 12);
  if (abilityNameIdx === -1 || abilityNameIdx - abilitiesIdx > 200) {
    console.log(`⚠️  ${megaName}: ability name not found`);
    continue;
  }
  
  // Extract current ability name
  const endQuote = src.indexOf('"', abilityNameIdx + 9);
  const currentAbility = src.slice(abilityNameIdx + 9, endQuote);
  
  if (currentAbility === ability) {
    console.log(`✓ ${megaName}: already ${ability}`);
    continue;
  }
  
  // Replace the ability name
  src = src.slice(0, abilityNameIdx + 9) + ability + src.slice(endQuote);
  console.log(`✅ ${megaName}: ${currentAbility} → ${ability}`);
  updated++;
  
  // Also update isChampions flag — set to true for new Champions abilities, false for existing
  const isChampionsIdx = src.indexOf('"isChampions":', abilityNameIdx);
  if (isChampionsIdx !== -1 && isChampionsIdx - abilityNameIdx < 300) {
    const currentVal = src.slice(isChampionsIdx + 15, isChampionsIdx + 20).trim().startsWith('true');
    // Only Champions-exclusive new abilities should be isChampions: true
    // Existing game abilities (that happen to be new to this mega) are false
    const newAbilitiesSet = new Set(["Mega Sol", "Dragonize", "Piercing Drill", "Spicy Spray"]);
    const shouldBeChampions = newAbilitiesSet.has(ability);
    const valEnd = src.indexOf('\n', isChampionsIdx);
    const line = src.slice(isChampionsIdx, valEnd);
    if (shouldBeChampions && !line.includes('true')) {
      src = src.slice(0, isChampionsIdx) + '"isChampions": true' + src.slice(isChampionsIdx + line.trimEnd().length);
    } else if (!shouldBeChampions && line.includes('true')) {
      src = src.slice(0, isChampionsIdx) + '"isChampions": false' + src.slice(isChampionsIdx + line.trimEnd().length);
    }
  }
}

fs.writeFileSync(dataFile, src, 'utf8');
console.log(`\n✅ Updated ${updated} mega abilities`);
