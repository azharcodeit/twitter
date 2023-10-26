import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export async function DELETE(request) {
  const body = await request.json();
  const { username, currentUser } = body;

  const user = await prisma.user.findFirst({
    where: {
      id: currentUser?.id,
    },
  });

  if (!user) {
    throw new Error("Invalid username");
  }

  let updatedFollowingUsers = [...(user.followingUsers || [])];

  updatedFollowingUsers = updatedFollowingUsers.filter(
    (followingUser) => followingUser !== username
  );
  const updatedUser = await prisma.user.update({
    where: {
      id: currentUser?.id,
    },
    data: {
      followingUsers: updatedFollowingUsers,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function POST(request) {
  const body = await request.json();
  const { username, currentUser } = body;

  const user = await prisma.user.findFirst({
    where: {
      id: currentUser?.id,
    },
  });

  if (!user) {
    throw new Error("Invalid username");
  }

  let updatedFollowingUsers = [...(user.followingUsers || [])];

  updatedFollowingUsers.push(username);
  // NOTIFICATION PART START
  // const notification = await prisma.notification.create({
  //   data: {
  //     body: "Someone followed you!",
  //     username,
  //   },
  // });

  // const notifyUser = await prisma.user.update({
  //   where: {
  //     username: username,
  //   },
  //   data: {
  //     hasNotification: true,
  //   },
  // });
  // NOTIFICATION PART END

  const updatedUser = await prisma.user.update({
    where: {
      id: currentUser?.id,
    },
    data: {
      followingUsers: updatedFollowingUsers,
    },
  });

  return NextResponse.json(updatedUser);
}
