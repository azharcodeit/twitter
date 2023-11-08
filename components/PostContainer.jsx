"use client";
import Link from "next/link";
import Image from "next/image";
import PostWrapper from "@components/PostWrapper";
import toast, { Toaster } from "react-hot-toast";
import { RiMoreLine } from "react-icons/ri";
import { GoPerson, GoBookmark } from "react-icons/go";
import { LuRepeat2 } from "react-icons/lu";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";

function PostContainer({ post, user }) {
  const { data: session, status } = useSession();
  const currentUser = session?.user;
  const [loading, setLoading] = useState(false);
  const [hasLiked, setHasLiked] = useState(post?.likedIds?.includes(currentUser?.id) || false);
  const [likeCount, setLikeCount] = useState(post?.likedIds?.length || 0);
  const LikeIcon = hasLiked ? FaHeart : FaRegHeart;
  const postId = post?.id;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const date = new Date(post?.createdAt);
  const day = date.getDate();
  const month = monthNames[date?.getMonth()];
  const formattedDate = `${day} ${month?.slice(0, 3)} `;
  const timeDifference = now - date;
  const secondsPassed = Math.floor(timeDifference / 1000);
  const minutesPassed = Math.floor(timeDifference / (1000 * 60));
  const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));

  let postedTime = "";

  if (secondsPassed < 60) {
    postedTime = secondsPassed + "s";
  } else if (minutesPassed < 60) {
    postedTime = minutesPassed + "m";
  } else if (hoursPassed < 24) {
    postedTime = hoursPassed + "h";
  } else {
    postedTime = formattedDate;
  }

  const toggleLike = useCallback(async () => {
  try {
    let request;
    setLoading(true);

    if (hasLiked) {
      request = () =>
        fetch("http://localhost:3000/api/like", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId, currentUser }),
        });
    } else {
      request = () =>
        fetch("http://localhost:3000/api/like", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId, currentUser }),
        });
    }

    const response = await request();

    if (response.ok) {
      // Request was successful
      setHasLiked((prevHasLiked) => !prevHasLiked);
      setLikeCount((prevCount) => (hasLiked ? prevCount - 1 : prevCount + 1));
      toast.success(hasLiked ? "Unliked " + user?.username : "Liked " + user?.username);
    } else {
      // Request failed, handle the error here
      toast.error(hasLiked ? "Failed to unlike" : "Failed to like");
      console.error(hasLiked ? "Unlike request failed" : "Like request failed");
    }
  } catch (error) {
    // Handle other errors (not network-related)
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
},[hasLiked, currentUser]);

  useEffect((
  ) => {}, [session?.user, status, user, post, post?.likedIds]);

  return (
    <div className='flex felx-col z-0 items-start h-14 px-4 py-3 border-darker-gray-bg border-b h-fit hover:bg-black/5 transition duration-200 cursor-pointer'>
      <div className='flex w-fit mr-3'>
        <Link href={`users/${user?.username}`}>
          {user?.profileImage ? (
            <Image
              src={user.profileImage}
              alt='avatar'
              width={40}
              height={40}
              className='border rounded-xl'
            />
          ) : (
            <GoPerson size={30} />
          )}
        </Link>
      </div>
      <div className='w-full'>
        <div className='flex justify-between h-fit row-span-1'>
          <div className='flex'>
            <h1 className='font-semibold'>{user?.name || "Name Surname"} </h1>
            <div className='flex text-slate-500 ml-1'>
              <Link href={`users/${user?.username}`}>
                <h1>@{user?.username}</h1>
              </Link>
              <span className='mx-1'> · </span>
              <h1> {postedTime} </h1>
            </div>
          </div>
          <RiMoreLine size={15} />
        </div>
        <PostWrapper postId={post?.id}>
          <div className='h-fit row-span-1'>{post?.body || "Post Text"}</div>
          {post?.image && (
            <div className='w-fit f-fit overflow-hidden mt-3'>
              <Link href={"/home"}>
                <Image
                  src={post.image}
                  alt='post'
                  height={504}
                  width={504}
                  className='rounded-xl border'
                />
              </Link>
            </div>
          )}
        </PostWrapper>
        <div className='flex justify-between  mt-2'>
          <button className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full mr-2 hover:bg-main-primary/20'>
              <FaRegComment size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>20</h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-repost-green'>
            <div className='rounded-full m-2 hover:bg-repost-green/20'>
              <LuRepeat2 size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>78</h1>
          </button>
          <button
            onClick={toggleLike}
            className='flex items-center text-secondary-text hover:text-red-like'
          >
            <div className='rounded-full m-2 hover:bg-red-like/20'>
              <LikeIcon color={hasLiked ? "#f91880" : ""} size={20} />
            </div>
            <h1 className={`mx-1 font-normal text-sm ${hasLiked ? 'text-red-like' : ''}`}>
              {likeCount}
            </h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-main-primary'>
            <div className='rounded-full m-2 hover:bg-main-primary/20'>
              <GoBookmark size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>
              {post?.bookmarkedIds?.length}
            </h1>
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
