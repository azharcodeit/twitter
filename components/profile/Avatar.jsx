import React from 'react'
import Image from 'next/image'
function Avatar() {
  return (
    <div className='overflow-hidden mt-[-15%] rounded-full border-[#ffffff] border-4'>
        <Image className="scale-125" src="/assets/images/avatar.jpeg" alt="avatar" height={130} width={130} />
    </div>
  )
}

export default Avatar