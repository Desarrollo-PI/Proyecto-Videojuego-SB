import { useEffect, useState } from 'react'
import { Skeleton } from '../../../globals/enemies/skeleton/Skeleton'
import { Goblin } from '../../../globals/enemies/goblin/Goblin'
import { Spider } from '../../../globals/enemies/spider/Spider'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { useBosses } from '../../../../providers/bosses/BossesProvider'

const Enemies = (props) => {
  const [enemies, setEnemies] = useState({
    1: { isDeath: false },
  })

  const { bosses, handleDeathBoss } = useBosses()
  const { handleSound, isPlaying } = useMusic()
  const { currentHearts, takeLife, handleNearDementor } = usePlayer()

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

  const handleTakeLifeSpider = () => {
    if (currentHearts <= 0) {
      return
    }
    takeLife(100)
    // handleSound(['hitDementor'])
  }

  return (
    <>
      {!bosses?.spider.isDeath && (
        <Spider
          idEnemy={'spider'}
          position={[-14.5, 3, -6]}
          action={'Walk'}
          takeLife={handleTakeLifeSpider}
          deathEnemy={handleDeathBoss}
          isPlayerDeath={currentHearts === 0}
          speed={3}
          isPlaying={isPlaying}
        />
      )}
    </>
  )
}

export default Enemies
