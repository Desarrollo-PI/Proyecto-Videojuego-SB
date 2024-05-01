import React from 'react'
import RegisterForm from './RegisterForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const { register } = useAuth()
  const navigate = useNavigate()

  const onRegister = async (dataUser) => {
    register(dataUser)
  }

  const onGoToLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <RegisterForm onRegister={onRegister} onGoToLogin={onGoToLogin} />
    </>
  )
}

export default RegisterPage
