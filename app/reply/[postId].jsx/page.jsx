"use client";
import Reply from "./@reply/page";
import Trending from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";
function Home() {
  return (
    <MainContainer>
        <Reply/>
        <Trending/>
    </MainContainer>
  )
}

export default Home