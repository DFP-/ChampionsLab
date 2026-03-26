import { ChampionsPokemon, Season } from "./types";

// ============================================================
// Auto-generated from PokeAPI on 2026-03-26
// 93 Pokémon in the Champions Season 1 roster
// ============================================================

export const SEASONS: Season[] = [
  {
    id: 1,
    name: "Season 1 — Launch",
    startDate: "2026-04-08",
    rosterAdditions: [],
    rules: [
      "Doubles format",
      "Bring 6, Pick 4",
      "Level 50 auto-level",
      "Stat Points (no IVs/EVs)",
      "Mega Evolution",
      "No duplicate Pokémon",
      "No duplicate held items",
      "20-minute game timer",
    ],
    isActive: true,
  },
];

export const POKEMON_SEED: ChampionsPokemon[] = [
  {
    "id": 3,
    "name": "Venusaur",
    "dexNumber": 3,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "spAtk": 100,
      "spDef": 100,
      "speed": 80
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Chlorophyll",
        "description": "Doubles Speed during strong sunlight.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Binds the target for 2-5 turns."
      },
      {
        "name": "Vine Whip",
        "type": "grass",
        "category": "physical",
        "power": 45,
        "accuracy": 100,
        "pp": 25,
        "description": "Whips the foe with slender vines."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Venusaur",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10033.png",
        "types": [
          "grass",
          "poison"
        ],
        "baseStats": {
          "hp": 80,
          "attack": 100,
          "defense": 123,
          "spAtk": 122,
          "spDef": 120,
          "speed": 80
        },
        "abilities": [
          {
            "name": "Thick Fat",
            "description": "Halves damage from fire and ice moves.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 6,
    "name": "Charizard",
    "dexNumber": 6,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "spAtk": 109,
      "spDef": 85,
      "speed": 100
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Solar Power",
        "description": "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Wing Attack",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35,
        "description": "Strikes the target with wings."
      },
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Charizard X",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10034.png",
        "types": [
          "fire",
          "dragon"
        ],
        "baseStats": {
          "hp": 78,
          "attack": 130,
          "defense": 111,
          "spAtk": 130,
          "spDef": 85,
          "speed": 100
        },
        "abilities": [
          {
            "name": "Tough Claws",
            "description": "Strengthens moves that make contact to 1.33× their power.",
            "isChampions": false
          }
        ],
        "isMega": true
      },
      {
        "name": "Mega Charizard Y",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10035.png",
        "types": [
          "fire",
          "flying"
        ],
        "baseStats": {
          "hp": 78,
          "attack": 104,
          "defense": 78,
          "spAtk": 159,
          "spDef": 115,
          "speed": 100
        },
        "abilities": [
          {
            "name": "Drought",
            "description": "Summons strong sunlight that lasts indefinitely upon entering battle.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 9,
    "name": "Blastoise",
    "dexNumber": 9,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "spAtk": 85,
      "spDef": 105,
      "speed": 78
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Blastoise",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10036.png",
        "types": [
          "water"
        ],
        "baseStats": {
          "hp": 79,
          "attack": 103,
          "defense": 120,
          "spAtk": 135,
          "spDef": 115,
          "speed": 78
        },
        "abilities": [
          {
            "name": "Mega Launcher",
            "description": "Strengthens aura and pulse moves to 1.5× their power.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 25,
    "name": "Pikachu",
    "dexNumber": 25,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "spAtk": 50,
      "spDef": 50,
      "speed": 90
    },
    "abilities": [
      {
        "name": "Static",
        "description": "Has a 30% chance of paralyzing attacking Pokémon on contact.",
        "isHidden": false
      },
      {
        "name": "Lightning Rod",
        "description": "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Double Kick",
        "type": "fighting",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 30,
        "description": "A double kicking attack."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
    "generation": 1,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 26,
    "name": "Raichu",
    "dexNumber": 26,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "spAtk": 90,
      "spDef": 80,
      "speed": 110
    },
    "abilities": [
      {
        "name": "Static",
        "description": "Has a 30% chance of paralyzing attacking Pokémon on contact.",
        "isHidden": false
      },
      {
        "name": "Lightning Rod",
        "description": "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
    "generation": 1,
    "forms": [
          {
                "name": "Mega Raichu X",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10304.png",
                "types": [
                      "electric",
                      "fighting"
                ],
                "baseStats": {
                      "hp": 60,
                      "attack": 135,
                      "defense": 75,
                      "spAtk": 90,
                      "spDef": 80,
                      "speed": 145
                },
                "abilities": [
                      {
                            "name": "Volt Rush",
                            "description": "Electric and Fighting-type moves gain 30% power. On Mega Evolution, raises Speed by one stage.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          },
          {
                "name": "Mega Raichu Y",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10305.png",
                "types": [
                      "electric",
                      "psychic"
                ],
                "baseStats": {
                      "hp": 60,
                      "attack": 90,
                      "defense": 70,
                      "spAtk": 140,
                      "spDef": 95,
                      "speed": 130
                },
                "abilities": [
                      {
                            "name": "Mind Surge",
                            "description": "Electric and Psychic-type moves gain 30% power. Psychic Terrain is set on Mega Evolution.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 36,
    "name": "Clefable",
    "dexNumber": 36,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "spAtk": 95,
      "spDef": 90,
      "speed": 60
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact.",
        "isHidden": false
      },
      {
        "name": "Magic Guard",
        "description": "Protects against damage not directly caused by a move.",
        "isHidden": false
      },
      {
        "name": "Unaware",
        "description": "Ignores other Pokémon's stat modifiers for damage and accuracy calculation.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pound",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Pounds with fore­ legs or tail."
      },
      {
        "name": "Double Slap",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 10,
        "description": "Repeatedly slaps 2-5 times."
      },
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Clefable",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10307.png",
        "types": ["fairy", "flying"],
        "baseStats": { "hp": 95, "attack": 70, "defense": 103, "spAtk": 135, "spDef": 110, "speed": 70 },
        "abilities": [{ "name": "Pixie Veil", "description": "Fairy-type moves gain 30% power. Allies gain a 20% boost to Special Defense.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 38,
    "name": "Ninetales",
    "dexNumber": 38,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "spAtk": 81,
      "spDef": 100,
      "speed": 100
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle.",
        "isHidden": false
      },
      {
        "name": "Drought",
        "description": "Summons strong sunlight that lasts indefinitely upon entering battle.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Disable",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "Disables the foe's most recent move."
      },
      {
        "name": "Ember",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is attacked with small flames. The foe may suffer a burn."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
    "generation": 1,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 80,
    "name": "Slowbro",
    "dexNumber": 80,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "spAtk": 100,
      "spDef": 80,
      "speed": 30
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate.",
        "isHidden": false
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion.",
        "isHidden": false
      },
      {
        "name": "Regenerator",
        "description": "Heals for 1/3 max HP upon switching out.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Stomp",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Disable",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "Disables the foe's most recent move."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png",
    "generation": 1,
    "forms": [
          {
                "name": "Mega Slowbro",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10071.png",
                "types": [
                      "water",
                      "psychic"
                ],
                "baseStats": {
                      "hp": 95,
                      "attack": 75,
                      "defense": 180,
                      "spAtk": 130,
                      "spDef": 80,
                      "speed": 30
                },
                "abilities": [
                      {
                            "name": "Shell Armor",
                            "description": "The Pokémon's hard armor prevents critical hits from landing.",
                            "isHidden": false
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 94,
    "name": "Gengar",
    "dexNumber": 94,
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "spAtk": 130,
      "spDef": 75,
      "speed": 110
    },
    "abilities": [
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon.",
        "isHidden": false
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Disable",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "Disables the foe's most recent move."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Submission",
        "type": "fighting",
        "category": "physical",
        "power": 80,
        "accuracy": 80,
        "pp": 20,
        "description": "An attack that al­ so hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Gengar",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10038.png",
        "types": [
          "ghost",
          "poison"
        ],
        "baseStats": {
          "hp": 60,
          "attack": 65,
          "defense": 80,
          "spAtk": 170,
          "spDef": 95,
          "speed": 130
        },
        "abilities": [
          {
            "name": "Shadow Tag",
            "description": "Prevents opponents from fleeing or switching out.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "dexNumber": 115,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "spAtk": 40,
      "spDef": 80,
      "speed": 90
    },
    "abilities": [
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly.",
        "isHidden": false
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon's normal and fighting moves hit ghost Pokémon.",
        "isHidden": false
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pound",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Pounds with fore­ legs or tail."
      },
      {
        "name": "Comet Punch",
        "type": "normal",
        "category": "physical",
        "power": 18,
        "accuracy": 85,
        "pp": 15,
        "description": "Repeatedly punches 2-5 times."
      },
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Stomp",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Kangaskhan",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10039.png",
        "types": [
          "normal"
        ],
        "baseStats": {
          "hp": 105,
          "attack": 125,
          "defense": 100,
          "spAtk": 60,
          "spDef": 100,
          "speed": 100
        },
        "abilities": [
          {
            "name": "Parental Bond",
            "description": "Lets the bearer hit twice with damaging moves.  The second hit has half power.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 121,
    "name": "Starmie",
    "dexNumber": 121,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "spAtk": 100,
      "spDef": 85,
      "speed": 115
    },
    "abilities": [
      {
        "name": "Illuminate",
        "description": "Doubles the wild encounter rate.",
        "isHidden": false
      },
      {
        "name": "Natural Cure",
        "description": "Cures any major status ailment upon switching out.",
        "isHidden": false
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Psybeam",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may confuse the foe."
      },
      {
        "name": "Bubble Beam",
        "type": "water",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may lower SPEED."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Starmie",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10306.png",
        "types": ["water", "psychic"],
        "baseStats": { "hp": 60, "attack": 75, "defense": 105, "spAtk": 140, "spDef": 105, "speed": 135 },
        "abilities": [{ "name": "Prism Armor", "description": "Water and Psychic-type moves gain 30% power. Reduces the power of super-effective attacks taken.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 127,
    "name": "Pinsir",
    "dexNumber": 127,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "spAtk": 55,
      "spDef": 70,
      "speed": 85
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon.",
        "isHidden": false
      },
      {
        "name": "Mold Breaker",
        "description": "Bypasses targets' abilities if they could hinder or prevent a move.",
        "isHidden": false
      },
      {
        "name": "Moxie",
        "description": "Raises Attack one stage upon KOing a Pokémon.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Vice Grip",
        "type": "normal",
        "category": "physical",
        "power": 55,
        "accuracy": 100,
        "pp": 30,
        "description": "Grips with power­ ful pincers."
      },
      {
        "name": "Guillotine",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5,
        "description": "A one-hit KO, pincer attack."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Binds the target for 2-5 turns."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Submission",
        "type": "fighting",
        "category": "physical",
        "power": 80,
        "accuracy": 80,
        "pp": 20,
        "description": "An attack that al­ so hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Pinsir",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10040.png",
        "types": [
          "bug",
          "flying"
        ],
        "baseStats": {
          "hp": 65,
          "attack": 155,
          "defense": 120,
          "spAtk": 65,
          "spDef": 90,
          "speed": 105
        },
        "abilities": [
          {
            "name": "Aerilate",
            "description": "Turns the bearer's normal moves into flying moves and strengthens them to 1.3× their power.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 130,
    "name": "Gyarados",
    "dexNumber": 130,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "spAtk": 60,
      "spDef": 100,
      "speed": 81
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Lowers opponents' Attack one stage upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Moxie",
        "description": "Raises Attack one stage upon KOing a Pokémon.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Binds the target for 2-5 turns."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Gyarados",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10041.png",
        "types": [
          "water",
          "dark"
        ],
        "baseStats": {
          "hp": 95,
          "attack": 155,
          "defense": 109,
          "spAtk": 70,
          "spDef": 130,
          "speed": 81
        },
        "abilities": [
          {
            "name": "Mold Breaker",
            "description": "Bypasses targets' abilities if they could hinder or prevent a move.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 136,
    "name": "Flareon",
    "dexNumber": 136,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAtk": 95,
      "spDef": 110,
      "speed": 65
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle.",
        "isHidden": false
      },
      {
        "name": "Guts",
        "description": "Increases Attack to 1.5× with a major status ailment.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Double Kick",
        "type": "fighting",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 30,
        "description": "A double kicking attack."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png",
    "generation": 1,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 143,
    "name": "Snorlax",
    "dexNumber": 143,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "spAtk": 65,
      "spDef": 110,
      "speed": 30
    },
    "abilities": [
      {
        "name": "Immunity",
        "description": "Prevents poison.",
        "isHidden": false
      },
      {
        "name": "Thick Fat",
        "description": "Halves damage from fire and ice moves.",
        "isHidden": false
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png",
    "generation": 1,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 149,
    "name": "Dragonite",
    "dexNumber": 149,
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "spAtk": 100,
      "spDef": 100,
      "speed": 80
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": false
      },
      {
        "name": "Multiscale",
        "description": "Halves damage taken from full HP.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Razor Wind",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Wing Attack",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35,
        "description": "Strikes the target with wings."
      },
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Binds the target for 2-5 turns."
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png",
    "generation": 1,
    "forms": [
      {
        "name": "Mega Dragonite",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10281.png",
        "types": [
          "dragon",
          "flying"
        ],
        "baseStats": {
          "hp": 91,
          "attack": 164,
          "defense": 115,
          "spAtk": 110,
          "spDef": 120,
          "speed": 100
        },
        "abilities": [
          {
            "name": "Dragon Aura",
            "description": "Boosts the power of Dragon and Flying-type moves by 30%. On Mega Evolution, raises Speed by one stage.",
            "isChampions": true
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 154,
    "name": "Meganium",
    "dexNumber": 154,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "spAtk": 83,
      "spDef": 100,
      "speed": 80
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      },
      {
        "name": "Mega Sol",
        "description": "Grass and Fairy moves gain 30% power in sun. Summons strong sunlight on Mega Evolution.",
        "isChampions": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Counter",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "Returns a physical blow double."
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      },
      {
        "name": "Leech Seed",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "Steals HP from the foe on every turn."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/154.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/154.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Meganium",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10282.png",
        "types": [
          "grass",
          "fairy"
        ],
        "baseStats": {
          "hp": 80,
          "attack": 92,
          "defense": 130,
          "spAtk": 103,
          "spDef": 130,
          "speed": 90
        },
        "abilities": [
          {
            "name": "Mega Sol",
            "description": "Grass and Fairy moves gain 30% power in sun. Summons strong sunlight on Mega Evolution.",
            "isChampions": true
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "dexNumber": 160,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "spAtk": 79,
      "spDef": 83,
      "speed": 78
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Sheer Force",
        "description": "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.",
        "isHidden": true
      },
      {
        "name": "Dragonize",
        "description": "Normal-type moves become Dragon-type and gain 20% power.",
        "isChampions": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/160.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/160.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Feraligatr",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10283.png",
        "types": [
          "water",
          "dragon"
        ],
        "baseStats": {
          "hp": 85,
          "attack": 135,
          "defense": 120,
          "spAtk": 89,
          "spDef": 103,
          "speed": 98
        },
        "abilities": [
          {
            "name": "Dragonize",
            "description": "Normal-type moves become Dragon-type and gain 20% power.",
            "isChampions": true
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 181,
    "name": "Ampharos",
    "dexNumber": 181,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "spAtk": 115,
      "spDef": 90,
      "speed": 55
    },
    "abilities": [
      {
        "name": "Static",
        "description": "Has a 30% chance of paralyzing attacking Pokémon on contact.",
        "isHidden": false
      },
      {
        "name": "Plus",
        "description": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/181.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/181.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Ampharos",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10045.png",
        "types": [
          "electric",
          "dragon"
        ],
        "baseStats": {
          "hp": 90,
          "attack": 95,
          "defense": 105,
          "spAtk": 165,
          "spDef": 110,
          "speed": 45
        },
        "abilities": [
          {
            "name": "Mold Breaker",
            "description": "Bypasses targets' abilities if they could hinder or prevent a move.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 186,
    "name": "Politoed",
    "dexNumber": 186,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "spAtk": 90,
      "spDef": 100,
      "speed": 70
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Absorbs water moves, healing for 1/4 max HP.",
        "isHidden": false
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": false
      },
      {
        "name": "Drizzle",
        "description": "Summons rain that lasts indefinitely upon entering battle.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pound",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Pounds with fore­ legs or tail."
      },
      {
        "name": "Double Slap",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 10,
        "description": "Repeatedly slaps 2-5 times."
      },
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/186.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/186.png",
    "generation": 2,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 197,
    "name": "Umbreon",
    "dexNumber": 197,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "spAtk": 60,
      "spDef": 130,
      "speed": 65
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.",
        "isHidden": false
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/197.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/197.png",
    "generation": 2,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 212,
    "name": "Scizor",
    "dexNumber": 212,
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "spAtk": 55,
      "spDef": 80,
      "speed": 65
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Technician",
        "description": "Strengthens moves of 60 base power or less to 1.5× their power.",
        "isHidden": false
      },
      {
        "name": "Light Metal",
        "description": "Halves the Pokémon's weight.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Razor Wind",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Wing Attack",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35,
        "description": "Strikes the target with wings."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Counter",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "Returns a physical blow double."
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/212.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/212.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Scizor",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10046.png",
        "types": [
          "bug",
          "steel"
        ],
        "baseStats": {
          "hp": 70,
          "attack": 150,
          "defense": 140,
          "spAtk": 65,
          "spDef": 100,
          "speed": 75
        },
        "abilities": [
          {
            "name": "Technician",
            "description": "Strengthens moves of 60 base power or less to 1.5× their power.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 214,
    "name": "Heracross",
    "dexNumber": 214,
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "spAtk": 40,
      "spDef": 95,
      "speed": 85
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Guts",
        "description": "Increases Attack to 1.5× with a major status ailment.",
        "isHidden": false
      },
      {
        "name": "Moxie",
        "description": "Raises Attack one stage upon KOing a Pokémon.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Horn Attack",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack using a horn to jab."
      },
      {
        "name": "Fury Attack",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Jabs the target 2-5 times."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Pin Missile",
        "type": "bug",
        "category": "physical",
        "power": 25,
        "accuracy": 95,
        "pp": 20,
        "description": "Fires pins that strike 2-5 times."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/214.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/214.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Heracross",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10047.png",
        "types": [
          "bug",
          "fighting"
        ],
        "baseStats": {
          "hp": 80,
          "attack": 185,
          "defense": 115,
          "spAtk": 40,
          "spDef": 105,
          "speed": 75
        },
        "abilities": [
          {
            "name": "Skill Link",
            "description": "Extends two-to-five-hit moves and triple kick to their full length every time.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 227,
    "name": "Skarmory",
    "dexNumber": 227,
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "spAtk": 40,
      "spDef": 70,
      "speed": 70
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": false
      },
      {
        "name": "Sturdy",
        "description": "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
        "isHidden": false
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Wing Attack",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35,
        "description": "Strikes the target with wings."
      },
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Fury Attack",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Jabs the target 2-5 times."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Peck",
        "type": "flying",
        "category": "physical",
        "power": 35,
        "accuracy": 100,
        "pp": 35,
        "description": "Jabs the foe with a beak, etc."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/227.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/227.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Skarmory",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10284.png",
        "types": ["steel", "flying"],
        "baseStats": { "hp": 65, "attack": 110, "defense": 170, "spAtk": 50, "spDef": 100, "speed": 100 },
        "abilities": [{ "name": "Razor Plating", "description": "Steel-type moves gain 30% power. Contact moves deal 1/8 max HP to the attacker.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 229,
    "name": "Houndoom",
    "dexNumber": 229,
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "spAtk": 110,
      "spDef": 80,
      "speed": 95
    },
    "abilities": [
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly.",
        "isHidden": false
      },
      {
        "name": "Flash Fire",
        "description": "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle.",
        "isHidden": false
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Ember",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is attacked with small flames. The foe may suffer a burn."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Counter",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "Returns a physical blow double."
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/229.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/229.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Houndoom",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10048.png",
        "types": [
          "dark",
          "fire"
        ],
        "baseStats": {
          "hp": 75,
          "attack": 90,
          "defense": 90,
          "spAtk": 140,
          "spDef": 90,
          "speed": 115
        },
        "abilities": [
          {
            "name": "Solar Power",
            "description": "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "dexNumber": 248,
    "types": [
      "rock",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "spAtk": 95,
      "spDef": 100,
      "speed": 61
    },
    "abilities": [
      {
        "name": "Sand Stream",
        "description": "Summons a sandstorm that lasts indefinitely upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/248.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/248.png",
    "generation": 2,
    "forms": [
      {
        "name": "Mega Tyranitar",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10049.png",
        "types": [
          "rock",
          "dark"
        ],
        "baseStats": {
          "hp": 100,
          "attack": 164,
          "defense": 150,
          "spAtk": 95,
          "spDef": 120,
          "speed": 71
        },
        "abilities": [
          {
            "name": "Sand Stream",
            "description": "Summons a sandstorm that lasts indefinitely upon entering battle.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 279,
    "name": "Pelipper",
    "dexNumber": 279,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "spAtk": 95,
      "spDef": 70,
      "speed": 65
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": false
      },
      {
        "name": "Drizzle",
        "description": "Summons rain that lasts indefinitely upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Wing Attack",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35,
        "description": "Strikes the target with wings."
      },
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Supersonic",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 20,
        "description": "Sound waves that cause confusion."
      },
      {
        "name": "Mist",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Prevents stat reduction."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/279.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/279.png",
    "generation": 3,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "dexNumber": 282,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "spAtk": 125,
      "spDef": 115,
      "speed": 80
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.",
        "isHidden": false
      },
      {
        "name": "Trace",
        "description": "Copies an opponent's ability upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon's damaging moves.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Psybeam",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may confuse the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/282.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/282.png",
    "generation": 3,
    "forms": [
      {
        "name": "Mega Gardevoir",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10051.png",
        "types": [
          "psychic",
          "fairy"
        ],
        "baseStats": {
          "hp": 68,
          "attack": 85,
          "defense": 65,
          "spAtk": 165,
          "spDef": 135,
          "speed": 100
        },
        "abilities": [
          {
            "name": "Pixilate",
            "description": "Turns the bearer's normal moves into fairy moves and strengthens them to 1.3× their power.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 324,
    "name": "Torkoal",
    "dexNumber": 324,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "spAtk": 85,
      "spDef": 70,
      "speed": 20
    },
    "abilities": [
      {
        "name": "White Smoke",
        "description": "Prevents stats from being lowered by other Pokémon.",
        "isHidden": false
      },
      {
        "name": "Drought",
        "description": "Summons strong sunlight that lasts indefinitely upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Shell Armor",
        "description": "Protects against critical hits.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Ember",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is attacked with small flames. The foe may suffer a burn."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Fire Spin",
        "type": "fire",
        "category": "special",
        "power": 35,
        "accuracy": 85,
        "pp": 15,
        "description": "Traps foe in fire for 2-5 turns."
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/324.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/324.png",
    "generation": 3,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 334,
    "name": "Altaria",
    "dexNumber": 334,
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "spAtk": 70,
      "spDef": 105,
      "speed": 80
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cures any major status ailment upon switching out.",
        "isHidden": false
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Fury Attack",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Jabs the target 2-5 times."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Sing",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 15,
        "description": "May cause the foe to fall asleep."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Mist",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Prevents stat reduction."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/334.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/334.png",
    "generation": 3,
    "forms": [
      {
        "name": "Mega Altaria",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10067.png",
        "types": [
          "dragon",
          "fairy"
        ],
        "baseStats": {
          "hp": 75,
          "attack": 110,
          "defense": 110,
          "spAtk": 110,
          "spDef": 105,
          "speed": 80
        },
        "abilities": [
          {
            "name": "Pixilate",
            "description": "Turns the bearer's normal moves into fairy moves and strengthens them to 1.3× their power.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 350,
    "name": "Milotic",
    "dexNumber": 350,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "spAtk": 100,
      "spDef": 125,
      "speed": 81
    },
    "abilities": [
      {
        "name": "Marvel Scale",
        "description": "Increases Defense to 1.5× with a major status ailment.",
        "isHidden": false
      },
      {
        "name": "Competitive",
        "description": "Raises Special Attack by two stages upon having any stat lowered.",
        "isHidden": false
      },
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Binds the target for 2-5 turns."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Wrap",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 90,
        "pp": 20,
        "description": "Squeezes the foe for 2-5 turns."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/350.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/350.png",
    "generation": 3,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 359,
    "name": "Absol",
    "dexNumber": 359,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAtk": 75,
      "spDef": 60,
      "speed": 75
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": false
      },
      {
        "name": "Super Luck",
        "description": "Raises moves' critical hit rates one stage.",
        "isHidden": false
      },
      {
        "name": "Justified",
        "description": "Raises Attack one stage upon taking damage from a dark move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Razor Wind",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/359.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/359.png",
    "generation": 3,
    "forms": [
      {
        "name": "Mega Absol",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10057.png",
        "types": [
          "dark"
        ],
        "baseStats": {
          "hp": 65,
          "attack": 150,
          "defense": 60,
          "spAtk": 115,
          "spDef": 60,
          "speed": 115
        },
        "abilities": [
          {
            "name": "Magic Bounce",
            "description": "Reflects most non-damaging moves back at their user.",
            "isChampions": false
          }
        ],
        "isMega": true
      },
      {
        "name": "Mega Absol Z",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10314.png",
        "types": ["dark", "ghost"],
        "baseStats": { "hp": 65, "attack": 140, "defense": 65, "spAtk": 130, "spDef": 65, "speed": 100 },
        "abilities": [{ "name": "Spectral Doom", "description": "Dark and Ghost-type moves gain 30% power. Moves bypass Screens and Substitute.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 376,
    "name": "Metagross",
    "dexNumber": 376,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "spAtk": 95,
      "spDef": 90,
      "speed": 70
    },
    "abilities": [
      {
        "name": "Clear Body",
        "description": "Prevents stats from being lowered by other Pokémon.",
        "isHidden": false
      },
      {
        "name": "Light Metal",
        "description": "Halves the Pokémon's weight.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/376.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/376.png",
    "generation": 3,
    "forms": [
      {
        "name": "Mega Metagross",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10076.png",
        "types": [
          "steel",
          "psychic"
        ],
        "baseStats": {
          "hp": 80,
          "attack": 145,
          "defense": 150,
          "spAtk": 105,
          "spDef": 110,
          "speed": 110
        },
        "abilities": [
          {
            "name": "Tough Claws",
            "description": "Strengthens moves that make contact to 1.33× their power.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 395,
    "name": "Empoleon",
    "dexNumber": 395,
    "types": [
      "water",
      "steel"
    ],
    "baseStats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "spAtk": 111,
      "spDef": 101,
      "speed": 60
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Competitive",
        "description": "Raises Special Attack by two stages upon having any stat lowered.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pound",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Pounds with fore­ legs or tail."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Fury Attack",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Jabs the target 2-5 times."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Mist",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Prevents stat reduction."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/395.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/395.png",
    "generation": 4,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 445,
    "name": "Garchomp",
    "dexNumber": 445,
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "spAtk": 80,
      "spDef": 85,
      "speed": 102
    },
    "abilities": [
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": false
      },
      {
        "name": "Rough Skin",
        "description": "Damages attacking Pokémon for 1/8 their max HP on contact.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/445.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/445.png",
    "generation": 4,
    "forms": [
      {
        "name": "Mega Garchomp",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10058.png",
        "types": [
          "dragon",
          "ground"
        ],
        "baseStats": {
          "hp": 108,
          "attack": 170,
          "defense": 115,
          "spAtk": 120,
          "spDef": 95,
          "speed": 92
        },
        "abilities": [
          {
            "name": "Sand Force",
            "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
            "isChampions": false
          }
        ],
        "isMega": true
      },
      {
        "name": "Mega Garchomp Z",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10313.png",
        "types": ["dragon", "ground"],
        "baseStats": { "hp": 108, "attack": 150, "defense": 105, "spAtk": 140, "spDef": 95, "speed": 102 },
        "abilities": [{ "name": "Earth Sovereign", "description": "Ground and Dragon-type moves ignore immunities. On Mega Evolution, summons a sandstorm.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 448,
    "name": "Lucario",
    "dexNumber": 448,
    "types": [
      "fighting",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "spAtk": 115,
      "spDef": 70,
      "speed": 90
    },
    "abilities": [
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching.",
        "isHidden": false
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": false
      },
      {
        "name": "Justified",
        "description": "Raises Attack one stage upon taking damage from a dark move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/448.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/448.png",
    "generation": 4,
    "forms": [
      {
        "name": "Mega Lucario",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10059.png",
        "types": [
          "fighting",
          "steel"
        ],
        "baseStats": {
          "hp": 70,
          "attack": 145,
          "defense": 88,
          "spAtk": 140,
          "spDef": 70,
          "speed": 112
        },
        "abilities": [
          {
            "name": "Adaptability",
            "description": "Increases the same-type attack bonus from 1.5× to 2×.",
            "isChampions": false
          }
        ],
        "isMega": true
      },
      {
        "name": "Mega Lucario Z",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10315.png",
        "types": ["fighting", "steel"],
        "baseStats": { "hp": 70, "attack": 155, "defense": 78, "spAtk": 130, "spDef": 80, "speed": 112 },
        "abilities": [{ "name": "Aura Maximizer", "description": "Fighting and Steel-type moves gain 30% power. Special Attack is raised by one stage on Mega Evolution.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 450,
    "name": "Hippowdon",
    "dexNumber": 450,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "spAtk": 68,
      "spDef": 72,
      "speed": 47
    },
    "abilities": [
      {
        "name": "Sand Stream",
        "description": "Summons a sandstorm that lasts indefinitely upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Fissure",
        "type": "ground",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5,
        "description": "A ground-type, one-hit KO attack."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/450.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/450.png",
    "generation": 4,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 464,
    "name": "Rhyperior",
    "dexNumber": 464,
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "spAtk": 55,
      "spDef": 55,
      "speed": 40
    },
    "abilities": [
      {
        "name": "Lightning Rod",
        "description": "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
        "isHidden": false
      },
      {
        "name": "Solid Rock",
        "description": "Decreases damage taken from super-effective moves by 1/4.",
        "isHidden": false
      },
      {
        "name": "Reckless",
        "description": "Strengthens recoil moves to 1.2× their power.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Stomp",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Horn Attack",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack using a horn to jab."
      },
      {
        "name": "Fury Attack",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Jabs the target 2-5 times."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/464.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/464.png",
    "generation": 4,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 470,
    "name": "Leafeon",
    "dexNumber": 470,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "spAtk": 60,
      "spDef": 65,
      "speed": 95
    },
    "abilities": [
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": false
      },
      {
        "name": "Chlorophyll",
        "description": "Doubles Speed during strong sunlight.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/470.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/470.png",
    "generation": 4,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 471,
    "name": "Glaceon",
    "dexNumber": 471,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "spAtk": 130,
      "spDef": 95,
      "speed": 65
    },
    "abilities": [
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage.",
        "isHidden": false
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/471.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/471.png",
    "generation": 4,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 472,
    "name": "Gliscor",
    "dexNumber": 472,
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "spAtk": 45,
      "spDef": 75,
      "speed": 95
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon.",
        "isHidden": false
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": false
      },
      {
        "name": "Poison Heal",
        "description": "Heals for 1/8 max HP after each turn when poisoned in place of damage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Guillotine",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5,
        "description": "A one-hit KO, pincer attack."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Poison Sting",
        "type": "poison",
        "category": "physical",
        "power": 15,
        "accuracy": 100,
        "pp": 35,
        "description": "An attack that may poison the target."
      },
      {
        "name": "Pin Missile",
        "type": "bug",
        "category": "physical",
        "power": 25,
        "accuracy": 95,
        "pp": 20,
        "description": "Fires pins that strike 2-5 times."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/472.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/472.png",
    "generation": 4,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 478,
    "name": "Froslass",
    "dexNumber": 478,
    "types": [
      "ice",
      "ghost"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "spAtk": 80,
      "spDef": 70,
      "speed": 110
    },
    "abilities": [
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage.",
        "isHidden": false
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Thunder",
        "type": "electric",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10,
        "description": "An attack that may cause paralysis."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/478.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/478.png",
    "generation": 4,
    "forms": [
          {
                "name": "Mega Froslass",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10285.png",
                "types": [
                      "ice",
                      "ghost"
                ],
                "baseStats": {
                      "hp": 70,
                      "attack": 80,
                      "defense": 90,
                      "spAtk": 120,
                      "spDef": 90,
                      "speed": 130
                },
                "abilities": [
                      {
                            "name": "Frozen Veil",
                            "description": "Ice-type moves gain 30% power and have a 30% chance to freeze the target. Immune to hail damage.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 479,
    "name": "Rotom",
    "dexNumber": 479,
    "types": [
      "electric",
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "spAtk": 95,
      "spDef": 77,
      "speed": 91
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Evades ground moves.",
        "isHidden": false
      }
    ],
    "moves": [
      {
        "name": "Thunder Shock",
        "type": "electric",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "description": "An electrical attack that may paralyze the foe."
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Thunder",
        "type": "electric",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Night Shade",
        "type": "ghost",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "The user's level equals damage HP."
      },
      {
        "name": "Double Team",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "description": "Heightens evasive­ ness."
      },
      {
        "name": "Confuse Ray",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10,
        "description": "A move that causes confusion."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      },
      {
        "name": "Swift",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20,
        "description": "Sprays star-shaped rays that never miss."
      },
      {
        "name": "Dream Eater",
        "type": "psychic",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 15,
        "description": "Steals HP from a sleeping victim."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/479.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/479.png",
    "generation": 4,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 497,
    "name": "Serperior",
    "dexNumber": 497,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "spAtk": 75,
      "spDef": 95,
      "speed": 113
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Contrary",
        "description": "Inverts stat changes.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Binds the target for 2-5 turns."
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Vine Whip",
        "type": "grass",
        "category": "physical",
        "power": 45,
        "accuracy": 100,
        "pp": 25,
        "description": "Whips the foe with slender vines."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Wrap",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 90,
        "pp": 20,
        "description": "Squeezes the foe for 2-5 turns."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/497.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/497.png",
    "generation": 5,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 500,
    "name": "Emboar",
    "dexNumber": 500,
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "spAtk": 100,
      "spDef": 65,
      "speed": 65
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Reckless",
        "description": "Strengthens recoil moves to 1.2× their power.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Ember",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is attacked with small flames. The foe may suffer a burn."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/500.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/500.png",
    "generation": 5,
    "forms": [
          {
                "name": "Mega Emboar",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10286.png",
                "types": [
                      "fire",
                      "fighting"
                ],
                "baseStats": {
                      "hp": 110,
                      "attack": 158,
                      "defense": 85,
                      "spAtk": 110,
                      "spDef": 85,
                      "speed": 80
                },
                "abilities": [
                      {
                            "name": "Reckless Flame",
                            "description": "Recoil moves deal 30% more damage and Fire-type moves gain priority at full HP.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 503,
    "name": "Samurott",
    "dexNumber": 503,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "spAtk": 108,
      "spDef": 70,
      "speed": 70
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Shell Armor",
        "description": "Protects against critical hits.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/503.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/503.png",
    "generation": 5,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 530,
    "name": "Excadrill",
    "dexNumber": 530,
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "spAtk": 50,
      "spDef": 65,
      "speed": 88
    },
    "abilities": [
      {
        "name": "Sand Rush",
        "description": "Doubles Speed during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": false
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": false
      },
      {
        "name": "Mold Breaker",
        "description": "Bypasses targets' abilities if they could hinder or prevent a move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Horn Drill",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5,
        "description": "A one-hit KO, drill attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Strength",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "A powerful physi­ cal attack."
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Fissure",
        "type": "ground",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5,
        "description": "A ground-type, one-hit KO attack."
      },
      {
        "name": "Dig",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Burrow 2nd turn: Attack"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/530.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/530.png",
    "generation": 5,
    "forms": [
      {
        "name": "Mega Excadrill",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10287.png",
        "types": ["ground", "steel"],
        "baseStats": { "hp": 110, "attack": 165, "defense": 80, "spAtk": 55, "spDef": 85, "speed": 113 },
        "abilities": [{ "name": "Drill Force", "description": "Ground and Steel-type moves gain 30% power. Ignores the target's defensive stat changes.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 531,
    "name": "Audino",
    "dexNumber": 531,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "spAtk": 60,
      "spDef": 86,
      "speed": 50
    },
    "abilities": [
      {
        "name": "Healer",
        "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
        "isHidden": false
      },
      {
        "name": "Regenerator",
        "description": "Heals for 1/3 max HP upon switching out.",
        "isHidden": false
      },
      {
        "name": "Klutz",
        "description": "Prevents the Pokémon from using its held item in battle.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pound",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Pounds with fore­ legs or tail."
      },
      {
        "name": "Double Slap",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 10,
        "description": "Repeatedly slaps 2-5 times."
      },
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/531.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/531.png",
    "generation": 5,
    "forms": [
      {
        "name": "Mega Audino",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10069.png",
        "types": [
          "normal",
          "fairy"
        ],
        "baseStats": {
          "hp": 103,
          "attack": 60,
          "defense": 126,
          "spAtk": 80,
          "spDef": 126,
          "speed": 50
        },
        "abilities": [
          {
            "name": "Healer",
            "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
            "isChampions": false
          }
        ],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 547,
    "name": "Whimsicott",
    "dexNumber": 547,
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "spAtk": 77,
      "spDef": 75,
      "speed": 116
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Raises non-damaging moves' priority by one stage.",
        "isHidden": false
      },
      {
        "name": "Infiltrator",
        "description": "Bypasses light screen, reflect, and safeguard.",
        "isHidden": false
      },
      {
        "name": "Chlorophyll",
        "description": "Doubles Speed during strong sunlight.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Gust",
        "type": "flying",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Whips up a strong gust of wind."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Absorb",
        "type": "grass",
        "category": "special",
        "power": 20,
        "accuracy": 100,
        "pp": 25,
        "description": "Steals 1/2 of the damage inflicted."
      },
      {
        "name": "Mega Drain",
        "type": "grass",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 15,
        "description": "Steals 1/2 of the damage inflicted."
      },
      {
        "name": "Leech Seed",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "Steals HP from the foe on every turn."
      },
      {
        "name": "Growth",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises the SPCL. ATK rating."
      },
      {
        "name": "Razor Leaf",
        "type": "grass",
        "category": "physical",
        "power": 55,
        "accuracy": 95,
        "pp": 25,
        "description": "A sharp-edged leaf is launched to slash at the foe. It has a high critical-hit ratio."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Poison Powder",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 35,
        "description": "A move that may poison the foe."
      },
      {
        "name": "Stun Spore",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 30,
        "description": "A move that may paralyze the foe."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Psychic",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may lower SPCL.DEF."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/547.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/547.png",
    "generation": 5,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 553,
    "name": "Krookodile",
    "dexNumber": 553,
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "spAtk": 65,
      "spDef": 70,
      "speed": 92
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Lowers opponents' Attack one stage upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Moxie",
        "description": "Raises Attack one stage upon KOing a Pokémon.",
        "isHidden": false
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/553.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/553.png",
    "generation": 5,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 571,
    "name": "Zoroark",
    "dexNumber": 571,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "spAtk": 120,
      "spDef": 60,
      "speed": 105
    },
    "abilities": [
      {
        "name": "Illusion",
        "description": "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move.",
        "isHidden": false
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/571.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/571.png",
    "generation": 5,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 587,
    "name": "Emolga",
    "dexNumber": 587,
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "spAtk": 75,
      "spDef": 60,
      "speed": 103
    },
    "abilities": [
      {
        "name": "Static",
        "description": "Has a 30% chance of paralyzing attacking Pokémon on contact.",
        "isHidden": false
      },
      {
        "name": "Motor Drive",
        "description": "Absorbs electric moves, raising Speed one stage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Thunder Shock",
        "type": "electric",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "description": "An electrical attack that may paralyze the foe."
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Thunder",
        "type": "electric",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Sharply increases the user's SPEED."
      },
      {
        "name": "Quick Attack",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "description": "Lets the user get in the first hit."
      },
      {
        "name": "Double Team",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "description": "Heightens evasive­ ness."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/587.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/587.png",
    "generation": 5,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 635,
    "name": "Hydreigon",
    "dexNumber": 635,
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "spAtk": 125,
      "spDef": 90,
      "speed": 98
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Evades ground moves.",
        "isHidden": false
      }
    ],
    "moves": [
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/635.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/635.png",
    "generation": 5,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 652,
    "name": "Chesnaught",
    "dexNumber": 652,
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "spAtk": 74,
      "spDef": 75,
      "speed": 64
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Bulletproof",
        "description": "Protects against bullet, ball, and bomb-based moves.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Vine Whip",
        "type": "grass",
        "category": "physical",
        "power": 45,
        "accuracy": 100,
        "pp": 25,
        "description": "Whips the foe with slender vines."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Pin Missile",
        "type": "bug",
        "category": "physical",
        "power": 25,
        "accuracy": 95,
        "pp": 20,
        "description": "Fires pins that strike 2-5 times."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/652.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/652.png",
    "generation": 6,
    "forms": [
          {
                "name": "Mega Chesnaught",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10292.png",
                "types": [
                      "grass",
                      "fighting"
                ],
                "baseStats": {
                      "hp": 88,
                      "attack": 137,
                      "defense": 152,
                      "spAtk": 74,
                      "spDef": 100,
                      "speed": 79
                },
                "abilities": [
                      {
                            "name": "Iron Thorns",
                            "description": "Takes 50% less damage from contact moves. Attackers that make contact lose 1/8 of their max HP.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 655,
    "name": "Delphox",
    "dexNumber": 655,
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "spAtk": 114,
      "spDef": 100,
      "speed": 104
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Magician",
        "description": "Steals the target's held item when the bearer uses a damaging move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Ember",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is attacked with small flames. The foe may suffer a burn."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Psybeam",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may confuse the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/655.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/655.png",
    "generation": 6,
    "forms": [
          {
                "name": "Mega Delphox",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10293.png",
                "types": [
                      "fire",
                      "psychic"
                ],
                "baseStats": {
                      "hp": 75,
                      "attack": 69,
                      "defense": 82,
                      "spAtk": 154,
                      "spDef": 120,
                      "speed": 134
                },
                "abilities": [
                      {
                            "name": "Astral Flame",
                            "description": "Fire and Psychic-type moves ignore the target's stat changes and Abilities.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 658,
    "name": "Greninja",
    "dexNumber": 658,
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "spAtk": 103,
      "spDef": 71,
      "speed": 122
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Protean",
        "description": "Changes the bearer's type to match each move it uses.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pound",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Pounds with fore­ legs or tail."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/658.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/658.png",
    "generation": 6,
    "forms": [
          {
                "name": "Mega Greninja",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10294.png",
                "types": [
                      "water",
                      "dark"
                ],
                "baseStats": {
                      "hp": 72,
                      "attack": 125,
                      "defense": 77,
                      "spAtk": 133,
                      "spDef": 81,
                      "speed": 142
                },
                "abilities": [
                      {
                            "name": "Protean Surge",
                            "description": "All moves gain STAB. The Pokémon changes type to match the move it uses.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 660,
    "name": "Diggersby",
    "dexNumber": 660,
    "types": [
      "normal",
      "ground"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "spAtk": 50,
      "spDef": 77,
      "speed": 78
    },
    "abilities": [
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
        "isHidden": false
      },
      {
        "name": "Cheek Pouch",
        "description": "Restores HP upon eating a Berry, in addition to the Berry's effect.",
        "isHidden": false
      },
      {
        "name": "Huge Power",
        "description": "Doubles Attack in battle.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Double Slap",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 10,
        "description": "Repeatedly slaps 2-5 times."
      },
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Double Kick",
        "type": "fighting",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 30,
        "description": "A double kicking attack."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/660.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/660.png",
    "generation": 6,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 663,
    "name": "Talonflame",
    "dexNumber": 663,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "spAtk": 74,
      "spDef": 69,
      "speed": 126
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "Has a 30% chance of burning attacking Pokémon on contact.",
        "isHidden": false
      },
      {
        "name": "Gale Wings",
        "description": "Raises flying moves' priority by one stage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Razor Wind",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Ember",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is attacked with small flames. The foe may suffer a burn."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Peck",
        "type": "flying",
        "category": "physical",
        "power": 35,
        "accuracy": 100,
        "pp": 35,
        "description": "Jabs the foe with a beak, etc."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/663.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/663.png",
    "generation": 6,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 678,
    "name": "Meowstic",
    "dexNumber": 678,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "spAtk": 83,
      "spDef": 81,
      "speed": 104
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": false
      },
      {
        "name": "Infiltrator",
        "description": "Bypasses light screen, reflect, and safeguard.",
        "isHidden": false
      },
      {
        "name": "Prankster",
        "description": "Raises non-damaging moves' priority by one stage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Psybeam",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may confuse the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Dig",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Burrow 2nd turn: Attack"
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Confusion",
        "type": "psychic",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is hit by a weak telekinetic force. It may also leave the foe confused."
      },
      {
        "name": "Psychic",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may lower SPCL.DEF."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/678.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/678.png",
    "generation": 6,
    "forms": [
      {
        "name": "Mega Meowstic",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10308.png",
        "types": ["psychic"],
        "baseStats": { "hp": 74, "attack": 48, "defense": 96, "spAtk": 133, "spDef": 101, "speed": 114 },
        "abilities": [{ "name": "Mind Over Matter", "description": "Psychic-type moves gain 30% power. Status moves bypass Protect.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 681,
    "name": "Aegislash",
    "dexNumber": 681,
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "spAtk": 50,
      "spDef": 140,
      "speed": 60
    },
    "abilities": [
      {
        "name": "Stance Change",
        "description": "Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.",
        "isHidden": false
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Screech",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 85,
        "pp": 40,
        "description": "Sharply reduces the foe's DEFENSE."
      },
      {
        "name": "Double Team",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "description": "Heightens evasive­ ness."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Rock Slide",
        "type": "rock",
        "category": "physical",
        "power": 75,
        "accuracy": 90,
        "pp": 10,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Slash",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20,
        "description": "Has a high criti­ cal hit ratio."
      },
      {
        "name": "Substitute",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Makes a decoy with 1/4 user's max HP."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/681.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/681.png",
    "generation": 6,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 700,
    "name": "Sylveon",
    "dexNumber": 700,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "spAtk": 110,
      "spDef": 130,
      "speed": 60
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact.",
        "isHidden": false
      },
      {
        "name": "Pixilate",
        "description": "Turns the bearer's normal moves into fairy moves and strengthens them to 1.3× their power.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/700.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/700.png",
    "generation": 6,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 701,
    "name": "Hawlucha",
    "dexNumber": 701,
    "types": [
      "fighting",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "spAtk": 74,
      "spDef": 63,
      "speed": 118
    },
    "abilities": [
      {
        "name": "Limber",
        "description": "Prevents paralysis.",
        "isHidden": false
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item.",
        "isHidden": false
      },
      {
        "name": "Mold Breaker",
        "description": "Bypasses targets' abilities if they could hinder or prevent a move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Karate Chop",
        "type": "fighting",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 25,
        "description": "Has a high criti­ cal hit ratio."
      },
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Wing Attack",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35,
        "description": "Strikes the target with wings."
      },
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/701.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/701.png",
    "generation": 6,
    "forms": [
          {
                "name": "Mega Hawlucha",
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10300.png",
                "types": [
                      "fighting",
                      "flying"
                ],
                "baseStats": {
                      "hp": 78,
                      "attack": 122,
                      "defense": 95,
                      "spAtk": 84,
                      "spDef": 78,
                      "speed": 143
                },
                "abilities": [
                      {
                            "name": "Sky High",
                            "description": "Flying and Fighting-type moves gain 30% power. Ignores the effects of Intimidate.",
                            "isChampions": true
                      }
                ],
                "isMega": true
          }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 715,
    "name": "Noivern",
    "dexNumber": 715,
    "types": [
      "flying",
      "dragon"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "spAtk": 97,
      "spDef": 80,
      "speed": 123
    },
    "abilities": [
      {
        "name": "Frisk",
        "description": "Reveals an opponent's held item upon entering battle.",
        "isHidden": false
      },
      {
        "name": "Infiltrator",
        "description": "Bypasses light screen, reflect, and safeguard.",
        "isHidden": false
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon's damaging moves.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Razor Wind",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Cut",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30,
        "description": "Cuts using claws, scythes, etc."
      },
      {
        "name": "Gust",
        "type": "flying",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Whips up a strong gust of wind."
      },
      {
        "name": "Wing Attack",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35,
        "description": "Strikes the target with wings."
      },
      {
        "name": "Whirlwind",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Blows away the foe & ends battle."
      },
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Supersonic",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 20,
        "description": "Sound waves that cause confusion."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/715.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/715.png",
    "generation": 6,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 724,
    "name": "Decidueye",
    "dexNumber": 724,
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "spAtk": 100,
      "spDef": 100,
      "speed": 70
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Long Reach",
        "description": "This Pokémon's moves do not make contact.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Fury Attack",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Jabs the target 2-5 times."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Peck",
        "type": "flying",
        "category": "physical",
        "power": 35,
        "accuracy": 100,
        "pp": 35,
        "description": "Jabs the foe with a beak, etc."
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Razor Leaf",
        "type": "grass",
        "category": "physical",
        "power": 55,
        "accuracy": 95,
        "pp": 25,
        "description": "A sharp-edged leaf is launched to slash at the foe. It has a high critical-hit ratio."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Night Shade",
        "type": "ghost",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "The user's level equals damage HP."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/724.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/724.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 727,
    "name": "Incineroar",
    "dexNumber": 727,
    "types": [
      "fire",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "spAtk": 80,
      "spDef": 90,
      "speed": 60
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Intimidate",
        "description": "Lowers opponents' Attack one stage upon entering battle.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Pay Day",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "description": "Throws coins. Gets them back later."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "description": "Binds the target for 2-5 turns."
      },
      {
        "name": "Double Kick",
        "type": "fighting",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 30,
        "description": "A double kicking attack."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/727.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/727.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 740,
    "name": "Crabominable",
    "dexNumber": 740,
    "types": [
      "fighting",
      "ice"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "spAtk": 62,
      "spDef": 67,
      "speed": 43
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon.",
        "isHidden": false
      },
      {
        "name": "Iron Fist",
        "description": "Strengthens punch-based moves to 1.2× their power.",
        "isHidden": false
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Bubble Beam",
        "type": "water",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may lower SPEED."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Dig",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Burrow 2nd turn: Attack"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/740.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/740.png",
    "generation": 7,
    "forms": [
      {
        "name": "Mega Crabominable",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10309.png",
        "types": ["fighting", "ice"],
        "baseStats": { "hp": 97, "attack": 172, "defense": 97, "spAtk": 62, "spDef": 87, "speed": 63 },
        "abilities": [{ "name": "Permafrost Fist", "description": "Punch-based moves deal 30% more damage and have a 20% chance to freeze the target.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 745,
    "name": "Lycanroc",
    "dexNumber": 745,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "spAtk": 55,
      "spDef": 65,
      "speed": 112
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": false
      },
      {
        "name": "Sand Rush",
        "description": "Doubles Speed during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": false
      },
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Sand Attack",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "Reduces accuracy by throwing sand."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Rock Throw",
        "type": "rock",
        "category": "physical",
        "power": 50,
        "accuracy": 90,
        "pp": 15,
        "description": "Drops rocks on the enemy."
      },
      {
        "name": "Dig",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Burrow 2nd turn: Attack"
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/745.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/745.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 748,
    "name": "Toxapex",
    "dexNumber": 748,
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "spAtk": 53,
      "spDef": 142,
      "speed": 35
    },
    "abilities": [
      {
        "name": "Merciless",
        "description": "This Pokémon's moves critical hit against poisoned targets.",
        "isHidden": false
      },
      {
        "name": "Limber",
        "description": "Prevents paralysis.",
        "isHidden": false
      },
      {
        "name": "Regenerator",
        "description": "Heals for 1/3 max HP upon switching out.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Poison Sting",
        "type": "poison",
        "category": "physical",
        "power": 15,
        "accuracy": 100,
        "pp": 35,
        "description": "An attack that may poison the target."
      },
      {
        "name": "Pin Missile",
        "type": "bug",
        "category": "physical",
        "power": 25,
        "accuracy": 95,
        "pp": 20,
        "description": "Fires pins that strike 2-5 times."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Peck",
        "type": "flying",
        "category": "physical",
        "power": 35,
        "accuracy": 100,
        "pp": 35,
        "description": "Jabs the foe with a beak, etc."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Double Team",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "description": "Heightens evasive­ ness."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/748.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/748.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 763,
    "name": "Tsareena",
    "dexNumber": 763,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "spAtk": 50,
      "spDef": 98,
      "speed": 72
    },
    "abilities": [
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": false
      },
      {
        "name": "Queenly Majesty",
        "description": "Opposing Pokémon cannot use priority attacks.",
        "isHidden": false
      },
      {
        "name": "Sweet Veil",
        "description": "Prevents friendly Pokémon from sleeping.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Double Slap",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 10,
        "description": "Repeatedly slaps 2-5 times."
      },
      {
        "name": "Stomp",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Razor Leaf",
        "type": "grass",
        "category": "physical",
        "power": 55,
        "accuracy": 95,
        "pp": 25,
        "description": "A sharp-edged leaf is launched to slash at the foe. It has a high critical-hit ratio."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Double Team",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "description": "Heightens evasive­ ness."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/763.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/763.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 765,
    "name": "Oranguru",
    "dexNumber": 765,
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "spAtk": 90,
      "spDef": 110,
      "speed": 60
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": false
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon's damaging moves.",
        "isHidden": false
      },
      {
        "name": "Symbiosis",
        "description": "Passes the bearer's held item to an ally when the ally uses up its item.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Psybeam",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may confuse the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder",
        "type": "electric",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Confusion",
        "type": "psychic",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is hit by a weak telekinetic force. It may also leave the foe confused."
      },
      {
        "name": "Psychic",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may lower SPCL.DEF."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/765.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/765.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 778,
    "name": "Mimikyu",
    "dexNumber": 778,
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "spAtk": 50,
      "spDef": 105,
      "speed": 96
    },
    "abilities": [
      {
        "name": "Disguise",
        "description": "Prevents the first instance of battle damage.",
        "isHidden": false
      }
    ],
    "moves": [
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Thunder",
        "type": "electric",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Psychic",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may lower SPCL.DEF."
      },
      {
        "name": "Night Shade",
        "type": "ghost",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "The user's level equals damage HP."
      },
      {
        "name": "Mimic",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Copies a move used by the foe."
      },
      {
        "name": "Screech",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 85,
        "pp": 40,
        "description": "Sharply reduces the foe's DEFENSE."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/778.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/778.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 780,
    "name": "Drampa",
    "dexNumber": 780,
    "types": [
      "normal",
      "dragon"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "spAtk": 135,
      "spDef": 91,
      "speed": 36
    },
    "abilities": [
      {
        "name": "Berserk",
        "description": "Raises this Pokémon's Special Attack by one stage every time its HP drops below half.",
        "isHidden": false
      },
      {
        "name": "Sap Sipper",
        "description": "Absorbs grass moves, raising Attack one stage.",
        "isHidden": false
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Dragon Rage",
        "type": "dragon",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 10,
        "description": "Always inflicts 40HP damage."
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/780.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/780.png",
    "generation": 7,
    "forms": [
      {
        "name": "Mega Drampa",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10302.png",
        "types": ["normal", "dragon"],
        "baseStats": { "hp": 78, "attack": 80, "defense": 105, "spAtk": 170, "spDef": 111, "speed": 41 },
        "abilities": [{ "name": "Elder Wisdom", "description": "Dragon and Normal-type moves gain 30% power. Ignores the target's Abilities when attacking.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 784,
    "name": "Kommo-o",
    "dexNumber": 784,
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "spAtk": 100,
      "spDef": 105,
      "speed": 85
    },
    "abilities": [
      {
        "name": "Bulletproof",
        "description": "Protects against bullet, ball, and bomb-based moves.",
        "isHidden": false
      },
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves.",
        "isHidden": false
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Mega Punch",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20,
        "description": "A powerful punch thrown very hard."
      },
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Mega Kick",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5,
        "description": "The target is attacked by a kick launched with muscle-packed power."
      },
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/784.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/784.png",
    "generation": 7,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 858,
    "name": "Hatterene",
    "dexNumber": 858,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "spAtk": 136,
      "spDef": 103,
      "speed": 29
    },
    "abilities": [
      {
        "name": "Healer",
        "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
        "isHidden": false
      },
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
        "isHidden": false
      },
      {
        "name": "Magic Bounce",
        "description": "Reflects most non-damaging moves back at their user.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Psybeam",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may confuse the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Confusion",
        "type": "psychic",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is hit by a weak telekinetic force. It may also leave the foe confused."
      },
      {
        "name": "Psychic",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may lower SPCL.DEF."
      },
      {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Sharply increases the user's SPEED."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      },
      {
        "name": "Metronome",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Randomly uses any POKéMON move."
      },
      {
        "name": "Swift",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20,
        "description": "Sprays star-shaped rays that never miss."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/858.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/858.png",
    "generation": 8,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 887,
    "name": "Dragapult",
    "dexNumber": 887,
    "types": [
      "dragon",
      "ghost"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "spAtk": 100,
      "spDef": 75,
      "speed": 142
    },
    "abilities": [
      {
        "name": "Clear Body",
        "description": "Prevents stats from being lowered by other Pokémon.",
        "isHidden": false
      },
      {
        "name": "Infiltrator",
        "description": "Bypasses light screen, reflect, and safeguard.",
        "isHidden": false
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fly",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15,
        "description": "1st turn: Fly 2nd turn: Attack"
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/887.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/887.png",
    "generation": 8,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 900,
    "name": "Kleavor",
    "dexNumber": 900,
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "spAtk": 45,
      "spDef": 70,
      "speed": 85
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Sheer Force",
        "description": "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.",
        "isHidden": false
      },
      {
        "name": "Sharpness",
        "description": "Powers up slicing moves.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Sharply increases the user's SPEED."
      },
      {
        "name": "Quick Attack",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "description": "Lets the user get in the first hit."
      },
      {
        "name": "Double Team",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "description": "Heightens evasive­ ness."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      },
      {
        "name": "Focus Energy",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Raises the criti­ cal hit ratio."
      },
      {
        "name": "Swift",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20,
        "description": "Sprays star-shaped rays that never miss."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/900.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/900.png",
    "generation": 8,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 901,
    "name": "Ursaluna",
    "dexNumber": 901,
    "types": [
      "ground",
      "normal"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 140,
      "defense": 105,
      "spAtk": 45,
      "spDef": 80,
      "speed": 50
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "Increases Attack to 1.5× with a major status ailment.",
        "isHidden": false
      },
      {
        "name": "Bulletproof",
        "description": "Protects against bullet, ball, and bomb-based moves.",
        "isHidden": false
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/901.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/901.png",
    "generation": 8,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 902,
    "name": "Basculegion",
    "dexNumber": 902,
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "spAtk": 80,
      "spDef": 75,
      "speed": 78
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Doubles Speed during rain.",
        "isHidden": false
      },
      {
        "name": "Adaptability",
        "description": "Increases the same-type attack bonus from 1.5× to 2×.",
        "isHidden": false
      },
      {
        "name": "Mold Breaker",
        "description": "Bypasses targets' abilities if they could hinder or prevent a move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Thrash",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/902.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/902.png",
    "generation": 8,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 903,
    "name": "Sneasler",
    "dexNumber": 903,
    "types": [
      "fighting",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "spAtk": 40,
      "spDef": 80,
      "speed": 120
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": false
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item.",
        "isHidden": false
      },
      {
        "name": "Poison Touch",
        "description": "Has a 30% chance of poisoning target Pokémon upon contact.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Dig",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Burrow 2nd turn: Attack"
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Sharply increases the user's SPEED."
      },
      {
        "name": "Quick Attack",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "description": "Lets the user get in the first hit."
      },
      {
        "name": "Screech",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 85,
        "pp": 40,
        "description": "Sharply reduces the foe's DEFENSE."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/903.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/903.png",
    "generation": 8,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 908,
    "name": "Meowscarada",
    "dexNumber": 908,
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "spAtk": 81,
      "spDef": 70,
      "speed": 123
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": false
      },
      {
        "name": "Protean",
        "description": "Changes the bearer's type to match each move it uses.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Tail Whip",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Lowers the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Sharply increases the user's SPEED."
      },
      {
        "name": "Quick Attack",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "description": "Lets the user get in the first hit."
      },
      {
        "name": "Swift",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20,
        "description": "Sprays star-shaped rays that never miss."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/908.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/908.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 923,
    "name": "Pawmot",
    "dexNumber": 923,
    "types": [
      "electric",
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "spAtk": 70,
      "spDef": 60,
      "speed": 105
    },
    "abilities": [
      {
        "name": "Volt Absorb",
        "description": "Absorbs electric moves, healing for 1/4 max HP.",
        "isHidden": false
      },
      {
        "name": "Natural Cure",
        "description": "Cures any major status ailment upon switching out.",
        "isHidden": false
      },
      {
        "name": "Iron Fist",
        "description": "Strengthens punch-based moves to 1.2× their power.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Fire Punch",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "A fiery punch. May cause a burn."
      },
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Thunder Punch",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An electric punch. It may paralyze."
      },
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Growl",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40,
        "description": "Reduces the foe's ATTACK."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Thunder Shock",
        "type": "electric",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "description": "An electrical attack that may paralyze the foe."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/923.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/923.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 925,
    "name": "Maushold",
    "dexNumber": 925,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "spAtk": 65,
      "spDef": 75,
      "speed": 111
    },
    "abilities": [
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
        "isHidden": false
      },
      {
        "name": "Cheek Pouch",
        "description": "Restores HP upon eating a Berry, in addition to the Berry's effect.",
        "isHidden": false
      },
      {
        "name": "Technician",
        "description": "Strengthens moves of 60 base power or less to 1.5× their power.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Pound",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Pounds with fore­ legs or tail."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Dig",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Burrow 2nd turn: Attack"
      },
      {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Sharply increases the user's SPEED."
      },
      {
        "name": "Swift",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20,
        "description": "Sprays star-shaped rays that never miss."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Super Fang",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "Cuts the foe's HP by 1/2."
      },
      {
        "name": "Substitute",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Makes a decoy with 1/4 user's max HP."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/925.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/925.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 936,
    "name": "Armarouge",
    "dexNumber": 936,
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "spAtk": 125,
      "spDef": 80,
      "speed": 75
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle.",
        "isHidden": false
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Ember",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "The foe is attacked with small flames. The foe may suffer a burn."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Psybeam",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may confuse the foe."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Fire Spin",
        "type": "fire",
        "category": "special",
        "power": 35,
        "accuracy": 85,
        "pp": 15,
        "description": "Traps foe in fire for 2-5 turns."
      },
      {
        "name": "Psychic",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may lower SPCL.DEF."
      },
      {
        "name": "Night Shade",
        "type": "ghost",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "The user's level equals damage HP."
      },
      {
        "name": "Confuse Ray",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10,
        "description": "A move that causes confusion."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/936.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/936.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 952,
    "name": "Scovillain",
    "dexNumber": 952,
    "types": [
      "grass",
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "spAtk": 108,
      "spDef": 65,
      "speed": 75
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Doubles Speed during strong sunlight.",
        "isHidden": false
      },
      {
        "name": "Insomnia",
        "description": "Prevents sleep.",
        "isHidden": false
      },
      {
        "name": "Moody",
        "description": "Raises a random stat two stages and lowers another one stage after each turn.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Headbutt",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may make foe flinch."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Bite",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Flamethrower",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may inflict a burn."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Growth",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises the SPCL. ATK rating."
      },
      {
        "name": "Razor Leaf",
        "type": "grass",
        "category": "physical",
        "power": 55,
        "accuracy": 95,
        "pp": 25,
        "description": "A sharp-edged leaf is launched to slash at the foe. It has a high critical-hit ratio."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Fire Blast",
        "type": "fire",
        "category": "special",
        "power": 110,
        "accuracy": 85,
        "pp": 5,
        "description": "An attack that may cause a burn."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Super Fang",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "Cuts the foe's HP by 1/2."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/952.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/952.png",
    "generation": 9,
    "forms": [
      {
        "name": "Mega Scovillain",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10310.png",
        "types": ["grass", "fire"],
        "baseStats": { "hp": 65, "attack": 138, "defense": 75, "spAtk": 138, "spDef": 75, "speed": 95 },
        "abilities": [{ "name": "Spice Rush", "description": "Grass and Fire-type moves gain 30% power. Sun is set up on Mega Evolution.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 959,
    "name": "Tinkaton",
    "dexNumber": 959,
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "spAtk": 70,
      "spDef": 105,
      "speed": 94
    },
    "abilities": [
      {
        "name": "Mold Breaker",
        "description": "Bypasses targets' abilities if they could hinder or prevent a move.",
        "isHidden": false
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion.",
        "isHidden": false
      },
      {
        "name": "Pickpocket",
        "description": "Steals attacking Pokémon's held items on contact.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Slam",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20,
        "description": "Slams the foe with a tail, vine, etc."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      },
      {
        "name": "Metronome",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Randomly uses any POKéMON move."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Rock Slide",
        "type": "rock",
        "category": "physical",
        "power": 75,
        "accuracy": 90,
        "pp": 10,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Substitute",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Makes a decoy with 1/4 user's max HP."
      },
      {
        "name": "Thief",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25,
        "description": "While attacking, it may steal the foe’s held item."
      },
      {
        "name": "Protect",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Foils attack that turn. It may fail."
      },
      {
        "name": "Sweet Kiss",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 10,
        "description": "A move that causes confusion."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/959.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/959.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 964,
    "name": "Palafin",
    "dexNumber": 964,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "spAtk": 53,
      "spDef": 62,
      "speed": 100
    },
    "abilities": [
      {
        "name": "Zero To Hero",
        "description": "Transforms into its Hero Form when switching out.",
        "isHidden": false
      }
    ],
    "moves": [
      {
        "name": "Ice Punch",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15,
        "description": "An icy punch. May cause freezing."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Supersonic",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 20,
        "description": "Sound waves that cause confusion."
      },
      {
        "name": "Mist",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Prevents stat reduction."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Ice Beam",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Blizzard",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5,
        "description": "An attack that may freeze the foe."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Sharply increases the user's SPEED."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/964.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/964.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 970,
    "name": "Glimmora",
    "dexNumber": 970,
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "spAtk": 130,
      "spDef": 81,
      "speed": 86
    },
    "abilities": [
      {
        "name": "Toxic Debris",
        "description": "Scatters poison spikes at the feet of the opposing team when the Pokémon takes damage from physical moves.",
        "isHidden": false
      },
      {
        "name": "Corrosion",
        "description": "This Pokémon can inflict poison on Poison and Steel Pokémon.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Rock Throw",
        "type": "rock",
        "category": "physical",
        "power": 50,
        "accuracy": 90,
        "pp": 15,
        "description": "Drops rocks on the enemy."
      },
      {
        "name": "Toxic",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10,
        "description": "A poison move with increasing damage."
      },
      {
        "name": "Harden",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Stiffens the body’s  muscles to raise DEFENSE."
      },
      {
        "name": "Confuse Ray",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10,
        "description": "A move that causes confusion."
      },
      {
        "name": "Light Screen",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Ups SPCL.DEF with a wall of light."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      },
      {
        "name": "Self Destruct",
        "type": "normal",
        "category": "physical",
        "power": 200,
        "accuracy": 100,
        "pp": 5,
        "description": "Powerful but makes the user faint."
      },
      {
        "name": "Acid Armor",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Sharply raises the user's DEFENSE."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Rock Slide",
        "type": "rock",
        "category": "physical",
        "power": 75,
        "accuracy": 90,
        "pp": 10,
        "description": "An attack that may cause flinching."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/970.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/970.png",
    "generation": 9,
    "forms": [
      {
        "name": "Mega Glimmora",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10311.png",
        "types": ["rock", "poison"],
        "baseStats": { "hp": 83, "attack": 55, "defense": 110, "spAtk": 170, "spDef": 91, "speed": 116 },
        "abilities": [{ "name": "Toxic Crystallize", "description": "Poison-type moves gain 50% power. On Mega Evolution, sets Toxic Spikes.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 977,
    "name": "Dondozo",
    "dexNumber": 977,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 100,
      "defense": 115,
      "spAtk": 65,
      "spDef": 65,
      "speed": 35
    },
    "abilities": [
      {
        "name": "Unaware",
        "description": "Ignores other Pokémon's stat modifiers for damage and accuracy calculation.",
        "isHidden": false
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate.",
        "isHidden": false
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Tackle",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "A full-body charge attack."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Supersonic",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 20,
        "description": "Sound waves that cause confusion."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Waterfall",
        "type": "water",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15,
        "description": "An aquatic charge attack."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/977.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/977.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 978,
    "name": "Tatsugiri",
    "dexNumber": 978,
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "spAtk": 120,
      "spDef": 95,
      "speed": 82
    },
    "abilities": [
      {
        "name": "Commander",
        "description": "Goes inside the mouth of an ally Dondozo if one is on the field.",
        "isHidden": false
      },
      {
        "name": "Storm Drain",
        "description": "Redirects single-target water moves to this Pokémon where possible.  Absorbs Water moves, raising Special Attack one stage.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Water Gun",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25,
        "description": "Squirts water to attack."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Surf",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "A strong water- type attack."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Harden",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "description": "Stiffens the body’s  muscles to raise DEFENSE."
      },
      {
        "name": "Splash",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40,
        "description": "Has no effect whatsoever."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Substitute",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Makes a decoy with 1/4 user's max HP."
      },
      {
        "name": "Protect",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Foils attack that turn. It may fail."
      },
      {
        "name": "Icy Wind",
        "type": "ice",
        "category": "special",
        "power": 55,
        "accuracy": 95,
        "pp": 15,
        "description": "An icy attack that lowers SPEED."
      },
      {
        "name": "Outrage",
        "type": "dragon",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "Works 2-3 turns and confuses user."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/978.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/978.png",
    "generation": 9,
    "forms": [
      {
        "name": "Mega Tatsugiri",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10312.png",
        "types": ["dragon", "water"],
        "baseStats": { "hp": 68, "attack": 50, "defense": 80, "spAtk": 160, "spDef": 115, "speed": 102 },
        "abilities": [{ "name": "Supreme Commander", "description": "Dragon and Water-type moves gain 30% power. Allies' Special Attack is boosted by 20%.", "isChampions": true }],
        "isMega": true
      }
    ],
    "hasMega": true,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  },
  {
    "id": 983,
    "name": "Kingambit",
    "dexNumber": 983,
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "spAtk": 60,
      "spDef": 85,
      "speed": 50
    },
    "abilities": [
      {
        "name": "Defiant",
        "description": "Raises Attack two stages upon having any stat lowered.",
        "isHidden": false
      },
      {
        "name": "Supreme Overlord",
        "description": "Attack and Special Attack are boosted for each party Pokémon that has been defeated.",
        "isHidden": false
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Scratch",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35,
        "description": "Scratches with sharp claws."
      },
      {
        "name": "Guillotine",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5,
        "description": "A one-hit KO, pincer attack."
      },
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Low Kick",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20,
        "description": "An attack that may cause flinching."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Dig",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Burrow 2nd turn: Attack"
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Slash",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20,
        "description": "Has a high criti­ cal hit ratio."
      },
      {
        "name": "Substitute",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Makes a decoy with 1/4 user's max HP."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/983.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/983.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "S",
    "usageRate": null
  },
  {
    "id": 1013,
    "name": "Sinistcha",
    "dexNumber": 1013,
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "spAtk": 121,
      "spDef": 80,
      "speed": 70
    },
    "abilities": [
      {
        "name": "Hospitality",
        "description": "When a Pokémon with Hospitality enters a battle, it restores HP for an ally by 25%.",
        "isHidden": false
      },
      {
        "name": "Heatproof",
        "description": "Halves damage from fire moves and burns.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Absorb",
        "type": "grass",
        "category": "special",
        "power": 20,
        "accuracy": 100,
        "pp": 25,
        "description": "Steals 1/2 of the damage inflicted."
      },
      {
        "name": "Mega Drain",
        "type": "grass",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 15,
        "description": "Steals 1/2 of the damage inflicted."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Stun Spore",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 30,
        "description": "A move that may paralyze the foe."
      },
      {
        "name": "Night Shade",
        "type": "ghost",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "description": "The user's level equals damage HP."
      },
      {
        "name": "Withdraw",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40,
        "description": "Heightens the user's DEFENSE."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      },
      {
        "name": "Substitute",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Makes a decoy with 1/4 user's max HP."
      },
      {
        "name": "Curse",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "description": "Works differently for ghost-types."
      },
      {
        "name": "Spite",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10,
        "description": "Cuts the PP of the foe's last move."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1013.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1013.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "C",
    "usageRate": null
  },
  {
    "id": 1018,
    "name": "Archaludon",
    "dexNumber": 1018,
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "spAtk": 125,
      "spDef": 65,
      "speed": 85
    },
    "abilities": [
      {
        "name": "Stamina",
        "description": "Raises this Pokémon's Defense by one stage when it takes damage from a move.",
        "isHidden": false
      },
      {
        "name": "Sturdy",
        "description": "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
        "isHidden": false
      },
      {
        "name": "Stalwart",
        "description": "Ignores moves and abilities that draw in moves.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Swords Dance",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "A dance that in­ creases ATTACK."
      },
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Leer",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "description": "Reduces the foe's DEFENSE."
      },
      {
        "name": "Roar",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Scares wild foes to end battle."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Thunderbolt",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Thunder Wave",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20,
        "description": "A move that may cause paralysis."
      },
      {
        "name": "Thunder",
        "type": "electric",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1018.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1018.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "A",
    "usageRate": null
  },
  {
    "id": 1019,
    "name": "Hydrapple",
    "dexNumber": 1019,
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "spAtk": 120,
      "spDef": 80,
      "speed": 44
    },
    "abilities": [
      {
        "name": "Supersweet Syrup",
        "description": "Once per battle, when a Pokémon with Supersweet Syrup enters the battle, it lowers the evasion stat of all adjacent opponents by one stage. ",
        "isHidden": false
      },
      {
        "name": "Regenerator",
        "description": "Heals for 1/3 max HP upon switching out.",
        "isHidden": false
      },
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon.",
        "isHidden": true
      }
    ],
    "moves": [
      {
        "name": "Body Slam",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15,
        "description": "An attack that may cause paralysis."
      },
      {
        "name": "Take Down",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Double Edge",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15,
        "description": "A tackle that also hurts the user."
      },
      {
        "name": "Hydro Pump",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5,
        "description": "A powerful water- type attack."
      },
      {
        "name": "Hyper Beam",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5,
        "description": "1st turn: Attack 2nd turn: Rest"
      },
      {
        "name": "Growth",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises the SPCL. ATK rating."
      },
      {
        "name": "Solar Beam",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10,
        "description": "1st turn: Prepare 2nd turn: Attack"
      },
      {
        "name": "Earthquake",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10,
        "description": "Tough but useless vs. flying foes."
      },
      {
        "name": "Recover",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Recovers up to half the user’s maximum HP."
      },
      {
        "name": "Withdraw",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40,
        "description": "Heightens the user's DEFENSE."
      },
      {
        "name": "Reflect",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "description": "Raises DEFENSE with a barrier."
      },
      {
        "name": "Rest",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "description": "Sleep for 2 turns to fully recover."
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1019.png",
    "officialArt": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1019.png",
    "generation": 9,
    "hasMega": false,
    "recruitmentCost": null,
    "homeCompatible": true,
    "homeSource": ["Scarlet/Violet", "Legends Z-A"],
    "season": 1,
    "tier": "B",
    "usageRate": null
  }
];

export function getPokemonBySeason(season: number): ChampionsPokemon[] {
  return POKEMON_SEED.filter((p) => p.season <= season);
}

export function getPokemonByType(type: string): ChampionsPokemon[] {
  return POKEMON_SEED.filter((p) =>
    p.types.includes(type as ChampionsPokemon["types"][0])
  );
}

export function getPokemonByGen(gen: number): ChampionsPokemon[] {
  return POKEMON_SEED.filter((p) => p.generation === gen);
}

export const STAT_PRESETS = {
  "Balanced Attacker": { hp: 12, attack: 20, defense: 4, spAtk: 20, spDef: 4, speed: 4 },
  "Bulky Support": { hp: 20, attack: 0, defense: 16, spAtk: 0, spDef: 16, speed: 12 },
  "Fast Sweeper": { hp: 0, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 32 },
  "Special Sweeper": { hp: 0, attack: 0, defense: 0, spAtk: 32, spDef: 0, speed: 32 },
  "Trick Room Tank": { hp: 32, attack: 32, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
  "Mixed Attacker": { hp: 0, attack: 16, defense: 0, spAtk: 16, spDef: 0, speed: 32 },
} as const;
