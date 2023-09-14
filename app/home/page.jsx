"use client";
import Feed from "./@feed/page";
import Trending from "./@trending/page";
import MainContainer from "@components/MainContainer";
function Home() {
  return (
    <MainContainer>
        <Feed/>
        <Trending/>
    </MainContainer>
  )
}

export default Home