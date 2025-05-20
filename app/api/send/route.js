import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const { to } = await req.json();

  console.log("Sending email to:", to); // Debug: Log the email details

  try {
    // Step 1: Query the database to find the user by email
    const user = await prisma.vibeUserTable.findUnique({
      where: {
        email: to, // Make sure 'to' is the email address
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    const password = user.password; // Assuming password is stored in the DB
    const emailText = `Hi ${user.username},\n\nYour requested password is: ${password}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email in .env
        pass: process.env.EMAIL_PASS, // your app password from Google
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: "Your Requested Password",
      text: emailText,
    };

    // Step 2: Send the email
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Password sent to your email ✅" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error); // More specific error logging
    return new Response(
      JSON.stringify({ message: "Error sending email", error: error.message }),
      { status: 500 }
    );
  }
}
