"use client";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";

function layout({ explore, trending }) {
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
         <Header>
          <div className='flex px-4 h-14 font-twitter-chirp-bold text-xl justify-items-center items-center'>
            <h1>Explore</h1>
          </div>
        </Header>
         {explore}
      </div>
     
      {trending}
    </MainContainer>
  );
}

export default layout;
