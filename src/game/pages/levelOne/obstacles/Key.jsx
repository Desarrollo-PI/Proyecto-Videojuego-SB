import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

import collectibleRotation from '../../../../utils/collectible-rotation'

export const Key = (props) => {
  const { keyCollected, handleKeyCollected } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Key.glb')

  const keyRef = useRef()

  useFrame(() => {
    collectibleRotation(keyRef)
  })

  if (keyCollected) {
    return null
  }

  return (
    <RigidBody
      type="fixed"
      colliders={'cuboid'}
      onCollisionEnter={handleKeyCollected}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key.geometry}
        material={materials.Golden}
        position={[-2.545, 1.423, -39.444]}
        ref={keyRef}
      />
    </RigidBody>
  )
}

export default Key
