import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { toastBottomRight } from "@/app/lib/toastify";

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

    // Update the friend request status to "accepted"
    const updated = await prisma.friendList.updateMany({
      where: {
        userId: numericFriendId, // requester
        friendId: numericUserId, // receiver (acceptor)
        status: "pending",
      },
      data: {
        status: "accepted",
      },
    });

    if (updated.count === 0) {
      return new Response(
        JSON.stringify({ error: "No pending friend request found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Friend request accepted" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    toastBottomRight("[friend-request-accept]", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
