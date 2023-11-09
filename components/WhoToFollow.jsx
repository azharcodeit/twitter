import ProfileInfo from "@components/ui/ProfileInfo";
import Button from "@components/ui/Button";
import Link from "next/link";

const WhoToFollow = () => {
  return (
    <div className='flex flex-col bg-gray-bg rounded-2xl overflow-hidden mb-4'>
      <h1 className='text-main-secondary font-bold text-xl pb-3 px-4 mt-3'>
        Who to follow
      </h1>
      <div className='flex py-3 items-center justify-between px-4 hover:bg-black/5 transition duration-200 cursor-pointer'>
        <ProfileInfo
          name={"Nurbek Ismagulov"}
          username={"nismagulov"}
          image={"/assets/images/avatar.jpeg"}
        />
        <Button text={"Follow"} />
      </div>
      <Link
        href={"explore/tabs/for-you"}
        className='py-3 text-main-primary px-4 hover:bg-black/5 transition duration-200 cursor-pointer'
      >
        Show more
      </Link>
    </div>
  );
};

export default WhoToFollow;
