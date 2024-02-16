"use client";
import Link from "next/link";
import Image from "next/image";
import SignOutButton from "@components/SignOutButton";
import { GoPerson } from "react-icons/go";
import { RiQuillPenLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import usePostModal from "@/hooks/usePostModal";
import { NAVIGATION_ITEMS } from "@utils";

const SideBar = () => {
  const { data: session } = useSession({ required: true });
  const postModal = usePostModal();

  return (
    <nav className='sidebar xl:col-span-1 w-full h-screen flex flex-col justify-between pl-2 pr-2 sticky top-0'>
      <div className='flex flex-col max-xl:items-center '>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={
              item.title.toLocaleLowerCase() === "home" ||
              item.title.toLocaleLowerCase() === "twitter"
                ? "/home"
                : item.title.toLocaleLowerCase() === "profile"
                ? `/users/${session?.user?.username}` || "#"
                : `/${item.title.toLowerCase()}`
            }
            className={`flex items-center hover:bg-black/10 focus:font-twitter-chirp-bold transition duration-200 flex items-center justify-start w-fit rounded-full p-3 ${item.title !== "Twitter" ? 'my-1' : 'mt-[2px]'}`}
          >
            {item.title === "Notifications" &&
            session?.user?.hasNotification ? (
              <div className='relative'>
                <item.icon size={item.title !== "Twitter" ? 26 : 30} />
                <div className='absolute top-[-4px] right-[1px] w-[7px] h-[7px] bg-main-primary rounded-full'></div>
              </div>
            ) : (
              <item.icon size={item.title !== "Twitter" ? 26 : 30} />
            )}
            {item.title !== "Twitter" && (
              <span className='mr-4 ml-5 hidden_xl text-xl '>{item.title}</span>
            )}
          </Link>
        ))}

        <button
          onClick={postModal.onOpen}
          className='flex items-center hover:bg-[#177cc0] transition duration-200 justify-content-center text-white bg-main-primary rounded-full xl:my-3 xl:h-[52px] xl:w-[92%]'
        >
          <RiQuillPenLine size={25} className='block h-6 w-6 xl:hidden m-3 ' />
          <p className='flex flex-row w-full items-center justify-content-center hidden xl:block text-[17px] font-twitter-chirp-bold'>
            Post
          </p>
        </button>
      </div>
      <div className='flex items-center hover:bg-black/10 focus:font-twitter-chirp-heavy transition duration-200 w-full rounded-full my-3 p-3 w-[98%] overflow-hidden'>
        <Link
          href={`/users/${session?.user?.username}`}
          className='inline-block rounded-full'
        >
          {session?.user?.profileImage ? (
            <div className='overflow-hidden rounded-full border-[#ffffff]'>
              <Image
                src={session?.user?.profileImage}
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
        <div className="flex w-full justify-between items-center">
        <div className='flex flex-col items-start mx-3 hidden_xl overflow-hidden'>
          <div className='text-[15px] font-twitter-chirp-bold w-[90%] text-wrap'>
            {session?.user?.name}
          </div>
          <div className='text-[15px]'>@{session?.user?.username}</div>
        </div>
        <SignOutButton />
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
