import React from 'react'

function Container({children}) {
  return (
    <div className='flex flex-col bg-slate-50 px-4 py-3 rounded-3xl mb-4'>
        {children}
    </div>
  )
}

export default Container