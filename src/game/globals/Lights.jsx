import React from 'react'
import { ambientLight, directionalLight, Color } from 'three'

const Lights = () => {
  return (
    <>
      {/* Luz ambiental */}
      <ambientLight
        intensity={0.0000000000000000001} // Reduce la intensidad de la luz ambiental
      />
      {/* Luz direccional */}
      <directionalLight
        castShadow={true}
        position={[2, 10, 0]}
        color={new Color('#FFF700')}
        intensity={0.000001} // Reduce la intensidad de la luz direccional
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  )
}

export default Lights
