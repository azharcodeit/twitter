import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";

function layout({ posts, trending }) {
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              <h1 className='font-twitter-chirp-bold text-xl'>{"Post"}</h1>
            </div>
          </div>
        </Header>
        {posts}
      </div>
      {trending}
    </MainContainer>
  );
}

export default layout;
