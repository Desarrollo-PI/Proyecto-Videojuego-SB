import React, { useState } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

const RegisterForm = ({ onRegister, onGoToLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    onRegister(email, password)
      .then(() => {
        onGoToLogin()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="auth-form-container">
      <Form onSubmit={handleSubmit} className="auth-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>CONTRASENA</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          REGISTRARSE
        </Button>
      </Form>
      <hr />
      <Button
        variant="secondary"
        onClick={onGoToLogin}
        style={{ marginTop: '35px' }}
      >
        VOVLVER
      </Button>
    </div>
  )
}

export default RegisterForm
