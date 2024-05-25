import React from 'react'
import { Text, Float } from '@react-three/drei'

const Text2D = ({ text, position, rotation }) => {
  console.log(text)
  return (
    <Float speed={10} rotationIntensity={0.1} floatIntensity={2}>
      <Text
        position={position}
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
        rotation={rotation}
        textAlign="center"
        font="/assets/fonts/HarryPotter7.TTF"
      >
        {text}
      </Text>
    </Float>
  )
}

export default Text2D
