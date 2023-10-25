"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Avatar from "@components/profile/Avatar";
import Button from "@components/Button";
import { TfiLocationPin } from "react-icons/tfi";
import { LiaCalendar } from "react-icons/lia";
import { useState, useCallback } from "react";

// import useEditModal from "@/hooks/useEditModal";

function Bio({ fetchedUser, currentUser, followingInit }) {
  // const editModal = useEditModal();
  const { username } = fetchedUser;
  const dateString = fetchedUser?.createdAt;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const formattedDate = `${month} ${year}`;
  const [isFollowing, setIsFollowing] = useState(followingInit);
  const [loading, setLoading] = useState(false);

  const toggleFollow = useCallback(async () => {
    setLoading(true);
    try {
      let request;

      if (isFollowing) {
        request = () =>
          fetch("http://localhost:3000/api/follow", {
            method: "DELETE", // Use "DELETE" as the HTTP method for a DELETE request
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              currentUser,
            }),
          })
            .then((response) => {
              if (response.ok) {
                // Request was successful
                toast.success(
                  isFollowing
                    ? "Unfollowed " + username
                    : "Followed " + username
                );
                console.log("Delete request was successful");
              } else {
                // Request failed, handle the error here
                console.error("Delete request failed");
              }
            })
            .catch((error) => {
              // Handle network errors here
              console.error("Network error:", error);
            });
        setIsFollowing(false);
      } else {
        request = () =>
          fetch("http://localhost:3000/api/follow", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              currentUser,
            }),
          })
            .then((response) => {
              if (response.ok) {
                // Request was successful
                toast.success(
                  isFollowing
                    ? "Unfollowed " + username
                    : "Followed " + username
                );
                console.log("Post request was successful");
              } else {
                // Request failed, handle the error here
                console.error("Post request failed");
              }
            })
            .catch((error) => {
              // Handle network errors here
              console.error("Network error:", error);
            });
        setIsFollowing(true);
      }

      await request();
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }, [currentUser, isFollowing]);
  
  return (
    <div className='p-4 w-full'>
      <div className='flex flex-row justify-between '>
        <Avatar user={fetchedUser} />

        <div>
          {currentUser?.username === fetchedUser?.username ? (
            <Button
              outline
              label='Edit profile'
              small
              // onClick={editModal.onOpen}
            />
          ) : (
            <>
              <Button
                small
                secondary={!isFollowing}
                onClick={toggleFollow}
                outline={isFollowing}
                label={
                  loading ? (
                    <Loader2 className='animate-spin w-4 h-4' />
                  ) : isFollowing ? (
                    "Following"
                  ) : (
                    "Follow"
                  )
                }
              />
              <Toaster />
            </>
          )}
        </div>
      </div>
      <div className='mt-1 mb-3'>
        <h1 className='font-semibold text-xl'>{fetchedUser?.name || "Name"}</h1>
        <p className='text-gray-text'>@{fetchedUser?.username}</p>
      </div>
      <div className='mb-3'>{fetchedUser?.bio || "This is a profile bio"}</div>
      <div className='flex text-gray-text mb-3'>
        {fetchedUser?.location && (
          <div className='flex items-center mr-3'>
            <TfiLocationPin size={18} className='mr-1 text-gray-text' />{" "}
            <h1>London</h1>
          </div>
        )}
        <div className='flex items-center'>
          <LiaCalendar size={20} className='mr-1' />{" "}
          <h1>Joined on {formattedDate}</h1>
        </div>
      </div>
      <div className='flex items-center text-gray-text text-sm mb-5'>
        <div className='mr-3'>
          <span className='text-main-secondary font-bold'>{fetchedUser?.followingUsers?.length}</span> Following
        </div>
        <div>
          <span className='text-main-secondary font-bold'>{fetchedUser?.followersCount || 0}</span> Followers
        </div>
      </div>
    </div>
  );
}

export default Bio;