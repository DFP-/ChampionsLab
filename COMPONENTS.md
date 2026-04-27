# Champions Lab — Components Guide

> Catalog of reusable UI components, their props, and usage patterns.

---

## shadcn/ui Primitives (`src/components/ui/`)

These are the base building blocks, installed via `shadcn/ui` CLI. They use `@base-ui/react` (Radix successor) for accessibility and are styled with Tailwind CSS.

| Component | File | Description |
|:---|:---|:---|
| **Badge** | `badge.tsx` | Small status/tag indicator |
| **Button** | `button.tsx` | Primary action button with variants (default, destructive, outline, ghost, link) |
| **Card** | `card.tsx` | Content container with header, content, footer slots |
| **Dialog** | `dialog.tsx` | Modal overlay (used for Pokémon detail, confirmations) |
| **Input** | `input.tsx` | Text input field |
| **ScrollArea** | `scroll-area.tsx` | Custom scrollable container |
| **Separator** | `separator.tsx` | Horizontal/vertical divider |
| **Sheet** | `sheet.tsx` | Slide-out panel (mobile-friendly alternative to dialog) |
| **Tabs** | `tabs.tsx` | Tabbed content switcher |
| **Tooltip** | `tooltip.tsx` | Hover tooltip with delay |

All primitives accept standard props plus `className` for Tailwind overrides. They support `asChild` for polymorphic rendering.

---

## Application Components (`src/components/`)

### Navbar (`navbar.tsx`)
Fixed top navigation bar with responsive breakpoints.

**Features:**
- **Desktop (≥1140px)**: All nav items + Support button + Language selector
- **Tablet (800–1139px)**: Primary 3 items in bar, rest in hamburger menu
- **Mobile (<800px)**: Hamburger menu with all items
- Pure HTML hamburger button with inline script (works before React hydration)
- Active route highlighting
- Google Analytics tracking on all nav clicks

**Nav Items:**
```ts
const NAV_ITEMS = [
  { href: "/",         i18nKey: "nav.pokedex",     icon: Grid3X3 },
  { href: "/team-builder", i18nKey: "nav.teamBuilder", icon: Users },
  { href: "/battle-bot",   i18nKey: "nav.battleBot",   icon: Swords },
  { href: "/meta",         i18nKey: "nav.meta",        icon: TrendingUp },
  { href: "/events",       i18nKey: "nav.tournaments", icon: CalendarDays },
  { href: "/learn",        i18nKey: "nav.pokeSchool",  icon: GraduationCap },
  { href: "/about",        i18nKey: "nav.about",       icon: Heart },
];
```

---

### PokemonCard (`pokemon-card.tsx`)
Grid card displayed in the Pokédex.

**Props:**
```ts
interface PokemonCardProps {
  pokemon: ChampionsPokemon;
  onClick: (p: ChampionsPokemon) => void;
  index: number;  // For staggered animation delay
}
```

**Features:**
- Sprite image with type-colored border glow
- Type badges with color coding
- Tier badge (S/A/B/C/D)
- Generation indicator
- Mega Evolution sparkle indicator
- Hover scale animation
- Click tracking

---

### PokemonDetailModal (`pokemon-detail-modal.tsx`)
Full-screen modal with detailed Pokémon information.

**Props:**
```ts
interface PokemonDetailModalProps {
  pokemon: ChampionsPokemon | null;
  onClose: () => void;
}
```

**Tabs:**
1. **Stats** — Base stat bars with BST, tier ranking, usage rate
2. **Moves** — Categorized move list (physical/special/status) with descriptions
3. **Abilities** — All abilities with descriptions (hidden marked)
4. **Usage** — Competitive set presets from `usage-data.ts`
5. **Teams** — Real tournament teams featuring this Pokémon

---

### TeamTester (`team-tester.tsx`)
Battle simulation UI used on the `/battle-bot` page.

**Features:**
- Iteration count selector (100–10000)
- Opponent pool selector (meta / tournament / random / all)
- Run simulation button with progress indicator
- Results display: win rate, wins/losses, common weaknesses
- Best lead combinations
- Strategy tips (translated)
- Matchup breakdown table
- Save results to localStorage

---

### DamageCalculator (`damage-calculator.tsx`)
Standalone damage calculation widget.

**Features:**
- Attacker/defender Pokémon selection
- Move selector with category filter
- Weather, terrain, screen toggles
- Real-time damage range display
- OHKO/2HKO probability
- Type effectiveness indicator
- Modifier breakdown (ability, item, crit, etc.)

---

### SearchSelect (`search-select.tsx`)
Autocomplete dropdown for Pokémon/move/ability/item selection.

**Props:**
```ts
interface SearchSelectProps {
  options: SearchSelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}
```

**Used in:**
- Team builder (Pokémon selection)
- Team builder (move selection)
- Team builder (ability/item/nature selection)
- Damage calculator (attacker/defender)

---

### SeasonTabs (`season-tabs.tsx`)
Season selector with rules display.

**Props:**
```ts
interface SeasonTabsProps {
  seasonId: number;
}
```

**Features:**
- Season button tabs
- Expandable rules panel
- Format explanation (Bring 6 Pick 4, SP system, etc.)

---

### LastUpdated (`last-updated.tsx`)
Changelog modal that appears on every page.

**Features:**
- "What's New" button triggers modal
- Dated entries with emoji-prefixed bullet points
- `SHARED_ENTRIES` array at top of file — **must be updated after every user-facing change**
- Tracks: UI changes, bug fixes, new features, data updates, engine improvements, i18n additions

**Example entry:**
```ts
{ date: "2026-04-27", changes: [
  "✨ Added new Mega Evolution support",
  "🐛 Fixed stat calculation bug",
  "🌍 Added Spanish translations for abilities",
]}
```

---

### LanguageSelector (`language-selector.tsx`)
Language switcher dropdown.

**Features:**
- Dropdown with flag icons
- Supported: English 🇬🇧, French 🇫🇷, Spanish 🇪🇸
- Stores preference in `localStorage` + cookie
- Updates `document.documentElement.lang`
- Mobile variant with full-width styling

---

### ThemeToggle (`theme-toggle.tsx`)
Light/dark mode toggle button.

**Features:**
- Fixed bottom-right position
- Sun/moon icon swap
- Stores preference in `localStorage`
- Applies `.dark` class to `<html>`
- Smooth transition animation

---

### LazyParticles (`lazy-particles.tsx`)
Background particle effect.

**Features:**
- Loads after initial paint (lazy)
- Floating Pokéball-shaped particles
- Subtle opacity animation
- Respects `prefers-reduced-motion`

---

## Page Components (`src/app/*/page.tsx`)

### HomePage (`src/app/page.tsx`) — Pokédex (~566 lines)
**State:**
- `activeSeason` — Currently selected season
- `searchQuery` — Text search
- `selectedTypes` — Type filter toggles
- `selectedGens` — Generation filter toggles
- `showMegaOnly` — Mega filter toggle
- `sortBy` — Sort option (name/dex/tier/stats)
- `statFilters` — Min stat threshold sliders
- `selectedPokemon` — Currently open modal Pokémon

**Computed:**
- `filteredPokemon` — `useMemo` with all filters + search + sort applied

**Sections:**
1. Hero header with logo, title, countdown timer
2. Engine promotion banner
3. Pokémon Champions release countdown
4. Season rules info
5. Search & filter bar
6. Filter panel (types, generations, mega, stats)
7. Results grid (`PokemonCard`)
8. Empty state
9. Detail modal (`PokemonDetailModal`)

---

### TeamBuilder (`src/app/team-builder/page.tsx`) — ~2837 lines
The most complex page in the app.

**State:**
- `slots` — 6 `TeamSlot` objects
- `activeSlotIndex` — Currently editing slot
- `teamName` — Team name
- `suggestions` — AI teammate suggestions
- `analysis` — Synergy analysis results
- `showShareModal` / `showSaveModal` / `showLoadModal`
- `showdownPaste` — Showdown export text

**Features:**
- 6-slot grid with drag-and-drop reordering (via `@dnd-kit`)
- Per-slot Pokémon selector with sprite
- Move selector (up to 4 moves with drag reorder)
- Ability selector
- Nature selector
- Item selector
- Tera Type selector
- SP distribution sliders (66 total, max 32 per stat)
- Mega Evolution toggle
- Real-time synergy analysis panel
- AI suggestions panel
- Coverage chart (type effectiveness matrix)
- Prebuilt team templates
- Save/load/delete teams (localStorage)
- Share via URL (compressed) or QR code
- Showdown import/export
- PDF export

---

### BattleBot (`src/app/battle-bot/page.tsx`)
Battle simulator interface.

**Features:**
- Team input (select from saved/prebuilt or custom)
- Simulation config (iterations, opponent pool)
- `TeamTester` component for running sims
- Strategy tree display
- Battle log viewer
- Replay viewer

---

### MetaPage (`src/app/meta/page.tsx`)
Meta analysis dashboard.

**Features:**
- Pokémon ranking table (ELO, usage, win rate)
- Tier distribution chart
- Core pairs visualization
- Archetype matchup matrix
- Tournament team browser
- Meta trend graphs

---

### LearnPage (`src/app/learn/page.tsx`)
PokéSchool educational hub.

**Features:**
- VGC rules explanation
- Role guides (sweeper, wall, pivot, support)
- Strategy fundamentals
- Format-specific tips
- Language-aware content (`learn-sections-es.ts`, `learn-sections-fr.ts`)

---

### EventsPage (`src/app/events/page.tsx`)
Tournament calendar.

**Features:**
- Event list from `vgc-events.ts`
- Limitless integration for live tournaments
- Date filtering
- Event detail cards

---

### AboutPage (`src/app/about/page.tsx`)
About & contact.

**Features:**
- Project story
- Team credits
- Contact form (POST to `/api/contact`)
- Donation link (Buy Me a Coffee)
- Social links (Discord, GitHub)

---

## Styling Patterns

### Tailwind + CSS Variables
The app uses Tailwind CSS v4 with CSS variables for theming:

```css
/* Light mode (default) */
:root {
  --background: oklch(0.985 0.002 250);
  --foreground: oklch(0.14 0.01 260);
  --primary: oklch(0.55 0.22 270);
  /* ... */
}

/* Dark mode */
.dark {
  --background: oklch(0.13 0.02 250);
  --foreground: oklch(0.9 0.01 250);
  /* ... */
}
```

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.dark .glass {
  background: rgba(14, 21, 40, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.08);
}
```

### Type Colors
Every type has a consistent color mapped in `src/lib/types.ts`:
```ts
const TYPE_COLORS: Record<PokemonType, string> = {
  fire: "#f08030",
  water: "#6890f0",
  // ...
};
```

Used for:
- Type badge backgrounds
- Card border glows
- Stat bar colors
- Filter button colors

### Glow Effects
```css
.glow-red { box-shadow: 0 4px 16px rgba(239, 68, 68, 0.12); }
.glow-blue { box-shadow: 0 4px 16px rgba(59, 130, 246, 0.12); }
/* etc. — enhanced in dark mode */
```

### Responsive Breakpoints
- Mobile: < 800px
- Tablet: 800–1139px
- Desktop: ≥ 1140px
- Wide: ≥ 1730px (team builder 3-column layout)

Custom breakpoint in Tailwind config:
```css
@theme inline {
  --breakpoint-desktop: 1140px;
}
```

---

## Component Guidelines

When building new components:

1. **Use shadcn/ui primitives** when possible
2. **Accept `className` prop** for Tailwind overrides
3. **Use `cn()` utility** for conditional classes: `cn("base", condition && "active", className)`
4. **Track user interactions** with `trackEvent()` for analytics
5. **Support i18n** — never hardcode strings, always use `useI18n().t()`
6. **Support dark mode** — use CSS variables, not hardcoded colors
7. **Respect `prefers-reduced-motion`** — disable animations for accessibility
8. **Keep components focused** — one component, one responsibility

---

*Last updated: 2026-04-27*
