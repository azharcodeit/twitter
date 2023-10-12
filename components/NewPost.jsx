import React from "react";
import Link from "next/link";
import Image from "next/image";
import Textarea from "./ui/Textarea";
import { GoPerson } from "react-icons/go";
import {MdOutlineImage, MdOutlineGifBox, MdOutlineSchedule, MdOutlineEmojiEmotions } from "react-icons/md";

function NewPost() {
  return (
    <div className='grid grid-flow-col grid-cols-10 h-14 px-4 py-3 border-darker-gray-bg border-b h-fit'>
      <div className='flex w-full'>
        <Link href={"/home"}>
          <GoPerson size={30} />
        </Link>
      </div>
      <div className='col-span-9 min-h-full'>
        <div className='flex items-center'>
          <Textarea />
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-1'>
            <button className='rounded-full hover:bg-main-primary/20 p-2'>
              <MdOutlineImage size={20} className='text-main-primary' />
            </button>
            <button className='rounded-full hover:bg-main-primary/20 p-2'>
              <MdOutlineGifBox size={20} className='text-main-primary' />
            </button>
            <button className='rounded-full hover:bg-main-primary/20 p-2'>
              <MdOutlineEmojiEmotions size={20} className='text-main-primary' />
            </button>
            <button className='rounded-full hover:bg-main-primary/20 p-2'>
              <MdOutlineSchedule size={20} className='text-main-primary' />
            </button>
          </div>
          <button className='text-white bg-main-primary rounded-3xl px-4 text-base h-9 w-fit font-semibold hover:bg-[#177cc0] transition duration-200'>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
