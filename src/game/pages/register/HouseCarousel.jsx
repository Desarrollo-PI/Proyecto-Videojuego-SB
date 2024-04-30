import React, { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap'

const HouseCarousel = ({ index, handleSelect }) => {
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      indicators={false}
      className="house-carousel"
    >
      <Carousel.Item className="house-carousel-item">
        <Image
          src="assets/img/hogwarts-houses/griffyndor.png"
          alt="GRYFFINDOR"
          width={120}
        />
      </Carousel.Item>
      <Carousel.Item className="house-carousel-item">
        <Image
          src="assets/img/hogwarts-houses/slytherin.png"
          alt="SLYTHERIN"
          width={120}
        />
      </Carousel.Item>
      <Carousel.Item className="house-carousel-item">
        <Image
          src="assets/img/hogwarts-houses/ravenclaw.png"
          alt="RAVENCLAW"
          width={120}
        />
      </Carousel.Item>
      <Carousel.Item className="house-carousel-item">
        <Image
          src="assets/img/hogwarts-houses/hufflepuff.png"
          alt="HUFFLEP"
          width={120}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HouseCarousel
