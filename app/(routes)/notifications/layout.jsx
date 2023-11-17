import MainContainer from "@components/MainContainer";
import Header from "@components/Header";

function layout({ notifications, trending }) {
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex pl-3 h-14 items-center'>
            <div>
              <h1 className='font-twitter-chirp-bold text-lg'>
                {"Notifications"}
              </h1>
            </div>
          </div>
        </Header>
        {notifications}
      </div>
      {trending}
    </MainContainer>
  );
}

export default layout;
