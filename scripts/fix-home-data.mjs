import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src/lib/pokemon-data.ts");

// Fetch a pokedex and return the set of species IDs in it
async function fetchDex(url) {
  const res = await fetch(url);
  const data = await res.json();
  const ids = new Set();
  for (const entry of data.pokemon_entries || []) {
    const speciesId = parseInt(entry.pokemon_species.url.split("/").filter(Boolean).pop());
    if (!isNaN(speciesId)) ids.add(speciesId);
  }
  console.log(`  ${data.name}: ${ids.size} Pokémon`);
  return ids;
}

async function main() {
  console.log("Fetching Pokédex data from PokeAPI...\n");

  // Fetch all relevant pokedex endpoints
  const [lgpe, galar, armor, tundra, hisui, paldea, kitakami, blueberry] = await Promise.all([
    fetchDex("https://pokeapi.co/api/v2/pokedex/26/"), // updated-kanto (LGPE)
    fetchDex("https://pokeapi.co/api/v2/pokedex/27/"), // galar
    fetchDex("https://pokeapi.co/api/v2/pokedex/28/"), // isle-of-armor
    fetchDex("https://pokeapi.co/api/v2/pokedex/29/"), // crown-tundra
    fetchDex("https://pokeapi.co/api/v2/pokedex/30/"), // hisui
    fetchDex("https://pokeapi.co/api/v2/pokedex/31/"), // paldea
    fetchDex("https://pokeapi.co/api/v2/pokedex/32/"), // kitakami
    fetchDex("https://pokeapi.co/api/v2/pokedex/33/"), // blueberry
  ]);

  // Combine SWSH = galar + IoA + CT
  const swsh = new Set([...galar, ...armor, ...tundra]);
  // Combine SV = paldea + kitakami + blueberry
  const sv = new Set([...paldea, ...kitakami, ...blueberry]);

  // BDSP = Gen 1-4 national dex (1-493)
  const bdsp = new Set();
  for (let i = 1; i <= 493; i++) bdsp.add(i);

  // Pokémon GO: Gen 1-8 (essentially all released Pokémon)
  const goMaxGen8 = 905; // Last Gen 8 Pokémon

  console.log(`\nCombined sets:`);
  console.log(`  SV (Paldea+DLC): ${sv.size}`);
  console.log(`  SWSH (Galar+DLC): ${swsh.size}`);
  console.log(`  BDSP (Gen 1-4): ${bdsp.size}`);
  console.log(`  Hisui (LA): ${hisui.size}`);
  console.log(`  LGPE: ${lgpe.size}`);

  // Read our data file and extract IDs
  let content = fs.readFileSync(DATA_FILE, "utf-8");
  const idMatches = [...content.matchAll(/"id":\s*(\d+)/g)];
  const ids = [...new Set(idMatches.map(m => parseInt(m[1])))];
  console.log(`\nProcessing ${ids.length} Pokémon in our roster:\n`);

  const gameMap = {};
  for (const id of ids) {
    const games = [];

    // SV — all Champions roster Pokémon are in SV
    games.push("Scarlet/Violet");

    // Legends Z-A — Champions 2026 game, all roster eligible
    games.push("Legends Z-A");

    // SWSH
    if (swsh.has(id)) games.push("Sword/Shield");

    // BDSP
    if (bdsp.has(id)) games.push("BDSP");

    // Legends: Arceus
    if (hisui.has(id)) games.push("Legends: Arceus");

    // Pokémon GO
    if (id <= goMaxGen8) games.push("Pokémon GO");

    // Let's Go
    if (lgpe.has(id)) games.push("Let's Go");

    gameMap[id] = games;
    console.log(`  #${String(id).padStart(4)} → ${games.join(", ")}`);
  }

  // Now update homeSource in the data file
  let updated = 0;
  for (const [id, games] of Object.entries(gameMap)) {
    const escapedGames = games.map(g => `"${g}"`).join(", ");
    const regex = new RegExp(
      `("id":\\s*${id},[\\s\\S]*?"homeSource":\\s*)\\[[^\\]]*\\]`
    );
    if (regex.test(content)) {
      content = content.replace(regex, `$1[${escapedGames}]`);
      updated++;
    }
  }

  // Set all recruitmentCost to null
  content = content.replace(/"recruitmentCost":\s*\d+/g, '"recruitmentCost": null');

  // Set all usageRate to null
  content = content.replace(/"usageRate":\s*[\d.]+/g, '"usageRate": null');

  fs.writeFileSync(DATA_FILE, content);
  console.log(`\nDone! Updated homeSource for ${updated} Pokémon.`);
  console.log(`Set all recruitmentCost to null.`);
  console.log(`Set all usageRate to null.`);
}

main().catch(console.error);
