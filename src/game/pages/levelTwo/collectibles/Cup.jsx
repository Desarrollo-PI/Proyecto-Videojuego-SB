import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Cup(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Cup.glb')
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleGlassesIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_two', 'cup')
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
          handleGlassesIntersection(e)
        }}
        sensor
      >
        <group scale={[3.5, 3.5, 3.5]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cup_1.geometry}
            material={materials._defaultMat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cup_2.geometry}
            material={materials.greyLight}
          />
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Cup.glb')
