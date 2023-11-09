import SearchBar from "@components/ui/SearchBar";
import Button from "@components/ui/Button"
import TypographyTitle from "@components/ui/TypographyTitle";
import TypographySubtitle from "@components/ui/TypographySubtitle";
import WhoToFollow from "@components/WhoToFollow"
import Footer from "@components/Footer";
import Link from "next/link";
import { RiMoreLine } from "react-icons/ri";

const TRENDING = [
  { country: "UK", views: 2000 },
  { country: "USA", views: 5500 },
  { country: "KZ", views: 2200 },
  { country: "China", views: 8800 },
];
const Trending = () => {
  
  return (
    <div className='trending sticky top-0 mr-2 hidden_tablet pb-14 h-fit'>
      <div className='sticky top-0 w-full bg-white py-1 mb-3'>
        {" "}
        <SearchBar />
      </div>

      <div className='flex flex-col bg-gray-bg py-3 rounded-2xl mb-4 gap-2 px-4'>
        <TypographyTitle title={"Subscribe to Premium"} />
        <TypographySubtitle
          subtitle={
            "Subscribe to unlock new features and if eligible, receive a share of ads revenue."
          }
        />
        <Button text={"Subscribe"} />
      </div>
      <div className='flex flex-col bg-gray-bg rounded-2xl overflow-hidden mb-4'>
        <h1 className='text-main-secondary font-twitter-chirp-heavy text-xl pb-3 px-4 mt-3'>
          What's happening
        </h1>
        {TRENDING.map((trend) => (
          <div
            key={trend.country}
            className='hover:bg-black/5 transition duration-200 cursor-pointer px-4 py-2'
          >
            <div className='flex justify-between items-center text-slate-500 text-sm'>
              <p>Trending in {trend.country}</p>
              <RiMoreLine size={18} />
            </div>
            <TypographySubtitle subtitle={"british vogue"} />
            <p className='text-slate-500 text-sm'>{trend.views} views</p>
          </div>
        ))}

        <Link
          href={"explore/tabs/for-you"}
          className='py-3 text-main-primary px-4 hover:bg-black/5 transition duration-200 cursor-pointer'
        >
          Show more
        </Link>
      </div>
      <WhoToFollow/>
      <Footer />
    </div>
  );
}

export default Trending;
