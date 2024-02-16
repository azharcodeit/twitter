import { Suspense, lazy } from "react";
import ErrorBoundary from "@components/ErrorBoundary";
import React from "react"; 
import CommentItem from "@components/post/CommentItem";

function CommentFeed({ comments }) {
  const LoadingComponent = lazy(() => import("@components/post/PostLoading"));

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingComponent />}>
        <div className='flex flex-col'>
          {comments?.map((comment) => (
            <CommentItem key={comment.id} data={comment} />
          ))}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default CommentFeed;
