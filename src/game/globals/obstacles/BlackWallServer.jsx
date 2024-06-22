import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

const BlackWallServer = (props) => {
  const { idBlackWall, position, rotation } = props

  const { nodes, materials } = useGLTF('/assets/models/elements/BlackWall.glb')

  const blackRef = useRef()

  return (
    <group {...props} dispose={null} ref={blackRef}>
      <RigidBody type="fixed" colliders={'cuboid'}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackWall.geometry}
          material={materials['Material.008']}
          position={position || [0, 0, 0]}
          rotation={rotation || [0, 0, 0]}
        />
      </RigidBody>
    </group>
  )
}

export default BlackWallServer
