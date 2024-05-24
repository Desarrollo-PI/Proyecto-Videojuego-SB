import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { vec3 } from '@react-three/rapier'

export function StoneBlock(props) {
  const ref = useRef()

    const { nodes, materials } = useGLTF('/assets/models/elements/StoneBlock.glb')
  
    return (
      <>
        <RigidBody position={[0,10,0]} >
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone001.geometry}
        material={materials['Atlas.006']}
      />
        </RigidBody>
      </>
    )
  }

useGLTF.preload('./StoneBlocks.glb')