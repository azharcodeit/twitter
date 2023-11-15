import MainContainer from "@components/MainContainer";

const title = "Home";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout(props) {
  return (
    <MainContainer>
      {props.feed}
      {props.trending}
    </MainContainer>
  );
}
