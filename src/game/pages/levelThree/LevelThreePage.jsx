import WorldLevelThree from './World'
import Lights from './Lights'
import { Spider } from '../../globals/enemies/spider/Spider'
import Collectibles from './collectibles/Collectibles'
import Checkpoints from './checkpoints/Checkpoints'
import Obstacles from './obstacles/Obstacles'

const LevelThreePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelThree />
      <Collectibles />
      <Checkpoints />
      <Obstacles />
      <Spider position={[-15, 0, -7]} action={0} />
    </>
  )
}

export default LevelThreePage
