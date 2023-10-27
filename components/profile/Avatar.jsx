import React from 'react'
import Image from 'next/image'
function Avatar({user}) {
  return (
    <div className='z-10 overflow-hidden mt-[-15%] rounded-full border-white border-4 hover:bg-blend-darken'>
        <Image className="scale-125" src={user?.profileImage || '/assets/images/avatar.jpeg'} alt="avatar" height={130} width={130} />
    </div>
  )
}

export default Avatar