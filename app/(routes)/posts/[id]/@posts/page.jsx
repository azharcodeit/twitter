import { getPost } from "@app/actions/getPost";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";
import { getUserById } from "@app/actions/getUserById";
import CommentFeed from "@components/post/CommentFeed";

async function Post({ params }) {
  const { id } = params;
  const post = await getPost(id);
  const fetchedUser = await getUserById(post?.userId);

  console.log(post?.comments);
  return (
    <>
      <PostContainer post={post} user={fetchedUser} />
      <NewPost isComment postId={post?.id} placeholder={"Post your reply"} />
      <CommentFeed comments={post?.comments} />
    </>
  );
}

export default Post;
