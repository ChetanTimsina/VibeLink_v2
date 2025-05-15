import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "../../lib/prisma";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("vibeUser")?.value;

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const numericUserId = parseInt(userId);
    if (isNaN(numericUserId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const posts = await prisma.post.findMany({
      where: { authorId: numericUserId },
    });

    // 🧠 Convert Uint8Array to base64 properly
    const formattedPosts = posts.map((post) => {
      let base64Image = null;

      if (post.postImage) {
        const buffer = Buffer.from(post.postImage); // 👈 turn Uint8Array to Buffer
        base64Image = buffer.toString("base64"); // 👈 now base64 will work
      }

      return {
        postid: post.postid,
        postTitle: post.postTitle,
        postDescription: post.postDescription,
        postImage: base64Image,
      };
    });

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error("🔥 Failed to fetch images:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
