const fs = require("fs");
const src = fs.readFileSync("src/lib/pokemon-data.ts", "utf8");

// Use regex on entire source to find all hasMega: true with their preceding id
const megaIds = [];
const re = /["\u201c]id["\u201d]:\s*(\d+)[\s\S]*?["\u201c]hasMega["\u201d]:\s*(true|false)/g;
let m;
while ((m = re.exec(src)) !== null) {
  if (m[2] === "true") {
    megaIds.push(parseInt(m[1]));
  }
}
console.log("Count:", megaIds.length);
console.log("IDs:", JSON.stringify(megaIds.sort((a, b) => a - b)));

const valid = new Set([460,359,142,306,65,334,181,531,354,15,9,323,609,6,652,358,36,740,655,149,780,500,530,160,670,478,475,445,282,94,362,970,623,658,130,701,214,229,115,428,448,310,308,154,678,18,127,302,212,952,319,227,80,121,208,248,3,71]);
const noStone = megaIds.filter(id => !valid.has(id));
console.log("No stone:", JSON.stringify(noStone));
const missingMega = [...valid].filter(id => !megaIds.includes(id)).sort((a,b)=>a-b);
console.log("Has stone but no mega entry:", JSON.stringify(missingMega));
