import React from 'react'
import RegisterForm from './RegisterForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import AlertCustom from '../layout/Alert'
import { useAlert } from '../../../providers/alert/AlertProvider'

const RegisterPage = () => {
  const { register } = useAuth()
  const navigate = useNavigate()

  const onGoToLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <RegisterForm onRegister={register} onGoToLogin={onGoToLogin} />
      <AlertCustom />
    </>
  )
}

export default RegisterPage
