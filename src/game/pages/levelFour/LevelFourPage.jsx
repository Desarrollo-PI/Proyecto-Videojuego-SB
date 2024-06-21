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
  socket.on('hit-player', (damage) => {
    handleTakeLife(1, damage)
  })

  useEffect(() => {
    socket.emit('player-connected')
    socket.emit('leader')
    socket.emit('create-enemies', [
      { id: 1, position: null, rotation: null, life: 200, dead: false },
      { id: 'darkWizard', position: null, rotation: null, life: 1500, dead: false }
    ])
    socket.emit('create-ivys', [
      { id: 1, isFired: false, isBurned: false },
      { id: 2, isFired: false, isBurned: false },
      { id: 3, isFired: false, isBurned: false },
      { id: 4, isFired: false, isBurned: false },
      { id: 5, isFired: false, isBurned: false },
      { id: 6, isFired: false, isBurned: false },
      { id: 7, isFired: false, isBurned: false },
      { id: 8, isFired: false, isBurned: false },
    ])
    socket.emit('create-keys', [
      { id: 1, isCollected: false },
      { id: 2, isCollected: false },
    ])
    socket.emit('create-blackWall', [
      { id: 1},
      { id: 2},
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

  const handleTakeLife = (id, damage) => {
    if (id === 1) {
      if (currentHearts <= 0) {
        return
      }
      takeLife(damage)
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
      {/* <Enemies /> */}
      <SecondPlayer position={[0, -30, 0]} />
      <Obstacles />
    </>
  )
}

export default LevelFourPage
