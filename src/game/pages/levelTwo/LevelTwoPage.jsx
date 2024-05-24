import WorldLevelTwo from './World'
import Lights from './Lights'
import Checkpoints from './checkpoints/Checkpoints'
import Signs from './signs/Signs'
import Collectibles from './collectibles/Collectibles'
import Enemies from './enemies/Enemies'
import GrassPlatforms from './grassPlatforms/GrassPlatforms'
import Spikes from './spikes/Spikes'
import MazeEntries from './maze/MazeEntries'

const LevelTwoPage = () => {
  return (
    <>
      {/*<Lights />*/}
      <WorldLevelTwo />
      <MazeEntries />
      <Signs />
      <Checkpoints />
      <Collectibles />
      <Enemies />
      <GrassPlatforms />
      <Spikes />
    </>
  )
}

export default LevelTwoPage
