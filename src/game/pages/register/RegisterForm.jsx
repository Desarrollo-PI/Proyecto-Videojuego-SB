import React, { useState } from 'react'
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap'
import HouseCarousel from './HouseCarousel'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useAlert } from '../../../providers/alert/AlertProvider'
import { handleErrosRegister } from '../../../utils/message-auth'

const RegisterForm = ({ onRegister, onGoToLogin }) => {
  const { openAlert } = useAlert()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [hogwartsHouse, setHogwartsHouse] = useState(0)

  const [showPassword, setShowPassword] = useState(false)

  const cleanForm = () => {
    setEmail('')
    setPassword('')
    setName('')
    setHogwartsHouse(0)
  }

  const handleSelect = (selectedIndex) => {
    setHogwartsHouse(selectedIndex)
  }

  const handleSubmit = async (e) => {
    const dataUser = {
      email,
      password,
      name,
      hogwartsHouse,
    }
    e.preventDefault()

    if (!email || !password || !name) {
      openAlert('Todos los campos son obligatorios', 'danger')
      return
    }

    onRegister(dataUser)
      .then((res) => {
        if (res.success) {
          openAlert('Usuario creado correctamente', 'success')
          cleanForm()
          onGoToLogin()
        } else {
          openAlert(handleErrosRegister(res.error), 'danger')
        }
      })
      .catch((error) => {
        openAlert(handleErrosRegister(error), 'danger')
      })
  }

  return (
    <div className="auth-form-container">
      <Form onSubmit={handleSubmit} className="register-form">
        <Row>
          <Col xs={8}>
            <Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Group controlId="formName">
                  <Form.Label>NOMBRE</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
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
                          <FaEyeSlash
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <FaEye
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </div>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col
            xs={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Form.Group
              controlId="formBasicHouse"
              style={{ textAlign: 'center' }}
            >
              <Form.Label>ESCOGE TU CASA</Form.Label>
              <HouseCarousel
                index={hogwartsHouse}
                handleSelect={handleSelect}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" style={{ width: '50%' }}>
          REGISTRARSE
        </Button>
      </Form>
      <hr />
      <Button
        variant="secondary"
        onClick={onGoToLogin}
        style={{ marginTop: '35px' }}
      >
        VOLVER
      </Button>
    </div>
  )
}

export default RegisterForm
