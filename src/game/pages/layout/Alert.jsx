import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAlert } from '../../../providers/alert/AlertProvider'
import { GiOwl } from 'react-icons/gi'
import { IoSkullOutline } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'

const AlertCustom = () => {
  const { show, message, variant, closeAlert } = useAlert()

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert()
    }, 3000)
    return () => clearTimeout(timer)
  }, [show])

  return (
    <Alert bsPrefix="custom-alert" show={show} variant={variant}>
      {variant === 'success' ? (
        <GiOwl size={30} />
      ) : (
        <IoSkullOutline size={30} />
      )}
      {message}
      <button onClick={closeAlert} className="close-button">
        <IoClose color="white" size={30} />
      </button>
    </Alert>
  )
}

export default AlertCustom
