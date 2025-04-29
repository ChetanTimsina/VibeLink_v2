import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests (fetch users)
export async function GET(request) {
  try {
    const users = await prisma.vibeUserTable.findMany();
    return new Response(JSON.stringify(users));
  } catch (error) {
    console.error("Failed to fetch users 💀:", error);
    return new Response("Failed to fetch users", { status: 500 });
  }
}

// Handle POST requests (login & registration)
export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, password, isLogin } = body;

    // If it's a login request (isLogin flag is true)
    if (isLogin) {
      const user = await prisma.vibeUserTable.findFirst({
        where: {
          OR: [{ email }, { username }],
        },
      });

      if (!user || password !== user.password) {
        return new Response(
          JSON.stringify({ error: "Invalid credentials 🚨" }),
          { status: 401 }
        );
      }

      return new Response(JSON.stringify({ message: "Login successful 🚀" }), {
        status: 200,
      });
    }

    // If it's a registration request (isLogin flag is false or not defined)
    const existingUser = await prisma.vibeUserTable.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists 🚨" }), {
        status: 400,
      });
    }

    const newUser = await prisma.vibeUserTable.create({
      data: {
        username,
        email,
        password, // Remember: Save passwords in hashed format in production (not plain text)
      },
    });

    return new Response(
      JSON.stringify({ message: "User created successfully 🎉" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("User creation/login failed 🧨:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
