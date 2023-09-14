import React from 'react'
import FeedExplore from './@feedExplore/page'
import Follow from './@follow/page'
import MainContainer from '@components/MainContainer'

function Explore() {
  return (
    <MainContainer>
        <FeedExplore/>
        <Follow/>
    </MainContainer>
  )
}

export default Explore