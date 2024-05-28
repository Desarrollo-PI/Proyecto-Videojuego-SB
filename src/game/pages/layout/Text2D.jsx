import React from 'react'
import { Text, Float } from '@react-three/drei'

const Text2D = ({ text, position, rotation }) => {
  return (
    <Float speed={10} rotationIntensity={0.1} floatIntensity={2}>
      <Text
        position={position}
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
        rotation={rotation}
        textAlign="center"
      >
        {text}
      </Text>
    </Float>
  )
}

export default Text2D
