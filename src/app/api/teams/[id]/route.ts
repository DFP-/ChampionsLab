import type { NextRequest } from "next/server";
import { getTeam, deleteTeam } from "@/lib/db/json";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Team ID required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const team = getTeam(id);
    if (!team) {
      return new Response(JSON.stringify({ error: "Team not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({
      id: team.id,
      name: team.name,
      slots: JSON.parse(team.slots),
      createdAt: team.created_at,
      updatedAt: team.updated_at,
    }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[Teams API GET [id]] error", e);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Team ID required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deleted = deleteTeam(id);
    if (!deleted) {
      return new Response(JSON.stringify({ error: "Team not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[Teams API DELETE [id]] error", e);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
