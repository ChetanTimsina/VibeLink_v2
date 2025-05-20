import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { userId, friendId } = await request.json();

    const numericUserId = Number(userId);
    const numericFriendId = Number(friendId);

    if (
      !numericUserId ||
      isNaN(numericUserId) ||
      !numericFriendId ||
      isNaN(numericFriendId)
    ) {
      return new Response(
        JSON.stringify({ error: "Invalid or missing userId or friendId" }),
        { status: 400 }
      );
    }

    // 💣 DELETE the friend request row
    const deleted = await prisma.friendList.deleteMany({
      where: {
        userId: numericFriendId, // requester
        friendId: numericUserId, // receiver (rejector)
        status: "pending",
      },
    });

    if (deleted.count === 0) {
      return new Response(
        JSON.stringify({ error: "No pending friend request found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Friend request rejected and deleted" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("[friend-request-reject]", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
