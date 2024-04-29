import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function EvilWizard(props) {
  const evilWizardRef = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/EvilWizard.glb'
  )
  const { actions } = useAnimations(animations, evilWizardRef)

  useEffect(() => {
    actions['Walking'].timeScale = 0.5
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
    } else if (props.action == 3) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Taunt'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (props.action == 1) {
      if (
        evilWizardRef.current.position.z <
        Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
      ) {
        evilWizardRef.current.rotation.y = 0
      } else {
        evilWizardRef.current.rotation.y = Math.PI
      }
      evilWizardRef.current.position.z =
        Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
    }
  })

  return (
    <group
      ref={evilWizardRef}
      {...props}
      dispose={null}
      position={props.position}
      scale={0.01}
    >
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.2}>
          <group name="EvilWizard">
            <skinnedMesh
              name="EvilWizard-Mesh"
              geometry={nodes['EvilWizard-Mesh'].geometry}
              material={materials.Steel}
              skeleton={nodes['EvilWizard-Mesh'].skeleton}
            />
            <skinnedMesh
              name="EvilWizard-Mesh_1"
              geometry={nodes['EvilWizard-Mesh_1'].geometry}
              material={materials.RedCloth}
              skeleton={nodes['EvilWizard-Mesh_1'].skeleton}
            />
            <skinnedMesh
              name="EvilWizard-Mesh_2"
              geometry={nodes['EvilWizard-Mesh_2'].geometry}
              material={materials.GreyCloth}
              skeleton={nodes['EvilWizard-Mesh_2'].skeleton}
            />
            <skinnedMesh
              name="EvilWizard-Mesh_3"
              geometry={nodes['EvilWizard-Mesh_3'].geometry}
              material={materials.Bone}
              skeleton={nodes['EvilWizard-Mesh_3'].skeleton}
            />
            <skinnedMesh
              name="EvilWizard-Mesh_4"
              geometry={nodes['EvilWizard-Mesh_4'].geometry}
              material={materials.BlackCloth}
              skeleton={nodes['EvilWizard-Mesh_4'].skeleton}
            />
            <skinnedMesh
              name="EvilWizard-Mesh_5"
              geometry={nodes['EvilWizard-Mesh_5'].geometry}
              material={materials.GreenCloth}
              skeleton={nodes['EvilWizard-Mesh_5'].skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/characters/enemies/EvilWizard.glb')
