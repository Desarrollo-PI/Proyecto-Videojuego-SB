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

export function Goblin(props) {
  const goblinRef = useRef()
  const goblinMeshRef = useRef()
  const goblinBody = useRef()

  const [actualAction, setActualAction] = useState(null)
  const [playerBody, setPlayerBody] = useState(null)
  const [repeatAttack, setRepeatAttack] = useState(false)
  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)
  const [life, setLife] = useState(100)
  const [frozen, setFrozen] = useState(0)
  const [changeColor, setChangeColor] = useState(false)

  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Goblin.glb'
  )

  const { handleSound } = useMusic()

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

  const handleTouch = (e) => {
    touchPlayer(e, setRepeatAttack, setActualAction, changeAnimation, props, frozen)
    touchSpell(e, life, props.idEnemy, setLife, props.deathEnemy, handleSound, frozen, setFrozen, setChangeColor)
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
    if(changeColor) {
      goblinMeshRef.current.material.color.set('hsl(180,100%,80%)')
    } else {
      goblinMeshRef.current.material.color.set('hsl(180,0%,100%)')
    }
  }, [changeColor])

  useFrame(({ clock }, delta) => {
    calculateAndSetDistance(playerBody, goblinBody, setDistance)
    if (goblinBody.current) {
      let velocity = getVelocity(goblinBody)
      const goblinPosition = goblinBody.current.translation()
      const playerPosition = playerBody?.position

      if( frozen < 0) {
        setFrozen(0)
        if (actualAction == 'Attack' && !repeatAttack) {
          setActualAction('Chase')
        } else {
          changeAnimation(actualAction)
        }
        goblinBody.current.lockTranslations(false, true);
        goblinBody.current.lockRotations(false, true);
        setChangeColor(false)
      }
      
      if (frozen > 0) {
        setFrozen(frozen - delta)
        changeAnimation('Frozen')
        velocity.x = 0
        velocity.z = 0
        goblinBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        goblinBody.current.lockTranslations(true, true);
        goblinBody.current.lockRotations(true, true);
      } else if (actualAction == 'Attack') {
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
          if (!frozen) {
            props.takeLife()
          }
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
      density={0.0001}
    >
      <group
        ref={goblinRef}
        {...props}
        dispose={null}
        scale={0.5}
        position={[0, -1.5, 0]}
      >
        <Text
          position={[0, 4, 0]}
          color="#b0955e"
          font="/assets/fonts/HARRYP__.TTF"
          scale={[0.8, 0.8, 0.8]}
        >
          {'❤️'}
          {life}
        </Text>
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
              ref={goblinMeshRef}
            />
            <CuboidCollider
              args={[0.8, 1.5, 0.6]}
              onCollisionEnter={(e) => handleTouch(e)}
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
