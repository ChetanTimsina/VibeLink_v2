// app/api/send-friend-request/route.js
import { PrismaClient } from "@prisma/client";
import { toastBottomRight } from "@/app/lib/toastify";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    let { userId, friendId } = body;

    // Convert string IDs to numbers ASAP
    userId = Number(userId);
    friendId = Number(friendId);

    if (!userId || !friendId || isNaN(userId) || isNaN(friendId)) {
      return new Response(
        JSON.stringify({
          error: "Invalid or missing userId or friendId (must be numbers)",
        }),
        { status: 400 }
      );
    }

    if (userId === friendId) {
      return new Response(
        JSON.stringify({ error: "You can't friend yourself 💀" }),
        { status: 400 }
      );
    }

    const existing = await prisma.friendList.findFirst({
      where: {
        OR: [
          { userId, friendId },
          { userId: friendId, friendId: userId },
        ],
      },
    });

    if (existing) {
      return new Response(
        JSON.stringify({ error: "Already friends or request sent" }),
        { status: 409 }
      );
    }

    const newRequest = await prisma.friendList.create({
      data: { userId, friendId, status: "pending" },
    });

    return new Response(
      JSON.stringify({
        message: "Friend request sent 📨",
        request: newRequest,
      }),
      { status: 201 }
    );
  } catch (error) {
    toastBottomRight(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
