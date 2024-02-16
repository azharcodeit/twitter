import { Suspense, lazy } from "react";
import { getPosts } from "@app/actions/getPosts";
import { getFollowingUsersPosts } from "@app/actions/getFollowingUsersPosts";
import PostContainer from "@components/PostContainer";
import { Tabs, Tab } from "@components/Tabs";
import NewPost from "@components/NewPost";
import { getUserById } from "@app/actions/getUserById";
import ErrorBoundary from '@components/ErrorBoundary'

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
  const LoadingComponent = lazy(() => import('@components/post/PostLoading'));

  return (
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
        <Suspense fallback={<LoadingComponent />}>{postsFollowing}</Suspense>
        </ErrorBoundary>
      </Tab>
    </Tabs>
  );
}

export default Feed;
