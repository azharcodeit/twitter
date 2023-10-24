"use client";
import toast, { Toaster } from "react-hot-toast";
import useUser from "@/hooks/useUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import Avatar from "@components/profile/Avatar";
import Button from "@components/Button";
import { TfiLocationPin } from "react-icons/tfi";
import { LiaCalendar } from "react-icons/lia";

function Bio({ user }) {
  const { data: fetchedUser } = useUser(user);
  const { data: currentUser } = useCurrentUser();
  // const editModal = useEditModal();
  const dateString = user?.createdAt;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const formattedDate = `${month} ${year}`;
  // const { isFollowing, toggleFollow } = useFollow(user);

  return (
    <div className='p-4 w-full'>
      <div className='flex flex-row justify-between '>
        <Avatar user={user} />
        <div>
          {currentUser?.username == fetchedUser?.username ? (
            //  <Button outline label='Edit profile' small onClick={editModal.onOpen} />
            <>
              <Button
                outline
                label='Edit profile'
                small
                onClick={() => {
                  toast.success("Successfully toasted!");
                }}
              />
              <Toaster />
            </>
          ) : (
            <Button
              // onClick={toggleFollow}
              // label={isFollowing ? 'Unfollow' : 'Follow'}
              label={"Follow"}
              // secondary={!isFollowing}
              // outline={isFollowing}
              small
            />
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
          <span className='text-main-secondary font-bold'>2</span> Following
        </div>
        <div>
          <span className='text-main-secondary font-bold'>2</span> Followers
        </div>
      </div>
    </div>
  );
}

export default Bio;
