import { ClipLoader } from "react-spinners";
import { Loader } from "lucide-react";
import { getCurrentUser } from "@app/actions/getCurrentUser";
import { getUser } from "@app/actions/getUser";
import prisma from "@lib/prismadb";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";
import Bio from "@components/profile/Bio";
import Hero from "@components/profile/Hero";
import Tabs from "@components/profile/Tabs";
import ReplyContainer from "@components/ReplyContainer";
import TrendingBar from "@components/TrendingBar";

const UserProfile = async ({ params }) => {
  const { username } = params;
  const currentUser = await getCurrentUser();
  const fetchedUser = await getUser(username);
  

  // if (!fetchedUser) {
  //   return (
  //     <div className='flex justify-center items-center h-full w-full'>
  //       <Loader className='animate-spin w-20 h-20' />
  //     </div>
  //   );
  // }

  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-max'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              <h1 className='font-semibold text-xl'>
                {fetchedUser?.name || "Name"}
              </h1>
              <p className='text-gray-text text-sm'>
                {fetchedUser?.postCount || "0"} post{fetchedUser?.postCount>1?'s':''}
              </p>
            </div>
          </div>
        </Header>
        <Hero user={fetchedUser} />
        <Bio
          fetchedUser={fetchedUser}
          currentUser={currentUser}
          followingInit={fetchedUser?.following}
        />
        <Tabs />
        <ReplyContainer />
        <ReplyContainer />
      </div>
      <TrendingBar/>
    </MainContainer>
  );
};

export default UserProfile;
