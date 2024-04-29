import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Dementor(props) {
  const dementorRef = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Dementor.glb'
  )
  const { actions } = useAnimations(animations, dementorRef)

  useEffect(() => {
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Walking'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Attacking'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (props.action == 1) {
      dementorRef.current.position.x =
        Math.sin(clock.getElapsedTime()) + props.position[0]
    }
    dementorRef.current.position.y =
      Math.sin(clock.getElapsedTime() * 2) / 5 + props.position[1]
  })

  return (
    <group
      ref={dementorRef}
      {...props}
      dispose={null}
      position={props.position}
      scale={[1.5, 1.5, 1.5]}
    >
      <group name="Scene">
        <group name="Esqueleto">
          <skinnedMesh
            name="polySurface26"
            geometry={nodes.polySurface26.geometry}
            material={materials.lambert2}
            skeleton={nodes.polySurface26.skeleton}
          />
          <primitive object={nodes.Columna} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Dementor.glb')
