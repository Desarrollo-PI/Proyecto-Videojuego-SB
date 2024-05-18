import { useState } from 'react'
import { Skeleton } from '../../../globals/enemies/skeleton/Skeleton'
import { Dementor } from '../../../globals/enemies/dementor/Dementor'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { useBosses } from '../../../../providers/bosses/BossesProvider'

const Enemies = () => {
  const [enemies, setEnemies] = useState({
    1: { isDeath: false },
    2: { isDeath: false },
    3: { isDeath: false },
    4: { isDeath: false },
    5: { isDeath: false },
    6: { isDeath: false },
    7: { isDeath: false },
    8: { isDeath: false },
  })

  const { bosses, handleDeathBoss } = useBosses()
  const { handleSound, isPlaying } = useMusic()
  const { currentHearts, takeLife } = usePlayer()

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
    handleSound(['mace'])
  }

  return (
    <>
      {!enemies[1].isDeath && (
        <Skeleton
          idEnemy={1}
          position={[10, 5, -10]}
          action={'Walk'}
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
          position={[-10, 0, -10]}
          action={'Walk'}
          takeLife={handleTakeLifeDementor}
          deathEnemy={handleDeathBoss}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
    </>
  )
}

export default Enemies
