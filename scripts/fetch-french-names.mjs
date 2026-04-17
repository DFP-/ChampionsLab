#!/usr/bin/env node
/**
 * Fetch French Pokémon names from PokéAPI for the Champions roster.
 * 
 * Usage: node scripts/fetch-french-names.mjs
 * Output: src/lib/i18n/pokemon-names.fr.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// Read the roster from pokemon-data.ts
const dataFile = fs.readFileSync(path.join(ROOT, "src/lib/pokemon-data.ts"), "utf-8");
const idNameRe = /"id":\s*(\d+),\s*\n\s*"name":\s*"([^"]+)"/g;

const roster = [];
let m;
while ((m = idNameRe.exec(dataFile)) !== null) {
  roster.push({ id: parseInt(m[1]), name: m[2] });
}

console.log(`Found ${roster.length} Pokémon in roster`);

// Map custom IDs to PokeAPI species IDs
// Regional forms & special forms: strip to base species for the species endpoint
// Then we label them with the regional prefix
function getSpeciesId(id) {
  // Rotom forms (10008-10012) → base species 479
  if (id >= 10008 && id <= 10012) return 479;
  // Alolan forms: 10100=Raichu(26), 10103=Ninetales(38)
  if (id === 10100) return 26;
  if (id === 10103) return 38;
  // Paldean Tauros: 10250,10251,10252 → 128
  if (id >= 10250 && id <= 10252) return 128;
  // Hisuian: 5059=Arcanine(59), 5157=Typhlosion(157), 5706=Goodra(706), 5713=Avalugg(713)
  if (id === 5059) return 59;
  if (id === 5157) return 157;
  if (id === 5706) return 706;
  if (id === 5713) return 713;
  // Galarian: 6080=Slowbro(80), 6199=Slowking(199), 6618=Stunfisk(618)
  if (id === 6080) return 80;
  if (id === 6199) return 199;
  if (id === 6618) return 618;
  // Hisuian via 10xxx: 10336=Samurott(503), 10340=Zoroark(571), 10341=Decidueye(724)
  if (id === 10336) return 503;
  if (id === 10340) return 571;
  if (id === 10341) return 724;
  // Meowstic-F: 10678 → 678
  if (id === 10678) return 678;
  // Basculegion-F: 10902 → 902
  if (id === 10902) return 902;
  // Normal Pokémon
  return id;
}

// Regional prefix mappings for display names
function getRegionalPrefix(id, enName) {
  if (enName.startsWith("Hisuian ")) return "Hisuian";
  if (enName.startsWith("Alolan ")) return "Alolan";
  if (enName.startsWith("Galarian ")) return "Galarian";
  if (enName.startsWith("Paldean ")) return "Paldean";
  return null;
}

// French regional prefixes
const FRENCH_REGIONAL_PREFIXES = {
  "Hisuian": "de Hisui",
  "Alolan": "d'Alola",
  "Galarian": "de Galar",
  "Paldean": "de Paldea",
};

// Special name overrides for forms that won't map cleanly
const SPECIAL_NAMES = {
  10008: { suffix: " (Chaleur)" },  // Heat Rotom
  10009: { suffix: " (Lavage)" },   // Wash Rotom
  10010: { suffix: " (Froid)" },    // Frost Rotom
  10011: { suffix: " (Hélice)" },   // Fan Rotom
  10012: { suffix: " (Tonte)" },    // Mow Rotom
  10678: { suffix: "-F" },          // Meowstic-F
  10902: { suffix: "-F" },          // Basculegion-F
  10251: { suffix: " (Flambée)" },  // Paldean Tauros Blaze
  10252: { suffix: " (Aqua)" },     // Paldean Tauros Aqua
};

async function fetchSpeciesName(speciesId) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${speciesId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch species ${speciesId}: ${res.status}`);
  const data = await res.json();
  
  const frEntry = data.names.find(n => n.language.name === "fr");
  return frEntry ? frEntry.name : null;
}

async function main() {
  const result = {};
  const speciesCache = {};
  
  // Batch in groups of 10 to avoid rate limiting
  for (let i = 0; i < roster.length; i += 10) {
    const batch = roster.slice(i, i + 10);
    
    const promises = batch.map(async ({ id, name }) => {
      const speciesId = getSpeciesId(id);
      
      // Cache species lookups
      if (!speciesCache[speciesId]) {
        speciesCache[speciesId] = await fetchSpeciesName(speciesId);
      }
      
      let frName = speciesCache[speciesId];
      if (!frName) {
        console.warn(`  ⚠ No French name for ${name} (species ${speciesId}), using English`);
        frName = name;
      }
      
      // Handle regional forms
      const prefix = getRegionalPrefix(id, name);
      if (prefix) {
        const frPrefix = FRENCH_REGIONAL_PREFIXES[prefix];
        frName = `${frName} ${frPrefix}`;
      }
      
      // Handle special suffixes (Rotom forms, gender forms)
      if (SPECIAL_NAMES[id]) {
        frName = frName + SPECIAL_NAMES[id].suffix;
      }
      
      result[name] = frName;
      console.log(`  ✓ ${name} → ${frName}`);
    });
    
    await Promise.all(promises);
    
    // Small delay between batches
    if (i + 10 < roster.length) {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  
  // Ensure output directory
  const outDir = path.join(ROOT, "src/lib/i18n");
  fs.mkdirSync(outDir, { recursive: true });
  
  // Write sorted output
  const sorted = Object.fromEntries(
    Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
  );
  
  const outPath = path.join(outDir, "pokemon-names.fr.json");
  fs.writeFileSync(outPath, JSON.stringify(sorted, null, 2) + "\n");
  console.log(`\n✅ Written ${Object.keys(sorted).length} French names to ${outPath}`);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
