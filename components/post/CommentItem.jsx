import Link from "next/link";
import Image from "next/image";
import { RiMoreLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { getPostedTime } from "@utils";
import { getUserById } from "@app/actions/getUserById";

async function CommentItem({data}) {
  const fetchedUser = await getUserById(data?.userId);

  const postedTime = getPostedTime(data?.createdAt);
  return (
    <div className='flex z-0 items-start h-fit px-4 py-3 border-darker-gray-bg border-b hover:bg-black/5 transition duration-200 cursor-pointer'>
      <div className='flex w-fit mr-3'>
        <div >
          {fetchedUser?.profileImage ? (
            <Image
              src={fetchedUser?.profileImage}
              alt='avatar'
              width={40}
              height={40}
              className='border rounded-xl'
            />
          ) : (
            <GoPerson size={30} />
          )}
        </div>
      </div>
      <div className='w-full'>
        <div className='flex justify-between h-fit row-span-1'>
          <div className='flex'>
            <h1 className='font-twitter-chirp-bold'>
              {fetchedUser?.name || "Name Surname"}{" "}
            </h1>
            <div className='flex text-slate-500 ml-1'>
              <Link href={`users/${fetchedUser?.username}`}>
                <h1>@{fetchedUser?.username}</h1>
              </Link>
              <span className='mx-1'> · </span>
              <h1> {postedTime} </h1>
            </div>
          </div>
          <RiMoreLine size={15} />
        </div>
        <div className='h-fit row-span-1'>{data?.body || "Post Text"}</div>
      </div>
    </div>
  );
}

export default CommentItem;
