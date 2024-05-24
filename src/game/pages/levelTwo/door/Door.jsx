import React, { useRef, useState, useEffect } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'
import { RigidBody, interactionGroups } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useMusic } from '../../../../providers/music/MusicProvider'

const Door = ({ openDoor }) => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelTwo/LevelTwo.glb'
  )

  const { isPlaying } = useMusic()

  const rightDoor = useRef()
  const leftDoor = useRef()
  const audioRef = useRef()

  const [leftDoorType, setLeftDoorType] = useState('fixed')
  const [rightDoorType, setRightDoorType] = useState('fixed')
  const [leftDoorRotation, setLeftDoorRotation] = useState(0)
  const [rightDoorRotation, setRightDoorRotation] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (openDoor) {
      setLeftDoorType('dynamic')
      setRightDoorType('dynamic')
      isPlaying && audioRef.current.play()
    }
  }, [openDoor])

  useFrame(() => {
    if (openDoor && !isOpen) {
      if (leftDoorRotation > -Math.PI / 2) {
        setLeftDoorRotation(leftDoorRotation - 0.01)
        leftDoor.current.setAngvel({ x: 0, y: -0.8, z: 0 }, true)
        leftDoor.current.setLinvel({ x: 0, y: 0, z: -2 }, true)
      } else {
        leftDoor.current.setAngvel({ x: 0, y: 0, z: 0 }, true)
        leftDoor.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
        setLeftDoorType('fixed')
      }

      if (rightDoorRotation < Math.PI / 2) {
        setRightDoorRotation(rightDoorRotation + 0.01)
        rightDoor.current.setAngvel({ x: 0, y: 0.8, z: 0 }, true)
        rightDoor.current.setLinvel({ x: 0, y: 0, z: -2 }, true)
      } else {
        rightDoor.current.setAngvel({ x: 0, y: 0, z: 0 }, true)
        rightDoor.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
        setRightDoorType('fixed')
      }

      if (leftDoorRotation <= -Math.PI / 2) {
        setIsOpen(true)
      }
    }
  })

  return (
    <>
      <group>
        <RigidBody
          type={leftDoorType}
          colliders={'trimesh'}
          ref={leftDoor}
          collisionGroups={interactionGroups(11, [0])}
        >
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door001_1.geometry}
              material={materials.DarkWood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door001_2.geometry}
              material={materials.Metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door001_3.geometry}
              material={materials['Wood.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door001_4.geometry}
              material={materials.Metal_Light}
            />
          </group>
        </RigidBody>
        <RigidBody
          type={rightDoorType}
          colliders={'trimesh'}
          ref={rightDoor}
          collisionGroups={interactionGroups(10, [0])}
        >
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door002_1.geometry}
              material={materials.DarkWood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door002_2.geometry}
              material={materials.Metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door002_3.geometry}
              material={materials['Wood.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door002_4.geometry}
              material={materials.Metal_Light}
            />
          </group>
        </RigidBody>
      </group>
      <PositionalAudio
        url="/assets/sounds/door.mp3"
        ref={audioRef}
        loop={false}
      />
    </>
  )
}

export default Door
