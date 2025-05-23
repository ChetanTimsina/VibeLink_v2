// app/api/getPosts/route.js or route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const authorId = parseInt(searchParams.get("authorId"));

  if (!authorId) {
    return Response.json({ error: "Missing authorId" }, { status: 400 });
  }

  try {
    const posts = await prisma.post.findMany({
      where: {
        authorId,
      },
    });

    return Response.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
