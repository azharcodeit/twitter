import prisma from "lib/prismadb";

export async function getUsers() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
}
