# Tournament Data Sync Guide

> How tournament teams are sourced from Limitless TCG, what data is captured, and how to keep them up to date.

---

## Where tournament data comes from

**Source:** [Limitless TCG](https://play.limitlesstcg.com) public API (`play.limitlesstcg.com/api`)

**What the API provides per team:**
- `ability` — the ability the player used
- `item` — the held item
- `attacks[]` — the 4 moves
- `tera` — tera type (if set)

**What the API does NOT provide:**
- Nature
- EVs / stat points

For nature and EVs, the Team Builder falls back to the best-matching competitive set in `USAGE_DATA` (matched by ability + item, then ability only, then item only).

---

## Key files

| File | Purpose |
|:---|:---|
| `scripts/sync-limitless-tournaments.ts` | Fetches all M-A tournaments from Limitless and regenerates `src/lib/simulation-data.ts` |
| `scripts/daily-limitless-sync.sh` | Cron script designed to run on the VPS (commits & pushes changes; does NOT build) |
| `src/lib/simulation-data.ts` | Generated file containing `CHAMPIONS_TOURNAMENT_TEAMS` and `CHAMPIONS_TOURNAMENT_USAGE` |
| `scripts/limitless-cache.json` | Cache of seen tournament IDs to avoid re-processing |

---

## How to run a manual sync

```bash
# Full sync (processes all tournaments, takes ~10-15 min due to API rate limits)
npx tsx scripts/sync-limitless-tournaments.ts

# Preview without writing
npx tsx scripts/sync-limitless-tournaments.ts --dry-run

# Only tournaments with 32+ players
npx tsx scripts/sync-limitless-tournaments.ts --min-players 32
```

After the sync:
1. Check `git diff src/lib/simulation-data.ts` to see what changed
2. Run `npm run build` locally to verify the build passes
3. Commit, push, and deploy per `DEPLOYMENT.md`

---

## Why the old automated sync was broken (fixed)

The `daily-limitless-sync.sh` cron job on the VPS used to call `next build` directly after syncing. The VPS only has ~750MB free RAM — builds OOM-kill and then the script reverts the data changes with `git checkout`. This is why tournament data was always stale.

**Fixed behavior:** The cron script now commits & pushes the data changes. A human must then build locally and rsync `.next/` to the VPS per `DEPLOYMENT.md`.

---

## Tournament team data shape

```ts
export interface ChampionsTournamentSet {
  ability: string;
  item: string;
  moves: string[];
  teraType?: string;
}

export interface ChampionsTournamentTeam {
  id: string;
  tournament: string;
  players: number;       // total entrants
  placement: number;
  player: string;
  wins: number;
  losses: number;
  pokemonIds: number[];
  pokemonNames: string[];
  sets?: ChampionsTournamentSet[];  // actual moves/items/abilities from Limitless
}
```

---

## Known limitations

1. **Limitless slugs sometimes mismatch our names** — e.g. `sneasel-hisui`, `koraidon`, `weezing-galar` may not map cleanly to `POKEMON_SEED`. Unmapped slugs are logged at the end of each sync run.
2. **No nature/EVs from Limitless** — nature and stat points are derived from the closest matching competitive set in `USAGE_DATA`.
3. **Only top-8 are recorded** — `TOP_CUT = 8` in the sync script. Tournaments with fewer than 8 players with decklists may yield fewer teams.
