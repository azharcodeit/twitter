import Skeleton from "@components/Skeleton";

function BioLoading() {
  return (
    <div className='p-4 w-full'>
      <div className='flex flex-row justify-between '>
        <div className='z-10 overflow-hidden mt-[-15%] rounded-full border-white border-4 bg-white hover:bg-blend-darken'>
          <Skeleton className='w-[130px] h-[130px] bg-slate-200' />
        </div>
        <Skeleton className='rounded-3xl px-4 text-sm h-9 w-[120px]' />
      </div>
      <div className='mt-1 mb-3'>
        <Skeleton className='w-40 h-5 mb-1' />
        <Skeleton className='w-16 h-4' />
      </div>
      <div className='mb-3'>
        <Skeleton className='w-3/4 h-6' />
      </div>
      <div className='flex text-gray-text mb-3'>
        <div className='flex items-center'>
          <Skeleton className='w-44 h-4' />
        </div>
      </div>
      <div className='flex items-center text-gray-text text-sm mb-5'>
        <div className='mr-4'>
          <Skeleton className='w-20 h-4' />
        </div>
        <Skeleton className='w-20 h-4' />
      </div>
    </div>
  );
}

export default BioLoading;
