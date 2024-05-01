import React from 'react'
import LoginForm from './LoginForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useMusic } from '../../../providers/music/MusicProvider'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { playSound } = useMusic()

  const onLogin = async (email, password) => {
    login(email, password)
      .then((res) => {
        if (res.success) {
          navigate('/level-router', { replace: true })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const onGoToRegister = () => {
    navigate('/register')
  }

  const onGoToMenuLevels = () => {
    playSound('mainTheme')
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
