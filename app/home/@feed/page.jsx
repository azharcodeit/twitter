import React from "react";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";

function Feed() {
  return (
    <div className='feed border-darker-gray-bg border-x h-max'>
      <div className='sticky top-0 border-darker-gray-bg border-b bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80'>
        <div className='flex px-4 h-14 font-semibold text-xl justify-items-center items-center'>
          <h1>Home</h1>
        </div>
        <div className='grid grid-flow-col grid-col-2 justify-items-center items-center h-14 px-4'>
          <h1 className='font-medium text-slate-500'>For you</h1>
          <h1 className='font-semibold'>Following</h1>
        </div>
      </div>
      <NewPost/>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
    </div>
  );
}

export default Feed;
