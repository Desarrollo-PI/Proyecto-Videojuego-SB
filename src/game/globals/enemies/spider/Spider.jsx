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

export function Spider(props) {
  const spiderRef = useRef()
  const spiderMeshRef = useRef()
  const spiderBody = useRef()

  const [actualAction, setActualAction] = useState(null)
  const [playerBody, setPlayerBody] = useState(null)
  const [repeatAttack, setRepeatAttack] = useState(false)
  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)
  const [life, setLife] = useState(props.life)
  const [frozen, setFrozen] = useState(0)
  const [fired, setFired] = useState(0)
  const [changeColor, setChangeColor] = useState(false)

  const { handleSound } = useMusic()

  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Spider.glb'
  )
  const [material] = useState(materials.Material.clone())
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, spiderRef)

  function changeAnimation(actualAction) {
    Object.values(actions).forEach((action) => {
      action.stop()
    })

    switch (actualAction) {
      case 'Idle':
        actions['SpiderArmature|Spider_Idle'].play()
        break
      case 'Walk':
      case 'Chase':
      case 'GoBack':
        actions['SpiderArmature|Spider_Walk'].play()
        break
      case 'Attack':
        const attackAction = actions['SpiderArmature|Spider_Attack']
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
      setChangeColor,
      setFired,
      fired
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
    material.color.set(props.color)
  }, [])

  useEffect(() => {
    if (changeColor) {
      if (frozen) {
        material.color.set('hsl(180,100%,50%)')
      }
      if (fired) {
        material.color.set('hsl(0,100%,50%)')
      }
    } else {
      material.color.set(props.color)
    }
  }, [changeColor])

  useEffect(() => {
    spiderBody.current.lockRotations(true, true)
  }, [spiderBody.current])

  useFrame(({ clock }, delta) => {
    calculateAndSetDistance(playerBody, spiderBody, setDistance)
    if (spiderBody.current) {
      let velocity = getVelocity(spiderBody)
      const spiderPosition = spiderBody?.current.translation()
      const playerPosition = playerBody?.position

      if (fired < 0) {
        setFired(0)
        setChangeColor(false)
      }

      if (fired > 0) {
        setFired(fired - delta)
        const newLife = life - 0.1
        setLife(newLife)
        if (life <= 0) {
          props.deathEnemy(props.idEnemy)
        }
      }

      if (frozen < 0) {
        setFrozen(0)
        if (actualAction == 'Attack' && !repeatAttack) {
          setActualAction('Chase')
        } else {
          changeAnimation(actualAction)
        }
        spiderBody.current.lockTranslations(false, true)
        spiderBody.current.lockRotations(false, true)
        setChangeColor(false)
      }

      if (frozen > 0) {
        setFrozen(frozen - delta)
        changeAnimation('Frozen')
        velocity.x = 0
        velocity.y = 0
        velocity.z = 0
        spiderBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        spiderBody.current.lockTranslations(true, true)
        spiderBody.current.lockRotations(true, true)
      } else if (actualAction == 'Attack') {
        if (!actions['SpiderArmature|Spider_Attack'].isRunning()) {
          if (repeatAttack) {
            actions['SpiderArmature|Spider_Attack'].reset()
          } else {
            setActualAction('Chase')
            changeAnimation('Chase')
          }
          if (!frozen) {
            props.takeLife()
          }
        }

        velocity = normalize(getPlayerDirection(spiderPosition, playerPosition))
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
      } else if (actualAction == 'Chase') {
        velocity = normalize(getPlayerDirection(spiderPosition, playerPosition))
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        spiderBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      } else if (props.action == 'Idle') {
        let nextAction = 'Idle'
        if (spiderPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
          nextAction = 'GoBack'
        } else if (spiderPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
          nextAction = 'GoBack'
        } else {
          velocity.x = 0
        }
        if (spiderPosition.z > props.position[2] + 0.05) {
          velocity.z = -1
          nextAction = 'GoBack'
        } else if (spiderPosition.z < props.position[2] - 0.05) {
          velocity.z = 1
          nextAction = 'GoBack'
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        spiderBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        if (actualAction != nextAction) {
          setActualAction(nextAction)
          changeAnimation(nextAction)
        }
      } else if (props.action == 'Walk') {
        if (spiderPosition.z <= props.position[2] - 2) {
          velocity.z = 1
        } else if (spiderPosition.z >= props.position[2] + 2) {
          velocity.z = -1
        } else {
          if (velocity.z > 0) {
            velocity.z = 1
          } else {
            velocity.z = -1
          }
        }
        if (spiderPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
        } else if (spiderPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        spiderBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      }

      setEnemyRotation(velocity, spiderBody)
    }
  })

  return (
    <RigidBody
      ref={spiderBody}
      position={props.position}
      type="dynamic"
      colliders={false}
    >
      <group
        ref={spiderRef}
        {...props}
        dispose={null}
        position={[0, 0.01, 0]}
        scale={props.scale}
      >
        <Text
          position={[0, 3, 0]}
          color="#b0955e"
          font="/assets/fonts/HARRYP__.TTF"
        >
          {'❤️'}
          {Math.round(life)}
        </Text>
        <group name="Root_Scene">
          <group name="RootNode">
            <group
              name="SpiderArmature"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <primitive object={nodes.Root} />
            </group>
            <group name="Cube" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <skinnedMesh
                name="Cube_1"
                geometry={nodes.Cube_1.geometry}
                material={material}
                skeleton={nodes.Cube_1.skeleton}
                ref={spiderMeshRef}
              />
              <skinnedMesh
                name="Cube_2"
                geometry={nodes.Cube_2.geometry}
                material={materials['Material.001']}
                skeleton={nodes.Cube_2.skeleton}
              />
              <CuboidCollider
                args={[0.03, 0.025, 0.01]}
                onCollisionEnter={handleTouch}
                onCollisionExit={handleStopTouchPlayer}
              />
              <CylinderCollider
                rotation={[Math.PI / 2, 0, 0]}
                args={[0.1, 0.1]}
                sensor
                onIntersectionEnter={(e) => handleWatchPlayer(e)}
                onIntersectionExit={(e) => handleStopWatchPlayer(e)}
              />
              {isSoundPLaying && props.isPlaying && (
                <PositionalAudio
                  url="/assets/sounds/spider.mp3"
                  autoplay
                  distance={distance * 100}
                  loop
                />
              )}
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Spider.glb')
