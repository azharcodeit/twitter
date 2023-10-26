import TrendingBar from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";

function Post() {
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-max'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              <h1 className='font-semibold text-xl'>
                {"Post"}
              </h1>
            </div>
          </div>
        </Header>
        <ReplyContainer />
        <ReplyContainer />
      </div>
      <TrendingBar/>
    </MainContainer>
  )
}

export default Post