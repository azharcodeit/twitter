import prisma from "@lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export async function GET(request) {
  if (request.query.id) {
    // Get a single user if id is provided is the query
    // api/users?id=1
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return NextResponse.status(200).json(user);
  } else {
    // Otherwise, fetch all users
    const users = await getAllUsers();
    return NextResponse.json(users);
  }
}

export async function POST(request) {
  const body = await request.json();
  const { email, name, username, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      username,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}

export async function PUT(request) {
  // Update an existing user
  const body = await request.json();
  const { id, ...updateData } = body;
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return NextResponse.json(user);
}

export async function DELETE(request) {
  const body = await request.json();
  const { id } = body;
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(user);
}
