import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { toastBottomRight } from "@/app/lib/toastify";

export async function POST(request) {
  try {
    const { userId } = await request.json();
    const numericUserId = Number(userId);

    if (!numericUserId || isNaN(numericUserId)) {
      return new Response(
        JSON.stringify({ error: "Invalid or missing userId" }),
        { status: 400 }
      );
    }

    // Fetch all friend requests where the user is the recipient & it's pending
    const requests = await prisma.friendList.findMany({
      where: {
        friendId: numericUserId,
        status: "pending",
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            userImage: true,
          },
        },
      },
    });

    return new Response(JSON.stringify({ requests }), {
      status: 200,
    });
  } catch (error) {
    toastBottomRight("[get-friend-requests]", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
