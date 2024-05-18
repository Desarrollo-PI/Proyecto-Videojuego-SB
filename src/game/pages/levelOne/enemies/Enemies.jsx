import { useState } from 'react'
import { Goblin } from '../../../globals/enemies/goblin/Goblin'
import { Troll } from '../../../globals/enemies/troll/Troll'
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

  const handleTakeLifeTroll = () => {
    if (currentHearts <= 0) {
      return
    }
    takeLife(75)
    handleSound(['mace'])
  }

  return (
    <>
      {/* {!enemies[1].isDeath && (
        <Goblin
          idEnemy={1}
          position={[21.5, 5, -50]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[2].isDeath && (
        <Goblin
          idEnemy={2}
          position={[21.5, 5, -30]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[3].isDeath && (
        <Goblin
          idEnemy={3}
          position={[-21.5, 5, -50]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[4].isDeath && (
        <Goblin
          idEnemy={4}
          position={[-21.5, 5, -30]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[5].isDeath && (
        <Goblin
          idEnemy={5}
          position={[2.5, 5, -12]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )} */}
      {!enemies[6].isDeath && (
        <Goblin
          idEnemy={6}
          position={[0, 5, -75]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )}
      {/* {!enemies[7].isDeath && (
        <Goblin
          idEnemy={7}
          position={[2.5, 5, -53]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[8].isDeath && (
        <Goblin
          idEnemy={8}
          position={[-2.5, 5, -34]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )} */}
      {!bosses?.troll.isDeath && (
        <Troll
          idEnemy={'troll'}
          position={[0, 0, -100]}
          action={'Walk'}
          takeLife={handleTakeLifeTroll}
          deathEnemy={handleDeathBoss}
          isPlayerDeath={currentHearts === 0}
          speed={2}
          isPlaying={isPlaying}
        />
      )}
    </>
  )
}

export default Enemies
