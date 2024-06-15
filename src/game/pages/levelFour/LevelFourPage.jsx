import WorldLevelFourWithPhysisc from './World'
import { EvilWizard } from '../../globals/enemies/evilWizard/EvilWizard'
import Lights from './Lights'
import Collectibles from './collectibles/Collectibles'
import Checkpoints from './checkpoints/Checkpoints'

const LevelFourPage = () => {
  return (
    <>
      {/* <Lights /> */}
      <WorldLevelFourWithPhysisc />
      <Collectibles />
      <Checkpoints />
      <EvilWizard position={[0, 5, -48]} action={0} />
    </>
  )
}

export default LevelFourPage
