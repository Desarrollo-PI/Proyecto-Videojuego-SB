import React, { useState, useRef, useEffect } from 'react'
import { Spider } from '../../../globals/enemies/spider/Spider'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { useBosses } from '../../../../providers/bosses/BossesProvider'
import { PositionalAudio } from '@react-three/drei'

const Enemies = (props) => {
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
    12: { isDeath: false },
    13: { isDeath: false },
    14: { isDeath: false },
    15: { isDeath: false },
    16: { isDeath: false },
  })

  const attackSoundRef = useRef()

  const { bosses, handleDeathBoss } = useBosses()
  const { isPlaying, handlePositionalSound } = useMusic()
  const { currentHearts, takeLife, handleIsPosioned, isPoisoned } = usePlayer()

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
    isPlaying && attackSoundRef.current.play()
    takeLife(25)
    handleIsPosioned(true)
  }

  const handleTakeLifeSpider = () => {
    if (currentHearts <= 0) {
      return
    }
    isPlaying && attackSoundRef.current.play()
    takeLife(75)
    handleIsPosioned(true)
  }

  useEffect(() => {
    if (isPoisoned && currentHearts > 0) {
      handlePositionalSound(['heartbeat'])
    }
    if ((!isPoisoned && currentHearts > 1) || currentHearts === 0) {
      handlePositionalSound([], ['heartbeat'])
    }
  }, [isPoisoned])

  return (
    <>
      {!enemies[1].isDeath && (
        <Spider
          life={250}
          color={'#E6E6E6'}
          scale={0.4}
          idEnemy={1}
          position={[-14, 3, -5]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[2].isDeath && (
        <Spider
          life={250}
          color={'#3b2f2f'}
          scale={0.4}
          idEnemy={2}
          position={[-22, 1.5, -5]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[3].isDeath && (
        <Spider
          life={250}
          color={'#274227'}
          scale={0.4}
          idEnemy={3}
          position={[0, 1.5, -22]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[4].isDeath && (
        <Spider
          life={250}
          color={'#274227'}
          scale={0.4}
          idEnemy={3}
          position={[0, 1.5, -26]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[5].isDeath && (
        <Spider
          life={250}
          color={'#274227'}
          scale={0.4}
          idEnemy={3}
          position={[0, 1.5, -30]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[6].isDeath && (
        <Spider
          life={250}
          color={'#3b2f2f'}
          scale={0.4}
          idEnemy={2}
          position={[12, 1.5, -10]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[7].isDeath && (
        <Spider
          life={250}
          color={'#E6E6E6'}
          scale={0.4}
          idEnemy={1}
          position={[11, 1.5, -15]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[8].isDeath && (
        <Spider
          life={250}
          color={'#3b2f2f'}
          scale={0.4}
          idEnemy={2}
          position={[8, 1.5, -29]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[9].isDeath && (
        <Spider
          life={250}
          color={'#3b2f2f'}
          scale={0.4}
          idEnemy={2}
          position={[8, 1.5, -39]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[10].isDeath && (
        <Spider
          life={250}
          color={'#E6E6E6'}
          scale={0.4}
          idEnemy={1}
          position={[11, 1.5, -55]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[11].isDeath && (
        <Spider
          life={250}
          color={'#E6E6E6'}
          scale={0.4}
          idEnemy={1}
          position={[6, 1.5, -55]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[12].isDeath && (
        <Spider
          life={250}
          color={'#E6E6E6'}
          scale={0.4}
          idEnemy={1}
          position={[15, 1.5, -55]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[13].isDeath && (
        <Spider
          life={250}
          color={'#3b2f2f'}
          scale={0.4}
          idEnemy={2}
          position={[-6, 3, -52]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[14].isDeath && (
        <Spider
          life={250}
          color={'#3b2f2f'}
          scale={0.4}
          idEnemy={2}
          position={[-17, 3, -52]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[15].isDeath && (
        <Spider
          life={250}
          color={'#E6E6E6'}
          scale={0.4}
          idEnemy={1}
          position={[16, 1.5, -30]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!enemies[16].isDeath && (
        <Spider
          life={250}
          color={'#3b2f2f'}
          scale={0.4}
          idEnemy={1}
          position={[22, 1.5, -38]}
          action={'Idle'}
          takeLife={handleTakeLife}
          deathEnemy={handleDeathEnemy}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      {!bosses?.spider.isDeath && (
        <Spider
          life={800}
          color={'#0A0A0A'}
          scale={0.9}
          idEnemy={'spider'}
          position={[-11, 3, -52]}
          action={'Idle'}
          takeLife={handleTakeLifeSpider}
          deathEnemy={handleDeathBoss}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
      <PositionalAudio
        url="/assets/sounds/hitSpider.mp3"
        distance={10}
        loop={false}
        ref={attackSoundRef}
      />
    </>
  )
}

export default Enemies
