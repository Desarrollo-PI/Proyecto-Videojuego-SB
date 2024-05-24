import React, { useState, useEffect } from 'react'
import { Environment } from '@react-three/drei'
import LightsEnvironment from './LightsEnvironment'
import { usePlayer } from '../../providers/player/PlayerProvider'

const StormEnvironment = ({
  positionDirectionalLight,
  intensityDirectionalLight,
  intensityAmbientLight,
  isFog,
  nearDementor,
  inMaze,
}) => {
  const [background, setBackground] = useState('#10141b')

  const stormLightsProps = {
    positionDirectionalLight,
    intensityDirectionalLight,
    intensityAmbientLight,
  }

  useEffect(() => {
    const simulateLightning = () => {
      setBackground('#dddddd')

      setTimeout(() => {
        setBackground('#10141b')
      }, 300)
    }

    const intervalId = setInterval(simulateLightning, 7500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Environment preset="night" />
      <LightsEnvironment {...stormLightsProps} />
      <color attach="background" args={[background]} />
      {isFog && (
        <fog
          attach="fog"
          args={['#10141b', 0, nearDementor || inMaze ? 10 : 50]}
        />
      )}
    </>
  )
}

export default StormEnvironment
