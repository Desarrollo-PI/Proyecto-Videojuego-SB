import WorldLevelTwo from './World'
import { Dementor } from '../../globals/enemies/dementor/Dementor'
import Lights from './Lights'

const LevelTwoPage = () => {
  return <>
    <Lights />
    <WorldLevelTwo />
    <Dementor position={[0, 1, -100]} action={0}/>
  </>
}

export default LevelTwoPage
