'use client'
function Hero({image}) {
  return (
    <div className={`bg-bg-gray overflow-hidden w-full h-[200px] bg-${!image ? 'bg-gray' : `[url(${image})]`}`}>
    </div>
  )
}

export default Hero