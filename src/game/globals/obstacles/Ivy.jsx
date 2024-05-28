import React, { useState, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function Ivy(props) {
  const { nodes, materials } = useGLTF('/assets/models/elements/Ivy.glb')
  const [material] = useState(materials.Material.clone())
  const [isFired, setIsFired] = useState(false)
  const [isBurned, setIsBurned] = useState(false)
  const ivyRef = useRef()

  const onCollisionEnter = (e) => {
    if (e.rigidBodyObject.name === 'incendioBody') {
      setIsFired(true)
    }
  }

  useEffect(() => {
    if (isFired) {
      material.color.set('red')
    }
  }, [isFired, material])

  useFrame(() => {
    if (isFired) {
      const currentColor = material.color
      currentColor.r *= 0.95
      currentColor.g *= 0.95
      currentColor.b *= 0.95
      material.color = currentColor

      if (
        currentColor.r < 0.1 &&
        currentColor.g < 0.1 &&
        currentColor.b < 0.1
      ) {
        setIsBurned(true)
        setIsFired(false)
      }
    }
  })

  if (isBurned) {
    return null
  }

  return (
    <group {...props} dispose={null} ref={ivyRef}>
      <RigidBody
        type="dynamic"
        onCollisionEnter={onCollisionEnter}
        density={0}
        mass={0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ivy.geometry}
          material={material}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/Ivy.glb')
