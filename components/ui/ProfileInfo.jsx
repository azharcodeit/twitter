import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoPerson } from "react-icons/go";

function ProfileInfo({ image, name, username}) {
  return (
    <div className='flex items-center'>
            <Link href={`${username}`}>
              <div className='overflow-hidden rounded-full border-[#ffffff]'>
              <Image src={image} className="scale-125" alt='twitter' width={40} height={40} /></div>
              {/* <GoPerson size={35} /> */}
            </Link>
            <div className='flex flex-col items-start justify-items-start mx-3'>
              <Link
                href={`users/${username}`}
                className='text-base font-twitter-chirp-bold'
              >
                {name}
              </Link>
              <div className='text-sm'>@{username}</div>
            </div>
          </div>
  );
}

export default ProfileInfo;
