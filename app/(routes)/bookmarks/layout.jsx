import MainContainer from "@components/MainContainer";

async function layout({ bookmarksFeed, trending }) {
  return (
    <MainContainer>
      {bookmarksFeed}
      {trending}
    </MainContainer>
  );
}

export default layout;
