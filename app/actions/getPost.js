import prisma from "lib/prismadb";

export async function getPost(id) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        comments: true,
      },
    });

    return post;
  } catch (error) {
    return null;
  }
}
