import React from "react";

function Tabs() {
  const tabs = ["Replies", "Highlights", "Media", "Likes"];
  return (
    <div className='flex h-auto'>
      <div className='flex flex-col items-center w-[20%] hover:bg-black/10 transition duration-200 cursor-pointer'>
        <div>
          <div className='py-4 font-semibold text-main-secondary'>Posts</div>
          <div className='w-full h-[4px] bg-main-primary rounded-lg'></div>
        </div>
      </div>
      {tabs.map((tab, index) => {
        return (
          <div key={index} className='flex flex-col items-center w-[20%] hover:bg-black/10 transition duration-200 cursor-pointer'>
            <div className='py-4 font-medium text-slate-500 focus:font-semibold focus:text-main-secondary'>
              {tab}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
