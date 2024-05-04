import React, { useState } from 'react'
import Checkpoint from './Checkpoint'
import { useDialog } from '../../../../providers/dialog/DialogProvider'

const Checkpoints = () => {
  const { openDialog, closeDialog } = useDialog()

  const _isTakenCheckpoints = {
    1: false,
    2: false,
    3: false,
    4: false,
  }

  const [isTakenCheckpoints, setIsTakenCheckpoints] =
    useState(_isTakenCheckpoints)

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
        itsTaken={isTakenCheckpoints[1]}
        position={[-4.16052, 1, -39.8772]}
        setIsTakenCheckpoints={setIsTakenCheckpoints}
        dialogs={dialogs}
      />

      <Checkpoint
        numberCheckpoint={2}
        itsTaken={isTakenCheckpoints[2]}
        position={[5.84319, 1, -54.4298]}
        setIsTakenCheckpoints={setIsTakenCheckpoints}
        dialogs={dialogs}
      />
      <Checkpoint
        numberCheckpoint={3}
        itsTaken={isTakenCheckpoints[3]}
        position={[14.2202, -1.73976, 1.8868]}
        setIsTakenCheckpoints={setIsTakenCheckpoints}
        dialogs={dialogs}
      />

      <Checkpoint
        numberCheckpoint={4}
        itsTaken={isTakenCheckpoints[4]}
        position={[0, 1, -88.9431]}
        setIsTakenCheckpoints={setIsTakenCheckpoints}
        dialogs={dialogs}
      />
    </>
  )
}

export default Checkpoints
