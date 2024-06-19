import { useEffect, useState } from 'react'
import { Skeleton } from '../../../globals/enemies/skeleton/Skeleton'
import { Goblin } from '../../../globals/enemies/goblin/Goblin'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { useBosses } from '../../../../providers/bosses/BossesProvider'

const Enemies = () => {
  return (
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
  )
}

export default Enemies
