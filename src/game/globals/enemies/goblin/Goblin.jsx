import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, useAnimations, PositionalAudio } from '@react-three/drei'
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
  stopTouchPlayer,
} from '../../../../utils/enemies-utils'

export function Goblin(props) {
  const goblinRef = useRef()
  const goblinBody = useRef()

  const [actualAction, setActualAction] = useState(null)
  const [playerBody, setPlayerBody] = useState(null)
  const [repeatAttack, setRepeatAttack] = useState(false)
  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)

  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Goblin.glb'
  )

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, goblinRef)

  function changeAnimation(actualAction) {
    Object.values(actions).forEach((action) => {
      action.stop()
    })

    switch (actualAction) {
      case 'Idle':
        actions['EnemyArmature|EnemyArmature|EnemyArmature|Idle'].play()
        break
      case 'Walk':
      case 'Chase':
      case 'GoBack':
        actions['EnemyArmature|EnemyArmature|EnemyArmature|Walk'].play()
        break
      case 'Attack':
        const attackAction =
          actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack']
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

  const handleTouchPlayer = (e) => {
    touchPlayer(e, setRepeatAttack, setActualAction, changeAnimation, props)
  }

  const handleStopTouchPlayer = (e) => {
    stopTouchPlayer(e, setRepeatAttack)
  }

  useEffect(() => {
    goblinBody.current.lockRotations(true, true)
  }, [goblinBody.current])

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

  useFrame(({ clock }, delta) => {
    calculateAndSetDistance(playerBody, goblinBody, setDistance)
    if (goblinBody.current) {
      let velocity = getVelocity(goblinBody)
      const goblinPosition = goblinBody.current.translation()
      const playerPosition = playerBody?.position

      if (actualAction == 'Attack') {
        if (
          !actions[
            'EnemyArmature|EnemyArmature|EnemyArmature|Attack'
          ].isRunning()
        ) {
          if (repeatAttack) {
            actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack'].reset()
          } else {
            setActualAction('Chase')
            changeAnimation('Chase')
          }
          props.takeLife()
        }

        velocity = normalize(getPlayerDirection(goblinPosition, playerPosition))
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
      } else if (actualAction == 'Chase') {
        velocity = normalize(getPlayerDirection(goblinPosition, playerPosition))
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        goblinBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      } else if (props.action == 'Idle') {
        let nextAction = 'Idle'
        if (goblinPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
          nextAction = 'GoBack'
        } else if (goblinPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
          nextAction = 'GoBack'
        } else {
          velocity.x = 0
        }
        if (goblinPosition.z > props.position[2] + 0.05) {
          velocity.z = -1
          nextAction = 'GoBack'
        } else if (goblinPosition.z < props.position[2] - 0.05) {
          velocity.z = 1
          nextAction = 'GoBack'
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        goblinBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        if (actualAction != nextAction) {
          setActualAction(nextAction)
          changeAnimation(nextAction)
        }
      } else if (props.action == 'Walk') {
        if (goblinPosition.z <= props.position[2] - 2) {
          velocity.z = 1
        } else if (goblinPosition.z >= props.position[2] + 2) {
          velocity.z = -1
        } else {
          if (velocity.z > 0) {
            velocity.z = 1
          } else {
            velocity.z = -1
          }
        }
        if (goblinPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
        } else if (goblinPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        goblinBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      }

      setEnemyRotation(velocity, goblinBody)
    }
  })

  return (
    <RigidBody
      ref={goblinBody}
      position={props.position}
      type="dynamic"
      colliders={false}
      name="goblinBody"
    >
      <group
        ref={goblinRef}
        {...props}
        dispose={null}
        scale={0.5}
        position={[0, -1.5, 0]}
      >
        <group name="Root_Scene">
          <group name="RootNode">
            <group
              name="EnemyArmature"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <primitive object={nodes.Root} />
            </group>
            <skinnedMesh
              name="Goblin"
              geometry={nodes.Goblin.geometry}
              material={materials.Atlas}
              skeleton={nodes.Goblin.skeleton}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={147.976}
            />
            <CuboidCollider
              args={[0.8, 1.5, 0.6]}
              onCollisionEnter={(e) => handleTouchPlayer(e)}
              onCollisionExit={(e) => handleStopTouchPlayer(e)}
            />
            <CylinderCollider
              args={[5, 20]}
              sensor
              onIntersectionEnter={(e) => handleWatchPlayer(e)}
              onIntersectionExit={(e) => handleStopWatchPlayer(e)}
            />
            {isSoundPLaying && props.isPlaying && (
              <PositionalAudio
                url="/assets/sounds/goblin.mp3"
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

useGLTF.preload('/assets/models/characters/enemies/Goblin.glb')
