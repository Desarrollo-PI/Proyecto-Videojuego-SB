import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

import collectibleRotation from '../../../../utils/collectible-rotation'

export function Wand(props) {
  const { name, isCollected, onCollect } = props

  const { nodes, materials } = useGLTF('/assets/models/collectibles/Wand.glb')
  const ref = useRef()

  const [collected, setCollected] = useState(isCollected)

  const handleGlassesIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      onCollect(name, 'collectibles_level_two', 'wand')
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
        colliders={false}
        onIntersectionEnter={(e) => {
          handleGlassesIntersection(e)
        }}
        sensor
      >
        <CuboidCollider args={[0.2, 0.2, 0.2]} />
        <group scale={[0.3, 0.3, 0.3]} rotation={[Math.PI / 6, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wand.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wand001.geometry}
            material={materials.Handle}
          />
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Wand.glb')
