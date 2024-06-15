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
import { usePlayer } from '../../../../providers/player/PlayerProvider'

export function Skeleton(props) {
  const skeletonRef = useRef()
  const skeletonMeshRef = useRef()
  const skeletonBody = useRef()

  const [actualAction, setActualAction] = useState(null)
  const [playerBody, setPlayerBody] = useState(null)
  const [repeatAttack, setRepeatAttack] = useState(false)
  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)
  const [life, setLife] = useState(200)
  const [frozen, setFrozen] = useState(0)
  const [changeColor, setChangeColor] = useState(false)
  const [player, setPlayer] = usePlayer()

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

  const handleWatchPlayer = (e) => {
    watchPlayer(
      e,
      setPlayerBody,
      setActualAction,
      changeAnimation,
      setIsSoundPlaying,
      props
    )
  }

  const handleStopWatchPlayer = (e) => {
    stopWatchPlayer(
      e,
      setActualAction,
      changeAnimation,
      setPlayerBody,
      setIsSoundPlaying,
      props
    )
  }

  const handleTouch = (e) => {
    touchPlayer(
      e,
      setRepeatAttack,
      setActualAction,
      changeAnimation,
      props,
      frozen
    )
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
  const handleStopTouchPlayer = (e) => {
    stopTouchPlayer(e, setRepeatAttack)
  }

  useEffect(() => {
    if (props.isPlayerDeath) {
      setActualAction(props.action)
      changeAnimation(props.action)
      setIsSoundPlaying(false)
      setDistance(0)
      setPlayerBody(null)
    }
  }, [props.isPlayerDeath])

  useEffect(() => {
    setActualAction(props.action)
    changeAnimation(props.action)
  }, [actions, props.action])

  useEffect(() => {
    if (changeColor) {
      skeletonMeshRef.current.material.color.set('hsl(180,100%,80%)')
    } else {
      skeletonMeshRef.current.material.color.set('hsl(180,0%,100%)')
    }
  }, [changeColor])

  useFrame(({ clock }, delta) => {
    calculateAndSetDistance(playerBody, skeletonBody, setDistance)
    if (skeletonBody.current) {
      let velocity = getVelocity(skeletonBody)
      const skeletonPosition = skeletonBody.current.translation()
      const playerPosition = playerBody?.position

      if (frozen < 0) {
        setFrozen(0)
        if (actualAction == 'Attack' && !repeatAttack) {
          setActualAction('Chase')
        } else {
          changeAnimation(actualAction)
        }
        skeletonBody.current.lockTranslations(false, true)
        skeletonBody.current.lockRotations(false, true)
        setChangeColor(false)
      }

      if (frozen > 0) {
        setFrozen(frozen - delta)
        changeAnimation('Frozen')
        velocity.x = 0
        velocity.z = 0
        skeletonBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        skeletonBody.current.lockTranslations(true, true)
        skeletonBody.current.lockRotations(true, true)
      } else if (actualAction == 'Attack') {
        if (!actions['SkeletonArmature|Skeleton_Attack'].isRunning()) {
          if (repeatAttack) {
            actions['SkeletonArmature|Skeleton_Attack'].reset()
          } else {
            setActualAction('Chase')
            changeAnimation('Chase')
          }
          if (!frozen) {
            props.takeLife()
          }
        }

        velocity = normalize(
          getPlayerDirection(skeletonPosition, playerPosition)
        )
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
      } else if (actualAction == 'Chase') {
        velocity = normalize(
          getPlayerDirection(skeletonPosition, playerPosition)
        )
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        skeletonBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      } else if (props.action == 'Idle') {
        let nextAction = 'Idle'
        if (skeletonPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
          nextAction = 'GoBack'
        } else if (skeletonPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
          nextAction = 'GoBack'
        } else {
          velocity.x = 0
        }
        if (skeletonPosition.z > props.position[2] + 0.05) {
          velocity.z = -1
          nextAction = 'GoBack'
        } else if (skeletonPosition.z < props.position[2] - 0.05) {
          velocity.z = 1
          nextAction = 'GoBack'
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        skeletonBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        if (actualAction != nextAction) {
          setActualAction(nextAction)
          changeAnimation(nextAction)
        }
      } else if (props.action == 'Walk') {
        if (skeletonPosition.z <= props.position[2] - 2) {
          velocity.z = 1
        } else if (skeletonPosition.z >= props.position[2] + 2) {
          velocity.z = -1
        } else {
          if (velocity.z > 0) {
            velocity.z = 1
          } else {
            velocity.z = -1
          }
        }
        if (skeletonPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
        } else if (skeletonPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        skeletonBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      }

      setEnemyRotation(velocity, skeletonBody)
    }
  })

  if (player.leader) {
    return (
      <RigidBody
        ref={skeletonBody}
        position={props.position}
        type="dynamic"
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
                onCollisionExit={handleStopTouchPlayer}
              />
              <CylinderCollider
                args={[10, 40]}
                sensor
                onIntersectionEnter={(e) => handleWatchPlayer(e)}
                onIntersectionExit={(e) => handleStopWatchPlayer(e)}
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
  } else {
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
                onCollisionExit={handleStopTouchPlayer}
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

}

useGLTF.preload('/assets/models/characters/enemies/Skeleton.glb')
