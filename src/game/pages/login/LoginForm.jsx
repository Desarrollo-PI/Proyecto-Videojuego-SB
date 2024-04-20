import React, { useState } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

const LoginForm = ({ onLogin, onGoToRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
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
          INICIAR SESION
        </Button>
      </Form>
      <hr />
      <h2>¿NO TIENES UNA CUENTA?</h2>
      <Button variant="secondary" onClick={onGoToRegister}>
        REGISTRATE
      </Button>
    </div>
  )
}

export default LoginForm
