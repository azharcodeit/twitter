import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const reqBody = await request.json();
  const { postId, body, currentUser } = reqBody;

  const comment = await prisma.comment.create({
    data: {
      body,
      userId: currentUser.id,
      postId,
    },
  });

  // NOTIFICATION PART START
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (post?.userId) {
      await prisma.notification.create({
        data: {
          body: "Someone replied on your tweet!",
          userId: post.userId,
        },
      });

      await prisma.user.update({
        where: {
          id: post.userId,
        },
        data: {
          hasNotification: true,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
  // NOTIFICATION PART END

  return NextResponse.json(comment);
}
