import WorldLevelFourWithPhysisc from './World'
import { EvilWizard } from '../../globals/enemies/evilWizard/EvilWizard'
import Lights from './Lights'
import { socket } from '../../../socket/socket-manager'
import { useEffect } from 'react'
import { SecondPlayer } from '../../globals/player/SecondPlayer'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import Collectibles from './collectibles/Collectibles'
import Checkpoints from './checkpoints/Checkpoints'
import Obstacles from './obstacles/Obstacles'
import Enemies from './enemies/Enemies'

const LevelFourPage = () => {
  const { player, setPlayer, takeLife, currentHearts } = usePlayer()

  socket.on('status-leader', (players) => {
    const thisPlayer = players.find((player) => player.id === socket.id)
    setPlayer({
      ...player,
      leader: thisPlayer.leader,
      haveLeviosa: thisPlayer.haveLeviosa,
    })
  })
  socket.on('hit-player', () => {
    handleTakeLife(1)
  })

  useEffect(() => {
    socket.emit('player-connected')
    socket.emit('leader')
    socket.emit('create-enemies', [
      { id: 1, position: null, rotation: null, life: 200, dead: false },
    ])
    socket.emit('create-ivys', [
      { id: 1, isFired: false, isBurned: false },
      { id: 2, isFired: false, isBurned: false },
    ])
    socket.emit('create-keys', [
      { id: 1, isCollected: false },
      { id: 2, isCollected: false },
    ])
    socket.emit('create-boxes')
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
      <Enemies />
      <SecondPlayer position={[0, -30, 0]} />
      <EvilWizard position={[0, 5, -48]} action={0} />
      <Obstacles />
    </>
  )
}

export default LevelFourPage
