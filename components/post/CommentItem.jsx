"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { RiMoreLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { getPostedTime } from "@utils";
import { useCallback } from 'react';

function CommentItem({ data }) {
  const router = useRouter();

  const goToUser = useCallback((e) => {
    e.stopPropagation();

    router.push(`/users/${data.user.username}`)
  }, [router, data.user.username]);

  const postedTime = getPostedTime(data?.createdAt);
  return (
    // <div className='flex pl-3 h-14 items-center border-darker-gray-bg border-b'>
    //     <div>{data?.body}</div>
    // </div>
    <div className='flex felx-col z-0 items-start h-14 px-4 py-3 border-darker-gray-bg border-b h-fit hover:bg-black/5 transition duration-200 cursor-pointer'>
      <div className='flex w-fit mr-3'>
        <div onClick={goToUser}>
          {data?.user?.profileImage ? (
            <Image
              src={data?.user?.profileImage}
              alt='avatar'
              width={40}
              height={40}
              className='border rounded-xl'
            />
          ) : (
            <GoPerson size={30} />
          )}
        </div>
      </div>
      <div className='w-full'>
        <div className='flex justify-between h-fit row-span-1'>
          <div className='flex'>
            <h1 className='font-twitter-chirp-bold'>
              {data?.user?.name || "Name Surname"}{" "}
            </h1>
            <div className='flex text-slate-500 ml-1'>
              <Link href={`users/${data?.user?.username}`}>
                <h1>@{data?.user?.username}</h1>
              </Link>
              <span className='mx-1'> · </span>
              <h1> {postedTime} </h1>
            </div>
          </div>
          <RiMoreLine size={15} />
        </div>
        <div className='h-fit row-span-1'>{data?.body || "Post Text"}</div>
      </div>
    </div>
  );
}

export default CommentItem;
