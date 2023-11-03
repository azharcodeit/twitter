"use client";
import { useRouter } from "next/navigation";

function PostWrapper({ postId, children }) {
  let router = useRouter();

  return (
    <div
      // onClick={() => router.push(`/posts/${postId}`, { scroll: false })} 
      className='flex felx-col items-start h-14 px-4 py-3 border-darker-gray-bg border-b h-fit hover:bg-black/5 transition duration-200 cursor-pointer'
    >
      {children}
    </div>
  );
}

export default PostWrapper;
