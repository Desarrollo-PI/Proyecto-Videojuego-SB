import React from 'react'
import LoginForm from './LoginForm'
import HeaderForm from '../HeaderForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const onLogin = async (email, password) => {
    login(email, password).then(() => {
      navigate('/level-one')
    })
  }

  const onGoToRegister = () => {
    navigate('/register')
  }

  const onGoToMenuLevels = () => {
    navigate('/level-one')
  }

  return (
    <Container className="main-container">
      <HeaderForm />
      <LoginForm
        onLogin={onLogin}
        onGoToRegister={onGoToRegister}
        onGoToMenuLevels={onGoToMenuLevels}
      />
    </Container>
  )
}

export default LoginPage
