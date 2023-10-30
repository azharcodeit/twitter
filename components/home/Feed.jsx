import Header from "@components/Header";
import { Loader2 } from "lucide-react";
import { getPosts } from "@app/actions/getPosts";
import PostContainer from "@components/PostContainer";
import { Tabs, Tab } from "@components/Tabs";
import NewPost from "@components/NewPost";

async function Feed() {
  const fetchedPosts = await getPosts();

  return (
    <div className='feed border-darker-gray-bg border-x h-inherit'>
      <Header>
        <div className='flex px-4 h-14 font-semibold text-xl justify-items-center items-center'>
          <h1>Home</h1>
        </div>
      </Header>
      <Tabs>
        <Tab label='For you'>
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
        </Tab>
        <Tab label='Following'></Tab>
      </Tabs>
    </div>
  );
}

export default Feed;
