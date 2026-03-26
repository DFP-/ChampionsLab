-- Champions Lab — Supabase Schema
-- Run this in the Supabase SQL Editor to set up the database

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  display_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Seasons table
create table public.seasons (
  id serial primary key,
  name text not null,
  start_date date not null,
  end_date date,
  rules jsonb default '[]'::jsonb,
  is_active boolean default false,
  created_at timestamptz default now()
);

-- Pokémon seed data
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

-- User saved teams
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

-- Meta teams (admin-curated from tournaments)
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

-- Usage stats snapshots
create table public.usage_stats (
  id serial primary key,
  season integer references public.seasons(id),
  pokemon_id integer references public.pokemon_seed(id),
  usage_rate real,
  win_rate real,
  snapshot_date date default current_date,
  created_at timestamptz default now()
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.teams enable row level security;
alter table public.meta_teams enable row level security;
alter table public.seasons enable row level security;
alter table public.pokemon_seed enable row level security;
alter table public.usage_stats enable row level security;

-- Policies: anyone can read public data
create policy "Public profiles are viewable by everyone"
  on public.profiles for select using (true);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Anyone can view seasons"
  on public.seasons for select using (true);

create policy "Anyone can view pokemon"
  on public.pokemon_seed for select using (true);

create policy "Anyone can view meta teams"
  on public.meta_teams for select using (true);

create policy "Anyone can view usage stats"
  on public.usage_stats for select using (true);

create policy "Users can view own teams"
  on public.teams for select using (auth.uid() = user_id or is_public = true);

create policy "Users can create teams"
  on public.teams for insert with check (auth.uid() = user_id);

create policy "Users can update own teams"
  on public.teams for update using (auth.uid() = user_id);

create policy "Users can delete own teams"
  on public.teams for delete using (auth.uid() = user_id);

-- Indexes for performance
create index idx_teams_user_id on public.teams(user_id);
create index idx_teams_season on public.teams(season);
create index idx_pokemon_seed_season on public.pokemon_seed(season);
create index idx_pokemon_seed_dex on public.pokemon_seed(dex_number);
create index idx_usage_stats_season on public.usage_stats(season);
create index idx_meta_teams_season on public.meta_teams(season);
