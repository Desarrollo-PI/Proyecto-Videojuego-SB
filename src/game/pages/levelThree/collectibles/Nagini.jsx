import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Nagini(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Nagini.glb')
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleGlassesIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_three', 'nagini')
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
          geometry={nodes.Nagini.geometry}
          material={materials.Anaconda_mat}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Nagini.glb')
