import React from 'react'
import RegisterForm from './RegisterForm'
import HeaderForm from '../HeaderForm'

import { useAuth } from '../../../providers/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

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
    <Container className="main-container">
      <HeaderForm />
      <RegisterForm onRegister={onRegister} onGoToLogin={onGoToLogin} />
    </Container>
  )
}

export default RegisterPage
