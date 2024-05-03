import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useState } from 'react'

export function Glasses(props) {
  const { nodes, materials } = useGLTF(
    '/assets/models/collectibles/Glasses.glb'
  )
  const groupRef = useRef()

  const [GlassesCollected, setGlassesCollected] = useState(false)

  const handleGlassesCollision = () => {
    setGlassesCollected(true) // Actualiza el estado cuando la espada es recogida
  }

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02 // Ajusta la velocidad y dirección de la rotación según tus necesidades
    }
  })

  if (GlassesCollected) {
    return null
  }

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <RigidBody
        type={'fixed'}
        colliders="cuboid"
        onCollisionEnter={() => {
          handleGlassesCollision()
        }}
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
