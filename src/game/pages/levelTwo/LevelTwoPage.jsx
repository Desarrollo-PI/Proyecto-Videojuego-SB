import WorldLevelTwo from './World'
import Lights from './Lights'
import Checkpoints from './checkpoints/Checkpoints'
import Signs from './signs/Signs'
import Collectibles from './collectibles/Collectibles'
import Enemies from './enemies/Enemies'
import Elements from './Elements/Elements'

const LevelTwoPage = () => {
  return (
    <>
      {/*<Lights />*/}
      <WorldLevelTwo />
      <Signs/>
      <Checkpoints />
      <Collectibles />
      <Enemies />
    </>
  )
}

export default LevelTwoPage
