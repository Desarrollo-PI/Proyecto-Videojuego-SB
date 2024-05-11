import React, { createRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, MeshCollider, RigidBody } from '@react-three/rapier'

const Puddle = () => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelOne/LevelOne.glb'
  )

  return (
    <RigidBody type='fixed' colliders={false} /*args={[10, 10, 10]}*/ >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_1.geometry}
        material={materials['legs.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_2.geometry}
        material={materials.legs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_3.geometry}
        material={materials.floor_is_wet_sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_4.geometry}
        material={materials.sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_5.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_6.geometry}
        material={materials['Material.013']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_7.geometry}
        material={materials['floor_is_wet_sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_8.geometry}
        material={materials['sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco_9.geometry}
        material={materials['Material.014']}
      />

    <CuboidCollider args={[2, 5, 2.3]} position={[-4, 1, -5]}/>
      {/* colliders primer charco */}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_1.geometry}
        material={materials['legs.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_2.geometry}
        material={materials.legs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_3.geometry}
        material={materials.floor_is_wet_sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_4.geometry}
        material={materials.sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_5.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_6.geometry}
        material={materials['Material.013']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_7.geometry}
        material={materials['floor_is_wet_sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_8.geometry}
        material={materials['sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco001_9.geometry}
        material={materials['Material.014']}
      />
      <CuboidCollider args={[1.6, 5, 2]} position={[5.85, 1, -50]}/>
      {/* colliders segundo charco */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_1.geometry}
        material={materials['legs.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_2.geometry}
        material={materials.legs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_3.geometry}
        material={materials.floor_is_wet_sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_4.geometry}
        material={materials.sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_5.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_6.geometry}
        material={materials['Material.013']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_7.geometry}
        material={materials['floor_is_wet_sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_8.geometry}
        material={materials['sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charco002_9.geometry}
        material={materials['Material.014']}
      />
      <CuboidCollider args={[2.2, 9, 1.5]} position={[0.3, 1, -83]}/>
      {/* colliders tecer charco */}
    </RigidBody>
    )
}

export default Puddle