import React from "react";
import Link from "next/link";
import Image from "next/image";
import Textarea from "./ui/Textarea";

function NewPost() {
  return (
    <div className='grid grid-flow-col grid-cols-10 h-14 px-4 py-3 border-b h-fit'>
      <div className='flex h-full w-full col-span-1'>
        <Link href={"/home"}>
          <Image
            src={"/assets/icons/profile.svg"}
            alt='twitter'
            width={40}
            height={40}
            className='border rounded-xl'
          />
        </Link>
      </div>
      <div className='col-span-9 min-h-full'>
        <div className='flex items-center'>
        <Textarea/>
        </div>
        <div className="flex justify-between items-center">
          <div className='flex gap-x-3'>
            <Link href={"/home"} className='flex items-center'>
              <Image
                src={"/assets/icons/media.svg"}
                alt='post'
                width={15}
                height={15}
              />
            </Link>
            <Link href={"/home"} className='flex items-center'>
              <Image
                src={"/assets/icons/gif.svg"}
                alt='post'
                width={15}
                height={15}
              />
            </Link>
            <Link href={"/home"} className='flex items-center'>
              <Image
                src={"/assets/icons/smile.svg"}
                alt='post'
                width={15}
                height={15}
              />
            </Link>
            <Link href={"/home"} className='flex items-center'>
              <Image
                src={"/assets/icons/schedule.svg"}
                alt='post'
                width={15}
                height={15}
              />
            </Link>
          </div>
          <button className='text-white bg-main-primary rounded-3xl px-4 text-base h-9 w-fit font-semibold'>Post</button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
