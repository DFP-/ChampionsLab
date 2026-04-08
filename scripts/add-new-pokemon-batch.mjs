#!/usr/bin/env node
/**
 * Add 37 new Pokémon to the Champions roster.
 * Fetches from PokeAPI, uses move cache where available.
 * Handles mega forms for 8 Pokémon.
 * 
 * Run: node scripts/add-new-pokemon-batch.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');
const CACHE_FILE = path.join(__dirname, 'move-data-cache.json');

const BASE = 'https://pokeapi.co/api/v2';

// The 37 Pokémon to add
const NEW_IDS = [
  18, 24, 68, 168, 205, 308, 310, 319, 323, 354, 358, 362,
  405, 407, 409, 411, 454, 504, 510, 512, 514, 516, 563,
  579, 614, 671, 675, 683, 685, 695, 702, 713, 758, 766,
  841, 899, 939, 956
];

// Tier assignments for new Pokémon
const TIER_MAP = {
  18: "C",   // Pidgeot (has mega)
  24: "D",   // Arbok
  68: "B",   // Machamp
  168: "D",  // Ariados
  205: "C",  // Forretress
  308: "B",  // Medicham (has mega)
  310: "B",  // Manectric (has mega)
  319: "C",  // Sharpedo (has mega)
  323: "C",  // Camerupt (has mega)
  354: "C",  // Banette (has mega)
  358: "C",  // Chimecho (has mega)
  362: "C",  // Glalie (has mega)
  405: "C",  // Luxray
  407: "B",  // Roserade
  409: "C",  // Rampardos
  411: "C",  // Bastiodon
  454: "C",  // Toxicroak
  504: "D",  // Patrat
  510: "D",  // Liepard
  512: "D",  // Simisage
  514: "D",  // Simisear
  516: "D",  // Simipour
  563: "C",  // Cofagrigus
  579: "B",  // Reuniclus
  614: "D",  // Beartic
  671: "C",  // Florges
  675: "C",  // Pangoro
  683: "C",  // Aromatisse
  685: "D",  // Slurpuff
  695: "C",  // Heliolisk
  702: "D",  // Dedenne
  713: "C",  // Avalugg
  758: "C",  // Salazzle
  766: "C",  // Passimian
  841: "C",  // Flapple
  899: "B",  // Wyrdeer
  939: "C",  // Bellibolt
  956: "C",  // Espathra
};

// Mega evolution data for new Pokémon
const MEGA_DATA = {
  18: {
    name: "Mega Pidgeot", types: ["normal", "flying"],
    stats: { hp: 83, attack: 80, defense: 80, spAtk: 135, spDef: 80, speed: 121 },
    ability: "No Guard",
    abilityDesc: "All moves used by or against always hit.",
    isChampions: false
  },
  308: {
    name: "Mega Medicham", types: ["fighting", "psychic"],
    stats: { hp: 60, attack: 100, defense: 85, spAtk: 80, spDef: 85, speed: 100 },
    ability: "Pure Power",
    abilityDesc: "Doubles the Pokémon's Attack stat.",
    isChampions: false
  },
  310: {
    name: "Mega Manectric", types: ["electric"],
    stats: { hp: 70, attack: 75, defense: 80, spAtk: 135, spDef: 80, speed: 135 },
    ability: "Intimidate",
    abilityDesc: "Upon entering battle, lowers the opposing Pokémon's Attack stat.",
    isChampions: false
  },
  319: {
    name: "Mega Sharpedo", types: ["water", "dark"],
    stats: { hp: 70, attack: 140, defense: 70, spAtk: 110, spDef: 65, speed: 105 },
    ability: "Strong Jaw",
    abilityDesc: "The Pokémon's bite moves are powered up by 50%.",
    isChampions: false
  },
  323: {
    name: "Mega Camerupt", types: ["fire", "ground"],
    stats: { hp: 70, attack: 120, defense: 100, spAtk: 145, spDef: 105, speed: 20 },
    ability: "Sheer Force",
    abilityDesc: "Moves with secondary effects have 1.3× power but lose their secondary effects.",
    isChampions: false
  },
  354: {
    name: "Mega Banette", types: ["ghost"],
    stats: { hp: 64, attack: 165, defense: 75, spAtk: 93, spDef: 83, speed: 75 },
    ability: "Prankster",
    abilityDesc: "Status moves gain +1 priority.",
    isChampions: false
  },
  358: {
    name: "Mega Chimecho", types: ["psychic", "steel"],
    stats: { hp: 75, attack: 50, defense: 110, spAtk: 135, spDef: 120, speed: 65 },
    ability: "Levitate",
    abilityDesc: "Gives immunity to Ground-type moves.",
    isChampions: false
  },
  362: {
    name: "Mega Glalie", types: ["ice"],
    stats: { hp: 80, attack: 120, defense: 80, spAtk: 120, spDef: 80, speed: 100 },
    ability: "Refrigerate",
    abilityDesc: "Normal-type moves become Ice-type and gain a 20% power boost.",
    isChampions: false
  },
};

// homeSource data based on game availability
const HOME_SOURCES = {
  18: ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO", "Let's Go"],
  24: ["Legends Z-A", "BDSP", "Pokémon GO", "Let's Go"],
  68: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
  168: ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  205: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
  308: ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  310: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  319: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  323: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  354: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  358: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  362: ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  405: ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  407: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
  409: ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  411: ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  454: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
  504: ["Legends Z-A", "Pokémon GO"],
  510: ["Legends Z-A", "Pokémon GO"],
  512: ["Legends Z-A", "Pokémon GO"],
  514: ["Legends Z-A", "Pokémon GO"],
  516: ["Legends Z-A", "Pokémon GO"],
  563: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  579: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  614: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  671: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  675: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  683: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  685: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  695: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  702: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  713: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  758: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  766: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  841: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  899: ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
  939: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  956: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
};

// --- Utility ---
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function prettifyName(rawName) {
  const special = {
    "kommo-o": "Kommo-o",
    "mr-mime": "Mr. Mime",
    "mr-rime": "Mr. Rime",
    "ho-oh": "Ho-Oh",
    "mime-jr": "Mime Jr.",
  };
  if (special[rawName]) return special[rawName];
  return rawName.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function prettifyMoveName(raw) {
  return raw.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function mapCategory(dc) {
  if (dc === "physical") return "physical";
  if (dc === "special") return "special";
  return "status";
}

function romanToInt(s) {
  const map = { i: 1, v: 5, x: 10 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]] || 0;
    const next = map[s[i + 1]] || 0;
    result += curr < next ? -curr : curr;
  }
  return result;
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

// --- Move cache ---
let moveCache = {};
let moveCacheDirty = false;
try {
  moveCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
} catch { /* empty cache */ }

// Global move detail cache (move name → move data)
const moveDetailCache = {};

async function fetchMoveDetail(moveUrl) {
  const name = moveUrl.split('/').filter(Boolean).pop();
  if (moveDetailCache[name]) return moveDetailCache[name];
  
  const data = await fetchJSON(moveUrl);
  const enEntry = data.flavor_text_entries?.find(e => e.language.name === 'en');
  const detail = {
    name: prettifyMoveName(data.name),
    type: data.type.name,
    category: mapCategory(data.damage_class.name),
    power: data.power,
    accuracy: data.accuracy,
    pp: data.pp,
    description: enEntry ? enEntry.flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' ').replace(/\s+/g, ' ').trim() : '',
  };
  moveDetailCache[name] = detail;
  return detail;
}

async function fetchMovesForPokemon(pokemonData, id) {
  // Check cache first
  if (moveCache[id]) {
    console.log(`    📦 Using cached moves (${moveCache[id].length} moves)`);
    return moveCache[id];
  }

  // Get all learnable moves (level-up + TM + tutor + egg)
  const movesToFetch = pokemonData.moves.filter(m => {
    return m.version_group_details.some(d =>
      ['level-up', 'machine', 'tutor', 'egg'].includes(d.move_learn_method.name)
    );
  });

  console.log(`    🔍 Fetching ${movesToFetch.length} moves from PokeAPI...`);
  const moves = [];
  let count = 0;

  for (const m of movesToFetch) {
    try {
      const detail = await fetchMoveDetail(m.move.url);
      moves.push(detail);
      count++;
      if (count % 10 === 0) process.stdout.write(`    ${count}/${movesToFetch.length}\r`);
      await sleep(60);
    } catch (e) {
      // skip failed moves
    }
  }

  // Sort: damaging moves by power desc, then status moves
  moves.sort((a, b) => {
    const aStatus = a.category === 'status' ? 1 : 0;
    const bStatus = b.category === 'status' ? 1 : 0;
    if (aStatus !== bStatus) return aStatus - bStatus;
    if (a.category !== 'status' && b.category !== 'status') {
      return (b.power || 0) - (a.power || 0);
    }
    return 0;
  });

  // Deduplicate by name
  const seen = new Set();
  const unique = moves.filter(m => {
    if (seen.has(m.name)) return false;
    seen.add(m.name);
    return true;
  });

  // Cache the result
  moveCache[id] = unique;
  moveCacheDirty = true;

  return unique;
}

async function fetchPokemon(id) {
  const data = await fetchJSON(`${BASE}/pokemon/${id}`);
  const speciesData = await fetchJSON(data.species.url);

  const types = data.types
    .sort((a, b) => a.slot - b.slot)
    .map(t => t.type.name);

  const stats = {};
  for (const s of data.stats) {
    switch (s.stat.name) {
      case 'hp': stats.hp = s.base_stat; break;
      case 'attack': stats.attack = s.base_stat; break;
      case 'defense': stats.defense = s.base_stat; break;
      case 'special-attack': stats.spAtk = s.base_stat; break;
      case 'special-defense': stats.spDef = s.base_stat; break;
      case 'speed': stats.speed = s.base_stat; break;
    }
  }

  const abilities = data.abilities
    .sort((a, b) => a.slot - b.slot)
    .map(a => {
      const name = prettifyName(a.ability.name);
      return {
        name,
        description: '',
        isHidden: a.is_hidden,
      };
    });

  // Fetch ability descriptions
  for (const ab of abilities) {
    try {
      const abilitySlug = ab.name.toLowerCase().replace(/ /g, '-');
      const abData = await fetchJSON(`${BASE}/ability/${abilitySlug}`);
      const enEntry = abData.flavor_text_entries?.find(e =>
        e.language.name === 'en'
      );
      if (enEntry) {
        ab.description = enEntry.flavor_text
          .replace(/\n/g, ' ').replace(/\f/g, ' ').replace(/\s+/g, ' ').trim();
      }
      await sleep(60);
    } catch {
      // keep empty description
    }
  }

  const moves = await fetchMovesForPokemon(data, id);

  const gen = speciesData.generation.url.split('/').filter(Boolean).pop();
  const genNum = romanToInt(gen.replace('generation-', ''));

  const name = prettifyName(data.name);

  // Build mega form if available
  const forms = [];
  const mega = MEGA_DATA[id];
  if (mega) {
    forms.push({
      name: mega.name,
      sprite: `/sprites/oa-10${id}.png`,
      types: mega.types,
      baseStats: mega.stats,
      abilities: [{
        name: mega.ability,
        description: mega.abilityDesc,
        isChampions: mega.isChampions,
      }],
      isMega: true,
    });
  }

  return {
    id,
    name,
    dexNumber: id,
    types,
    baseStats: stats,
    abilities,
    moves,
    sprite: `/sprites/${id}.png`,
    officialArt: `/sprites/${id}.png`,
    generation: genNum,
    forms,
    hasMega: forms.length > 0,
    recruitmentCost: null,
    homeCompatible: true,
    homeSource: HOME_SOURCES[id] || ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    season: 1,
    tier: TIER_MAP[id] || "C",
    usageRate: null,
  };
}

async function main() {
  console.log(`\n📋 Adding ${NEW_IDS.length} new Pokémon to the roster\n`);

  const results = [];
  for (let i = 0; i < NEW_IDS.length; i++) {
    const id = NEW_IDS[i];
    process.stdout.write(`[${i + 1}/${NEW_IDS.length}] #${id}... `);
    try {
      const mon = await fetchPokemon(id);
      results.push(mon);
      console.log(`✅ ${mon.name} (${mon.moves.length} moves${mon.hasMega ? ', has mega' : ''})`);
      await sleep(100);
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
    }
  }

  // Save updated move cache
  if (moveCacheDirty) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(moveCache, null, 2), 'utf8');
    console.log(`\n💾 Updated move cache`);
  }

  // Read current pokemon-data.ts
  let src = fs.readFileSync(DATA_FILE, 'utf8');

  // Insert each new Pokémon in the right position (sorted by dex number)
  // Strategy: find the entry BEFORE and AFTER this dex number, insert between
  let inserted = 0;
  for (const mon of results.sort((a, b) => b.dexNumber - a.dexNumber)) {
    // Reverse order so indices don't shift
    const entryJSON = JSON.stringify(mon, null, 2)
      .split('\n')
      .map((line, i) => i === 0 ? '  ' + line : '  ' + line)
      .join('\n');

    // Find the right insertion point: after the entry with the largest dex < this one
    // Search for all "id": N patterns and find where to insert
    const dex = mon.dexNumber;
    
    // Find the entry whose dexNumber is just less than this one
    // We search for "id": followed by the next higher dex number
    let insertIdx = -1;
    
    // Find all entries and their positions
    const regex = /\n  \{\n    "id": (\d+),/g;
    let match;
    let lastPos = -1;
    let lastId = -1;
    
    while ((match = regex.exec(src)) !== null) {
      const entryId = parseInt(match[1]);
      if (entryId > dex && lastId < dex && lastId !== -1) {
        // Insert before this entry
        insertIdx = match.index;
        break;
      }
      lastPos = match.index;
      lastId = entryId;
    }
    
    // If no entry found after (append at end), find closing bracket
    if (insertIdx === -1 && lastId < dex) {
      // Find the end of the last entry (before the final ]);)
      const closingIdx = src.lastIndexOf('\n];');
      if (closingIdx !== -1) {
        insertIdx = closingIdx;
      }
    }
    
    if (insertIdx === -1) {
      console.log(`⚠️  Could not find insertion point for #${dex} ${mon.name}`);
      continue;
    }

    // Insert the new entry
    src = src.slice(0, insertIdx) + ',\n' + entryJSON + src.slice(insertIdx);
    inserted++;
  }

  fs.writeFileSync(DATA_FILE, src, 'utf8');
  console.log(`\n✅ Inserted ${inserted} / ${results.length} new Pokémon into pokemon-data.ts`);
}

main().catch(console.error);
