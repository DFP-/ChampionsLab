import type { NextRequest } from "next/server";
import { getTeam, deleteTeam, setActiveTeam, getActiveTeam } from "@/lib/db/json";

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

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Team ID required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    if (!body.setActive) {
      return new Response(JSON.stringify({ error: "Missing setActive flag" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = setActiveTeam(id);
    if (!result) {
      return new Response(JSON.stringify({ error: "Team not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({
      id: result.id,
      name: result.name,
      slots: JSON.parse(result.slots),
      createdAt: result.created_at,
      updatedAt: result.updated_at,
      is_active: result.is_active,
    }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[Teams API PATCH [id]] error", e);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
