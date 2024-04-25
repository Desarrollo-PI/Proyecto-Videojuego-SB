import React, { useState, useEffect } from 'react'
import { Environment } from '@react-three/drei'
import LightsEnvironment from './LightsEnvironment'

const StormEnvironment = ({positionDirectionalLight, intensityDirectionalLight, intensityAmbientLight}) => {
  const [background, setBackground] = useState('#10141b')

  const stormLightsProps = {
    positionDirectionalLight,
    intensityDirectionalLight,
    intensityAmbientLight
  }

  useEffect(() => {
    const simulateLightning = () => {
      setBackground('#dddddd')

      setTimeout(() => {
        setBackground('#10141b')
      }, 300)
    }

    const intervalId = setInterval(simulateLightning, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Environment preset="night" />
      <LightsEnvironment {... stormLightsProps}/>
      <color attach="background" args={[background]} />
    </>
  )
}

export default StormEnvironment
