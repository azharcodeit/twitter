"use client";
import Image from "next/image";

function Hero({ user }) {
  return (
    <div className={`relative bg-bg-gray overflow-hidden w-full h-[200px]`}>
      {user?.coverImage && (
        <Image
          src={user.coverImage}
          fill
          alt='Cover Image'
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  );
}

export default Hero;
