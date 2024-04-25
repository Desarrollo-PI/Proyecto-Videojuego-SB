import React from 'react'


const LightsEnvironment = ({positionDirectionalLight, intensityDirectionalLight, intensityAmbientLight}) => {

  console.log('LightsEnvironment', positionDirectionalLight, intensityDirectionalLight, intensityAmbientLight)
  return (
    <>
      <directionalLight
        castShadow
        position={positionDirectionalLight}
        intensity={intensityDirectionalLight}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-100}
        shadow-camera-right={200}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <ambientLight intensity={intensityAmbientLight} />
    </>
  )
}

export default LightsEnvironment
