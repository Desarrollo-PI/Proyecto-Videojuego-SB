import React, { useState, useEffect, useRef } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useMusic } from '../../../providers/music/MusicProvider'
import { socket } from '../../../socket/socket-manager'

export function IvyServer(props) {
  const { nodes, materials } = useGLTF('/assets/models/elements/Ivy.glb')
  const [material] = useState(materials.Material.clone())
  const [isFired, setIsFired] = useState(props.isFired)
  const [isBurned, setIsBurned] = useState(props.isBurned)
  const { isPlaying } = useMusic()
  const ivyRef = useRef()
  const fireSoundRef = useRef()

  const onCollisionEnter = (e) => {
    if (e.rigidBodyObject.name === 'incendioBody') {
      socket.emit('hit-incendio-in-ivy', { id: props.idIvy })
    }
  }

  useEffect(() => {
    setIsFired(props.isFired)
    console.log('props.isFired', props.isFired)
  }, [props.isFired])

  useEffect(() => {
    setIsFired(props.isFired)
  }, [props.isFired])

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
        props.burnIvy(props.idIvy)
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
