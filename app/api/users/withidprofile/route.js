import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const formData = await req.formData();
    const userId = parseInt(formData.get("id"));
    const file = formData.get("image");

    if (!userId || !file) {
      return new Response(
        JSON.stringify({ error: "Missing userId or image file" }),
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const updatedUser = await prisma.vibeUserTable.update({
      where: { id: userId },
      data: {
        userImage: buffer,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Profile image updated successfully",
        user: {
          id: updatedUser.id,
          username: updatedUser.username,
          profileImage: "✅ Stored as Buffer",
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating profile image:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update profile image" }),
      { status: 500 }
    );
  }
}
