import React from 'react'
import LoginForm from './LoginForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useMusic } from '../../../providers/music/MusicProvider'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { handleSound } = useMusic()

  const onLogin = async (email, password) => {
    login(email, password)
      .then((res) => {
        if (res.success) {
          onGoToMenuLevels()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const onGoToRegister = () => {
    navigate('/register')
  }

  const onGoToMenuLevels = async () => {
    handleSound(['mainTheme'])
    navigate('/level-router', { replace: true })
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
