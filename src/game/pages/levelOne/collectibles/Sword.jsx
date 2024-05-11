import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Sword(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Sword.glb')

  const swordRef = useRef()

  const [swordCollected, setSwordCollected] = useState(isCollected)

  const handleSwordIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_one', 'sword')
    }
  }

  useEffect(() => {
    if (isCollected) {
      setSwordCollected(true)
    }
  }, [isCollected])

  useFrame(() => {
    collectibleRotation(swordRef)
  })

  if (swordCollected) {
    return null
  }

  return (
    <group ref={swordRef} {...props} dispose={null}>
      <RigidBody
        type={'fixed'}
        colliders="cuboid"
        onIntersectionEnter={(e) => {
          handleSwordIntersection(e)
        }}
        sensor
      >
        <group>
          <group>
            <mesh
              geometry={nodes.Sword_1.geometry}
              material={materials['Material.001']}
            />
            <mesh
              geometry={nodes.Sword_2.geometry}
              material={materials['mango.001']}
            />
            <mesh
              geometry={nodes.Sword_3.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Sword.glb')
