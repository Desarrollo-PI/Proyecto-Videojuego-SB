import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap'

const DialogBox = ({
  message,
  characterImage,
  isOpenDialog,
  closeDialog,
  dialogType,
}) => {
  useEffect(() => {
    const onOpenDialog = (event) => {
      if (
        event.key === 'p' ||
        (event.key === 'e' && dialogType === 'checkpoint')
      ) {
        if (isOpenDialog) {
          closeDialog()
        }
      }
    }

    document.addEventListener('keydown', onOpenDialog)

    return () => {
      document.removeEventListener('keydown', onOpenDialog)
    }
  }, [isOpenDialog])

  if (!isOpenDialog) {
    return null
  }
  return (
    <>
      <div className="dialog">
        <div className="dialog-message">{message}</div>
        <div className="dialog-img">
          <Image src={characterImage} alt="Character" width={100} />
        </div>
      </div>
      {dialogType !== 'checkpoint' && (
        <div className="dialog-continue">
          Presiona la tecla <strong>P</strong> para continuar...
        </div>
      )}
    </>
  )
}

export default DialogBox
