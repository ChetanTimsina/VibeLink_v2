import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { toastBottomRight } from "@/app/lib/toastify";

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
            username: true,
            userImage: true, // 👈 added this line
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
      },
      { status: 200 }
    );
  } catch (err) {
    toastBottomRight("[getPostAuthor] Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
