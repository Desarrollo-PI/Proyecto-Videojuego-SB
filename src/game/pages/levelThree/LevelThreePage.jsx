import WorldLevelThree from './World'
import Lights from './Lights'
import Collectibles from './collectibles/Collectibles'
import Checkpoints from './checkpoints/Checkpoints'
import Obstacles from './obstacles/Obstacles'
import Enemies from './enemies/Enemies'

const LevelThreePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelThree />
      <Collectibles />
      <Checkpoints />
      <Obstacles />
      <Enemies />
    </>
  )
}

export default LevelThreePage
