import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function ThunderLight(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/ThunderLight.glb'
  )

  const thunderLightRef = useRef()

  const [thunderLightCollected, setThunderLightCollected] =
    useState(isCollected)

  const handleThunderLightCollision = () => {
    onCollect(name, 'collectibles_level_one', 'thunderLight')
  }

  useEffect(() => {
    if (isCollected) {
      setThunderLightCollected(true)
    }
  }, [isCollected])

  useFrame(() => {
    collectibleRotation(thunderLightRef)
  })

  if (thunderLightCollected) {
    return null
  }

  return (
    <group ref={thunderLightRef} {...props} dispose={null}>
      <RigidBody
        type={'fixed'}
        colliders="cuboid"
        onCollisionEnter={() => {
          handleThunderLightCollision()
        }}
      >
        <group>
          <mesh
            geometry={nodes.ThunderLight.geometry}
            material={materials['Material.006']}
          />
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/ThunderLight.glb')
