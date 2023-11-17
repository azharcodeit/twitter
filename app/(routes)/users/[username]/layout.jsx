import MainContainer from "@components/MainContainer";

function layout({ profile, trending }) {
  return (
    <MainContainer>
      {profile}
      {trending}
    </MainContainer>
  );
}

export default layout;
