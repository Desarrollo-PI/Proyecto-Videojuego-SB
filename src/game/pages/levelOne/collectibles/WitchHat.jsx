import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function WitchHat(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/WitchHat.glb'
  )
  const witchHatRef = useRef()

  const [witchHatCollected, setWitchHatCollected] = useState(isCollected)

  const handleWitchHatCollision = () => {
    onCollect(name, 'collectibles_level_one', 'witchHat')
  }

  useEffect(() => {
    if (isCollected) {
      setWitchHatCollected(true)
    }
  }, [isCollected])

  useFrame(() => {
    collectibleRotation(witchHatRef)
  })

  if (witchHatCollected) {
    return null
  }

  return (
    <group ref={witchHatRef} {...props} dispose={null} scale={1.5}>
      <RigidBody
        type={'fixed'}
        colliders="cuboid"
        onCollisionEnter={() => {
          handleWitchHatCollision()
        }}
      >
        <group>
          <group>
            <mesh
              geometry={nodes.WitchHat001.geometry}
              material={materials.gold}
            />
            <mesh
              geometry={nodes.WitchHat001_1.geometry}
              material={materials['cloth.001']}
            />
            <mesh
              geometry={nodes.WitchHat001_2.geometry}
              material={materials['Material.007']}
            />
          </group>
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/WitchHat.glb')
