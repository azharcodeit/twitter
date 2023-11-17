import prisma from "lib/prismadb";

export async function getUserById(id) {
  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return {
      ...userInfo,
      createdAt: userInfo.createdAt.toISOString(),
      updatedAt: userInfo.updatedAt.toISOString(),
      emailVerified: userInfo.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
