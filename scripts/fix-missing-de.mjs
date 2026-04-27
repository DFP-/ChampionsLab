import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(__dirname, "..", "src/lib/i18n");

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(I18N_DIR, file), "utf-8"));
}

function writeJson(file, data) {
  const sorted = Object.fromEntries(Object.entries(data).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(path.join(I18N_DIR, file), JSON.stringify(sorted, null, 2) + "\n");
}

// Missing item names
const missingItemNames = {
  "Victreebelite": "Sarzenianit",
  "Clefablite": "Pixinit",
  "Skarmoryite": "Panzaeronit",
  "Dragonitite": "Dragorannit",
  "Starminite": "Starmienit",
  "Feraligatrite": "Impergatornit",
  "Meganiumite": "Meganienit",
  "Absolite Z": "Absolnit Z",
  "Chimechite": "Palimpalimnit",
  "Excadrite": "Stalobornit",
  "Lucarionite Z": "Lucarionit Z",
  "Chesnaughtite": "Brigaronnit",
  "Delphoxite": "Fennexisnit",
  "Froslassite": "Frosdedjenit",
  "Emboarite": "Flambirexnit",
  "Garchompite Z": "Knakracknit Z",
  "Chandelurite": "Skelabranit",
  "Crabominite": "Krawellnit",
  "Greninjite": "Quajutsunit",
  "Raichunite Y": "Raichunit Y",
  "Drampite": "Senlongnit",
  "Glimmorite": "Lumifloranit",
  "Floettite": "Floettenit",
  "Kommonium Z": "Kommonium Z",
  "Meowsticite": "Psiaugonit",
  "Scovillainite": "Halupenjonit",
  "Golurkite": "Golgantesnit",
  "Hawluchite": "Resladeronit",
  "Raichunite X": "Raichunit X",
  "Tatsugirite": "Nigiraginit",
};

// Missing item descriptions
const missingItemDescs = {
  "Victreebelite": "Einer der mysteriösen Mega-Steine. Wird er von einem Sarzenia getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Clefablite": "Einer der mysteriösen Mega-Steine. Wird er von einem Pixi getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Skarmoryite": "Einer der mysteriösen Mega-Steine. Wird er von einem Panzaeron getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Dragonitite": "Einer der mysteriösen Mega-Steine. Wird er von einem Dragoran getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Starminite": "Einer der mysteriösen Mega-Steine. Wird er von einem Starmie getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Feraligatrite": "Einer der mysteriösen Mega-Steine. Wird er von einem Impergator getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Meganiumite": "Einer der mysteriösen Mega-Steine. Wird er von einem Meganie getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Absolite Z": "Einer der mysteriösen Mega-Steine. Wird er von einem Absol getragen, kann es im Kampf zu Mega-Absol Z mega-entwickeln.",
  "Chimechite": "Einer der mysteriösen Mega-Steine. Wird er von einem Palimpalim getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Excadrite": "Einer der mysteriösen Mega-Steine. Wird er von einem Stalobor getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Lucarionite Z": "Einer der mysteriösen Mega-Steine. Wird er von einem Lucario getragen, kann es im Kampf zu Mega-Lucario Z mega-entwickeln.",
  "Chesnaughtite": "Einer der mysteriösen Mega-Steine. Wird er von einem Brigaron getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Delphoxite": "Einer der mysteriösen Mega-Steine. Wird er von einem Fennexis getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Froslassite": "Einer der mysteriösen Mega-Steine. Wird er von einem Frosdedje getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Emboarite": "Einer der mysteriösen Mega-Steine. Wird er von einem Flambirex getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Garchompite Z": "Einer der mysteriösen Mega-Steine. Wird er von einem Knakrack getragen, kann es im Kampf zu Mega-Knakrack Z mega-entwickeln.",
  "Chandelurite": "Einer der mysteriösen Mega-Steine. Wird er von einem Skelabra getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Crabominite": "Einer der mysteriösen Mega-Steine. Wird er von einem Krawell getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Greninjite": "Einer der mysteriösen Mega-Steine. Wird er von einem Quajutsu getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Raichunite Y": "Einer der mysteriösen Mega-Steine. Wird er von einem Raichu getragen, kann es im Kampf zu Mega-Raichu Y mega-entwickeln.",
  "Drampite": "Einer der mysteriösen Mega-Steine. Wird er von einem Sen-Long getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Glimmorite": "Einer der mysteriösen Mega-Steine. Wird er von einem Lumiflora getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Floettite": "Einer der mysteriösen Mega-Steine. Wird er von einem Floette getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Kommonium Z": "Ermöglicht Grandiras, die Attacke Schallende Seele zu verwenden.",
  "Meowsticite": "Einer der mysteriösen Mega-Steine. Wird er von einem Psiaugon getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Scovillainite": "Einer der mysteriösen Mega-Steine. Wird er von einem Halupenjo getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Golurkite": "Einer der mysteriösen Mega-Steine. Wird er von einem Golgantes getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Hawluchite": "Einer der mysteriösen Mega-Steine. Wird er von einem Resladero getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
  "Raichunite X": "Einer der mysteriösen Mega-Steine. Wird er von einem Raichu getragen, kann es im Kampf zu Mega-Raichu X mega-entwickeln.",
  "Tatsugirite": "Einer der mysteriösen Mega-Steine. Wird er von einem Nigiragi getragen, kann es im Kampf eine Mega-Entwicklung durchführen.",
};

// Missing ability
const missingAbilityNames = {
  "Commander Surge": "Angriffsbefehl",
};

const missingAbilityDescs = {
  "Commander Surge": "Drachen- und Wasser-Attacken erhalten 30% mehr Kraft. Bei Mega-Entwicklung erhöht sich der Spez.-Angr. des Partners um eine Stufe.",
};

const items = readJson("items.de.json");
const itemDescs = readJson("item-descriptions.de.json");
const abilities = readJson("abilities.de.json");
const abilityDescs = readJson("ability-descriptions.de.json");

Object.assign(items, missingItemNames);
Object.assign(itemDescs, missingItemDescs);
Object.assign(abilities, missingAbilityNames);
Object.assign(abilityDescs, missingAbilityDescs);

writeJson("items.de.json", items);
writeJson("item-descriptions.de.json", itemDescs);
writeJson("abilities.de.json", abilities);
writeJson("ability-descriptions.de.json", abilityDescs);

console.log("Fixed missing German translations:");
console.log(`  Items: ${Object.keys(missingItemNames).length}`);
console.log(`  Item descriptions: ${Object.keys(missingItemDescs).length}`);
console.log(`  Abilities: ${Object.keys(missingAbilityNames).length}`);
console.log(`  Ability descriptions: ${Object.keys(missingAbilityDescs).length}`);
