import { PrismaClient } from "@prisma/client"; // straight import
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Find the user
    const user = await prisma.vibeUserTable.findFirst({
      where: {
        username,
        password, // 😶‍🌫️ reminder: you should hash passwords later bro fr
      },
    });

    if (!user) {
      // User not found = wrong creds
      return new Response(JSON.stringify({ error: "Invalid credentials 🚨" }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Login failed 🧨:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect(); // always clean up bro
  }
}
