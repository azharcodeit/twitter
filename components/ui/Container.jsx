import React from 'react'

function Container({children}) {
  return (
    <div className='flex flex-col bg-gray-bg px-4 py-3 rounded-2xl mb-4'>
        {children}
    </div>
  )
}

export default Container