import { useEffect, useState } from 'react'
import { Skeleton } from '../../../globals/enemies/skeleton/Skeleton'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { useBosses } from '../../../../providers/bosses/BossesProvider'
import { socket } from '../../../../socket/socket-manager'
import { EvilWizard } from '../../../globals/enemies/evilWizard/EvilWizard'
import BlackWallServer from '../../../globals/obstacles/BlackWallServer'

const Enemies = () => {
  const [enemies, setEnemies] = useState({
    1: { isDeath: false },
    2: { isDeath: false },
    3: { isDeath: false },
    4: { isDeath: false },
  })
  const [blackWall, setBlackWall] = useState([
    { id: 1, isDestroyed: false },

  ])

  const { bosses, handleDeathBoss, handleDeathBossNoEmit } = useBosses()
  const { handleSound, isPlaying } = useMusic()
  const { currentHearts, takeLife } = usePlayer()

  const handleDeathEnemy = (id) => {
    setEnemies((prev) => ({
      ...prev,
      [id]: { isDeath: true },
    }))
    socket.emit('death-enemy', id)
  }

  const handleDeathEnemyNoEmit = (id) => {
    setEnemies((prev) => ({
      ...prev,
      [id]: { isDeath: true },
    }))
  }

  const handleTakeLife = (id) => {
    if (id === 1) {
      if (currentHearts <= 0) {
        return
      }
      takeLife(25)
    } else {
      socket.emit('hit-second-player', 25)
    }
  }

  const handleTakeLifeEvilWizard = (id) => {
    if (id === 1) {
      if (currentHearts <= 0) {
        return
      }
      takeLife(100)
    } else {
      socket.emit('hit-second-player', 100)
    }
  }

  socket.on('enemy-death', (enemy) => {
    handleDeathEnemyNoEmit(enemy.id)
  })

  socket.on('dead-boss', () => {
    handleDeathBossNoEmit('darkWizard')
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
    socket.off('dead-boss')
  }, [])

  useEffect(() => {
    socket.emit('enemies-alive')
  }, [])

  return (
    <>
      {!enemies[1].isDeath && (
        <Skeleton
          idEnemy={1}
          position={[0, 2, -210]}
          action={'Walk'}
          color={'hsl(180,0%,100%)'}
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
          position={[15, 2, -210]}
          action={'Walk'}
          color={'hsl(180,0%,100%)'}
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
          position={[-15, 2, -210]}
          action={'Walk'}
          color={'hsl(180,0%,100%)'}
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
          position={[0, 1, -80]}
          action={'Walk'}
          color={'hsl(180,0%,100%)'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!bosses?.darkWizard.isDeath && (
        <EvilWizard
          idEnemy={'darkWizard'}
          position={[-1.5, 1, -255]}
          action={'Walk'}
          color={'hsl(0,0%,0%)'}
          takeLife={handleTakeLifeEvilWizard}
          deathEnemy={handleDeathBoss}
          isPlayerDeath={currentHearts === 0}
          speed={5}
          isPlaying={isPlaying}
        />
      )}
      {(!enemies[1].isDeath && !enemies[2].isDeath && !enemies[3].isDeath) && (
        <BlackWallServer
          idBlackWall={1}
          position={[0, 0, -116]}
          rotation={[0, 0, 0]}
          scale={[32, 45, 1]}
        />
      )}
    </>
  )
}

export default Enemies
