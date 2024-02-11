'use client'
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import { useSession } from "next-auth/react";

function layout({ bookmarksFeed, trending }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex flex-col pl-3 pt-2 h-16 align-items-center'>
            <div>
              <h1 className='font-twitter-chirp-bold text-lg'>{"Bookmarks"}</h1>
            </div>
            <div className='flex text-slate-500 pb-1'>
              @{session?.user?.username}
            </div>
          </div>
        </Header>
        {bookmarksFeed}
      </div>
      {trending}
    </MainContainer>
  );
}

export default layout;
