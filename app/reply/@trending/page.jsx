import React from "react";
import SearchBar from "@components/ui/SearchBar";
import Container from "@components/ui/Container";
import TypographyTitle from "@components/ui/TypographyTitle";
import TypographySubtitle from "@components/ui/TypographySubtitle";
import Button from "@components/ui/Button";
import ProfileInfo from "@components/ui/ProfileInfo";
import Footer from "@components/Footer";
import Link from "next/link";
import Image from "next/image";

function Trending() {
  return (
    <div className='trending sticky top-0 mr-2 hidden_tablet pb-14 h-fit'>
      <div className='sticky top-0 w-full bg-white py-1 mb-3'>
        {" "}
        <SearchBar />
      </div>

      <Container>
        <div className='flex flex-col gap-2'>
          <TypographyTitle title={"Relevant people"} />
          <div className="flex justify-between"><ProfileInfo  username={"Anytime fitness"}
            nickname={"anytimefitness"}
            image={"/assets/icons/profile.svg"}/>  <Button text={"Follow"} /></div>
          <p
          >Welcome to Anytime Fitness! Your home for something real. Real people. Real success.</p>
        </div>
      </Container>
      <Container>
        <TypographyTitle title={"What's happening"} />
        <div className='pt-3'>
          <div className='flex justify-between items-center text-slate-500 text-sm'>
            <p>Trending in United Kingdom</p>
            <Image src='assets/icons/more-2.svg' width={15} height={15} />
          </div>
          <TypographySubtitle subtitle={"british vogue"} />
          <p className='text-slate-500 text-sm'>2,200 views</p>
        </div>
        <div className='pt-3'>
          <div className='flex justify-between items-center text-slate-500 text-sm'>
            <p>Trending in United Kingdom</p>
            <Image src='assets/icons/more-2.svg' width={15} height={15} />
          </div>
          <TypographySubtitle subtitle={"british vogue"} />
          <p className='text-slate-500 text-sm'>2,200 views</p>
        </div>
        <div className='pt-3'>
          <div className='flex justify-between items-center text-slate-500 text-sm'>
            <p>Trending in United Kingdom</p>
            <Image src='assets/icons/more-2.svg' width={15} height={15} />
          </div>
          <TypographySubtitle subtitle={"british vogue"} />
          <p className='text-slate-500 text-sm'>2,200 views</p>
        </div>
        <div className='pt-3'>
          <div className='flex justify-between items-center text-slate-500 text-sm'>
            <p>Trending in United Kingdom</p>
            <Image src='assets/icons/more-2.svg' width={15} height={15} />
          </div>
          <TypographySubtitle subtitle={"british vogue"} />
          <p className='text-slate-500 text-sm'>2,200 views</p>
        </div>
        <div className='pt-3'>
          <div className='flex justify-between items-center text-slate-500 text-sm'>
            <p>Trending in United Kingdom</p>
            <Image src='assets/icons/more-2.svg' width={15} height={15} />
          </div>
          <TypographySubtitle subtitle={"british vogue"} />
          <p className='text-slate-500 text-sm'>2,200 views</p>
        </div>
        <Link href={"explore/tabs/for-you"} className='pt-3 text-main-primary'>
          Show more
        </Link>
      </Container>
      <Container>
        <TypographyTitle title={"Who to follow"} />
        <div className='flex py-3 items-center justify-between'>
          <ProfileInfo
            username={"Anytime fitness"}
            nickname={"anytimefitness"}
            image={"/assets/icons/profile.svg"}
          />
          <Button text={"Follow"} />
        </div>
        <div className='flex py-3 items-center justify-between'>
          <ProfileInfo
            username={"Anytime fitness"}
            nickname={"anytimefitness"}
            image={"/assets/icons/profile.svg"}
          />
          <Button text={"Follow"} />
        </div>
        <div className='flex py-3 items-center justify-between'>
          <ProfileInfo
            username={"Anytime fitness"}
            nickname={"anytimefitness"}
            image={"/assets/icons/profile.svg"}
          />
          <Button text={"Follow"} />
        </div>
        <Link href={"explore/tabs/for-you"} className='py-3 text-main-primary'>
          Show more
        </Link>
      </Container>
      <Footer/>
    </div>
  );
}

export default Trending;
