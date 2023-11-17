import Skeleton from "@components/Skeleton";

function PostLoading() {
  return (
    <div className='flex felx-col z-0 items-start h-14 px-4 py-3 border-darker-gray-bg border-b h-fit cursor-pointer'>
      <div className='flex w-fit mr-3'>
        <Skeleton className='rounded-3xl h-10 w-10' />
      </div>
      <div className='w-full'>
        <div className='flex justify-between h-fit row-span-1'>
          <div className='flex'>
            <Skeleton className='h-5 w-16' />
            <div className='flex ml-1'>
              <Skeleton className='h-5 w-12' />
              <span className='mx-1 flex items-center'><Skeleton className='h-1 w-1'/></span>
              <Skeleton className='h-5 w-5' />
            </div>
          </div>
           <div className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full hover:bg-main-primary/20'>
              <Skeleton className='h-5 w-5' />
            </div>
          </div>
        </div>
        <div className='w-full h-full row-span-1 mt-2'>
          <Skeleton className='w-[100%] h-[120px]' />
        </div>
        <div className='flex justify-between  mt-2'>
          <div className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full mr-2 hover:bg-main-primary/20'>
              <Skeleton className='h-5 w-10' />
            </div>
          </div>
          <div className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full mr-2 hover:bg-main-primary/20'>
              <Skeleton className='h-5 w-10' />
            </div>
          </div>
          <div className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full mr-2 hover:bg-main-primary/20'>
              <Skeleton className='h-5 w-10' />
            </div>
          </div>
          <div className='flex items-center text-secondary-text  hover:text-main-primary'>
            <div className='rounded-full hover:bg-main-primary/20'>
              <Skeleton className='h-5 w-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostLoading;
