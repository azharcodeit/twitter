import prisma from "lib/prismadb";
import { getCurrentUser } from "@app/actions/getCurrentUser";

export async function getFollowingUsersPosts() {
  "use server";
  try {
    const currentUser = await getCurrentUser();

    const usernames = currentUser?.followingUsers;
    const posts = [];

    for (const username of usernames) {
      const users = await prisma.user.findMany({
        where: {
          username: username,
        },
      });

      for (const user of users) {
        const userPosts = await prisma.post.findMany({
          where: {
            userId: user.id,
          },
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        posts.push(...userPosts);
      }
    }

    return posts;
  } catch (error) {
    console.error("Error:", error);
  }
}
