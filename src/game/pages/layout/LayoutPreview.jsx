import { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import LightsEnvironment from '../../globals/LightsEnvironment'

function FixedCamera({ position, lookAt }) {
  const { camera } = useThree()

  camera.position.set(position[0], position[1], position[2])
  camera.lookAt(lookAt[0], lookAt[1], lookAt[2])

  return null
}

const LayoutPreview = ({
  positionCamara,
  lookAt,
  positionDirectionalLight,
  intensityDirectionalLight,
  intensityAmbientLight,
  children,
}) => {
  const previewLightsProps = {
    positionDirectionalLight,
    intensityDirectionalLight,
    intensityAmbientLight,
  }

  return (
    <Canvas>
      <FixedCamera position={positionCamara} lookAt={lookAt} />
      <Suspense fallback={null}>
        <LightsEnvironment {...previewLightsProps} />
        {children}
      </Suspense>
    </Canvas>
  )
}

export default LayoutPreview
