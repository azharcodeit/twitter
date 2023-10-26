import prisma from "lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function GET(res) {
  try {
    const session = await getServerSession(authOptions);

    const currentUser = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return res.status(200).json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
