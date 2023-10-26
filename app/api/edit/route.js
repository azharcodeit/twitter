import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export default async function PUT(request) {
  // Update an existing user
  const body = await request.json();
  const { id, name, username, bio, profileImage, coverImage } = body;
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name,
      username,
      bio,
      profileImage,
      coverImage,
    },
  });
  return NextResponse.json(user);
}
