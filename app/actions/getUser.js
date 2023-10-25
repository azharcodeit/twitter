import prisma from "lib/prismadb";

export async function getUser(username) {
  try {
    if (!username) {
      return null;
    }

    const userInfo = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    const followersCount = await prisma.user.count({
      where: {
        followingUsers: {
          has: username,
        },
      },
    });

    if (!userInfo) {
      return null;
    }

    return {
      ...userInfo,
      followersCount,
      createdAt: userInfo.createdAt.toISOString(),
      updatedAt: userInfo.updatedAt.toISOString(),
      emailVerified: userInfo.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
