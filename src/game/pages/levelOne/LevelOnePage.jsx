import { Dementor } from '../../globals/enemies/dementor/Dementor'
import WorldLevelOneWithPhysisc from './World'
import { EvilWizard } from '../../globals/enemies/evilWizard/EvilWizard'
import { Goblin } from '../../globals/enemies/goblin/Goblin'
import { Skeleton } from '../../globals/enemies/skeleton/Skeleton'
import { SkeletonMage } from '../../globals/enemies/skeletonMage/SkeletonMage'
import { Spider } from '../../globals/enemies/spider/Spider'
import { Troll } from '../../globals/enemies/troll/Troll'
import { Witch } from '../../globals/enemies/witch/Witch'


const LevelOnePage = () => {
  return (
    <>
      <WorldLevelOneWithPhysisc />
      <Dementor position={[2, 1, -2]} action={0} />
      <EvilWizard position={[4, 0, -5]} action={0} />
      <Goblin position={[7, 0, -6]} action={0} />
      <Skeleton position={[10, 0, -6]} action={0} />
      <SkeletonMage position={[-3, 0, -12]} action={0} />
      <Spider position={[-7, 0, -12]} action={0} />
      <Troll position={[-5, 0, -20]} action={0} />
      <Witch position={[-3, 0, -20]} action={0} />
    </>
  )
}

export default LevelOnePage
