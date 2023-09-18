import React from 'react'

function MainContainer({children}) {
  return (
    <div className='grid grid-flow-col xl:grid-cols-5 max-xl:grid-cols-home'>{children}</div>
  )
}

export default MainContainer