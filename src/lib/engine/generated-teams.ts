// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - PRE-GENERATED WINNING TEAMS DATABASE
// Hand-curated + engine-verified competitive teams covering all major archetypes
// Used for "Suggested Teams" section when Team Builder opens
// ═══════════════════════════════════════════════════════════════════════════════

import type { CommonSet } from "@/lib/types";

export interface PrebuiltTeam {
  id: string;
  name: string;
  archetype: string;
  description: string;
  pokemonIds: number[];        // National Dex IDs (6 pokemon)
  sets: CommonSet[];           // Matching competitive sets
  tags: string[];              // Quick filter tags
  tier: "S" | "A" | "B";      // Overall team strength rating
}

export const PREBUILT_TEAMS: PrebuiltTeam[] = [
  // ── S-TIER TEAMS ──────────────────────────────────────

  // ── VICTORY ROAD CHAMPIONS ARENA + TOP RATED TEAMS ─────────────────

  {
    id: "pre-vr1",
    name: "VR Winner: Charizard Y Sun",
    archetype: "Sun",
    description: "Hyungwoo Shin's Victory Road Champions Arena winning team. Mega Charizard Y sun with Chlorophyll Venusaur, Competitive Milotic, and Unburden Sneasler.",
    pokemonIds: [6, 350, 727, 903, 445, 3],
    sets: [
      { name: "Mega Sun Sweeper", nature: "Modest", ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"], sp: { hp: 6, attack: 0, defense: 16, spAtk: 30, spDef: 0, speed: 14 }, preMegaAbility: "Solar Power" },
      { name: "Competitive Bulk", nature: "Bold", ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Coil", "Hypnosis", "Recover"], sp: { hp: 31, attack: 0, defense: 21, spAtk: 1, spDef: 12, speed: 1 } },
      { name: "Intimidate Pivot", nature: "Serious", ability: "Intimidate", item: "Chople Berry", moves: ["Throat Chop", "Parting Shot", "Fake Out", "Flare Blitz"], sp: { hp: 32, attack: 0, defense: 11, spAtk: 0, spDef: 16, speed: 7 } },
      { name: "Unburden Lead", nature: "Adamant", ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"], sp: { hp: 2, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Rough Skin Pivot", nature: "Adamant", ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"], sp: { hp: 24, attack: 19, defense: 0, spAtk: 0, spDef: 1, speed: 22 } },
      { name: "Chlorophyll Sweeper", nature: "Modest", ability: "Chlorophyll", item: "Focus Sash", moves: ["Energy Ball", "Sludge Bomb", "Sleep Powder", "Protect"], sp: { hp: 2, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 32 } },
    ],
    tags: ["sun", "weather", "tournament", "victory-road", "mega"],
    tier: "S",
  },

  {
    id: "pre-vr2",
    name: "VR Finalist: Charizard X Bulky",
    archetype: "Bulky Offense",
    description: "Jorge Tabuyo's Victory Road Champions Arena finalist team. Mega Charizard X with Dragon Dance, Competitive Milotic, Mega Tyranitar sand, and Rage Powder Sinistcha.",
    pokemonIds: [6, 350, 1013, 248, 727, 903],
    sets: [
      { name: "DD Mega X", nature: "Adamant", ability: "Tough Claws", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"], sp: { hp: 14, attack: 21, defense: 1, spAtk: 0, spDef: 1, speed: 29 }, preMegaAbility: "Blaze" },
      { name: "Competitive Bulk", nature: "Calm", ability: "Competitive", item: "Leftovers", moves: ["Icy Wind", "Scald", "Protect", "Recover"], sp: { hp: 29, attack: 0, defense: 22, spAtk: 1, spDef: 0, speed: 14 } },
      { name: "Rage Powder", nature: "Bold", ability: "Hospitality", item: "Coba Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"], sp: { hp: 31, attack: 0, defense: 5, spAtk: 1, spDef: 29, speed: 0 } },
      { name: "Mega Sand Setter", nature: "Adamant", ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Crunch", "Protect", "High Horsepower"], sp: { hp: 17, attack: 26, defense: 1, spAtk: 0, spDef: 1, speed: 21 }, preMegaAbility: "Sand Stream" },
      { name: "Intimidate Support", nature: "Adamant", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"], sp: { hp: 30, attack: 5, defense: 10, spAtk: 0, spDef: 10, speed: 11 } },
      { name: "Unburden Attacker", nature: "Adamant", ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Fake Out", "Close Combat", "Coaching"], sp: { hp: 0, attack: 32, defense: 0, spAtk: 0, spDef: 2, speed: 32 } },
    ],
    tags: ["bulky-offense", "dragon-dance", "tournament", "victory-road", "mega"],
    tier: "S",
  },

  {
    id: "pre-vr3",
    name: "VR Top 3: Charizard Y Tailwind",
    archetype: "Sun",
    description: "Juan Benítez's Victory Road Champions Arena Top 3 team. Mega Charizard Y sun with Prankster Whimsicott Tailwind, Scarf Garchomp, and Armor Tail Farigiraf.",
    pokemonIds: [6, 981, 445, 547, 903, 983],
    sets: [
      { name: "Mega Sun Nuke", nature: "Timid", ability: "Drought", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Overheat", "Solar Beam"], sp: { hp: 10, attack: 0, defense: 5, spAtk: 18, spDef: 1, speed: 32 }, preMegaAbility: "Solar Power" },
      { name: "Armor Tail TR", nature: "Modest", ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Imprison", "Trick Room", "Hyper Voice"], sp: { hp: 31, attack: 0, defense: 12, spAtk: 10, spDef: 13, speed: 0 } },
      { name: "Scarf Ground", nature: "Adamant", ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Stomping Tantrum"], sp: { hp: 2, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Moonblast", "Tailwind", "Encore"], sp: { hp: 32, attack: 0, defense: 10, spAtk: 2, spDef: 0, speed: 22 } },
      { name: "Unburden Attacker", nature: "Adamant", ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Fake Out", "Close Combat", "Protect"], sp: { hp: 8, attack: 20, defense: 5, spAtk: 0, spDef: 1, speed: 32 } },
      { name: "Defiant Finisher", nature: "Adamant", ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"], sp: { hp: 6, attack: 25, defense: 2, spAtk: 0, spDef: 1, speed: 32 } },
    ],
    tags: ["sun", "tailwind", "tournament", "victory-road", "mega"],
    tier: "S",
  },

  {
    id: "pre-vr4",
    name: "VR Top Cut: Mega Floette",
    archetype: "Tailwind",
    description: "Pablo Rico's Victory Road Champions Arena Top Cut team. Mega Floette with Tailwind Aerodactyl, Adamant Aegislash, Scarf Rotom-Wash, and Incineroar.",
    pokemonIds: [10061, 142, 681, 10009, 727, 445],
    sets: [
      { name: "Mega Fairy Aura", nature: "Modest", ability: "Fairy Aura", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"], sp: { hp: 16, attack: 0, defense: 22, spAtk: 5, spDef: 1, speed: 22 }, preMegaAbility: "Flower Veil" },
      { name: "Tailwind Lead", nature: "Jolly", ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"], sp: { hp: 6, attack: 27, defense: 0, spAtk: 0, spDef: 1, speed: 32 } },
      { name: "Physical Stance", nature: "Adamant", ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Sacred Sword", "Shadow Sneak"], sp: { hp: 30, attack: 32, defense: 0, spAtk: 0, spDef: 1, speed: 3 } },
      { name: "Scarf Rotom", nature: "Timid", ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Hydro Pump", "Thunderbolt", "Electroweb"], sp: { hp: 8, attack: 0, defense: 2, spAtk: 31, spDef: 0, speed: 25 } },
      { name: "Intimidate Pivot", nature: "Impish", ability: "Blaze", item: "Sitrus Berry", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Helping Hand"], sp: { hp: 32, attack: 0, defense: 21, spAtk: 0, spDef: 12, speed: 1 } },
      { name: "Haban Berry Ground", nature: "Jolly", ability: "Rough Skin", item: "Haban Berry", moves: ["Protect", "Earthquake", "Rock Slide", "Dragon Claw"], sp: { hp: 6, attack: 27, defense: 0, spAtk: 0, spDef: 1, speed: 32 } },
    ],
    tags: ["fairy", "tailwind", "tournament", "victory-road", "mega"],
    tier: "S",
  },

  {
    id: "pre-dc1",
    name: "Wolfe's Mega Starmie Sand",
    archetype: "Sand",
    description: "Wolfe Glick's Mega Starmie team. Sand Veil Garchomp + Scarf Tyranitar sand with Tailwind Aerodactyl and Skill Swap Starmie.",
    pokemonIds: [10008, 248, 142, 681, 121, 445],
    sets: [
      { name: "Bulky Special", nature: "Modest", ability: "Levitate", item: "Sitrus Berry", moves: ["Protect", "Thunderbolt", "Overheat", "Helping Hand"], sp: { hp: 32, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 2 } },
      { name: "Scarf Sand", nature: "Jolly", ability: "Sand Stream", item: "Choice Scarf", moves: ["Rock Slide", "Knock Off", "Ice Punch", "Superpower"], sp: { hp: 2, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Tailwind Lead", nature: "Jolly", ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"], sp: { hp: 2, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Special Stance", nature: "Quiet", ability: "Stance Change", item: "Leftovers", moves: ["King's Shield", "Wide Guard", "Flash Cannon", "Shadow Ball"], sp: { hp: 32, attack: 0, defense: 0, spAtk: 32, spDef: 2, speed: 0 } },
      { name: "Mega Skill Swap", nature: "Jolly", ability: "Natural Cure", item: "Starminite", moves: ["Protect", "Liquidation", "Skill Swap", "Zen Headbutt"], sp: { hp: 2, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 32 }, preMegaAbility: "Natural Cure" },
      { name: "Sand Veil Pivot", nature: "Jolly", ability: "Sand Veil", item: "White Herb", moves: ["Protect", "Iron Head", "Earthquake", "Dragon Claw"], sp: { hp: 2, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 32 } },
    ],
    tags: ["sand", "tournament", "mega", "tailwind"],
    tier: "S",
  },

  {
    id: "pre-dc2",
    name: "Rank 1 Global: Floette Froslass",
    archetype: "Hyper Offense",
    description: "Spy_Anya's Rank 1 Global team. Mega Floette + Mega Froslass dual mega option with Garchomp, Defiant Kingambit, Adaptability Basculegion, and Sneasler.",
    pokemonIds: [10061, 445, 983, 902, 903, 478],
    sets: [
      { name: "Mega Fairy Nuke", nature: "Modest", ability: "Fairy Aura", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"], sp: { hp: 14, attack: 0, defense: 0, spAtk: 20, spDef: 0, speed: 32 }, preMegaAbility: "Flower Veil" },
      { name: "Haban Berry Ground", nature: "Adamant", ability: "Rough Skin", item: "Haban Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"], sp: { hp: 32, attack: 7, defense: 1, spAtk: 0, spDef: 1, speed: 25 } },
      { name: "Chople Defiant", nature: "Adamant", ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"], sp: { hp: 32, attack: 26, defense: 2, spAtk: 0, spDef: 1, speed: 5 } },
      { name: "Adaptability Nuke", nature: "Adamant", ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"], sp: { hp: 20, attack: 32, defense: 8, spAtk: 0, spDef: 1, speed: 5 } },
      { name: "Poison Touch Lead", nature: "Adamant", ability: "Poison Touch", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"], sp: { hp: 1, attack: 32, defense: 1, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Mega Ice Offense", nature: "Modest", ability: "Frozen Heart", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Substitute", "Protect"], sp: { hp: 30, attack: 0, defense: 2, spAtk: 3, spDef: 1, speed: 30 }, preMegaAbility: "Cursed Body" },
    ],
    tags: ["hyper-offense", "tournament", "mega", "rank-1"],
    tier: "S",
  },

  {
    id: "pre-dc3",
    name: "Cybertron's Charizard Y Sun",
    archetype: "Sun",
    description: "Aaron Zheng's Charizard Y sun team. Classic sun with Chlorophyll Venusaur, Scarf Garchomp, bulky Rotom-Wash, Intimidate Incineroar, and Unburden Sneasler.",
    pokemonIds: [6, 3, 445, 10009, 903, 727],
    sets: [
      { name: "Mega Y Sweeper", nature: "Timid", ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 32, spDef: 4, speed: 26 }, preMegaAbility: "Solar Power" },
      { name: "Chlorophyll Sweeper", nature: "Modest", ability: "Chlorophyll", item: "Focus Sash", moves: ["Leaf Storm", "Sludge Bomb", "Sleep Powder", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 32, spDef: 4, speed: 26 } },
      { name: "Scarf Ground", nature: "Adamant", ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Bulldoze", "Dragon Claw", "Rock Slide"], sp: { hp: 4, attack: 32, defense: 4, spAtk: 0, spDef: 0, speed: 26 } },
      { name: "Bulky Levitate", nature: "Bold", ability: "Levitate", item: "Leftovers", moves: ["Will-O-Wisp", "Thunderbolt", "Hydro Pump", "Protect"], sp: { hp: 32, attack: 0, defense: 10, spAtk: 16, spDef: 0, speed: 8 } },
      { name: "Unburden Lead", nature: "Jolly", ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Rock Tomb", "Dire Claw"], sp: { hp: 0, attack: 32, defense: 4, spAtk: 0, spDef: 4, speed: 26 } },
      { name: "Intimidate Pivot", nature: "Adamant", ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Darkest Lariat"], sp: { hp: 32, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 2 } },
    ],
    tags: ["sun", "weather", "tournament", "mega"],
    tier: "S",
  },

  {
    id: "pre-dc4",
    name: "Mega Blastoise Rain",
    archetype: "Rain",
    description: "Kuro's Mega Blastoise rain team. Pelipper rain with Water Spout Blastoise, Rage Powder Sinistcha, Garchomp, Sneasler, and Defiant Kingambit.",
    pokemonIds: [9, 279, 1013, 903, 445, 983],
    sets: [
      { name: "Mega Launcher", nature: "Quiet", ability: "Mega Launcher", item: "Blastoisinite", moves: ["Water Spout", "Water Pulse", "Ice Beam", "Protect"], sp: { hp: 1, attack: 0, defense: 1, spAtk: 32, spDef: 0, speed: 32 }, preMegaAbility: "Rain Dish" },
      { name: "Scarf Rain Setter", nature: "Timid", ability: "Drizzle", item: "Choice Scarf", moves: ["Hurricane", "Weather Ball", "U-turn", "Tailwind"], sp: { hp: 1, attack: 0, defense: 0, spAtk: 32, spDef: 1, speed: 32 } },
      { name: "Rage Powder", nature: "Modest", ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"], sp: { hp: 32, attack: 0, defense: 0, spAtk: 32, spDef: 2, speed: 0 } },
      { name: "Poison Touch Lead", nature: "Jolly", ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Rock Slide", "Protect"], sp: { hp: 1, attack: 32, defense: 1, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Ground Pivot", nature: "Jolly", ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"], sp: { hp: 1, attack: 32, defense: 0, spAtk: 0, spDef: 1, speed: 32 } },
      { name: "Defiant Finisher", nature: "Adamant", ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"], sp: { hp: 32, attack: 32, defense: 1, spAtk: 0, spDef: 1, speed: 0 } },
    ],
    tags: ["rain", "weather", "tournament", "mega"],
    tier: "A",
  },

  {
    id: "pre-dc5",
    name: "Mega Froslass Snow",
    archetype: "Snow",
    description: "Yunitto's Mega Froslass team. Aurora Veil support with Scarf Rotom-Frost, Competitive Empoleon, Intimidate Incineroar, and Defiant Kingambit.",
    pokemonIds: [478, 445, 10010, 395, 727, 983],
    sets: [
      { name: "Mega Aurora Veil", nature: "Modest", ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"], sp: { hp: 2, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 32 }, preMegaAbility: "Snow Cloak" },
      { name: "Ground Pivot", nature: "Jolly", ability: "Rough Skin", item: "White Herb", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"], sp: { hp: 1, attack: 32, defense: 1, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Scarf Ice", nature: "Timid", ability: "Levitate", item: "Choice Scarf", moves: ["Thunderbolt", "Blizzard", "Electroweb", "Volt Switch"], sp: { hp: 2, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Competitive Tank", nature: "Modest", ability: "Competitive", item: "Leftovers", moves: ["Water Pulse", "Flash Cannon", "Roar", "Protect"], sp: { hp: 32, attack: 0, defense: 0, spAtk: 19, spDef: 0, speed: 15 } },
      { name: "Intimidate Pivot", nature: "Adamant", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Darkest Lariat", "Parting Shot"], sp: { hp: 32, attack: 26, defense: 0, spAtk: 0, spDef: 8, speed: 0 } },
      { name: "Defiant Finisher", nature: "Jolly", ability: "Defiant", item: "Focus Sash", moves: ["Iron Head", "Low Kick", "Sucker Punch", "Protect"], sp: { hp: 0, attack: 32, defense: 0, spAtk: 0, spDef: 2, speed: 32 } },
    ],
    tags: ["snow", "aurora-veil", "tournament", "mega"],
    tier: "A",
  },

  {
    id: "pre-dc6",
    name: "Mega Golurk Trick Room",
    archetype: "Trick Room",
    description: "WDMichael's Mega Golurk Trick Room team. Hatterene + Oranguru double TR setters with Mega Golurk, Follow Me Clefable, Scarf Hydreigon, and Drought Torkoal.",
    pokemonIds: [858, 765, 623, 36, 635, 324],
    sets: [
      { name: "TR Setter", nature: "Quiet", ability: "Magic Bounce", item: "Fairy Feather", moves: ["Protect", "Psychic", "Trick Room", "Dazzling Gleam"], sp: { hp: 32, attack: 0, defense: 3, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "Instruct TR", nature: "Quiet", ability: "Inner Focus", item: "Mental Herb", moves: ["Protect", "Instruct", "Psychic", "Trick Room"], sp: { hp: 32, attack: 0, defense: 20, spAtk: 4, spDef: 10, speed: 0 } },
      { name: "Mega TR Sweeper", nature: "Brave", ability: "Iron Fist", item: "Golurkite", moves: ["Protect", "Thunder Punch", "Headlong Rush", "Drain Punch"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 }, preMegaAbility: "Iron Fist" },
      { name: "Follow Me", nature: "Calm", ability: "Unaware", item: "Focus Sash", moves: ["Moonblast", "Helping Hand", "Follow Me", "Charm"], sp: { hp: 32, attack: 0, defense: 0, spAtk: 32, spDef: 2, speed: 0 } },
      { name: "Scarf Special", nature: "Timid", ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Dark Pulse", "Heat Wave", "Tri Attack"], sp: { hp: 2, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Sun TR Nuke", nature: "Quiet", ability: "Drought", item: "Charcoal", moves: ["Eruption", "Protect", "Clear Smog", "Heat Wave"], sp: { hp: 32, attack: 0, defense: 0, spAtk: 32, spDef: 2, speed: 0 } },
    ],
    tags: ["trick-room", "tournament", "mega", "sun"],
    tier: "A",
  },

  {
    id: "pre-46",
    name: "Mega Floette HO",
    archetype: "Hyper Offense",
    description: "Mega Floette + Sneasler Fake Out lead with Tailwind Dragonite, Scarf Excadrill, and bulky Rotom-Wash. By Illiterate Duck.",
    pokemonIds: [10061, 903, 727, 530, 149, 10009],
    sets: [
      { name: "Mega Fairy Nuke", nature: "Timid", ability: "Fairy Aura", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Psychic", "Protect"], sp: { hp: 0, attack: 0, defense: 1, spAtk: 32, spDef: 1, speed: 32 }, preMegaAbility: "Flower Veil" },
      { name: "Unburden Lead", nature: "Jolly", ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Rock Slide"], sp: { hp: 0, attack: 32, defense: 1, spAtk: 0, spDef: 1, speed: 32 } },
      { name: "Intimidate Pivot", nature: "Adamant", ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"], sp: { hp: 32, attack: 5, defense: 1, spAtk: 0, spDef: 3, speed: 25 } },
      { name: "Scarf Breaker", nature: "Adamant", ability: "Mold Breaker", item: "Choice Scarf", moves: ["Iron Head", "High Horsepower", "Earthquake", "Rock Slide"], sp: { hp: 0, attack: 32, defense: 1, spAtk: 0, spDef: 1, speed: 32 } },
      { name: "Tailwind Sweeper", nature: "Adamant", ability: "Multiscale", item: "White Herb", moves: ["Extreme Speed", "Protect", "Tailwind", "Scale Shot"], sp: { hp: 0, attack: 32, defense: 1, spAtk: 0, spDef: 1, speed: 32 } },
      { name: "Bulky Special", nature: "Modest", ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Electroweb", "Thunderbolt", "Protect"], sp: { hp: 24, attack: 0, defense: 6, spAtk: 15, spDef: 18, speed: 3 } },
    ],
    tags: ["fairy", "hyper-offense", "fake-out", "tailwind", "mega"],
    tier: "S",
  },

  {
    id: "pre-47",
    name: "Sand Bulky Offense",
    archetype: "Sand",
    description: "Tyranitar sand with Mega Glimmora, Corviknight bulk, Competitive Milotic, and Rage Powder Sinistcha. By Illiterate Duck.",
    pokemonIds: [248, 823, 350, 1013, 149, 970],
    sets: [
      { name: "Sand Setter", nature: "Adamant", ability: "Sand Stream", item: "Chople Berry", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"], sp: { hp: 17, attack: 22, defense: 1, spAtk: 0, spDef: 1, speed: 25 } },
      { name: "Bulk Up Wall", nature: "Impish", ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Body Press", "Bulk Up", "Roost"], sp: { hp: 32, attack: 1, defense: 19, spAtk: 0, spDef: 14, speed: 0 } },
      { name: "Competitive Check", nature: "Calm", ability: "Competitive", item: "Sitrus Berry", moves: ["Scald", "Icy Wind", "Muddy Water", "Life Dew"], sp: { hp: 31, attack: 0, defense: 17, spAtk: 2, spDef: 5, speed: 11 } },
      { name: "Rage Powder Support", nature: "Bold", ability: "Heatproof", item: "Occa Berry", moves: ["Matcha Gotcha", "Strength Sap", "Calm Mind", "Rage Powder"], sp: { hp: 32, attack: 0, defense: 4, spAtk: 1, spDef: 29, speed: 0 } },
      { name: "Tailwind Sweeper", nature: "Adamant", ability: "Multiscale", item: "White Herb", moves: ["Scale Shot", "Extreme Speed", "Tailwind", "Protect"], sp: { hp: 2, attack: 30, defense: 1, spAtk: 0, spDef: 1, speed: 32 } },
      { name: "Mega Poison Rock", nature: "Timid", ability: "Adaptability", item: "Glimmoranite", moves: ["Spiky Shield", "Sludge Bomb", "Earth Power", "Power Gem"], sp: { hp: 0, attack: 0, defense: 1, spAtk: 32, spDef: 1, speed: 32 }, preMegaAbility: "Toxic Debris" },
    ],
    tags: ["sand", "weather", "bulky-offense", "redirect", "mega"],
    tier: "S",
  },

  {
    id: "pre-1",
    name: "Sand Offense",
    archetype: "Sand",
    description: "Tyranitar + Excadrill sand core with Intimidate support and fast coverage",
    pokemonIds: [248, 530, 445, 727, 658, 282],
    sets: [
      { name: "Sand Setter", nature: "Adamant", ability: "Sand Stream", item: "Assault Vest", moves: ["Rock Slide", "Crunch", "Low Kick", "Ice Punch"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Sand Rush Sweeper", nature: "Jolly", ability: "Sand Rush", item: "Life Orb", moves: ["Iron Head", "Earthquake", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Offensive Pivot", nature: "Jolly", ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fast Special", nature: "Timid", ability: "Protean", item: "Focus Sash", moves: ["Ice Beam", "Dark Pulse", "Grass Knot", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Mega Support", nature: "Timid", ability: "Pixilate", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Trick Room", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
    ],
    tags: ["sand", "weather", "offense", "intimidate"],
    tier: "S",
  },

  {
    id: "pre-2",
    name: "Rain Rush",
    archetype: "Rain",
    description: "Politoed rain with Swift Swim sweepers and Tailwind backup",
    pokemonIds: [186, 9, 130, 547, 887, 727],
    sets: [
      { name: "Rain Setter", nature: "Bold", ability: "Drizzle", item: "Sitrus Berry", moves: ["Scald", "Ice Beam", "Helping Hand", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 0, spDef: 2, speed: 0 } },
      { name: "Mega Launcher", nature: "Modest", ability: "Mega Launcher", item: "Blastoisinite", moves: ["Water Pulse", "Dark Pulse", "Aura Sphere", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
      { name: "Physical Sweeper", nature: "Adamant", ability: "Intimidate", item: "Wacan Berry", moves: ["Waterfall", "Power Whip", "Earthquake", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Fast Attacker", nature: "Timid", ability: "Clear Body", item: "Life Orb", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Safety Goggles", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
    ],
    tags: ["rain", "weather", "offense", "tailwind"],
    tier: "S",
  },

  {
    id: "pre-3",
    name: "Hard Trick Room",
    archetype: "Trick Room",
    description: "Hatterene sets TR for devastating slow attackers under Follow Me support",
    pokemonIds: [858, 36, 983, 464, 727, 780],
    sets: [
      { name: "TR Setter", nature: "Quiet", ability: "Magic Bounce", item: "Mental Herb", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "Follow Me Support", nature: "Bold", ability: "Magic Guard", item: "Sitrus Berry", moves: ["Follow Me", "Moonblast", "Helping Hand", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 0, spDef: 2, speed: 0 } },
      { name: "Supreme Overlord", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Close Combat"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "TR Sweeper", nature: "Brave", ability: "Solid Rock", item: "Life Orb", moves: ["Rock Slide", "Earthquake", "Ice Punch", "Protect"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Intimidate Pivot", nature: "Careful", ability: "Intimidate", item: "Figy Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "TR Special", nature: "Quiet", ability: "Berserk", item: "Choice Specs", moves: ["Draco Meteor", "Hyper Voice", "Flamethrower", "Thunderbolt"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
    ],
    tags: ["trick-room", "bulky", "slow", "follow-me"],
    tier: "S",
  },

  {
    id: "pre-4",
    name: "Sun Hyper Offense",
    archetype: "Sun",
    description: "Torkoal sun with Chlorophyll Venusaur and Solar Power Charizard",
    pokemonIds: [324, 3, 6, 727, 547, 681],
    sets: [
      { name: "Sun Setter TR", nature: "Quiet", ability: "Drought", item: "Charcoal", moves: ["Heat Wave", "Earth Power", "Solar Beam", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "Sun Sweeper", nature: "Modest", ability: "Chlorophyll", item: "Life Orb", moves: ["Leaf Storm", "Sludge Bomb", "Earth Power", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Mega Y Sweeper", nature: "Modest", ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Overheat", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 30 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Stance Change", nature: "Quiet", ability: "Stance Change", item: "Weakness Policy", moves: ["Shadow Ball", "Flash Cannon", "King's Shield", "Shadow Sneak"], sp: { hp: 32, attack: 16, defense: 2, spAtk: 16, spDef: 0, speed: 0 } },
    ],
    tags: ["sun", "weather", "hyper-offense", "tailwind"],
    tier: "S",
  },

  {
    id: "pre-5",
    name: "Archaludon Balance",
    archetype: "Balance",
    description: "Stamina Archaludon pivot with Incineroar + Tailwind support",
    pokemonIds: [1018, 727, 547, 149, 350, 681],
    sets: [
      { name: "Stamina Tank", nature: "Modest", ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Draco Meteor", "Protect"], sp: { hp: 32, attack: 0, defense: 4, spAtk: 28, spDef: 0, speed: 2 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Multiscale Pivot", nature: "Adamant", ability: "Multiscale", item: "Lum Berry", moves: ["Extreme Speed", "Dragon Claw", "Fire Punch", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Competitive Tank", nature: "Bold", ability: "Competitive", item: "Shell Bell", moves: ["Scald", "Ice Beam", "Recover", "Protect"], sp: { hp: 32, attack: 0, defense: 20, spAtk: 14, spDef: 0, speed: 0 } },
      { name: "Stance Change", nature: "Quiet", ability: "Stance Change", item: "Weakness Policy", moves: ["Shadow Ball", "Flash Cannon", "King's Shield", "Shadow Sneak"], sp: { hp: 32, attack: 16, defense: 2, spAtk: 16, spDef: 0, speed: 0 } },
    ],
    tags: ["balance", "mega", "intimidate", "tailwind"],
    tier: "S",
  },

  // ── A-TIER TEAMS ──────────────────────────────────────

  {
    id: "pre-6",
    name: "Garchomp Rush",
    archetype: "Offense",
    description: "Mega Garchomp with speed control and coverage",
    pokemonIds: [445, 727, 547, 887, 282, 983],
    sets: [
      { name: "Mega Sweeper", nature: "Jolly", ability: "Sand Force", item: "Garchompite", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Fast Attacker", nature: "Timid", ability: "Clear Body", item: "Life Orb", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Fairy Coverage", nature: "Timid", ability: "Trace", item: "Choice Scarf", moves: ["Moonblast", "Psychic", "Dazzling Gleam", "Trick"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Supreme Overlord", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Close Combat"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
    ],
    tags: ["offense", "mega", "tailwind", "intimidate"],
    tier: "A",
  },

  {
    id: "pre-8",
    name: "Kingambit Hyper Offense",
    archetype: "Hyper Offense",
    description: "Aggressive Kingambit with Supreme Overlord snowball potential",
    pokemonIds: [983, 887, 445, 727, 547, 658],
    sets: [
      { name: "Supreme Overlord", nature: "Adamant", ability: "Supreme Overlord", item: "Black Glasses", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Protect"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Fast Attacker", nature: "Timid", ability: "Clear Body", item: "Life Orb", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Offensive Pivot", nature: "Jolly", ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Fast Special", nature: "Timid", ability: "Protean", item: "Lum Berry", moves: ["Ice Beam", "Dark Pulse", "Grass Knot", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
    ],
    tags: ["hyper-offense", "sucker-punch", "tailwind", "intimidate"],
    tier: "A",
  },

  {
    id: "pre-9",
    name: "Dragonite Setup",
    archetype: "Setup",
    description: "Dragon Dance Dragonite with Follow Me + Intimidate support",
    pokemonIds: [149, 36, 727, 681, 445, 547],
    sets: [
      { name: "Dragon Dance", nature: "Adamant", ability: "Multiscale", item: "Lum Berry", moves: ["Dragon Dance", "Dragon Claw", "Extreme Speed", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Follow Me Support", nature: "Bold", ability: "Magic Guard", item: "Sitrus Berry", moves: ["Follow Me", "Moonblast", "Helping Hand", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 0, spDef: 2, speed: 0 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Figy Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Stance Change", nature: "Quiet", ability: "Stance Change", item: "Weakness Policy", moves: ["Shadow Ball", "Flash Cannon", "King's Shield", "Shadow Sneak"], sp: { hp: 32, attack: 16, defense: 2, spAtk: 16, spDef: 0, speed: 0 } },
      { name: "Offensive Pivot", nature: "Jolly", ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
    ],
    tags: ["setup", "dragon-dance", "follow-me", "intimidate"],
    tier: "A",
  },

  {
    id: "pre-10",
    name: "Lucario + Dragapult",
    archetype: "Offense",
    description: "Mega Lucario with Dragapult speed control and priority",
    pokemonIds: [448, 887, 727, 282, 547, 681],
    sets: [
      { name: "Mega Sweeper", nature: "Jolly", ability: "Adaptability", item: "Lucarionite", moves: ["Close Combat", "Bullet Punch", "Meteor Mash", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fast Attacker", nature: "Timid", ability: "Clear Body", item: "Life Orb", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fairy Coverage", nature: "Timid", ability: "Trace", item: "Choice Scarf", moves: ["Moonblast", "Psychic", "Dazzling Gleam", "Trick"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Stance Change", nature: "Quiet", ability: "Stance Change", item: "Weakness Policy", moves: ["Shadow Ball", "Flash Cannon", "King's Shield", "Shadow Sneak"], sp: { hp: 32, attack: 16, defense: 2, spAtk: 16, spDef: 0, speed: 0 } },
    ],
    tags: ["offense", "mega", "priority", "tailwind"],
    tier: "A",
  },

  {
    id: "pre-12",
    name: "Hydreigon Offense",
    archetype: "Offense",
    description: "Hydreigon special wallbreaker with Intimidate + Tailwind support",
    pokemonIds: [635, 727, 547, 1018, 149, 658],
    sets: [
      { name: "Special Wallbreaker", nature: "Modest", ability: "Levitate", item: "Choice Specs", moves: ["Draco Meteor", "Dark Pulse", "Flamethrower", "Flash Cannon"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Stamina Tank", nature: "Modest", ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Draco Meteor", "Protect"], sp: { hp: 32, attack: 0, defense: 4, spAtk: 28, spDef: 0, speed: 2 } },
      { name: "Multiscale Pivot", nature: "Adamant", ability: "Multiscale", item: "Lum Berry", moves: ["Extreme Speed", "Dragon Claw", "Fire Punch", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Fast Special", nature: "Timid", ability: "Protean", item: "White Herb", moves: ["Ice Beam", "Dark Pulse", "Grass Knot", "Protect"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
    ],
    tags: ["offense", "special-attacker", "tailwind", "intimidate"],
    tier: "A",
  },

  // ── B-TIER TEAMS ──────────────────────────────────────

  {
    id: "pre-13",
    name: "Perish Trap",
    archetype: "Perish Trap",
    description: "Mega Gengar Shadow Tag + Perish Song for guaranteed KOs",
    pokemonIds: [94, 727, 282, 547, 149, 681],
    sets: [
      { name: "Perish Trap", nature: "Timid", ability: "Shadow Tag", item: "Gengarite", moves: ["Perish Song", "Shadow Ball", "Disable", "Protect"], sp: { hp: 20, attack: 0, defense: 14, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fairy Support", nature: "Timid", ability: "Trace", item: "Choice Scarf", moves: ["Hyper Voice", "Psychic", "Trick Room", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
      { name: "Tailwind Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Dragon Dance", nature: "Adamant", ability: "Multiscale", item: "Lum Berry", moves: ["Dragon Dance", "Dragon Claw", "Extreme Speed", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Stance Change", nature: "Quiet", ability: "Stance Change", item: "Weakness Policy", moves: ["Shadow Ball", "Flash Cannon", "King's Shield", "Shadow Sneak"], sp: { hp: 32, attack: 16, defense: 2, spAtk: 16, spDef: 0, speed: 0 } },
    ],
    tags: ["perish-trap", "trapping", "shadow-tag", "stall"],
    tier: "B",
  },

  {
    id: "pre-15",
    name: "Mixed Beat Up",
    archetype: "Beat Up",
    description: "Beat Up Whimsicott + Justified Lucario for massive Attack boost",
    pokemonIds: [547, 448, 727, 445, 887, 681],
    sets: [
      { name: "Beat Up Lead", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Beat Up", "Tailwind", "Moonblast", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Justified Sweeper", nature: "Jolly", ability: "Justified", item: "Life Orb", moves: ["Close Combat", "Bullet Punch", "Meteor Mash", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Offensive Pivot", nature: "Jolly", ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fast Attacker", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Stance Change", nature: "Quiet", ability: "Stance Change", item: "Weakness Policy", moves: ["Shadow Ball", "Flash Cannon", "King's Shield", "Shadow Sneak"], sp: { hp: 32, attack: 16, defense: 2, spAtk: 16, spDef: 0, speed: 0 } },
    ],
    tags: ["beat-up", "justified", "combo", "tailwind"],
    tier: "B",
  },

  // ── EXPANDED OPPONENT POOL (Engine-verified meta teams) ──

  {
    id: "pre-16", name: "Sun Room", archetype: "Sun TR",
    description: "Torkoal Drought + Trick Room with slow heavy hitters",
    pokemonIds: [324, 858, 464, 727, 3, 983],
    sets: [
      { name: "Sun Setter", nature: "Quiet", ability: "Drought", item: "Charcoal", moves: ["Heat Wave", "Earth Power", "Solar Beam", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "TR Setter", nature: "Quiet", ability: "Magic Bounce", item: "Focus Sash", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "TR Sweeper", nature: "Brave", ability: "Solid Rock", item: "Life Orb", moves: ["Rock Slide", "Earthquake", "Ice Punch", "Protect"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Chlorophyll", nature: "Modest", ability: "Chlorophyll", item: "Coba Berry", moves: ["Solar Beam", "Sludge Bomb", "Earth Power", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 30 } },
      { name: "Dark Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
    ],
    tags: ["sun", "trick-room", "weather", "slow"],
    tier: "A",
  },

  {
    id: "pre-17", name: "Sableye Screens HO", archetype: "Screens",
    description: "Prankster dual screens into fast sweepers",
    pokemonIds: [302, 887, 983, 445, 908, 727],
    sets: [
      { name: "Screen Setter", nature: "Careful", ability: "Prankster", item: "Light Clay", moves: ["Reflect", "Light Screen", "Fake Out", "Will-O-Wisp"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Dark Sweeper", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Flower Trick", nature: "Jolly", ability: "Protean", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Play Rough", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate Pivot", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
    ],
    tags: ["screens", "hyper-offense", "prankster", "fast"],
    tier: "S",
  },

  {
    id: "pre-19", name: "Pelipper Rain", archetype: "Modern Rain",
    description: "Pelipper Drizzle + Palafin Zero to Hero rain devastation",
    pokemonIds: [279, 964, 887, 727, 547, 445],
    sets: [
      { name: "Rain Setter", nature: "Bold", ability: "Drizzle", item: "Damp Rock", moves: ["Hurricane", "Scald", "Tailwind", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 2, spDef: 0, speed: 0 } },
      { name: "Hero Mode", nature: "Adamant", ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Jet Punch", "Close Combat", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Fast Special", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Ground Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
    ],
    tags: ["rain", "weather", "tailwind", "fast"],
    tier: "S",
  },

  {
    id: "pre-20", name: "Ursaluna TR", archetype: "Trick Room",
    description: "Ursaluna Guts nuke under Trick Room with Fake Out support",
    pokemonIds: [901, 858, 727, 934, 282, 983],
    sets: [
      { name: "TR Nuke", nature: "Brave", ability: "Guts", item: "Flame Orb", moves: ["Headlong Rush", "Facade", "Rock Slide", "Protect"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "TR Setter", nature: "Quiet", ability: "Magic Bounce", item: "Focus Sash", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "Fake Out", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Salt Wall", nature: "Careful", ability: "Purifying Salt", item: "Leftovers", moves: ["Rock Slide", "Body Press", "Recover", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 0, spDef: 2, speed: 0 } },
      { name: "Follow Me", nature: "Bold", ability: "Trace", item: "Safety Goggles", moves: ["Psychic", "Dazzling Gleam", "Follow Me", "Protect"], sp: { hp: 32, attack: 0, defense: 20, spAtk: 12, spDef: 2, speed: 0 } },
      { name: "Dark Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
    ],
    tags: ["trick-room", "guts", "slow", "offense"],
    tier: "A",
  },

  {
    id: "pre-21", name: "Corviknight + Kingambit", archetype: "Steel Stall",
    description: "Dual Steel defensive core with Supreme Overlord endgame",
    pokemonIds: [823, 983, 727, 887, 547, 934],
    sets: [
      { name: "Iron Wall", nature: "Impish", ability: "Mirror Armor", item: "Rocky Helmet", moves: ["Body Press", "Brave Bird", "Iron Defense", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 0, spDef: 2, speed: 0 } },
      { name: "Dark Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Salt Wall", nature: "Careful", ability: "Purifying Salt", item: "Leftovers", moves: ["Rock Slide", "Body Press", "Recover", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 0, spDef: 2, speed: 0 } },
    ],
    tags: ["steel", "stall", "supreme-overlord", "defense"],
    tier: "A",
  },

  {
    id: "pre-22", name: "Archaludon Stamina", archetype: "Body Press",
    description: "Archaludon Stamina + Screens for infinite Body Press scaling",
    pokemonIds: [1018, 302, 445, 727, 887, 547],
    sets: [
      { name: "Stamina Wall", nature: "Bold", ability: "Stamina", item: "Leftovers", moves: ["Body Press", "Flash Cannon", "Electro Shot", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 2, spDef: 0, speed: 0 } },
      { name: "Screen Setter", nature: "Careful", ability: "Prankster", item: "Light Clay", moves: ["Reflect", "Light Screen", "Will-O-Wisp", "Recover"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
    ],
    tags: ["stamina", "body-press", "screens", "defense"],
    tier: "A",
  },

  {
    id: "pre-23", name: "Alolan Ninetales Veil", archetype: "Aurora Veil",
    description: "Alolan Ninetales Aurora Veil + fast sweepers",
    pokemonIds: [10103, 445, 887, 727, 983, 212],
    sets: [
      { name: "Veil Lead", nature: "Timid", ability: "Snow Warning", item: "Light Clay", moves: ["Aurora Veil", "Blizzard", "Freeze-Dry", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Dark Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Priority Steel", nature: "Adamant", ability: "Technician", item: "Choice Band", moves: ["Bullet Punch", "Bug Bite", "Superpower", "Dual Wingbeat"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
    ],
    tags: ["aurora-veil", "snow", "fast", "offense"],
    tier: "A",
  },

  {
    id: "pre-24", name: "Talonflame Tailwind Rush", archetype: "Tailwind HO",
    description: "Gale Wings Tailwind into hyper aggressive sweeping",
    pokemonIds: [663, 445, 983, 727, 282, 130],
    sets: [
      { name: "Gale Wings Lead", nature: "Jolly", ability: "Gale Wings", item: "Sharp Beak", moves: ["Brave Bird", "Flare Blitz", "Tailwind", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "EQ Sweeper", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Dark Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Follow Me", nature: "Timid", ability: "Pixilate", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Follow Me", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
      { name: "DD Sweeper", nature: "Jolly", ability: "Intimidate", item: "Wacan Berry", moves: ["Waterfall", "Power Whip", "Dragon Dance", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
    ],
    tags: ["tailwind", "hyper-offense", "fast", "gale-wings"],
    tier: "A",
  },

  {
    id: "pre-25", name: "Follow Me Gardevoir", archetype: "Redirection",
    description: "Mega Gardevoir Follow Me + safe setup sweepers",
    pokemonIds: [282, 445, 727, 887, 130, 858],
    sets: [
      { name: "Mega Follow Me", nature: "Timid", ability: "Pixilate", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Follow Me", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
      { name: "SD Sweeper", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fake Out", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "DD Mega", nature: "Jolly", ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "TR Backup", nature: "Quiet", ability: "Magic Bounce", item: "Focus Sash", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
    ],
    tags: ["follow-me", "redirection", "mega", "setup"],
    tier: "A",
  },

  {
    id: "pre-26", name: "Palafin Hero", archetype: "Palafin",
    description: "Zero to Hero Palafin with Fake Out switching support",
    pokemonIds: [964, 727, 547, 445, 887, 282],
    sets: [
      { name: "Hero Nuke", nature: "Adamant", ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Jet Punch", "Close Combat", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Switch Support", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "EQ", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Follow Me", nature: "Timid", ability: "Pixilate", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Follow Me", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
    ],
    tags: ["palafin", "zero-to-hero", "tailwind", "pivot"],
    tier: "S",
  },

  {
    id: "pre-27", name: "Meowscarada HO", archetype: "Fast Offense",
    description: "Flower Trick guaranteed crits with full speed offense",
    pokemonIds: [908, 887, 445, 727, 983, 547],
    sets: [
      { name: "Crit Lead", nature: "Jolly", ability: "Protean", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Play Rough", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fast Special", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Covert Cloak", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
    ],
    tags: ["fast", "hyper-offense", "protean", "crits"],
    tier: "A",
  },

  {
    id: "pre-28", name: "Azumarill Belly Drum", archetype: "Belly Drum",
    description: "Azumarill Belly Drum + Fake Out support for free setup",
    pokemonIds: [184, 727, 858, 445, 934, 887],
    sets: [
      { name: "Drum Sweeper", nature: "Adamant", ability: "Huge Power", item: "Sitrus Berry", moves: ["Play Rough", "Aqua Jet", "Belly Drum", "Protect"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "Fake Out", nature: "Careful", ability: "Intimidate", item: "Safety Goggles", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "TR Mode", nature: "Quiet", ability: "Magic Bounce", item: "Focus Sash", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Salt Wall", nature: "Careful", ability: "Purifying Salt", item: "Leftovers", moves: ["Rock Slide", "Body Press", "Recover", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 0, spDef: 2, speed: 0 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
    ],
    tags: ["belly-drum", "huge-power", "trick-room", "setup"],
    tier: "B",
  },

  {
    id: "pre-29", name: "Clefable Redirect", archetype: "Follow Me",
    description: "Magic Guard Clefable Follow Me + Garchomp setup",
    pokemonIds: [36, 445, 727, 887, 983, 858],
    sets: [
      { name: "Follow Me", nature: "Bold", ability: "Magic Guard", item: "Rocky Helmet", moves: ["Follow Me", "Moonblast", "Helping Hand", "Protect"], sp: { hp: 32, attack: 0, defense: 32, spAtk: 2, spDef: 0, speed: 0 } },
      { name: "SD Sweeper", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fake Out", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "TR Backup", nature: "Quiet", ability: "Magic Bounce", item: "Focus Sash", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
    ],
    tags: ["follow-me", "redirection", "setup", "magic-guard"],
    tier: "A",
  },

  {
    id: "pre-30", name: "Sylveon Spread", archetype: "Fairy Spam",
    description: "Pixilate Hyper Voice spread damage + speed control",
    pokemonIds: [700, 445, 727, 547, 983, 130],
    sets: [
      { name: "Pixilate Spread", nature: "Modest", ability: "Pixilate", item: "Choice Specs", moves: ["Hyper Voice", "Shadow Ball", "Mystical Fire", "Quick Attack"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fake Out", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Finisher", nature: "Adamant", ability: "Supreme Overlord", item: "Assault Vest", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Brick Break"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "DD Mega", nature: "Jolly", ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
    ],
    tags: ["fairy", "spread", "hyper-voice", "tailwind"],
    tier: "B",
  },

  {
    id: "pre-32", name: "Mega Kangaskhan Offense", archetype: "Parental Bond",
    description: "Mega Kangaskhan Parental Bond for double-hit domination",
    pokemonIds: [115, 445, 282, 727, 547, 130],
    sets: [
      { name: "Mega Lead", nature: "Jolly", ability: "Scrappy", item: "Kangaskhanite", moves: ["Return", "Sucker Punch", "Fake Out", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Follow Me", nature: "Timid", ability: "Trace", item: "Safety Goggles", moves: ["Psychic", "Dazzling Gleam", "Follow Me", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "DD Sweeper", nature: "Adamant", ability: "Intimidate", item: "Wacan Berry", moves: ["Waterfall", "Power Whip", "Dragon Dance", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
    ],
    tags: ["mega", "parental-bond", "fake-out", "physical"],
    tier: "S",
  },

  {
    id: "pre-35", name: "Archaludon Steel Offense", archetype: "Steel Offense",
    description: "Stamina Archaludon + Intimidate support",
    pokemonIds: [1018, 727, 445, 547, 887, 282],
    sets: [
      { name: "Magnet Attacker", nature: "Modest", ability: "Stamina", item: "Magnet", moves: ["Electro Shot", "Flash Cannon", "Protect", "Snarl"], sp: { hp: 20, attack: 0, defense: 4, spAtk: 32, spDef: 0, speed: 10 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Tailwind", nature: "Timid", ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], sp: { hp: 4, attack: 0, defense: 0, spAtk: 30, spDef: 0, speed: 32 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Follow Me", nature: "Timid", ability: "Trace", item: "Safety Goggles", moves: ["Psychic", "Dazzling Gleam", "Follow Me", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
    ],
    tags: ["mega", "steel", "tough-claws", "physical"],
    tier: "S",
  },

  {
    id: "pre-36", name: "Mega Gyarados DD", archetype: "Dragon Dance",
    description: "Mega Gyarados Dragon Dance sweeper with setup support",
    pokemonIds: [130, 282, 727, 445, 887, 858],
    sets: [
      { name: "DD Mega", nature: "Jolly", ability: "Mold Breaker", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"], sp: { hp: 4, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 30 } },
      { name: "Follow Me", nature: "Timid", ability: "Pixilate", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Follow Me", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "TR Backup", nature: "Quiet", ability: "Magic Bounce", item: "Focus Sash", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
    ],
    tags: ["mega", "dragon-dance", "setup", "sweeper"],
    tier: "A",
  },

  {
    id: "pre-39", name: "Mega Scizor Pivot", archetype: "Pivot Chain",
    description: "Mega Scizor Bug/Steel Technician with U-turn pivoting",
    pokemonIds: [212, 445, 727, 887, 282, 858],
    sets: [
      { name: "Mega Technician", nature: "Adamant", ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"], sp: { hp: 32, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 0 } },
      { name: "EQ Pivot", nature: "Jolly", ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"], sp: { hp: 0, attack: 32, defense: 2, spAtk: 0, spDef: 0, speed: 32 } },
      { name: "Intimidate", nature: "Careful", ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 0, spDef: 32, speed: 0 } },
      { name: "Fast Ghost", nature: "Timid", ability: "Clear Body", item: "Choice Specs", moves: ["Shadow Ball", "Draco Meteor", "Thunderbolt", "Flamethrower"], sp: { hp: 0, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 32 } },
      { name: "Follow Me", nature: "Timid", ability: "Trace", item: "Safety Goggles", moves: ["Psychic", "Dazzling Gleam", "Follow Me", "Protect"], sp: { hp: 20, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 12 } },
      { name: "TR Backup", nature: "Quiet", ability: "Magic Bounce", item: "Focus Sash", moves: ["Trick Room", "Dazzling Gleam", "Psychic", "Protect"], sp: { hp: 32, attack: 0, defense: 2, spAtk: 32, spDef: 0, speed: 0 } },
    ],
    tags: ["mega", "pivot", "technician", "steel"],
    tier: "A",
  },

  {
    id: "pre-41", name: "Mamoswine Hail", archetype: "Weather",
    description: "Abomasnow snow + Mamoswine physical sweeper with Grimmsnarl screens",
    pokemonIds: [460, 473, 478, 706, 861, 911],
    sets: [
      {"name":"Snow Setter","nature":"Brave","ability":"Snow Warning","item":"Abomasite","moves":["Blizzard","Wood Hammer","Ice Shard","Protect"],"sp":{"hp":32,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":0}},
      {"name":"Physical Attacker","nature":"Adamant","ability":"Thick Fat","item":"Life Orb","moves":["Icicle Crash","Earthquake","Ice Shard","Protect"],"sp":{"hp":0,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":32}},
      {"name":"Icy Attacker","nature":"Timid","ability":"Cursed Body","item":"Focus Sash","moves":["Blizzard","Shadow Ball","Icy Wind","Protect"],"sp":{"hp":0,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":32}},
      {"name":"Special Tank","nature":"Modest","ability":"Sap Sipper","item":"Assault Vest","moves":["Draco Meteor","Flamethrower","Thunderbolt","Sludge Bomb"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":0}},
      {"name":"Screens Lead","nature":"Careful","ability":"Prankster","item":"Light Clay","moves":["Reflect","Light Screen","Spirit Break","Fake Out"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":0,"spDef":32,"speed":0}},
      {"name":"Unaware Wall","nature":"Bold","ability":"Unaware","item":"Sitrus Berry","moves":["Torch Song","Shadow Ball","Will-O-Wisp","Protect"],"sp":{"hp":32,"attack":0,"defense":32,"spAtk":0,"spDef":2,"speed":0}},
    ],
    tags: ["weather","snow","physical","screens"],
    tier: "B",
  },

  {
    id: "pre-42", name: "Mega Chandelure TR", archetype: "Trick Room",
    description: "Mega Chandelure under Trick Room with slow powerhouses",
    pokemonIds: [609, 858, 709, 842, 861, 473],
    sets: [
      {"name":"Mega Soul Furnace","nature":"Quiet","ability":"Soul Furnace","item":"Chandelurite","moves":["Heat Wave","Shadow Ball","Energy Ball","Protect"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":0}},
      {"name":"TR Setter","nature":"Quiet","ability":"Magic Bounce","item":"Focus Sash","moves":["Trick Room","Dazzling Gleam","Psychic","Protect"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":0}},
      {"name":"Harvest TR","nature":"Brave","ability":"Harvest","item":"Sitrus Berry","moves":["Wood Hammer","Shadow Claw","Horn Leech","Protect"],"sp":{"hp":32,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":0}},
      {"name":"TR Tank","nature":"Quiet","ability":"Thick Fat","item":"Sitrus Berry","moves":["Apple Acid","Dragon Pulse","Recover","Protect"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":0}},
      {"name":"Screens Lead","nature":"Careful","ability":"Prankster","item":"Light Clay","moves":["Reflect","Light Screen","Spirit Break","Fake Out"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":0,"spDef":32,"speed":0}},
      {"name":"Ice Attacker","nature":"Adamant","ability":"Thick Fat","item":"Assault Vest","moves":["Icicle Crash","Earthquake","Rock Slide","Ice Shard"],"sp":{"hp":32,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":0}},
    ],
    tags: ["mega","trick-room","fire","ghost"],
    tier: "A",
  },

  {
    id: "pre-43", name: "Mega Floette Fairy", archetype: "Fairy Core",
    description: "Mega Floette spamming Fairy damage with Grimmsnarl support",
    pokemonIds: [10061, 861, 911, 473, 706, 547],
    sets: [
      {"name":"Mega Eternal Bloom","nature":"Timid","ability":"Eternal Bloom","item":"Floettite","moves":["Moonblast","Dazzling Gleam","Psychic","Protect"],"sp":{"hp":0,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":32}},
      {"name":"Screens Lead","nature":"Careful","ability":"Prankster","item":"Light Clay","moves":["Reflect","Light Screen","Spirit Break","Fake Out"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":0,"spDef":32,"speed":0}},
      {"name":"Unaware Wall","nature":"Bold","ability":"Unaware","item":"Sitrus Berry","moves":["Torch Song","Shadow Ball","Will-O-Wisp","Protect"],"sp":{"hp":32,"attack":0,"defense":32,"spAtk":0,"spDef":2,"speed":0}},
      {"name":"Physical Attacker","nature":"Adamant","ability":"Thick Fat","item":"Life Orb","moves":["Icicle Crash","Earthquake","Ice Shard","Protect"],"sp":{"hp":0,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":32}},
      {"name":"Special Tank","nature":"Modest","ability":"Sap Sipper","item":"Assault Vest","moves":["Draco Meteor","Flamethrower","Thunderbolt","Sludge Bomb"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":0}},
      {"name":"Tailwind","nature":"Timid","ability":"Prankster","item":"Focus Sash","moves":["Tailwind","Moonblast","Encore","Protect"],"sp":{"hp":4,"attack":0,"defense":0,"spAtk":30,"spDef":0,"speed":32}},
    ],
    tags: ["mega","fairy","screens","offensive"],
    tier: "A",
  },

  {
    id: "pre-44", name: "Grimmsnarl Screens HO", archetype: "Hyper Offense",
    description: "Grimmsnarl sets screens for hyper offensive sweepers",
    pokemonIds: [861, 445, 911, 609, 530, 282],
    sets: [
      {"name":"Screens Lead","nature":"Careful","ability":"Prankster","item":"Light Clay","moves":["Reflect","Light Screen","Spirit Break","Fake Out"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":0,"spDef":32,"speed":0}},
      {"name":"EQ Sweeper","nature":"Jolly","ability":"Rough Skin","item":"Life Orb","moves":["Earthquake","Dragon Claw","Rock Slide","Protect"],"sp":{"hp":0,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":32}},
      {"name":"Special Attacker","nature":"Modest","ability":"Blaze","item":"Life Orb","moves":["Torch Song","Shadow Ball","Heat Wave","Protect"],"sp":{"hp":0,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":32}},
      {"name":"Mega Soul Furnace","nature":"Timid","ability":"Soul Furnace","item":"Chandelurite","moves":["Heat Wave","Shadow Ball","Energy Ball","Protect"],"sp":{"hp":0,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":32}},
      {"name":"Sand Rush","nature":"Jolly","ability":"Sand Rush","item":"Choice Scarf","moves":["Earthquake","Iron Head","Rock Slide","Rapid Spin"],"sp":{"hp":0,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":32}},
      {"name":"Mega Support","nature":"Timid","ability":"Pixilate","item":"Gardevoirite","moves":["Hyper Voice","Psychic","Trick Room","Protect"],"sp":{"hp":20,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":12}},
    ],
    tags: ["hyper-offense","screens","dark","fairy"],
    tier: "A",
  },

  {
    id: "pre-45", name: "Dragon Core Balance", archetype: "Balance",
    description: "Goodra and Appletun dragon core with balanced coverage",
    pokemonIds: [706, 709, 842, 473, 727, 547],
    sets: [
      {"name":"Special Tank","nature":"Modest","ability":"Sap Sipper","item":"Assault Vest","moves":["Draco Meteor","Flamethrower","Thunderbolt","Sludge Bomb"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":0}},
      {"name":"Harvest TR","nature":"Brave","ability":"Harvest","item":"Sitrus Berry","moves":["Wood Hammer","Shadow Claw","Horn Leech","Protect"],"sp":{"hp":32,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":0}},
      {"name":"TR Tank","nature":"Quiet","ability":"Thick Fat","item":"Sitrus Berry","moves":["Apple Acid","Dragon Pulse","Recover","Protect"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":32,"spDef":0,"speed":0}},
      {"name":"Focus Sash Lead","nature":"Jolly","ability":"Thick Fat","item":"Focus Sash","moves":["Icicle Crash","Earthquake","Ice Shard","Protect"],"sp":{"hp":0,"attack":32,"defense":2,"spAtk":0,"spDef":0,"speed":32}},
      {"name":"Intimidate","nature":"Careful","ability":"Intimidate","item":"Sitrus Berry","moves":["Flare Blitz","Darkest Lariat","Fake Out","Protect"],"sp":{"hp":32,"attack":0,"defense":2,"spAtk":0,"spDef":32,"speed":0}},
      {"name":"Tailwind","nature":"Timid","ability":"Prankster","item":"Focus Sash","moves":["Tailwind","Moonblast","Encore","Protect"],"sp":{"hp":4,"attack":0,"defense":0,"spAtk":30,"spDef":0,"speed":32}},
    ],
    tags: ["dragon","balance","bulky","coverage"],
    tier: "B",
  },
];

/** Get prebuilt teams filtered by tag */
export function getPrebuiltTeamsByTag(tag: string): PrebuiltTeam[] {
  return PREBUILT_TEAMS.filter(t => t.tags.includes(tag));
}

/** Get prebuilt teams that include a specific Pokémon */
export function getPrebuiltTeamsWithPokemon(pokemonId: number): PrebuiltTeam[] {
  return PREBUILT_TEAMS.filter(t => t.pokemonIds.includes(pokemonId));
}

/** Get all unique archetype tags */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const t of PREBUILT_TEAMS) {
    for (const tag of t.tags) tags.add(tag);
  }
  return [...tags].sort();
}
