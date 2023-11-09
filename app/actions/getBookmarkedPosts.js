import prisma from "lib/prismadb";
import { getCurrentUser } from "@app/actions/getCurrentUser";

export async function getBookmarkedPosts() {
  "use server";
  try {
    const currentUser = await getCurrentUser();

    const posts = prisma.post.findMany({
      where: {
        bookmarkedIds: {
          hasSome: [currentUser?.id],
        },
      },
    });
    return posts;
  } catch (error) {
    console.error("Error:", error);
  }
}
