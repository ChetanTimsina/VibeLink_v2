import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { postid } = body;

    if (!postid || typeof postid !== "number") {
      return NextResponse.json({ error: "Invalid postid 🫠" }, { status: 400 });
    }

    const updatedPost = await prisma.post.update({
      where: { postid },
      data: {
        postLikes: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      message: "Liked the post 💖",
      post: updatedPost,
    });
  } catch (err) {
    console.error("💀 Error updating postLikes:", err);
    return NextResponse.json(
      { error: "Server broke down 💥" },
      { status: 500 }
    );
  }
}
