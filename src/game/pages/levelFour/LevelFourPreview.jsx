import { WorldLevelFourWithRotation } from './WorldPreview'

import { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import Lights from '../../globals/Lights'

function FixedCamera({ position, lookAt }) {
  const { camera } = useThree()

  camera.position.set(position[0], position[1], position[2])
  camera.lookAt(lookAt[0], lookAt[1], lookAt[2])

  return null
}

const LevelFourPreview = () => {
  return (
    <Canvas>
      <FixedCamera position={[-100, 400, 300]} lookAt={[0, 0, 0]} />
      <Suspense fallback={null}>
        <Lights />
        <WorldLevelFourWithRotation />
      </Suspense>
    </Canvas>
  )
}

export default LevelFourPreview
