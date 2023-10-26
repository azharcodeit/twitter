'use client'
import Link from "next/link";
import Image from "next/image";
import Textarea from "./ui/Textarea";
import Button from "@components/Button";
import { GoPerson } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import {
  MdOutlineImage,
  MdOutlineGifBox,
  MdOutlineSchedule,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { useState, useCallback } from "react";


function NewPost({currentUser}) {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (event) => setBody(event.target.value);

  const handlePost = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUser, body
        }),
      });

      if (res.ok) {
        setBody("")
        toast.success('Tweet created');
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    } finally {
      setLoading(false)
    }
  },[body]);
  return (
    <div className='grid grid-flow-col grid-cols-10 h-14 px-4 py-3 border-darker-gray-bg border-b h-fit'>
      <div className='flex w-full'>
        <Link href={"/home"}>
          {currentUser?.profileImage ? (
            <div className='overflow-hidden rounded-full border-[#ffffff]'>
              <Image
                src={currentUser.profileImage}
                className='scale-125'
                alt='twitter'
                width={40}
                height={40}
              />
            </div>
          ) : (
            <GoPerson size={35} color='gray' />
          )}
        </Link>
      </div>
      <div className='col-span-9 min-h-full'>
        <div className='flex items-center'>
          <Textarea onChange={onChange} value={body}/>
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
          <>
              <Button
                small
                onClick={handlePost}
                label={"Post"}
              />
              <Toaster />
            </>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
