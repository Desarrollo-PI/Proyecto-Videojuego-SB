import WorldLevelOneWithPhysisc from './World'
import Lights from './Lights'
import { Goblin } from '../../globals/enemies/goblin/Goblin'
import { Skeleton } from '../../globals/enemies/skeleton/Skeleton'
import { SkeletonMage } from '../../globals/enemies/skeletonMage/SkeletonMage'
import { Troll } from '../../globals/enemies/troll/Troll'
import { Witch } from '../../globals/enemies/witch/Witch'
import { Sword } from './collectibles/Sword'
import { Glasses } from './collectibles/Glasses'
import { GreenPotion } from './collectibles/GreenPotion'
import { ThunderLight } from './collectibles/ThunderLight'
import { WitchHat } from './collectibles/WitchHat'

const LevelOnePage = () => {
  return (
    <>
      <Lights />
      <WorldLevelOneWithPhysisc />
      <Sword position={[0, 1, -5]} />
      <GreenPotion position={[14, 5.5, -85]} />
      <Glasses position={[-8, 1, -35]} />
      <ThunderLight position={[11.8, 9.6, -6.4]} />
      <WitchHat position={[5, 1, -19]} />
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
