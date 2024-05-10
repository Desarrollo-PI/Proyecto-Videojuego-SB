import React, { createRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, MeshCollider, RigidBody } from '@react-three/rapier'

const TrashContainer = () => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelOne/LevelOne.glb'
  )

  return (
<RigidBody type='fixed' colliders={false} /*args={[10, 10, 10]}*/ >
<mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer003_1.geometry}
        material={materials.Green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer003_2.geometry}
        material={materials.DarkGrey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer003_3.geometry}
        material={materials.Grey}
      />
      <CuboidCollider args={[0.8, 5, 1.1]} position={[0, 1, -30.7]}/>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer002_1.geometry}
        material={materials.Green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer002_2.geometry}
        material={materials.DarkGrey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer002_3.geometry}
        material={materials.Grey}
      />
      <CuboidCollider args={[1.6, 10, 0.8]} position={[9, 1, -49.4]}/>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer005_1.geometry}
        material={materials.Green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer005_2.geometry}
        material={materials.DarkGrey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrashContainer005_3.geometry}
        material={materials.Grey}
      />
      <CuboidCollider args={[1.4, 10, 0.8]} position={[-1.2, 1, -80.3]}/>
</RigidBody>
  )
}

export default TrashContainer