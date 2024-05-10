import React, { useState } from 'react'
import DoorFence from './DoorFence'
import Key from './Key'

import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import Fences from './Fences'
import Puddle from './Puddle'
import TrashContainer from './TrashContainer'
import BackPacks from './Backpacks'
import Chairs from './Chairs'

const Obstacles = () => {
  const { openDialog } = useDialog()
  const { handleSound } = useMusic()
  const [keyCollected, setKeyCollected] = useState(false)

  const handleKeyCollected = () => {
    openDialog('!Has encontrado la llave! Revisa la puerta bloqueada.')
    handleSound(['collect'])
    setKeyCollected(true)
  }

  return (
    <>
      <Fences />
      <Puddle />
      <TrashContainer />
      <BackPacks />
      <Chairs />
      <Key
        keyCollected={keyCollected}
        handleKeyCollected={handleKeyCollected}
      />
      <DoorFence keyCollected={keyCollected} />
    </>
  )
}

export default Obstacles
