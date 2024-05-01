import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const LoginForm = ({ onLogin, onGoToRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

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
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
            />
            <InputGroup.Text>
              <div className="password-toggle">
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '30px' }}>
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
