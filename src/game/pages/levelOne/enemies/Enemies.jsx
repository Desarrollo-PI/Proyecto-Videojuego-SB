import { Goblin } from '../../../globals/enemies/goblin/Goblin'
import { Troll } from '../../../globals/enemies/troll/Troll'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'

const Enemies = () => {
  const { handleSound, isPlaying } = useMusic()
  const { currentHearts, takeLife } = usePlayer()

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
      <Goblin
        position={[21.5, 5, -50]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Goblin
        position={[21.5, 5, -30]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Goblin
        position={[-21.5, 5, -50]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Goblin
        position={[-21.5, 5, -30]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Goblin
        position={[2.5, 5, -12]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Goblin
        position={[0, 5, -75]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Goblin
        position={[2.5, 5, -53]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Goblin
        position={[-2.5, 5, -34]}
        action={'Walk'}
        takeLife={handleTakeLife}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
      <Troll
        position={[0, 0, -100]}
        action={'Walk'}
        takeLife={handleTakeLifeTroll}
        isPlayerDeath={currentHearts === 0}
        speed={2}
        isPlaying={isPlaying}
      />
    </>
  )
}

export default Enemies
