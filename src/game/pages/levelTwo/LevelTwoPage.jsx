import React, { useState } from 'react'
import WorldLevelTwo from './World'
import Lights from './Lights'
import Checkpoints from './checkpoints/Checkpoints'
import Signs from './signs/Signs'
import Collectibles from './collectibles/Collectibles'
import Enemies from './enemies/Enemies'
import GrassPlatforms from './grassPlatforms/GrassPlatforms'
import Spikes from './spikes/Spikes'
import MazeSensor from './maze/MazeSensor'
import Door from './door/Door'

const LevelTwoPage = () => {
  const [openDoor, setOpenDoor] = useState(false)

  return (
    <>
      <WorldLevelTwo />
      <MazeSensor />
      <Signs />
      <Checkpoints />
      <Collectibles />
      <Enemies setOpenDoor={setOpenDoor} />
      <GrassPlatforms />
      <Spikes />
      <Door openDoor={openDoor} setOpenDoor={setOpenDoor} />
    </>
  )
}

export default LevelTwoPage
