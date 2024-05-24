import React, { useState } from 'react'
import Sign from '../../../globals/sign/Sign'
import { useDialog } from '../../../../providers/dialog/DialogProvider'

const Signs = () => {
  const { openDialog, closeDialog } = useDialog()

  const handleOnTakeSign = (numberSign) => {
    const messages = {
      1: '¡El Laberinto maldito! Te recomendamos seguir el camino marcado por los coleccionables para evitar perderte.',
      2: 'Utiliza el hechizo <strong>Glacis</strong> para congelar las plataformas móviles de forma indefinida y facilitar tu avance.',
      3: 'Para desbloquear la puerta, primero debes derrotar a los 4 enemigos que la custodian. ¡Prepárate para el desafío!',
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
        position={[0.5, -1, -10.5]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
      <Sign
        numberSign={2}
        position={[-10, -1, -51]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
      <Sign
        numberSign={3}
        position={[-5.5, -1, -93.5]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
    </>
  )
}

export default Signs
