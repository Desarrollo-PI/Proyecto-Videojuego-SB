import WorldLevelFourth from './World'

import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { Canvas } from '@react-three/fiber'

import Lights from '../../globals/Lights'
import Environments from '../../globals/Environments'

const LevelFourthPage = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Suspense fallback={null}>
        <Lights />
        <Environments />
        <Physics debug>
          <WorldLevelFourth />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default LevelFourthPage
