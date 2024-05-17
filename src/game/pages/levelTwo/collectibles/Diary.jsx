import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Diary(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Diary.glb')
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleGlassesIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_two', 'diary')
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
        <group scale={[1, 1, 1]} rotation={[Math.PI / 6, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_1.geometry}
            material={materials.Beige}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_2.geometry}
            material={materials.DarkRed}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_3.geometry}
            material={materials.Golden}
          />
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Diary.glb')
