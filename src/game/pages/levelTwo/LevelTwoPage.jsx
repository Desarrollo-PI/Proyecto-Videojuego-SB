import WorldLevelTwo from './World'
import Lights from './Lights'
import Checkpoints from './checkpoints/Checkpoints'
import Collectibles from './collectibles/Collectibles'
import Enemies from './enemies/Enemies'

const LevelTwoPage = () => {
  return (
    <>
      <Lights />
      <WorldLevelTwo />
      <Checkpoints />
      <Collectibles />
      <Enemies />
    </>
  )
}

export default LevelTwoPage
