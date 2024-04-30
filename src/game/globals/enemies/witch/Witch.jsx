import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Witch(props) {
  const witchRef = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Witch.glb'
  )
  const { actions } = useAnimations(animations, witchRef)

  useEffect(() => {
    actions['Attack'].timeScale = 2
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Idle'].play()
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Walking'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Attack'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (props.action == 1) {
      if (
        witchRef.current.position.z <
        Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
      ) {
        witchRef.current.rotation.y = 0
      } else {
        witchRef.current.rotation.y = Math.PI
      }
      witchRef.current.position.z =
        Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
    }
  })

  return (
    <group
      ref={witchRef}
      {...props}
      dispose={null}
      position={props.position}
      scale={0.25}
    >
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="ChibiWitch">
            <skinnedMesh
              name="ChibiWitch-Mesh"
              geometry={nodes['ChibiWitch-Mesh'].geometry}
              material={materials.DarkBlue}
              skeleton={nodes['ChibiWitch-Mesh'].skeleton}
            />
            <skinnedMesh
              name="ChibiWitch-Mesh_1"
              geometry={nodes['ChibiWitch-Mesh_1'].geometry}
              material={materials.Blue}
              skeleton={nodes['ChibiWitch-Mesh_1'].skeleton}
            />
            <skinnedMesh
              name="ChibiWitch-Mesh_2"
              geometry={nodes['ChibiWitch-Mesh_2'].geometry}
              material={materials.Gold}
              skeleton={nodes['ChibiWitch-Mesh_2'].skeleton}
            />
            <skinnedMesh
              name="ChibiWitch-Mesh_3"
              geometry={nodes['ChibiWitch-Mesh_3'].geometry}
              material={materials.White}
              skeleton={nodes['ChibiWitch-Mesh_3'].skeleton}
            />
            <skinnedMesh
              name="ChibiWitch-Mesh_4"
              geometry={nodes['ChibiWitch-Mesh_4'].geometry}
              material={materials.Skin}
              skeleton={nodes['ChibiWitch-Mesh_4'].skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Witch.glb')
