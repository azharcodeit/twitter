import prisma from "@/lib/prismadb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { username } = req.query;

    if (!username || typeof username !== "string") {
      throw new Error("Invalid username");
    }

    const existingUser = await prisma.user.findUnique({
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

    return res.status(200).json({ ...existingUser, followersCount });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
