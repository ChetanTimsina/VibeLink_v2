import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = await req.json();
    const userIdInt = parseInt(userId, 10);

    if (isNaN(userIdInt)) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    // Get list of friend IDs for the user
    const friendRelations = await prisma.friendList.findMany({
      where: { userId: userIdInt },
      select: { friendId: true },
    });

    const friendIds = friendRelations.map((relation) => relation.friendId);

    // Add current user's own ID to the exclusion list
    const excludedIds = [...friendIds, userIdInt];

    // Find users who are not friends and not the current user
    const nonFriends = await prisma.vibeUserTable.findMany({
      where: {
        id: {
          notIn: excludedIds,
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
