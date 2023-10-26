"use client";
import React from "react";
import Header from "@components/Header";
import ReplyContainer from "@components/ReplyContainer";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";
import ProfileInfo from "@components/ui/ProfileInfo";
import { useRouter } from "next/navigation";
import { GoArrowLeft, GoBookmark } from "react-icons/go";
import { LuRepeat2 } from "react-icons/lu";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import Link from "next/link";

function Reply() {
  const router = useRouter();

  return (
    <div className='feed border-darker-gray-bg border-x h-max'>
      <Header>
        <div className='flex pr-4 pl-3 h-14 font-semibold text-xl justify-items-center items-center'>
          <button
            type='button'
            className='rounded-full hover:bg-darker-gray-bg mr-5 p-2'
            onClick={() => router.back()}
          >
            <GoArrowLeft size={20} />
          </button>
          <h1>Post</h1>
        </div>
      </Header>
      <div className='px-4 flex flex-col'>
        <ProfileInfo username={"Anytime fitness"} nickname={"anytimefitness"} />
        <div className='flex flex-col'>
          <div className='mt-3'>
            We don’t know who needs to hear this but 📣 YOU CAN LIFT WEIGHTS
            WITHOUT GETTING BULKY 📣
            <br />
            Today we’re breaking down bulking versus toning and the myths that
            could get in the way of results.
          </div>
          <div className='my-4 text-secondary-text'>
            <Link href='/reply' role='link'>
              <time datetime='2023-09-21T13:01:49.000Z'>
                2:01 PM · Sep 21, 2023 ·
              </time>
            </Link>{" "}
            <span className='text-main-secondary font-bold'>32.2</span> Views
          </div>
          <div className='flex justify-between h-12 border-y border-darker-gray-bg'>
            <button className='flex items-center text-secondary-text  hover:text-main-primary'>
              <div className='rounded-full p-2 hover:bg-main-primary/20'>
                <FaRegComment size={20} />
              </div>
              <h1 className='mx-3 font-normal text-sm '>20</h1>
            </button>
            <button className='flex items-center text-secondary-text hover:text-repost-green'>
              <div className='rounded-full p-2 hover:bg-repost-green/20'>
                <LuRepeat2 size={20} />
              </div>
              <h1 className='mx-3 font-normal text-sm '>78</h1>
            </button>
            <button className='flex items-center text-secondary-text hover:text-red-like'>
              <div className='rounded-full p-2 hover:bg-red-like/20'>
                <FaRegHeart size={20} />
              </div>
              <h1 className='mx-3 font-normal text-sm '>450</h1>
            </button>
            <button className='flex items-center text-secondary-text hover:text-main-primary'>
              <div className='rounded-full p-2 hover:bg-main-primary/20'>
                <GoBookmark size={20} />
              </div>
              <h1 className='mx-3 font-normal text-sm '>5</h1>
            </button>
          </div>
        </div>
      </div>
      <NewPost />
      <ReplyContainer />
      <ReplyContainer />
      {/* <PostContainer />
      <ReplyContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer /> */}
    </div>
  );
}

export default Reply;
