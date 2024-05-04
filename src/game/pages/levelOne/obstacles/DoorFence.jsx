import React from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export const DoorFence = (props) => {
  const { keyCollected } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelOne/LevelOne.glb'
  )

  if (keyCollected) {
    return null
  }

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <CuboidCollider args={[2, 2, 0.3]} position={[2.18384, 1, -79.1566]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fence007.geometry}
          material={materials.brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lock_1.geometry}
          material={materials['mat16.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lock_2.geometry}
          material={materials['mat17.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lock_3.geometry}
          material={materials['mat15.003']}
        />
      </RigidBody>
    </group>
  )
}

export default DoorFence
