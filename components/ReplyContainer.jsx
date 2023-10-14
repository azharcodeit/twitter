"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { GoPerson, GoBookmark } from "react-icons/go";
import { LuRepeat2 } from "react-icons/lu";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { RiMoreLine } from "react-icons/ri";

function ReplyContainer() {
  let router = useRouter()
  return (
    <div onClick={()=> router.push('/reply', { scroll: false })} className='grid grid-flow-col grid-cols-10 justify-items-center items-start h-14 px-4 py-3 border-darker-gray-bg border-b h-fit hover:bg-black/5 transition duration-200 cursor-pointer'>
        <div className='flex w-full'>
          <Link href={"/home"} className='rounded-full bg-darker-gray'>
            {/* <Image
              src={"/assets/icons/profile.svg"}
              alt='twitter'
              width={40}
              height={40}
              className='border rounded-xl'
            /> */}
            <GoPerson size={30}/>
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
            <RiMoreLine size={15}/>
          </div>
          <div className="h-fit row-span-1">
            BREAKING: Government refuses to guarantee second leg of HS2 to
            Manchester
          </div>
          <div className="flex justify-between row-span-1 mt-2">
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
              <FaRegHeart size={20} />
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
  )
}

export default ReplyContainer