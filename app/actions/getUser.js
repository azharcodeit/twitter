import prisma from "lib/prismadb";
import { getCurrentUser } from "@app/actions/getCurrentUser";

export async function getUser(username) {
  "use server";
  try {
    const currentUser = await getCurrentUser();
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
    const postCount = await prisma.post.count({
      where: {
        userId: userInfo?.id,
      },
    });

    const following =
      (await prisma?.user?.findFirst({
        where: {
          username: currentUser?.username,
          followingUsers: {
            hasSome: [username],
          },
        },
      })) || false;

    if (!userInfo) {
      return null;
    }

    return {
      ...userInfo,
      followersCount,
      postCount,
      following,
      createdAt: userInfo.createdAt.toISOString(),
      updatedAt: userInfo.updatedAt.toISOString(),
      emailVerified: userInfo.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
