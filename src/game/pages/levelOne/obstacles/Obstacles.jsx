import React, { useState } from 'react'
import DoorFence from './DoorFence'
import Key from './Key'

import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'

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
      <Key
        keyCollected={keyCollected}
        handleKeyCollected={handleKeyCollected}
      />
      <DoorFence keyCollected={keyCollected} />
    </>
  )
}

export default Obstacles
