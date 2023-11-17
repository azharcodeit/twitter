import prisma from "lib/prismadb";
import { getCurrentUser } from "@app/actions/getCurrentUser";

export async function getNotifications() {
  try {
    const currentUser = await getCurrentUser();

    const notifications = await prisma.notification.findMany({
      where: {
        userId: currentUser?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    await prisma.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        hasNotification: false,
      },
    });
    return notifications;
  } catch (error) {
    console.error("Error:", error);
  }
}
