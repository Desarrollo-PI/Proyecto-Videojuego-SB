import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import LevelOnePreview from '../levelOne/LevelOnePreview'
import LevelTwoPreview from '../levelTwo/LevelTwoPreview'
import LevelThreePreview from '../levelThree/LevelThreePreview'
import LevelFourPreview from '../levelFour/LevelFourPreview'

import LayoutPreview from '../layout/LayoutPreview'

const LevelCarousel = ({ handleGoToLevel, handleSelect, index }) => {
  const previewLightsLevelOneProps = {
    positionCamara: [0, 60, 150],
    lookAt: [0, 0, 0],
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.5,
  }

    const previewLightsLevelTwoProps = {
    positionCamara: [-100, 50, 100],
    lookAt: [0, 0, 0],
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.5,
    }

  const previewLightsLevelThreeProps = {
      positionCamara: [-70, 50, 70],
      lookAt: [0, 0, 0],
      positionDirectionalLight: [20, 10, 0],
      intensityDirectionalLight: 2,
      intensityAmbientLight: 0.5,
    }
    
  const previewLightsLevelFourProps = {
    positionCamara: [-100, 400, 300],
    lookAt: [0, 0, 0],
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.5,
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      indicators={false}
    >
      <Carousel.Item onClick={handleGoToLevel}>
        <LayoutPreview {...previewLightsLevelOneProps}>
          <LevelOnePreview />
        </LayoutPreview>
        <Carousel.Caption>
          <h2>1</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={handleGoToLevel}>
        <LayoutPreview {...previewLightsLevelTwoProps}>
          <LevelTwoPreview />
        </LayoutPreview>
        <Carousel.Caption>
          <h2>2</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={handleGoToLevel}>
      <LayoutPreview {...previewLightsLevelThreeProps}>
          <LevelThreePreview />
        </LayoutPreview>
        <Carousel.Caption>
          <h2>3</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={handleGoToLevel}>
        <LayoutPreview {...previewLightsLevelFourProps}>
          <LevelFourPreview />
        </LayoutPreview>
        <Carousel.Caption>
          <h2>4</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default LevelCarousel
