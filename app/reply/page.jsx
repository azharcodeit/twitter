"use client";
import Reply from "./@reply/page";
import Trending from "./@trending/page";
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