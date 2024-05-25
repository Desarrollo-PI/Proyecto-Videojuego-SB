import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const withRotation = (Component) => (props) => {
  const ref = useRef()
  const refWorld = useRef()
  useFrame(() => {
    ref.current.rotation.y += 0.005
  })
  return (
    <mesh ref={ref}>
      <Component ref={refWorld} {...props} />
    </mesh>
  )
}

const WorldLevelTwo = (props) => {
  const { nodes, materials } = useGLTF('/assets/preview/LevelTwoPreview.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 53.136]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials['lambert2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.HalloweenBits}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_4.geometry}
          material={materials.ma}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_5.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_6.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_7.geometry}
          material={materials['HalloweenBits.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_8.geometry}
          material={materials['HalloweenBits.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_9.geometry}
          material={materials.DarkWood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_10.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_11.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_12.geometry}
          material={materials.Metal_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_13.geometry}
          material={materials.Statue4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_14.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_15.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_16.geometry}
          material={materials.Holzbraun}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_17.geometry}
          material={materials.Tannengrn}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_18.geometry}
          material={materials['Wall_Dark.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_19.geometry}
          material={materials['Wall_Medium.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_20.geometry}
          material={materials['Wall_Highlights.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_21.geometry}
          material={materials['Metal.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/LevelTwoPreview.glb')

export const WorldLevelTwohWithRotation = withRotation(WorldLevelTwo)
