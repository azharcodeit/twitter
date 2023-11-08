import { getBookmarkedPosts } from "@app/actions/getBookmarkedPosts";
import { getCurrentUser } from "@app/actions/getCurrentUser";
import TrendingBar from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import PostContainer from "@components/PostContainer";
import { getUserById } from "@app/actions/getUserById";

async function Bookmarks() {
  const fetchedBookmarkedPosts = await getBookmarkedPosts();
  const currentUser = await getCurrentUser();
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex flex-col pl-3 pt-2 h-16 align-items-center'>
            <div>
              <h1 className='font-semibold text-lg'>{"Bookmarks"}</h1>
            </div>
            <div className='flex text-slate-500 pb-1'>@{currentUser?.username}</div>
          </div>
        </Header>
        {fetchedBookmarkedPosts?.map(async (fetchedPost) => {
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
        })}
      </div>
      <TrendingBar />
    </MainContainer>
  );
}

export default Bookmarks;
