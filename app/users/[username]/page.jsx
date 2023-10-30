import { Loader } from "lucide-react";
import { getUser } from "@app/actions/getUser";
import { getPostsByUserId } from "@app/actions/getPostsByUserId";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";
import Bio from "@components/profile/Bio";
import Hero from "@components/profile/Hero";
import { Tabs, Tab } from "@components/Tabs";
import PostContainer from "@components/PostContainer";
import TrendingBar from "@components/TrendingBar";

const UserProfile = async ({ params }) => {
  const { username } = params;
  const fetchedUser = await getUser(username);
  const fetchedPosts = await getPostsByUserId(fetchedUser?.id);
  const postCount = `${fetchedUser?.postCount || 0} post${
    fetchedUser?.postCount === 1 ? "" : "s"
  }`;
  console.log(fetchedPosts);
  if (!fetchedUser) {
    return (
      <div className='flex justify-center items-center h-full w-full'>
        <Loader className='animate-spin w-20 h-20' />
      </div>
    );
  }

  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              <h1 className='font-semibold text-xl'>
                {fetchedUser?.name || "Name"}
              </h1>
              <p className='text-gray-text text-sm'>{postCount}</p>
            </div>
          </div>
        </Header>
        <Hero user={fetchedUser} />
        <Bio fetchedUser={fetchedUser} followingInit={fetchedUser?.following} />
        <Tabs>
          <Tab label='Posts'>
              {fetchedPosts.map((fetchedPost) => (
          <PostContainer key={fetchedPost?.id} post={fetchedPost} />
        ))}
          </Tab>
          <Tab label='Replies'>
            
          </Tab>
          <Tab label='Likes'>
            
          </Tab>
        </Tabs>
        
      </div>
      <TrendingBar />
    </MainContainer>
  );
};

export default UserProfile;
