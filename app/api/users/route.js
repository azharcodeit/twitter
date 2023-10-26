import prisma from "@lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
