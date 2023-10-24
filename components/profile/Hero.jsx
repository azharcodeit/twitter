'use client'
function Hero({user}) {
  return (
    <div className={`bg-bg-gray overflow-hidden w-full h-[200px] bg-${!user?.image ? 'bg-gray' : `[url(${user?.image})]`}`}>
    </div>
  )
}

export default Hero