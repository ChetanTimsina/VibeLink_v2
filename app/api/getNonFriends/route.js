import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = await req.json();
    const userIdInt = parseInt(userId, 10);

    if (isNaN(userIdInt)) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    // All relations where user is either userId or friendId
    const allRelations = await prisma.friendList.findMany({
      where: {
        OR: [{ userId: userIdInt }, { friendId: userIdInt }],
      },
      select: {
        userId: true,
        friendId: true,
      },
    });

    // Collect all friend IDs
    const friendIds = new Set();
    allRelations.forEach((relation) => {
      if (relation.userId !== userIdInt) friendIds.add(relation.userId);
      if (relation.friendId !== userIdInt) friendIds.add(relation.friendId);
    });

    friendIds.add(userIdInt); // Exclude self too

    // Get users who are NOT friends + NOT self
    const nonFriends = await prisma.vibeUserTable.findMany({
      where: {
        id: {
          notIn: Array.from(friendIds),
        },
      },
    });

    return NextResponse.json(nonFriends);
  } catch (error) {
    console.error("Error fetching non-friends:", error);
    return NextResponse.json(
      { error: "Failed to fetch non-friends" },
      { status: 500 }
    );
  }
}
