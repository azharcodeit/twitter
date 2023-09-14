import React from 'react'

function MainContainer({children}) {
  return (
    <div className='grid grid-flow-col grid-cols-3'>{children}</div>
  )
}

export default MainContainer