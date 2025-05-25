import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(req) {
  try {
    const { postId } = await req.json();

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const post = await prisma.post.findUnique({
      where: { postid: postId },
      select: {
        author: {
          select: {
            id: true,
            username: true,
            userImage: true,
          },
        },
      },
    });

    if (!post || !post.author) {
      return NextResponse.json(
        { error: "Post or author not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        userImage: post.author.userImage,
        author: post.author.id,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[getPostAuthor] Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
