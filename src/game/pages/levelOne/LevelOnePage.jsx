import WorldLevelOneWithPhysisc from './World'
import Lights from './Lights'
import Collectibles from './collectibles/Collectibles'
import Obstacles from './obstacles/Obstacles'
import Checkpoints from './checkpoints/Checkpoints'
import Enemies from './enemies/Enemies'

const LevelOnePage = () => {
  return (
    <>
      {/* <Lights /> */}
      <WorldLevelOneWithPhysisc />
      <Collectibles />
      <Obstacles />
      <Checkpoints />
      <Enemies />
    </>
  )
}

export default LevelOnePage
