import WorldLevelThree from './World'
import Lights from './Lights'
import { Spider } from '../../globals/enemies/spider/Spider'
import Collectibles from './collectibles/Collectibles'

const LevelThreePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelThree />
      <Collectibles />
      <Spider position={[-15, 0, -7]} action={0} />
    </>
  )
}

export default LevelThreePage
