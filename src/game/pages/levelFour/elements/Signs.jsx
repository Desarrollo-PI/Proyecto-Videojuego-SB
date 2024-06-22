import React from 'react'
import Sign from '../../../globals/sign/Sign'
import { useDialog } from '../../../../providers/dialog/DialogProvider'

const Signs = () => {
  const { openDialog, closeDialog } = useDialog()

  const handleOnTakeSign = (numberSign) => {
    const messages = {
      1: '¡Este obstáculo se puede superar usando el hechizo Leviosa!',
      2: '¡Intenta empujar las cajas para que tu compañero pueda avanzar!',
      3: '¡Para abrir la puerta bloqueada, necesitas encontrar las dos llaves en el laberinto!',
      4: '¡Además, podrías encontrar dos coleccionables en el laberinto!',
      5: '¡Para superar este bloqueo, debes derrotar a los enemigos en esta sala!',
    }
    const message = messages[numberSign] || 'Señal no definida'
    openDialog(message, 'signInfo')
  }

  const handleOpenDialogInRange = () => {
    openDialog(
      '!Has encontrado una señal! Presiona la tecla <strong>E</strong> para leerla',
      'sign'
    )
  }

  const dialogs = {
    handleOpenDialogInRange,
    handleOnTakeSign,
    closeDialog,
  }

  return (
    <>
      <Sign
        numberSign={1}
        position={[0, -1.7, -42]}
        handleOnTakeSign={handleOnTakeSign}
        rotation={[0, 0, 0]}
        dialogs={dialogs}
      />
      <Sign
        numberSign={2}
        position={[5, 2.1, -46]}
        rotation={[0, (Math.PI * 3) / 2, 0]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
      <Sign
        numberSign={3}
        position={[0, 0, -116]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
      <Sign
        numberSign={4}
        position={[35, 0, -122]}
        rotation={[0, (Math.PI * 3) / 2, 0]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
      <Sign
        numberSign={5}
        position={[0, 0, -185.5]}
        rotation={[0, 0, 0]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
    </>
  )
}

export default Signs
