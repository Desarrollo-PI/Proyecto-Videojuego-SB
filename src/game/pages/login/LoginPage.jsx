import React from 'react'
import LoginForm from './LoginForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const onLogin = async (email, password) => {
    //login(email, password).then(() => {
    //onGoToMenuLevels()
    //})
    onGoToMenuLevels()
  }

  const onGoToRegister = () => {
    navigate('/register')
  }

  const onGoToMenuLevels = () => {
    navigate('/level-router')
  }

  return (
    <>
      <LoginForm
        onLogin={onLogin}
        onGoToRegister={onGoToRegister}
        onGoToMenuLevels={onGoToMenuLevels}
      />
    </>
  )
}

export default LoginPage
