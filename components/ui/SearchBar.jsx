import React from "react";
import {
  GoSearch
} from "react-icons/go";
function SearchBar() {
  return (
    <form className='flex items-center'>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-4 flex items-center  pointer-events-none'>
          <GoSearch size={15}/>
        </div>
        <input
          type='text'
          className='bg-darker-gray-bg text-gray-700 text-sm rounded-3xl block w-full pl-14 p-3  focus:outline-none border border-darker-gray-bg  focus:border-main-primary focus:bg-white'
          placeholder='Search'
          required
        />
      </div>
    </form>
  );
}

export default SearchBar;
