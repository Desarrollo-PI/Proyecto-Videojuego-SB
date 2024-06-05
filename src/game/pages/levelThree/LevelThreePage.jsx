import WorldLevelThree from './World'
import Lights from './Lights'
import Collectibles from './collectibles/Collectibles'
import Checkpoints from './checkpoints/Checkpoints'
import Obstacles from './obstacles/Obstacles'
import Enemies from './enemies/Enemies'
import Portals from './elements/Portals'
import Signs from './elements/Signs'

const LevelThreePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelThree />
      <Collectibles />
      <Checkpoints />
      <Obstacles />
      {/* <Enemies /> */}
      <Portals />
      <Signs />
    </>
  )
}

export default LevelThreePage
