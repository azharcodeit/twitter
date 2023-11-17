import Skeleton from "@components/Skeleton";

function HeroLoading() {
  return (
    <Skeleton className={`relative bg-bg-gray overflow-hidden w-full h-[200px]`}/>
  );
}

export default HeroLoading;
