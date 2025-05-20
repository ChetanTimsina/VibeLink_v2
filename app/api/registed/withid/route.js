import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { toastBottomRight } from "@/app/lib/toastify";

export async function POST(request) {
  try {
    const body = await request.json();
    const { id } = body;

    const userId = parseInt(id);
    if (isNaN(userId)) {
      return new Response(JSON.stringify({ error: "Invalid user ID 🧮" }), {
        status: 400,
      });
    }

    const user = await prisma.vibeUserTable.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found 🚫" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ user: user }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    toastBottomRight("Failed to fetch username 🧨:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect(); // tidy exit
  }
}
