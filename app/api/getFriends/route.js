import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = await req.json();
    const userIdInt = parseInt(userId, 10);

    if (isNaN(userIdInt)) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    // Get all accepted friends where user is either the sender or receiver
    const acceptedFriends = await prisma.friendList.findMany({
      where: {
        status: "accepted",
        OR: [{ userId: userIdInt }, { friendId: userIdInt }],
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            userImage: true,
            story: true,
          },
        },
        friend: {
          select: {
            id: true,
            username: true,
            userImage: true,
            story: true,
          },
        },
      },
    });

    // Normalize the friend (get the person who is NOT the user)
    const friends = acceptedFriends.map((relation) => {
      return relation.userId === userIdInt ? relation.friend : relation.user;
    });

    return NextResponse.json(friends);
  } catch (error) {
    console.error("Error fetching friends:", error);
    return NextResponse.json(
      { error: "Failed to fetch friends" },
      { status: 500 }
    );
  }
}
