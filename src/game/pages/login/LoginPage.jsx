import React from 'react'
import LoginForm from './LoginForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useMusic } from '../../../providers/music/MusicProvider'
import AlertCustom from '../layout/Alert'
import { handleErrosLogin } from '../../../utils/message-auth'
import { useAlert } from '../../../providers/alert/AlertProvider'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { handleSound } = useMusic()
  const { openAlert } = useAlert()

  const onLogin = async (email, password) => {
    login(email, password)
      .then((res) => {
        if (res.success) {
          onGoToMenuLevels()
        } else {
          console.log(res.error)
          openAlert(handleErrosLogin(res.error), 'danger')
        }
      })
      .catch((error) => {
        console.log(error)
        openAlert(handleErrosLogin(error), 'danger')
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
      <AlertCustom />
    </>
  )
}

export default LoginPage
