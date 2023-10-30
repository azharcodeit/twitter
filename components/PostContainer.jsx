import Link from "next/link";
import Image from "next/image";
import PostWrapper from "@components/PostWrapper";
import { getUserById } from "@app/actions/getUserById";
import { RiMoreLine } from "react-icons/ri";
import { GoPerson, GoBookmark } from "react-icons/go";
import { LuRepeat2 } from "react-icons/lu";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";

async function PostContainer({ post }) {
  const user = await getUserById(post?.userId);
  const LikeIcon = FaRegHeart;
  const now = new Date();
  const date = new Date(post?.updatedAt);
  
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const formattedDate = `${day} ${month.slice(0, 3)} `;
  const timeDifference = now - post?.updatedAt;
  const secondsPassed = Math.floor(timeDifference / 1000);
  const minutesPassed = Math.floor(timeDifference / (1000 * 60));
  const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));

  let postedTime = "";

  if (secondsPassed < 60) {
    postedTime = secondsPassed + "s";
  } else if (minutesPassed < 60) {
    postedTime = minutesPassed + "m";
  } else if (hoursPassed < 24) {
    postedTime = hoursPassed + "h";
  } else {
    postedTime = formattedDate;
  }

  return (
    <PostWrapper postId={""}>
      <div className='flex w-fit mr-3'>
        <Link href={"/home"}>
          {user?.profileImage ? (
            <Image
              src={user.profileImage}
              alt='avatar'
              width={40}
              height={40}
              className='border rounded-xl'
            />
          ) : (
            <GoPerson size={30} />
          )}
        </Link>
      </div>
      <div className='w-full'>
        <div className='flex justify-between h-fit row-span-1'>
          <div className='flex'>
            <h1 className='font-semibold'>{user?.name || "Name Surname"} </h1>
            <div className='flex text-slate-500 ml-1'>
              <h1> @{user?.username}</h1>
              <span className='mx-1'> · </span>
              <h1> {postedTime} </h1>
            </div>
          </div>
          <RiMoreLine size={15} />
        </div>
        <div className='h-fit row-span-1'>{post?.body || "Post Text"}</div>
        {post?.image && (
          <div className='w-fit f-fit overflow-hidden mt-3'>
            <Link href={"/home"}>
              <Image
                src={post.image}
                alt='post'
                height={504}
                width={504}
                className='rounded-xl border'
              />
            </Link>
          </div>
        )}
        <div className='flex justify-between  mt-2'>
          <button className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full mr-2 hover:bg-main-primary/20'>
              <FaRegComment size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>20</h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-repost-green'>
            <div className='rounded-full m-2 hover:bg-repost-green/20'>
              <LuRepeat2 size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>78</h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-red-like'>
            <div className='rounded-full m-2 hover:bg-red-like/20'>
              <LikeIcon size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>{post?.likedIds.length}</h1>
          </button>
          <button className='flex items-center text-secondary-text hover:text-main-primary'>
            <div className='rounded-full m-2 hover:bg-main-primary/20'>
              <GoBookmark size={20} />
            </div>
            <h1 className='mx-1 font-normal text-sm '>{post?.bookmarkedIds.length}</h1>
          </button>
        </div>
      </div>
    </PostWrapper>
  );
}

export default PostContainer;
