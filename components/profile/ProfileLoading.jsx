import Header from "@components/Header";
import Back from "@components/Back";
import BioLoading from "@components/profile/BioLoading";
import { Tabs, Tab } from "@components/Tabs";
import PostLoading from "@components/post/PostLoading";
import Skeleton from "@components/Skeleton";
import HeroLoading from "./HeroLoading";

const ProfileLoading = () => {
  return (
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
             <Skeleton className='w-20 h-5 mb-1'/>
             <Skeleton className='w-16 h-4'/>
            </div>
          </div>
        </Header>
        <HeroLoading/>
        <BioLoading />
        <Tabs>
          <Tab label='Posts'>
            <PostLoading/>
            <PostLoading/>
            <PostLoading/>
          </Tab>
          <Tab label='Replies'>
            <PostLoading/>
            <PostLoading/>
            <PostLoading/>
          </Tab>
          <Tab label='Likes'>
            <PostLoading/>
            <PostLoading/>
            <PostLoading/>
          </Tab>
        </Tabs>
      </div>
  );
};

export default ProfileLoading;
