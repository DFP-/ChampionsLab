#!/usr/bin/env node
/**
 * Fetch Spanish Pokémon names from PokéAPI for the Champions roster.
 *
 * Usage: node scripts/fetch-spanish-names.mjs
 * Output: src/lib/i18n/pokemon-names.es.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const dataFile = fs.readFileSync(path.join(ROOT, "src/lib/pokemon-data.ts"), "utf-8");
const idNameRe = /"id":\s*(\d+),\s*\n\s*"name":\s*"([^"]+)"/g;

const roster = [];
let m;
while ((m = idNameRe.exec(dataFile)) !== null) {
  roster.push({ id: parseInt(m[1]), name: m[2] });
}
console.log(`Found ${roster.length} Pokémon in roster`);

function getSpeciesId(id) {
  if (id >= 10008 && id <= 10012) return 479;
  if (id === 10100) return 26;
  if (id === 10103) return 38;
  if (id >= 10250 && id <= 10252) return 128;
  if (id === 5059) return 59;
  if (id === 5157) return 157;
  if (id === 5706) return 706;
  if (id === 5713) return 713;
  if (id === 6080) return 80;
  if (id === 6199) return 199;
  if (id === 6618) return 618;
  if (id === 10336) return 503;
  if (id === 10340) return 571;
  if (id === 10341) return 724;
  if (id === 10678) return 678;
  if (id === 10902) return 902;
  return id;
}

function getRegionalPrefix(id, enName) {
  if (enName.startsWith("Hisuian ")) return "Hisuian";
  if (enName.startsWith("Alolan ")) return "Alolan";
  if (enName.startsWith("Galarian ")) return "Galarian";
  if (enName.startsWith("Paldean ")) return "Paldean";
  return null;
}

// Spanish regional name suffixes (Pokémon uses "de <region>" in Spanish)
const ES_REGIONAL_PREFIXES = {
  "Hisuian": "de Hisui",
  "Alolan": "de Alola",
  "Galarian": "de Galar",
  "Paldean": "de Paldea",
};

const SPECIAL_NAMES = {
  10008: { suffix: " (Calor)" },     // Heat Rotom
  10009: { suffix: " (Lavado)" },    // Wash Rotom
  10010: { suffix: " (Frío)" },      // Frost Rotom
  10011: { suffix: " (Ventilador)" },// Fan Rotom
  10012: { suffix: " (Corte)" },     // Mow Rotom
  10678: { suffix: "-H" },           // Meowstic-F (Hembra)
  10902: { suffix: "-H" },           // Basculegion-F (Hembra)
  10251: { suffix: " (Llama)" },     // Paldean Tauros Blaze
  10252: { suffix: " (Aqua)" },      // Paldean Tauros Aqua
};

async function fetchSpeciesName(speciesId) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${speciesId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch species ${speciesId}: ${res.status}`);
  const data = await res.json();
  const entry = data.names.find(n => n.language.name === "es");
  return entry ? entry.name : null;
}

async function main() {
  const result = {};
  const cache = {};

  for (let i = 0; i < roster.length; i += 10) {
    const batch = roster.slice(i, i + 10);
    const promises = batch.map(async ({ id, name }) => {
      const speciesId = getSpeciesId(id);
      if (!cache[speciesId]) cache[speciesId] = await fetchSpeciesName(speciesId);
      let esName = cache[speciesId];
      if (!esName) {
        console.warn(`  No Spanish name for ${name} (species ${speciesId}), using English`);
        esName = name;
      }
      const prefix = getRegionalPrefix(id, name);
      if (prefix) esName = `${esName} ${ES_REGIONAL_PREFIXES[prefix]}`;
      if (SPECIAL_NAMES[id]) esName = esName + SPECIAL_NAMES[id].suffix;
      result[name] = esName;
      console.log(`  ${name} -> ${esName}`);
    });
    await Promise.all(promises);
    if (i + 10 < roster.length) await new Promise(r => setTimeout(r, 200));
  }

  const outDir = path.join(ROOT, "src/lib/i18n");
  fs.mkdirSync(outDir, { recursive: true });
  const sorted = Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
  const outPath = path.join(outDir, "pokemon-names.es.json");
  fs.writeFileSync(outPath, JSON.stringify(sorted, null, 2) + "\n");
  console.log(`\nWrote ${Object.keys(sorted).length} Spanish names to ${outPath}`);
}

main().catch(err => { console.error("Fatal:", err); process.exit(1); });
