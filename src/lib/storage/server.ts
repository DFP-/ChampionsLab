import type { SavedTeam, SavedTeamSlot } from "../storage";

const API = "";
const MIGRATION_KEY = "champions-lab:migrated-to-server";

function jsonHeaders(): Record<string, string> {
  return { "Content-Type": "application/json" };
}

function getLocalStorageTeams(): SavedTeam[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("champions-lab:teams");
    if (!raw) return [];
    return JSON.parse(raw) as SavedTeam[];
  } catch {
    return [];
  }
}

function isMigrationDone(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(MIGRATION_KEY) === "true";
}

function markMigrationDone(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(MIGRATION_KEY, "true");
  }
}

async function serverAvailable(): Promise<boolean> {
  try {
    const res = await fetch(`${API}/api/teams`, { method: "HEAD", cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

let _serverCache: boolean | null = null;

export async function getSavedTeams(): Promise<SavedTeam[]> {
  if (_serverCache === null) {
    _serverCache = await serverAvailable();
  }

  if (!_serverCache) {
    // Server unavailable — fall back to localStorage cache
    return getLocalStorageTeams();
  }

  // Migrate localStorage teams to server on first access
  if (!isMigrationDone()) {
    await migrateLocalStorageTeams();
  }

  const res = await fetch(`${API}/api/teams`, { headers: jsonHeaders() });
  if (!res.ok) return [];
  return res.json() as Promise<SavedTeam[]>;
}

async function migrateLocalStorageTeams(): Promise<void> {
  const localTeams = getLocalStorageTeams();
  if (localTeams.length === 0) {
    markMigrationDone();
    return;
  }

  // Upsert each local team to the server
  for (const team of localTeams) {
    try {
      await fetch(`${API}/api/teams`, {
        method: "POST",
        headers: jsonHeaders(),
        body: JSON.stringify({ name: team.name, slots: team.slots, id: team.id }),
      });
    } catch {
      // Server may not be reachable yet — skip silently
    }
  }

  markMigrationDone();
}

export async function saveTeam(
  name: string,
  slots: SavedTeamSlot[],
  existingId?: string
): Promise<SavedTeam> {
  if (_serverCache === null) {
    _serverCache = await serverAvailable();
  }

  if (!_serverCache) {
    // Server unavailable — save to localStorage cache
    const teams = getLocalStorageTeams();
    const now = Date.now();
    const serialized: SavedTeamSlot[] = slots;

    if (existingId) {
      const idx = teams.findIndex((t) => t.id === existingId);
      if (idx >= 0) {
        teams[idx] = { ...teams[idx], name, slots: serialized, updatedAt: now };
        if (typeof window !== "undefined") {
          localStorage.setItem("champions-lab:teams", JSON.stringify(teams));
        }
        return { ...teams[idx], id: teams[idx].id, name, slots: serialized, createdAt: teams[idx].createdAt, updatedAt: now };
      }
    }

    const team: SavedTeam = {
      id: `team-${now}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      slots: serialized,
      createdAt: now,
      updatedAt: now,
    };
    teams.push(team);
    if (typeof window !== "undefined") {
      localStorage.setItem("champions-lab:teams", JSON.stringify(teams));
    }
    return team;
  }

  const body: { name: string; slots: SavedTeamSlot[]; id?: string } = { name, slots };
  if (existingId) body.id = existingId;

  const res = await fetch(`${API}/api/teams`, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Failed to save team");
  return res.json() as Promise<SavedTeam>;
}

export async function deleteTeam(id: string): Promise<void> {
  if (_serverCache === null) {
    _serverCache = await serverAvailable();
  }

  if (!_serverCache) {
    // Server unavailable — delete from localStorage cache
    const teams = getLocalStorageTeams().filter((t) => t.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem("champions-lab:teams", JSON.stringify(teams));
    }
    return;
  }

  await fetch(`${API}/api/teams/${encodeURIComponent(id)}`, { method: "DELETE" });
}
