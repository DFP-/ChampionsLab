import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAllTeams, saveTeam } from "@/lib/db/json";
import { generateTeamId } from "@/lib/storage";
import type { SavedTeamSlot } from "@/lib/storage";

export async function GET(request: NextRequest) {
  try {
    const teams = getAllTeams();
    const result = teams.map((t) => ({
      id: t.id,
      name: t.name,
      slots: JSON.parse(t.slots) as SavedTeamSlot[],
      createdAt: t.created_at,
      updatedAt: t.updated_at,
    }));
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[Teams API GET error]", e);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slots, id } = body as {
      name: string;
      slots: SavedTeamSlot[];
      id?: string;
    };

    if (!name || !Array.isArray(slots)) {
      return new Response(JSON.stringify({ error: "Invalid team data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const teamId = id || generateTeamId();
    const result = saveTeam({
      id: teamId,
      name,
      slots: JSON.stringify(slots),
    });

    return new Response(JSON.stringify({
      id: result.id,
      name: result.name,
      slots: JSON.parse(result.slots),
      createdAt: result.created_at,
      updatedAt: result.updated_at,
    }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[Teams API POST error]", e);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
