import prisma from "lib/prismadb";

export async function getUserInfo(username) {
  try {
    if (!username) {
      return null;
    }

    const userInfo = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!userInfo) {
      return null;
    }

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
