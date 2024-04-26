import React from 'react'
import { Button } from 'react-bootstrap'
import { GiWizardFace } from 'react-icons/gi'
import { FaVolumeOff } from 'react-icons/fa'
import { FaVolumeMute } from 'react-icons/fa'
import { FaVolumeDown } from 'react-icons/fa'
import { FaVolumeUp } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'

import { useMusic } from '../../../providers/music/MusicProvider'
import { useAuth } from '../../../providers/auth/AuthProvider'

import { useLocation, useNavigate } from 'react-router-dom'

const FooterButtons = () => {
  const { mute, unmute, isPlaying } = useMusic()
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigation = useNavigate()

  const onGoToProfile = () => {
    navigation('/profile')
  }

  const onLogout = () => {
    logout().then(() => {
      navigation('/login')
    })
  }
  

  return (
    <>
      <div className="footer-settings-container">
        {location.pathname === '/level-router' && (
          <Button variant="secundary" onClick={onGoToProfile}>
            <GiWizardFace size={25} />
          </Button>
        )}
        <Button
          variant="secundary"
          onClick={isPlaying ? ()=>{mute()} : ()=>{unmute()}}
        >
          {isPlaying ? <FaVolumeUp size={25} /> : <FaVolumeMute size={25} />}
        </Button>
      </div>
      <div className="footer-logout-container">
        {location.pathname === '/level-router' && (
          <Button variant="secundary" onClick={onLogout}>
            <IoLogOut size={25} />
          </Button>
        )}
      </div>
    </>
  )
}

export default FooterButtons
