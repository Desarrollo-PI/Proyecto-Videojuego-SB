import React, { useState } from 'react'
import DoorFence from './DoorFence'
import Key from './Key'

import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'

const Obstacles = () => {
  const { openDialog } = useDialog()
  const { handleSound } = useMusic()
  const [keyCollected, setKeyCollected] = useState(false)

  const handleKeyCollected = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      setKeyCollected(true)
      handleSound(['collect'])
      openDialog('¡Has encontrado la llave con exito!')
    }
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
