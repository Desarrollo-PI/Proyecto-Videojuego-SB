import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

import collectibleRotation from '../../../utils/collectible-rotation'

const KeyServer = (props) => {
  const { idKey, handleKeyCollected, position, rotation } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Key.glb')

  const keyRef = useRef()

  useFrame(() => {
    collectibleRotation(keyRef)
  })

  return (
    <RigidBody
      type="fixed"
      colliders={'cuboid'}
      onIntersectionEnter={(e) => handleKeyCollected(e, idKey)}
      sensor
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key.geometry}
        material={materials.Golden}
        position={position || [0, 0, 0]}
        rotation={rotation || [0, 0, 0]}
        ref={keyRef}
      />
    </RigidBody>
  )
}

export default KeyServer
