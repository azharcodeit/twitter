import React from "react";
import Link from "next/link";
import Image from "next/image";

function ProfileInfo({ image, username, nickname }) {
  return (
    <div className='flex items-center'>
      <Link href={`/${nickname}`}>
        <Image src={image} alt='twitter' width={40} height={40} />
      </Link>
      <div className='flex flex-col items-start justify-items-start mx-3'>
        <div className='text-base font-semibold'>{username}</div>
        <div className='text-sm'>@{nickname}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
