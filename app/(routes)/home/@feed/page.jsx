import { Suspense } from "react";
import { getPosts } from "@app/actions/getPosts";
import { getFollowingUsersPosts } from "@app/actions/getFollowingUsersPosts";
import PostContainer from "@components/PostContainer";
import { Tabs, Tab } from "@components/Tabs";
import NewPost from "@components/NewPost";
import { getUserById } from "@app/actions/getUserById";
import PostLoading from "@components/post/PostLoading";

export const revalidate = 0;

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

  return (
    <Tabs sticky>
      <Tab label='For you' sticky>
        <NewPost />
        <Suspense fallback={<PostLoading />}>{postsAll}</Suspense>
      </Tab>
      <Tab label='Following' sticky>
        <NewPost />
        <Suspense fallback={<PostLoading />}>{postsFollowing}</Suspense>
      </Tab>
    </Tabs>
  );
}

export default Feed;
