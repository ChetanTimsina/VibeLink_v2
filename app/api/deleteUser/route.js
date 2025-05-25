import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE user by userId (from request body)
export async function POST(req) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "Missing userId bruh 💀" },
        { status: 400 }
      );
    }

    const userIdNum = parseInt(userId);

    // Check if user exists
    const userExists = await prisma.vibeUserTable.findUnique({
      where: { id: userIdNum },
    });

    if (!userExists) {
      return NextResponse.json({ error: "User not found 💔" }, { status: 404 });
    }

    // Cascade delete user
    await prisma.vibeUserTable.delete({
      where: { id: userIdNum },
    });

    return NextResponse.json({
      success: true,
      message: "User and all their drama wiped off the map 🧼🔥",
    });
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    return NextResponse.json(
      { error: "Server blew up 😵 Check console for clues" },
      { status: 500 }
    );
  }
}
