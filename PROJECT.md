# Champions Lab — Project Overview

> **A free, open-source competitive companion for Pokémon Champions 2026.**
> Built with love by fans, for fans. 100% free. Zero ads. Open source. Forever.

---

## What Is This?

Champions Lab is a full-stack web application that serves as the ultimate competitive companion for **Pokémon Champions 2026** (a new VGC-style competitive format). It combines a Pokédex, interactive team builder, Monte Carlo battle simulator, meta analysis dashboard, tournament tracker, and educational hub — all in one immersive web experience.

The project is built by competitive Pokémon fans and is entirely **MIT licensed**, with no monetization, no ads, and no paywalls.

---

## Live Site

**[championslab.xyz](https://championslab.xyz)**

---

## Key Features

### 📖 Pokédex (`/`)
- Browse **147 competition-legal Pokémon** (136 base + 11 regional forms)
- Full stats, abilities, move pools, tier rankings (S/A/B/C/D)
- Filter by type, generation, tier, Mega Evolution status
- Detailed modal with Stats, Moves, Abilities, Usage, and Teams tabs
- Real-time search across names, moves, abilities, types
- Base stat filters with sliders (HP, Atk, Def, SpA, SpD, Spe, BST)
- Season-aware roster (Regulation M-A, Season M-1)

### 🧩 Team Builder (`/team-builder`)
- Interactive team creation for up to 6 Pokémon
- **SP (Stat Points) system**: 66 total SP per Pokémon, max 32 per stat
- Move, ability, nature, item, and Tera Type selection
- AI-powered teammate suggestions and set recommendations
- Synergy analysis: role coverage, type overlaps, core pair detection
- Save/load/share teams (compressed URLs + QR codes)
- Showdown import/export (EV ↔ SP conversion)
- PDF export
- Prebuilt team templates from real tournaments

### ⚔️ Battle Engine (`/battle-bot`)
- Monte Carlo doubles battle simulator with VGC-realistic AI
- **2,000,000+ simulated battles** powering meta rankings
- 242+ moves, 200+ abilities, items, weather, terrain, Trick Room, Tailwind
- Mega Evolution and Tera Type support
- Turn-by-turn battle logs and replays
- 40+ curated meta teams and randomized opponents
- Strategy tree generation with translated insights
- ML-inspired ELO ranking system for teams and Pokémon

### 📊 Meta Analysis (`/meta`)
- ML-powered Pokémon rankings with ELO and win rates
- Tournament data from 250+ real competitive results
- Core pair analysis from simulation and tournament history
- Archetype matchups and move win-rate analysis
- Meta trend predictions

### 🎓 PokéSchool (`/learn`)
- VGC ruleset education (Doubles, Bring 6 Pick 4, Team Preview)
- Role guides: sweeper, wall, pivot, support
- Strategy fundamentals for the Champions format

### 📅 Events (`/events`)
- Tournament calendar and event tracking
- Integration with Limitless TCG for tournament data

### 💬 About (`/about`)
- Project story, team, and contact form
- Donation support (Buy Me a Coffee)

---

## Tech Stack

| Technology | Version | Purpose |
|:---|:---|:---|
| [Next.js](https://nextjs.org/) | 16.2.1 | App Router, SSR, static generation |
| [React](https://react.dev/) | 19.2.4 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | End-to-end type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations & transitions |
| [shadcn/ui](https://ui.shadcn.com/) | 4.x | Accessible component primitives |
| [Supabase](https://supabase.com/) | — | PostgreSQL database, auth (RLS enabled) |
| [Node.js](https://nodejs.org/) | 18+ | Runtime |

### Key Dependencies
- `@dnd-kit/core` / `@dnd-kit/sortable` — Drag and drop
- `pako` — Compression for share links
- `qrcode` — QR code generation
- `jspdf` — PDF export
- `nodemailer` — Contact form email delivery
- `lucide-react` — Icons
- `zod` — Validation
- `@supabase/supabase-js` / `@supabase/ssr` — Database client

---

## Project Philosophy

1. **Free forever** — No ads, no paywalls, no premium tiers
2. **Open source** — MIT licensed, every line is readable
3. **Community-driven** — Contributions welcome from developers, players, designers, translators
4. **Data-first** — Real tournament data + millions of simulated battles = accurate meta
5. **Accessible** — Multi-language support (English, French, Spanish), dark mode, responsive design

---

## Repository

- **GitHub**: [Andrew21P/ChampionsLab](https://github.com/Andrew21P/ChampionsLab)
- **License**: MIT
- **Status**: Alpha (actively developed)

---

## Quick Start

```bash
# Clone
git clone https://github.com/Andrew21P/ChampionsLab.git
cd ChampionsLab

# Install
npm install

# Dev server
npm run dev        # → http://localhost:3000

# Production build
npm run build
npm start
```

---

## Existing Documentation

| File | Purpose |
|:---|:---|
| `README.md` | Project intro, features, quick start |
| `CONTRIBUTING.md` | How to contribute code, translations, bug reports |
| `DEPLOYMENT.md` | Step-by-step VPS deployment guide (build locally, rsync, restart) |
| `AGENTS.md` | Agent rules: Next.js breaking changes, end-of-task verification, changelog updates |

---

*Last updated: 2026-04-27*
