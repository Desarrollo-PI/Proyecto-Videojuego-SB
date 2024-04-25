import { WorldLevelOneWithRotation } from './WorldPreview'

import { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import Lights from '../../globals/Lights'

function FixedCamera({ position, lookAt }) {
  const { camera } = useThree()

  camera.position.set(position[0], position[1], position[2])
  camera.lookAt(lookAt[0], lookAt[1], lookAt[2])

  return null
}

const LevelOnePreview = () => {
  return (
    <Canvas>
      <FixedCamera position={[0, 60, 150]} lookAt={[0, 0, 0]} />
      <Suspense fallback={null}>
        <Lights />
        <WorldLevelOneWithRotation />
      </Suspense>
    </Canvas>
  )
}

export default LevelOnePreview
