import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = await req.json();

    // Convert userId to integer
    const userIdInt = parseInt(userId, 10); // Convert to integer

    // Check if the conversion is successful
    if (isNaN(userIdInt)) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    // Fetch friend relations for the given userId
    const friendRelations = await prisma.friendList.findMany({
      where: { userId: userIdInt }, // Use the integer version of userId
      include: {
        friend: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    const friends = friendRelations.map((relation) => relation.friend);

    return NextResponse.json(friends);
  } catch (error) {
    console.error("Error fetching friends:", error);
    return NextResponse.json(
      { error: "Failed to fetch friends" },
      { status: 500 }
    );
  }
}
