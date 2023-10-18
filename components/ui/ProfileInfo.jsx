import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoPerson } from "react-icons/go";

function ProfileInfo({ image, username, nickname }) {
  return (
    <div className='flex items-center'>
            <Link href={`/anytimefitness`}>
              {/* <Image src={image} alt='twitter' width={40} height={40} /> */}
              <GoPerson size={35} />
            </Link>
            <div className='flex flex-col items-start justify-items-start mx-3'>
              <Link
                href={`/anytimefitness`}
                className='text-base font-semibold'
              >
                {username}
              </Link>
              <div className='text-sm'>@{nickname}</div>
            </div>
          </div>
  );
}

export default ProfileInfo;
