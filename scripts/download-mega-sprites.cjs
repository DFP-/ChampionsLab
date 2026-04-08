const https = require('https');
const fs = require('fs');
const path = require('path');

const spritesDir = path.join(__dirname, '..', 'public', 'sprites');

// PokeAPI HOME sprite base URL
const HOME_BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/';
// PokeAPI official artwork base URL  
const OA_BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

// All mega forms with their PokeAPI form IDs
// Format: [filename, pokeapi_form_id]
const MEGA_SPRITES = [
  // Standard megas with PokeAPI IDs
  ['10033.png', 10033],  // Mega Venusaur
  ['10034.png', 10034],  // Mega Charizard X
  ['10035.png', 10035],  // Mega Charizard Y
  ['10036.png', 10036],  // Mega Blastoise
  ['10090.png', 10090],  // Mega Beedrill
  ['10037.png', 10037],  // Mega Alakazam
  ['10071.png', 10071],  // Mega Slowbro
  ['10038.png', 10038],  // Mega Gengar
  ['10039.png', 10039],  // Mega Kangaskhan
  ['10040.png', 10040],  // Mega Pinsir
  ['10041.png', 10041],  // Mega Gyarados
  ['10042.png', 10042],  // Mega Aerodactyl
  ['10045.png', 10045],  // Mega Ampharos
  ['10072.png', 10072],  // Mega Steelix
  ['10046.png', 10046],  // Mega Scizor
  ['10047.png', 10047],  // Mega Heracross
  ['10048.png', 10048],  // Mega Houndoom
  ['10049.png', 10049],  // Mega Tyranitar
  ['10051.png', 10051],  // Mega Gardevoir
  ['10066.png', 10066],  // Mega Sableye
  ['10053.png', 10053],  // Mega Aggron
  ['10067.png', 10067],  // Mega Altaria
  ['10057.png', 10057],  // Mega Absol
  ['10076.png', 10076],  // Mega Metagross
  ['10088.png', 10088],  // Mega Lopunny
  ['10058.png', 10058],  // Mega Garchomp
  ['10059.png', 10059],  // Mega Lucario
  ['10060.png', 10060],  // Mega Abomasnow
  ['10068.png', 10068],  // Mega Gallade
  ['10069.png', 10069],  // Mega Audino
  // Mega Pidgeot - file referenced as oa-1018.png but PokeAPI ID is 10073
  ['oa-1018.png', 10073], // Mega Pidgeot
];

// Champions-exclusive megas (no PokeAPI form) - use official artwork of base
const CHAMPIONS_MEGAS = [
  // These need unique art - will use Sugimori/official art style
  ['oa-10358.png', 358],  // Mega Chimecho (base dex 358)
  ['oa-10623.png', 623],  // Mega Golurk (base dex 623)
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const follow = (url, redirects = 0) => {
      if (redirects > 5) return reject(new Error('Too many redirects'));
      const mod = url.startsWith('https') ? https : require('http');
      mod.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return follow(res.headers.location, redirects + 1);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => { stream.close(); resolve(); });
        stream.on('error', reject);
      }).on('error', reject);
    };
    follow(url);
  });
}

async function downloadAll() {
  console.log('Downloading mega sprites from PokeAPI HOME...\n');
  
  let success = 0, failed = 0;
  
  for (const [filename, formId] of MEGA_SPRITES) {
    const dest = path.join(spritesDir, filename);
    // Try HOME sprite first, fall back to official artwork
    const homeUrl = `${HOME_BASE}${formId}.png`;
    const oaUrl = `${OA_BASE}${formId}.png`;
    
    process.stdout.write(`  ${filename} (form ${formId})... `);
    try {
      await download(homeUrl, dest);
      const size = fs.statSync(dest).size;
      console.log(`HOME OK (${(size/1024).toFixed(1)}KB)`);
      success++;
    } catch (e1) {
      // Try official artwork
      try {
        await download(oaUrl, dest);
        const size = fs.statSync(dest).size;
        console.log(`OA OK (${(size/1024).toFixed(1)}KB)`);
        success++;
      } catch (e2) {
        console.log(`FAILED: ${e1.message}`);
        failed++;
      }
    }
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 200));
  }
  
  // For Champions-exclusive megas, try to get a different art source
  // Use Serebii or other sources for unique mega art
  console.log('\nChampions-exclusive megas (need unique art):');
  for (const [filename, baseDex] of CHAMPIONS_MEGAS) {
    const dest = path.join(spritesDir, filename);
    // Try Serebii mega art
    const serebiiUrl = `https://www.serebii.net/pokemonchampions/pokemon/${baseDex}-m.png`;
    const serebiiUrl2 = `https://www.serebii.net/pokemonchampions/pokemon/${baseDex}.png`;
    
    process.stdout.write(`  ${filename} (dex ${baseDex})... `);
    try {
      await download(serebiiUrl, dest);
      const size = fs.statSync(dest).size;
      if (size > 1000) {
        console.log(`Serebii mega OK (${(size/1024).toFixed(1)}KB)`);
        success++;
      } else {
        throw new Error('Too small');
      }
    } catch (e1) {
      // Try alternative Serebii paths
      try {
        const altUrl = `https://www.serebii.net/pokemonchampions/mega/${baseDex}.png`;
        await download(altUrl, dest);
        const size = fs.statSync(dest).size;
        if (size > 1000) {
          console.log(`Serebii alt OK (${(size/1024).toFixed(1)}KB)`);
          success++;
        } else {
          throw new Error('Too small');
        }
      } catch (e2) {
        // Last resort: use shiny/different art from PokeAPI 
        try {
          const shinyUrl = `${HOME_BASE}shiny/${baseDex}.png`;
          await download(shinyUrl, dest);
          const size = fs.statSync(dest).size;
          console.log(`Shiny variant OK (${(size/1024).toFixed(1)}KB) - NEEDS MANUAL REPLACEMENT`);
          success++;
        } catch(e3) {
          console.log(`FAILED - needs manual art`);
          failed++;
        }
      }
    }
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`\nDone: ${success} downloaded, ${failed} failed`);
}

downloadAll().catch(console.error);
