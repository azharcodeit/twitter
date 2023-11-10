import React from "react";
import CommentItem from "@components/post/CommentItem";

function CommentFeed({ comments }) {
  return (
    <div className='flex col'>
      {comments?.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default CommentFeed;
