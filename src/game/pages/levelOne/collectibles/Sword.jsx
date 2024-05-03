import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useState } from 'react'

export function Sword(props) {
  const { nodes, materials } = useGLTF('/assets/models/collectibles/Sword.glb')
  const groupRef = useRef()

  const [swordCollected, setSwordCollected] = useState(false)

  const handleSwordCollision = () => {
    setSwordCollected(true) // Actualiza el estado cuando la espada es recogida
  }

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02 // Ajusta la velocidad y dirección de la rotación según tus necesidades
    }
  })

  if (swordCollected) {
    return null
  }

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <RigidBody
        type={'fixed'}
        colliders="cuboid"
        onCollisionEnter={() => {
          handleSwordCollision()
        }}
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
