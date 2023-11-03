import { getPost } from "@app/actions/getPost";
import TrendingBar from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";

async function Post({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              <h1 className='font-semibold text-xl'>{"Post"}</h1>
            </div>
          </div>
        </Header>
        <PostContainer post={post} />
        <NewPost placeholder={"Post your reply"}/>
         <div className='flex px-4 h-14'>Comments...</div>
      </div>
      <TrendingBar />
    </MainContainer>
  );
}

export default Post;
