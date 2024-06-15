import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function EyeOjoLoco(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/EyeOjoLoco.glb'
  )
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_four', 'EyeOjoLoco')
    }
  }

  useEffect(() => {
    if (isCollected) {
      setCollected(true)
    }
  }, [isCollected])

  useFrame(() => {
    collectibleRotation(ref)
  })

  if (collected) {
    return null
  }

  return (
    <group {...props} ref={ref} dispose={null}>
      <RigidBody
        type={'fixed'}
        colliders={'cuboid'}
        onIntersectionEnter={(e) => {
          handleIntersection(e)
        }}
        sensor
        scale={[0.5, 0.5, 0.5]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EyeOjoLoco_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EyeOjoLoco_2.geometry}
          material={materials.mat23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EyeOjoLoco_3.geometry}
          material={materials.mat21}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/EyeOjoLoco.glb')
