import React from "react";
import Image from "next/image";

function SearchBar() {
  return (
    <form class='flex items-center mb-3'>
      <div class='relative w-full'>
        <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <Image
            src={"/assets/icons/search.svg"}
            alt='post'
            width={20}
            height={20}
          />
        </div>
        <input
          type='text'
          class='bg-slate-100 text-gray-700 text-base rounded-3xl block w-full pl-12 p-3  focus:outline-none border border-slate-100  focus:border-main-primary'
          placeholder='Search'
          required
        />
      </div>
    </form>
  );
}

export default SearchBar;
