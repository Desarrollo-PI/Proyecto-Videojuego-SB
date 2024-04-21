import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import * as THREE from 'three'

const withRotation = (Component) => (props) => {
  console.log('Component', Component)
  const ref = useRef()
  const refWorld = useRef()
  const rotationCenter = new THREE.Vector3(100, 200, 100)
  useFrame(() => {
    //ref.current.position.copy(rotationCenter);
    ref.current.rotation.y += 0.005
    //ref.current.position.copy(rotationCenter).multiplyScalar(-1);
  })
  return (
    <mesh ref={ref}>
      <Component ref={refWorld} {...props} />
    </mesh>
  )
}

const WorldLevelFourth = (props) => {
  const { nodes, materials } = useGLTF(
    '/assets/preview/LevelFourthDraftPreview.glb'
  )
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff.geometry}
        material={materials.Cliff}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_1.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_2.geometry}
        material={materials.Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_3.geometry}
        material={materials['grey.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_4.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_5.geometry}
        material={materials.Light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_6.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_7.geometry}
        material={materials.DarkMetal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_8.geometry}
        material={materials.Fire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff_9.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
}

useGLTF.preload('/LevelFourthDraftPreview.glb')

export const WorldLevelFourthWithRotation = withRotation(WorldLevelFourth)
