// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB — AUTO-GENERATED SIMULATION DATA
// Generated from 2,000,000 mega-aware battle simulations
// Date: 2026-04-05T13:22:41.766Z
// ═══════════════════════════════════════════════════════════════════════════════

export interface SimPokemonData {
  id: number;
  name: string;
  isMega: boolean;
  elo: number;
  winRate: number;
  appearances: number;
  wins: number;
  losses: number;
  bestPartners: { name: string; winRate: number; games: number }[];
  bestSets: { set: string; winRate: number; games: number }[];
}

export interface SimPairData {
  pokemon1: string;
  pokemon2: string;
  winRate: number;
  games: number;
}

export interface SimArchetypeData {
  name: string;
  elo: number;
  winRate: number;
  wins: number;
  losses: number;
}

export interface SimMoveData {
  name: string;
  winRate: number;
  appearances: number;
}

export interface SimMetaSnapshot {
  tier1: string[];
  tier2: string[];
  tier3: string[];
  dominantArchetypes: string[];
  underratedPokemon: string[];
  overratedPokemon: string[];
  bestCores: string[];
}

/** Pokemon simulation data keyed by "id" or "id-mega" */
export const SIM_POKEMON: Record<string, SimPokemonData> = {
  "3": {
    "id": 3,
    "name": "Venusaur",
    "isMega": false,
    "elo": 9219,
    "winRate": 50.9,
    "appearances": 376850,
    "wins": 191781,
    "losses": 185069,
    "bestPartners": [
      {
        "name": "Gliscor",
        "winRate": 60.8,
        "games": 4159
      },
      {
        "name": "Archaludon",
        "winRate": 60.1,
        "games": 12943
      },
      {
        "name": "Mega Blastoise",
        "winRate": 58.6,
        "games": 9141
      },
      {
        "name": "Primarina",
        "winRate": 57.3,
        "games": 9072
      },
      {
        "name": "Krookodile",
        "winRate": 56.5,
        "games": 9294
      }
    ],
    "bestSets": []
  },
  "6": {
    "id": 6,
    "name": "Charizard",
    "isMega": false,
    "elo": 9269,
    "winRate": 50.2,
    "appearances": 221460,
    "wins": 111228,
    "losses": 110232,
    "bestPartners": [
      {
        "name": "Mega Sableye",
        "winRate": 64.1,
        "games": 4029
      },
      {
        "name": "Chesnaught",
        "winRate": 57.2,
        "games": 9263
      },
      {
        "name": "Palafin",
        "winRate": 56.5,
        "games": 14102
      },
      {
        "name": "Clefable",
        "winRate": 56.4,
        "games": 9400
      },
      {
        "name": "Tinkaton",
        "winRate": 55,
        "games": 19304
      }
    ],
    "bestSets": []
  },
  "9": {
    "id": 9,
    "name": "Blastoise",
    "isMega": false,
    "elo": 9188,
    "winRate": 51.2,
    "appearances": 221083,
    "wins": 113292,
    "losses": 107791,
    "bestPartners": [
      {
        "name": "Hisuian Samurott",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Mega Froslass",
        "winRate": 68.2,
        "games": 7563
      },
      {
        "name": "Houndoom",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Lucario",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Fan Rotom",
        "winRate": 63.8,
        "games": 4083
      }
    ],
    "bestSets": []
  },
  "15": {
    "id": 15,
    "name": "Beedrill",
    "isMega": false,
    "elo": 9107,
    "winRate": 42.9,
    "appearances": 14047,
    "wins": 6029,
    "losses": 8018,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 46.2,
        "games": 10085
      },
      {
        "name": "Incineroar",
        "winRate": 46.2,
        "games": 10085
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 46.2,
        "games": 10085
      },
      {
        "name": "Greninja",
        "winRate": 46.2,
        "games": 10085
      },
      {
        "name": "Garchomp",
        "winRate": 46.2,
        "games": 10085
      }
    ],
    "bestSets": []
  },
  "25": {
    "id": 25,
    "name": "Pikachu",
    "isMega": false,
    "elo": 9138,
    "winRate": 45,
    "appearances": 14163,
    "wins": 6379,
    "losses": 7784,
    "bestPartners": [
      {
        "name": "Sinistcha",
        "winRate": 50.5,
        "games": 5201
      },
      {
        "name": "Charizard",
        "winRate": 50.5,
        "games": 5201
      },
      {
        "name": "Incineroar",
        "winRate": 50.1,
        "games": 10439
      },
      {
        "name": "Krookodile",
        "winRate": 50.1,
        "games": 10439
      },
      {
        "name": "Gyarados",
        "winRate": 49.8,
        "games": 5238
      }
    ],
    "bestSets": []
  },
  "26": {
    "id": 26,
    "name": "Raichu",
    "isMega": false,
    "elo": 9265,
    "winRate": 49.7,
    "appearances": 21576,
    "wins": 10734,
    "losses": 10842,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 50.3,
        "games": 10789
      },
      {
        "name": "Arcanine",
        "winRate": 50.3,
        "games": 10789
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.3,
        "games": 10789
      },
      {
        "name": "Gyarados",
        "winRate": 49.7,
        "games": 21576
      },
      {
        "name": "Incineroar",
        "winRate": 49.7,
        "games": 21576
      }
    ],
    "bestSets": []
  },
  "36": {
    "id": 36,
    "name": "Clefable",
    "isMega": false,
    "elo": 9256,
    "winRate": 51,
    "appearances": 158742,
    "wins": 80923,
    "losses": 77819,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 64.1,
        "games": 4029
      },
      {
        "name": "Mega Sableye",
        "winRate": 64.1,
        "games": 4029
      },
      {
        "name": "Mega Gyarados",
        "winRate": 62.6,
        "games": 4166
      },
      {
        "name": "Froslass",
        "winRate": 62.6,
        "games": 4166
      },
      {
        "name": "Mega Pinsir",
        "winRate": 61.1,
        "games": 4239
      }
    ],
    "bestSets": []
  },
  "38": {
    "id": 38,
    "name": "Ninetales",
    "isMega": false,
    "elo": 9267,
    "winRate": 48.8,
    "appearances": 88215,
    "wins": 43050,
    "losses": 45165,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 50.7,
        "games": 5283
      },
      {
        "name": "Typhlosion",
        "winRate": 50.6,
        "games": 5424
      },
      {
        "name": "Basculegion",
        "winRate": 50.6,
        "games": 5266
      },
      {
        "name": "Garchomp",
        "winRate": 50.6,
        "games": 5266
      },
      {
        "name": "Empoleon",
        "winRate": 50.6,
        "games": 5266
      }
    ],
    "bestSets": []
  },
  "59": {
    "id": 59,
    "name": "Arcanine",
    "isMega": false,
    "elo": 9175,
    "winRate": 48.8,
    "appearances": 458666,
    "wins": 223983,
    "losses": 234683,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 56.7,
        "games": 4631
      },
      {
        "name": "Archaludon",
        "winRate": 53.1,
        "games": 5055
      },
      {
        "name": "Kommo-o",
        "winRate": 52.1,
        "games": 10473
      },
      {
        "name": "Mega Garchomp",
        "winRate": 51.8,
        "games": 5187
      },
      {
        "name": "Mega Hawlucha",
        "winRate": 51.7,
        "games": 10518
      }
    ],
    "bestSets": []
  },
  "65": {
    "id": 65,
    "name": "Alakazam",
    "isMega": false,
    "elo": 9141,
    "winRate": 47,
    "appearances": 14779,
    "wins": 6951,
    "losses": 7828,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 49.6,
        "games": 10368
      },
      {
        "name": "Incineroar",
        "winRate": 49.6,
        "games": 10368
      },
      {
        "name": "Conkeldurr",
        "winRate": 49.6,
        "games": 10368
      },
      {
        "name": "Crabominable",
        "winRate": 49.6,
        "games": 10368
      },
      {
        "name": "Azumarill",
        "winRate": 49.6,
        "games": 10368
      }
    ],
    "bestSets": []
  },
  "71": {
    "id": 71,
    "name": "Victreebel",
    "isMega": false,
    "elo": 9205,
    "winRate": 51.8,
    "appearances": 23755,
    "wins": 12312,
    "losses": 11443,
    "bestPartners": [
      {
        "name": "Heat Rotom",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Tsareena",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Mega Blastoise",
        "winRate": 60.4,
        "games": 8766
      },
      {
        "name": "Whimsicott",
        "winRate": 60.4,
        "games": 8766
      },
      {
        "name": "Dragapult",
        "winRate": 60.4,
        "games": 8766
      }
    ],
    "bestSets": []
  },
  "80": {
    "id": 80,
    "name": "Slowbro",
    "isMega": false,
    "elo": 9276,
    "winRate": 50.3,
    "appearances": 263049,
    "wins": 132272,
    "losses": 130777,
    "bestPartners": [
      {
        "name": "Rhyperior",
        "winRate": 66.2,
        "games": 7813
      },
      {
        "name": "Snorlax",
        "winRate": 63.7,
        "games": 8308
      },
      {
        "name": "Mega Venusaur",
        "winRate": 62.1,
        "games": 4233
      },
      {
        "name": "Primarina",
        "winRate": 62.1,
        "games": 4233
      },
      {
        "name": "Torkoal",
        "winRate": 60.8,
        "games": 17452
      }
    ],
    "bestSets": []
  },
  "94": {
    "id": 94,
    "name": "Gengar",
    "isMega": false,
    "elo": 9064,
    "winRate": 49.7,
    "appearances": 289811,
    "wins": 144036,
    "losses": 145775,
    "bestPartners": [
      {
        "name": "Mega Greninja",
        "winRate": 50.3,
        "games": 5171
      },
      {
        "name": "Rotom",
        "winRate": 50.3,
        "games": 5171
      },
      {
        "name": "Decidueye",
        "winRate": 50.3,
        "games": 5171
      },
      {
        "name": "Arcanine",
        "winRate": 50.3,
        "games": 5171
      },
      {
        "name": "Mega Metagross",
        "winRate": 50.2,
        "games": 86090
      }
    ],
    "bestSets": []
  },
  "115": {
    "id": 115,
    "name": "Kangaskhan",
    "isMega": false,
    "elo": 9228,
    "winRate": 49.4,
    "appearances": 31697,
    "wins": 15658,
    "losses": 16039,
    "bestPartners": [
      {
        "name": "Mega Sableye",
        "winRate": 50.3,
        "games": 5461
      },
      {
        "name": "Ninetales",
        "winRate": 50.3,
        "games": 5461
      },
      {
        "name": "Snorlax",
        "winRate": 50.3,
        "games": 5461
      },
      {
        "name": "Venusaur",
        "winRate": 50.3,
        "games": 5461
      },
      {
        "name": "Maushold",
        "winRate": 50.3,
        "games": 5461
      }
    ],
    "bestSets": []
  },
  "121": {
    "id": 121,
    "name": "Starmie",
    "isMega": false,
    "elo": 9276,
    "winRate": 49.6,
    "appearances": 36365,
    "wins": 18033,
    "losses": 18332,
    "bestPartners": [
      {
        "name": "Emboar",
        "winRate": 50.4,
        "games": 10819
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 16051
      },
      {
        "name": "Greninja",
        "winRate": 50.4,
        "games": 16051
      },
      {
        "name": "Alolan Raichu",
        "winRate": 50.4,
        "games": 16051
      },
      {
        "name": "Mega Emboar",
        "winRate": 50.4,
        "games": 5232
      }
    ],
    "bestSets": []
  },
  "127": {
    "id": 127,
    "name": "Pinsir",
    "isMega": false,
    "elo": 9239,
    "winRate": 50.7,
    "appearances": 29698,
    "wins": 15049,
    "losses": 14649,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 56.1,
        "games": 9453
      },
      {
        "name": "Kingambit",
        "winRate": 56.1,
        "games": 9453
      },
      {
        "name": "Empoleon",
        "winRate": 56.1,
        "games": 9453
      },
      {
        "name": "Rhyperior",
        "winRate": 56.1,
        "games": 9453
      },
      {
        "name": "Wash Rotom",
        "winRate": 56.1,
        "games": 9453
      }
    ],
    "bestSets": []
  },
  "128": {
    "id": 128,
    "name": "Tauros",
    "isMega": false,
    "elo": 9188,
    "winRate": 48.7,
    "appearances": 300154,
    "wins": 146295,
    "losses": 153859,
    "bestPartners": [
      {
        "name": "Alcremie",
        "winRate": 61.5,
        "games": 4252
      },
      {
        "name": "Archaludon",
        "winRate": 61.2,
        "games": 17102
      },
      {
        "name": "Floette",
        "winRate": 60.2,
        "games": 8807
      },
      {
        "name": "Scizor",
        "winRate": 58.2,
        "games": 22233
      },
      {
        "name": "Empoleon",
        "winRate": 56.8,
        "games": 32729
      }
    ],
    "bestSets": []
  },
  "130": {
    "id": 130,
    "name": "Gyarados",
    "isMega": false,
    "elo": 9190,
    "winRate": 50.2,
    "appearances": 1269761,
    "wins": 636925,
    "losses": 632836,
    "bestPartners": [
      {
        "name": "Mega Venusaur",
        "winRate": 60.3,
        "games": 4336
      },
      {
        "name": "Primarina",
        "winRate": 60.2,
        "games": 13073
      },
      {
        "name": "Meganium",
        "winRate": 58.2,
        "games": 8961
      },
      {
        "name": "Mega Garchomp Z",
        "winRate": 58,
        "games": 8831
      },
      {
        "name": "Mega Meganium",
        "winRate": 57.7,
        "games": 4570
      }
    ],
    "bestSets": []
  },
  "132": {
    "id": 132,
    "name": "Ditto",
    "isMega": false,
    "elo": 9086,
    "winRate": 42.5,
    "appearances": 17992,
    "wins": 7640,
    "losses": 10352,
    "bestPartners": [
      {
        "name": "Spiritomb",
        "winRate": 49.7,
        "games": 5071
      },
      {
        "name": "Krookodile",
        "winRate": 49.7,
        "games": 5071
      },
      {
        "name": "Incineroar",
        "winRate": 49.7,
        "games": 5071
      },
      {
        "name": "Snorlax",
        "winRate": 49.7,
        "games": 5071
      },
      {
        "name": "Tauros",
        "winRate": 49,
        "games": 5369
      }
    ],
    "bestSets": []
  },
  "134": {
    "id": 134,
    "name": "Vaporeon",
    "isMega": false,
    "elo": 9254,
    "winRate": 50.6,
    "appearances": 27068,
    "wins": 13699,
    "losses": 13369,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 51.9,
        "games": 5279
      },
      {
        "name": "Tauros",
        "winRate": 51.9,
        "games": 5279
      },
      {
        "name": "Empoleon",
        "winRate": 51.9,
        "games": 5279
      },
      {
        "name": "Torterra",
        "winRate": 51.3,
        "games": 10736
      },
      {
        "name": "Blastoise",
        "winRate": 50.8,
        "games": 10646
      }
    ],
    "bestSets": []
  },
  "135": {
    "id": 135,
    "name": "Jolteon",
    "isMega": false,
    "elo": 9230,
    "winRate": 47.5,
    "appearances": 14979,
    "wins": 7117,
    "losses": 7862,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 49.9,
        "games": 10494
      },
      {
        "name": "Krookodile",
        "winRate": 49.9,
        "games": 5296
      },
      {
        "name": "Arcanine",
        "winRate": 49.9,
        "games": 5296
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.9,
        "games": 5296
      },
      {
        "name": "Araquanid",
        "winRate": 49.9,
        "games": 5198
      }
    ],
    "bestSets": []
  },
  "136": {
    "id": 136,
    "name": "Flareon",
    "isMega": false,
    "elo": 9151,
    "winRate": 48,
    "appearances": 15361,
    "wins": 7366,
    "losses": 7995,
    "bestPartners": [
      {
        "name": "Ninetales",
        "winRate": 50.1,
        "games": 5322
      },
      {
        "name": "Venusaur",
        "winRate": 50.1,
        "games": 5322
      },
      {
        "name": "Scovillain",
        "winRate": 50.1,
        "games": 5322
      },
      {
        "name": "Charizard",
        "winRate": 50.1,
        "games": 5322
      },
      {
        "name": "Leafeon",
        "winRate": 50.1,
        "games": 5322
      }
    ],
    "bestSets": []
  },
  "142": {
    "id": 142,
    "name": "Aerodactyl",
    "isMega": false,
    "elo": 9190,
    "winRate": 50,
    "appearances": 41311,
    "wins": 20666,
    "losses": 20645,
    "bestPartners": [
      {
        "name": "Mega Chesnaught",
        "winRate": 52.7,
        "games": 5131
      },
      {
        "name": "Froslass",
        "winRate": 52.7,
        "games": 5131
      },
      {
        "name": "Talonflame",
        "winRate": 52.7,
        "games": 5131
      },
      {
        "name": "Incineroar",
        "winRate": 51.8,
        "games": 10585
      },
      {
        "name": "Lucario",
        "winRate": 51.8,
        "games": 10585
      }
    ],
    "bestSets": []
  },
  "143": {
    "id": 143,
    "name": "Snorlax",
    "isMega": false,
    "elo": 9156,
    "winRate": 50.4,
    "appearances": 77861,
    "wins": 39276,
    "losses": 38585,
    "bestPartners": [
      {
        "name": "Rhyperior",
        "winRate": 68.5,
        "games": 3749
      },
      {
        "name": "Slowbro",
        "winRate": 63.7,
        "games": 8308
      },
      {
        "name": "Torkoal",
        "winRate": 63.5,
        "games": 12445
      },
      {
        "name": "Drampa",
        "winRate": 63.3,
        "games": 4137
      },
      {
        "name": "Hatterene",
        "winRate": 59.5,
        "games": 17516
      }
    ],
    "bestSets": []
  },
  "149": {
    "id": 149,
    "name": "Dragonite",
    "isMega": false,
    "elo": 9173,
    "winRate": 49.4,
    "appearances": 448760,
    "wins": 221662,
    "losses": 227098,
    "bestPartners": [
      {
        "name": "Ceruledge",
        "winRate": 51.7,
        "games": 5177
      },
      {
        "name": "Archaludon",
        "winRate": 51.7,
        "games": 5177
      },
      {
        "name": "Abomasnow",
        "winRate": 51.7,
        "games": 5177
      },
      {
        "name": "Greninja",
        "winRate": 50.7,
        "games": 26231
      },
      {
        "name": "Umbreon",
        "winRate": 50.6,
        "games": 10390
      }
    ],
    "bestSets": []
  },
  "154": {
    "id": 154,
    "name": "Meganium",
    "isMega": false,
    "elo": 9265,
    "winRate": 54.9,
    "appearances": 14293,
    "wins": 7852,
    "losses": 6441,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 58.2,
        "games": 8961
      },
      {
        "name": "Empoleon",
        "winRate": 58.2,
        "games": 8961
      },
      {
        "name": "Heat Rotom",
        "winRate": 58.2,
        "games": 8961
      },
      {
        "name": "Tinkaton",
        "winRate": 58.2,
        "games": 8961
      },
      {
        "name": "Blastoise",
        "winRate": 58.2,
        "games": 8961
      }
    ],
    "bestSets": []
  },
  "157": {
    "id": 157,
    "name": "Typhlosion",
    "isMega": false,
    "elo": 9198,
    "winRate": 49.5,
    "appearances": 15704,
    "wins": 7771,
    "losses": 7933,
    "bestPartners": [
      {
        "name": "Hisuian Decidueye",
        "winRate": 50.6,
        "games": 5424
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.6,
        "games": 5424
      },
      {
        "name": "Ninetales",
        "winRate": 50.6,
        "games": 5424
      },
      {
        "name": "Aegislash",
        "winRate": 50.6,
        "games": 5424
      },
      {
        "name": "Golurk",
        "winRate": 49.6,
        "games": 5114
      }
    ],
    "bestSets": []
  },
  "160": {
    "id": 160,
    "name": "Feraligatr",
    "isMega": false,
    "elo": 9159,
    "winRate": 48.8,
    "appearances": 31138,
    "wins": 15197,
    "losses": 15941,
    "bestPartners": [
      {
        "name": "Whimsicott",
        "winRate": 50.7,
        "games": 10748
      },
      {
        "name": "Dragapult",
        "winRate": 50.7,
        "games": 10748
      },
      {
        "name": "Venusaur",
        "winRate": 50.7,
        "games": 10748
      },
      {
        "name": "Incineroar",
        "winRate": 50.7,
        "games": 10748
      },
      {
        "name": "Serperior",
        "winRate": 50.7,
        "games": 10748
      }
    ],
    "bestSets": []
  },
  "181": {
    "id": 181,
    "name": "Ampharos",
    "isMega": false,
    "elo": 9134,
    "winRate": 50.7,
    "appearances": 10448,
    "wins": 5294,
    "losses": 5154,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.7,
        "games": 10448
      },
      {
        "name": "Tauros",
        "winRate": 50.7,
        "games": 10448
      },
      {
        "name": "Incineroar",
        "winRate": 50.7,
        "games": 10448
      },
      {
        "name": "Charizard",
        "winRate": 50.7,
        "games": 10448
      },
      {
        "name": "Whimsicott",
        "winRate": 50.7,
        "games": 10448
      }
    ],
    "bestSets": []
  },
  "184": {
    "id": 184,
    "name": "Azumarill",
    "isMega": false,
    "elo": 9227,
    "winRate": 51.4,
    "appearances": 97591,
    "wins": 50117,
    "losses": 47474,
    "bestPartners": [
      {
        "name": "Mega Garchomp Z",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Empoleon",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Primarina",
        "winRate": 60.1,
        "games": 8737
      },
      {
        "name": "Sinistcha",
        "winRate": 56.9,
        "games": 4748
      },
      {
        "name": "Mega Scizor",
        "winRate": 56.9,
        "games": 4748
      }
    ],
    "bestSets": []
  },
  "186": {
    "id": 186,
    "name": "Politoed",
    "isMega": false,
    "elo": 9190,
    "winRate": 49.9,
    "appearances": 181711,
    "wins": 90616,
    "losses": 91095,
    "bestPartners": [
      {
        "name": "Mega Blastoise",
        "winRate": 50.5,
        "games": 21191
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 21601
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.4,
        "games": 5179
      },
      {
        "name": "Glimmora",
        "winRate": 50.3,
        "games": 10684
      },
      {
        "name": "Slowbro",
        "winRate": 50.3,
        "games": 16171
      }
    ],
    "bestSets": []
  },
  "196": {
    "id": 196,
    "name": "Espeon",
    "isMega": false,
    "elo": 9131,
    "winRate": 44,
    "appearances": 18917,
    "wins": 8318,
    "losses": 10599,
    "bestPartners": [
      {
        "name": "Ditto",
        "winRate": 49,
        "games": 5369
      },
      {
        "name": "Tauros",
        "winRate": 49,
        "games": 5369
      },
      {
        "name": "Gyarados",
        "winRate": 49,
        "games": 5369
      },
      {
        "name": "Dragapult",
        "winRate": 46.8,
        "games": 10062
      },
      {
        "name": "Froslass",
        "winRate": 45.2,
        "games": 9813
      }
    ],
    "bestSets": []
  },
  "197": {
    "id": 197,
    "name": "Umbreon",
    "isMega": false,
    "elo": 9150,
    "winRate": 48.8,
    "appearances": 68522,
    "wins": 33449,
    "losses": 35073,
    "bestPartners": [
      {
        "name": "Absol",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Drampa",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Primarina",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Empoleon",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Ceruledge",
        "winRate": 55.9,
        "games": 9456
      }
    ],
    "bestSets": []
  },
  "199": {
    "id": 199,
    "name": "Slowking",
    "isMega": false,
    "elo": 9198,
    "winRate": 48.7,
    "appearances": 18519,
    "wins": 9025,
    "losses": 9494,
    "bestPartners": [
      {
        "name": "Infernape",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Hydreigon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Archaludon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Decidueye",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Metagross",
        "winRate": 60.1,
        "games": 4408
      }
    ],
    "bestSets": []
  },
  "208": {
    "id": 208,
    "name": "Steelix",
    "isMega": false,
    "elo": 9235,
    "winRate": 48.7,
    "appearances": 102951,
    "wins": 50127,
    "losses": 52824,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 51.2,
        "games": 5285
      },
      {
        "name": "Sneasler",
        "winRate": 51.2,
        "games": 5285
      },
      {
        "name": "Incineroar",
        "winRate": 51,
        "games": 15569
      },
      {
        "name": "Rhyperior",
        "winRate": 50.6,
        "games": 21380
      },
      {
        "name": "Mega Slowbro",
        "winRate": 50.5,
        "games": 10179
      }
    ],
    "bestSets": []
  },
  "212": {
    "id": 212,
    "name": "Scizor",
    "isMega": false,
    "elo": 9239,
    "winRate": 50.7,
    "appearances": 396735,
    "wins": 200983,
    "losses": 195752,
    "bestPartners": [
      {
        "name": "Alcremie",
        "winRate": 61.5,
        "games": 4252
      },
      {
        "name": "Floette",
        "winRate": 60.2,
        "games": 8807
      },
      {
        "name": "Tauros",
        "winRate": 58.2,
        "games": 22233
      },
      {
        "name": "Archaludon",
        "winRate": 58,
        "games": 27203
      },
      {
        "name": "Empoleon",
        "winRate": 57.2,
        "games": 32200
      }
    ],
    "bestSets": []
  },
  "214": {
    "id": 214,
    "name": "Heracross",
    "isMega": false,
    "elo": 9275,
    "winRate": 49,
    "appearances": 45862,
    "wins": 22460,
    "losses": 23402,
    "bestPartners": [
      {
        "name": "Mega Meowstic",
        "winRate": 53.2,
        "games": 5125
      },
      {
        "name": "Azumarill",
        "winRate": 53.2,
        "games": 5125
      },
      {
        "name": "Crabominable",
        "winRate": 51.8,
        "games": 10584
      },
      {
        "name": "Gyarados",
        "winRate": 51.4,
        "games": 15696
      },
      {
        "name": "Kingambit",
        "winRate": 50.9,
        "games": 15646
      }
    ],
    "bestSets": []
  },
  "227": {
    "id": 227,
    "name": "Skarmory",
    "isMega": false,
    "elo": 9202,
    "winRate": 49.4,
    "appearances": 93596,
    "wins": 46197,
    "losses": 47399,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 54.2,
        "games": 4983
      },
      {
        "name": "Basculegion",
        "winRate": 54.2,
        "games": 4983
      },
      {
        "name": "Kingambit",
        "winRate": 54.2,
        "games": 4983
      },
      {
        "name": "Archaludon",
        "winRate": 52.4,
        "games": 10403
      },
      {
        "name": "Mega Scovillain",
        "winRate": 50.7,
        "games": 5420
      }
    ],
    "bestSets": []
  },
  "229": {
    "id": 229,
    "name": "Houndoom",
    "isMega": false,
    "elo": 9213,
    "winRate": 54.7,
    "appearances": 14753,
    "wins": 8071,
    "losses": 6682,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Archaludon",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Greninja",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Blastoise",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Lucario",
        "winRate": 66.9,
        "games": 3888
      }
    ],
    "bestSets": []
  },
  "248": {
    "id": 248,
    "name": "Tyranitar",
    "isMega": false,
    "elo": 9177,
    "winRate": 49.8,
    "appearances": 549155,
    "wins": 273434,
    "losses": 275721,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 58.5,
        "games": 13776
      },
      {
        "name": "Drampa",
        "winRate": 57.9,
        "games": 9217
      },
      {
        "name": "Archaludon",
        "winRate": 56.5,
        "games": 4665
      },
      {
        "name": "Aggron",
        "winRate": 56.5,
        "games": 4665
      },
      {
        "name": "Slowbro",
        "winRate": 56.4,
        "games": 14304
      }
    ],
    "bestSets": []
  },
  "279": {
    "id": 279,
    "name": "Pelipper",
    "isMega": false,
    "elo": 9249,
    "winRate": 49.5,
    "appearances": 56619,
    "wins": 28041,
    "losses": 28578,
    "bestPartners": [
      {
        "name": "Torterra",
        "winRate": 50.6,
        "games": 5457
      },
      {
        "name": "Vaporeon",
        "winRate": 50.6,
        "games": 5457
      },
      {
        "name": "Altaria",
        "winRate": 50.1,
        "games": 20725
      },
      {
        "name": "Dragonite",
        "winRate": 50,
        "games": 25653
      },
      {
        "name": "Excadrill",
        "winRate": 50,
        "games": 10125
      }
    ],
    "bestSets": []
  },
  "282": {
    "id": 282,
    "name": "Gardevoir",
    "isMega": false,
    "elo": 9214,
    "winRate": 49.3,
    "appearances": 427141,
    "wins": 210495,
    "losses": 216646,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 52,
        "games": 9982
      },
      {
        "name": "Tatsugiri",
        "winRate": 50.7,
        "games": 5315
      },
      {
        "name": "Venusaur",
        "winRate": 50.7,
        "games": 5315
      },
      {
        "name": "Blastoise",
        "winRate": 50.7,
        "games": 5315
      },
      {
        "name": "Kingambit",
        "winRate": 50.5,
        "games": 36602
      }
    ],
    "bestSets": []
  },
  "302": {
    "id": 302,
    "name": "Sableye",
    "isMega": false,
    "elo": 9195,
    "winRate": 46,
    "appearances": 31776,
    "wins": 14624,
    "losses": 17152,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 61.6,
        "games": 4213
      },
      {
        "name": "Garchomp",
        "winRate": 55.2,
        "games": 9340
      },
      {
        "name": "Dragapult",
        "winRate": 53.4,
        "games": 14712
      },
      {
        "name": "Garganacl",
        "winRate": 50.4,
        "games": 5372
      },
      {
        "name": "Mega Gyarados",
        "winRate": 50.4,
        "games": 5372
      }
    ],
    "bestSets": []
  },
  "306": {
    "id": 306,
    "name": "Aggron",
    "isMega": false,
    "elo": 9187,
    "winRate": 49.4,
    "appearances": 75014,
    "wins": 37085,
    "losses": 37929,
    "bestPartners": [
      {
        "name": "Mega Venusaur",
        "winRate": 60.3,
        "games": 4336
      },
      {
        "name": "Heat Rotom",
        "winRate": 60.3,
        "games": 4336
      },
      {
        "name": "Greninja",
        "winRate": 58.3,
        "games": 9001
      },
      {
        "name": "Tyranitar",
        "winRate": 56.5,
        "games": 4665
      },
      {
        "name": "Archaludon",
        "winRate": 56.5,
        "games": 4665
      }
    ],
    "bestSets": []
  },
  "324": {
    "id": 324,
    "name": "Torkoal",
    "isMega": false,
    "elo": 9248,
    "winRate": 51.5,
    "appearances": 209504,
    "wins": 107997,
    "losses": 101507,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 63.5,
        "games": 12445
      },
      {
        "name": "Slowbro",
        "winRate": 60.8,
        "games": 17452
      },
      {
        "name": "Tyranitar",
        "winRate": 58.5,
        "games": 13776
      },
      {
        "name": "Drampa",
        "winRate": 56.9,
        "games": 18594
      },
      {
        "name": "Kingambit",
        "winRate": 54.1,
        "games": 53122
      }
    ],
    "bestSets": []
  },
  "334": {
    "id": 334,
    "name": "Altaria",
    "isMega": false,
    "elo": 9184,
    "winRate": 47.4,
    "appearances": 145713,
    "wins": 69087,
    "losses": 76626,
    "bestPartners": [
      {
        "name": "Mega Lucario Z",
        "winRate": 50.8,
        "games": 10761
      },
      {
        "name": "Primarina",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Basculegion",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Torterra",
        "winRate": 50.6,
        "games": 5457
      },
      {
        "name": "Azumarill",
        "winRate": 50.6,
        "games": 5457
      }
    ],
    "bestSets": []
  },
  "350": {
    "id": 350,
    "name": "Milotic",
    "isMega": false,
    "elo": 9298,
    "winRate": 50.2,
    "appearances": 84331,
    "wins": 42350,
    "losses": 41981,
    "bestPartners": [
      {
        "name": "Gourgeist",
        "winRate": 50.7,
        "games": 5300
      },
      {
        "name": "Wash Rotom",
        "winRate": 50.7,
        "games": 5300
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.6,
        "games": 10635
      },
      {
        "name": "Vivillon",
        "winRate": 50.5,
        "games": 5335
      },
      {
        "name": "Garganacl",
        "winRate": 50.5,
        "games": 5335
      }
    ],
    "bestSets": []
  },
  "351": {
    "id": 351,
    "name": "Castform",
    "isMega": false,
    "elo": 9203,
    "winRate": 45.9,
    "appearances": 15000,
    "wins": 6887,
    "losses": 8113,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 5551
      },
      {
        "name": "Tauros",
        "winRate": 50.6,
        "games": 5551
      },
      {
        "name": "Incineroar",
        "winRate": 50.6,
        "games": 5551
      },
      {
        "name": "Krookodile",
        "winRate": 50.6,
        "games": 5551
      },
      {
        "name": "Froslass",
        "winRate": 46.1,
        "games": 9995
      }
    ],
    "bestSets": []
  },
  "359": {
    "id": 359,
    "name": "Absol",
    "isMega": false,
    "elo": 9245,
    "winRate": 52.3,
    "appearances": 14893,
    "wins": 7792,
    "losses": 7101,
    "bestPartners": [
      {
        "name": "Ceruledge",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Greninja",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Archaludon",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Krookodile",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Umbreon",
        "winRate": 61,
        "games": 4279
      }
    ],
    "bestSets": []
  },
  "376": {
    "id": 376,
    "name": "Metagross",
    "isMega": false,
    "elo": 9186,
    "winRate": 50.1,
    "appearances": 231730,
    "wins": 116159,
    "losses": 115571,
    "bestPartners": [
      {
        "name": "Infernape",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Slowking",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Hydreigon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Decidueye",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Archaludon",
        "winRate": 56.3,
        "games": 9463
      }
    ],
    "bestSets": []
  },
  "389": {
    "id": 389,
    "name": "Torterra",
    "isMega": false,
    "elo": 9206,
    "winRate": 50.3,
    "appearances": 15921,
    "wins": 8014,
    "losses": 7907,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 51.9,
        "games": 5279
      },
      {
        "name": "Tauros",
        "winRate": 51.9,
        "games": 5279
      },
      {
        "name": "Empoleon",
        "winRate": 51.9,
        "games": 5279
      },
      {
        "name": "Vaporeon",
        "winRate": 51.3,
        "games": 10736
      },
      {
        "name": "Pelipper",
        "winRate": 50.6,
        "games": 5457
      }
    ],
    "bestSets": []
  },
  "392": {
    "id": 392,
    "name": "Infernape",
    "isMega": false,
    "elo": 9230,
    "winRate": 53,
    "appearances": 14799,
    "wins": 7846,
    "losses": 6953,
    "bestPartners": [
      {
        "name": "Slowking",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Hydreigon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Archaludon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Metagross",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Decidueye",
        "winRate": 54.4,
        "games": 9631
      }
    ],
    "bestSets": []
  },
  "395": {
    "id": 395,
    "name": "Empoleon",
    "isMega": false,
    "elo": 9207,
    "winRate": 52.7,
    "appearances": 277583,
    "wins": 146275,
    "losses": 131308,
    "bestPartners": [
      {
        "name": "Mega Garchomp Z",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Azumarill",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Primarina",
        "winRate": 63.6,
        "games": 8338
      },
      {
        "name": "Mega Floette",
        "winRate": 63,
        "games": 4043
      },
      {
        "name": "Floette",
        "winRate": 60.2,
        "games": 8807
      }
    ],
    "bestSets": []
  },
  "428": {
    "id": 428,
    "name": "Lopunny",
    "isMega": false,
    "elo": 9202,
    "winRate": 50.3,
    "appearances": 5358,
    "wins": 2696,
    "losses": 2662,
    "bestPartners": [
      {
        "name": "Polteageist",
        "winRate": 50.3,
        "games": 5358
      },
      {
        "name": "Snorlax",
        "winRate": 50.3,
        "games": 5358
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 50.3,
        "games": 5358
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 5358
      },
      {
        "name": "Tyranitar",
        "winRate": 50.3,
        "games": 5358
      }
    ],
    "bestSets": []
  },
  "442": {
    "id": 442,
    "name": "Spiritomb",
    "isMega": false,
    "elo": 9078,
    "winRate": 44.9,
    "appearances": 14402,
    "wins": 6471,
    "losses": 7931,
    "bestPartners": [
      {
        "name": "Ditto",
        "winRate": 49.7,
        "games": 5071
      },
      {
        "name": "Hatterene",
        "winRate": 49.7,
        "games": 5071
      },
      {
        "name": "Krookodile",
        "winRate": 47.5,
        "games": 10039
      },
      {
        "name": "Snorlax",
        "winRate": 47.5,
        "games": 10039
      },
      {
        "name": "Tauros",
        "winRate": 45.3,
        "games": 4968
      }
    ],
    "bestSets": []
  },
  "445": {
    "id": 445,
    "name": "Garchomp",
    "isMega": false,
    "elo": 9181,
    "winRate": 50.2,
    "appearances": 1686386,
    "wins": 846001,
    "losses": 840385,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Fan Rotom",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Sneasler",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Mega Pinsir",
        "winRate": 61.1,
        "games": 4239
      }
    ],
    "bestSets": []
  },
  "448": {
    "id": 448,
    "name": "Lucario",
    "isMega": false,
    "elo": 9279,
    "winRate": 50.2,
    "appearances": 70893,
    "wins": 35586,
    "losses": 35307,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Greninja",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Blastoise",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Houndoom",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Archaludon",
        "winRate": 56.8,
        "games": 9234
      }
    ],
    "bestSets": []
  },
  "450": {
    "id": 450,
    "name": "Hippowdon",
    "isMega": false,
    "elo": 9193,
    "winRate": 49.7,
    "appearances": 15900,
    "wins": 7896,
    "losses": 8004,
    "bestPartners": [
      {
        "name": "Mega Tyranitar",
        "winRate": 50.3,
        "games": 5387
      },
      {
        "name": "Excadrill",
        "winRate": 50.3,
        "games": 5387
      },
      {
        "name": "Garchomp",
        "winRate": 50.3,
        "games": 5387
      },
      {
        "name": "Rhyperior",
        "winRate": 50.3,
        "games": 5387
      },
      {
        "name": "Krookodile",
        "winRate": 50.3,
        "games": 5387
      }
    ],
    "bestSets": []
  },
  "460": {
    "id": 460,
    "name": "Abomasnow",
    "isMega": false,
    "elo": 9279,
    "winRate": 50.1,
    "appearances": 26477,
    "wins": 13255,
    "losses": 13222,
    "bestPartners": [
      {
        "name": "Ceruledge",
        "winRate": 51.7,
        "games": 5177
      },
      {
        "name": "Kingambit",
        "winRate": 51.7,
        "games": 5177
      },
      {
        "name": "Archaludon",
        "winRate": 51.7,
        "games": 5177
      },
      {
        "name": "Dragonite",
        "winRate": 51.7,
        "games": 5177
      },
      {
        "name": "Umbreon",
        "winRate": 51.7,
        "games": 5177
      }
    ],
    "bestSets": []
  },
  "461": {
    "id": 461,
    "name": "Weavile",
    "isMega": false,
    "elo": 9205,
    "winRate": 46.6,
    "appearances": 42715,
    "wins": 19911,
    "losses": 22804,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 59,
        "games": 4403
      },
      {
        "name": "Mega Metagross",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Kommo-o",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Gyarados",
        "winRate": 52.3,
        "games": 14996
      },
      {
        "name": "Milotic",
        "winRate": 50.5,
        "games": 5498
      }
    ],
    "bestSets": []
  },
  "464": {
    "id": 464,
    "name": "Rhyperior",
    "isMega": false,
    "elo": 9260,
    "winRate": 50.9,
    "appearances": 252626,
    "wins": 128579,
    "losses": 124047,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 68.5,
        "games": 3749
      },
      {
        "name": "Slowbro",
        "winRate": 66.2,
        "games": 7813
      },
      {
        "name": "Pinsir",
        "winRate": 56.1,
        "games": 9453
      },
      {
        "name": "Drampa",
        "winRate": 53.1,
        "games": 20080
      },
      {
        "name": "Kingambit",
        "winRate": 53,
        "games": 64094
      }
    ],
    "bestSets": []
  },
  "470": {
    "id": 470,
    "name": "Leafeon",
    "isMega": false,
    "elo": 9177,
    "winRate": 50.1,
    "appearances": 15937,
    "wins": 7979,
    "losses": 7958,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 50.7,
        "games": 5283
      },
      {
        "name": "Ninetales",
        "winRate": 50.4,
        "games": 10605
      },
      {
        "name": "Venusaur",
        "winRate": 50.4,
        "games": 10605
      },
      {
        "name": "Scovillain",
        "winRate": 50.4,
        "games": 10605
      },
      {
        "name": "Charizard",
        "winRate": 50.4,
        "games": 10605
      }
    ],
    "bestSets": []
  },
  "471": {
    "id": 471,
    "name": "Glaceon",
    "isMega": false,
    "elo": 9230,
    "winRate": 50.3,
    "appearances": 15973,
    "wins": 8033,
    "losses": 7940,
    "bestPartners": [
      {
        "name": "Mega Skarmory",
        "winRate": 50.8,
        "games": 5257
      },
      {
        "name": "Metagross",
        "winRate": 50.8,
        "games": 5257
      },
      {
        "name": "Krookodile",
        "winRate": 50.8,
        "games": 5257
      },
      {
        "name": "Froslass",
        "winRate": 50.6,
        "games": 10391
      },
      {
        "name": "Mega Metagross",
        "winRate": 50.4,
        "games": 5134
      }
    ],
    "bestSets": []
  },
  "472": {
    "id": 472,
    "name": "Gliscor",
    "isMega": false,
    "elo": 9229,
    "winRate": 52.7,
    "appearances": 39717,
    "wins": 20949,
    "losses": 18768,
    "bestPartners": [
      {
        "name": "Sylveon",
        "winRate": 60.9,
        "games": 4291
      },
      {
        "name": "Venusaur",
        "winRate": 60.8,
        "games": 4159
      },
      {
        "name": "Archaludon",
        "winRate": 58.3,
        "games": 13538
      },
      {
        "name": "Sneasler",
        "winRate": 57.2,
        "games": 9379
      },
      {
        "name": "Primarina",
        "winRate": 57.1,
        "games": 9247
      }
    ],
    "bestSets": []
  },
  "473": {
    "id": 473,
    "name": "Mamoswine",
    "isMega": false,
    "elo": 9191,
    "winRate": 49.6,
    "appearances": 21063,
    "wins": 10442,
    "losses": 10621,
    "bestPartners": [
      {
        "name": "Mega Abomasnow",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Froslass",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Mega Chandelure",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Hatterene",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Trevenant",
        "winRate": 50.5,
        "games": 10461
      }
    ],
    "bestSets": []
  },
  "475": {
    "id": 475,
    "name": "Gallade",
    "isMega": false,
    "elo": 9135,
    "winRate": 43.1,
    "appearances": 9319,
    "wins": 4012,
    "losses": 5307,
    "bestPartners": [
      {
        "name": "Hisuian Arcanine",
        "winRate": 43.1,
        "games": 9319
      },
      {
        "name": "Kingambit",
        "winRate": 43.1,
        "games": 9319
      },
      {
        "name": "Aggron",
        "winRate": 43.1,
        "games": 9319
      },
      {
        "name": "Steelix",
        "winRate": 43.1,
        "games": 9319
      },
      {
        "name": "Galarian Stunfisk",
        "winRate": 43.1,
        "games": 9319
      }
    ],
    "bestSets": []
  },
  "478": {
    "id": 478,
    "name": "Froslass",
    "isMega": false,
    "elo": 9203,
    "winRate": 50.5,
    "appearances": 133381,
    "wins": 67405,
    "losses": 65976,
    "bestPartners": [
      {
        "name": "Primarina",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Mega Scizor",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Archaludon",
        "winRate": 65,
        "games": 8007
      },
      {
        "name": "Ursaluna",
        "winRate": 62.6,
        "games": 4166
      },
      {
        "name": "Mega Gyarados",
        "winRate": 62.6,
        "games": 4166
      }
    ],
    "bestSets": []
  },
  "479": {
    "id": 479,
    "name": "Rotom",
    "isMega": false,
    "elo": 9194,
    "winRate": 46.9,
    "appearances": 49458,
    "wins": 23211,
    "losses": 26247,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 50.3,
        "games": 10599
      },
      {
        "name": "Mega Greninja",
        "winRate": 50.3,
        "games": 5171
      },
      {
        "name": "Decidueye",
        "winRate": 50.3,
        "games": 5171
      },
      {
        "name": "Gengar",
        "winRate": 50.3,
        "games": 5171
      },
      {
        "name": "Arcanine",
        "winRate": 50.3,
        "games": 5171
      }
    ],
    "bestSets": []
  },
  "497": {
    "id": 497,
    "name": "Serperior",
    "isMega": false,
    "elo": 9172,
    "winRate": 51.4,
    "appearances": 65696,
    "wins": 33743,
    "losses": 31953,
    "bestPartners": [
      {
        "name": "Mega Blastoise",
        "winRate": 61.6,
        "games": 4249
      },
      {
        "name": "Mow Rotom",
        "winRate": 57.3,
        "games": 4683
      },
      {
        "name": "Mega Feraligatr",
        "winRate": 56.4,
        "games": 14378
      },
      {
        "name": "Heat Rotom",
        "winRate": 56.4,
        "games": 14262
      },
      {
        "name": "Venusaur",
        "winRate": 52.9,
        "games": 40909
      }
    ],
    "bestSets": []
  },
  "500": {
    "id": 500,
    "name": "Emboar",
    "isMega": false,
    "elo": 9192,
    "winRate": 50,
    "appearances": 26654,
    "wins": 13325,
    "losses": 13329,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 51,
        "games": 5129
      },
      {
        "name": "Kingambit",
        "winRate": 51,
        "games": 5129
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 10819
      },
      {
        "name": "Whimsicott",
        "winRate": 50.4,
        "games": 10819
      },
      {
        "name": "Starmie",
        "winRate": 50.4,
        "games": 10819
      }
    ],
    "bestSets": []
  },
  "503": {
    "id": 503,
    "name": "Samurott",
    "isMega": false,
    "elo": 9170,
    "winRate": 50.4,
    "appearances": 16163,
    "wins": 8141,
    "losses": 8022,
    "bestPartners": [
      {
        "name": "Mudsdale",
        "winRate": 50.6,
        "games": 5366
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 5366
      },
      {
        "name": "Altaria",
        "winRate": 50.6,
        "games": 5366
      },
      {
        "name": "Whimsicott",
        "winRate": 50.6,
        "games": 5366
      },
      {
        "name": "Heat Rotom",
        "winRate": 50.5,
        "games": 10742
      }
    ],
    "bestSets": []
  },
  "530": {
    "id": 530,
    "name": "Excadrill",
    "isMega": false,
    "elo": 9214,
    "winRate": 49.6,
    "appearances": 454790,
    "wins": 225352,
    "losses": 229438,
    "bestPartners": [
      {
        "name": "Mega Kangaskhan",
        "winRate": 50.9,
        "games": 5361
      },
      {
        "name": "Blastoise",
        "winRate": 50.7,
        "games": 10583
      },
      {
        "name": "Primarina",
        "winRate": 50.7,
        "games": 5266
      },
      {
        "name": "Sneasler",
        "winRate": 50.7,
        "games": 5266
      },
      {
        "name": "Whimsicott",
        "winRate": 50.5,
        "games": 47367
      }
    ],
    "bestSets": []
  },
  "531": {
    "id": 531,
    "name": "Audino",
    "isMega": false,
    "elo": 9234,
    "winRate": 50.2,
    "appearances": 10386,
    "wins": 5215,
    "losses": 5171,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.2,
        "games": 10386
      },
      {
        "name": "Hatterene",
        "winRate": 50.2,
        "games": 10386
      },
      {
        "name": "Slowbro",
        "winRate": 50.2,
        "games": 10386
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.2,
        "games": 10386
      },
      {
        "name": "Tauros",
        "winRate": 50.2,
        "games": 10386
      }
    ],
    "bestSets": []
  },
  "534": {
    "id": 534,
    "name": "Conkeldurr",
    "isMega": false,
    "elo": 9255,
    "winRate": 49.8,
    "appearances": 67431,
    "wins": 33596,
    "losses": 33835,
    "bestPartners": [
      {
        "name": "Hatterene",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Dondozo",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Garchomp",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Mimikyu",
        "winRate": 51.9,
        "games": 5078
      },
      {
        "name": "Drampa",
        "winRate": 51.9,
        "games": 5078
      }
    ],
    "bestSets": []
  },
  "547": {
    "id": 547,
    "name": "Whimsicott",
    "isMega": false,
    "elo": 9265,
    "winRate": 49.7,
    "appearances": 1026716,
    "wins": 510438,
    "losses": 516278,
    "bestPartners": [
      {
        "name": "Victreebel",
        "winRate": 60.4,
        "games": 8766
      },
      {
        "name": "Tsareena",
        "winRate": 59.4,
        "games": 8725
      },
      {
        "name": "Heat Rotom",
        "winRate": 57.1,
        "games": 18856
      },
      {
        "name": "Archaludon",
        "winRate": 54.4,
        "games": 14656
      },
      {
        "name": "Mow Rotom",
        "winRate": 54.2,
        "games": 9834
      }
    ],
    "bestSets": []
  },
  "553": {
    "id": 553,
    "name": "Krookodile",
    "isMega": false,
    "elo": 9211,
    "winRate": 50.2,
    "appearances": 466378,
    "wins": 234017,
    "losses": 232361,
    "bestPartners": [
      {
        "name": "Clefable",
        "winRate": 64.1,
        "games": 4029
      },
      {
        "name": "Absol",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Mudsdale",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Hisuian Typhlosion",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Primarina",
        "winRate": 57.9,
        "games": 13571
      }
    ],
    "bestSets": []
  },
  "569": {
    "id": 569,
    "name": "Garbodor",
    "isMega": false,
    "elo": 9119,
    "winRate": 45.8,
    "appearances": 14578,
    "wins": 6672,
    "losses": 7906,
    "bestPartners": [
      {
        "name": "Rhyperior",
        "winRate": 50.6,
        "games": 5474
      },
      {
        "name": "Mega Gyarados",
        "winRate": 50.6,
        "games": 5474
      },
      {
        "name": "Serperior",
        "winRate": 50.6,
        "games": 5474
      },
      {
        "name": "Scizor",
        "winRate": 50.6,
        "games": 5474
      },
      {
        "name": "Tauros",
        "winRate": 50.5,
        "games": 5373
      }
    ],
    "bestSets": []
  },
  "571": {
    "id": 571,
    "name": "Zoroark",
    "isMega": false,
    "elo": 9153,
    "winRate": 46.1,
    "appearances": 29509,
    "wins": 13617,
    "losses": 15892,
    "bestPartners": [
      {
        "name": "Mega Gengar",
        "winRate": 49.5,
        "games": 10569
      },
      {
        "name": "Gyarados",
        "winRate": 49.5,
        "games": 5278
      },
      {
        "name": "Tauros",
        "winRate": 48.7,
        "games": 10566
      },
      {
        "name": "Krookodile",
        "winRate": 47.8,
        "games": 20610
      },
      {
        "name": "Incineroar",
        "winRate": 47.8,
        "games": 20610
      }
    ],
    "bestSets": []
  },
  "584": {
    "id": 584,
    "name": "Vanilluxe",
    "isMega": false,
    "elo": 9224,
    "winRate": 49.9,
    "appearances": 15685,
    "wins": 7825,
    "losses": 7860,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 50.9,
        "games": 5307
      },
      {
        "name": "Palafin",
        "winRate": 50.9,
        "games": 5307
      },
      {
        "name": "Blastoise",
        "winRate": 50.9,
        "games": 5307
      },
      {
        "name": "Gyarados",
        "winRate": 50,
        "games": 5143
      },
      {
        "name": "Arcanine",
        "winRate": 50,
        "games": 5143
      }
    ],
    "bestSets": []
  },
  "587": {
    "id": 587,
    "name": "Emolga",
    "isMega": false,
    "elo": 9142,
    "winRate": 42.6,
    "appearances": 22721,
    "wins": 9677,
    "losses": 13044,
    "bestPartners": [
      {
        "name": "Tyrantrum",
        "winRate": 49.7,
        "games": 5224
      },
      {
        "name": "Primarina",
        "winRate": 49.7,
        "games": 5224
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 49.7,
        "games": 5224
      },
      {
        "name": "Decidueye",
        "winRate": 49.7,
        "games": 5224
      },
      {
        "name": "Fan Rotom",
        "winRate": 49.7,
        "games": 5224
      }
    ],
    "bestSets": []
  },
  "609": {
    "id": 609,
    "name": "Chandelure",
    "isMega": false,
    "elo": 9184,
    "winRate": 49.4,
    "appearances": 10469,
    "wins": 5176,
    "losses": 5293,
    "bestPartners": [
      {
        "name": "Tauros",
        "winRate": 49.4,
        "games": 10469
      },
      {
        "name": "Gyarados",
        "winRate": 49.4,
        "games": 10469
      },
      {
        "name": "Snorlax",
        "winRate": 49.4,
        "games": 10469
      },
      {
        "name": "Dragonite",
        "winRate": 49.4,
        "games": 10469
      },
      {
        "name": "Azumarill",
        "winRate": 49.4,
        "games": 10469
      }
    ],
    "bestSets": []
  },
  "618": {
    "id": 618,
    "name": "Stunfisk",
    "isMega": false,
    "elo": 9178,
    "winRate": 50.2,
    "appearances": 26920,
    "wins": 13527,
    "losses": 13393,
    "bestPartners": [
      {
        "name": "Mega Gyarados",
        "winRate": 50.8,
        "games": 5379
      },
      {
        "name": "Sandaconda",
        "winRate": 50.8,
        "games": 5379
      },
      {
        "name": "Garchomp",
        "winRate": 50.8,
        "games": 5379
      },
      {
        "name": "Corviknight",
        "winRate": 50.7,
        "games": 5420
      },
      {
        "name": "Skarmory",
        "winRate": 50.7,
        "games": 5420
      }
    ],
    "bestSets": []
  },
  "623": {
    "id": 623,
    "name": "Golurk",
    "isMega": false,
    "elo": 9211,
    "winRate": 50.2,
    "appearances": 15879,
    "wins": 7975,
    "losses": 7904,
    "bestPartners": [
      {
        "name": "Arcanine",
        "winRate": 50.6,
        "games": 5308
      },
      {
        "name": "Greninja",
        "winRate": 50.6,
        "games": 5308
      },
      {
        "name": "Kingambit",
        "winRate": 50.6,
        "games": 5308
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 50.5,
        "games": 10765
      },
      {
        "name": "Whimsicott",
        "winRate": 50.4,
        "games": 5457
      }
    ],
    "bestSets": []
  },
  "635": {
    "id": 635,
    "name": "Hydreigon",
    "isMega": false,
    "elo": 9236,
    "winRate": 50.8,
    "appearances": 118948,
    "wins": 60396,
    "losses": 58552,
    "bestPartners": [
      {
        "name": "Infernape",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Slowking",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Archaludon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Decidueye",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Metagross",
        "winRate": 60.1,
        "games": 4408
      }
    ],
    "bestSets": []
  },
  "637": {
    "id": 637,
    "name": "Volcarona",
    "isMega": false,
    "elo": 9214,
    "winRate": 48.1,
    "appearances": 15369,
    "wins": 7393,
    "losses": 7976,
    "bestPartners": [
      {
        "name": "Mega Tyranitar",
        "winRate": 50.3,
        "games": 5213
      },
      {
        "name": "Whimsicott",
        "winRate": 50.3,
        "games": 5213
      },
      {
        "name": "Charizard",
        "winRate": 50.3,
        "games": 5213
      },
      {
        "name": "Hawlucha",
        "winRate": 50.3,
        "games": 5213
      },
      {
        "name": "Talonflame",
        "winRate": 50.3,
        "games": 5213
      }
    ],
    "bestSets": []
  },
  "652": {
    "id": 652,
    "name": "Chesnaught",
    "isMega": false,
    "elo": 9297,
    "winRate": 52.8,
    "appearances": 14038,
    "wins": 7412,
    "losses": 6626,
    "bestPartners": [
      {
        "name": "Charizard",
        "winRate": 57.2,
        "games": 9263
      },
      {
        "name": "Empoleon",
        "winRate": 57.2,
        "games": 9263
      },
      {
        "name": "Heat Rotom",
        "winRate": 57.2,
        "games": 9263
      },
      {
        "name": "Tinkaton",
        "winRate": 57.2,
        "games": 9263
      },
      {
        "name": "Palafin",
        "winRate": 57.2,
        "games": 9263
      }
    ],
    "bestSets": []
  },
  "655": {
    "id": 655,
    "name": "Delphox",
    "isMega": false,
    "elo": 9228,
    "winRate": 46.8,
    "appearances": 69597,
    "wins": 32539,
    "losses": 37058,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 51.1,
        "games": 10675
      },
      {
        "name": "Azumarill",
        "winRate": 51.1,
        "games": 10675
      },
      {
        "name": "Krookodile",
        "winRate": 51.1,
        "games": 10675
      },
      {
        "name": "Kingambit",
        "winRate": 50.7,
        "games": 16007
      },
      {
        "name": "Primarina",
        "winRate": 50.7,
        "games": 5310
      }
    ],
    "bestSets": []
  },
  "658": {
    "id": 658,
    "name": "Greninja",
    "isMega": false,
    "elo": 9199,
    "winRate": 50.4,
    "appearances": 293933,
    "wins": 148150,
    "losses": 145783,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Houndoom",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Lucario",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 62.1,
        "games": 4233
      },
      {
        "name": "Archaludon",
        "winRate": 61.2,
        "games": 12832
      }
    ],
    "bestSets": []
  },
  "660": {
    "id": 660,
    "name": "Diggersby",
    "isMega": false,
    "elo": 9181,
    "winRate": 46.8,
    "appearances": 14215,
    "wins": 6653,
    "losses": 7562,
    "bestPartners": [
      {
        "name": "Charizard",
        "winRate": 50.1,
        "games": 5061
      },
      {
        "name": "Blastoise",
        "winRate": 50,
        "games": 9989
      },
      {
        "name": "Gyarados",
        "winRate": 50,
        "games": 9989
      },
      {
        "name": "Dragonite",
        "winRate": 49.9,
        "games": 4928
      },
      {
        "name": "Pelipper",
        "winRate": 49.9,
        "games": 4928
      }
    ],
    "bestSets": []
  },
  "663": {
    "id": 663,
    "name": "Talonflame",
    "isMega": false,
    "elo": 9220,
    "winRate": 49.9,
    "appearances": 36202,
    "wins": 18074,
    "losses": 18128,
    "bestPartners": [
      {
        "name": "Mega Chesnaught",
        "winRate": 52.7,
        "games": 5131
      },
      {
        "name": "Froslass",
        "winRate": 52.7,
        "games": 5131
      },
      {
        "name": "Aerodactyl",
        "winRate": 52.7,
        "games": 5131
      },
      {
        "name": "Empoleon",
        "winRate": 52.7,
        "games": 5131
      },
      {
        "name": "Metagross",
        "winRate": 51.7,
        "games": 10441
      }
    ],
    "bestSets": []
  },
  "666": {
    "id": 666,
    "name": "Vivillon",
    "isMega": false,
    "elo": 9225,
    "winRate": 48.3,
    "appearances": 15530,
    "wins": 7505,
    "losses": 8025,
    "bestPartners": [
      {
        "name": "Garchomp",
        "winRate": 50.5,
        "games": 5335
      },
      {
        "name": "Milotic",
        "winRate": 50.5,
        "games": 5335
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.4,
        "games": 10602
      },
      {
        "name": "Krookodile",
        "winRate": 48.4,
        "games": 5267
      },
      {
        "name": "Incineroar",
        "winRate": 48.4,
        "games": 5267
      }
    ],
    "bestSets": []
  },
  "670": {
    "id": 670,
    "name": "Floette",
    "isMega": false,
    "elo": 9224,
    "winRate": 60.2,
    "appearances": 8807,
    "wins": 5305,
    "losses": 3502,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 60.2,
        "games": 8807
      },
      {
        "name": "Tauros",
        "winRate": 60.2,
        "games": 8807
      },
      {
        "name": "Kingambit",
        "winRate": 60.2,
        "games": 8807
      },
      {
        "name": "Scizor",
        "winRate": 60.2,
        "games": 8807
      },
      {
        "name": "Empoleon",
        "winRate": 60.2,
        "games": 8807
      }
    ],
    "bestSets": []
  },
  "676": {
    "id": 676,
    "name": "Furfrou",
    "isMega": false,
    "elo": 9138,
    "winRate": 46.8,
    "appearances": 15049,
    "wins": 7047,
    "losses": 8002,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 49.3,
        "games": 5324
      },
      {
        "name": "Incineroar",
        "winRate": 49.3,
        "games": 5324
      },
      {
        "name": "Krookodile",
        "winRate": 49.3,
        "games": 5324
      },
      {
        "name": "Mimikyu",
        "winRate": 49.3,
        "games": 5324
      },
      {
        "name": "Mega Sableye",
        "winRate": 48.7,
        "games": 5309
      }
    ],
    "bestSets": []
  },
  "678": {
    "id": 678,
    "name": "Meowstic",
    "isMega": false,
    "elo": 9116,
    "winRate": 40.6,
    "appearances": 17611,
    "wins": 7157,
    "losses": 10454,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 49.2,
        "games": 10687
      },
      {
        "name": "Krookodile",
        "winRate": 49.2,
        "games": 10687
      },
      {
        "name": "Kingambit",
        "winRate": 49.2,
        "games": 10687
      },
      {
        "name": "Conkeldurr",
        "winRate": 49.2,
        "games": 10687
      },
      {
        "name": "Crabominable",
        "winRate": 49.2,
        "games": 10687
      }
    ],
    "bestSets": []
  },
  "681": {
    "id": 681,
    "name": "Aegislash",
    "isMega": false,
    "elo": 9256,
    "winRate": 49.4,
    "appearances": 356562,
    "wins": 175988,
    "losses": 180574,
    "bestPartners": [
      {
        "name": "Alolan Ninetales",
        "winRate": 52.4,
        "games": 5230
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.7,
        "games": 21376
      },
      {
        "name": "Hawlucha",
        "winRate": 50.7,
        "games": 5374
      },
      {
        "name": "Mega Scizor",
        "winRate": 50.7,
        "games": 5374
      },
      {
        "name": "Lucario",
        "winRate": 50.7,
        "games": 5371
      }
    ],
    "bestSets": []
  },
  "693": {
    "id": 693,
    "name": "Clawitzer",
    "isMega": false,
    "elo": 9241,
    "winRate": 50.1,
    "appearances": 16044,
    "wins": 8033,
    "losses": 8011,
    "bestPartners": [
      {
        "name": "Heat Rotom",
        "winRate": 50.5,
        "games": 5338
      },
      {
        "name": "Meowscarada",
        "winRate": 50.5,
        "games": 5338
      },
      {
        "name": "Sinistcha",
        "winRate": 50.5,
        "games": 5338
      },
      {
        "name": "Whimsicott",
        "winRate": 50.4,
        "games": 5374
      },
      {
        "name": "Dragapult",
        "winRate": 50.4,
        "games": 10712
      }
    ],
    "bestSets": []
  },
  "697": {
    "id": 697,
    "name": "Tyrantrum",
    "isMega": false,
    "elo": 9170,
    "winRate": 49.8,
    "appearances": 15754,
    "wins": 7839,
    "losses": 7915,
    "bestPartners": [
      {
        "name": "Charizard",
        "winRate": 50.5,
        "games": 5371
      },
      {
        "name": "Blastoise",
        "winRate": 50.5,
        "games": 5371
      },
      {
        "name": "Slowbro",
        "winRate": 50.5,
        "games": 5371
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 50.1,
        "games": 10595
      },
      {
        "name": "Clefable",
        "winRate": 49.8,
        "games": 10530
      }
    ],
    "bestSets": []
  },
  "699": {
    "id": 699,
    "name": "Aurorus",
    "isMega": false,
    "elo": 9126,
    "winRate": 42.8,
    "appearances": 13947,
    "wins": 5969,
    "losses": 7978,
    "bestPartners": [
      {
        "name": "Venusaur",
        "winRate": 49.6,
        "games": 5461
      },
      {
        "name": "Sneasler",
        "winRate": 49.6,
        "games": 5461
      },
      {
        "name": "Sinistcha",
        "winRate": 45.6,
        "games": 9959
      },
      {
        "name": "Gyarados",
        "winRate": 43.8,
        "games": 9449
      },
      {
        "name": "Emolga",
        "winRate": 43.8,
        "games": 9449
      }
    ],
    "bestSets": []
  },
  "700": {
    "id": 700,
    "name": "Sylveon",
    "isMega": false,
    "elo": 9252,
    "winRate": 51.3,
    "appearances": 30235,
    "wins": 15509,
    "losses": 14726,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 60.9,
        "games": 4291
      },
      {
        "name": "Sneasler",
        "winRate": 60.9,
        "games": 4291
      },
      {
        "name": "Gliscor",
        "winRate": 60.9,
        "games": 4291
      },
      {
        "name": "Blastoise",
        "winRate": 60.9,
        "games": 4291
      },
      {
        "name": "Mega Gyarados",
        "winRate": 54.7,
        "games": 9493
      }
    ],
    "bestSets": []
  },
  "701": {
    "id": 701,
    "name": "Hawlucha",
    "isMega": false,
    "elo": 9208,
    "winRate": 48.1,
    "appearances": 115627,
    "wins": 55645,
    "losses": 59982,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 59,
        "games": 4403
      },
      {
        "name": "Kommo-o",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Mega Metagross",
        "winRate": 52.9,
        "games": 14868
      },
      {
        "name": "Mega Delphox",
        "winRate": 50.7,
        "games": 5373
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 50.7,
        "games": 5373
      }
    ],
    "bestSets": []
  },
  "706": {
    "id": 706,
    "name": "Goodra",
    "isMega": false,
    "elo": 9207,
    "winRate": 49.3,
    "appearances": 21304,
    "wins": 10502,
    "losses": 10802,
    "bestPartners": [
      {
        "name": "Mega Abomasnow",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Froslass",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Trevenant",
        "winRate": 50.4,
        "games": 5370
      },
      {
        "name": "Appletun",
        "winRate": 50.4,
        "games": 5370
      },
      {
        "name": "Incineroar",
        "winRate": 50.4,
        "games": 5370
      }
    ],
    "bestSets": []
  },
  "707": {
    "id": 707,
    "name": "Klefki",
    "isMega": false,
    "elo": 9221,
    "winRate": 49.1,
    "appearances": 46678,
    "wins": 22920,
    "losses": 23758,
    "bestPartners": [
      {
        "name": "Mega Pinsir",
        "winRate": 53.8,
        "games": 5125
      },
      {
        "name": "Gyarados",
        "winRate": 53.8,
        "games": 5125
      },
      {
        "name": "Wash Rotom",
        "winRate": 53.8,
        "games": 5125
      },
      {
        "name": "Empoleon",
        "winRate": 51.4,
        "games": 15734
      },
      {
        "name": "Mega Tatsugiri",
        "winRate": 50.3,
        "games": 10874
      }
    ],
    "bestSets": []
  },
  "709": {
    "id": 709,
    "name": "Trevenant",
    "isMega": false,
    "elo": 9220,
    "winRate": 50.6,
    "appearances": 15873,
    "wins": 8026,
    "losses": 7847,
    "bestPartners": [
      {
        "name": "Blastoise",
        "winRate": 50.7,
        "games": 5412
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 50.7,
        "games": 5412
      },
      {
        "name": "Arcanine",
        "winRate": 50.7,
        "games": 5412
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.7,
        "games": 5412
      },
      {
        "name": "Slowbro",
        "winRate": 50.7,
        "games": 5412
      }
    ],
    "bestSets": []
  },
  "711": {
    "id": 711,
    "name": "Gourgeist",
    "isMega": false,
    "elo": 9248,
    "winRate": 48.7,
    "appearances": 15311,
    "wins": 7464,
    "losses": 7847,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 50.7,
        "games": 5300
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 50.7,
        "games": 5300
      },
      {
        "name": "Milotic",
        "winRate": 50.7,
        "games": 5300
      },
      {
        "name": "Heat Rotom",
        "winRate": 50.4,
        "games": 5376
      },
      {
        "name": "Samurott",
        "winRate": 50.4,
        "games": 5376
      }
    ],
    "bestSets": []
  },
  "715": {
    "id": 715,
    "name": "Noivern",
    "isMega": false,
    "elo": 9211,
    "winRate": 48.4,
    "appearances": 56288,
    "wins": 27255,
    "losses": 29033,
    "bestPartners": [
      {
        "name": "Mega Lucario Z",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Primarina",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Basculegion",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Excadrill",
        "winRate": 50,
        "games": 10125
      },
      {
        "name": "Pelipper",
        "winRate": 49.9,
        "games": 15268
      }
    ],
    "bestSets": []
  },
  "724": {
    "id": 724,
    "name": "Decidueye",
    "isMega": false,
    "elo": 9196,
    "winRate": 49.7,
    "appearances": 71473,
    "wins": 35510,
    "losses": 35963,
    "bestPartners": [
      {
        "name": "Slowking",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Hydreigon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Archaludon",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Metagross",
        "winRate": 60.1,
        "games": 4408
      },
      {
        "name": "Infernape",
        "winRate": 54.4,
        "games": 9631
      }
    ],
    "bestSets": []
  },
  "727": {
    "id": 727,
    "name": "Incineroar",
    "isMega": false,
    "elo": 9259,
    "winRate": 49.9,
    "appearances": 2033589,
    "wins": 1014538,
    "losses": 1019051,
    "bestPartners": [
      {
        "name": "Hisuian Samurott",
        "winRate": 65.6,
        "games": 7908
      },
      {
        "name": "Mega Froslass",
        "winRate": 62.4,
        "games": 8306
      },
      {
        "name": "Archaludon",
        "winRate": 57.3,
        "games": 18289
      },
      {
        "name": "Farigiraf",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Sinistcha",
        "winRate": 56.1,
        "games": 9442
      }
    ],
    "bestSets": []
  },
  "730": {
    "id": 730,
    "name": "Primarina",
    "isMega": false,
    "elo": 9284,
    "winRate": 54.5,
    "appearances": 87434,
    "wins": 47616,
    "losses": 39818,
    "bestPartners": [
      {
        "name": "Mega Garchomp Z",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Kingambit",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Froslass",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Empoleon",
        "winRate": 63.6,
        "games": 8338
      },
      {
        "name": "Slowbro",
        "winRate": 62.1,
        "games": 4233
      }
    ],
    "bestSets": []
  },
  "733": {
    "id": 733,
    "name": "Toucannon",
    "isMega": false,
    "elo": 9213,
    "winRate": 48.1,
    "appearances": 15619,
    "wins": 7514,
    "losses": 8105,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 50.3,
        "games": 5370
      },
      {
        "name": "Klefki",
        "winRate": 50.3,
        "games": 5370
      },
      {
        "name": "Kingambit",
        "winRate": 50.3,
        "games": 5370
      },
      {
        "name": "Garchomp",
        "winRate": 50.2,
        "games": 10816
      },
      {
        "name": "Krookodile",
        "winRate": 50.1,
        "games": 5446
      }
    ],
    "bestSets": []
  },
  "740": {
    "id": 740,
    "name": "Crabominable",
    "isMega": false,
    "elo": 9240,
    "winRate": 49.2,
    "appearances": 99102,
    "wins": 48778,
    "losses": 50324,
    "bestPartners": [
      {
        "name": "Heracross",
        "winRate": 51.8,
        "games": 10584
      },
      {
        "name": "Mega Meowstic",
        "winRate": 51.5,
        "games": 10566
      },
      {
        "name": "Hydreigon",
        "winRate": 50.6,
        "games": 5459
      },
      {
        "name": "Appletun",
        "winRate": 50.5,
        "games": 5289
      },
      {
        "name": "Mega Starmie",
        "winRate": 50.4,
        "games": 10505
      }
    ],
    "bestSets": []
  },
  "745": {
    "id": 745,
    "name": "Lycanroc",
    "isMega": false,
    "elo": 9160,
    "winRate": 49.6,
    "appearances": 15651,
    "wins": 7760,
    "losses": 7891,
    "bestPartners": [
      {
        "name": "Tyranitar",
        "winRate": 50.7,
        "games": 5288
      },
      {
        "name": "Krookodile",
        "winRate": 50.7,
        "games": 5288
      },
      {
        "name": "Gyarados",
        "winRate": 49.9,
        "games": 5153
      },
      {
        "name": "Whimsicott",
        "winRate": 49.9,
        "games": 5153
      },
      {
        "name": "Decidueye",
        "winRate": 49.9,
        "games": 5153
      }
    ],
    "bestSets": []
  },
  "748": {
    "id": 748,
    "name": "Toxapex",
    "isMega": false,
    "elo": 9196,
    "winRate": 48.3,
    "appearances": 62219,
    "wins": 30053,
    "losses": 32166,
    "bestPartners": [
      {
        "name": "Meowscarada",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Slowbro",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Aggron",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.6,
        "games": 5343
      }
    ],
    "bestSets": []
  },
  "750": {
    "id": 750,
    "name": "Mudsdale",
    "isMega": false,
    "elo": 9186,
    "winRate": 53,
    "appearances": 14834,
    "wins": 7865,
    "losses": 6969,
    "bestPartners": [
      {
        "name": "Mega Gyarados",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Ursaluna",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Archaludon",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Krookodile",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Pawmot",
        "winRate": 59.8,
        "games": 4338
      }
    ],
    "bestSets": []
  },
  "752": {
    "id": 752,
    "name": "Araquanid",
    "isMega": false,
    "elo": 9171,
    "winRate": 47.1,
    "appearances": 34811,
    "wins": 16404,
    "losses": 18407,
    "bestPartners": [
      {
        "name": "Hisuian Decidueye",
        "winRate": 50.7,
        "games": 5373
      },
      {
        "name": "Mega Delphox",
        "winRate": 50.4,
        "games": 10691
      },
      {
        "name": "Greninja",
        "winRate": 50.4,
        "games": 10691
      },
      {
        "name": "Krookodile",
        "winRate": 50.2,
        "games": 5318
      },
      {
        "name": "Altaria",
        "winRate": 50.2,
        "games": 5318
      }
    ],
    "bestSets": []
  },
  "763": {
    "id": 763,
    "name": "Tsareena",
    "isMega": false,
    "elo": 9206,
    "winRate": 51.8,
    "appearances": 39618,
    "wins": 20510,
    "losses": 19108,
    "bestPartners": [
      {
        "name": "Mega Blastoise",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Dragapult",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Heat Rotom",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Victreebel",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Whimsicott",
        "winRate": 59.4,
        "games": 8725
      }
    ],
    "bestSets": []
  },
  "765": {
    "id": 765,
    "name": "Oranguru",
    "isMega": false,
    "elo": 9277,
    "winRate": 50.2,
    "appearances": 32061,
    "wins": 16079,
    "losses": 15982,
    "bestPartners": [
      {
        "name": "Rhyperior",
        "winRate": 50.5,
        "games": 21488
      },
      {
        "name": "Torkoal",
        "winRate": 50.4,
        "games": 26834
      },
      {
        "name": "Venusaur",
        "winRate": 50.4,
        "games": 26834
      },
      {
        "name": "Hatterene",
        "winRate": 50.4,
        "games": 26834
      },
      {
        "name": "Incineroar",
        "winRate": 50.2,
        "games": 32061
      }
    ],
    "bestSets": []
  },
  "778": {
    "id": 778,
    "name": "Mimikyu",
    "isMega": false,
    "elo": 9197,
    "winRate": 49.8,
    "appearances": 36470,
    "wins": 18162,
    "losses": 18308,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 51.9,
        "games": 5078
      },
      {
        "name": "Drampa",
        "winRate": 51.9,
        "games": 5078
      },
      {
        "name": "Conkeldurr",
        "winRate": 51.9,
        "games": 5078
      },
      {
        "name": "Kingambit",
        "winRate": 50.7,
        "games": 10219
      },
      {
        "name": "Mega Lopunny",
        "winRate": 49.8,
        "games": 5195
      }
    ],
    "bestSets": []
  },
  "780": {
    "id": 780,
    "name": "Drampa",
    "isMega": false,
    "elo": 9205,
    "winRate": 52,
    "appearances": 107437,
    "wins": 55880,
    "losses": 51557,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 63.3,
        "games": 4137
      },
      {
        "name": "Umbreon",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Primarina",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Tyranitar",
        "winRate": 57.9,
        "games": 9217
      },
      {
        "name": "Torkoal",
        "winRate": 56.9,
        "games": 18594
      }
    ],
    "bestSets": []
  },
  "784": {
    "id": 784,
    "name": "Kommo-o",
    "isMega": false,
    "elo": 9243,
    "winRate": 50.2,
    "appearances": 67187,
    "wins": 33747,
    "losses": 33440,
    "bestPartners": [
      {
        "name": "Mega Metagross",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Weavile",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Hawlucha",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Gyarados",
        "winRate": 52.5,
        "games": 19980
      },
      {
        "name": "Arcanine",
        "winRate": 52.1,
        "games": 10473
      }
    ],
    "bestSets": []
  },
  "823": {
    "id": 823,
    "name": "Corviknight",
    "isMega": false,
    "elo": 9231,
    "winRate": 47.3,
    "appearances": 45297,
    "wins": 21422,
    "losses": 23875,
    "bestPartners": [
      {
        "name": "Mega Garchomp",
        "winRate": 51.8,
        "games": 5187
      },
      {
        "name": "Scizor",
        "winRate": 51.8,
        "games": 5187
      },
      {
        "name": "Heat Rotom",
        "winRate": 51.8,
        "games": 5187
      },
      {
        "name": "Tinkaton",
        "winRate": 51.2,
        "games": 10607
      },
      {
        "name": "Arcanine",
        "winRate": 50.8,
        "games": 10535
      }
    ],
    "bestSets": []
  },
  "842": {
    "id": 842,
    "name": "Appletun",
    "isMega": false,
    "elo": 9166,
    "winRate": 50.5,
    "appearances": 15750,
    "wins": 7952,
    "losses": 7798,
    "bestPartners": [
      {
        "name": "Mega Chandelure",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Hatterene",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Trevenant",
        "winRate": 50.5,
        "games": 10461
      },
      {
        "name": "Grimmsnarl",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Mamoswine",
        "winRate": 50.5,
        "games": 10461
      }
    ],
    "bestSets": []
  },
  "844": {
    "id": 844,
    "name": "Sandaconda",
    "isMega": false,
    "elo": 9219,
    "winRate": 49.1,
    "appearances": 15578,
    "wins": 7652,
    "losses": 7926,
    "bestPartners": [
      {
        "name": "Mega Gyarados",
        "winRate": 50.8,
        "games": 5379
      },
      {
        "name": "Stunfisk",
        "winRate": 50.8,
        "games": 5379
      },
      {
        "name": "Rhyperior",
        "winRate": 50.8,
        "games": 5379
      },
      {
        "name": "Archaludon",
        "winRate": 50.8,
        "games": 5379
      },
      {
        "name": "Garchomp",
        "winRate": 50.1,
        "games": 10503
      }
    ],
    "bestSets": []
  },
  "855": {
    "id": 855,
    "name": "Polteageist",
    "isMega": false,
    "elo": 9147,
    "winRate": 49.5,
    "appearances": 15745,
    "wins": 7799,
    "losses": 7946,
    "bestPartners": [
      {
        "name": "Mega Lopunny",
        "winRate": 50.6,
        "games": 5254
      },
      {
        "name": "Aegislash",
        "winRate": 50.6,
        "games": 5254
      },
      {
        "name": "Froslass",
        "winRate": 50.6,
        "games": 5254
      },
      {
        "name": "Krookodile",
        "winRate": 50.6,
        "games": 5254
      },
      {
        "name": "Lopunny",
        "winRate": 50.3,
        "games": 5358
      }
    ],
    "bestSets": []
  },
  "858": {
    "id": 858,
    "name": "Hatterene",
    "isMega": false,
    "elo": 9258,
    "winRate": 50.3,
    "appearances": 541152,
    "wins": 271977,
    "losses": 269175,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 59.5,
        "games": 17516
      },
      {
        "name": "Farigiraf",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Conkeldurr",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Drampa",
        "winRate": 54.5,
        "games": 29180
      },
      {
        "name": "Tyranitar",
        "winRate": 53.8,
        "games": 29706
      }
    ],
    "bestSets": []
  },
  "861": {
    "id": 861,
    "name": "Grimmsnarl",
    "isMega": false,
    "elo": 9180,
    "winRate": 46.9,
    "appearances": 24703,
    "wins": 11583,
    "losses": 13120,
    "bestPartners": [
      {
        "name": "Mega Abomasnow",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Froslass",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Hatterene",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Trevenant",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Appletun",
        "winRate": 50.5,
        "games": 5091
      }
    ],
    "bestSets": []
  },
  "866": {
    "id": 866,
    "name": "Mr. Rime",
    "isMega": false,
    "elo": 9200,
    "winRate": 50.5,
    "appearances": 15994,
    "wins": 8080,
    "losses": 7914,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 51.2,
        "games": 5285
      },
      {
        "name": "Sneasler",
        "winRate": 51.2,
        "games": 5285
      },
      {
        "name": "Rhyperior",
        "winRate": 51.2,
        "games": 5285
      },
      {
        "name": "Incineroar",
        "winRate": 50.5,
        "games": 5256
      },
      {
        "name": "Gyarados",
        "winRate": 50.5,
        "games": 15994
      }
    ],
    "bestSets": []
  },
  "867": {
    "id": 867,
    "name": "Runerigus",
    "isMega": false,
    "elo": 9160,
    "winRate": 47.5,
    "appearances": 15061,
    "wins": 7157,
    "losses": 7904,
    "bestPartners": [
      {
        "name": "Hisuian Samurott",
        "winRate": 50.2,
        "games": 5301
      },
      {
        "name": "Hydreigon",
        "winRate": 50.2,
        "games": 5301
      },
      {
        "name": "Azumarill",
        "winRate": 50.2,
        "games": 5301
      },
      {
        "name": "Dragonite",
        "winRate": 50.2,
        "games": 5301
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 49.6,
        "games": 5265
      }
    ],
    "bestSets": []
  },
  "869": {
    "id": 869,
    "name": "Alcremie",
    "isMega": false,
    "elo": 9212,
    "winRate": 53.6,
    "appearances": 14897,
    "wins": 7987,
    "losses": 6910,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 61.5,
        "games": 4252
      },
      {
        "name": "Tauros",
        "winRate": 61.5,
        "games": 4252
      },
      {
        "name": "Kingambit",
        "winRate": 61.5,
        "games": 4252
      },
      {
        "name": "Scizor",
        "winRate": 61.5,
        "games": 4252
      },
      {
        "name": "Empoleon",
        "winRate": 55.3,
        "games": 9468
      }
    ],
    "bestSets": []
  },
  "877": {
    "id": 877,
    "name": "Morpeko",
    "isMega": false,
    "elo": 9150,
    "winRate": 43.5,
    "appearances": 13757,
    "wins": 5984,
    "losses": 7773,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 5112
      },
      {
        "name": "Arcanine",
        "winRate": 50.6,
        "games": 5112
      },
      {
        "name": "Charizard",
        "winRate": 50.6,
        "games": 5112
      },
      {
        "name": "Heracross",
        "winRate": 50.6,
        "games": 5112
      },
      {
        "name": "Froslass",
        "winRate": 50.6,
        "games": 5112
      }
    ],
    "bestSets": []
  },
  "887": {
    "id": 887,
    "name": "Dragapult",
    "isMega": false,
    "elo": 9236,
    "winRate": 49.9,
    "appearances": 958376,
    "wins": 477806,
    "losses": 480570,
    "bestPartners": [
      {
        "name": "Tsareena",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Archaludon",
        "winRate": 61.2,
        "games": 8372
      },
      {
        "name": "Victreebel",
        "winRate": 60.4,
        "games": 8766
      },
      {
        "name": "Heat Rotom",
        "winRate": 59.7,
        "games": 8953
      },
      {
        "name": "Glimmora",
        "winRate": 55.1,
        "games": 4799
      }
    ],
    "bestSets": []
  },
  "900": {
    "id": 900,
    "name": "Kleavor",
    "isMega": false,
    "elo": 9252,
    "winRate": 54,
    "appearances": 14906,
    "wins": 8051,
    "losses": 6855,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 56.3,
        "games": 4684
      },
      {
        "name": "Empoleon",
        "winRate": 56.3,
        "games": 4684
      },
      {
        "name": "Tatsugiri",
        "winRate": 56.3,
        "games": 4684
      },
      {
        "name": "Archaludon",
        "winRate": 56.1,
        "games": 9439
      },
      {
        "name": "Blastoise",
        "winRate": 56.1,
        "games": 9439
      }
    ],
    "bestSets": []
  },
  "901": {
    "id": 901,
    "name": "Ursaluna",
    "isMega": false,
    "elo": 9234,
    "winRate": 51.2,
    "appearances": 116990,
    "wins": 59869,
    "losses": 57121,
    "bestPartners": [
      {
        "name": "Froslass",
        "winRate": 62.6,
        "games": 4166
      },
      {
        "name": "Mega Gyarados",
        "winRate": 61.2,
        "games": 8504
      },
      {
        "name": "Mega Pinsir",
        "winRate": 61.1,
        "games": 4239
      },
      {
        "name": "Archaludon",
        "winRate": 61.1,
        "games": 12743
      },
      {
        "name": "Pawmot",
        "winRate": 59.8,
        "games": 4338
      }
    ],
    "bestSets": []
  },
  "902": {
    "id": 902,
    "name": "Basculegion",
    "isMega": false,
    "elo": 9239,
    "winRate": 49.6,
    "appearances": 61685,
    "wins": 30613,
    "losses": 31072,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 54.2,
        "games": 4983
      },
      {
        "name": "Archaludon",
        "winRate": 54.2,
        "games": 4983
      },
      {
        "name": "Kingambit",
        "winRate": 54.2,
        "games": 4983
      },
      {
        "name": "Skarmory",
        "winRate": 54.2,
        "games": 4983
      },
      {
        "name": "Gyarados",
        "winRate": 50.9,
        "games": 31590
      }
    ],
    "bestSets": []
  },
  "903": {
    "id": 903,
    "name": "Sneasler",
    "isMega": false,
    "elo": 9279,
    "winRate": 51.6,
    "appearances": 122350,
    "wins": 63090,
    "losses": 59260,
    "bestPartners": [
      {
        "name": "Mega Scizor",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Fan Rotom",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Garchomp",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Blastoise",
        "winRate": 62.3,
        "games": 8374
      },
      {
        "name": "Sylveon",
        "winRate": 60.9,
        "games": 4291
      }
    ],
    "bestSets": []
  },
  "908": {
    "id": 908,
    "name": "Meowscarada",
    "isMega": false,
    "elo": 9253,
    "winRate": 50.3,
    "appearances": 20958,
    "wins": 10552,
    "losses": 10406,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Toxapex",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Aggron",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.6,
        "games": 5343
      }
    ],
    "bestSets": []
  },
  "911": {
    "id": 911,
    "name": "Skeledirge",
    "isMega": false,
    "elo": 9176,
    "winRate": 49.2,
    "appearances": 15991,
    "wins": 7861,
    "losses": 8130,
    "bestPartners": [
      {
        "name": "Mega Abomasnow",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Froslass",
        "winRate": 50.5,
        "games": 5504
      },
      {
        "name": "Garchomp",
        "winRate": 50.1,
        "games": 5389
      },
      {
        "name": "Mega Chandelure",
        "winRate": 50.1,
        "games": 5389
      },
      {
        "name": "Excadrill",
        "winRate": 50.1,
        "games": 5389
      }
    ],
    "bestSets": []
  },
  "914": {
    "id": 914,
    "name": "Quaquaval",
    "isMega": false,
    "elo": 9275,
    "winRate": 48.8,
    "appearances": 20594,
    "wins": 10047,
    "losses": 10547,
    "bestPartners": [
      {
        "name": "Skarmory",
        "winRate": 50.6,
        "games": 5131
      },
      {
        "name": "Charizard",
        "winRate": 50.5,
        "games": 10500
      },
      {
        "name": "Metagross",
        "winRate": 50.5,
        "games": 10500
      },
      {
        "name": "Excadrill",
        "winRate": 50.3,
        "games": 5369
      },
      {
        "name": "Heat Rotom",
        "winRate": 50,
        "games": 10450
      }
    ],
    "bestSets": []
  },
  "923": {
    "id": 923,
    "name": "Pawmot",
    "isMega": false,
    "elo": 9239,
    "winRate": 51.1,
    "appearances": 30892,
    "wins": 15789,
    "losses": 15103,
    "bestPartners": [
      {
        "name": "Mega Gyarados",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Ursaluna",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Archaludon",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Mudsdale",
        "winRate": 59.8,
        "games": 4338
      },
      {
        "name": "Krookodile",
        "winRate": 53.2,
        "games": 15091
      }
    ],
    "bestSets": []
  },
  "925": {
    "id": 925,
    "name": "Maushold",
    "isMega": false,
    "elo": 9202,
    "winRate": 49.8,
    "appearances": 15970,
    "wins": 7952,
    "losses": 8018,
    "bestPartners": [
      {
        "name": "Whimsicott",
        "winRate": 50.3,
        "games": 5200
      },
      {
        "name": "Incineroar",
        "winRate": 50.3,
        "games": 5200
      },
      {
        "name": "Garchomp",
        "winRate": 50.3,
        "games": 5200
      },
      {
        "name": "Dragapult",
        "winRate": 50.3,
        "games": 5200
      },
      {
        "name": "Kingambit",
        "winRate": 50.3,
        "games": 5200
      }
    ],
    "bestSets": []
  },
  "934": {
    "id": 934,
    "name": "Garganacl",
    "isMega": false,
    "elo": 9177,
    "winRate": 48.6,
    "appearances": 46741,
    "wins": 22707,
    "losses": 24034,
    "bestPartners": [
      {
        "name": "Milotic",
        "winRate": 50.5,
        "games": 5335
      },
      {
        "name": "Mega Gyarados",
        "winRate": 50.4,
        "games": 5372
      },
      {
        "name": "Sableye",
        "winRate": 50.4,
        "games": 5372
      },
      {
        "name": "Mega Gardevoir",
        "winRate": 50.3,
        "games": 5168
      },
      {
        "name": "Garchomp",
        "winRate": 50.2,
        "games": 21324
      }
    ],
    "bestSets": []
  },
  "936": {
    "id": 936,
    "name": "Armarouge",
    "isMega": false,
    "elo": 9219,
    "winRate": 49.4,
    "appearances": 15707,
    "wins": 7758,
    "losses": 7949,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 50,
        "games": 5245
      },
      {
        "name": "Whimsicott",
        "winRate": 50,
        "games": 5245
      },
      {
        "name": "Greninja",
        "winRate": 50,
        "games": 5245
      },
      {
        "name": "Gyarados",
        "winRate": 49.8,
        "games": 10570
      },
      {
        "name": "Hydrapple",
        "winRate": 49.5,
        "games": 5325
      }
    ],
    "bestSets": []
  },
  "937": {
    "id": 937,
    "name": "Ceruledge",
    "isMega": false,
    "elo": 9213,
    "winRate": 54.1,
    "appearances": 14700,
    "wins": 7952,
    "losses": 6748,
    "bestPartners": [
      {
        "name": "Greninja",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Absol",
        "winRate": 61,
        "games": 4279
      },
      {
        "name": "Archaludon",
        "winRate": 55.9,
        "games": 9456
      },
      {
        "name": "Umbreon",
        "winRate": 55.9,
        "games": 9456
      },
      {
        "name": "Krookodile",
        "winRate": 55.4,
        "games": 9523
      }
    ],
    "bestSets": []
  },
  "952": {
    "id": 952,
    "name": "Scovillain",
    "isMega": false,
    "elo": 9171,
    "winRate": 50.5,
    "appearances": 21192,
    "wins": 10695,
    "losses": 10497,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 50.7,
        "games": 5283
      },
      {
        "name": "Empoleon",
        "winRate": 50.5,
        "games": 10587
      },
      {
        "name": "Aerodactyl",
        "winRate": 50.5,
        "games": 10587
      },
      {
        "name": "Tinkaton",
        "winRate": 50.5,
        "games": 10587
      },
      {
        "name": "Kingambit",
        "winRate": 50.5,
        "games": 10587
      }
    ],
    "bestSets": []
  },
  "959": {
    "id": 959,
    "name": "Tinkaton",
    "isMega": false,
    "elo": 9281,
    "winRate": 50.3,
    "appearances": 225491,
    "wins": 113459,
    "losses": 112032,
    "bestPartners": [
      {
        "name": "Meganium",
        "winRate": 58.2,
        "games": 8961
      },
      {
        "name": "Chesnaught",
        "winRate": 57.2,
        "games": 9263
      },
      {
        "name": "Palafin",
        "winRate": 56.5,
        "games": 14102
      },
      {
        "name": "Blastoise",
        "winRate": 55.9,
        "games": 18808
      },
      {
        "name": "Heat Rotom",
        "winRate": 55.6,
        "games": 38203
      }
    ],
    "bestSets": []
  },
  "964": {
    "id": 964,
    "name": "Palafin",
    "isMega": false,
    "elo": 9223,
    "winRate": 50.5,
    "appearances": 217389,
    "wins": 109844,
    "losses": 107545,
    "bestPartners": [
      {
        "name": "Chesnaught",
        "winRate": 57.2,
        "games": 9263
      },
      {
        "name": "Charizard",
        "winRate": 56.5,
        "games": 14102
      },
      {
        "name": "Heat Rotom",
        "winRate": 56.5,
        "games": 14102
      },
      {
        "name": "Tinkaton",
        "winRate": 56.5,
        "games": 14102
      },
      {
        "name": "Empoleon",
        "winRate": 55.6,
        "games": 24042
      }
    ],
    "bestSets": []
  },
  "968": {
    "id": 968,
    "name": "Orthworm",
    "isMega": false,
    "elo": 9221,
    "winRate": 48,
    "appearances": 15702,
    "wins": 7537,
    "losses": 8165,
    "bestPartners": [
      {
        "name": "Scizor",
        "winRate": 49.6,
        "games": 5441
      },
      {
        "name": "Excadrill",
        "winRate": 49.6,
        "games": 5441
      },
      {
        "name": "Galarian Stunfisk",
        "winRate": 49.6,
        "games": 5441
      },
      {
        "name": "Gyarados",
        "winRate": 48.2,
        "games": 5295
      },
      {
        "name": "Noivern",
        "winRate": 48.2,
        "games": 5295
      }
    ],
    "bestSets": []
  },
  "970": {
    "id": 970,
    "name": "Glimmora",
    "isMega": false,
    "elo": 9259,
    "winRate": 51.8,
    "appearances": 15483,
    "wins": 8017,
    "losses": 7466,
    "bestPartners": [
      {
        "name": "Mega Blastoise",
        "winRate": 55.1,
        "games": 4799
      },
      {
        "name": "Kingambit",
        "winRate": 55.1,
        "games": 4799
      },
      {
        "name": "Dragapult",
        "winRate": 55.1,
        "games": 4799
      },
      {
        "name": "Scizor",
        "winRate": 55.1,
        "games": 4799
      },
      {
        "name": "Gyarados",
        "winRate": 51.8,
        "games": 15483
      }
    ],
    "bestSets": []
  },
  "977": {
    "id": 977,
    "name": "Dondozo",
    "isMega": false,
    "elo": 9217,
    "winRate": 50,
    "appearances": 88330,
    "wins": 44162,
    "losses": 44168,
    "bestPartners": [
      {
        "name": "Farigiraf",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Conkeldurr",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Garchomp",
        "winRate": 50.2,
        "games": 56985
      },
      {
        "name": "Hatterene",
        "winRate": 50.2,
        "games": 51521
      },
      {
        "name": "Tauros",
        "winRate": 50.2,
        "games": 5227
      }
    ],
    "bestSets": []
  },
  "978": {
    "id": 978,
    "name": "Tatsugiri",
    "isMega": false,
    "elo": 9232,
    "winRate": 50.1,
    "appearances": 136748,
    "wins": 68459,
    "losses": 68289,
    "bestPartners": [
      {
        "name": "Kleavor",
        "winRate": 56.3,
        "games": 4684
      },
      {
        "name": "Archaludon",
        "winRate": 56.3,
        "games": 4684
      },
      {
        "name": "Blastoise",
        "winRate": 53.3,
        "games": 9999
      },
      {
        "name": "Empoleon",
        "winRate": 53.1,
        "games": 9900
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 52.4,
        "games": 5230
      }
    ],
    "bestSets": []
  },
  "981": {
    "id": 981,
    "name": "Farigiraf",
    "isMega": false,
    "elo": 9228,
    "winRate": 51.4,
    "appearances": 15311,
    "wins": 7869,
    "losses": 7442,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Hatterene",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Dondozo",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Garchomp",
        "winRate": 56.7,
        "games": 4666
      },
      {
        "name": "Conkeldurr",
        "winRate": 51.4,
        "games": 15311
      }
    ],
    "bestSets": []
  },
  "983": {
    "id": 983,
    "name": "Kingambit",
    "isMega": false,
    "elo": 9250,
    "winRate": 50.7,
    "appearances": 788104,
    "wins": 399773,
    "losses": 388331,
    "bestPartners": [
      {
        "name": "Mega Garchomp Z",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Primarina",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Blastoise",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Alcremie",
        "winRate": 61.5,
        "games": 4252
      },
      {
        "name": "Floette",
        "winRate": 60.2,
        "games": 8807
      }
    ],
    "bestSets": []
  },
  "1013": {
    "id": 1013,
    "name": "Sinistcha",
    "isMega": false,
    "elo": 9225,
    "winRate": 50.5,
    "appearances": 70205,
    "wins": 35462,
    "losses": 34743,
    "bestPartners": [
      {
        "name": "Mega Feraligatr",
        "winRate": 60,
        "games": 8924
      },
      {
        "name": "Kingambit",
        "winRate": 56.9,
        "games": 4748
      },
      {
        "name": "Azumarill",
        "winRate": 56.9,
        "games": 4748
      },
      {
        "name": "Mega Scizor",
        "winRate": 56.9,
        "games": 4748
      },
      {
        "name": "Heat Rotom",
        "winRate": 56.4,
        "games": 14262
      }
    ],
    "bestSets": []
  },
  "1018": {
    "id": 1018,
    "name": "Archaludon",
    "isMega": false,
    "elo": 9269,
    "winRate": 54.9,
    "appearances": 216180,
    "wins": 118745,
    "losses": 97435,
    "bestPartners": [
      {
        "name": "Hisuian Samurott",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Mega Froslass",
        "winRate": 68.2,
        "games": 7563
      },
      {
        "name": "Mega Scizor",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Houndoom",
        "winRate": 66.9,
        "games": 3888
      },
      {
        "name": "Froslass",
        "winRate": 65,
        "games": 8007
      }
    ],
    "bestSets": []
  },
  "1019": {
    "id": 1019,
    "name": "Hydrapple",
    "isMega": false,
    "elo": 9184,
    "winRate": 49.2,
    "appearances": 20897,
    "wins": 10275,
    "losses": 10622,
    "bestPartners": [
      {
        "name": "Delphox",
        "winRate": 49.8,
        "games": 5332
      },
      {
        "name": "Kingambit",
        "winRate": 49.7,
        "games": 10657
      },
      {
        "name": "Gyarados",
        "winRate": 49.7,
        "games": 10657
      },
      {
        "name": "Dondozo",
        "winRate": 49.7,
        "games": 10657
      },
      {
        "name": "Rhyperior",
        "winRate": 49.7,
        "games": 10657
      }
    ],
    "bestSets": []
  },
  "5059": {
    "id": 5059,
    "name": "Hisuian Arcanine",
    "isMega": false,
    "elo": 9191,
    "winRate": 47.9,
    "appearances": 317770,
    "wins": 152161,
    "losses": 165609,
    "bestPartners": [
      {
        "name": "Aegislash",
        "winRate": 50.7,
        "games": 21376
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 50.7,
        "games": 5300
      },
      {
        "name": "Trevenant",
        "winRate": 50.7,
        "games": 5412
      },
      {
        "name": "Milotic",
        "winRate": 50.6,
        "games": 10635
      },
      {
        "name": "Typhlosion",
        "winRate": 50.6,
        "games": 5424
      }
    ],
    "bestSets": []
  },
  "5157": {
    "id": 5157,
    "name": "Hisuian Typhlosion",
    "isMega": false,
    "elo": 9193,
    "winRate": 53.8,
    "appearances": 14872,
    "wins": 7995,
    "losses": 6877,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Primarina",
        "winRate": 59,
        "games": 4616
      },
      {
        "name": "Drampa",
        "winRate": 56.1,
        "games": 9659
      },
      {
        "name": "Empoleon",
        "winRate": 56.1,
        "games": 9659
      },
      {
        "name": "Umbreon",
        "winRate": 53.9,
        "games": 9829
      }
    ],
    "bestSets": []
  },
  "6080": {
    "id": 6080,
    "name": "Galarian Slowbro",
    "isMega": false,
    "elo": 9214,
    "winRate": 46.3,
    "appearances": 72463,
    "wins": 33554,
    "losses": 38909,
    "bestPartners": [
      {
        "name": "Meowscarada",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Toxapex",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Aggron",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Mega Scizor",
        "winRate": 50.5,
        "games": 5222
      },
      {
        "name": "Palafin",
        "winRate": 50.5,
        "games": 5222
      }
    ],
    "bestSets": []
  },
  "6199": {
    "id": 6199,
    "name": "Galarian Slowking",
    "isMega": false,
    "elo": 9104,
    "winRate": 42,
    "appearances": 13592,
    "wins": 5705,
    "losses": 7887,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 47.8,
        "games": 5288
      },
      {
        "name": "Incineroar",
        "winRate": 47.8,
        "games": 5288
      },
      {
        "name": "Tauros",
        "winRate": 47.8,
        "games": 5288
      },
      {
        "name": "Greninja",
        "winRate": 45.7,
        "games": 9971
      },
      {
        "name": "Morpeko",
        "winRate": 43.3,
        "games": 4683
      }
    ],
    "bestSets": []
  },
  "6618": {
    "id": 6618,
    "name": "Galarian Stunfisk",
    "isMega": false,
    "elo": 9249,
    "winRate": 48,
    "appearances": 107118,
    "wins": 51443,
    "losses": 55675,
    "bestPartners": [
      {
        "name": "Mega Pinsir",
        "winRate": 53.8,
        "games": 5125
      },
      {
        "name": "Wash Rotom",
        "winRate": 53.8,
        "games": 5125
      },
      {
        "name": "Empoleon",
        "winRate": 53.8,
        "games": 5125
      },
      {
        "name": "Gyarados",
        "winRate": 51.2,
        "games": 21390
      },
      {
        "name": "Rhyperior",
        "winRate": 50.4,
        "games": 16095
      }
    ],
    "bestSets": []
  },
  "10008": {
    "id": 10008,
    "name": "Heat Rotom",
    "isMega": false,
    "elo": 9309,
    "winRate": 54.6,
    "appearances": 97224,
    "wins": 53113,
    "losses": 44111,
    "bestPartners": [
      {
        "name": "Mega Blastoise",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Victreebel",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Tsareena",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Mega Venusaur",
        "winRate": 60.3,
        "games": 4336
      },
      {
        "name": "Aggron",
        "winRate": 60.3,
        "games": 4336
      }
    ],
    "bestSets": []
  },
  "10009": {
    "id": 10009,
    "name": "Wash Rotom",
    "isMega": false,
    "elo": 9285,
    "winRate": 52.2,
    "appearances": 45821,
    "wins": 23897,
    "losses": 21924,
    "bestPartners": [
      {
        "name": "Pinsir",
        "winRate": 56.1,
        "games": 9453
      },
      {
        "name": "Archaludon",
        "winRate": 55.6,
        "games": 14411
      },
      {
        "name": "Kingambit",
        "winRate": 54.1,
        "games": 19560
      },
      {
        "name": "Empoleon",
        "winRate": 53.8,
        "games": 25035
      },
      {
        "name": "Klefki",
        "winRate": 53.8,
        "games": 5125
      }
    ],
    "bestSets": []
  },
  "10010": {
    "id": 10010,
    "name": "Frost Rotom",
    "isMega": false,
    "elo": 9205,
    "winRate": 50,
    "appearances": 16003,
    "wins": 7996,
    "losses": 8007,
    "bestPartners": [
      {
        "name": "Talonflame",
        "winRate": 50.6,
        "games": 5337
      },
      {
        "name": "Fan Rotom",
        "winRate": 50.6,
        "games": 5337
      },
      {
        "name": "Decidueye",
        "winRate": 50.6,
        "games": 5337
      },
      {
        "name": "Dragonite",
        "winRate": 50.1,
        "games": 10674
      },
      {
        "name": "Gyarados",
        "winRate": 50.1,
        "games": 10666
      }
    ],
    "bestSets": []
  },
  "10011": {
    "id": 10011,
    "name": "Fan Rotom",
    "isMega": false,
    "elo": 9258,
    "winRate": 49.3,
    "appearances": 85800,
    "wins": 42287,
    "losses": 43513,
    "bestPartners": [
      {
        "name": "Mega Gyarados",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Sneasler",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Blastoise",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Garchomp",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Kingambit",
        "winRate": 56.3,
        "games": 9251
      }
    ],
    "bestSets": []
  },
  "10012": {
    "id": 10012,
    "name": "Mow Rotom",
    "isMega": false,
    "elo": 9287,
    "winRate": 51.9,
    "appearances": 20633,
    "wins": 10712,
    "losses": 9921,
    "bestPartners": [
      {
        "name": "Mega Feraligatr",
        "winRate": 57.3,
        "games": 4683
      },
      {
        "name": "Serperior",
        "winRate": 57.3,
        "games": 4683
      },
      {
        "name": "Heat Rotom",
        "winRate": 57.3,
        "games": 4683
      },
      {
        "name": "Sinistcha",
        "winRate": 54.2,
        "games": 9834
      },
      {
        "name": "Whimsicott",
        "winRate": 54.2,
        "games": 9834
      }
    ],
    "bestSets": []
  },
  "10100": {
    "id": 10100,
    "name": "Alolan Raichu",
    "isMega": false,
    "elo": 9186,
    "winRate": 47.4,
    "appearances": 60448,
    "wins": 28661,
    "losses": 31787,
    "bestPartners": [
      {
        "name": "Alcremie",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Basculegion",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Tatsugiri",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Gyarados",
        "winRate": 50.5,
        "games": 21480
      }
    ],
    "bestSets": []
  },
  "10103": {
    "id": 10103,
    "name": "Alolan Ninetales",
    "isMega": false,
    "elo": 9274,
    "winRate": 50.3,
    "appearances": 74182,
    "wins": 37334,
    "losses": 36848,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 52.4,
        "games": 5230
      },
      {
        "name": "Aegislash",
        "winRate": 52.4,
        "games": 5230
      },
      {
        "name": "Mega Gyarados",
        "winRate": 52.4,
        "games": 5230
      },
      {
        "name": "Sneasler",
        "winRate": 52.4,
        "games": 5230
      },
      {
        "name": "Tatsugiri",
        "winRate": 52.4,
        "games": 5230
      }
    ],
    "bestSets": []
  },
  "10336": {
    "id": 10336,
    "name": "Hisuian Samurott",
    "isMega": false,
    "elo": 9278,
    "winRate": 53.9,
    "appearances": 34546,
    "wins": 18608,
    "losses": 15938,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Garchomp",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Blastoise",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Archaludon",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Incineroar",
        "winRate": 65.6,
        "games": 7908
      }
    ],
    "bestSets": []
  },
  "10340": {
    "id": 10340,
    "name": "Hisuian Zoroark",
    "isMega": false,
    "elo": 9204,
    "winRate": 46.7,
    "appearances": 50351,
    "wins": 23494,
    "losses": 26857,
    "bestPartners": [
      {
        "name": "Alcremie",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Basculegion",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Alolan Raichu",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Tatsugiri",
        "winRate": 50.7,
        "games": 5429
      },
      {
        "name": "Gyarados",
        "winRate": 49.1,
        "games": 31987
      }
    ],
    "bestSets": []
  },
  "10341": {
    "id": 10341,
    "name": "Hisuian Decidueye",
    "isMega": false,
    "elo": 9200,
    "winRate": 47.8,
    "appearances": 35155,
    "wins": 16796,
    "losses": 18359,
    "bestPartners": [
      {
        "name": "Hisuian Typhlosion",
        "winRate": 53.4,
        "games": 5043
      },
      {
        "name": "Empoleon",
        "winRate": 53.4,
        "games": 5043
      },
      {
        "name": "Tauros",
        "winRate": 53.4,
        "games": 5043
      },
      {
        "name": "Drampa",
        "winRate": 53.4,
        "games": 5043
      },
      {
        "name": "Whimsicott",
        "winRate": 52,
        "games": 10416
      }
    ],
    "bestSets": []
  },
  "154-mega": {
    "id": 154,
    "name": "Mega Meganium",
    "isMega": true,
    "elo": 9315,
    "winRate": 52.2,
    "appearances": 14911,
    "wins": 7787,
    "losses": 7124,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 57.7,
        "games": 4570
      },
      {
        "name": "Empoleon",
        "winRate": 57.7,
        "games": 4570
      },
      {
        "name": "Heat Rotom",
        "winRate": 57.7,
        "games": 4570
      },
      {
        "name": "Blastoise",
        "winRate": 57.7,
        "games": 4570
      },
      {
        "name": "Tinkaton",
        "winRate": 53.5,
        "games": 9719
      }
    ],
    "bestSets": []
  },
  "212-mega": {
    "id": 212,
    "name": "Mega Scizor",
    "isMega": true,
    "elo": 9295,
    "winRate": 51.8,
    "appearances": 93282,
    "wins": 48347,
    "losses": 44935,
    "bestPartners": [
      {
        "name": "Froslass",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Archaludon",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Sneasler",
        "winRate": 67.6,
        "games": 3841
      },
      {
        "name": "Primarina",
        "winRate": 60.2,
        "games": 8754
      },
      {
        "name": "Sinistcha",
        "winRate": 56.9,
        "games": 4748
      }
    ],
    "bestSets": []
  },
  "445-mega-z": {
    "id": 445,
    "name": "Mega Garchomp Z",
    "isMega": true,
    "elo": 9290,
    "winRate": 55.2,
    "appearances": 14195,
    "wins": 7835,
    "losses": 6360,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Primarina",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Empoleon",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Kingambit",
        "winRate": 69.3,
        "games": 3722
      },
      {
        "name": "Gyarados",
        "winRate": 58,
        "games": 8831
      }
    ],
    "bestSets": []
  },
  "478-mega": {
    "id": 478,
    "name": "Mega Froslass",
    "isMega": true,
    "elo": 9289,
    "winRate": 63.8,
    "appearances": 12194,
    "wins": 7782,
    "losses": 4412,
    "bestPartners": [
      {
        "name": "Hisuian Samurott",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Garchomp",
        "winRate": 69.6,
        "games": 3675
      },
      {
        "name": "Archaludon",
        "winRate": 68.2,
        "games": 7563
      },
      {
        "name": "Blastoise",
        "winRate": 68.2,
        "games": 7563
      },
      {
        "name": "Greninja",
        "winRate": 66.9,
        "games": 3888
      }
    ],
    "bestSets": []
  },
  "9-mega": {
    "id": 9,
    "name": "Mega Blastoise",
    "isMega": true,
    "elo": 9281,
    "winRate": 53.7,
    "appearances": 54106,
    "wins": 29033,
    "losses": 25073,
    "bestPartners": [
      {
        "name": "Heat Rotom",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Tsareena",
        "winRate": 73.4,
        "games": 3615
      },
      {
        "name": "Serperior",
        "winRate": 61.6,
        "games": 4249
      },
      {
        "name": "Victreebel",
        "winRate": 60.4,
        "games": 8766
      },
      {
        "name": "Venusaur",
        "winRate": 58.6,
        "games": 9141
      }
    ],
    "bestSets": []
  },
  "160-mega": {
    "id": 160,
    "name": "Mega Feraligatr",
    "isMega": true,
    "elo": 9278,
    "winRate": 56.4,
    "appearances": 14378,
    "wins": 8108,
    "losses": 6270,
    "bestPartners": [
      {
        "name": "Sinistcha",
        "winRate": 60,
        "games": 8924
      },
      {
        "name": "Heat Rotom",
        "winRate": 60,
        "games": 8924
      },
      {
        "name": "Mow Rotom",
        "winRate": 57.3,
        "games": 4683
      },
      {
        "name": "Serperior",
        "winRate": 56.4,
        "games": 14378
      },
      {
        "name": "Incineroar",
        "winRate": 56,
        "games": 9695
      }
    ],
    "bestSets": []
  },
  "678-mega": {
    "id": 678,
    "name": "Mega Meowstic",
    "isMega": true,
    "elo": 9268,
    "winRate": 51,
    "appearances": 15964,
    "wins": 8143,
    "losses": 7821,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 53.2,
        "games": 5125
      },
      {
        "name": "Heracross",
        "winRate": 53.2,
        "games": 5125
      },
      {
        "name": "Gyarados",
        "winRate": 51.6,
        "games": 10523
      },
      {
        "name": "Crabominable",
        "winRate": 51.5,
        "games": 10566
      },
      {
        "name": "Kingambit",
        "winRate": 51,
        "games": 15964
      }
    ],
    "bestSets": []
  },
  "127-mega": {
    "id": 127,
    "name": "Mega Pinsir",
    "isMega": true,
    "elo": 9265,
    "winRate": 54.3,
    "appearances": 19821,
    "wins": 10761,
    "losses": 9060,
    "bestPartners": [
      {
        "name": "Ursaluna",
        "winRate": 61.1,
        "games": 4239
      },
      {
        "name": "Garchomp",
        "winRate": 61.1,
        "games": 4239
      },
      {
        "name": "Clefable",
        "winRate": 61.1,
        "games": 4239
      },
      {
        "name": "Archaludon",
        "winRate": 57.6,
        "games": 9197
      },
      {
        "name": "Kingambit",
        "winRate": 54.6,
        "games": 4958
      }
    ],
    "bestSets": []
  },
  "71-mega": {
    "id": 71,
    "name": "Mega Victreebel",
    "isMega": true,
    "elo": 9258,
    "winRate": 48.7,
    "appearances": 15830,
    "wins": 7708,
    "losses": 8122,
    "bestPartners": [
      {
        "name": "Milotic",
        "winRate": 50.5,
        "games": 5498
      },
      {
        "name": "Vaporeon",
        "winRate": 50.5,
        "games": 5498
      },
      {
        "name": "Scizor",
        "winRate": 50,
        "games": 10813
      },
      {
        "name": "Weavile",
        "winRate": 50,
        "games": 10813
      },
      {
        "name": "Tyranitar",
        "winRate": 50,
        "games": 10813
      }
    ],
    "bestSets": []
  },
  "448-mega-z": {
    "id": 448,
    "name": "Mega Lucario Z",
    "isMega": true,
    "elo": 9256,
    "winRate": 50.6,
    "appearances": 16049,
    "wins": 8114,
    "losses": 7935,
    "bestPartners": [
      {
        "name": "Altaria",
        "winRate": 50.8,
        "games": 10761
      },
      {
        "name": "Whimsicott",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Primarina",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Noivern",
        "winRate": 50.8,
        "games": 5298
      },
      {
        "name": "Fan Rotom",
        "winRate": 50.7,
        "games": 5463
      }
    ],
    "bestSets": []
  },
  "652-mega": {
    "id": 652,
    "name": "Mega Chesnaught",
    "isMega": true,
    "elo": 9254,
    "winRate": 53,
    "appearances": 15172,
    "wins": 8034,
    "losses": 7138,
    "bestPartners": [
      {
        "name": "Heat Rotom",
        "winRate": 55.1,
        "games": 4839
      },
      {
        "name": "Palafin",
        "winRate": 55.1,
        "games": 4839
      },
      {
        "name": "Empoleon",
        "winRate": 53.9,
        "games": 9970
      },
      {
        "name": "Charizard",
        "winRate": 53.1,
        "games": 10041
      },
      {
        "name": "Tinkaton",
        "winRate": 53.1,
        "games": 10041
      }
    ],
    "bestSets": []
  },
  "376-mega": {
    "id": 376,
    "name": "Mega Metagross",
    "isMega": true,
    "elo": 9253,
    "winRate": 49.9,
    "appearances": 309917,
    "wins": 154664,
    "losses": 155253,
    "bestPartners": [
      {
        "name": "Weavile",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Kommo-o",
        "winRate": 54.2,
        "games": 9644
      },
      {
        "name": "Hawlucha",
        "winRate": 52.9,
        "games": 14868
      },
      {
        "name": "Hydreigon",
        "winRate": 52,
        "games": 19989
      },
      {
        "name": "Scizor",
        "winRate": 51,
        "games": 47362
      }
    ],
    "bestSets": []
  },
  "3-mega": {
    "id": 3,
    "name": "Mega Venusaur",
    "isMega": true,
    "elo": 9248,
    "winRate": 56.8,
    "appearances": 13877,
    "wins": 7878,
    "losses": 5999,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 62.1,
        "games": 4233
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 62.1,
        "games": 4233
      },
      {
        "name": "Primarina",
        "winRate": 61.2,
        "games": 8569
      },
      {
        "name": "Aggron",
        "winRate": 60.3,
        "games": 4336
      },
      {
        "name": "Heat Rotom",
        "winRate": 60.3,
        "games": 4336
      }
    ],
    "bestSets": []
  },
  "445-mega": {
    "id": 445,
    "name": "Mega Garchomp",
    "isMega": true,
    "elo": 9246,
    "winRate": 51.3,
    "appearances": 20721,
    "wins": 10639,
    "losses": 10082,
    "bestPartners": [
      {
        "name": "Primarina",
        "winRate": 53.3,
        "games": 5015
      },
      {
        "name": "Metagross",
        "winRate": 53.3,
        "games": 5015
      },
      {
        "name": "Aggron",
        "winRate": 53.3,
        "games": 5015
      },
      {
        "name": "Azumarill",
        "winRate": 53.3,
        "games": 5015
      },
      {
        "name": "Gyarados",
        "winRate": 51.9,
        "games": 10318
      }
    ],
    "bestSets": []
  },
  "282-mega": {
    "id": 282,
    "name": "Mega Gardevoir",
    "isMega": true,
    "elo": 9245,
    "winRate": 49.9,
    "appearances": 414523,
    "wins": 206736,
    "losses": 207787,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 51,
        "games": 5330
      },
      {
        "name": "Ursaluna",
        "winRate": 50.7,
        "games": 10889
      },
      {
        "name": "Dragonite",
        "winRate": 50.5,
        "games": 26239
      },
      {
        "name": "Toxapex",
        "winRate": 50.5,
        "games": 5559
      },
      {
        "name": "Kingambit",
        "winRate": 50.4,
        "games": 89216
      }
    ],
    "bestSets": []
  },
  "214-mega": {
    "id": 214,
    "name": "Mega Heracross",
    "isMega": true,
    "elo": 9237,
    "winRate": 52.8,
    "appearances": 19971,
    "wins": 10538,
    "losses": 9433,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 56.5,
        "games": 4665
      },
      {
        "name": "Archaludon",
        "winRate": 56.5,
        "games": 4665
      },
      {
        "name": "Greninja",
        "winRate": 56.5,
        "games": 4665
      },
      {
        "name": "Gyarados",
        "winRate": 55.4,
        "games": 4857
      },
      {
        "name": "Garchomp",
        "winRate": 55.4,
        "games": 4857
      }
    ],
    "bestSets": []
  },
  "970-mega": {
    "id": 970,
    "name": "Mega Glimmora",
    "isMega": true,
    "elo": 9232,
    "winRate": 49.7,
    "appearances": 15994,
    "wins": 7953,
    "losses": 8041,
    "bestPartners": [
      {
        "name": "Blastoise",
        "winRate": 50.3,
        "games": 5487
      },
      {
        "name": "Politoed",
        "winRate": 50.3,
        "games": 5487
      },
      {
        "name": "Milotic",
        "winRate": 50.2,
        "games": 5374
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 50.2,
        "games": 5374
      },
      {
        "name": "Slowbro",
        "winRate": 49.7,
        "games": 15994
      }
    ],
    "bestSets": []
  },
  "115-mega": {
    "id": 115,
    "name": "Mega Kangaskhan",
    "isMega": true,
    "elo": 9231,
    "winRate": 49.5,
    "appearances": 154062,
    "wins": 76192,
    "losses": 77870,
    "bestPartners": [
      {
        "name": "Excadrill",
        "winRate": 50.9,
        "games": 5361
      },
      {
        "name": "Venusaur",
        "winRate": 50.9,
        "games": 5361
      },
      {
        "name": "Blastoise",
        "winRate": 50.9,
        "games": 5361
      },
      {
        "name": "Dragapult",
        "winRate": 50.9,
        "games": 5361
      },
      {
        "name": "Hatterene",
        "winRate": 49.9,
        "games": 10445
      }
    ],
    "bestSets": []
  },
  "448-mega": {
    "id": 448,
    "name": "Mega Lucario",
    "isMega": true,
    "elo": 9230,
    "winRate": 50.1,
    "appearances": 31635,
    "wins": 15840,
    "losses": 15795,
    "bestPartners": [
      {
        "name": "Greninja",
        "winRate": 51.3,
        "games": 5326
      },
      {
        "name": "Hydreigon",
        "winRate": 51.3,
        "games": 5326
      },
      {
        "name": "Kingambit",
        "winRate": 51.3,
        "games": 5326
      },
      {
        "name": "Altaria",
        "winRate": 50.5,
        "games": 5198
      },
      {
        "name": "Garchomp",
        "winRate": 50.5,
        "games": 10460
      }
    ],
    "bestSets": []
  },
  "655-mega": {
    "id": 655,
    "name": "Mega Delphox",
    "isMega": true,
    "elo": 9229,
    "winRate": 50.8,
    "appearances": 15822,
    "wins": 8044,
    "losses": 7778,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 51.7,
        "games": 5131
      },
      {
        "name": "Gyarados",
        "winRate": 51.7,
        "games": 5131
      },
      {
        "name": "Drampa",
        "winRate": 51.7,
        "games": 5131
      },
      {
        "name": "Azumarill",
        "winRate": 51.7,
        "games": 5131
      },
      {
        "name": "Krookodile",
        "winRate": 50.9,
        "games": 10449
      }
    ],
    "bestSets": []
  },
  "460-mega": {
    "id": 460,
    "name": "Mega Abomasnow",
    "isMega": true,
    "elo": 9229,
    "winRate": 50,
    "appearances": 21163,
    "wins": 10586,
    "losses": 10577,
    "bestPartners": [
      {
        "name": "Charizard",
        "winRate": 50.7,
        "games": 5307
      },
      {
        "name": "Sneasler",
        "winRate": 50.7,
        "games": 5307
      },
      {
        "name": "Basculegion",
        "winRate": 50.6,
        "games": 5266
      },
      {
        "name": "Garchomp",
        "winRate": 50.6,
        "games": 5266
      },
      {
        "name": "Empoleon",
        "winRate": 50.6,
        "games": 5266
      }
    ],
    "bestSets": []
  },
  "334-mega": {
    "id": 334,
    "name": "Mega Altaria",
    "isMega": true,
    "elo": 9229,
    "winRate": 49.1,
    "appearances": 21191,
    "wins": 10403,
    "losses": 10788,
    "bestPartners": [
      {
        "name": "Primarina",
        "winRate": 50.8,
        "games": 5412
      },
      {
        "name": "Sneasler",
        "winRate": 50.8,
        "games": 5412
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.2,
        "games": 10784
      },
      {
        "name": "Tinkaton",
        "winRate": 50.2,
        "games": 10784
      },
      {
        "name": "Scizor",
        "winRate": 50.2,
        "games": 10853
      }
    ],
    "bestSets": []
  },
  "142-mega": {
    "id": 142,
    "name": "Mega Aerodactyl",
    "isMega": true,
    "elo": 9225,
    "winRate": 50.8,
    "appearances": 15449,
    "wins": 7846,
    "losses": 7603,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 51.7,
        "games": 5217
      },
      {
        "name": "Tsareena",
        "winRate": 51.7,
        "games": 5217
      },
      {
        "name": "Venusaur",
        "winRate": 51.7,
        "games": 5217
      },
      {
        "name": "Incineroar",
        "winRate": 51,
        "games": 10300
      },
      {
        "name": "Lucario",
        "winRate": 50.8,
        "games": 15449
      }
    ],
    "bestSets": []
  },
  "26-mega-x": {
    "id": 26,
    "name": "Mega Raichu X",
    "isMega": true,
    "elo": 9223,
    "winRate": 49.1,
    "appearances": 15703,
    "wins": 7707,
    "losses": 7996,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 5339
      },
      {
        "name": "Krookodile",
        "winRate": 50.3,
        "games": 5339
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.3,
        "games": 5339
      },
      {
        "name": "Incineroar",
        "winRate": 50,
        "games": 10687
      },
      {
        "name": "Pinsir",
        "winRate": 49.7,
        "games": 5348
      }
    ],
    "bestSets": []
  },
  "658-mega": {
    "id": 658,
    "name": "Mega Greninja",
    "isMega": true,
    "elo": 9215,
    "winRate": 50.3,
    "appearances": 15798,
    "wins": 7948,
    "losses": 7850,
    "bestPartners": [
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.5,
        "games": 5340
      },
      {
        "name": "Arcanine",
        "winRate": 50.4,
        "games": 10511
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 10511
      },
      {
        "name": "Venusaur",
        "winRate": 50.3,
        "games": 10627
      },
      {
        "name": "Aegislash",
        "winRate": 50.3,
        "games": 10627
      }
    ],
    "bestSets": []
  },
  "302-mega": {
    "id": 302,
    "name": "Mega Sableye",
    "isMega": true,
    "elo": 9214,
    "winRate": 50.7,
    "appearances": 19272,
    "wins": 9764,
    "losses": 9508,
    "bestPartners": [
      {
        "name": "Charizard",
        "winRate": 64.1,
        "games": 4029
      },
      {
        "name": "Archaludon",
        "winRate": 64.1,
        "games": 4029
      },
      {
        "name": "Clefable",
        "winRate": 64.1,
        "games": 4029
      },
      {
        "name": "Venusaur",
        "winRate": 53.5,
        "games": 14799
      },
      {
        "name": "Krookodile",
        "winRate": 52.1,
        "games": 8502
      }
    ],
    "bestSets": []
  },
  "181-mega": {
    "id": 181,
    "name": "Mega Ampharos",
    "isMega": true,
    "elo": 9213,
    "winRate": 48.6,
    "appearances": 15261,
    "wins": 7424,
    "losses": 7837,
    "bestPartners": [
      {
        "name": "Whimsicott",
        "winRate": 49.8,
        "games": 5185
      },
      {
        "name": "Gyarados",
        "winRate": 49.7,
        "games": 10239
      },
      {
        "name": "Charizard",
        "winRate": 49.7,
        "games": 10239
      },
      {
        "name": "Pinsir",
        "winRate": 49.6,
        "games": 5054
      },
      {
        "name": "Araquanid",
        "winRate": 49.6,
        "games": 5054
      }
    ],
    "bestSets": []
  },
  "670-mega": {
    "id": 670,
    "name": "Mega Floette",
    "isMega": true,
    "elo": 9213,
    "winRate": 52.5,
    "appearances": 19255,
    "wins": 10105,
    "losses": 9150,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 63,
        "games": 4043
      },
      {
        "name": "Archaludon",
        "winRate": 58.2,
        "games": 9026
      },
      {
        "name": "Kingambit",
        "winRate": 58.2,
        "games": 9026
      },
      {
        "name": "Tauros",
        "winRate": 54.7,
        "games": 9174
      },
      {
        "name": "Scizor",
        "winRate": 54.7,
        "games": 9174
      }
    ],
    "bestSets": []
  },
  "80-mega": {
    "id": 80,
    "name": "Mega Slowbro",
    "isMega": true,
    "elo": 9211,
    "winRate": 50.3,
    "appearances": 15492,
    "wins": 7786,
    "losses": 7706,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 53.2,
        "games": 5097
      },
      {
        "name": "Kingambit",
        "winRate": 51.5,
        "games": 10410
      },
      {
        "name": "Arcanine",
        "winRate": 51.5,
        "games": 10410
      },
      {
        "name": "Ursaluna",
        "winRate": 50.5,
        "games": 10179
      },
      {
        "name": "Steelix",
        "winRate": 50.5,
        "games": 10179
      }
    ],
    "bestSets": []
  },
  "65-mega": {
    "id": 65,
    "name": "Mega Alakazam",
    "isMega": true,
    "elo": 9210,
    "winRate": 47.8,
    "appearances": 15371,
    "wins": 7352,
    "losses": 8019,
    "bestPartners": [
      {
        "name": "Heracross",
        "winRate": 50.6,
        "games": 5459
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 5459
      },
      {
        "name": "Hydreigon",
        "winRate": 50.6,
        "games": 5459
      },
      {
        "name": "Incineroar",
        "winRate": 50,
        "games": 10674
      },
      {
        "name": "Krookodile",
        "winRate": 49.4,
        "games": 5215
      }
    ],
    "bestSets": []
  },
  "701-mega": {
    "id": 701,
    "name": "Mega Hawlucha",
    "isMega": true,
    "elo": 9210,
    "winRate": 50.9,
    "appearances": 15908,
    "wins": 8095,
    "losses": 7813,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 53.1,
        "games": 5055
      },
      {
        "name": "Incineroar",
        "winRate": 51.7,
        "games": 10518
      },
      {
        "name": "Arcanine",
        "winRate": 51.7,
        "games": 10518
      },
      {
        "name": "Krookodile",
        "winRate": 51.2,
        "games": 10445
      },
      {
        "name": "Metagross",
        "winRate": 51.2,
        "games": 10445
      }
    ],
    "bestSets": []
  },
  "609-mega": {
    "id": 609,
    "name": "Mega Chandelure",
    "isMega": true,
    "elo": 9208,
    "winRate": 50.2,
    "appearances": 26475,
    "wins": 13278,
    "losses": 13197,
    "bestPartners": [
      {
        "name": "Umbreon",
        "winRate": 50.7,
        "games": 5332
      },
      {
        "name": "Greninja",
        "winRate": 50.7,
        "games": 5332
      },
      {
        "name": "Hydreigon",
        "winRate": 50.7,
        "games": 5332
      },
      {
        "name": "Hatterene",
        "winRate": 50.5,
        "games": 5091
      },
      {
        "name": "Trevenant",
        "winRate": 50.5,
        "games": 5091
      }
    ],
    "bestSets": []
  },
  "149-mega": {
    "id": 149,
    "name": "Mega Dragonite",
    "isMega": true,
    "elo": 9204,
    "winRate": 48.8,
    "appearances": 56322,
    "wins": 27498,
    "losses": 28824,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 50.4,
        "games": 10311
      },
      {
        "name": "Dragapult",
        "winRate": 50.4,
        "games": 10311
      },
      {
        "name": "Garchomp",
        "winRate": 50.4,
        "games": 15705
      },
      {
        "name": "Aggron",
        "winRate": 50.3,
        "games": 5302
      },
      {
        "name": "Scizor",
        "winRate": 50.3,
        "games": 10813
      }
    ],
    "bestSets": []
  },
  "359-mega-z": {
    "id": 359,
    "name": "Mega Absol Z",
    "isMega": true,
    "elo": 9200,
    "winRate": 43.9,
    "appearances": 14150,
    "wins": 6217,
    "losses": 7933,
    "bestPartners": [
      {
        "name": "Ninetales",
        "winRate": 50.3,
        "games": 5369
      },
      {
        "name": "Scizor",
        "winRate": 50.3,
        "games": 5369
      },
      {
        "name": "Sneasler",
        "winRate": 50.3,
        "games": 5369
      },
      {
        "name": "Gyarados",
        "winRate": 49.2,
        "games": 10587
      },
      {
        "name": "Arcanine",
        "winRate": 48,
        "games": 5218
      }
    ],
    "bestSets": []
  },
  "530-mega": {
    "id": 530,
    "name": "Mega Excadrill",
    "isMega": true,
    "elo": 9197,
    "winRate": 49.1,
    "appearances": 15723,
    "wins": 7720,
    "losses": 8003,
    "bestPartners": [
      {
        "name": "Dragonite",
        "winRate": 49.6,
        "games": 5143
      },
      {
        "name": "Gyarados",
        "winRate": 49.4,
        "games": 10515
      },
      {
        "name": "Pelipper",
        "winRate": 49.4,
        "games": 10515
      },
      {
        "name": "Altaria",
        "winRate": 49.1,
        "games": 10351
      },
      {
        "name": "Noivern",
        "winRate": 49.1,
        "games": 10351
      }
    ],
    "bestSets": []
  },
  "475-mega": {
    "id": 475,
    "name": "Mega Gallade",
    "isMega": true,
    "elo": 9197,
    "winRate": 48,
    "appearances": 15273,
    "wins": 7324,
    "losses": 7949,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 50.4,
        "games": 5383
      },
      {
        "name": "Heat Rotom",
        "winRate": 50.4,
        "games": 5383
      },
      {
        "name": "Tinkaton",
        "winRate": 50.4,
        "games": 5383
      },
      {
        "name": "Tauros",
        "winRate": 50.4,
        "games": 5383
      },
      {
        "name": "Incineroar",
        "winRate": 48.9,
        "games": 10415
      }
    ],
    "bestSets": []
  },
  "94-mega": {
    "id": 94,
    "name": "Mega Gengar",
    "isMega": true,
    "elo": 9195,
    "winRate": 46.2,
    "appearances": 19513,
    "wins": 9015,
    "losses": 10498,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 50.1,
        "games": 5373
      },
      {
        "name": "Tyranitar",
        "winRate": 50.1,
        "games": 5373
      },
      {
        "name": "Krookodile",
        "winRate": 49.8,
        "games": 10664
      },
      {
        "name": "Greninja",
        "winRate": 49.8,
        "games": 10664
      },
      {
        "name": "Tauros",
        "winRate": 49.8,
        "games": 10651
      }
    ],
    "bestSets": []
  },
  "208-mega": {
    "id": 208,
    "name": "Mega Steelix",
    "isMega": true,
    "elo": 9195,
    "winRate": 50,
    "appearances": 15909,
    "wins": 7955,
    "losses": 7954,
    "bestPartners": [
      {
        "name": "Charizard",
        "winRate": 50.9,
        "games": 5315
      },
      {
        "name": "Slowbro",
        "winRate": 50.9,
        "games": 5315
      },
      {
        "name": "Gyarados",
        "winRate": 50.9,
        "games": 5315
      },
      {
        "name": "Blastoise",
        "winRate": 50.3,
        "games": 10682
      },
      {
        "name": "Tauros",
        "winRate": 50.1,
        "games": 10542
      }
    ],
    "bestSets": []
  },
  "428-mega": {
    "id": 428,
    "name": "Mega Lopunny",
    "isMega": true,
    "elo": 9193,
    "winRate": 49.9,
    "appearances": 15672,
    "wins": 7815,
    "losses": 7857,
    "bestPartners": [
      {
        "name": "Tauros",
        "winRate": 50.6,
        "games": 5254
      },
      {
        "name": "Polteageist",
        "winRate": 50.6,
        "games": 5254
      },
      {
        "name": "Krookodile",
        "winRate": 50.2,
        "games": 10449
      },
      {
        "name": "Aegislash",
        "winRate": 49.9,
        "games": 10477
      },
      {
        "name": "Froslass",
        "winRate": 49.9,
        "games": 10477
      }
    ],
    "bestSets": []
  },
  "978-mega": {
    "id": 978,
    "name": "Mega Tatsugiri",
    "isMega": true,
    "elo": 9192,
    "winRate": 50.2,
    "appearances": 15966,
    "wins": 8017,
    "losses": 7949,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 50.6,
        "games": 5369
      },
      {
        "name": "Skarmory",
        "winRate": 50.3,
        "games": 10874
      },
      {
        "name": "Klefki",
        "winRate": 50.3,
        "games": 10874
      },
      {
        "name": "Scizor",
        "winRate": 50.3,
        "games": 10874
      },
      {
        "name": "Excadrill",
        "winRate": 50.2,
        "games": 15966
      }
    ],
    "bestSets": []
  },
  "500-mega": {
    "id": 500,
    "name": "Mega Emboar",
    "isMega": true,
    "elo": 9189,
    "winRate": 47.9,
    "appearances": 14995,
    "wins": 7180,
    "losses": 7815,
    "bestPartners": [
      {
        "name": "Greninja",
        "winRate": 50.4,
        "games": 5232
      },
      {
        "name": "Starmie",
        "winRate": 50.4,
        "games": 5232
      },
      {
        "name": "Fan Rotom",
        "winRate": 50.3,
        "games": 5180
      },
      {
        "name": "Slowbro",
        "winRate": 50.3,
        "games": 5180
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 10412
      }
    ],
    "bestSets": []
  },
  "6-mega-y": {
    "id": 6,
    "name": "Mega Charizard Y",
    "isMega": true,
    "elo": 9189,
    "winRate": 49.8,
    "appearances": 31601,
    "wins": 15723,
    "losses": 15878,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 50.6,
        "games": 5498
      },
      {
        "name": "Incineroar",
        "winRate": 50.6,
        "games": 5498
      },
      {
        "name": "Archaludon",
        "winRate": 50.5,
        "games": 5453
      },
      {
        "name": "Excadrill",
        "winRate": 50.5,
        "games": 5453
      },
      {
        "name": "Rhyperior",
        "winRate": 50.5,
        "games": 5453
      }
    ],
    "bestSets": []
  },
  "130-mega": {
    "id": 130,
    "name": "Mega Gyarados",
    "isMega": true,
    "elo": 9188,
    "winRate": 51.3,
    "appearances": 274454,
    "wins": 140846,
    "losses": 133608,
    "bestPartners": [
      {
        "name": "Fan Rotom",
        "winRate": 63.8,
        "games": 4083
      },
      {
        "name": "Froslass",
        "winRate": 62.6,
        "games": 4166
      },
      {
        "name": "Clefable",
        "winRate": 62.6,
        "games": 4166
      },
      {
        "name": "Ursaluna",
        "winRate": 61.2,
        "games": 8504
      },
      {
        "name": "Pawmot",
        "winRate": 59.8,
        "games": 4338
      }
    ],
    "bestSets": []
  },
  "6-mega-x": {
    "id": 6,
    "name": "Mega Charizard X",
    "isMega": true,
    "elo": 9188,
    "winRate": 49.1,
    "appearances": 15698,
    "wins": 7714,
    "losses": 7984,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 50.5,
        "games": 5290
      },
      {
        "name": "Garchomp",
        "winRate": 50.5,
        "games": 5290
      },
      {
        "name": "Whimsicott",
        "winRate": 50.5,
        "games": 5290
      },
      {
        "name": "Excadrill",
        "winRate": 50.1,
        "games": 10623
      },
      {
        "name": "Krookodile",
        "winRate": 49.8,
        "games": 5333
      }
    ],
    "bestSets": []
  },
  "227-mega": {
    "id": 227,
    "name": "Mega Skarmory",
    "isMega": true,
    "elo": 9186,
    "winRate": 50.2,
    "appearances": 21173,
    "wins": 10639,
    "losses": 10534,
    "bestPartners": [
      {
        "name": "Garchomp",
        "winRate": 50.8,
        "games": 10638
      },
      {
        "name": "Dragapult",
        "winRate": 50.8,
        "games": 5381
      },
      {
        "name": "Krookodile",
        "winRate": 50.8,
        "games": 10638
      },
      {
        "name": "Glaceon",
        "winRate": 50.8,
        "games": 5257
      },
      {
        "name": "Froslass",
        "winRate": 50.8,
        "games": 5257
      }
    ],
    "bestSets": []
  },
  "952-mega": {
    "id": 952,
    "name": "Mega Scovillain",
    "isMega": true,
    "elo": 9181,
    "winRate": 50.1,
    "appearances": 15904,
    "wins": 7960,
    "losses": 7944,
    "bestPartners": [
      {
        "name": "Corviknight",
        "winRate": 50.7,
        "games": 5420
      },
      {
        "name": "Skarmory",
        "winRate": 50.7,
        "games": 5420
      },
      {
        "name": "Stunfisk",
        "winRate": 50.4,
        "games": 10659
      },
      {
        "name": "Rhyperior",
        "winRate": 50.2,
        "games": 5239
      },
      {
        "name": "Klefki",
        "winRate": 50.2,
        "games": 5239
      }
    ],
    "bestSets": []
  },
  "36-mega": {
    "id": 36,
    "name": "Mega Clefable",
    "isMega": true,
    "elo": 9178,
    "winRate": 49.2,
    "appearances": 15924,
    "wins": 7835,
    "losses": 8089,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 50.3,
        "games": 5383
      },
      {
        "name": "Stunfisk",
        "winRate": 50.3,
        "games": 5383
      },
      {
        "name": "Rotom",
        "winRate": 50.3,
        "games": 5383
      },
      {
        "name": "Scizor",
        "winRate": 49.4,
        "games": 5346
      },
      {
        "name": "Incineroar",
        "winRate": 49.4,
        "games": 5346
      }
    ],
    "bestSets": []
  },
  "359-mega": {
    "id": 359,
    "name": "Mega Absol",
    "isMega": true,
    "elo": 9175,
    "winRate": 48.7,
    "appearances": 15952,
    "wins": 7768,
    "losses": 8184,
    "bestPartners": [
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.1,
        "games": 10726
      },
      {
        "name": "Gyarados",
        "winRate": 49.1,
        "games": 10726
      },
      {
        "name": "Arcanine",
        "winRate": 49.1,
        "games": 5386
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 48.7,
        "games": 15952
      },
      {
        "name": "Venusaur",
        "winRate": 48.5,
        "games": 10566
      }
    ],
    "bestSets": []
  },
  "26-mega-y": {
    "id": 26,
    "name": "Mega Raichu Y",
    "isMega": true,
    "elo": 9173,
    "winRate": 48.4,
    "appearances": 15714,
    "wins": 7613,
    "losses": 8101,
    "bestPartners": [
      {
        "name": "Pinsir",
        "winRate": 50.4,
        "games": 5358
      },
      {
        "name": "Gyarados",
        "winRate": 50.2,
        "games": 10754
      },
      {
        "name": "Arcanine",
        "winRate": 50.2,
        "games": 10754
      },
      {
        "name": "Krookodile",
        "winRate": 50.2,
        "games": 10754
      },
      {
        "name": "Incineroar",
        "winRate": 50.1,
        "games": 5396
      }
    ],
    "bestSets": []
  },
  "531-mega": {
    "id": 531,
    "name": "Mega Audino",
    "isMega": true,
    "elo": 9163,
    "winRate": 45.4,
    "appearances": 14268,
    "wins": 6472,
    "losses": 7796,
    "bestPartners": [
      {
        "name": "Froslass",
        "winRate": 50.3,
        "games": 5149
      },
      {
        "name": "Incineroar",
        "winRate": 50.3,
        "games": 5149
      },
      {
        "name": "Gyarados",
        "winRate": 50,
        "games": 5382
      },
      {
        "name": "Slowbro",
        "winRate": 50,
        "games": 5382
      },
      {
        "name": "Hatterene",
        "winRate": 45.4,
        "games": 14268
      }
    ],
    "bestSets": []
  },
  "15-mega": {
    "id": 15,
    "name": "Mega Beedrill",
    "isMega": true,
    "elo": 9155,
    "winRate": 48.5,
    "appearances": 15618,
    "wins": 7579,
    "losses": 8039,
    "bestPartners": [
      {
        "name": "Tyranitar",
        "winRate": 50.7,
        "games": 5288
      },
      {
        "name": "Lycanroc",
        "winRate": 49.4,
        "games": 10498
      },
      {
        "name": "Krookodile",
        "winRate": 48.7,
        "games": 10408
      },
      {
        "name": "Incineroar",
        "winRate": 48.5,
        "games": 15618
      },
      {
        "name": "Garchomp",
        "winRate": 48.5,
        "games": 15618
      }
    ],
    "bestSets": []
  },
  "121-mega": {
    "id": 121,
    "name": "Mega Starmie",
    "isMega": true,
    "elo": 9155,
    "winRate": 50.5,
    "appearances": 15888,
    "wins": 8030,
    "losses": 7858,
    "bestPartners": [
      {
        "name": "Kommo-o",
        "winRate": 50.8,
        "games": 5383
      },
      {
        "name": "Heracross",
        "winRate": 50.8,
        "games": 5383
      },
      {
        "name": "Conkeldurr",
        "winRate": 50.8,
        "games": 5383
      },
      {
        "name": "Arcanine",
        "winRate": 50.6,
        "games": 10599
      },
      {
        "name": "Krookodile",
        "winRate": 50.6,
        "games": 10672
      }
    ],
    "bestSets": []
  },
  "229-mega": {
    "id": 229,
    "name": "Mega Houndoom",
    "isMega": true,
    "elo": 9146,
    "winRate": 48.5,
    "appearances": 15061,
    "wins": 7306,
    "losses": 7755,
    "bestPartners": [
      {
        "name": "Starmie",
        "winRate": 49.9,
        "games": 5061
      },
      {
        "name": "Whimsicott",
        "winRate": 49.8,
        "games": 10086
      },
      {
        "name": "Basculegion",
        "winRate": 49.8,
        "games": 10086
      },
      {
        "name": "Gyarados",
        "winRate": 49.7,
        "games": 5025
      },
      {
        "name": "Decidueye",
        "winRate": 49.7,
        "games": 5025
      }
    ],
    "bestSets": []
  },
  "740-mega": {
    "id": 740,
    "name": "Mega Crabominable",
    "isMega": true,
    "elo": 9143,
    "winRate": 44.8,
    "appearances": 14381,
    "wins": 6441,
    "losses": 7940,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 48.5,
        "games": 5277
      },
      {
        "name": "Incineroar",
        "winRate": 48.5,
        "games": 5277
      },
      {
        "name": "Arcanine",
        "winRate": 48.5,
        "games": 5277
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 48.5,
        "games": 5277
      },
      {
        "name": "Delphox",
        "winRate": 45.1,
        "games": 9688
      }
    ],
    "bestSets": []
  },
  "248-mega": {
    "id": 248,
    "name": "Mega Tyranitar",
    "isMega": true,
    "elo": 9131,
    "winRate": 49.8,
    "appearances": 308900,
    "wins": 153913,
    "losses": 154987,
    "bestPartners": [
      {
        "name": "Palafin",
        "winRate": 50.7,
        "games": 5225
      },
      {
        "name": "Rhyperior",
        "winRate": 50.3,
        "games": 5387
      },
      {
        "name": "Krookodile",
        "winRate": 50.3,
        "games": 5387
      },
      {
        "name": "Hippowdon",
        "winRate": 50.3,
        "games": 5387
      },
      {
        "name": "Volcarona",
        "winRate": 50.3,
        "games": 5213
      }
    ],
    "bestSets": []
  },
  "780-mega": {
    "id": 780,
    "name": "Mega Drampa",
    "isMega": true,
    "elo": 9127,
    "winRate": 48.6,
    "appearances": 15326,
    "wins": 7444,
    "losses": 7882,
    "bestPartners": [
      {
        "name": "Primarina",
        "winRate": 50.7,
        "games": 5310
      },
      {
        "name": "Metagross",
        "winRate": 50.7,
        "games": 5310
      },
      {
        "name": "Talonflame",
        "winRate": 50.7,
        "games": 5310
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.7,
        "games": 5227
      },
      {
        "name": "Charizard",
        "winRate": 49.7,
        "games": 5227
      }
    ],
    "bestSets": []
  },
  "306-mega": {
    "id": 306,
    "name": "Mega Aggron",
    "isMega": true,
    "elo": 9077,
    "winRate": 43.2,
    "appearances": 13920,
    "wins": 6015,
    "losses": 7905,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50,
        "games": 5437
      },
      {
        "name": "Dragonite",
        "winRate": 50,
        "games": 5437
      },
      {
        "name": "Sinistcha",
        "winRate": 44.2,
        "games": 4794
      },
      {
        "name": "Serperior",
        "winRate": 44.2,
        "games": 4794
      },
      {
        "name": "Fan Rotom",
        "winRate": 44.2,
        "games": 4794
      }
    ],
    "bestSets": []
  }
,
  "18": {
    "id": 18,
    "name": "Pidgeot",
    "isMega": false,
    "elo": 8700,
    "winRate": 45.4,
    "appearances": 76078,
    "wins": 34539,
    "losses": 41539,
    "bestPartners": [
      {
        "name": "Galarian Slowbro",
        "winRate": 61.9,
        "games": 4927
      },
      {
        "name": "Incineroar",
        "winRate": 58.8,
        "games": 4614
      },
      {
        "name": "Reuniclus",
        "winRate": 55.1,
        "games": 653
      },
      {
        "name": "Lycanroc",
        "winRate": 55,
        "games": 1378
      },
      {
        "name": "Raichu",
        "winRate": 50.2,
        "games": 730
      }
    ],
    "bestSets": []
  },
  "18-mega": {
    "id": 18,
    "name": "Mega Pidgeot",
    "isMega": true,
    "elo": 8417,
    "winRate": 46.1,
    "appearances": 43625,
    "wins": 20111,
    "losses": 23514,
    "bestPartners": [
      {
        "name": "Palafin",
        "winRate": 64,
        "games": 1880
      },
      {
        "name": "Kingambit",
        "winRate": 64,
        "games": 732
      },
      {
        "name": "Bellibolt",
        "winRate": 63.7,
        "games": 1573
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 57.7,
        "games": 1390
      },
      {
        "name": "Ceruledge",
        "winRate": 55,
        "games": 4920
      }
    ],
    "bestSets": []
  },
  "24": {
    "id": 24,
    "name": "Arbok",
    "isMega": false,
    "elo": 8210,
    "winRate": 46.6,
    "appearances": 31739,
    "wins": 14790,
    "losses": 16949,
    "bestPartners": [
      {
        "name": "Bastiodon",
        "winRate": 60.4,
        "games": 3125
      },
      {
        "name": "Vaporeon",
        "winRate": 58,
        "games": 3693
      },
      {
        "name": "Conkeldurr",
        "winRate": 57.5,
        "games": 2201
      },
      {
        "name": "Audino",
        "winRate": 54.9,
        "games": 3762
      },
      {
        "name": "Arcanine",
        "winRate": 52.7,
        "games": 4986
      }
    ],
    "bestSets": []
  },
  "68": {
    "id": 68,
    "name": "Machamp",
    "isMega": false,
    "elo": 8966,
    "winRate": 47.5,
    "appearances": 9282,
    "wins": 4409,
    "losses": 4873,
    "bestPartners": [
      {
        "name": "Farigiraf",
        "winRate": 55,
        "games": 3309
      },
      {
        "name": "Sableye",
        "winRate": 53.4,
        "games": 1557
      },
      {
        "name": "Fan Rotom",
        "winRate": 52.6,
        "games": 3500
      },
      {
        "name": "Absol",
        "winRate": 51.5,
        "games": 1140
      },
      {
        "name": "Wash Rotom",
        "winRate": 51.5,
        "games": 1173
      }
    ],
    "bestSets": []
  },
  "168": {
    "id": 168,
    "name": "Ariados",
    "isMega": false,
    "elo": 7561,
    "winRate": 44.9,
    "appearances": 59868,
    "wins": 26881,
    "losses": 32987,
    "bestPartners": [
      {
        "name": "Vanilluxe",
        "winRate": 63.3,
        "games": 4913
      },
      {
        "name": "Weavile",
        "winRate": 60.7,
        "games": 3612
      },
      {
        "name": "Samurott",
        "winRate": 56,
        "games": 1791
      },
      {
        "name": "Bellibolt",
        "winRate": 54.6,
        "games": 2408
      },
      {
        "name": "Quaquaval",
        "winRate": 52.6,
        "games": 2321
      }
    ],
    "bestSets": []
  },
  "205": {
    "id": 205,
    "name": "Forretress",
    "isMega": false,
    "elo": 8526,
    "winRate": 48.2,
    "appearances": 26243,
    "wins": 12649,
    "losses": 13594,
    "bestPartners": [
      {
        "name": "Banette",
        "winRate": 60.5,
        "games": 719
      },
      {
        "name": "Vanilluxe",
        "winRate": 56.8,
        "games": 3529
      },
      {
        "name": "Simipour",
        "winRate": 56.7,
        "games": 3748
      },
      {
        "name": "Politoed",
        "winRate": 54.5,
        "games": 3391
      },
      {
        "name": "Ariados",
        "winRate": 50.3,
        "games": 2480
      }
    ],
    "bestSets": []
  },
  "308": {
    "id": 308,
    "name": "Medicham",
    "isMega": false,
    "elo": 9069,
    "winRate": 50.1,
    "appearances": 74644,
    "wins": 37397,
    "losses": 37247,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 64.7,
        "games": 1985
      },
      {
        "name": "Kangaskhan",
        "winRate": 61.9,
        "games": 635
      },
      {
        "name": "Milotic",
        "winRate": 61.8,
        "games": 3753
      },
      {
        "name": "Delphox",
        "winRate": 55.1,
        "games": 1194
      },
      {
        "name": "Tyranitar",
        "winRate": 51.4,
        "games": 1060
      }
    ],
    "bestSets": []
  },
  "308-mega": {
    "id": 308,
    "name": "Mega Medicham",
    "isMega": true,
    "elo": 9219,
    "winRate": 48.4,
    "appearances": 10520,
    "wins": 5092,
    "losses": 5428,
    "bestPartners": [
      {
        "name": "Arbok",
        "winRate": 63.5,
        "games": 3490
      },
      {
        "name": "Drampa",
        "winRate": 59.5,
        "games": 4509
      },
      {
        "name": "Leafeon",
        "winRate": 59.4,
        "games": 4690
      },
      {
        "name": "Infernape",
        "winRate": 54.5,
        "games": 1827
      },
      {
        "name": "Meowscarada",
        "winRate": 53.3,
        "games": 4471
      }
    ],
    "bestSets": []
  },
  "310": {
    "id": 310,
    "name": "Manectric",
    "isMega": false,
    "elo": 8812,
    "winRate": 50.6,
    "appearances": 62381,
    "wins": 31565,
    "losses": 30816,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 60.9,
        "games": 824
      },
      {
        "name": "Castform",
        "winRate": 60.8,
        "games": 4326
      },
      {
        "name": "Glimmora",
        "winRate": 59.1,
        "games": 2978
      },
      {
        "name": "Delphox",
        "winRate": 57.5,
        "games": 3705
      },
      {
        "name": "Venusaur",
        "winRate": 52.1,
        "games": 1975
      }
    ],
    "bestSets": []
  },
  "310-mega": {
    "id": 310,
    "name": "Mega Manectric",
    "isMega": true,
    "elo": 8875,
    "winRate": 47.3,
    "appearances": 16706,
    "wins": 7902,
    "losses": 8804,
    "bestPartners": [
      {
        "name": "Dragonite",
        "winRate": 63.3,
        "games": 2035
      },
      {
        "name": "Aurorus",
        "winRate": 54.7,
        "games": 2851
      },
      {
        "name": "Pangoro",
        "winRate": 51.7,
        "games": 1623
      },
      {
        "name": "Starmie",
        "winRate": 51.7,
        "games": 4969
      },
      {
        "name": "Tinkaton",
        "winRate": 50.4,
        "games": 3958
      }
    ],
    "bestSets": []
  },
  "319": {
    "id": 319,
    "name": "Sharpedo",
    "isMega": false,
    "elo": 8587,
    "winRate": 48.5,
    "appearances": 36570,
    "wins": 17736,
    "losses": 18834,
    "bestPartners": [
      {
        "name": "Morpeko",
        "winRate": 61.9,
        "games": 4498
      },
      {
        "name": "Flareon",
        "winRate": 61,
        "games": 614
      },
      {
        "name": "Mow Rotom",
        "winRate": 59.6,
        "games": 4102
      },
      {
        "name": "Tyranitar",
        "winRate": 59.5,
        "games": 1217
      },
      {
        "name": "Leafeon",
        "winRate": 58.6,
        "games": 1586
      }
    ],
    "bestSets": []
  },
  "319-mega": {
    "id": 319,
    "name": "Mega Sharpedo",
    "isMega": true,
    "elo": 8922,
    "winRate": 47.1,
    "appearances": 25061,
    "wins": 11804,
    "losses": 13257,
    "bestPartners": [
      {
        "name": "Vivillon",
        "winRate": 63.4,
        "games": 1317
      },
      {
        "name": "Tinkaton",
        "winRate": 59.1,
        "games": 2843
      },
      {
        "name": "Klefki",
        "winRate": 54.7,
        "games": 1634
      },
      {
        "name": "Fan Rotom",
        "winRate": 53.1,
        "games": 1748
      },
      {
        "name": "Hawlucha",
        "winRate": 50.9,
        "games": 3221
      }
    ],
    "bestSets": []
  },
  "323": {
    "id": 323,
    "name": "Camerupt",
    "isMega": false,
    "elo": 8308,
    "winRate": 48.6,
    "appearances": 41207,
    "wins": 20027,
    "losses": 21180,
    "bestPartners": [
      {
        "name": "Abomasnow",
        "winRate": 62.7,
        "games": 1947
      },
      {
        "name": "Tyrantrum",
        "winRate": 62.3,
        "games": 1393
      },
      {
        "name": "Venusaur",
        "winRate": 57.5,
        "games": 4534
      },
      {
        "name": "Vivillon",
        "winRate": 50.8,
        "games": 4863
      },
      {
        "name": "Starmie",
        "winRate": 50.6,
        "games": 2130
      }
    ],
    "bestSets": []
  },
  "323-mega": {
    "id": 323,
    "name": "Mega Camerupt",
    "isMega": true,
    "elo": 8776,
    "winRate": 47.2,
    "appearances": 37889,
    "wins": 17884,
    "losses": 20005,
    "bestPartners": [
      {
        "name": "Luxray",
        "winRate": 63.1,
        "games": 1407
      },
      {
        "name": "Florges",
        "winRate": 60.7,
        "games": 2620
      },
      {
        "name": "Aromatisse",
        "winRate": 56.2,
        "games": 3559
      },
      {
        "name": "Hatterene",
        "winRate": 55.2,
        "games": 4331
      },
      {
        "name": "Roserade",
        "winRate": 53.7,
        "games": 2200
      }
    ],
    "bestSets": []
  },
  "354": {
    "id": 354,
    "name": "Banette",
    "isMega": false,
    "elo": 8770,
    "winRate": 45.1,
    "appearances": 23549,
    "wins": 10621,
    "losses": 12928,
    "bestPartners": [
      {
        "name": "Alolan Ninetales",
        "winRate": 60.4,
        "games": 603
      },
      {
        "name": "Archaludon",
        "winRate": 59.1,
        "games": 3312
      },
      {
        "name": "Araquanid",
        "winRate": 55.9,
        "games": 2920
      },
      {
        "name": "Heracross",
        "winRate": 53.1,
        "games": 729
      },
      {
        "name": "Emolga",
        "winRate": 51,
        "games": 523
      }
    ],
    "bestSets": []
  },
  "354-mega": {
    "id": 354,
    "name": "Mega Banette",
    "isMega": true,
    "elo": 8611,
    "winRate": 46.6,
    "appearances": 37898,
    "wins": 17660,
    "losses": 20238,
    "bestPartners": [
      {
        "name": "Castform",
        "winRate": 62.4,
        "games": 2356
      },
      {
        "name": "Houndoom",
        "winRate": 62.2,
        "games": 1699
      },
      {
        "name": "Leafeon",
        "winRate": 58,
        "games": 877
      },
      {
        "name": "Espathra",
        "winRate": 57.9,
        "games": 3645
      },
      {
        "name": "Sharpedo",
        "winRate": 50.7,
        "games": 4324
      }
    ],
    "bestSets": []
  },
  "358": {
    "id": 358,
    "name": "Chimecho",
    "isMega": false,
    "elo": 8553,
    "winRate": 46.9,
    "appearances": 7924,
    "wins": 3716,
    "losses": 4208,
    "bestPartners": [
      {
        "name": "Vivillon",
        "winRate": 61.4,
        "games": 4930
      },
      {
        "name": "Lycanroc",
        "winRate": 60.7,
        "games": 3310
      },
      {
        "name": "Samurott",
        "winRate": 53.2,
        "games": 2450
      },
      {
        "name": "Salazzle",
        "winRate": 51.2,
        "games": 3862
      },
      {
        "name": "Patrat",
        "winRate": 50.7,
        "games": 1545
      }
    ],
    "bestSets": []
  },
  "358-mega": {
    "id": 358,
    "name": "Mega Chimecho",
    "isMega": true,
    "elo": 8519,
    "winRate": 46.6,
    "appearances": 24440,
    "wins": 11389,
    "losses": 13051,
    "bestPartners": [
      {
        "name": "Hisuian Decidueye",
        "winRate": 64,
        "games": 4963
      },
      {
        "name": "Simipour",
        "winRate": 63.7,
        "games": 998
      },
      {
        "name": "Skarmory",
        "winRate": 63.4,
        "games": 656
      },
      {
        "name": "Raichu",
        "winRate": 60.8,
        "games": 3792
      },
      {
        "name": "Typhlosion",
        "winRate": 57.3,
        "games": 3944
      }
    ],
    "bestSets": []
  },
  "362": {
    "id": 362,
    "name": "Glalie",
    "isMega": false,
    "elo": 8757,
    "winRate": 47.7,
    "appearances": 10347,
    "wins": 4936,
    "losses": 5411,
    "bestPartners": [
      {
        "name": "Frost Rotom",
        "winRate": 64.1,
        "games": 3994
      },
      {
        "name": "Dragonite",
        "winRate": 61.1,
        "games": 4172
      },
      {
        "name": "Tyranitar",
        "winRate": 56.7,
        "games": 4110
      },
      {
        "name": "Chesnaught",
        "winRate": 52.6,
        "games": 1152
      },
      {
        "name": "Kleavor",
        "winRate": 52.4,
        "games": 2593
      }
    ],
    "bestSets": []
  },
  "362-mega": {
    "id": 362,
    "name": "Mega Glalie",
    "isMega": true,
    "elo": 8769,
    "winRate": 47.2,
    "appearances": 44301,
    "wins": 20910,
    "losses": 23391,
    "bestPartners": [
      {
        "name": "Aggron",
        "winRate": 59.4,
        "games": 3300
      },
      {
        "name": "Umbreon",
        "winRate": 59.2,
        "games": 2141
      },
      {
        "name": "Gardevoir",
        "winRate": 56.2,
        "games": 775
      },
      {
        "name": "Chandelure",
        "winRate": 54.6,
        "games": 1912
      },
      {
        "name": "Hydreigon",
        "winRate": 50.9,
        "games": 1215
      }
    ],
    "bestSets": []
  },
  "405": {
    "id": 405,
    "name": "Luxray",
    "isMega": false,
    "elo": 8539,
    "winRate": 48.8,
    "appearances": 13936,
    "wins": 6801,
    "losses": 7135,
    "bestPartners": [
      {
        "name": "Typhlosion",
        "winRate": 60.8,
        "games": 4643
      },
      {
        "name": "Basculegion",
        "winRate": 60.8,
        "games": 1641
      },
      {
        "name": "Patrat",
        "winRate": 59.3,
        "games": 2504
      },
      {
        "name": "Gyarados",
        "winRate": 51.7,
        "games": 1857
      },
      {
        "name": "Serperior",
        "winRate": 50.8,
        "games": 4235
      }
    ],
    "bestSets": []
  },
  "407": {
    "id": 407,
    "name": "Roserade",
    "isMega": false,
    "elo": 9131,
    "winRate": 51,
    "appearances": 40647,
    "wins": 20730,
    "losses": 19917,
    "bestPartners": [
      {
        "name": "Raichu",
        "winRate": 61.3,
        "games": 3537
      },
      {
        "name": "Florges",
        "winRate": 58.6,
        "games": 2460
      },
      {
        "name": "Flapple",
        "winRate": 57.7,
        "games": 1879
      },
      {
        "name": "Serperior",
        "winRate": 53.5,
        "games": 1639
      },
      {
        "name": "Pinsir",
        "winRate": 53,
        "games": 3273
      }
    ],
    "bestSets": []
  },
  "409": {
    "id": 409,
    "name": "Rampardos",
    "isMega": false,
    "elo": 8776,
    "winRate": 46,
    "appearances": 22570,
    "wins": 10382,
    "losses": 12188,
    "bestPartners": [
      {
        "name": "Aromatisse",
        "winRate": 60.2,
        "games": 1513
      },
      {
        "name": "Blastoise",
        "winRate": 58.3,
        "games": 3981
      },
      {
        "name": "Espeon",
        "winRate": 54.9,
        "games": 3216
      },
      {
        "name": "Umbreon",
        "winRate": 53.8,
        "games": 1592
      },
      {
        "name": "Tinkaton",
        "winRate": 50.5,
        "games": 2278
      }
    ],
    "bestSets": []
  },
  "411": {
    "id": 411,
    "name": "Bastiodon",
    "isMega": false,
    "elo": 8450,
    "winRate": 46.4,
    "appearances": 79061,
    "wins": 36684,
    "losses": 42377,
    "bestPartners": [
      {
        "name": "Stunfisk",
        "winRate": 64.6,
        "games": 2097
      },
      {
        "name": "Victreebel",
        "winRate": 63.7,
        "games": 3181
      },
      {
        "name": "Emboar",
        "winRate": 62.9,
        "games": 3821
      },
      {
        "name": "Archaludon",
        "winRate": 62.1,
        "games": 3397
      },
      {
        "name": "Talonflame",
        "winRate": 57.4,
        "games": 3486
      }
    ],
    "bestSets": []
  },
  "454": {
    "id": 454,
    "name": "Toxicroak",
    "isMega": false,
    "elo": 8242,
    "winRate": 47.1,
    "appearances": 68257,
    "wins": 32149,
    "losses": 36108,
    "bestPartners": [
      {
        "name": "Alcremie",
        "winRate": 61.3,
        "games": 4348
      },
      {
        "name": "Absol",
        "winRate": 60.5,
        "games": 2270
      },
      {
        "name": "Altaria",
        "winRate": 55.3,
        "games": 1460
      },
      {
        "name": "Dragonite",
        "winRate": 55.2,
        "games": 839
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.4,
        "games": 2208
      }
    ],
    "bestSets": []
  },
  "504": {
    "id": 504,
    "name": "Patrat",
    "isMega": false,
    "elo": 8013,
    "winRate": 46.8,
    "appearances": 11236,
    "wins": 5258,
    "losses": 5978,
    "bestPartners": [
      {
        "name": "Tyranitar",
        "winRate": 62.3,
        "games": 511
      },
      {
        "name": "Reuniclus",
        "winRate": 58,
        "games": 987
      },
      {
        "name": "Rampardos",
        "winRate": 55.9,
        "games": 3381
      },
      {
        "name": "Lopunny",
        "winRate": 53.6,
        "games": 2141
      },
      {
        "name": "Gardevoir",
        "winRate": 51.2,
        "games": 3881
      }
    ],
    "bestSets": []
  },
  "510": {
    "id": 510,
    "name": "Liepard",
    "isMega": false,
    "elo": 7537,
    "winRate": 42.3,
    "appearances": 29460,
    "wins": 12462,
    "losses": 16998,
    "bestPartners": [
      {
        "name": "Ditto",
        "winRate": 64.4,
        "games": 4315
      },
      {
        "name": "Luxray",
        "winRate": 63.6,
        "games": 2945
      },
      {
        "name": "Archaludon",
        "winRate": 56.7,
        "games": 3670
      },
      {
        "name": "Simisear",
        "winRate": 53,
        "games": 4865
      },
      {
        "name": "Skarmory",
        "winRate": 50.7,
        "games": 2310
      }
    ],
    "bestSets": []
  },
  "512": {
    "id": 512,
    "name": "Simisage",
    "isMega": false,
    "elo": 7633,
    "winRate": 45,
    "appearances": 78191,
    "wins": 35186,
    "losses": 43005,
    "bestPartners": [
      {
        "name": "Clawitzer",
        "winRate": 64.2,
        "games": 2800
      },
      {
        "name": "Aerodactyl",
        "winRate": 59.3,
        "games": 751
      },
      {
        "name": "Archaludon",
        "winRate": 56.1,
        "games": 2674
      },
      {
        "name": "Gourgeist",
        "winRate": 52.6,
        "games": 4647
      },
      {
        "name": "Galarian Stunfisk",
        "winRate": 52.5,
        "games": 1975
      }
    ],
    "bestSets": []
  },
  "514": {
    "id": 514,
    "name": "Simisear",
    "isMega": false,
    "elo": 7800,
    "winRate": 44.1,
    "appearances": 77502,
    "wins": 34178,
    "losses": 43324,
    "bestPartners": [
      {
        "name": "Alcremie",
        "winRate": 64.3,
        "games": 1462
      },
      {
        "name": "Oranguru",
        "winRate": 59.6,
        "games": 2863
      },
      {
        "name": "Aerodactyl",
        "winRate": 57.6,
        "games": 1872
      },
      {
        "name": "Altaria",
        "winRate": 55.2,
        "games": 1435
      },
      {
        "name": "Wyrdeer",
        "winRate": 51.5,
        "games": 1895
      }
    ],
    "bestSets": []
  },
  "516": {
    "id": 516,
    "name": "Simipour",
    "isMega": false,
    "elo": 8158,
    "winRate": 45.3,
    "appearances": 23503,
    "wins": 10647,
    "losses": 12856,
    "bestPartners": [
      {
        "name": "Greninja",
        "winRate": 61.3,
        "games": 4595
      },
      {
        "name": "Venusaur",
        "winRate": 60.8,
        "games": 4723
      },
      {
        "name": "Ceruledge",
        "winRate": 59.6,
        "games": 1520
      },
      {
        "name": "Glalie",
        "winRate": 56.8,
        "games": 1797
      },
      {
        "name": "Tauros",
        "winRate": 54,
        "games": 1389
      }
    ],
    "bestSets": []
  },
  "563": {
    "id": 563,
    "name": "Cofagrigus",
    "isMega": false,
    "elo": 8504,
    "winRate": 45.4,
    "appearances": 24219,
    "wins": 10995,
    "losses": 13224,
    "bestPartners": [
      {
        "name": "Maushold",
        "winRate": 63.9,
        "games": 3309
      },
      {
        "name": "Rotom",
        "winRate": 62,
        "games": 4645
      },
      {
        "name": "Kingambit",
        "winRate": 58.4,
        "games": 1236
      },
      {
        "name": "Hawlucha",
        "winRate": 54.5,
        "games": 2349
      },
      {
        "name": "Tinkaton",
        "winRate": 52.8,
        "games": 4409
      }
    ],
    "bestSets": []
  },
  "579": {
    "id": 579,
    "name": "Reuniclus",
    "isMega": false,
    "elo": 8819,
    "winRate": 50.6,
    "appearances": 56985,
    "wins": 28834,
    "losses": 28151,
    "bestPartners": [
      {
        "name": "Alolan Ninetales",
        "winRate": 58.8,
        "games": 3514
      },
      {
        "name": "Steelix",
        "winRate": 58,
        "games": 1252
      },
      {
        "name": "Hatterene",
        "winRate": 54.3,
        "games": 4641
      },
      {
        "name": "Roserade",
        "winRate": 53.9,
        "games": 4635
      },
      {
        "name": "Orthworm",
        "winRate": 50.2,
        "games": 3971
      }
    ],
    "bestSets": []
  },
  "614": {
    "id": 614,
    "name": "Beartic",
    "isMega": false,
    "elo": 8002,
    "winRate": 45.7,
    "appearances": 52279,
    "wins": 23892,
    "losses": 28387,
    "bestPartners": [
      {
        "name": "Clawitzer",
        "winRate": 62.6,
        "games": 4641
      },
      {
        "name": "Lycanroc",
        "winRate": 57.8,
        "games": 3789
      },
      {
        "name": "Goodra",
        "winRate": 55.3,
        "games": 977
      },
      {
        "name": "Alcremie",
        "winRate": 53.6,
        "games": 3126
      },
      {
        "name": "Ceruledge",
        "winRate": 51.3,
        "games": 3451
      }
    ],
    "bestSets": []
  },
  "671": {
    "id": 671,
    "name": "Florges",
    "isMega": false,
    "elo": 8745,
    "winRate": 48.8,
    "appearances": 75519,
    "wins": 36853,
    "losses": 38666,
    "bestPartners": [
      {
        "name": "Dragapult",
        "winRate": 61,
        "games": 1029
      },
      {
        "name": "Krookodile",
        "winRate": 60.3,
        "games": 1690
      },
      {
        "name": "Sylveon",
        "winRate": 55,
        "games": 3538
      },
      {
        "name": "Ampharos",
        "winRate": 54,
        "games": 1982
      },
      {
        "name": "Tyranitar",
        "winRate": 51.1,
        "games": 4092
      }
    ],
    "bestSets": []
  },
  "675": {
    "id": 675,
    "name": "Pangoro",
    "isMega": false,
    "elo": 8593,
    "winRate": 45.9,
    "appearances": 31051,
    "wins": 14252,
    "losses": 16799,
    "bestPartners": [
      {
        "name": "Orthworm",
        "winRate": 64.4,
        "games": 2934
      },
      {
        "name": "Whimsicott",
        "winRate": 64.4,
        "games": 2115
      },
      {
        "name": "Charizard",
        "winRate": 58.8,
        "games": 3790
      },
      {
        "name": "Florges",
        "winRate": 58.8,
        "games": 3430
      },
      {
        "name": "Hydrapple",
        "winRate": 58.7,
        "games": 4686
      }
    ],
    "bestSets": []
  },
  "683": {
    "id": 683,
    "name": "Aromatisse",
    "isMega": false,
    "elo": 8465,
    "winRate": 45,
    "appearances": 78818,
    "wins": 35468,
    "losses": 43350,
    "bestPartners": [
      {
        "name": "Wyrdeer",
        "winRate": 57.9,
        "games": 2748
      },
      {
        "name": "Slowking",
        "winRate": 57.3,
        "games": 3146
      },
      {
        "name": "Araquanid",
        "winRate": 56.9,
        "games": 3947
      },
      {
        "name": "Basculegion",
        "winRate": 55.3,
        "games": 4618
      },
      {
        "name": "Passimian",
        "winRate": 53.7,
        "games": 1834
      }
    ],
    "bestSets": []
  },
  "685": {
    "id": 685,
    "name": "Slurpuff",
    "isMega": false,
    "elo": 7592,
    "winRate": 44.6,
    "appearances": 32335,
    "wins": 14421,
    "losses": 17914,
    "bestPartners": [
      {
        "name": "Salazzle",
        "winRate": 61.5,
        "games": 1652
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 57.7,
        "games": 1111
      },
      {
        "name": "Lucario",
        "winRate": 56.9,
        "games": 678
      },
      {
        "name": "Samurott",
        "winRate": 51,
        "games": 4582
      },
      {
        "name": "Ninetales",
        "winRate": 50.1,
        "games": 2408
      }
    ],
    "bestSets": []
  },
  "695": {
    "id": 695,
    "name": "Heliolisk",
    "isMega": false,
    "elo": 8672,
    "winRate": 46.5,
    "appearances": 31512,
    "wins": 14653,
    "losses": 16859,
    "bestPartners": [
      {
        "name": "Pangoro",
        "winRate": 64.3,
        "games": 1109
      },
      {
        "name": "Mow Rotom",
        "winRate": 58.5,
        "games": 1383
      },
      {
        "name": "Rhyperior",
        "winRate": 55.5,
        "games": 2645
      },
      {
        "name": "Camerupt",
        "winRate": 52.9,
        "games": 2070
      },
      {
        "name": "Meganium",
        "winRate": 51.8,
        "games": 4352
      }
    ],
    "bestSets": []
  },
  "702": {
    "id": 702,
    "name": "Dedenne",
    "isMega": false,
    "elo": 8184,
    "winRate": 43,
    "appearances": 77752,
    "wins": 33433,
    "losses": 44319,
    "bestPartners": [
      {
        "name": "Espathra",
        "winRate": 61.4,
        "games": 1448
      },
      {
        "name": "Furfrou",
        "winRate": 60.9,
        "games": 4121
      },
      {
        "name": "Simipour",
        "winRate": 60.8,
        "games": 1160
      },
      {
        "name": "Beartic",
        "winRate": 58.3,
        "games": 650
      },
      {
        "name": "Lopunny",
        "winRate": 54.3,
        "games": 2615
      }
    ],
    "bestSets": []
  },
  "713": {
    "id": 713,
    "name": "Avalugg",
    "isMega": false,
    "elo": 8312,
    "winRate": 46.3,
    "appearances": 66715,
    "wins": 30889,
    "losses": 35826,
    "bestPartners": [
      {
        "name": "Diggersby",
        "winRate": 62,
        "games": 1437
      },
      {
        "name": "Blastoise",
        "winRate": 61.6,
        "games": 3117
      },
      {
        "name": "Kleavor",
        "winRate": 54.9,
        "games": 4143
      },
      {
        "name": "Starmie",
        "winRate": 52.2,
        "games": 3858
      },
      {
        "name": "Meganium",
        "winRate": 50.7,
        "games": 1220
      }
    ],
    "bestSets": []
  },
  "758": {
    "id": 758,
    "name": "Salazzle",
    "isMega": false,
    "elo": 8628,
    "winRate": 47.7,
    "appearances": 66359,
    "wins": 31653,
    "losses": 34706,
    "bestPartners": [
      {
        "name": "Espeon",
        "winRate": 63.2,
        "games": 932
      },
      {
        "name": "Banette",
        "winRate": 62.4,
        "games": 2356
      },
      {
        "name": "Quaquaval",
        "winRate": 61.2,
        "games": 710
      },
      {
        "name": "Abomasnow",
        "winRate": 60.2,
        "games": 1431
      },
      {
        "name": "Forretress",
        "winRate": 52.4,
        "games": 4637
      }
    ],
    "bestSets": []
  },
  "766": {
    "id": 766,
    "name": "Passimian",
    "isMega": false,
    "elo": 8706,
    "winRate": 47.3,
    "appearances": 17287,
    "wins": 8177,
    "losses": 9110,
    "bestPartners": [
      {
        "name": "Hisuian Samurott",
        "winRate": 62.1,
        "games": 4761
      },
      {
        "name": "Ceruledge",
        "winRate": 60.2,
        "games": 4014
      },
      {
        "name": "Torterra",
        "winRate": 55.6,
        "games": 3920
      },
      {
        "name": "Milotic",
        "winRate": 51.9,
        "games": 1550
      },
      {
        "name": "Rhyperior",
        "winRate": 50.1,
        "games": 2454
      }
    ],
    "bestSets": []
  },
  "841": {
    "id": 841,
    "name": "Flapple",
    "isMega": false,
    "elo": 8689,
    "winRate": 47.8,
    "appearances": 34184,
    "wins": 16340,
    "losses": 17844,
    "bestPartners": [
      {
        "name": "Farigiraf",
        "winRate": 62.8,
        "games": 3380
      },
      {
        "name": "Sableye",
        "winRate": 62.6,
        "games": 2386
      },
      {
        "name": "Charizard",
        "winRate": 57.3,
        "games": 660
      },
      {
        "name": "Araquanid",
        "winRate": 53.9,
        "games": 4248
      },
      {
        "name": "Garganacl",
        "winRate": 53.2,
        "games": 2563
      }
    ],
    "bestSets": []
  },
  "899": {
    "id": 899,
    "name": "Wyrdeer",
    "isMega": false,
    "elo": 8862,
    "winRate": 47.8,
    "appearances": 50319,
    "wins": 24052,
    "losses": 26267,
    "bestPartners": [
      {
        "name": "Meganium",
        "winRate": 63.9,
        "games": 1404
      },
      {
        "name": "Weavile",
        "winRate": 60.7,
        "games": 3243
      },
      {
        "name": "Toucannon",
        "winRate": 57.3,
        "games": 3394
      },
      {
        "name": "Ninetales",
        "winRate": 54.5,
        "games": 2564
      },
      {
        "name": "Skarmory",
        "winRate": 50.2,
        "games": 3153
      }
    ],
    "bestSets": []
  },
  "939": {
    "id": 939,
    "name": "Bellibolt",
    "isMega": false,
    "elo": 8545,
    "winRate": 48.9,
    "appearances": 14610,
    "wins": 7144,
    "losses": 7466,
    "bestPartners": [
      {
        "name": "Garganacl",
        "winRate": 62.2,
        "games": 1971
      },
      {
        "name": "Klefki",
        "winRate": 60.8,
        "games": 551
      },
      {
        "name": "Mudsdale",
        "winRate": 60.2,
        "games": 2035
      },
      {
        "name": "Mr. Rime",
        "winRate": 56,
        "games": 3711
      },
      {
        "name": "Gallade",
        "winRate": 53.4,
        "games": 2658
      }
    ],
    "bestSets": []
  },
  "956": {
    "id": 956,
    "name": "Espathra",
    "isMega": false,
    "elo": 8442,
    "winRate": 46.5,
    "appearances": 19669,
    "wins": 9146,
    "losses": 10523,
    "bestPartners": [
      {
        "name": "Starmie",
        "winRate": 59.8,
        "games": 4898
      },
      {
        "name": "Feraligatr",
        "winRate": 56.2,
        "games": 874
      },
      {
        "name": "Mow Rotom",
        "winRate": 55.3,
        "games": 4974
      },
      {
        "name": "Froslass",
        "winRate": 53.5,
        "games": 4571
      },
      {
        "name": "Quaquaval",
        "winRate": 50.9,
        "games": 1638
      }
    ],
    "bestSets": []
  }
};

/** Best core pairs from simulation */
export const SIM_PAIRS: SimPairData[] = [
  {
    "pokemon1": "Heat Rotom",
    "pokemon2": "Mega Blastoise",
    "winRate": 73.4,
    "games": 3615
  },
  {
    "pokemon1": "Tsareena",
    "pokemon2": "Mega Blastoise",
    "winRate": 73.4,
    "games": 3615
  },
  {
    "pokemon1": "Tsareena",
    "pokemon2": "Dragapult",
    "winRate": 73.4,
    "games": 3615
  },
  {
    "pokemon1": "Heat Rotom",
    "pokemon2": "Victreebel",
    "winRate": 73.4,
    "games": 3615
  },
  {
    "pokemon1": "Heat Rotom",
    "pokemon2": "Tsareena",
    "winRate": 73.4,
    "games": 3615
  },
  {
    "pokemon1": "Victreebel",
    "pokemon2": "Tsareena",
    "winRate": 73.4,
    "games": 3615
  },
  {
    "pokemon1": "Hisuian Samurott",
    "pokemon2": "Mega Froslass",
    "winRate": 69.6,
    "games": 3675
  },
  {
    "pokemon1": "Garchomp",
    "pokemon2": "Mega Froslass",
    "winRate": 69.6,
    "games": 3675
  },
  {
    "pokemon1": "Hisuian Samurott",
    "pokemon2": "Garchomp",
    "winRate": 69.6,
    "games": 3675
  },
  {
    "pokemon1": "Hisuian Samurott",
    "pokemon2": "Blastoise",
    "winRate": 69.6,
    "games": 3675
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Hisuian Samurott",
    "winRate": 69.6,
    "games": 3675
  },
  {
    "pokemon1": "Azumarill",
    "pokemon2": "Mega Garchomp Z",
    "winRate": 69.3,
    "games": 3722
  },
  {
    "pokemon1": "Mega Garchomp Z",
    "pokemon2": "Primarina",
    "winRate": 69.3,
    "games": 3722
  },
  {
    "pokemon1": "Empoleon",
    "pokemon2": "Mega Garchomp Z",
    "winRate": 69.3,
    "games": 3722
  },
  {
    "pokemon1": "Mega Garchomp Z",
    "pokemon2": "Kingambit",
    "winRate": 69.3,
    "games": 3722
  },
  {
    "pokemon1": "Azumarill",
    "pokemon2": "Empoleon",
    "winRate": 69.3,
    "games": 3722
  },
  {
    "pokemon1": "Primarina",
    "pokemon2": "Kingambit",
    "winRate": 69.3,
    "games": 3722
  },
  {
    "pokemon1": "Snorlax",
    "pokemon2": "Rhyperior",
    "winRate": 68.5,
    "games": 3749
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Mega Froslass",
    "winRate": 68.2,
    "games": 7563
  },
  {
    "pokemon1": "Mega Froslass",
    "pokemon2": "Blastoise",
    "winRate": 68.2,
    "games": 7563
  },
  {
    "pokemon1": "Froslass",
    "pokemon2": "Primarina",
    "winRate": 67.6,
    "games": 3841
  },
  {
    "pokemon1": "Mega Scizor",
    "pokemon2": "Froslass",
    "winRate": 67.6,
    "games": 3841
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Mega Scizor",
    "winRate": 67.6,
    "games": 3841
  },
  {
    "pokemon1": "Mega Scizor",
    "pokemon2": "Sneasler",
    "winRate": 67.6,
    "games": 3841
  },
  {
    "pokemon1": "Mega Froslass",
    "pokemon2": "Greninja",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Houndoom",
    "pokemon2": "Mega Froslass",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Lucario",
    "pokemon2": "Mega Froslass",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Houndoom",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Houndoom",
    "pokemon2": "Greninja",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Lucario",
    "pokemon2": "Greninja",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Houndoom",
    "pokemon2": "Blastoise",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Lucario",
    "pokemon2": "Blastoise",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Houndoom",
    "pokemon2": "Lucario",
    "winRate": 66.9,
    "games": 3888
  },
  {
    "pokemon1": "Rhyperior",
    "pokemon2": "Slowbro",
    "winRate": 66.2,
    "games": 7813
  },
  {
    "pokemon1": "Hisuian Samurott",
    "pokemon2": "Incineroar",
    "winRate": 65.6,
    "games": 7908
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Froslass",
    "winRate": 65,
    "games": 8007
  },
  {
    "pokemon1": "Mega Sableye",
    "pokemon2": "Charizard",
    "winRate": 64.1,
    "games": 4029
  },
  {
    "pokemon1": "Clefable",
    "pokemon2": "Krookodile",
    "winRate": 64.1,
    "games": 4029
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Mega Sableye",
    "winRate": 64.1,
    "games": 4029
  },
  {
    "pokemon1": "Mega Sableye",
    "pokemon2": "Clefable",
    "winRate": 64.1,
    "games": 4029
  },
  {
    "pokemon1": "Fan Rotom",
    "pokemon2": "Mega Gyarados",
    "winRate": 63.8,
    "games": 4083
  },
  {
    "pokemon1": "Fan Rotom",
    "pokemon2": "Sneasler",
    "winRate": 63.8,
    "games": 4083
  },
  {
    "pokemon1": "Fan Rotom",
    "pokemon2": "Blastoise",
    "winRate": 63.8,
    "games": 4083
  },
  {
    "pokemon1": "Fan Rotom",
    "pokemon2": "Garchomp",
    "winRate": 63.8,
    "games": 4083
  },
  {
    "pokemon1": "Blastoise",
    "pokemon2": "Kingambit",
    "winRate": 63.8,
    "games": 4083
  },
  {
    "pokemon1": "Garchomp",
    "pokemon2": "Sneasler",
    "winRate": 63.8,
    "games": 4083
  },
  {
    "pokemon1": "Snorlax",
    "pokemon2": "Slowbro",
    "winRate": 63.7,
    "games": 8308
  },
  {
    "pokemon1": "Empoleon",
    "pokemon2": "Primarina",
    "winRate": 63.6,
    "games": 8338
  },
  {
    "pokemon1": "Snorlax",
    "pokemon2": "Torkoal",
    "winRate": 63.5,
    "games": 12445
  },
  {
    "pokemon1": "Snorlax",
    "pokemon2": "Drampa",
    "winRate": 63.3,
    "games": 4137
  }
];

/** Archetype rankings from simulation */
export const SIM_ARCHETYPES: SimArchetypeData[] = [
  {
    "name": "custom",
    "elo": 116772,
    "winRate": 52.4,
    "wins": 159236,
    "losses": 144827
  },
  {
    "name": "Mega Froslass",
    "elo": 28460,
    "winRate": 63.8,
    "wins": 7782,
    "losses": 4412
  },
  {
    "name": "Hard Trick Room",
    "elo": 26572,
    "winRate": 62.3,
    "wins": 7947,
    "losses": 4813
  },
  {
    "name": "Mega Blastoise",
    "elo": 24020,
    "winRate": 60.8,
    "wins": 7915,
    "losses": 5100
  },
  {
    "name": "Mega Garchomp",
    "elo": 17932,
    "winRate": 53.5,
    "wins": 15877,
    "losses": 13823
  },
  {
    "name": "Mega Venusaur",
    "elo": 16532,
    "winRate": 56.8,
    "wins": 7878,
    "losses": 5999
  },
  {
    "name": "Mega Feraligatr",
    "elo": 16204,
    "winRate": 56.4,
    "wins": 8108,
    "losses": 6270
  },
  {
    "name": "Floette Base",
    "elo": 15924,
    "winRate": 60.2,
    "wins": 5305,
    "losses": 3502
  },
  {
    "name": "Slowbro Trick Room",
    "elo": 15444,
    "winRate": 59.9,
    "wins": 5286,
    "losses": 3543
  },
  {
    "name": "Meganium Base",
    "elo": 13316,
    "winRate": 58.2,
    "wins": 5219,
    "losses": 3742
  },
  {
    "name": "Chesnaught Base",
    "elo": 12116,
    "winRate": 57.2,
    "wins": 5295,
    "losses": 3968
  },
  {
    "name": "Mega Floette",
    "elo": 11828,
    "winRate": 54.6,
    "wins": 7724,
    "losses": 6433
  },
  {
    "name": "Ceruledge Build",
    "elo": 11132,
    "winRate": 54.1,
    "wins": 7952,
    "losses": 6748
  },
  {
    "name": "Sun Trick Room",
    "elo": 10852,
    "winRate": 50.7,
    "wins": 44816,
    "losses": 43647
  },
  {
    "name": "Pinsir Base",
    "elo": 10788,
    "winRate": 56.1,
    "wins": 5307,
    "losses": 4146
  },
  {
    "name": "Hisuian Typhlosion Build",
    "elo": 10444,
    "winRate": 53.8,
    "wins": 7995,
    "losses": 6877
  },
  {
    "name": "Alcremie Build",
    "elo": 10116,
    "winRate": 53.6,
    "wins": 7987,
    "losses": 6910
  },
  {
    "name": "Body Press",
    "elo": 9332,
    "winRate": 61.6,
    "wins": 2596,
    "losses": 1617
  },
  {
    "name": "Mega Gyarados",
    "elo": 9196,
    "winRate": 53.2,
    "wins": 7981,
    "losses": 7019
  },
  {
    "name": "Mega Chesnaught",
    "elo": 8668,
    "winRate": 53,
    "wins": 8034,
    "losses": 7138
  },
  {
    "name": "Infernape Build",
    "elo": 8644,
    "winRate": 53,
    "wins": 7846,
    "losses": 6953
  },
  {
    "name": "Tailwind",
    "elo": 8156,
    "winRate": 50.3,
    "wins": 70076,
    "losses": 69244
  },
  {
    "name": "Mega Pinsir",
    "elo": 7564,
    "winRate": 52.4,
    "wins": 8170,
    "losses": 7412
  },
  {
    "name": "Mega Meganium",
    "elo": 6804,
    "winRate": 52.2,
    "wins": 7787,
    "losses": 7124
  },
  {
    "name": "Kleavor Build",
    "elo": 6500,
    "winRate": 53.1,
    "wins": 5388,
    "losses": 4763
  },
  {
    "name": "Mega Heracross",
    "elo": 6140,
    "winRate": 51.9,
    "wins": 7847,
    "losses": 7267
  },
  {
    "name": "Aerodactyl Base",
    "elo": 4548,
    "winRate": 51.8,
    "wins": 5483,
    "losses": 5102
  },
  {
    "name": "Mega Scizor",
    "elo": 4444,
    "winRate": 51.2,
    "wins": 8125,
    "losses": 7757
  },
  {
    "name": "Sun",
    "elo": 4292,
    "winRate": 50.4,
    "wins": 20806,
    "losses": 20457
  },
  {
    "name": "Mega Meowstic",
    "elo": 4076,
    "winRate": 51,
    "wins": 8143,
    "losses": 7821
  },
  {
    "name": "Mega Metagross",
    "elo": 4068,
    "winRate": 50.1,
    "wins": 55337,
    "losses": 55016
  },
  {
    "name": "Mega Hawlucha",
    "elo": 3756,
    "winRate": 50.9,
    "wins": 8095,
    "losses": 7813
  },
  {
    "name": "Mega Delphox",
    "elo": 3628,
    "winRate": 50.8,
    "wins": 8044,
    "losses": 7778
  },
  {
    "name": "Mega Aerodactyl",
    "elo": 3444,
    "winRate": 50.8,
    "wins": 7846,
    "losses": 7603
  },
  {
    "name": "Delphox Base",
    "elo": 3348,
    "winRate": 51.1,
    "wins": 5453,
    "losses": 5222
  },
  {
    "name": "Standard",
    "elo": 3108,
    "winRate": 50.1,
    "wins": 92612,
    "losses": 92411
  },
  {
    "name": "Mega Starmie",
    "elo": 2876,
    "winRate": 50.5,
    "wins": 8030,
    "losses": 7858
  },
  {
    "name": "Mr. Rime Build",
    "elo": 2828,
    "winRate": 50.5,
    "wins": 8080,
    "losses": 7914
  },
  {
    "name": "Greninja Base",
    "elo": 2796,
    "winRate": 50.8,
    "wins": 5387,
    "losses": 5225
  },
  {
    "name": "Ampharos Base",
    "elo": 2620,
    "winRate": 50.7,
    "wins": 5294,
    "losses": 5154
  },
  {
    "name": "Feraligatr Base",
    "elo": 2620,
    "winRate": 50.7,
    "wins": 5444,
    "losses": 5304
  },
  {
    "name": "Garchomp Base",
    "elo": 2604,
    "winRate": 50.6,
    "wins": 5497,
    "losses": 5359
  },
  {
    "name": "Gyarados Base",
    "elo": 2444,
    "winRate": 50.5,
    "wins": 5465,
    "losses": 5347
  },
  {
    "name": "Follow Me + Setup",
    "elo": 2436,
    "winRate": 50.4,
    "wins": 7774,
    "losses": 7657
  },
  {
    "name": "Hawlucha Base",
    "elo": 2428,
    "winRate": 50.5,
    "wins": 5430,
    "losses": 5314
  },
  {
    "name": "Scovillain Base",
    "elo": 2388,
    "winRate": 50.5,
    "wins": 5349,
    "losses": 5238
  },
  {
    "name": "Torterra Build",
    "elo": 2356,
    "winRate": 50.3,
    "wins": 8014,
    "losses": 7907
  },
  {
    "name": "Metagross Base",
    "elo": 2356,
    "winRate": 50.5,
    "wins": 5259,
    "losses": 5152
  },
  {
    "name": "Bulky Offense",
    "elo": 2348,
    "winRate": 50.2,
    "wins": 13139,
    "losses": 13033
  },
  {
    "name": "Mega Greninja",
    "elo": 2284,
    "winRate": 50.3,
    "wins": 7948,
    "losses": 7850
  }
];

/** Top moves by win rate from simulation */
export const SIM_MOVES: SimMoveData[] = [
  {
    "name": "Aromatherapy",
    "winRate": 58.3,
    "appearances": 4509
  },
  {
    "name": "Electro Shot",
    "winRate": 54.9,
    "appearances": 216180
  },
  {
    "name": "Calm Mind",
    "winRate": 54.9,
    "appearances": 9495
  },
  {
    "name": "Bitter Blade",
    "winRate": 54.1,
    "appearances": 14700
  },
  {
    "name": "Stone Axe",
    "winRate": 54,
    "appearances": 14906
  },
  {
    "name": "Ceaseless Edge",
    "winRate": 53.9,
    "appearances": 34546
  },
  {
    "name": "Razor Shell",
    "winRate": 53.9,
    "appearances": 34546
  },
  {
    "name": "Feint",
    "winRate": 53.8,
    "appearances": 5125
  },
  {
    "name": "Decorate",
    "winRate": 53.6,
    "appearances": 14897
  },
  {
    "name": "Pin Missile",
    "winRate": 52.8,
    "appearances": 19971
  },
  {
    "name": "Sacred Sword",
    "winRate": 52.8,
    "appearances": 50709
  },
  {
    "name": "Giga Drain",
    "winRate": 52.5,
    "appearances": 74402
  },
  {
    "name": "Water Pulse",
    "winRate": 52.5,
    "appearances": 80989
  },
  {
    "name": "Mortal Spin",
    "winRate": 52.5,
    "appearances": 10160
  },
  {
    "name": "Energy Ball",
    "winRate": 52,
    "appearances": 152365
  },
  {
    "name": "Leech Seed",
    "winRate": 52,
    "appearances": 35324
  },
  {
    "name": "Sleep Powder",
    "winRate": 51.9,
    "appearances": 43837
  },
  {
    "name": "Spiky Shield",
    "winRate": 51.9,
    "appearances": 24777
  },
  {
    "name": "Body Press",
    "winRate": 51.8,
    "appearances": 426533
  },
  {
    "name": "Flash Cannon",
    "winRate": 51.6,
    "appearances": 1045986
  },
  {
    "name": "Eruption",
    "winRate": 51.6,
    "appearances": 229300
  },
  {
    "name": "Dire Claw",
    "winRate": 51.6,
    "appearances": 122350
  },
  {
    "name": "Aura Sphere",
    "winRate": 51.5,
    "appearances": 162482
  },
  {
    "name": "Overheat",
    "winRate": 51.4,
    "appearances": 361172
  },
  {
    "name": "Glare",
    "winRate": 51.4,
    "appearances": 65696
  },
  {
    "name": "Fire Fang",
    "winRate": 51.4,
    "appearances": 117880
  },
  {
    "name": "Belly Drum",
    "winRate": 51.4,
    "appearances": 97591
  },
  {
    "name": "Icy Wind",
    "winRate": 51.3,
    "appearances": 592377
  },
  {
    "name": "Mystical Fire",
    "winRate": 51.3,
    "appearances": 30235
  },
  {
    "name": "Volt Switch",
    "winRate": 51.2,
    "appearances": 279777
  },
  {
    "name": "Wood Hammer",
    "winRate": 51.2,
    "appearances": 76901
  },
  {
    "name": "Facade",
    "winRate": 51.1,
    "appearances": 122264
  },
  {
    "name": "Leaf Storm",
    "winRate": 51.1,
    "appearances": 482067
  },
  {
    "name": "High Jump Kick",
    "winRate": 51.1,
    "appearances": 60648
  },
  {
    "name": "Revival Blessing",
    "winRate": 51.1,
    "appearances": 30892
  },
  {
    "name": "Ice Beam",
    "winRate": 51,
    "appearances": 978159
  },
  {
    "name": "X-Scissor",
    "winRate": 51,
    "appearances": 70949
  },
  {
    "name": "Follow Me",
    "winRate": 50.9,
    "appearances": 448319
  },
  {
    "name": "Earth Power",
    "winRate": 50.9,
    "appearances": 673818
  },
  {
    "name": "Bug Bite",
    "winRate": 50.9,
    "appearances": 490017
  },
  {
    "name": "High Horsepower",
    "winRate": 50.9,
    "appearances": 92695
  },
  {
    "name": "Scald",
    "winRate": 50.8,
    "appearances": 1207674
  },
  {
    "name": "Dual Wingbeat",
    "winRate": 50.8,
    "appearances": 31037
  },
  {
    "name": "Kowtow Cleave",
    "winRate": 50.7,
    "appearances": 788104
  },
  {
    "name": "Aqua Jet",
    "winRate": 50.7,
    "appearances": 164639
  },
  {
    "name": "Sludge Wave",
    "winRate": 50.7,
    "appearances": 31477
  },
  {
    "name": "Power Whip",
    "winRate": 50.7,
    "appearances": 65709
  },
  {
    "name": "Rock Blast",
    "winRate": 50.7,
    "appearances": 35590
  },
  {
    "name": "Beat Up",
    "winRate": 50.7,
    "appearances": 5371
  },
  {
    "name": "Water Shuriken",
    "winRate": 50.7,
    "appearances": 5356
  }
];

/** Meta tier snapshot from simulation */
export const SIM_META: SimMetaSnapshot = {
  "tier1": [
    "Mega Meganium",
    "Heat Rotom",
    "Milotic",
    "Chesnaught",
    "Mega Scizor",
    "Mega Garchomp Z",
    "Mega Froslass",
    "Mow Rotom",
    "Wash Rotom",
    "Primarina",
    "Tinkaton",
    "Mega Blastoise",
    "Lucario",
    "Sneasler",
    "Abomasnow",
    "Mega Feraligatr",
    "Hisuian Samurott",
    "Oranguru",
    "Slowbro"
  ],
  "tier2": [
    "Starmie",
    "Heracross",
    "Quaquaval",
    "Alolan Ninetales",
    "Archaludon",
    "Charizard",
    "Mega Meowstic",
    "Ninetales",
    "Raichu",
    "Whimsicott",
    "Mega Pinsir",
    "Meganium",
    "Rhyperior",
    "Incineroar",
    "Glimmora",
    "Hatterene",
    "Fan Rotom",
    "Mega Victreebel",
    "Aegislash",
    "Mega Lucario Z",
    "Clefable",
    "Conkeldurr",
    "Mega Chesnaught",
    "Vaporeon",
    "Mega Metagross",
    "Meowscarada",
    "Sylveon",
    "Kleavor",
    "Kingambit",
    "Galarian Stunfisk",
    "Pelipper",
    "Gourgeist",
    "Torkoal",
    "Mega Venusaur",
    "Mega Garchomp",
    "Mega Gardevoir",
    "Absol",
    "Kommo-o"
  ],
  "tier3": [
    "Clawitzer",
    "Crabominable",
    "Scizor",
    "Basculegion",
    "Pinsir",
    "Pawmot",
    "Mega Heracross",
    "Dragapult",
    "Hydreigon",
    "Steelix",
    "Ursaluna",
    "Audino",
    "Tatsugiri",
    "Mega Glimmora",
    "Mega Kangaskhan",
    "Corviknight",
    "Jolteon",
    "Mega Lucario",
    "Infernape",
    "Glaceon",
    "Mega Delphox",
    "Mega Abomasnow",
    "Gliscor",
    "Mega Altaria",
    "Kangaskhan",
    "Delphox",
    "Farigiraf",
    "Azumarill",
    "Vivillon",
    "Sinistcha",
    "Mega Aerodactyl",
    "Vanilluxe",
    "Floette",
    "Palafin",
    "Mega Raichu X",
    "Klefki",
    "Orthworm",
    "Trevenant",
    "Talonflame",
    "Venusaur",
    "Sandaconda",
    "Armarouge",
    "Dondozo",
    "Mega Greninja",
    "Gardevoir",
    "Excadrill",
    "Galarian Slowbro",
    "Volcarona",
    "Mega Sableye",
    "Houndoom",
    "Ceruledge",
    "Mega Ampharos",
    "Toucannon",
    "Mega Floette",
    "Alcremie",
    "Krookodile",
    "Mega Slowbro",
    "Noivern",
    "Golurk",
    "Mega Alakazam",
    "Mega Hawlucha",
    "Hawlucha",
    "Mega Chandelure",
    "Empoleon",
    "Goodra",
    "Tsareena",
    "Torterra",
    "Weavile"
  ],
  "dominantArchetypes": [
    "custom",
    "Mega Froslass",
    "Hard Trick Room",
    "Mega Blastoise",
    "Mega Garchomp"
  ],
  "underratedPokemon": [],
  "overratedPokemon": [
    "Mega Absol Z",
    "Morpeko",
    "Mega Crabominable",
    "Emolga",
    "Gallade"
  ],
  "bestCores": [
    "Heat Rotom + Mega Blastoise",
    "Tsareena + Mega Blastoise",
    "Tsareena + Dragapult",
    "Heat Rotom + Victreebel",
    "Heat Rotom + Tsareena"
  ]
};

/** Total battles simulated */
export const SIM_TOTAL_BATTLES = 2000000;

/** Simulation date */
export const SIM_DATE = "2026-04-05T13:22:41.786Z";
