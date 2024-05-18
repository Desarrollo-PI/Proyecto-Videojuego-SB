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

export function Dementor(props) {
  const dementorRef = useRef()
  const dementorMeshRef = useRef()
  const dementorBody = useRef()

  const [actualAction, setActualAction] = useState(null)
  const [playerBody, setPlayerBody] = useState(null)
  const [repeatAttack, setRepeatAttack] = useState(false)
  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)
  const [life, setLife] = useState(600)
  const [frozen, setFrozen] = useState(0)
  const [changeColor, setChangeColor] = useState(false)

  const { handleSound } = useMusic()

  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Dementor.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, dementorRef)

  function changeAnimation(actualAction) {
    Object.values(actions).forEach((action) => {
      action.stop()
    })

    switch (actualAction) {
      case 'Idle':
        actions['Walking'].play()
        break
      case 'Walk':
      case 'Chase':
      case 'GoBack':
        actions['Walking'].play()
        break
      case 'Attack':
        const attackAction = actions['Attacking']
        attackAction.repetitions = 1
        attackAction.play()
        break
      default:
        break
    }
  }

  const handleWatchPlayer = (e) => {
    e.rigidBodyObject.name === 'playerBody' &&
      !props.isPlayerDeath &&
      props.handleNearDementor(true)
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
    e.rigidBodyObject.name === 'playerBody' &&
      !props.isPlayerDeath &&
      props.handleNearDementor(false)
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
      dementorMeshRef.current.material.color.set('hsl(180,100%,80%)')
    } else {
      dementorMeshRef.current.material.color.set('hsl(180,0%,100%)')
    }
  }, [changeColor])

  useFrame(({ clock }, delta) => {
    calculateAndSetDistance(playerBody, dementorBody, setDistance)
    if (dementorBody.current) {
      let velocity = getVelocity(dementorBody)
      const dementorPosition = dementorBody.current.translation()
      const playerPosition = playerBody?.position

      if (frozen < 0) {
        setFrozen(0)
        if (actualAction == 'Attack' && !repeatAttack) {
          setActualAction('Chase')
        } else {
          changeAnimation(actualAction)
        }
        dementorBody.current.lockTranslations(false, true)
        dementorBody.current.lockRotations(false, true)
        setChangeColor(false)
      }

      if (frozen > 0) {
        setFrozen(frozen - delta)
        changeAnimation('Frozen')
        velocity.x = 0
        velocity.y = 0
        velocity.z = 0
        dementorBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        dementorBody.current.lockTranslations(true, true)
        dementorBody.current.lockRotations(true, true)
      } else if (actualAction == 'Attack') {
        if (!actions['Attacking'].isRunning()) {
          if (repeatAttack) {
            actions['Attacking'].reset()
          } else {
            setActualAction('Chase')
            changeAnimation('Chase')
          }
          if (!frozen) {
            props.takeLife()
          }
        }

        velocity = normalize(
          getPlayerDirection(dementorPosition, playerPosition)
        )
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
      } else if (actualAction == 'Chase') {
        velocity = normalize(
          getPlayerDirection(dementorPosition, playerPosition)
        )
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        dementorBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      } else if (props.action == 'Idle') {
        let nextAction = 'Idle'
        if (dementorPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
          nextAction = 'GoBack'
        } else if (dementorPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
          nextAction = 'GoBack'
        } else {
          velocity.x = 0
        }
        if (dementorPosition.z > props.position[2] + 0.05) {
          velocity.z = -1
          nextAction = 'GoBack'
        } else if (dementorPosition.z < props.position[2] - 0.05) {
          velocity.z = 1
          nextAction = 'GoBack'
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        dementorBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        if (actualAction != nextAction) {
          setActualAction(nextAction)
          changeAnimation(nextAction)
        }
      } else if (props.action == 'Walk') {
        if (dementorPosition.z <= props.position[2] - 2) {
          velocity.z = 1
        } else if (dementorPosition.z >= props.position[2] + 2) {
          velocity.z = -1
        } else {
          if (velocity.z > 0) {
            velocity.z = 1
          } else {
            velocity.z = -1
          }
        }
        if (dementorPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
        } else if (dementorPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        dementorBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      }

      setEnemyRotation(velocity, dementorBody)
    }
  })

  useFrame(({ clock }, delta) => {
    if (dementorBody.current) {
      const position = dementorBody.current.translation()
      dementorRef.current.position.y =
        Math.sin(clock.getElapsedTime() * 2) / 5 + position.y - 0.75
    }
  })

  return (
    <RigidBody
      ref={dementorBody}
      position={props.position}
      type="dynamic"
      colliders={false}
    >
      <group
        ref={dementorRef}
        {...props}
        dispose={null}
        position={[0, -0.3, 0]}
        scale={[1.8, 1.8, 1.8]}
      >
        <Text
          position={[0, 1, 0]}
          color="#b0955e"
          font="/assets/fonts/HARRYP__.TTF"
          scale={[0.4, 0.4, 0.4]}
        >
          {'❤️'}
          {life}
        </Text>
        <group name="Scene">
          <group name="Esqueleto">
            <skinnedMesh
              name="polySurface26"
              geometry={nodes.polySurface26.geometry}
              material={materials.lambert2}
              skeleton={nodes.polySurface26.skeleton}
              ref={dementorMeshRef}
            />
            <CuboidCollider
              args={[0.5, 0.75, 0.4]}
              onCollisionEnter={handleTouch}
              onCollisionExit={handleStopTouchPlayer}
            />
            <CylinderCollider
              args={[2, 5]}
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
            <primitive object={nodes.Columna} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Dementor.glb')
