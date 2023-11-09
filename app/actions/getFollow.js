import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import prisma from "@lib/prismadb";

export default function getFollow(username, currentUser, following) {
  const [isFollowing, setIsFollowing] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleFollow = useCallback(async () => {
    setLoading(true);

    try {
      let updatedFollowingUsers = [...(currentUser?.followingUsers || [])];

      if (following === false) {
        updatedFollowingUsers.push(username);

        // NOTIFICATION PART START
        await prisma.notification.create({
          data: {
            body: "Someone followed you!",
            username,
          },
        });

        await prisma.user.update({
          where: {
            username,
          },
          data: {
            hasNotification: true,
          },
        });
        // NOTIFICATION PART END

        await prisma.user.update({
          where: {
            username: currentUser?.username,
          },
          data: {
            followingUsers: updatedFollowingUsers,
          },
        });
      } else {
        updatedFollowingUsers = updatedFollowingUsers.filter(
          (followingUser) => followingUser !== username
        );
        await prisma.user.update({
          where: {
            username: currentUser?.username,
          },
          data: {
            followingUsers: updatedFollowingUsers,
          },
        });
      }

      setIsFollowing(!following);
    } catch (error) {
      toast.error("An error occurred while following/unfollowing.");
      console.error("Error in useFollow:", error);
    } finally {
      setLoading(false);
    }
  }, [following, username, prisma]);

  return {
    isFollowing,
    toggleFollow,
    loading,
  };
}
