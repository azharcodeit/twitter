import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function DELETE(request) {
  const body = await request.json();
  const { postId, currentUser } = body;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  let updatedBookmarkedIds = [...(post?.bookmarkedIds || [])];

  updatedBookmarkedIds = updatedBookmarkedIds.filter(
    (bookmarkedId) => bookmarkedId !== currentUser?.id
  );

  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      bookmarkedIds: updatedBookmarkedIds,
    },
  });

  return NextResponse.json(updatedPost);
}

export async function POST(request) {
  const body = await request.json();
  const { postId, currentUser } = body;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  let updatedBookmarkedIds = [...(post?.bookmarkedIds || [])];

  updatedBookmarkedIds.push(currentUser?.id);

  // NOTIFICATION PART START
  try {
    if (post?.userId) {
      await prisma.notification.create({
        data: {
          body: `${currentUser?.name} bookmarked your tweet`,
          userId: post?.userId,
        },
      });

      await prisma.user.update({
        where: {
          id: post?.userId,
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
  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      bookmarkedIds: updatedBookmarkedIds,
    },
  });

  return NextResponse.json(updatedPost);
}
