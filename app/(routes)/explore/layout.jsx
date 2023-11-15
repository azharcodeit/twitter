import MainContainer from '@components/MainContainer'

function layout({explore, trending}) {
  return (
    <MainContainer>{explore}{trending}</MainContainer>
  )
}

export default layout