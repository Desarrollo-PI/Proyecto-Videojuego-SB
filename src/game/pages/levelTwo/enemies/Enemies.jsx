import { useEffect, useState } from 'react'
import { Skeleton } from '../../../globals/enemies/skeleton/Skeleton'
import { Goblin } from '../../../globals/enemies/goblin/Goblin'
import { Dementor } from '../../../globals/enemies/dementor/Dementor'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { useBosses } from '../../../../providers/bosses/BossesProvider'

const Enemies = ({ setOpenDoor = { setOpenDoor } }) => {
  const [enemies, setEnemies] = useState({
    1: { isDeath: false },
    2: { isDeath: false },
    3: { isDeath: false },
    4: { isDeath: false },
    5: { isDeath: false },
    6: { isDeath: false },
    7: { isDeath: false },
    8: { isDeath: false },
    9: { isDeath: false },
    10: { isDeath: false },
    11: { isDeath: false },
  })

  const { bosses, handleDeathBoss } = useBosses()
  const { handleSound, isPlaying } = useMusic()
  const { currentHearts, takeLife, handleNearDementor } = usePlayer()

  const handleDeathEnemy = (id) => {
    setEnemies((prev) => ({
      ...prev,
      [id]: { isDeath: true },
    }))
  }

  const handleTakeLife = () => {
    if (currentHearts <= 0) {
      return
    }
    takeLife(25)
    handleSound(['hurt'])
  }

  const handleTakeLifeDementor = () => {
    if (currentHearts <= 0) {
      return
    }
    takeLife(100)
    handleSound(['hitDementor'])
  }

  useEffect(() => {
    if (
      enemies[6].isDeath &&
      enemies[7].isDeath &&
      enemies[8].isDeath &&
      enemies[9].isDeath &&
      enemies[10].isDeath &&
      enemies[11].isDeath
    ) {
      setOpenDoor(true)
    }
  }, [enemies])

  return (
    <>
      {!enemies[1].isDeath && (
        <Skeleton
          idEnemy={1}
          position={[10, 5, -20]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[2].isDeath && (
        <Skeleton
          idEnemy={2}
          position={[11, 5, -40]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[3].isDeath && (
        <Skeleton
          idEnemy={3}
          position={[-11, 5, -40]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[4].isDeath && (
        <Skeleton
          idEnemy={4}
          position={[-10, 5, -15]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[5].isDeath && (
        <Skeleton
          idEnemy={5}
          position={[-18, 5, -25]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[6].isDeath && (
        <Skeleton
          idEnemy={6}
          position={[14, 5, -80]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[7].isDeath && (
        <Skeleton
          idEnemy={7}
          position={[-14, 5, -80]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[8].isDeath && (
        <Goblin
          idEnemy={8}
          position={[10, 5, -80]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[9].isDeath && (
        <Goblin
          idEnemy={9}
          position={[-10, 5, -80]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[10].isDeath && (
        <Skeleton
          idEnemy={10}
          position={[10, 5, -84]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[11].isDeath && (
        <Skeleton
          idEnemy={11}
          position={[-10, 5, -84]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!bosses?.dementor.isDeath && (
        <Dementor
          idEnemy={'dementor'}
          position={[-1.5, 10, -110]}
          action={'Walk'}
          takeLife={handleTakeLifeDementor}
          deathEnemy={handleDeathBoss}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
          handleNearDementor={handleNearDementor}
        />
      )}
    </>
  )
}

export default Enemies
