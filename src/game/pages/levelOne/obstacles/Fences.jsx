import React, { createRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, MeshCollider, RigidBody } from '@react-three/rapier'

const Fences = () => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelOne/LevelOne.glb'
  )

  return (
    <RigidBody type="fixed" args={[1, 10, 1]} colliders={false}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence001.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence002.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence004.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence005.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence008.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence009.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence003.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence006.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence010.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence011.geometry}
        material={materials.Fence01}
      />
    </RigidBody>
  )
}

export default Fences
