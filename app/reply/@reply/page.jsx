"use client";
import React from "react";
import ReplyContainer from "@components/ReplyContainer";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";
import ProfileInfo from "@components/ui/ProfileInfo";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function Reply() {
  const back = useRef(null);
  const backIcon = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === back.current || e.target === backIcon.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, back, backIcon]
  );

  return (
    <div className='feed border-darker-gray-bg border-x h-max'>
      <div className='sticky top-0 border-darker-gray-bg bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80'>
        <div className='flex px-4 h-14 font-semibold text-xl justify-items-center items-center'>
          <div className='pr-[34px]' ref={back} onClick={onClick}>
            <Image
              src={"/assets/icons/back.svg"}
              ref={backIcon}
              alt='back'
              width={20}
              height={20}
            />
          </div>
          <h1>Post</h1>
        </div>
      </div>
      <div className='px-4 flex flex-col'>
        <ProfileInfo
          username={"Anytime fitness"}
          nickname={"anytimefitness"}
          image={"/assets/icons/profile.svg"}
        />
        <div className='flex flex-col'>
          <div className='mt-3'>
            We don’t know who needs to hear this but 📣 YOU CAN LIFT WEIGHTS WITHOUT GETTING BULKY 📣
            <br/>
            Today we’re breaking down bulking versus toning and the myths that could get in the way of results.</div>
          <div className='my-4 text-secondary-text'>
            <Link href="/reply"  role="link" ><time datetime="2023-09-21T13:01:49.000Z">2:01 PM · Sep 21, 2023 ·</time></Link> <span className="text-main-secondary font-bold">32.2</span> Views</div>
          <div className='flex justify-between h-12 border-y border-darker-gray-bg'>
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
      <NewPost />
      <ReplyContainer />
      <ReplyContainer />
      <PostContainer />
      <ReplyContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
    </div>
  );
}

export default Reply;
