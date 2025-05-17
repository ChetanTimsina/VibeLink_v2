import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma"; // adjust path as needed

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const postIdParam = searchParams.get("postid");
    const postid = parseInt(postIdParam);

    if (isNaN(postid)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    // Find post with authorId
    const post = await prisma.post.findUnique({
      where: { postid },
      select: { authorId: true },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Find user by authorId
    const user = await prisma.vibeUserTable.findUnique({
      where: { id: post.authorId },
      select: { username: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }

    return NextResponse.json({ username: user.username });
  } catch (error) {
    console.error("🔥 Error fetching author:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
