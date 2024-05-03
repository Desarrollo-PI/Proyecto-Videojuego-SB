import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ThunderLight(props) {
  const { nodes, materials } = useGLTF('/assets/models/collectibles/ThunderLight.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh geometry={nodes.ThunderLight.geometry} material={materials['Material.006']} />
      </group>
    </group>
  )
}

useGLTF.preload('/ThunderLight.glb')