import React, { useState } from 'react'
import LevelCarousel from './LevelCarousel'
import { useNavigate } from 'react-router-dom'

const LevelRouterPage = () => {
  const navigate = useNavigate()

  const [index, setIndex] = useState(0)

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
    navigate('/level/fourth')
  }

  const onGoToLogin = () => {
    navigate('/login')
  }

  const handleGoToLevel = () => {
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

  return (
    <div className="level-selector-container">
      <LevelCarousel
        handleGoToLevel={handleGoToLevel}
        handleSelect={handleSelect}
        index={index}
      />
    </div>
  )
}

export default LevelRouterPage
