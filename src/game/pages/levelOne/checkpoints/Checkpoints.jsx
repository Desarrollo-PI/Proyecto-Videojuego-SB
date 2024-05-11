import React, { useState } from 'react'
import Checkpoint from './Checkpoint'
import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useAuth } from '../../../../providers/auth/AuthProvider'

const Checkpoints = () => {
  const { openDialog, closeDialog } = useDialog()
  const { checkpointLevelOne, onTakeCheckpoint } = useAuth()

  const handleOnTakeCheckpoint = (numberCheckpoint, position) => {
    onTakeCheckpoint('level_one', numberCheckpoint, position)
  }

  const handleOpenDialogInRange = () => {
    openDialog(
      '!Has encontrado un checkpoint! Presiona la tecla "E" para guardarlo',
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
        itsTaken={checkpointLevelOne[1]}
        position={[-4.16052, 1, -39.8772]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />

      <Checkpoint
        numberCheckpoint={2}
        itsTaken={checkpointLevelOne[2]}
        position={[5.84319, 1, -54.4298]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />
      <Checkpoint
        numberCheckpoint={3}
        itsTaken={checkpointLevelOne[3]}
        position={[14.2202, -1.73976, 1.8868]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />

      <Checkpoint
        numberCheckpoint={4}
        itsTaken={checkpointLevelOne[4]}
        position={[0, 1, -88.9431]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />
    </>
  )
}

export default Checkpoints
