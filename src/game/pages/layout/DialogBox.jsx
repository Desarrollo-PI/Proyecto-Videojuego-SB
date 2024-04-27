import React from 'react'
import { Image } from 'react-bootstrap'

const DialogBox = ({ message, characterImage, isOpenDialog }) => {
  if (!isOpenDialog) {
    return null
  }
  return (
    <div className="dialog">
      <div className="dialog-img">
        <Image src={characterImage} alt="Character" width={150} />
      </div>

      <div className="dialog-message">{message}</div>
    </div>
  )
}

export default DialogBox
