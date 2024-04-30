import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import HouseCarousel from './HouseCarousel'

const RegisterForm = ({ onRegister, onGoToLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [hogwartsHouse, setHogwartsHouse] = useState(0)

  const handleSelect = (selectedIndex) => {
    setHogwartsHouse(selectedIndex)
  }

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
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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

        <Button variant="primary" type="submit" style={{width: '50%'}}>
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
