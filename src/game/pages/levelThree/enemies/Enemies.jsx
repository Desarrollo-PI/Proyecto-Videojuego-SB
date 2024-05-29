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
          position={[-2, 3, 2]}
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
          position={[-2, 3, -2]}
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
          position={[2, 3, 6]}
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
          position={[-14.5, 3, -6]}
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
