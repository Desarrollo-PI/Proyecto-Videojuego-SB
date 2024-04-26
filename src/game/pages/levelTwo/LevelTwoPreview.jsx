import { WorldLevelTwohWithRotation } from './WorldPreview'

import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { Canvas, useThree } from '@react-three/fiber'

import Lights from '../../globals/Lights'
import Environments from '../../globals/Environments'
import { PerspectiveCamera } from '@react-three/drei'

function FixedCamera({ position, lookAt }) {
    const { camera } = useThree()

    camera.position.set(position[0], position[1], position[2])
    camera.lookAt(lookAt[0], lookAt[1], lookAt[2])

    return null
}

const LevelTwoPreview = () => {
    return (
        <Canvas>
            <FixedCamera position={[-100, 100, 150]} lookAt={[0, 0, 0]} />
            <Suspense fallback={null}>
                <Lights />
                <WorldLevelTwohWithRotation />
            </Suspense>
        </Canvas>
    )
}

export default LevelTwoPreview
