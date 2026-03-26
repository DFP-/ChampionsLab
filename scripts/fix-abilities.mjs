import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src/lib/pokemon-data.ts");

async function fetchAbilityDescription(name) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${slug}`);
    if (!res.ok) return "";
    const data = await res.json();
    const en = data.effect_entries?.find((e) => e.language.name === "en");
    if (en?.short_effect) return en.short_effect;
    // Fallback to flavor text
    const flavor = data.flavor_text_entries?.find((e) => e.language.name === "en");
    return flavor?.flavor_text?.replace(/\n/g, " ") || "";
  } catch {
    return "";
  }
}

async function main() {
  let content = fs.readFileSync(DATA_FILE, "utf-8");

  // Find all unique ability names with empty descriptions
  const abilityRegex = /"name":\s*"([^"]+)",\s*\n\s*"description":\s*"",/g;
  const abilities = new Set();
  let match;
  while ((match = abilityRegex.exec(content)) !== null) {
    abilities.add(match[1]);
  }

  console.log(`Found ${abilities.size} abilities with empty descriptions`);

  // Fetch descriptions
  const descMap = {};
  let i = 0;
  for (const name of abilities) {
    i++;
    const desc = await fetchAbilityDescription(name);
    descMap[name] = desc;
    if (desc) {
      console.log(`[${i}/${abilities.size}] ${name}: ${desc.substring(0, 60)}...`);
    } else {
      console.log(`[${i}/${abilities.size}] ${name}: (no description found)`);
    }
    // Rate limit
    if (i % 5 === 0) await new Promise((r) => setTimeout(r, 200));
  }

  // Replace in file
  let replacements = 0;
  for (const [name, desc] of Object.entries(descMap)) {
    if (!desc) continue;
    // Escape for JSON string
    const safeDesc = desc.replace(/"/g, '\\"').replace(/\\/g, "\\\\");
    const pattern = new RegExp(
      `"name":\\s*"${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*\\n(\\s*)"description":\\s*""`,
      "g"
    );
    const replacement = `"name": "${name}",\n$1"description": "${safeDesc}"`;
    const before = content;
    content = content.replace(pattern, replacement);
    if (content !== before) replacements++;
  }

  fs.writeFileSync(DATA_FILE, content);
  console.log(`\nUpdated ${replacements} ability descriptions`);
}

main();
