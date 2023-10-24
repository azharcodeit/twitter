'use client'
import { ClipLoader } from "react-spinners";
import useUser from "@/hooks/useUser";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";
import Bio from "@components/profile/Bio";
import Hero from "@components/profile/Hero";
import Tabs from "@components/profile/Tabs";
import ReplyContainer from "@components/ReplyContainer";
import TrendingBar from "@components/TrendingBar";

const UserProfile = ({params}) => {
  const { data: fetchedUser } = useUser(params.username);

  console.log(params)
  // if (!fetchedUser) {
  //   return (
  //     <div className="flex justify-center items-center h-full w-[990px]">
  //       <ClipLoader color="lightblue" size={80} />
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
              <p className='text-gray-text text-sm'>{fetchedUser?.postCount || "0"} post(s)</p>
            </div>
          </div>
        </Header>
        <Hero user={fetchedUser?.username} />
        <Bio user={fetchedUser?.username} />
        <Tabs />
        <ReplyContainer />
        <ReplyContainer />
        <ReplyContainer />
        <ReplyContainer />
        <ReplyContainer />
        <ReplyContainer />
        <ReplyContainer />
        <ReplyContainer />
      </div>
      <TrendingBar />
    </MainContainer>
  );
};

export default UserProfile;
