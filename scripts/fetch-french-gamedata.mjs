#!/usr/bin/env node
/**
 * Fetch French names for moves, abilities, and items from PokéAPI.
 *
 * Usage: node scripts/fetch-french-gamedata.mjs
 * Output:
 *   src/lib/i18n/moves.fr.json
 *   src/lib/i18n/abilities.fr.json
 *   src/lib/i18n/items.fr.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const I18N_DIR = path.join(ROOT, "src/lib/i18n");

// ── Extract keys from source files ─────────────────────────────────────

function extractKeys(filePath) {
  const src = fs.readFileSync(filePath, "utf-8");
  const keys = [];
  const re = /^\s*"([A-Z][^"]*)":\s*\{/gm;
  let m;
  while ((m = re.exec(src)) !== null) keys.push(m[1]);
  return keys;
}

const moveNames = extractKeys(path.join(ROOT, "src/lib/engine/move-data.ts"));
const abilityNames = extractKeys(path.join(ROOT, "src/lib/engine/ability-data.ts"));
const itemNames = extractKeys(path.join(ROOT, "src/lib/engine/items.ts"));

console.log(`Moves: ${moveNames.length}, Abilities: ${abilityNames.length}, Items: ${itemNames.length}`);

// ── PokéAPI slug conversion ────────────────────────────────────────────

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/['']/g, "")       // Remove apostrophes (King's Rock → kings-rock)
    .replace(/\s+/g, "-")       // Spaces → hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove special chars
    .replace(/-+/g, "-");       // Collapse multiple hyphens
}

// Some names don't map cleanly to PokéAPI slugs
const MOVE_SLUG_OVERRIDES = {
  "Freeze-Dry": "freeze-dry",
  "Power-Up Punch": "power-up-punch",
  "Double-Edge": "double-edge",
  "Self-Destruct": "self-destruct",
  "Wake-Up Slap": "wake-up-slap",
  "X-Scissor": "x-scissor",
  "U-turn": "u-turn",
  "Will-O-Wisp": "will-o-wisp",
  "Trick-or-Treat": "trick-or-treat",
  "V-create": "v-create",
  "Baby-Doll Eyes": "baby-doll-eyes",
  "Lock-On": "lock-on",
  "Mud-Slap": "mud-slap",
};

const ABILITY_SLUG_OVERRIDES = {};
const ITEM_SLUG_OVERRIDES = {};

// ── Fetch helpers ──────────────────────────────────────────────────────

const BATCH_SIZE = 15;
const DELAY_MS = 250;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchFrenchName(endpoint, slug) {
  const url = `https://pokeapi.co/api/v2/${endpoint}/${slug}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const fr = data.names?.find(n => n.language.name === "fr");
    return fr?.name ?? null;
  } catch {
    return null;
  }
}

async function fetchBatch(endpoint, names, slugOverrides) {
  const result = {};
  const failed = [];

  for (let i = 0; i < names.length; i += BATCH_SIZE) {
    const batch = names.slice(i, i + BATCH_SIZE);
    const promises = batch.map(async (name) => {
      const slug = slugOverrides[name] ?? toSlug(name);
      const frName = await fetchFrenchName(endpoint, slug);
      if (frName) {
        result[name] = frName;
      } else {
        failed.push({ name, slug });
      }
    });
    await Promise.all(promises);
    const done = Math.min(i + BATCH_SIZE, names.length);
    process.stdout.write(`\r  ${endpoint}: ${done}/${names.length}`);
    if (i + BATCH_SIZE < names.length) await sleep(DELAY_MS);
  }

  console.log();
  return { result, failed };
}

// ── Main ───────────────────────────────────────────────────────────────

async function main() {
  console.log("\n🇫🇷 Fetching French game data from PokéAPI...\n");

  // Moves
  console.log("Fetching moves...");
  const moves = await fetchBatch("move", moveNames, MOVE_SLUG_OVERRIDES);
  if (moves.failed.length > 0) {
    console.log(`  ⚠ ${moves.failed.length} moves not found:`);
    moves.failed.forEach(f => console.log(`    - ${f.name} (slug: ${f.slug})`));
  }

  // Abilities
  console.log("Fetching abilities...");
  const abilities = await fetchBatch("ability", abilityNames, ABILITY_SLUG_OVERRIDES);
  if (abilities.failed.length > 0) {
    console.log(`  ⚠ ${abilities.failed.length} abilities not found:`);
    abilities.failed.forEach(f => console.log(`    - ${f.name} (slug: ${f.slug})`));
  }

  // Items
  console.log("Fetching items...");
  const items = await fetchBatch("item", itemNames, ITEM_SLUG_OVERRIDES);
  if (items.failed.length > 0) {
    console.log(`  ⚠ ${items.failed.length} items not found:`);
    items.failed.forEach(f => console.log(`    - ${f.name} (slug: ${f.slug})`));
  }

  // Sort and write
  const sortObj = (obj) => Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)));

  fs.writeFileSync(
    path.join(I18N_DIR, "moves.fr.json"),
    JSON.stringify(sortObj(moves.result), null, 2) + "\n"
  );
  console.log(`\n✅ Wrote ${Object.keys(moves.result).length} moves → src/lib/i18n/moves.fr.json`);

  fs.writeFileSync(
    path.join(I18N_DIR, "abilities.fr.json"),
    JSON.stringify(sortObj(abilities.result), null, 2) + "\n"
  );
  console.log(`✅ Wrote ${Object.keys(abilities.result).length} abilities → src/lib/i18n/abilities.fr.json`);

  fs.writeFileSync(
    path.join(I18N_DIR, "items.fr.json"),
    JSON.stringify(sortObj(items.result), null, 2) + "\n"
  );
  console.log(`✅ Wrote ${Object.keys(items.result).length} items → src/lib/i18n/items.fr.json`);
}

main().catch(console.error);
