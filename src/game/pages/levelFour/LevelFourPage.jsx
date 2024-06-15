import WorldLevelFourWithPhysisc from './World'
import { EvilWizard } from '../../globals/enemies/evilWizard/EvilWizard'
import Lights from './Lights'
import { socket } from '../../../socket/socket-manager'
import { useEffect } from 'react'
import { SecondPlayer } from '../../globals/player/SecondPlayer'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { Skeleton } from '../../globals/enemies/skeleton/Skeleton'

const LevelFourPage = () => {

  const { player, setPlayer, isPoisoned } = usePlayer()
  
  socket.on('status-leader', (players) => {
    const thisPlayer = players.find(player => player.id === socket.id)
    setPlayer({ ...player, leader: thisPlayer.leader })
  })
  
  useEffect(() => {
    socket.emit('player-connected')
    socket.emit('leader')
  }, [])

  useEffect(() => {
    return () => {
      socket.off('status-leader')
      socket.emit('player-disconnected')
    }
  }, [])

  return (
    <>
      <Lights />
      <WorldLevelFourWithPhysisc />
      <Skeleton
          idEnemy={1}
          position={[10, 5, -20]}
          action={'Walk'}
          takeLife={null}
          deathEnemy={null}
          isPlayerDeath={false}
          speed={3}
          isPlaying={null}
        />
      <EvilWizard position={[0, -1, -48]} action={0} />
      <SecondPlayer position={[0,0,0]} />
    </>
  )
}

export default LevelFourPage
