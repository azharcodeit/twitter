import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCurrentUser } from "@app/actions/getCurrentUser";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";
import { TfiLocationPin } from "react-icons/tfi";
import { LiaCalendar } from "react-icons/lia";
import Hero from "@components/profile/Hero";
import Avatar from "@components/profile/Avatar";
import Tabs from "@components/profile/Tabs"
import ReplyContainer from "@components/ReplyContainer";
import TrendingBar from "@components/TrendingBar"
import Button from "@components/Button";

const UserProfile = async () => {
  const session = await getServerSession(authOptions);
  const currentUser = await getCurrentUser(session);
  const dateString = currentUser?.createdAt;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });

  const formattedDate = `${month} ${year}`;
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-max'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              {" "}
              <h1 className='font-semibold text-xl'>
                {currentUser?.name || "Name"}
              </h1>
              <p className='text-gray-text text-sm'>1 post</p>
            </div>
          </div>
        </Header>
        <Hero />
        <div className='p-4 w-full'>
          <div className='flex flex-row justify-between '>
            <Avatar />
            <div>
               <Button
              outline
              label='Edit profile'
              small
            />
            </div>
           
          </div>
          <div className='mt-1 mb-3'>
            <h1 className='font-semibold text-xl'>
              {currentUser?.name || "Name"}
            </h1>
            <p className='text-gray-text'>@{currentUser?.username}</p>
          </div>
          <div className='mb-3'>
            {currentUser?.bio || "This is a profile bio"}
          </div>
          <div className='flex text-gray-text mb-3'>
            {currentUser?.location && (
              <div className='flex items-center mr-3'>
                <TfiLocationPin size={18} className='mr-1 text-gray-text' />{" "}
                <h1>London</h1>
              </div>
            )}
            <div className='flex items-center'>
              <LiaCalendar size={20} className='mr-1' />{" "}
              <h1>Joined on {formattedDate}</h1>
            </div>
          </div>
          <div className='flex items-center text-gray-text text-sm mb-5'>
            <div className='mr-3'>
              <span className='text-main-secondary font-bold'>2</span> Following
            </div>
            <div>
              <span className='text-main-secondary font-bold'>2</span> Followers
            </div>
          </div>
        </div>
        <Tabs/>
        <ReplyContainer/>
        <ReplyContainer/>
        <ReplyContainer/>
        <ReplyContainer/>
        <ReplyContainer/>
        <ReplyContainer/>
        <ReplyContainer/>
        <ReplyContainer/>
      </div>
      <TrendingBar/>
    </MainContainer>
  );
};

export default UserProfile;
