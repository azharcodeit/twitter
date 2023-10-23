"use client";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

function Back() {
  const router = useRouter();

  return (
    <button
      type='button'
      className='rounded-full hover:bg-darker-gray-bg mr-5 p-2'
      onClick={() => router.back()}
    >
      <GoArrowLeft size={20} />
    </button>
  );
}

export default Back;
