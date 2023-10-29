import prisma from "lib/prismadb";

export async function getPostsByUserId(userId) {
  try {
    let posts;
    posts = await prisma.post.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts;
  } catch (error) {
    return null;
  }
}
