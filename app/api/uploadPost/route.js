import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const formData = await req.formData();
  const postTitle = formData.get("postTitle");
  const authorId = parseInt(formData.get("authorId"));
  const file = formData.get("image");

  if (!postTitle || !authorId || !file) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  // 🔥🔥 This is the key part — works in App Router
  const arrayBuffer = await file.arrayBuffer(); // only works if file is `Blob`
  const buffer = Buffer.from(arrayBuffer);

  try {
    const newPost = await prisma.post.create({
      data: {
        postTitle,
        postDescription: "",
        postImage: buffer,
        authorId,
      },
    });

    return Response.json({ message: "Post uploaded", post: newPost });
  } catch (error) {
    console.error("Error saving post:", error);
    return Response.json({ error: "Failed to save post" }, { status: 500 });
  }
}
