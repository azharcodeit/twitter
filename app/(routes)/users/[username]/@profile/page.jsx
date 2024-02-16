import { Suspense, lazy } from "react";
import ErrorBoundary from "@components/ErrorBoundary";
import { getUser } from "@app/actions/getUser";
import { getPostsByUserId } from "@app/actions/getPostsByUserId";
import Header from "@components/Header";
import Back from "@components/Back";
import Bio from "@components/profile/Bio";
import Hero from "@components/profile/Hero";
import { Tabs, Tab } from "@components/Tabs";
import PostContainer from "@components/PostContainer";
import { getUserById } from "@app/actions/getUserById";
import Skeleton from "@components/Skeleton";
import BioLoading from "@components/profile/BioLoading";
import PostLoading from "@components/post/PostLoading";
import HeroLoading from "@components/profile/HeroLoading";

const UserProfile = async ({ params }) => {
  const { username } = params;
  const fetchedUser = await getUser(username);
  const fetchedPosts = await getPostsByUserId(fetchedUser?.id);
  const postCount = `${fetchedUser?.postCount || 0} post${
    fetchedUser?.postCount === 1 ? "" : "s"
  }`;
  const LoadingComponent = lazy(() => import("@components/post/PostLoading"));

  return (
    <div className='feed border-darker-gray-bg border-x h-inherit'>
      <Header>
        <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
          <Back />
          <div>
            <ErrorBoundary>
              <Suspense fallback={<Skeleton className='w-20 h-5 mb-1' />}>
                <h1 className='font-twitter-chirp-bold text-xl'>
                  {fetchedUser?.name}
                </h1>
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<Skeleton className='w-16 h-4' />}>
                <p className='text-gray-text text-sm'>{postCount}</p>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </Header>
      <ErrorBoundary>
        <Suspense fallback={<HeroLoading />}>
          <Hero user={fetchedUser} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<BioLoading />}>
          <Bio
            fetchedUser={fetchedUser}
            followingInit={fetchedUser?.following}
          />
        </Suspense>
      </ErrorBoundary>
      <Tabs>
        <Tab label='Posts'>
          <ErrorBoundary>
            <Suspense fallback={<LoadingComponent />}>
              {fetchedPosts.map(async (fetchedPost) => {
                const userById = await getUserById(fetchedPost?.userId);
                return (
                  <PostContainer
                    key={fetchedPost?.id}
                    post={fetchedPost}
                    user={userById}
                  />
                );
              })}
            </Suspense>
          </ErrorBoundary>
        </Tab>
        <Tab label='Replies'></Tab>
        <Tab label='Likes'></Tab>
      </Tabs>
    </div>
  );
};

export default UserProfile;
