import Header from "@components/Header";
import { Suspense, lazy } from "react";
import ErrorBoundary from "@components/ErrorBoundary";
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
  let postsFollowing = fetchedFollowingUsersPosts?.map(async (fetchedPost) => {
    const fetchedUser = await getUserById(fetchedPost?.userId);
    if (!fetchedPost) {
      return <>Loading...</>;
    }
    return (
      <PostContainer
        key={fetchedPost?.id}
        post={fetchedPost}
        user={fetchedUser}
      />
    );
  });
  let postsAll = fetchedPosts?.map(async (fetchedPost) => {
    const fetchedUser = await getUserById(fetchedPost?.userId);
    return (
      <PostContainer
        key={fetchedPost?.id}
        post={fetchedPost}
        user={fetchedUser}
      />
    );
  });
  const LoadingComponent = lazy(() => import("@components/post/PostLoading"));

  return (
    <div className='feed border-darker-gray-bg border-x h-inherit'>
      <Header>
        <div className='flex px-4 h-14 font-twitter-chirp-bold text-xl justify-items-center items-center'>
          <h1>Home</h1>
        </div>
      </Header>
      <Tabs sticky>
        <Tab label='For you' sticky>
          <NewPost />
          <ErrorBoundary>
            <Suspense fallback={<LoadingComponent />}>{postsAll}</Suspense>
          </ErrorBoundary>
        </Tab>
        <Tab label='Following' sticky>
          <NewPost />
          <ErrorBoundary>
            <Suspense fallback={<LoadingComponent />}>
              {postsFollowing}
            </Suspense>
          </ErrorBoundary>
        </Tab>
      </Tabs>
    </div>
  );
}

function Loading() {
  return (
    <div className='flex w-full p-4 items-center'>
      <Loader2 className='animate-spin w-8 h-8' color='#1c9bef' />
    </div>
  );
}

export default Feed;
