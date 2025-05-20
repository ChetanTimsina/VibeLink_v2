import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import { toastBottomRight } from "@/app/lib/toastify";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const friendIdParam = searchParams.get("friendid");
    const friendId = parseInt(friendIdParam);

    if (isNaN(friendId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    // 👥 Fetch all posts from those friends
    const posts = await prisma.Post.findMany({
      where: {
        authorId: friendId,
      },
    });

    // 🧠 Format posts
    const formattedPosts = posts.map((post) => {
      let base64Image = null;

      if (post.postImage) {
        const buffer = Buffer.from(post.postImage);
        base64Image = buffer.toString("base64");
      }

      return {
        postid: post.postid,
        postTitle: post.postTitle,
        postDescription: post.postDescription,
        postImage: base64Image,
        postLikes: post.postLikes,
        postCreatedAt: post.createdAt,
      };
    });
    return NextResponse.json(formattedPosts);
  } catch (error) {
    toastBottomRight("🔥 Failed to fetch friends' posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
