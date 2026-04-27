# Champions Lab — Architecture Guide

> How the codebase is organized, how data flows, and the key architectural decisions.

---

## Directory Structure

```
ChampionsLab/
├── src/
│   ├── app/                    # Next.js App Router (pages + API routes)
│   │   ├── page.tsx            # Pokédex (home page)
│   │   ├── layout.tsx          # Root layout (fonts, theme, i18n, analytics)
│   │   ├── globals.css         # Tailwind + custom CSS (light/dark themes)
│   │   ├── team-builder/
│   │   │   └── page.tsx        # Team Builder (client component, ~2800 lines)
│   │   ├── battle-bot/
│   │   │   └── page.tsx        # Battle simulator UI
│   │   ├── meta/
│   │   │   └── page.tsx        # Meta analysis dashboard
│   │   ├── learn/
│   │   │   └── page.tsx        # PokéSchool (educational content)
│   │   ├── events/
│   │   │   └── page.tsx        # Tournament events calendar
│   │   ├── about/
│   │   │   └── page.tsx        # About & contact form
│   │   ├── paste/
│   │   │   └── page.tsx        # Team paste importer
│   │   └── api/
│   │       ├── contact/route.ts       # POST contact form → Gmail (nodemailer)
│   │       ├── share/route.ts         # POST create shareable team link
│   │       └── share/[id]/route.ts    # GET retrieve shared team
│   │
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # shadcn/ui primitives (button, card, dialog, tabs, etc.)
│   │   ├── navbar.tsx          # Fixed navigation bar (responsive: desktop/tablet/mobile)
│   │   ├── pokemon-card.tsx    # Pokédex grid card
│   │   ├── pokemon-detail-modal.tsx  # Full Pokémon detail popup
│   │   ├── team-tester.tsx     # Battle simulation runner UI
│   │   ├── damage-calculator.tsx     # Standalone damage calc widget
│   │   ├── search-select.tsx   # Autocomplete search dropdown
│   │   ├── season-tabs.tsx     # Season selector + rules display
│   │   ├── last-updated.tsx    # Changelog modal (appears on every page)
│   │   ├── language-selector.tsx     # Language switcher dropdown
│   │   ├── theme-toggle.tsx    # Light/dark mode toggle
│   │   ├── lazy-particles.tsx  # Background particle effect
│   │   └── ...
│   │
│   └── lib/                    # Core logic, data, and engine
│       ├── engine/             # Battle simulation engine
│       │   ├── index.ts        # Public API barrel export
│       │   ├── battle-sim.ts   # Monte Carlo VGC battle simulator (~3500 lines)
│       │   ├── damage-calc.ts  # Full Gen 9 damage formula
│       │   ├── stat-calc.ts    # SP → actual stats calculator
│       │   ├── type-chart.ts   # Type effectiveness matrix
│       │   ├── move-data.ts    # 242+ moves database
│       │   ├── ability-data.ts # 200+ abilities database
│       │   ├── items.ts        # Held items database
│       │   ├── natures.ts      # Nature modifiers
│       │   ├── synergy.ts      # Team synergy analysis
│       │   ├── suggestions.ts  # AI teammate/set/move suggestions
│       │   ├── team-generator.ts     # Auto-generate balanced teams
│       │   ├── generated-teams.ts    # 40+ prebuilt meta teams
│       │   ├── strategy-tree.ts      # Strategy tree generator
│       │   ├── strategy-i18n.ts      # Strategy translations (EN/FR)
│       │   ├── strategy-i18n-es.ts   # Strategy translations (ES)
│       │   ├── ml-runner.ts          # ELO simulation runner
│       │   ├── vgc-data.ts           # Tournament usage stats & teams
│       │   └── picker-roles.ts       # Role-based team composition
│       │
│       ├── i18n/               # Internationalization
│       │   ├── index.tsx       # I18n React context + useI18n hook
│       │   ├── en.json         # English UI strings
│       │   ├── fr.json         # French UI strings
│       │   ├── es.json         # Spanish UI strings
│       │   ├── pokemon-names.{fr,es}.json
│       │   ├── moves.{fr,es}.json
│       │   ├── abilities.{fr,es}.json
│       │   ├── items.{fr,es}.json
│       │   ├── natures.{fr,es}.json
│       │   ├── move-descriptions.{en,fr,es}.json
│       │   ├── ability-descriptions.{en,fr,es}.json
│       │   └── item-descriptions.{en,fr,es}.json
│       │
│       ├── pokemon-data.ts     # Full roster: 147 Pokémon (~2.9 MB)
│       ├── usage-data.ts       # Competitive set presets per Pokémon
│       ├── simulation-data.ts  # Tournament team data for sims
│       ├── winning-teams.ts    # Real winning teams from tournaments
│       ├── types.ts            # Shared TypeScript interfaces
│       ├── storage.ts          # localStorage persistence layer
│       ├── analytics.ts        # Google Analytics event tracking
│       ├── sprite-url.ts       # Sprite URL resolution logic
│       ├── export-pdf.ts       # PDF generation for teams
│       ├── fetch-events.ts     # Tournament data fetching
│       ├── vgc-events.ts       # VGC event definitions
│       ├── learn-sections*.ts  # Educational content per language
│       ├── mega-utils.ts       # Mega Evolution helpers
│       ├── motion.tsx          # Framer Motion re-export + variants
│       └── utils.ts            # General utilities (cn, etc.)
│
├── public/                     # Static assets
│   ├── sprites/                # Pokémon sprites (PNG, ~1000+ files)
│   ├── logo.png
│   ├── icon-192.png / icon-512.png
│   └── ...
│
├── scripts/                    # Data processing & maintenance scripts (80+ files)
│   ├── add-new-pokemon*.mjs    # Add new Pokémon to roster
│   ├── audit-*.ts/mjs/cjs      # Data validation & auditing
│   ├── fill-*.cjs              # Fill simulation/tournament data
│   ├── fix-*.mjs/ts/py         # Data correction scripts
│   ├── download-sprites.sh     # Sprite download automation
│   └── ...
│
├── supabase/
│   └── schema.sql              # PostgreSQL schema (profiles, teams, seasons, usage_stats)
│
├── next.config.ts              # Next.js config (images, headers, TS ignore)
├── tsconfig.json               # TypeScript config
├── package.json
├── components.json             # shadcn/ui configuration
└── ... (README, CONTRIBUTING, DEPLOYMENT, etc.)
```

---

## Routing

Next.js 16 App Router. All pages are client components (`"use client"`) except the root layout.

| Route | File | Description |
|:---|:---|:---|
| `/` | `src/app/page.tsx` | Pokédex — filterable Pokémon grid |
| `/team-builder` | `src/app/team-builder/page.tsx` | Interactive 6-Pokémon team builder |
| `/battle-bot` | `src/app/battle-bot/page.tsx` | Battle simulator & team tester |
| `/meta` | `src/app/meta/page.tsx` | Meta rankings & tournament data |
| `/events` | `src/app/events/page.tsx` | Tournament calendar |
| `/learn` | `src/app/learn/page.tsx` | VGC educational content |
| `/about` | `src/app/about/page.tsx` | About page + contact form |
| `/paste` | `src/app/paste/page.tsx` | Import teams from Showdown paste |
| `/api/contact` | `src/app/api/contact/route.ts` | POST form → Gmail via nodemailer |
| `/api/share` | `src/app/api/share/route.ts` | POST/GET shared team links |

---

## Data Flow

### Pokémon Data
```
PokeAPI / Bulbapedia data
    ↓
scripts/ (fetch-pokemon.mjs, etc.)
    ↓
src/lib/pokemon-data.ts  (~2.9 MB, 147 Pokémon)
    ↓
All pages/components read from POKEMON_SEED
```

### Battle Engine
```
Team slots (user input or prebuilt)
    ↓
battle-sim.ts: createBattlePokemon() → BattleState
    ↓
AI decision engine: evaluateMoveOption() per Pokémon
    ↓
damage-calc.ts: calculateDamage() (Gen 9 formula)
    ↓
Turn resolution → battle log → results
```

### Meta Rankings
```
ml-runner.ts: runMLSimulation()
    ↓
Simulate 1000s of battles between generated/prebuilt teams
    ↓
ELO ratings per team & Pokémon
    ↓
vgc-data.ts: Tournament data merged with sim results
    ↓
Meta page displays combined rankings
```

### Team Sharing
```
Team Builder → serializeTeam() → compress with pako
    ↓
Client: copy URL with base64 payload
    OR
    POST to /api/share → 6-char ID → shareable link
    ↓
Recipient: decompress → deserializeTeam() → restore
```

---

## Key Architectural Decisions

### 1. Static Data Over API
All Pokémon, move, ability, and item data is baked into TypeScript files (`pokemon-data.ts`, `move-data.ts`, etc.). No runtime API calls needed for core data. This eliminates latency and ensures the app works offline after initial load.

### 2. Client-Side Battle Engine
The entire battle simulator runs in the browser. No server needed for simulations. This scales infinitely (each user simulates on their own device) and keeps the project free to host.

### 3. Local Storage First, Supabase Optional
Teams are saved to `localStorage` by default. Supabase schema exists for future user accounts, but the app is fully functional without login.

### 4. SP System Instead of EVs
Champions format uses **Stat Points** (0-32 per stat, 66 total) instead of traditional EVs. The engine and UI are built entirely around this system. Showdown EV conversion exists for import/export.

### 5. Monte Carlo Simulation for Meta
Instead of relying solely on tournament results (which are sparse early in a format), the app runs millions of simulated battles to generate statistically significant meta rankings.

### 6. Inline Scripts for Critical UI
The mobile hamburger menu uses a pure HTML button with an inline `<script>` in `layout.tsx`. This ensures the menu works instantly before React hydrates, eliminating hydration mismatch issues.

### 7. Theme Toggle Without Flicker
A small inline script in `<head>` reads `localStorage` and applies the dark class before any paint happens, preventing flash-of-wrong-theme.

### 8. TypeScript Build Errors Ignored (Intentionally)
```ts
// next.config.ts
 typescript: { ignoreBuildErrors: true }
```
Next.js 16's Turbopack TS checker OOMs on this project (even with 16GB RAM). Types are verified via standalone `npx tsc --noEmit --skipLibCheck`.

---

## Component Patterns

### shadcn/ui Primitives
All UI primitives live in `src/components/ui/` and follow the shadcn/ui pattern:
- Built on `@base-ui/react` (Radix successor)
- Styled with Tailwind + CSS variables
- Composable, accessible, uncontrolled by default

### Framer Motion
All page-level animations use Framer Motion via `src/lib/motion.tsx` (a re-export with custom variants). Common patterns:
- `initial={{ opacity: 0, y: -10 }}` → `animate={{ opacity: 1, y: 0 }}`
- Staggered children with delay increments
- `AnimatePresence` for mount/unmount animations

### Custom Hooks
- `useI18n()` — Access translation context
- `usePathname()` — Next.js navigation (for active nav states)

---

## State Management

No global state library (Redux, Zustand, etc.). State is managed via:
- **React `useState` / `useReducer`** — Component-local state
- **`useMemo`** — Computed filtered/sorted lists
- **`useCallback`** — Event handlers
- **`localStorage`** — Persistent user data (teams, settings)
- **React Context** — I18n locale only

---

## Security

### Headers (next.config.ts)
All routes include security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera/mic/geolocation disabled)
- `Strict-Transport-Security` (HSTS)

### Environment Variables
- `GMAIL_USER` / `GMAIL_APP_PASSWORD` — Contact form SMTP
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Database (optional)
- VPS credentials stored in `~/Downloads/` (never committed)

---

## Performance Considerations

- **Static generation** — All pages are statically generated at build time
- **Image optimization** — Sprites served from external CDN; Next.js Image component with `unoptimized` for local sprites
- **Code splitting** — Large engine files are only loaded on pages that need them
- **Pako compression** — Share links are ~1/10th the size of raw JSON
- **Lazy particles** — Background effect loads after initial paint

---

*Last updated: 2026-04-27*
