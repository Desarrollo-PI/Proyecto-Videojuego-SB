import WorldLevelThree from './World'
import Lights from './Lights'
import { Spider } from '../../globals/enemies/spider/Spider'

const LevelThreePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelThree />
      <Spider position={[-15, 0, -7]} action={0} />
    </>
  )
}

export default LevelThreePage
