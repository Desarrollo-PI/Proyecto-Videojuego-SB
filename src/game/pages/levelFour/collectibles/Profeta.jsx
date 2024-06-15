import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Profeta(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/Profeta.glb'
  )
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_four', 'Profeta')
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
        scale={[0.8, 0.8, 0.8]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Profeta.geometry}
          material={materials['Material.003']}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Profeta.glb')
