import React from "react";
import SearchBar from "@components/ui/SearchBar";
import Container from "@components/ui/Container";
import TypographyTitle from "@components/ui/TypographyTitle";
import TypographySubtitle from "@components/ui/TypographySubtitle";
import Button from "@components/ui/Button";
import ProfileInfo from "@components/ui/ProfileInfo";
import Link from "next/link";

function Trending() {
  return (
    <div className='xl:col-span-2 m-3 hidden_md'>
    {/* <div className='col-span-2 m-3 hidden_md'> */}
      <SearchBar />
      <Container>
        <div className="flex flex-col gap-2">
        <TypographyTitle title={"Subscribe to Premium"} />
        <TypographySubtitle
          subtitle={
            "Subscribe to unlock new features and if eligible, receive a share of ads revenue."
          }
        />
        <Button text={"Subscribe"} />
        </div>
      </Container>
      <Container>
        <TypographyTitle title={"Who to follow"} />
        <div className="flex py-3 items-center">
          <ProfileInfo
            username={"Anytime fitness"}
            nickname={"anytimefitness"}
            image={"/assets/icons/profile.svg"}
          />
          <Button text={"Follow"} />
        </div>
        <div className="flex py-3 items-center">
          <ProfileInfo
            username={"Anytime fitness"}
            nickname={"anytimefitness"}
            image={"/assets/icons/profile.svg"}
          />
          <Button text={"Follow"} />
        </div>
        <div className="flex py-3 items-center">
          <ProfileInfo
            username={"Anytime fitness"}
            nickname={"anytimefitness"}
            image={"/assets/icons/profile.svg"}
          />
          <Button text={"Follow"} />
        </div>
        <Link href={'explore/tabs/for-you'} className="py-3 text-main-primary">Show more</Link>
      </Container>
      <Container>
        <TypographyTitle title={"Netherlands trends"} />
      </Container>
    </div>
  );
}

export default Trending;
