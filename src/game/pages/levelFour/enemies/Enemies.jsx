import { useEffect, useState } from 'react'
import { Skeleton } from '../../../globals/enemies/skeleton/Skeleton'
import { Dementor } from '../../../globals/enemies/dementor/Dementor'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { useBosses } from '../../../../providers/bosses/BossesProvider'
import { socket } from '../../../../socket/socket-manager'

const Enemies = () => {
  const [enemies, setEnemies] = useState({
    1: { isDeath: false },
  })

  const { bosses, handleDeathBoss } = useBosses()
  const { handleSound, isPlaying } = useMusic()
  const { currentHearts, takeLife } = usePlayer()

  const handleDeathEnemy = (id) => {
    setEnemies((prev) => ({
      ...prev,
      [id]: { isDeath: true },
    }))
    socket.emit('death-enemy', id)
  }

  const handleTakeLife = () => {
    if (currentHearts <= 0) {
      return
    }
    takeLife(25)
    handleSound(['hurt'])
  }

  const handleTakeLifeEvilWizard = () => {
    if (currentHearts <= 0) {
      return
    }
    takeLife(100)
    handleSound(['hit'])
  }

  socket.on('enemy-death', (enemy) => {
    handleDeathEnemy(enemy.id)
  })

  socket.on('alive-enemies', (enemies) => {
    enemies.forEach((enemy) => {
      if (enemy.death === true) {
        handleDeathEnemy(enemy.id);
      }
    })
  })

  useEffect(() => {
    socket.off('enemy-death')
  }, [])

  useEffect(() => {
    socket.emit('enemies-alive')
  }, [])

  return (
    <>
      {!enemies[1].isDeath && (
        <Skeleton
          idEnemy={1}
          position={[0, 2, -15]}
          action={'Walk'}
          color={'hsl(180,0%,100%)'}
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
          takeLife={handleTakeLifeEvilWizard}
          deathEnemy={handleDeathBoss}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
          handleNearDementor={null}
        />
      )}
    </>
  )
}

export default Enemies
