import prisma from "lib/prismadb";

export async function getPosts() {
  try {
    let posts;
    posts = await prisma.post.findMany({
      include: {
        user: true,
        comments: true,
      },
      skip: 0,
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  } catch (error) {
    return null;
  }
}
