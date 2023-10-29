import React from "react";
import Link from "next/link";

const Tabs = ({ params: router }) => {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";
  return (
    <div className='flex h-auto'>
      <div>
        <div
          selected={isTabOne}
          className='flex flex-col items-center w-[20%] hover:bg-black/10 transition duration-200 cursor-pointer'
        >
          <Link href={{ pathname: "/", query: { tab: "1" } }}>
            <div>
              <div className='py-4 font-semibold text-main-secondary'>
                Posts
              </div>
              <div className='w-full h-[4px] bg-main-primary rounded-lg'></div>
            </div>
          </Link>
        </div>
        <div
          className='flex flex-col items-center w-[20%] hover:bg-black/10 transition duration-200 cursor-pointer'
          selected={isTabTwo}
        >
          <Link href={{ pathname: "/", query: { tab: "2" } }}>
            <div>
              <div className='py-4 font-semibold text-main-secondary'>
                Likes
              </div>
              <div className='w-full h-[4px] bg-main-primary rounded-lg'></div>
            </div>
          </Link>
        </div>
      </div>
      <TabBody>
        {isTabOne && <React.Fragment>This is tab one content</React.Fragment>}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
      </TabBody>
    </div>
  );
};

export default Tabs;
