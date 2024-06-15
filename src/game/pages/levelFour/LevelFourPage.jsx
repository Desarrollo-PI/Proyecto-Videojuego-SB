import WorldLevelFourWithPhysisc from './World'
import { EvilWizard } from '../../globals/enemies/evilWizard/EvilWizard'
import Lights from './Lights'
import { socket } from '../../../socket/socket-manager'
import { useEffect } from 'react'
import { SecondPlayer } from '../../globals/player/SecondPlayer'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { Skeleton } from '../../globals/enemies/skeleton/Skeleton'
import Collectibles from './collectibles/Collectibles'
import Checkpoints from './checkpoints/Checkpoints'

const LevelFourPage = () => {

  const { player, setPlayer, takeLife, currentHearts } = usePlayer()
  
  socket.on('status-leader', (players) => {
    const thisPlayer = players.find(player => player.id === socket.id)
    setPlayer({ ...player, leader: thisPlayer.leader })
  })
  socket.on('hit-player', () => {
    handleTakeLife(1)
  })
  
  useEffect(() => {
    socket.emit('player-connected')
    socket.emit('leader')
    socket.emit('create-enemies', [{id: 0, position: null, rotation: null, life: null, dead: false}])
  }, [])

  useEffect(() => {
    return () => {
      socket.off('status-leader')
      socket.off('hit-player')
      socket.emit('player-disconnected')
    }
  }, [])

  const handleTakeLife = (id) => {
    if (id === 1) {
      if (currentHearts <= 0) {
        return
      }
      takeLife(25)
    } else {
      socket.emit('hit-second-player')
    }
  }

  return (
    <>
      {/* <Lights /> */}
      <WorldLevelFourWithPhysisc />
      <Collectibles />
      <Checkpoints />
      <SecondPlayer position={[0,0,0]} />
      <Skeleton
          idEnemy={0}
          position={[0, 2, -15]}
          action={'Walk'}
          takeLife={handleTakeLife}
          deathEnemy={null}
          isPlayerDeath={null}
          speed={3}
          isPlaying={null}
        />
      <EvilWizard position={[0, 5, -48]} action={0} />
    </>
  )
}

export default LevelFourPage
