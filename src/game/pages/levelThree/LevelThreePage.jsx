import WorldLevelThree from './World'
import Lights from './Lights'
import Collectibles from './collectibles/Collectibles'
import Checkpoints from './checkpoints/Checkpoints'
import Obstacles from './obstacles/Obstacles'
import Enemies from './enemies/Enemies'
import Portals from './elements/Portal'

const LevelThreePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelThree />
      <Collectibles />
      <Checkpoints />
      <Obstacles />
      <Enemies />
      <Portals />
    </>
  )
}

export default LevelThreePage
