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

export function WorldLevelThree(props) {
  const { nodes, materials } = useGLTF('/assets/preview/LevelThreePreview.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_1.geometry}
        material={materials.DarkLeavesMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_2.geometry}
        material={materials.TrunkMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_3.geometry}
        material={materials.LightLeavesMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_4.geometry}
        material={materials.Wall6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_5.geometry}
        material={materials['TrunkMaterial.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_6.geometry}
        material={materials.Trunk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_7.geometry}
        material={materials.Bottom}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_8.geometry}
        material={materials.Up}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_9.geometry}
        material={materials['Material.019']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_10.geometry}
        material={materials['Material.020']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_11.geometry}
        material={materials['Highlights.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_12.geometry}
        material={materials['Main.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_13.geometry}
        material={materials.Highlights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_14.geometry}
        material={materials.Main}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_15.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_16.geometry}
        material={materials.Cobweb}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine001_17.geometry}
        material={materials['Material.008']}
      />
    </group>
  )
}

useGLTF.preload('/LevelThreePreview.glb')

export const WorldLevelThreeWithRotation = withRotation(WorldLevelThree)
