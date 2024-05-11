import React from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

const Fences = () => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelOne/LevelOne.glb'
  )

  return (
    <RigidBody type="fixed" colliders={false} /*args={[10, 10, 10]}*/ >
      
      <mesh castShadow
      receiveShadow
      geometry={nodes.Fence.geometry}
      material={materials.Fence01}/>
      <CuboidCollider args={[0.01, 10, 4.3]} position={[-1.2, 1, -42.4]}/>
      {/* colliders de al lado de la llave */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence001.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[2.5, 5, 0.01]} position={[-8, 1, -4.5]}/>
      {/* colliders al lado del inicio */}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence002.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[0.01, 10, 10.5]} position={[4.25, 1, -59.4]}/>
      {/* colliders en vertical de adelante */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence004.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[5.4, 5, 0.01]} position={[-1.2, 1, -56.9]}/>
      {/* colliders en horizontal de adelante */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence005.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[5.2, 5, 0.01]} position={[-5.3, 1, -79.1]}/>
      {/* colliders penultima valla */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence008.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[0.01, 10, 4.3]} position={[1.2, 1, -20.4]}/>
      {/* colliders en vertical del inicio */}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence009.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[10, 5, 0.01]} position={[0, 1, 2.8]}/>
      {/* colliders de atras */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence003.geometry}
        material={materials.Fence01}
      />
      
      <CuboidCollider args={[4.5, 5, 0.01]} position={[5.9, 1, -16.3]}/>
      {/* colliders en horizontal del inicio */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence006.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[4.5, 5, 0.01]} position={[-5.9, 1, -38.2]}/>
      {/* colliders en horizontal de la mitad*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence010.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[5, 5, 0.01]} position={[5.5, 1, -89.1]}/>
      {/* colliders ogro*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence011.geometry}
        material={materials.Fence01}
      />
      <CuboidCollider args={[10, 5, 0.01]} position={[0, 1, -115.8]}/>
      {/* colliders del fondo */}
    </RigidBody>
  )
}

export default Fences
