import Header from "@components/Header";
import { Loader2 } from "lucide-react";
import { getPosts } from "@app/actions/getPosts";
import { getFollowingUsersPosts } from "@app/actions/getFollowingUsersPosts";
import PostContainer from "@components/PostContainer";
import { Tabs, Tab } from "@components/Tabs";
import NewPost from "@components/NewPost";
import { getUserById } from "@app/actions/getUserById";

async function Feed() {
  const fetchedPosts = await getPosts();
  const fetchedFollowingUsersPosts = await getFollowingUsersPosts();
  

  return (
    <div className='feed border-darker-gray-bg border-x h-inherit'>
      <Header>
        <div className='flex px-4 h-14 font-semibold text-xl justify-items-center items-center'>
          <h1>Home</h1>
        </div>
      </Header>

      {!(fetchedPosts && fetchedFollowingUsersPosts) ? (
        <div className='flex px-4 h-14'>Loading...</div>
      ) : (
        <Tabs sticky>
          <Tab label='For you' sticky>
            <NewPost />
            {fetchedPosts ? (
              fetchedPosts.map(async(fetchedPost) => {
                const fetchedUser = await getUserById(fetchedPost?.userId)
                if (!fetchedPost){return <>Loading...</>}
                return <PostContainer key={fetchedPost?.id} post={fetchedPost} user={fetchedUser}/>
              })
            ) : (
              <div className='flex w-full h-[100%] justify-center'>
                <Loader2 className='animate-spin w-6 h-6 text-main-primary' />
              </div>
            )}
          </Tab>
          <Tab label='Following' sticky>
            <NewPost />
            {fetchedFollowingUsersPosts ? (
              fetchedFollowingUsersPosts.map(async(fetchedPost) => {
                const fetchedUser = await getUserById(fetchedPost?.userId)
                if (!fetchedPost){return <>Loading...</>}
                return <PostContainer key={fetchedPost?.id} post={fetchedPost} user={fetchedUser}/>
              })
            ) : (
              <div className='flex w-full h-[100%] justify-center'>
                <Loader2 className='animate-spin w-6 h-6 text-main-primary' />
              </div>
            )}
          </Tab>
        </Tabs>
      )}
    </div>
  );
}

export default Feed;
