import prisma from "@lib/prismadb";
import { getCurrentUser } from "@app/actions/getCurrentUser";

export async function getFollowingUsersPosts() {
  try {
    const currentUser = await getCurrentUser();
    console.log("Current User:", currentUser);

    const users = await Promise.all(
      currentUser.followingUsers.map(async (user) => {
        const foundUsers = await prisma.user.findMany({
          where: {
            username: user,
          },
        });
        console.log("Found Users:", foundUsers);
        return foundUsers[0]; // Assuming username is unique
      })
    );

    const posts = await Promise.all(
      users.map(async (user) => {
        return prisma.post.findMany({
          where: {
            userId: user.id, // Assuming user.id is the correct field
          },
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      })
    );
    console.log("Posts:", posts);

    return posts;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
