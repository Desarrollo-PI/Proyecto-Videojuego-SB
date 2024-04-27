import { useEffect, useRef } from 'react'
import { useAvatar } from '../../../providers/avatar/AvatarProvider'
import { useAnimations, useGLTF } from '@react-three/drei'

export default function Player() {
  const playerBodyRef = useRef()
  const playerRef = useRef()
  const { avatar, setAvatar } = useAvatar()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/characters/avatar/Auror.glb'
  )
  const { actions } = useAnimations(animations, playerRef)

  useEffect(() => {
    actions['Attacking'].timeScale = 2
    actions[avatar.animation]?.reset().fadeIn(0.5).play()
    return () => {
      if (actions[avatar.animation]) actions[avatar.animation].fadeOut(0.5)
    }
  }, [actions, avatar.animation])

  return (
    <group
      ref={playerRef}
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
  )
}

useGLTF.preload('/Auror.glb')
