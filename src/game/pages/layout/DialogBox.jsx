import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

const DialogBox = ({
  message,
  characterImage,
  isOpenDialog,
  closeDialog,
  dialogType,
}) => {
  const [displayedMessage, setDisplayedMessage] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let time = 0

    if (isOpenDialog) {
      const interval = setInterval(() => {
        if (currentIndex < message.length) {
          setDisplayedMessage(
            (prevMessage) => prevMessage + message[currentIndex]
          )
          setCurrentIndex((prevIndex) => prevIndex + 1)
        } else {
          clearInterval(interval)
          time = setTimeout(() => {
            closeDialog()
            clearTimeout(time)
          }, 3000)
        }
      }, 10)

      return () => {
        clearInterval(interval)
        clearTimeout(time)
      }
    }
  }, [isOpenDialog, message, currentIndex])

  useEffect(() => {
    if (!isOpenDialog) {
      setDisplayedMessage('')
      setCurrentIndex(0)
    }
  }, [isOpenDialog])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === 'p' ||
        (event.key === 'e' && dialogType === 'checkpoint')
      ) {
        if (isOpenDialog) {
          closeDialog()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpenDialog])

  if (!isOpenDialog) {
    return null
  }

  return (
    <>
      <div className="dialog">
        <div className="dialog-message">
          {dialogType === 'checkpoint' || dialogType === 'collectible'
            ? parse(displayedMessage)
            : displayedMessage}
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
