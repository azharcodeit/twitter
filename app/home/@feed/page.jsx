import React from "react";

function Feed() {
  return (
    <div className='col-span-2 m-3'>
      <div className="sticky top-0">
        <h1 className="font-semibold text-xl">Home</h1>
        <div className="grid grid-flow-col grid-col-2 justify-items-center">
            <h1 className="pt-4 pb-4">For you</h1>
            <h1 className="pt-4 pb-4">Following</h1>
        </div>
      </div>
      <div>Post</div>
      <div>Feed</div>
    </div>
  );
}

export default Feed;
