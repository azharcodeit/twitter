import { getBookmarkedPosts } from "@app/actions/getBookmarkedPosts";
import PostContainer from "@components/PostContainer";
import { getUserById } from "@app/actions/getUserById";

async function Page() {
  const fetchedBookmarkedPosts = await getBookmarkedPosts();
  return fetchedBookmarkedPosts?.map(async (fetchedPost) => {
    const fetchedUser = await getUserById(fetchedPost?.userId);
    return (
      <PostContainer
        key={fetchedPost?.id}
        post={fetchedPost}
        user={fetchedUser}
      />
    );
  });
}

export default Page;
