import prisma from "lib/prismadb";

export async function getPost(id) {
  "use server";
  try {
    if (!id) {
      return null;
    }

    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return null;
    }

    return {
      ...post,
    };
  } catch (error) {
    return null;
  }
}
