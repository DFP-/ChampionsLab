# Champions Lab — API & Backend Guide

> Backend routes, database schema, and external integrations.

---

## API Routes (`src/app/api/`)

All API routes use Next.js App Router route handlers.

### POST `/api/contact`
**File:** `src/app/api/contact/route.ts`

Sends contact form submissions via Gmail (nodemailer).

**Request:**
```http
POST /api/contact
Content-Type: multipart/form-data

name=John+Doe
email=john@example.com
type=feedback
message=Love+the+app!
image=<optional File>
```

**Validation:**
- Name, email, message are required
- Email must match `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- Message max 5000 characters
- Image max 5MB (optional)

**Response:**
```json
{ "success": true, "message": "Thanks for your message! We'll get back to you soon." }
```

**Error Responses:**
- `400` — Missing fields, invalid email, message too long, image too large
- `500` — SMTP error

**Environment Variables:**
```
GMAIL_USER=<gmail address>
GMAIL_APP_PASSWORD=<app-specific password>
```

---

### POST `/api/share`
**File:** `src/app/api/share/route.ts`

Creates a shareable team link with a short 6-character ID.

**Request:**
```http
POST /api/share
Content-Type: application/json

{ "s": [ /* serialized team slots */ ] }
```

**Response:**
```json
{ "id": "aB3x9K" }
```

**Storage:**
- Teams stored in `data/shared-teams.json` (file-based, no database required)
- Each entry: `{ id: { data, created: timestamp } }`
- IDs are 6 characters: `A-Z`, `a-z`, `0-9`

---

### GET `/api/share/[id]`
**File:** `src/app/api/share/[id]/route.ts`

Retrieves a shared team by ID.

**Request:**
```http
GET /api/share/aB3x9K
```

**Response:**
```json
{ "s": [ /* serialized team slots */ ] }
```

**Error Responses:**
- `404` — Team not found
- `500` — Server error

---

## Database (Supabase)

The app uses **Supabase** (PostgreSQL) with Row Level Security (RLS) enabled.

### Schema (`supabase/schema.sql`)

#### `public.profiles`
Extends Supabase Auth users.
```sql
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  display_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

#### `public.seasons`
Tournament seasons with rules.
```sql
create table public.seasons (
  id serial primary key,
  name text not null,
  start_date date not null,
  end_date date,
  rules jsonb default '[]'::jsonb,
  is_active boolean default false,
  created_at timestamptz default now()
);
```

#### `public.pokemon_seed`
Pokémon data (mirrors `src/lib/pokemon-data.ts`).
```sql
create table public.pokemon_seed (
  id serial primary key,
  dex_number integer not null,
  name text not null,
  types text[] not null,
  base_stats jsonb not null,
  abilities jsonb not null,
  moves jsonb not null,
  sprite text,
  official_art text,
  generation integer,
  forms jsonb default '[]'::jsonb,
  has_mega boolean default false,
  recruitment_cost integer,
  home_compatible boolean default true,
  home_source text[],
  season integer not null default 1,
  tier text,
  usage_rate real,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

#### `public.teams`
User-saved teams.
```sql
create table public.teams (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  name text not null default 'My Team',
  slots jsonb not null default '[]'::jsonb,
  format text default 'doubles',
  season integer references public.seasons(id),
  is_public boolean default false,
  pokepaste text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

#### `public.meta_teams`
Admin-curated tournament teams.
```sql
create table public.meta_teams (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  player_name text,
  tournament text,
  placement integer,
  slots jsonb not null,
  season integer references public.seasons(id),
  source_url text,
  created_at timestamptz default now()
);
```

#### `public.usage_stats`
Usage rate snapshots per season.
```sql
create table public.usage_stats (
  id serial primary key,
  season integer references public.seasons(id),
  pokemon_id integer references public.pokemon_seed(id),
  usage_rate real,
  win_rate real,
  snapshot_date date default current_date,
  created_at timestamptz default now()
);
```

### Row Level Security Policies

| Table | Policy | Rule |
|:---|:---|:---|
| `profiles` | Select | Public |
| `profiles` | Update | Own profile only (`auth.uid() = id`) |
| `seasons` | Select | Public |
| `pokemon_seed` | Select | Public |
| `meta_teams` | Select | Public |
| `usage_stats` | Select | Public |
| `teams` | Select | Own teams OR public teams |
| `teams` | Insert | Own user only |
| `teams` | Update | Own user only |
| `teams` | Delete | Own user only |

### Indexes
```sql
create index idx_teams_user_id on public.teams(user_id);
create index idx_teams_season on public.teams(season);
create index idx_pokemon_seed_season on public.pokemon_seed(season);
create index idx_pokemon_seed_dex on public.pokemon_seed(dex_number);
create index idx_usage_stats_season on public.usage_stats(season);
create index idx_meta_teams_season on public.meta_teams(season);
```

---

## External Integrations

### Google Analytics
- Tracking ID: `G-NVYVM8YJZN`
- Implemented via inline script in `layout.tsx`
- Events tracked via `src/lib/analytics.ts`

**Tracked Events:**
| Action | Category | When |
|:---|:---|:---|
| `nav_click` | `navigation` | Clicking nav items |
| `pokemon_click` | `pokedex` | Clicking Pokémon card |
| `filter_type` | `pokedex` | Toggling type filter |
| `filter_gen` | `pokedex` | Toggling generation filter |
| `support_click` | `engagement` | Clicking support button |

### Buy Me a Coffee
- Link: `https://buymeacoffee.com/championslab`
- Opens in new tab from navbar

### Discord
- Invite: `https://discord.gg/WShMRRSrtm`
- Linked from countdown banner and about page

### Limitless TCG
- Tournament data sync for events calendar
- `scripts/sync-limitless-tournaments.ts`
- `scripts/daily-limitless-sync.sh` (cron)

### PokeAPI
- Sprite fallback CDN
- `https://raw.githubusercontent.com/PokeAPI/sprites/**`

### Custom Sprite CDN
- Primary sprite source
- `https://champions-lab-sprites.nbg1.your-objectstorage.com/sprites/**`

---

## Environment Variables

```bash
# Required for contact form
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Optional - for Supabase features
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Not in code - VPS deployment credentials
# Stored in ~/Downloads/vps.txt and ~/Downloads/vpsaddress.txt
```

---

## Hosting & Deployment

### VPS Setup
- **OS**: Linux (systemd)
- **Service**: `championslab.service`
- **Path**: `/srv/championslab/`
- **Build**: Built locally on Mac, rsynced to VPS
- **RAM constraint**: ~750MB free — building on VPS causes OOM kills

See `DEPLOYMENT.md` for the full step-by-step guide.

### CDN
- Static assets served via Cloudflare
- Sprite images from custom object storage

---

*Last updated: 2026-04-27*
