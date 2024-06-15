import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  useGLTF,
  useAnimations,
  PositionalAudio,
  Text,
} from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import {
  CuboidCollider,
  CylinderCollider,
  RigidBody,
} from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

import {
  normalize,
  calculateAndSetDistance,
  getPlayerDirection,
  getVelocity,
  setEnemyRotation,
  watchPlayer,
  stopWatchPlayer,
  touchPlayer,
  receiveDamage,
  stopTouchPlayer,
  touchSpell,
} from '../../../../utils/enemies-utils'
import { useMusic } from '../../../../providers/music/MusicProvider'

export function SkeletonSecondary(props) {
  const skeletonRef = useRef()
  const skeletonMeshRef = useRef()
  const skeletonBody = useRef()

  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)
  const [life, setLife] = useState(200)
  const [frozen, setFrozen] = useState(0)
  const [changeColor, setChangeColor] = useState(false)

  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Skeleton.glb'
  )

  const [material, setMaterial] = useState(materials.Skeleton.clone())

  const { handleSound } = useMusic()

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, skeletonRef)

  function changeAnimation(actualAction) {
    Object.values(actions).forEach((action) => {
      action.stop()
    })

    switch (actualAction) {
      case 'Idle':
        actions['SkeletonArmature|Skeleton_Idle'].play()
        break
      case 'Walk':
      case 'Chase':
      case 'GoBack':
        actions['SkeletonArmature|Skeleton_Running'].play()
        break
      case 'Attack':
        const attackAction = actions['SkeletonArmature|Skeleton_Attack']
        attackAction.repetitions = 1
        attackAction.play()
        break
      default:
        break
    }
  }

  const handleTouch = (e) => {
    touchSpell(
      e,
      life,
      props.idEnemy,
      setLife,
      props.deathEnemy,
      handleSound,
      frozen,
      setFrozen,
      setChangeColor
    )
  }

  useEffect(() => {
    changeAnimation(props.action)
  }, [actions, props.action])

  useEffect(() => {
    if (changeColor) {
      skeletonMeshRef.current.material.color.set('hsl(180,100%,80%)')
    } else {
      skeletonMeshRef.current.material.color.set('hsl(180,0%,100%)')
    }
  }, [changeColor])

  return (
    <RigidBody
      ref={skeletonBody}
      position={props.position}
      type="fixed"
      colliders={false}
    >
      <group
        ref={skeletonRef}
        {...props}
        dispose={null}
        position={[0, -1, 0]}
        scale={0.25}
      >
        <Text
          position={[0, 6, 0]}
          color="#b0955e"
          font="/assets/fonts/HARRYP__.TTF"
          scale={[0.9, 0.9, 0.9]}
        >
          {'❤️'}
          {life}
        </Text>
        <group name="Root_Scene">
          <group name="RootNode">
            <group
              name="SkeletonArmature"
              position={[0.014, 1.355, 0.002]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <primitive object={nodes.Hips} />
            </group>
            <skinnedMesh
              name="Cylinder001"
              geometry={nodes.Cylinder001.geometry}
              material={material}
              skeleton={nodes.Cylinder001.skeleton}
              position={[0, 3.003, 0.124]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
              ref={skeletonMeshRef}
            />
            <CuboidCollider
              args={[1.1, 3, 1.1]}
              onCollisionEnter={handleTouch}
            />
            {isSoundPLaying && props.isPlaying && (
              <PositionalAudio
                url="/assets/sounds/skeleton.mp3"
                autoplay
                distance={distance * 100}
                loop
              />
            )}
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Skeleton.glb')
