import prisma from "lib/prismadb";

export async function getPosts() {
  try {
    let posts;
    posts = await prisma.post.findMany({
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
