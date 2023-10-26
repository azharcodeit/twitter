import Feed from "@components/home/Feed";
import TrendingBar from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";

const Home = () => {
  return (
    <MainContainer>
      <Feed/>
      <TrendingBar />
    </MainContainer>
  );
}

export default Home;
