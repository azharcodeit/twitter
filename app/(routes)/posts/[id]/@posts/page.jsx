import { getPost } from "@app/actions/getPost";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";
import { getUserById } from "@app/actions/getUserById";
import CommentFeed from "@components/post/CommentFeed";
import { Suspense } from "react";
import PostLoading from "@components/post/PostLoading";
 
export const revalidate = 0;

async function Post({ params }) {
  const { id } = params;
  const post = await getPost(id);
  const fetchedUser = await getUserById(post?.userId);

  console.log(post?.comments);
  return (
    <>
      <Suspense fallback={<PostLoading />}>
        <PostContainer post={post} user={fetchedUser} />
      </Suspense>
      <Suspense fallback={<PostLoading />}>
        <NewPost isComment postId={post?.id} placeholder={"Post your reply"} />
      </Suspense>
      <Suspense fallback={<PostLoading />}>
        <CommentFeed comments={post?.comments} />
      </Suspense>
    </>
  );
}

export default Post;
