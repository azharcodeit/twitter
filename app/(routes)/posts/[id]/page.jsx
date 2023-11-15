import { getPost } from "@app/actions/getPost";
import TrendingBar from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";
import { getUserById } from "@app/actions/getUserById";
import CommentFeed from "@components/post/CommentFeed";

async function Post({ params }) {
  const { id } = params;
  const post = await getPost(id);
  const fetchedUser = await getUserById(post?.userId);

  console.log(post?.comments)
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              <h1 className='font-twitter-chirp-bold text-xl'>{"Post"}</h1>
            </div>
          </div>
        </Header>
        <PostContainer post={post} user={fetchedUser} />
        <NewPost isComment postId={post?.id} placeholder={"Post your reply"} />
        <CommentFeed comments={post?.comments} />
      </div>
      <TrendingBar />
    </MainContainer>
  );
}

export default Post;