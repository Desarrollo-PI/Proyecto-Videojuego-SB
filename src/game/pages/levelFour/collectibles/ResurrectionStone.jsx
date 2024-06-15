import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function ResurrectionStone(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/ResurrectionStone.glb'
  )
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_four', 'ResurrectionStone')
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
          geometry={nodes.ResurrectionStone.geometry}
          material={materials['Material.002']}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/ResurrectionStone.glb')
