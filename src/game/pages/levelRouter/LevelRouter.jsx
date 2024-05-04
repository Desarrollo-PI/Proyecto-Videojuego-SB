import React, { useState } from 'react'
import LevelCarousel from './LevelCarousel'
import { useNavigate } from 'react-router-dom'
import { useMusic } from '../../../providers/music/MusicProvider'
import { useAuth } from '../../../providers/auth/AuthProvider'

const LevelRouterPage = () => {
  const navigate = useNavigate()
  const { handleSound } = useMusic()

  const [index, setIndex] = useState(0)

  const { state } = useAuth()

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const onGoToFirsLevel = () => {
    navigate('/level/one')
  }

  const onGoToSecondLevel = () => {
    navigate('/level/two')
  }

  const onGoToThirdLevel = () => {
    navigate('/level/three')
  }

  const onGoToFourthLevel = () => {
    navigate('/level/four')
  }

  const onGoToLogin = () => {
    navigate('/login')
  }

  const handleGoToLevel = async () => {
    handleSound(['level', 'thunder'], ['mainTheme'])
    switch (index) {
      case 0:
        onGoToFirsLevel()
        break
      case 1:
        onGoToSecondLevel()
        break
      case 2:
        onGoToThirdLevel()
        break
      case 3:
        onGoToFourthLevel()
        break
      default:
        break
    }
  }

  const unlockLevel = () => {
    if (state.user.level >= index + 1) {
      return false
    }
    return true
  }

  return (
    <div className="level-selector-container">
      <LevelCarousel
        handleGoToLevel={handleGoToLevel}
        handleSelect={handleSelect}
        unlockLevel={unlockLevel}
        index={index}
      />
      <button
        className="play-button"
        onClick={handleGoToLevel}
        disabled={unlockLevel()}
      >
        Jugar
      </button>
    </div>
  )
}

export default LevelRouterPage
