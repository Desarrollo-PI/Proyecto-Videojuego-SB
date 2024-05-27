import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function ChocolateFrog(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/ChocolateFrog.glb'
  )
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleGlassesIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_three', 'chocolateFrog')
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChocolateFrog.geometry}
          material={materials['Material.001']}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/ChocolateFrog.glb')
