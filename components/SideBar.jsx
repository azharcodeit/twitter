import Link from "next/link";
import Image from "next/image";
function SideBar() {
  return (
    <nav className='sidebar xl:col-span-1 w-full h-screen flex flex-col justify-between pl-2 pr-2 sticky top-0'>
      <div className='flex flex-col max-xl:items-center '>
        <Link href={"/home"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt='twitter'
            width={30}
            height={30}
            className='m-3'
          />
        </Link>
        <Link href={"/home"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/home.svg"}
            alt='twitter'
            width={25}
            height={25}
            className="font-bold"
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Home</p>
        </Link>
        <Link href={"/explore"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/search.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Explore</p>
        </Link>
        <Link href={"/notifications"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/notifications.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Notifications</p>
        </Link>
        <Link href={"/messages"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/messages.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Messages</p>
        </Link>
        <Link href={"/lists"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/lists.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Lists</p>
        </Link>
        <Link href={"/bookmarks"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/bookmarks.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Bookmarks</p>
        </Link>
        <Link href={"/communities"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/lists.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Communities</p>
        </Link>
        <Link href={"/verified"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/images/logo.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Verified</p>
        </Link>
        <Link href={"/profile"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/profile.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>Profile</p>
        </Link>
        <Link href={"/more"} className='flex items-center py-1 m-3'>
          <Image
            src={"/assets/icons/more.svg"}
            alt='twitter'
            width={25}
            height={25}
          />
          <p className='hidden_xl text-xl mr-4 ml-5'>More</p>
        </Link>
        <button className='flex items-center justify-content-center text-white bg-main-primary rounded-full xl:my-3 xl:h-[52px] xl:w-[92%]'>
          <Image
            src={"/assets/icons/post-small.svg"}
            alt='post-feather'
            width={25}
            height={25}
            className='block h-6 w-6 xl:hidden m-3 '
          />
          <p className='flex flex-row w-full items-center justify-content-center hidden xl:block text-[17px] font-bold'>
            Post
          </p>
        </button>
      </div>
      <div className='flex items-center p-3 my-2'>
        <Link href={"/janedoe"}>
          <Image
            src={"/assets/icons/profile.svg"}
            alt='twitter'
            width={40}
            height={40}
          />
        </Link>
        <div className='flex flex-col items-start justify-items-start mx-3 hidden_xl'>
          <div className='text-base font-semibold'>Jane Doe</div>
          <div className='text-sm'>janedoe</div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
