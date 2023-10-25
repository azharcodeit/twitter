import { getCurrentUser } from "@app/actions/getCurrentUser";
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
