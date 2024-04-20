import React from 'react'
import RegisterForm from './RegisterForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const { register } = useAuth()
  const navigate = useNavigate()

  const onRegister = async (email, password) => {
    register(email, password)
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
