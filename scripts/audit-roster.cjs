const fs = require('fs');
const src = fs.readFileSync('src/lib/pokemon-data.ts','utf8');

// Use regex to extract the POKEMON_SEED array
const seedMatch = src.match(/export const POKEMON_SEED[^=]*=\s*(\[[\s\S]*?\n\];)/);
if (!seedMatch) { console.error('Could not find POKEMON_SEED'); process.exit(1); }
const jsonStr = seedMatch[1].slice(0, -1); // remove trailing ;
const data = JSON.parse(jsonStr);
console.log('Total entries:', data.length);

// Check for entries missing critical fields
const issues = [];
data.forEach(p => {
  const missing = [];
  if (!p.sprite) missing.push('sprite');
  if (p.season === undefined) missing.push('season');
  if (p.generation === undefined) missing.push('generation');
  if (!p.homeCompatible && p.homeCompatible !== true) missing.push('homeCompatible');
  if (p.tier === undefined) missing.push('tier');
  if (missing.length > 0) issues.push({ id: p.id, name: p.name, missing });
});
if (issues.length === 0) console.log('ALL entries have sprite, season, generation, homeCompatible, tier');
else issues.forEach(i => console.log('ISSUE:', i.name, '(id:' + i.id + ') missing:', i.missing.join(', ')));

// Regional forms check
const regionals = data.filter(p => p.name.includes('Hisuian') || p.name.includes('Galarian') || p.name.includes('Alolan'));
console.log('\nRegional forms:', regionals.length);
regionals.forEach(r => console.log('  ' + r.id + ' ' + r.name + ' season:' + r.season + ' sprite:' + (r.sprite ? 'YES' : 'NO')));

// Serebii dex numbers (from the page)
const serebiiDex = [3,6,9,15,25,26,36,38,59,65,71,80,94,115,121,127,130,132,134,135,136,142,143,149,154,157,160,181,184,186,196,197,199,208,212,214,227,229,248,279,282,302,306,324,334,350,359,376,389,392,395,428,442,445,448,450,460,461,464,470,471,472,475,478,479,497,500,503,530,531,534,547,553,569,571,584,587,618,623,635,637,652,655,658,660,663,666,676,678,681,693,697,699,700,701,707,711,715,724,727,730,733,740,745,748,750,752,763,765,778,780,784,823,844,855,858,866,867,869,877,887,900,901,902,903,908,914,923,925,934,936,937,952,959,964,968,970,977,978,981,983,1013,1018,1019];

const ourDex = [...new Set(data.map(p => p.dexNumber))].sort((a,b) => a-b);

const missingFromUs = serebiiDex.filter(d => !ourDex.includes(d));
const extraInUs = ourDex.filter(d => !serebiiDex.includes(d));

console.log('\nSerebii has', serebiiDex.length, 'unique dex numbers');
console.log('We have', ourDex.length, 'unique dex numbers');
console.log('\nMissing from us:', missingFromUs.length > 0 ? missingFromUs.join(', ') : 'NONE');
console.log('Extra in us:', extraInUs.length > 0 ? extraInUs.join(', ') : 'NONE');

// Serebii regional forms (entries with duplicate dex numbers on Serebii)
// These are: 26 (Alolan Raichu), 38 (Alolan Ninetales), 59 (Hisuian Arcanine), 
// 80 (Galarian Slowbro), 157 (Hisuian Typhlosion), 199 (Galarian Slowking), 
// 503 (Hisuian Samurott), 571 (Hisuian Zoroark), 618 (Galarian Stunfisk), 724 (Hisuian Decidueye)
const serebiiRegionalDex = [26, 38, 59, 80, 157, 199, 503, 571, 618, 724];
console.log('\nSerebii regional form dex numbers:', serebiiRegionalDex.join(', '));
const ourRegionalNames = regionals.map(r => r.name);
console.log('Our regional forms:', ourRegionalNames.join(', '));

// Check all entry names for display on homepage
console.log('\n--- Full roster (name, id, dexNumber) ---');
data.forEach(p => console.log(p.id + '\t' + p.dexNumber + '\t' + p.name));
