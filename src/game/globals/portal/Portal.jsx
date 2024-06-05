import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Portal = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/elements/Portal.glb')
  const refPortal = useRef()

  const onEnterCollisionPortal = (e) => {
    props.onTeleport(e, props.teleportPosition)
  }

  return (
    <RigidBody
      colliders="cuboid"
      type="fixed"
      onCollisionEnter={onEnterCollisionPortal}
      ref={refPortal}
      {...props}
    >
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3002.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3002_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3002_2.geometry}
          material={materials['Material.014']}
        />
      </group>
    </RigidBody>
  )
}

export default Portal

useGLTF.preload('/Portal.glb')
