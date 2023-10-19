'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Feed from "./@feed/page";
import Trending from "./@trending/page";
import MainContainer from "@components/MainContainer";
import Login from "../(auth)/login/page";

function Home() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/home");
  } else {
    router.push("/login");
  }
  return (
    <>
      {status === "authenticated" ? (
        <MainContainer>
          <Feed />
          <Trending />
        </MainContainer>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Home;
