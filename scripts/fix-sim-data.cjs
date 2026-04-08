// Fix: move simulation entries from SIM_META to SIM_POKEMON
const fs = require('fs');
const path = require('path');

const simPath = path.join(__dirname, '..', 'src', 'lib', 'simulation-data.ts');
let content = fs.readFileSync(simPath, 'utf8');

// Find the misplaced data: everything between "bestCores": [...] and the closing }; of SIM_META
// The wrong data starts with "18": { after bestCores
const bestCoresEnd = content.indexOf('"Heat Rotom + Tsareena"\n  ]');
if (bestCoresEnd === -1) { console.error('Cannot find bestCores end'); process.exit(1); }

// The wrong entries start right after ]
const afterBestCores = content.indexOf('\n', bestCoresEnd + 25);
const wrongDataStart = afterBestCores + 1; // Start of the wrongly placed entries

// Find where SIM_META's }; should be (it's now moved way down)
// The wrong data ends at the }; that closes SIM_META
// Look for "\n};\n\n/** Total battles simulated */"
const totalBattlesMarker = '/** Total battles simulated */';
const totalBattlesIdx = content.indexOf(totalBattlesMarker);
if (totalBattlesIdx === -1) { console.error('Cannot find total battles marker'); process.exit(1); }

// The }; before this
const closingBrace = content.lastIndexOf('};', totalBattlesIdx);
// Find the actual }; that should close SIM_META
// Everything between wrongDataStart and closingBrace is the misplaced data

const wrongData = content.substring(wrongDataStart, closingBrace);

// Now we need to extract just the JSON entries from wrongData
// They look like:  "18": { ... },
const entries = wrongData.match(/^\s+"[\d-]+": \{[\s\S]*?\n\s+\},?/gm);

if (!entries) { console.error('No entries found in wrong data'); process.exit(1); }
console.log('Found', entries.length, 'misplaced entries to move');

// Remove the wrong data from SIM_META
// Replace from wrongDataStart to the line before };
// The SIM_META should end with: bestCores: [...]\n};
const cleanedContent = content.substring(0, wrongDataStart) + content.substring(closingBrace);

// Now find where SIM_POKEMON ends and insert the entries there
// SIM_POKEMON ends with:  }\n};\n\n/** Best core pairs
const simPokemonEnd = cleanedContent.indexOf('};\n\n/** Best core pairs');
if (simPokemonEnd === -1) { console.error('Cannot find SIM_POKEMON end'); process.exit(1); }

// Insert entries before the closing };
// We need a comma after the last existing entry
const insertPoint = simPokemonEnd;
const entryBlock = ',\n' + entries.join(',\n') + '\n';

const finalContent = cleanedContent.substring(0, insertPoint) + entryBlock + cleanedContent.substring(insertPoint);

fs.writeFileSync(simPath, finalContent);
console.log('Fixed simulation-data.ts - moved entries to SIM_POKEMON');
