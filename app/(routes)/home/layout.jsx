import MainContainer from "@components/MainContainer";
import Header from "@components/Header";

const title = "Home";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout({ feed, trending }) {
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex px-4 h-14 font-twitter-chirp-bold text-xl justify-items-center items-center'>
            <h1>Home</h1>
          </div>
        </Header>
        {feed}
      </div>
      {trending}
    </MainContainer>
  );
}
