import WorldLevelFourWithPhysisc from './World'
import { EvilWizard } from '../../globals/enemies/evilWizard/EvilWizard'
import Lights from './Lights'

const LevelFourPage = () => {
  return <>
    <Lights />
    <WorldLevelFourWithPhysisc />
    <EvilWizard position={[0, -1, -48]} action={0} />
  </>
}

export default LevelFourPage
