import Header from "@components/Header";
import { Loader2 } from "lucide-react";
import { getPosts } from "@app/actions/getPosts";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";

async function Feed() {
  const fetchedPosts = await getPosts();

  return (
    <div className='feed border-darker-gray-bg border-x h-inherit'>
      <Header border={true}>
        <div className='flex px-4 h-14 font-semibold text-xl justify-items-center items-center'>
          <h1>Home</h1>
        </div>
        <div className='flex h-auto'>
          <div className='flex flex-col items-center w-[50%] hover:bg-black/10 transition duration-200 cursor-pointer'>
            {" "}
            <div className='py-4 font-medium text-slate-500 focus:font-semibold focus:text-main-secondary'>
              For you
            </div>
          </div>
          <div className='flex flex-col items-center  w-[50%] hover:bg-black/10 transition duration-200 cursor-pointer'>
            <div>
              <div className='py-4 font-semibold text-main-secondary'>
                Following
              </div>
              <div className='w-full h-[4px] bg-main-primary rounded-lg'></div>
            </div>
          </div>
        </div>
      </Header>
      <NewPost />

      {fetchedPosts ? (
        fetchedPosts.map((fetchedPost) => (
          <PostContainer key={fetchedPost?.id} post={fetchedPost} />
        ))
      ) : (
        <div className='flex w-full h-[100%] justify-center'>
          <Loader2 className='animate-spin w-6 h-6 text-main-primary' />
        </div>
      )}
    </div>
  );
}

export default Feed;
