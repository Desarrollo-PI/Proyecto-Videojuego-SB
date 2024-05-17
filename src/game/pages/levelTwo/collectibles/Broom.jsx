import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Broom(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Broom.glb')
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleGlassesIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_two', 'broom')
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
        <group scale={[0.5, 0.5, 0.5]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Broom_1.geometry}
            material={materials.mat20}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Broom_2.geometry}
            material={materials.mat22}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Broom_3.geometry}
            material={materials.mat18}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Broom_4.geometry}
            material={materials.mat19}
          />
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Broom.glb')
