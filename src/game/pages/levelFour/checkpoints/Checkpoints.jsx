import React, { useState } from 'react'
import Checkpoint from '../../../globals/checkpoint/Checkpoint'
import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useAuth } from '../../../../providers/auth/AuthProvider'

const Checkpoints = () => {
  const { openDialog, closeDialog } = useDialog()
  const { checkpointLevelFour, onTakeCheckpoint } = useAuth()

  const handleOnTakeCheckpoint = (numberCheckpoint, position) => {
    onTakeCheckpoint('level_four', numberCheckpoint, position)
  }

  const handleOpenDialogInRange = () => {
    openDialog(
      '!Has encontrado un checkpoint! Presiona la tecla <strong>E</strong> para guardarlo',
      'checkpoint'
    )
  }

  const handleOpenDialogTakeIt = () => {
    openDialog('¡Has guardado este checkpoint con exito!')
  }

  const handleOpenDialogTaken = () => {
    openDialog('¡Ya has guardado este checkpoint!')
  }

  const dialogs = {
    handleOpenDialogInRange,
    handleOpenDialogTakeIt,
    handleOpenDialogTaken,
    closeDialog,
  }

  return (
    <>
      <Checkpoint
        numberCheckpoint={1}
        itsTaken={checkpointLevelFour[1]}
        position={[0.5, 3.5, -45.8]}
        rotation={[0, -Math.PI/2, 0]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />

      <Checkpoint
        numberCheckpoint={2}
        itsTaken={checkpointLevelFour[2]}
        position={[5, 1, -119]}
        rotation={[0, Math.PI/2, 0]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />
      <Checkpoint
        numberCheckpoint={3}
        itsTaken={checkpointLevelFour[3]}
        position={[13, 1, -182.5]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />
      <Checkpoint
        numberCheckpoint={4}
        itsTaken={checkpointLevelFour[4]}
        position={[13, 5.3, -240.5]}
        rotation={[0, Math.PI/2, 0]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />
    </>
  )
}

export default Checkpoints
