import WorldLevelTwo from './World'
import { Dementor } from '../../globals/enemies/dementor/Dementor'
import Lights from './Lights'
import Checkpoints from './checkpoints/Checkpoints'
import Collectibles from './collectibles/Collectibles'

const LevelTwoPage = () => {
  return (
    <>
      <Lights />
      <WorldLevelTwo />
      <Checkpoints />
      <Collectibles />
      <Dementor position={[0, 1, -100]} action={0} />
    </>
  )
}

export default LevelTwoPage
