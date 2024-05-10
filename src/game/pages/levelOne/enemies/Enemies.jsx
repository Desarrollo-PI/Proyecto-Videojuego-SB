import { Goblin } from '../../../globals/enemies/goblin/Goblin'
import { Skeleton } from '../../../globals/enemies/skeleton/Skeleton'
import { SkeletonMage } from '../../../globals/enemies/skeletonMage/SkeletonMage'
import { Troll } from '../../../globals/enemies/troll/Troll'
import { Witch } from '../../../globals/enemies/witch/Witch'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'

const Enemies = () => {
  const { handleSound } = useMusic()
  const { currentHearts, takeLife } = usePlayer()

  const handleTakeLife = (damage) => {
    if (currentHearts <= 0) {
      return
    }
    handleSound(['hurt'])
    takeLife(damage)
  }

  return (
    <>
      {/* <Goblin position={[-2.5, 2.5, -18]} action={"Walk"} /> */}
      <Goblin
        position={[2.5, 2.5, -12]}
        action={'Idle'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
      />
      <Skeleton position={[0, 2.5, -75]} action={1} />
      <SkeletonMage position={[2.5, 5, -53]} action={1} />
      <Troll position={[0, 0, -100]} action={1} />
      <Witch position={[-2.5, 0, -34]} action={1} />
    </>
  )
}

export default Enemies
