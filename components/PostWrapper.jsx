"use client";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

function PostWrapper({ postId, children }) {
  let router = useRouter();

  const viewPost = useCallback(() => {
    router.push(`/posts/${postId}`, { scroll: false });
  }, [router]);

  return (
    <div onClick={viewPost}>
      {children}
    </div>
  );
}

export default PostWrapper;
