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
import { socket } from '../../../../socket/socket-manager'

export function EvilWizard(props) {
  const evilWizardRef = useRef()
  const evilWizardMeshRef = useRef()
  const evilWizardBody = useRef()

  const [actualAction, setActualAction] = useState(null)
  const [playerBody, setPlayerBody] = useState(null)
  const [repeatAttack, setRepeatAttack] = useState(false)
  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)
  const [life, setLife] = useState(1500)
  const [frozen, setFrozen] = useState(0)
  const [fired, setFired] = useState(0)
  const [changeColor, setChangeColor] = useState(false)
  const { player, setPlayer } = usePlayer()

  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/EvilWizard.glb'
  )

  const [material, setMaterial] = useState(materials.BlackCloth.clone())

  const { handleSound } = useMusic()

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, evilWizardRef)

  function changeAnimation(actualAction) {
    Object.values(actions).forEach((action) => {
      action.stop()
    })

    switch (actualAction) {
      case 'Idle':
        actions['Idle'].play()
        break
      case 'Walk':
      case 'Chase':
      case 'GoBack':
        actions['Walking'].play()
        break
      case 'Attack':
        const attackAction = actions['Punch']
        attackAction.repetitions = 1
        attackAction.play()
        break
      default:
        break
    }
  }

  const handleWatchPlayer = (e) => {
    if (player.leader) {
      watchPlayer(
        e,
        setPlayerBody,
        setActualAction,
        changeAnimation,
        setIsSoundPlaying,
        props
      )
    }
  }

  const handleStopWatchPlayer = (e) => {
    if (player.leader) {
      stopWatchPlayer(
        e,
        setActualAction,
        changeAnimation,
        setPlayerBody,
        setIsSoundPlaying,
        props
      )
    }
  }

  const handleTouch = (e) => {
    if (player.leader) {
      touchPlayer(
        e,
        setPlayerBody,
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
    } else {
      const spell = { rigidBodyObject: { name: e.rigidBodyObject.name } }
      socket.emit('hit-enemy', { id: props.idEnemy, spell: spell })
    }
  }
  const handleStopTouchPlayer = (e) => {
    if (player.leader) {
      stopTouchPlayer(e, setRepeatAttack)
    }
  }

  socket.on('updates-values-enemy', (enemy) => {
    if (enemy.id === props.idEnemy) {
      if (enemy.position !== null && enemy.rotation !== null && enemy.life !== null) {
        evilWizardBody.current?.setTranslation(enemy.position, true)
        evilWizardBody.current?.setRotation(enemy.rotation, true)
        setLife(enemy.life)
      }
    }
  })

  socket.on('enemy-damaged', (values) => {
    if (values.id === props.idEnemy) {
      touchSpell(
        values.spell,
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
  })

  socket.on('updates-enemy-color', (values) => {
    if (values.id === props.idEnemy) {
      material.color.set(values.color)
    }
  })

  useEffect(() => {
    return () => {
      socket.off('updates-values-enemy')
      socket.off('updates-enemy-animation')
      socket.off('updates-life-enemy')
    }
  }, [])

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
      if (frozen) {
        material.color.set('hsl(180,100%,80%)')
        socket.emit('enemy-change-color', { id: props.idEnemy, color: 'hsl(180,100%,80%)' })
      }
      if (fired) {
        material.color.set('hsl(0,100%,50%)')
        socket.emit('enemy-change-color', { id: props.idEnemy, color: 'hsl(0,100%,50%)' })
      }
    } else {
      material.color.set(props.color)
      socket.emit('enemy-change-color', { id: props.idEnemy, color: props.color })
    }
  }, [changeColor])

  useFrame(({ clock }, delta) => {
    if (player.leader) {
      calculateAndSetDistance(playerBody, evilWizardBody, setDistance)
      if (evilWizardBody.current) {
        let velocity = getVelocity(evilWizardBody)
        const evilWizardPosition = evilWizardBody.current.translation()
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
          evilWizardBody.current.lockTranslations(false, true)
          evilWizardBody.current.lockRotations(false, true)
          setChangeColor(false)
        }

        if (frozen > 0) {
          setFrozen(frozen - delta)
          changeAnimation('Idle')
          velocity.x = 0
          velocity.y = 0
          velocity.z = 0
          evilWizardBody.current.setLinvel(
            { x: velocity.x, y: velocity.y, z: velocity.z },
            true
          )
          evilWizardBody.current.lockTranslations(true, true)
          evilWizardBody.current.lockRotations(true, true)
        } else if (actualAction == 'Attack') {
          if (!actions['Punch'].isRunning()) {
            if (repeatAttack) {
              actions['Punch'].reset()
            } else {
              setActualAction('Chase')
              changeAnimation('Chase')
            }
            if (!frozen) {
              props.takeLife(playerBody.jugador)
            }
          }

          velocity = normalize(
            getPlayerDirection(evilWizardPosition, playerPosition)
          )
          velocity.x = velocity.x * props.speed
          velocity.z = velocity.z * props.speed
        } else if (actualAction == 'Chase') {
          velocity = normalize(
            getPlayerDirection(evilWizardPosition, playerPosition)
          )
          velocity.x = velocity.x * props.speed
          velocity.z = velocity.z * props.speed
          evilWizardBody.current.setLinvel(
            { x: velocity.x, y: velocity.y, z: velocity.z },
            true
          )
        } else if (props.action == 'Idle') {
          let nextAction = 'Idle'
          if (evilWizardPosition.x > props.position[0] + 0.05) {
            velocity.x = -1
            nextAction = 'GoBack'
          } else if (evilWizardPosition.x < props.position[0] - 0.05) {
            velocity.x = 1
            nextAction = 'GoBack'
          } else {
            velocity.x = 0
          }
          if (evilWizardPosition.z > props.position[2] + 0.05) {
            velocity.z = -1
            nextAction = 'GoBack'
          } else if (evilWizardPosition.z < props.position[2] - 0.05) {
            velocity.z = 1
            nextAction = 'GoBack'
          } else {
            velocity.z = 0
          }
          velocity = normalize(velocity)
          velocity.x = velocity.x * props.speed
          velocity.z = velocity.z * props.speed
          evilWizardBody.current.setLinvel(
            { x: velocity.x, y: velocity.y, z: velocity.z },
            true
          )
          if (actualAction != nextAction) {
            setActualAction(nextAction)
            changeAnimation(nextAction)
          }
        } else if (props.action == 'Walk') {
          if (evilWizardPosition.z <= props.position[2] - 2) {
            velocity.z = 1
          } else if (evilWizardPosition.z >= props.position[2] + 2) {
            velocity.z = -1
          } else {
            if (velocity.z > 0) {
              velocity.z = 1
            } else {
              velocity.z = -1
            }
          }
          if (evilWizardPosition.x > props.position[0] + 0.05) {
            velocity.x = -1
          } else if (evilWizardPosition.x < props.position[0] - 0.05) {
            velocity.x = 1
          } else {
            velocity.x = 0
          }
          velocity = normalize(velocity)
          velocity.x = velocity.x * props.speed
          velocity.z = velocity.z * props.speed
          evilWizardBody.current.setLinvel(
            { x: velocity.x, y: velocity.y, z: velocity.z },
            true
          )
        }

        setEnemyRotation(velocity, evilWizardBody)
      }
      socket.emit('values-enemy', {
        id: props.idEnemy,
        position: evilWizardBody.current?.translation(),
        rotation: evilWizardBody.current?.rotation(),
        life: life,
        dead: false,
      })
    }
  })

  return (
    <RigidBody
      ref={evilWizardBody}
      position={props.position}
      type="dynamic"
      colliders={false}
    >
      <group
        ref={evilWizardRef}
        {...props}
        dispose={null}
        position={[0, -1.6, 0]}
        scale={0.01}
      >
        <group name="Scene">
          <Text
            position={[0, 400, 0]}
            color="#b0955e"
            font="/assets/fonts/HARRYP__.TTF"
            scale={[80, 80, 80]}
          >
            {'❤️'}
            {Math.round(life)}
          </Text>
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
              <CuboidCollider
                args={[500, 500, 800]}
                onCollisionEnter={handleTouch}
                onCollisionExit={handleStopTouchPlayer}
              />
            </group>
            <primitive object={nodes.mixamorigHips} />
          </group>
          <CylinderCollider
            args={[300, 1200]}
            sensor
            onIntersectionEnter={(e) => handleWatchPlayer(e)}
            onIntersectionExit={(e) => handleStopWatchPlayer(e)}
          />
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/EvilWizard.glb')
