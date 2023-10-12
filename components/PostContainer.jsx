"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiMoreLine } from "react-icons/ri";

function PostContainer() {
  let router = useRouter();
  return (
    <div
      onClick={() => router.push("/reply", { scroll: false })}
      className='grid grid-flow-col grid-cols-10 justify-items-center items-start h-14 px-4 py-3 border-darker-gray-bg border-b h-fit hover:bg-black/5 transition duration-200 cursor-pointer'
    >
      <div className='flex w-full'>
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
      <div className='col-span-9 grid grid-flow-row grid-rows-8'>
        <div className='flex justify-between h-fit row-span-1'>
          <div className='flex'>
            <h1 className='font-semibold'>Sky News </h1>
            <div className='flex text-slate-500 ml-1'>
              <h1> @skynews</h1>
              <span className='mx-1'> · </span>
              <h1> 5h </h1>
            </div>
          </div>
          <RiMoreLine size={15} />
        </div>
        <div className='h-fit row-span-1'>
          BREAKING: Government refuses to guarantee second leg of HS2 to
          Manchester
        </div>
        <div className='max-w-[504px] max-h-[504px] overflow-hidden row-span-5 mt-3'>
          <Link href={"/home"}>
            <Image
              src={"/assets/images/post.jpg"}
              alt='post'
              height={504}
              width={504}
              className='rounded-xl'
            />
          </Link>
        </div>
        <div className='flex justify-between row-span-1 mt-3'>
          <Link href={"/home"} className='flex items-center'>
            <Image
              src={"/assets/icons/reply.svg"}
              alt='post'
              width={15}
              height={15}
            />
            <h1 className='mx-3 font-normal text-slate-500 text-sm'>20</h1>
          </Link>
          <Link href={"/home"} className='flex items-center'>
            <Image
              src={"/assets/icons/repost.svg"}
              alt='post'
              width={17}
              height={15}
            />
            <h1 className='mx-3 font-normal text-slate-500 text-sm'>78</h1>
          </Link>
          <Link href={"/home"} className='flex items-center'>
            <Image
              src={"/assets/icons/like.svg"}
              alt='post'
              width={15}
              height={15}
            />
            <h1 className='mx-3 font-normal text-slate-500 text-sm'>450</h1>
          </Link>
          <Link href={"/home"} className='flex items-center'>
            <Image
              src={"/assets/icons/share.svg"}
              alt='post'
              width={15}
              height={15}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
