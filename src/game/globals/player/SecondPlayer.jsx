import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import { socket } from '../../../socket/socket-manager'

export function SecondPlayer(props) {
  const secondPlayerRef = useRef()
  const secondPlayerBodyRef = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/characters/avatar/Auror2.glb'
  )
  const { actions } = useAnimations(animations, secondPlayerRef)
  const [animation, setAnimation] = useState('Idle')

  socket.on('updates-values-transform-player', (player) => {
    if (player.position !== null && player.rotation !== null) {
      secondPlayerBodyRef.current?.setTranslation(player.position, true)
      secondPlayerBodyRef.current?.setRotation(player.rotation, true)
    }
  })

  socket.on('updates-animation', (player) => {
    setAnimation(player.animation)
  })

  socket.on('updates-player-dead', (player) => {
    secondPlayerBodyRef.current?.setTranslation({ x: 0, y: -30, z: 0 }, true)
  })

  useEffect(() => {
    return () => {
      socket.off('updates-values-transform-player')
      socket.off('updates-animation')
    }
  }, [])

  useEffect(() => {
    actions['Death'].clampWhenFinished = true
    actions['Death'].repetitions = 0
    actions['Attacking'].timeScale = 2
    actions['Attacking'].clampWhenFinished = true
    actions[animation]?.reset().fadeIn(0.5).play()
    return () => {
      if (actions[animation]) actions[animation].fadeOut(0.5)
    }
  }, [actions, animation])

  const hitLeviosa = (e) => {
    if (e.rigidBodyObject.name === 'leviosaBody') {
      socket.emit('hit-leviosa', { id: 2 })
    }
  }

  return (
    <RigidBody
      ref={secondPlayerBodyRef}
      position={props.position}
      type="fixed"
      colliders={false}
      name="playerBody"
      jugador={2}
      onCollisionEnter={(e) => hitLeviosa(e)}
    >
      <group
        ref={secondPlayerRef}
        name="Scene"
        scale={0.7}
        position={[0, -0.9, 0]}
      >
        <group
          name="Auror"
          position={[-0.059, -0.037, 0.097]}
          rotation={[-0.065, -0.09, -0.041]}
          scale={1.263}
        >
          <skinnedMesh
            name="Cube024"
            geometry={nodes.Cube024.geometry}
            material={materials['Material.002']}
            skeleton={nodes.Cube024.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Cube025"
            geometry={nodes.Cube025.geometry}
            material={materials['Material.002']}
            skeleton={nodes.Cube025.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Cube026"
            geometry={nodes.Cube026.geometry}
            material={materials['Material.002']}
            skeleton={nodes.Cube026.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Cube027"
            geometry={nodes.Cube027.geometry}
            material={materials['Material.002']}
            skeleton={nodes.Cube027.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Cube028"
            geometry={nodes.Cube028.geometry}
            material={materials['Material.002']}
            skeleton={nodes.Cube028.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Cube029"
            geometry={nodes.Cube029.geometry}
            material={materials['Material.002']}
            skeleton={nodes.Cube029.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Cube030"
            geometry={nodes.Cube030.geometry}
            material={materials['Material.003']}
            skeleton={nodes.Cube030.skeleton}
            castShadow
            receiveShadow
          />
          <group name="Wand">
            <skinnedMesh
              name="Wand_1"
              geometry={nodes.Wand_1.geometry}
              material={materials.mat19}
              skeleton={nodes.Wand_1.skeleton}
            />
            <skinnedMesh
              name="Wand_2"
              geometry={nodes.Wand_2.geometry}
              material={materials.mat20}
              skeleton={nodes.Wand_2.skeleton}
            />
          </group>
          <primitive object={nodes.pelvis} />
        </group>
      </group>
      <CapsuleCollider args={[0.35, 0.35]} />
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/avatar/Auror2.glb')
