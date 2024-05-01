import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../providers/auth/AuthProvider'

const ProfilePage = () => {
  const { state } = useAuth()
  const navigation = useNavigate()

  const onGoToRouter = () => {
    navigation('/level-router')
  }

  const choosenHouse = () => {
    switch (state.user.hogwartsHouse) {
      case 0:
        return '../assets/img/hogwarts-houses/griffyndor.png'
      case 3:
        return '../assets/img/hogwarts-houses/hufflepuff.png'
      case 2:
        return '../assets/img/hogwarts-houses/ravenclaw.png'
      case 1:
        return '../assets/img/hogwarts-houses/slytherin.png'
      default:
        return '../assets/img/hogwarts-houses/griffyndor.png'
    }
  }

  return (
    <div className="profile-container">
      <div className="paper-container">
        <Row>
          <h1>HAVE YOU SEEN THIS WIZARD?</h1>
        </Row>
        <div className="line"></div>

        <Row width={'100%'}>
          <Col
            xs={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={'../assets/img/wizard.png'}
              alt="Hogwarts Crest"
              fluid
              width={'140px'}
            />
          </Col>
          <Col className="profile-info" xs={8}>
            <h2>{state.user.name.toUpperCase()}</h2>
            <div className="line-bold"></div>
            <h3>{state.user.email.toUpperCase()}</h3>
            <Row className="stadistic-info">
              <Col>
                <h4>NIVEL:</h4>
                <h5>{state.user.level}</h5>
              </Col>
              <Col>
                <h4>ITEMS</h4>
                <h5>{state.user.collectibles}</h5>
              </Col>
              <Col>
                <Image
                  src={choosenHouse()}
                  alt="Hogwarts Crest"
                  fluid
                  width={'150px'}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Button variant="secundary" onClick={onGoToRouter}>
        VOLVER
      </Button>
    </div>
  )
}

export default ProfilePage
