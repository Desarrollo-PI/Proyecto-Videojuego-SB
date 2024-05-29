import React, { useState, useEffect, useRef } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useMusic } from '../../../providers/music/MusicProvider'

export function Ivy(props) {
  const { nodes, materials } = useGLTF('/assets/models/elements/Ivy.glb')
  const [material] = useState(materials.Material.clone())
  const [isFired, setIsFired] = useState(false)
  const [isBurned, setIsBurned] = useState(false)
  const { isPlaying } = useMusic()
  const ivyRef = useRef()
  const fireSoundRef = useRef()

  const onCollisionEnter = (e) => {
    if (e.rigidBodyObject.name === 'incendioBody') {
      setIsFired(true)
    }
  }

  useEffect(() => {
    if (isFired) {
      isPlaying && fireSoundRef.current.play()
      material.color.set('red')
    }
  }, [isFired, material])

  useFrame(() => {
    if (isFired) {
      const currentColor = material.color
      currentColor.r *= 0.99
      currentColor.g *= 0.99
      currentColor.b *= 0.99
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
      <PositionalAudio
        url="/assets/sounds/fire.mp3"
        ref={fireSoundRef}
        distance={10}
        loop={false}
      />
    </group>
  )
}

useGLTF.preload('/Ivy.glb')
