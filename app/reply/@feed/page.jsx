"use client";
import React from "react";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";
import Image from "next/image";

function Feed() {
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
          <div className='pr-[34px]'ref={back} onClick={onClick}>
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
      <NewPost />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
    </div>
  );
}

export default Feed;
