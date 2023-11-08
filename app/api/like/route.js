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

  let updatedLikedIds = [...(post.likedIds || [])];

  updatedLikedIds = updatedLikedIds.filter(
    (likedId) => likedId !== currentUser?.id
  );

  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      likedIds: updatedLikedIds,
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

  let updatedLikedIds = [...(post?.likedIds || [])];

  updatedLikedIds.push(currentUser?.id);

  // NOTIFICATION PART START
  // try {
  //   const post = await prisma.post.findUnique({
  //     where: {
  //       id: postId,
  //     },
  //   });

  //   if (post?.userId) {
  //     await prisma.notification.create({
  //       data: {
  //         body: "Someone liked your tweet!",
  //         userId: post.userId,
  //       },
  //     });

  //     await prisma.user.update({
  //       where: {
  //         id: post.userId,
  //       },
  //       data: {
  //         hasNotification: true,
  //       },
  //     });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  // NOTIFICATION PART END
  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      likedIds: updatedLikedIds,
    },
  });

  return NextResponse.json(updatedPost);
}
