import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function PhilosopherStone(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/PhilosopherStone.glb'
  )
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_four', 'PhilosopherStone')
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
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PhilosopherStone.geometry}
          material={materials.Ruby}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/PhilosopherStone.glb')
