import prisma from "@lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { Prisma } from "@prisma/client";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
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
  try {
    const body = await request.json();
    const { email, name, username, password } = body;
    console.log("PARAMETERS ARE: ", email, name, username, password);

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("HASHED PASSWORD IS: ", hashedPassword);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
        hashedPassword,
      },
    });
    console.log("CREATED SUCCESSFULLY");
    return NextResponse.json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log("ERROR OCCURED");
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        console.log("SPECIFIC P2002 ERROR OCCURED");
        console.log(
          "[NURBEK] There is a unique constraint violation, a new user cannot be created with this email"
        );
        return NextResponse.json(
          {
            message: "This e-mail is already taken.",
          },
          {
            status: 409,
          }
        );
      }
    }
    return { error: { message: error.message } };
  }
}

export async function PUT(request) {
  // Update an existing user
  const body = await request.json();
  const { id, ...updateData } = body;
  const user = await prisma.user.update({
    where: {
      id: id,
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
