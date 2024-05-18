import React, { useState } from 'react'
import Sign from '../../../globals/sign/Sign'
import { useDialog } from '../../../../providers/dialog/DialogProvider'

const Signs = () => {
    const { openDialog, closeDialog } = useDialog()
    
    const handleOnTakeSign = (numberSign) => {
        const messages = {
            1: '¡Has leido la señal 1 con éxito!',
            // Puedes agregar más señales específicas aquí
        }
        const message = messages[numberSign] || '¡Has leído la señal con éxito!'
        openDialog(message)
    }
    
    const handleOpenDialogInRange = () => {
        openDialog('!Has encontrado una señal! Presiona la tecla E para leerla', 'sign')
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
                position={[0, -1, -15]}
                handleOnTakeSign={handleOnTakeSign}
                dialogs={dialogs}
            />
        </>
    )
}

export default Signs