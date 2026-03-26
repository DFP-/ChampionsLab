import fs from 'fs';

// PokeAPI Mega form IDs for HOME sprites
const MEGA_FORM_IDS = {
  'Mega Venusaur': 10033,
  'Mega Charizard X': 10034,
  'Mega Charizard Y': 10035,
  'Mega Blastoise': 10036,
  'Mega Gengar': 10039,
  'Mega Kangaskhan': 10040,
  'Mega Pinsir': 10041,
  'Mega Gyarados': 10042,
  'Mega Ampharos': 10045,
  'Mega Scizor': 10046,
  'Mega Heracross': 10047,
  'Mega Houndoom': 10048,
  'Mega Tyranitar': 10049,
  'Mega Gardevoir': 10051,
  'Mega Altaria': 10067,
  'Mega Absol': 10057,
  'Mega Metagross': 10076,
  'Mega Garchomp': 10058,
  'Mega Lucario': 10059,
  'Mega Audino': 10069,
};

let data = fs.readFileSync('src/lib/pokemon-data.ts', 'utf-8');
let count = 0;

for (const [name, formId] of Object.entries(MEGA_FORM_IDS)) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(
    '("name":\\s*"' + escaped + '"[\\s\\S]*?"sprite":\\s*")https://raw\\.githubusercontent\\.com/PokeAPI/sprites/master/sprites/pokemon/other/home/\\d+\\.png(")',
  );
  const match = data.match(regex);
  if (match) {
    data = data.replace(regex, '$1https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + formId + '.png$2');
    console.log(`  ✓ ${name} → ${formId}`);
    count++;
  } else {
    console.log(`  ✗ ${name} not found`);
  }
}

fs.writeFileSync('src/lib/pokemon-data.ts', data, 'utf-8');
console.log(`\nFixed ${count} Mega sprite URLs`);
