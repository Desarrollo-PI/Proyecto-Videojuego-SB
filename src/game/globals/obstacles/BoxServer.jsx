import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { socket } from '../../../socket/socket-manager'

export default function BoxServer(props) {
  const { nodes, materials } = useGLTF('/assets/models/elements/Box.glb')

  const boxBodyRef = useRef()

  useEffect(() => {
    if (boxBodyRef.current) {
      boxBodyRef.current.lockRotations(true)
    }
  }, [])

  useEffect(() => {
    const handleUpdateValuesBox = (box) => {
      try {
        if (box.id === props.idBox) {
          boxBodyRef.current?.setTranslation(box.position)
        }
      } catch (e) {
        console.log(e)
      }
    }

    socket.on('updates-values-box', handleUpdateValuesBox)

    return () => {
      socket.off('updates-values-box', handleUpdateValuesBox)
    }
  }, [props.idBox])

  const frameCountRef = useRef(0)
  const frameSkip = 10

  useFrame(() => {
    frameCountRef.current++
    if (frameCountRef.current % frameSkip !== 0) {
      return
    }

    if (boxBodyRef?.current?.isMoving()) {
      const currentPosition = boxBodyRef?.current?.translation()
      socket.emit('moving-box', {
        id: props.idBox,
        position: currentPosition,
      })
    }
  })

  return (
    <group {...props} dispose={null}>
      <RigidBody type="dynamic" density={60} ref={boxBodyRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004.geometry}
          material={materials['DarkWood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004_1.geometry}
          material={materials['Wood.002']}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/elements/Box.glb')
