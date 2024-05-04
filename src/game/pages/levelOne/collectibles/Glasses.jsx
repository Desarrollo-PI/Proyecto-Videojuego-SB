import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Glasses(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/Glasses.glb'
  )
  const glassesRef = useRef()

  const [GlassesCollected, setGlassesCollected] = useState(isCollected)

  const handleGlassesCollision = () => {
    onCollect(name, 'collectibles_level_one', 'glasses')
  }

  useEffect(() => {
    if (isCollected) {
      setGlassesCollected(true)
    }
  }, [isCollected])

  useFrame(() => {
    collectibleRotation(glassesRef)
  })

  if (GlassesCollected) {
    return null
  }

  return (
    <group {...props} ref={glassesRef} dispose={null}>
      <RigidBody
        type={'fixed'}
        colliders="cuboid"
        onIntersectionEnter={() => {
          handleGlassesCollision()
        }}
        sensor
      >
        <group>
          <mesh
            geometry={nodes.Glasses.geometry}
            material={materials.lambert1}
          />
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Glasses.glb')
