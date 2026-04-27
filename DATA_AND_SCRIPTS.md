# Champions Lab — Data & Scripts Guide

> How Pokémon data is sourced, structured, processed, and maintained. Overview of the 80+ scripts in `scripts/`.

---

## Data Sources

### Primary Sources
| Source | What We Get | How |
|:---|:---|:---|
| **PokeAPI** (`pokeapi.co`) | Base stats, types, abilities, moves, sprites | `scripts/fetch-pokemon.mjs` |
| **Bulbapedia** | Champions format legality, tier info, usage stats | Manual curation + scripts |
| **Pokémon HOME** | Pokémon availability, recruitment cost | `scripts/fetch-french-gamedata.mjs`, `scripts/fetch-spanish-gamedata.mjs` |
| **Limitless TCG** | Tournament results, winning teams | `scripts/sync-limitless-tournaments.ts`, `scripts/daily-limitless-sync.sh` |
| **Serebii** | Move data verification | `scripts/serebii-moves.json` |
| **PokeAPI Sprites** | Pokémon sprites (front default) | `scripts/download-sprites.sh` |
| **Custom Object Storage** | Optimized sprite CDN | `champions-lab-sprites.nbg1.your-objectstorage.com` |

### Data Flow Pipeline
```
PokeAPI / Bulbapedia / HOME / Limitless
    ↓
scripts/fetch-*.mjs  (download raw data)
    ↓
scripts/audit-*.cjs/mjs/ts  (validate & detect issues)
    ↓
scripts/fix-*.mjs/cjs/py  (correct data errors)
    ↓
scripts/fill-*.cjs  (populate derived data)
    ↓
src/lib/pokemon-data.ts  (final roster)
src/lib/usage-data.ts    (competitive sets)
src/lib/engine/*.ts      (moves, abilities, items)
src/lib/winning-teams.ts (tournament teams)
```

---

## Core Data Files

### `src/lib/pokemon-data.ts` (~2.9 MB)
The single source of truth for all 147 competition-legal Pokémon.

```ts
export const POKEMON_SEED: ChampionsPokemon[] = [
  {
    id: 3,               // Internal Champions Lab ID
    name: "Venusaur",
    dexNumber: 3,        // National Dex number
    types: ["grass", "poison"],
    baseStats: { hp: 80, attack: 82, defense: 83, spAtk: 100, spDef: 100, speed: 80 },
    abilities: [
      { name: "Overgrow", description: "...", isHidden: false },
      { name: "Chlorophyll", description: "...", isHidden: true }
    ],
    moves: [
      { name: "Acid Spray", type: "poison", category: "special", power: 40, accuracy: 100, pp: 20, description: "..." }
      // ... 50-100 moves per Pokémon
    ],
    sprite: "...",
    officialArt: "...",
    generation: 1,
    forms: [           // Regional forms, Mega Evolutions
      { name: "Mega Venusaur", sprite: "...", types: ["grass", "poison"], baseStats: {...}, abilities: [...], isMega: true }
    ],
    hasMega: true,
    season: 1,         // First available season
    tier: "A",         // S/A/B/C/D ranking
    usageRate: 12.5,   // % of teams that include this Pokémon
    hidden: false      // If true, excluded from all UI
  }
];

export const SEASONS: Season[] = [
  {
    id: 1,
    name: "Season M-1  -  Regulation M-A",
    startDate: "2026-04-08",
    endDate: "2026-05-13",
    rosterAdditions: [],
    rules: ["Doubles format", "Bring 6, Pick 4", "Level 50", "Stat Points", "Mega Evolution", "No duplicate Pokémon"],
    isActive: true
  }
];

export const STAT_PRESETS = { ... };  // Common SP distributions
```

### `src/lib/usage-data.ts`
Competitive set presets for each Pokémon — essentially "recommended builds" based on tournament data.

```ts
export const USAGE_DATA: Record<number, CommonSet[]> = {
  3: [  // Venusaur
    {
      name: "Special Attacker",
      nature: "Modest",
      ability: "Chlorophyll",
      item: "Life Orb",
      moves: ["Sleep Powder", "Leaf Storm", "Sludge Bomb", "Protect"],
      sp: { hp: 12, attack: 0, defense: 8, spAtk: 32, spDef: 8, speed: 6 },
      teraType: "poison"
    }
  ]
};
```

### `src/lib/engine/move-data.ts`
242+ moves with full battle-relevant metadata.

```ts
export interface EngineMove {
  name: string;
  type: PokemonType;
  category: "physical" | "special" | "status";
  basePower: number;
  accuracy: number | null;
  pp: number;
  priority: number;
  target: "adjacentFoe" | "allAdjacent" | "ally" | "self" | "all";
  flags: {
    contact: boolean;
    protect: boolean;
    spread: boolean;
    heal: boolean;
    recoil: boolean;
    // ...
  };
  selfBoost?: { atk?: number; def?: number; spAtk?: number; ... };
  secondary?: { chance: number; status?: string; statChanges?: ... };
  zMove?: { basePower: number };
  maxMove?: { basePower: number };
  description: string;
}
```

### `src/lib/engine/ability-data.ts`
200+ abilities with effect metadata for the battle engine.

### `src/lib/engine/items.ts`
Held items database with damage/speed multipliers and battle effects.

### `src/lib/engine/natures.ts`
Nature definitions and stat modifiers.

### `src/lib/engine/vgc-data.ts`
Tournament-derived data:
- `TOURNAMENT_USAGE` — Usage rates per Pokémon
- `TOURNAMENT_TEAMS` — Real winning teams
- `CORE_PAIRS` — Frequently paired Pokémon
- `ARCHETYPE_MATCHUPS` — Archetype vs archetype win rates

---

## The Scripts Directory (`scripts/`)

The `scripts/` directory contains **80+ scripts** for data acquisition, validation, correction, and enrichment. They are organized by purpose:

### Fetch Scripts (Data Acquisition)
| Script | Purpose |
|:---|:---|
| `fetch-pokemon.mjs` | Download Pokémon data from PokeAPI |
| `fetch-french-gamedata.mjs` | Fetch French Pokémon names/moves from HOME |
| `fetch-spanish-gamedata.mjs` | Fetch Spanish Pokémon names/moves from HOME |
| `fetch-french-names.mjs` | French name translations |
| `fetch-spanish-names.mjs` | Spanish name translations |
| `fetch-all-moves.mjs` | Bulk move data download |

### Add Scripts (Data Population)
| Script | Purpose |
|:---|:---|
| `add-new-pokemon.mjs` | Add a single new Pokémon to the roster |
| `add-new-pokemon-fast.mjs` | Optimized batch add |
| `add-new-pokemon-batch.mjs` | Bulk add multiple Pokémon |
| `add-missing-pokemon.mjs` | Add Pokémon detected as missing |
| `add-missing-megas.mjs` | Add Mega Evolution forms |
| `add-regional-forms.mjs` | Add regional variants |
| `apply-moves.mjs` | Apply move learnsets |
| `update-movepools.mjs` | Update available moves |
| `update-roster.mjs` | Refresh full roster |
| `update-mega-abilities.mjs` | Update Mega ability data |
| `launch-day-update.mjs` | One-shot update for new season launch |

### Audit Scripts (Validation)
| Script | Purpose |
|:---|:---|
| `audit-data.cjs` | General data integrity check |
| `audit-engine-moves.ts` | Verify all moves exist in engine |
| `audit-engine-moves-v2.ts` | Enhanced move audit |
| `audit-roster.cjs` | Validate roster completeness |
| `audit-sprites.cjs` / `.mjs` | Check sprite availability |
| `audit-sprite-dupes.cjs` | Detect duplicate sprites |
| `audit-set-moves.ts` | Validate moves in usage sets |
| `audit-core-pairs.cjs` | Validate core pair data |
| `audit-moves.mjs` | Move data consistency |
| `audit-mega-stats.ts` | Mega stat validation |
| `audit-mega-teams.ts` | Mega team composition audit |
| `audit-winning-teams.cjs` | Validate tournament team data |
| `full-audit.cjs` / `.ts` | Run all audits |
| `validate-*.mjs` | Specific validators (roster, sprites, megas, etc.) |
| `check-*.mjs/cjs` | Quick checks (JSON, sprites, megas, etc.) |

### Fix Scripts (Data Correction)
| Script | Purpose |
|:---|:---|
| `fix-sim-data.cjs` | Fix simulation data issues |
| `fix-sim-proper.cjs` | Proper simulation data correction |
| `fix-missing-moves.ts` | Add missing moves to Pokémon |
| `fix-missing-descriptions.py` | Fill missing move/ability descriptions |
| `fix-mega-abilities.mjs` | Correct Mega ability assignments |
| `fix-mega-stats.mjs` | Fix Mega stat values |
| `fix-mega-sprites.mjs` | Correct Mega sprite IDs |
| `fix-sprites.mjs` | General sprite fixes |
| `fix-sprite-ids.mjs` | Correct sprite ID mappings |
| `fix-abilities.mjs` | Ability data corrections |
| `fix-forms-megas.mjs` | Form/Mega relationship fixes |
| `fix-home-data.mjs` / `.cjs` | HOME data corrections |
| `fix-homesource*.mjs/cjs` | HOME source data fixes |
| `fix-corrupted-moves.mjs` | Repair corrupted move data |
| `fix-removed-ids.cjs` | Handle removed Pokémon IDs |
| `fix-fields.cjs` | Field data corrections |
| `fix-winning-teams.cjs` | Tournament team corrections |

### Fill Scripts (Derived Data)
| Script | Purpose |
|:---|:---|
| `fill-roster-data.cjs` | Populate roster with derived fields |
| `fill-usage-data.cjs` | Generate usage statistics |
| `fill-sim-teams.cjs` | Fill simulation team data |
| `fill-sim-proper.cjs` | Proper simulation data population |

### Download Scripts (Assets)
| Script | Purpose |
|:---|:---|
| `download-sprites.sh` | Bulk sprite download from PokeAPI |
| `download-mega-sprites.cjs` | Download Mega Evolution sprites |
| `gen-favicon.cjs` | Generate favicon assets |

### QA & Testing Scripts
| Script | Purpose |
|:---|:---|
| `qa-battle-bot.ts` / `-old.ts` | Battle engine quality assurance |
| `qa-calc-tester.ts` | Damage calculator QA |
| `qa-team-composition.ts` | Team composition validation |
| `qa-transforms.ts` | Transformation QA (Mega, form changes) |
| `test-engine.ts` | Engine unit tests |
| `test-mega-sim.ts` | Mega simulation tests |
| `test-ml.ts` | Machine learning simulation tests |
| `run-mega-sim.ts` | Run Mega-specific simulations |
| `run-full-ml.ts` | Full ML simulation run |
| `run-million.ts` | Million-battle simulation |

### Meta & Analysis Scripts
| Script | Purpose |
|:---|:---|
| `gen-usage.cjs` | Generate usage statistics |
| `clean-usage.cjs` | Clean usage data |
| `find-missing-usage.cjs` | Find Pokémon without usage data |
| `find-90-teams.ts` / `-v2.ts` / `-v3.ts` | Find high-performing teams |
| `diversify-teams.cjs` / `diversify-round2.cjs` | Diversify team archetypes |
| `sync-tiers.ts` | Sync tier rankings |
| `update-real-meta.mjs` | Update meta with real data |
| `update-game-rankings.mjs` | Update in-game rankings |

### Integration Scripts
| Script | Purpose |
|:---|:---|
| `sync-limitless-tournaments.ts` | Sync with Limitless tournament data |
| `sync-roster.mjs` | Sync roster with external source |
| `scrape-events.mjs` | Scrape tournament events |
| `integrate-game-stats.mjs` | Integrate game statistics |

### Utility Scripts
| Script | Purpose |
|:---|:---|
| `post-sim-deploy.sh` | Post-simulation deployment |
| `watch-and-deploy.sh` | Watch and auto-deploy |
| `daily-limitless-sync.sh` | Daily tournament sync cron |
| `check-json.cjs` | JSON validation |
| `verify-data.mjs` | General data verification |
| `gather-missing-data.cjs` | Collect missing data points |
| `gen-share-link.ts` | Generate share links |

---

## Sprite Management

Sprites are stored in `public/sprites/` as PNG files named by Pokémon ID (e.g., `3.png` for Venusaur, `10033.png` for Mega Venusaur).

### Sprite ID Conventions
- Base forms: `{nationalDex}.png`
- Mega Evolutions: `10{dex}{form}.png` (e.g., `10033.png`)
- Regional forms: Various depending on form

### Sprite Sources
1. **Local**: `public/sprites/{id}.png`
2. **PokeAPI CDN**: `https://raw.githubusercontent.com/PokeAPI/sprites/...`
3. **Custom CDN**: `https://champions-lab-sprites.nbg1.your-objectstorage.com/sprites/...`

The `sprite-url.ts` utility resolves the best available source.

---

## Data Update Workflow

When a new season launches or new Pokémon are announced:

```bash
# 1. Fetch new data
node scripts/fetch-pokemon.mjs

# 2. Add new Pokémon to roster
node scripts/add-new-pokemon-batch.mjs

# 3. Update moves/abilities
node scripts/update-movepools.mjs
node scripts/update-mega-abilities.mjs

# 4. Download sprites
bash scripts/download-sprites.sh

# 5. Run audits
node scripts/full-audit.cjs

# 6. Fix any issues
node scripts/fix-missing-moves.ts
node scripts/fix-missing-descriptions.py

# 7. Fill derived data
node scripts/fill-usage-data.cjs
node scripts/fill-sim-teams.cjs

# 8. Validate everything
node scripts/validate-roster.mjs
node scripts/validate-sprites.mjs

# 9. Update changelog
# (Manually update src/components/last-updated.tsx)

# 10. Build and deploy
npm run build
# (Follow DEPLOYMENT.md for VPS deploy)
```

---

## Champions Format Rules (Season M-1)

The data is built around the Pokémon Champions 2026 format:

- **Format**: Doubles (4v4 from team of 6)
- **Level**: 50 (auto-level)
- **Stats**: Stat Points (SP) system — 66 total, max 32 per stat
- **Mechanics**: Mega Evolution, Tera Type
- **Restrictions**: No duplicate Pokémon, no duplicate items
- **Timer**: 20-minute game timer
- **Roster**: 147 Pokémon (136 base + 11 regional forms)

---

*Last updated: 2026-04-27*
