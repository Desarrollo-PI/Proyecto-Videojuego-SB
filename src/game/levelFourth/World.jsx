import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function WorldLevelFourth(props) {
  const { nodes, materials } = useGLTF('/assets/models/worldLevelFourth/LevelFourthDraftA600.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.311, 0.042, -50.7]} scale={[1, 3, 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Entrance_1.geometry}
          material={materials['grey.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Entrance_2.geometry}
          material={materials['grey_light.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillar.geometry}
        material={materials.lambert7SG}
        position={[-5.448, -29.891, -4.562]}
        scale={[1, 2, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneFence.geometry}
        material={nodes.StoneFence.material}
        position={[-4.415, 1, 1.163]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.3, -1.108, -0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneFence001.geometry}
        material={nodes.StoneFence001.material}
        position={[4.583, 1, 1.163]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.3, -1.108, -0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff.geometry}
        material={materials.standardSurface1}
        position={[-4.113, -31.064, -82.637]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[70, 10, 50]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor002.geometry}
        material={nodes.Floor002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor004.geometry}
        material={nodes.Floor004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls003.geometry}
        material={materials['Material.001']}
        position={[-32.339, 5.878, -50.533]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.5, 2, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls.geometry}
        material={materials['Material.001']}
        position={[11.284, 5.878, -50.533]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.5, 2, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls002.geometry}
        material={materials['Material.001']}
        position={[39.075, 5.878, -100.242]}
        scale={[0.5, 2, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls001.geometry}
        material={materials['Material.001']}
        position={[-38.534, 5.878, -100.321]}
        scale={[0.5, 2, 1]}
      />
    </group>
  )
}

useGLTF.preload('/LevelFourthDraftA600.glb')
