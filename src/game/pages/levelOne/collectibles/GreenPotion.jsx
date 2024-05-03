import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function GreenPotion(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/GreenPotion.glb'
  )

  const [greenPotionCollected, setGreenPotionCollected] = useState(isCollected)

  const greenPotionRef = useRef()

  const handleGreenPotionCollision = () => {
    onCollect(name, 'collectibles_level_one', 'greenPotion')
  }

  useEffect(() => {
    if (isCollected) {
      setGreenPotionCollected(true)
    }
  }, [isCollected])

  useFrame(() => {
    collectibleRotation(greenPotionRef)
  })

  if (greenPotionCollected) {
    return null
  }

  return (
    <group ref={greenPotionRef} {...props} dispose={null} scale={2}>
      <RigidBody
        type={'fixed'}
        colliders="cuboid"
        onCollisionEnter={() => {
          handleGreenPotionCollision()
        }}
      >
        <group>
          <group>
            <mesh
              geometry={nodes.GreenPotion_1.geometry}
              material={materials.Lquido1}
            />
            <mesh
              geometry={nodes.GreenPotion_2.geometry}
              material={materials.Vidro1}
            />
            <mesh
              geometry={nodes.GreenPotion_3.geometry}
              material={materials.Rolha1}
            />
          </group>
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/GreenPotion.glb')
