"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiMoreLine } from "react-icons/ri";
import { GoPerson, GoBookmark } from "react-icons/go";
import { LuRepeat2 } from "react-icons/lu";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";

function PostContainer({user, post}) {
  let router = useRouter();
  const { hasLiked, toggleLike } = useState(false);
  const LikeIcon = hasLiked ? FaHeart : FaRegHeart;
  return (
    <div
      onClick={() => router.push("/posts", { scroll: false })}
      className='grid grid-flow-col grid-cols-10 justify-items-center items-start h-14 px-4 py-3 border-darker-gray-bg border-b h-fit hover:bg-black/5 transition duration-200 cursor-pointer'
    >
      <div className='flex w-full'>
        <Link href={"/home"}>
          {user?.profileImage ? 
          <Image
            src={user.profileImage}
            alt='avatar'
            width={40}
            height={40}
            className='border rounded-xl'
          />:
          <GoPerson size={30} />}
        </Link>
      </div>
      <div className='col-span-9 grid grid-flow-row grid-rows-8'>
        <div className='flex justify-between h-fit row-span-1'>
          <div className='flex'>
            <h1 className='font-semibold'>{user?.name || "Name Surname"} </h1>
            <div className='flex text-slate-500 ml-1'>
              <h1> @{user?.username}</h1>
              <span className='mx-1'> · </span>
              <h1> 5h </h1>
            </div>
          </div>
          <RiMoreLine size={15} />
        </div>
        <div className='h-fit row-span-1'>
          {post?.body || "Post Text"}
        </div>
        {post?.image && <div className='max-w-[504px] max-h-[504px] overflow-hidden row-span-5 mt-3'>
          <Link href={"/home"}>
            <Image
              src={post.image}
              alt='post'
              height={504}
              width={504}
              className='rounded-xl border'
            />
          </Link>
        </div>}
        <div className='flex justify-between row-span-1 mt-2'>
          <button className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full p-2 hover:bg-main-primary/20'>
              <FaRegComment size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>20</h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-repost-green'>
            <div className='rounded-full p-2 hover:bg-repost-green/20'>
              <LuRepeat2 size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>78</h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-red-like'>
            <div className='rounded-full p-2 hover:bg-red-like/20'>
              <LikeIcon color={hasLiked ? 'red' : ''} size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>450</h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-main-primary'>
            <div className='rounded-full p-2 hover:bg-main-primary/20'>
              <GoBookmark size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>5</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
