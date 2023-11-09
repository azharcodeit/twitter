import { NextResponse } from "next/server";
import { getUser } from "@app/actions/getUser";

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
  const notifiedUser = await getUser(username);

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
  try {
    await prisma.notification.create({
      data: {
        body: `${currentUser?.name} followed you`,
        userId: notifiedUser?.id,
      },
    });

    await prisma.user.update({
      where: {
        id: notifiedUser?.id,
      },
      data: {
        hasNotification: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
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
