import React from 'react'
import Sign from '../../../globals/sign/Sign'
import { useDialog } from '../../../../providers/dialog/DialogProvider'

const Signs = () => {
  const { openDialog, closeDialog } = useDialog()

  const handleOnTakeSign = (numberSign) => {
    const messages = {
      1: 'Este obstaculo podra ser quemado con tu nuevo hechizo de fuego',
      2: 'La luz será tu esperanza para poder encontrar tu destino',
      3: 'Si estas listo entra al portal para la batalla final de este nivel',
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
        position={[-15, 0, 0.5]}
        handleOnTakeSign={handleOnTakeSign}
        rotation={[0, Math.PI / 2, 0]}
        dialogs={dialogs}
      />
      <Sign
        numberSign={2}
        position={[-6, 0, -3]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
      <Sign
        numberSign={3}
        position={[24, 0, -52]}
        rotation={[0, (Math.PI * 3) / 2, 0]}
        handleOnTakeSign={handleOnTakeSign}
        dialogs={dialogs}
      />
    </>
  )
}

export default Signs
