import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { currentUser, ...data } = body;

  const post = await prisma.post.create({
    data: {
      ...data,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(post);
}

export async function GET(request) {
  const body = await request.json();
  const { userId } = body;

  let posts;

  if (userId && typeof userId === "string") {
    posts = await prisma.post.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    posts = await prisma.post.findMany({
      include: {
        user: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return res.status(200).json(posts);
}
