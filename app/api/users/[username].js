import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export default async function GET(req, { params }) {
  try {
    const { username } = params;

    if (!username || typeof username !== "string") {
      throw new Error("Invalid username");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingUsers: {
          has: username,
        },
      },
    });

    return NextResponse.status(200).json({ ...existingUser, followersCount });
  } catch (error) {
    console.log(error);
    return NextResponse.status(400).end();
  }
}
