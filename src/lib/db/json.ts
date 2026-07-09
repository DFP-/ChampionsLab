import { join } from "path";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";

const DATA_DIR = join(process.cwd(), "data");
const TEAMS_FILE = join(DATA_DIR, "teams.json");

interface StoredTeam {
  id: string;
  name: string;
  slots: string;
  created_at: number;
  updated_at: number;
  is_active?: boolean;
}

function ensureDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readTeams(): StoredTeam[] {
  ensureDir();
  if (!existsSync(TEAMS_FILE)) return [];
  try {
    const raw = readFileSync(TEAMS_FILE, "utf-8");
    return JSON.parse(raw) as StoredTeam[];
  } catch {
    return [];
  }
}

function writeTeams(teams: StoredTeam[]) {
  ensureDir();
  writeFileSync(TEAMS_FILE, JSON.stringify(teams, null, 0), "utf-8");
}

export interface TeamRow {
  id: string;
  name: string;
  slots: string;
  created_at: number;
  updated_at: number;
  is_active?: boolean;
}

export function getAllTeams(): TeamRow[] {
  const teams = readTeams();
  return teams.sort((a, b) => b.updated_at - a.updated_at);
}

export function getTeam(id: string): TeamRow | undefined {
  const teams = readTeams();
  return teams.find((t) => t.id === id);
}

export function getActiveTeam(): TeamRow | undefined {
  const teams = readTeams();
  return teams.find((t) => t.is_active === true);
}

function setActiveFlag(teams: StoredTeam[], id: string, active: boolean): void {
  for (const team of teams) {
    if (active) {
      team.is_active = team.id === id;
    } else if (team.id === id) {
      team.is_active = false;
    }
  }
}

export function saveTeam(data: {
  id: string;
  name: string;
  slots: string;
  createdAt?: number;
}): TeamRow {
  const teams = readTeams();
  const now = Date.now();

  const idx = teams.findIndex((t) => t.id === data.id);
  if (idx >= 0) {
    teams[idx] = { ...teams[idx], name: data.name, slots: data.slots, updated_at: now };
  } else {
    teams.push({
      id: data.id,
      name: data.name,
      slots: data.slots,
      created_at: data.createdAt ?? now,
      updated_at: now,
    });
  }

  writeTeams(teams);
  return teams.find((t) => t.id === data.id)!;
}

export function deleteTeam(id: string): boolean {
  const teams = readTeams();
  const filtered = teams.filter((t) => t.id !== id);
  if (filtered.length === teams.length) return false;
  writeTeams(filtered);
  return true;
}

export function setActiveTeam(id: string): TeamRow | null {
  const teams = readTeams();
  const target = teams.find((t) => t.id === id);
  if (!target) return null;

  setActiveFlag(teams, id, true);
  writeTeams(teams);
  return teams.find((t) => t.id === id)!;
}
