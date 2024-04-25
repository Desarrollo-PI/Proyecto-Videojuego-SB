import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import LevelOnePreview from '../levelOne/LevelOnePreview'
import LevelFourPreview from '../levelFour/LevelFourPreview'

const LevelCarousel = ({ handleGoToLevel, handleSelect, index }) => {
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      indicators={false}
    >
      <Carousel.Item onClick={handleGoToLevel}>
        <LevelOnePreview />
        <Carousel.Caption>
          <h2>1</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={handleGoToLevel}>
        <Carousel.Caption>
          <h2>2</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={handleGoToLevel}>
        <Carousel.Caption>
          <h2>3</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={handleGoToLevel}>
        <LevelFourPreview />
        <Carousel.Caption>
          <h2>4</h2>
          <h3>NIVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default LevelCarousel
