import WorldLevelOneWithPhysisc from './World'
import Lights from './Lights'
import { Goblin } from '../../globals/enemies/goblin/Goblin'
import { Skeleton } from '../../globals/enemies/skeleton/Skeleton'
import { SkeletonMage } from '../../globals/enemies/skeletonMage/SkeletonMage'
import { Spider } from '../../globals/enemies/spider/Spider'
import { Troll } from '../../globals/enemies/troll/Troll'
import { Witch } from '../../globals/enemies/witch/Witch'
import { RigidBody } from '@react-three/rapier'


const LevelOnePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelOneWithPhysisc />
      <Goblin position={[-2.5, 0, -34]} action={1} />
      <Goblin position={[2.5, 0, -12]} action={1} />
      <Skeleton position={[0, 0, -75]} action={1} />
      <SkeletonMage position={[2.5, 0, -53]} action={1} />
      <Troll position={[0, 0, -100]} action={1} />
      <Witch position={[-2.5, 0, -34]} action={1} />
    </>
  )
}

export default LevelOnePage
