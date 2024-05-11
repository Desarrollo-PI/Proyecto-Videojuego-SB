import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, useAnimations, PositionalAudio } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import {
  CuboidCollider,
  RigidBody,
  CylinderCollider,
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

export function Troll(props) {
  const trollRef = useRef()
  const trollBody = useRef()

  const [actualAction, setActualAction] = useState(null)
  const [playerBody, setPlayerBody] = useState(null)
  const [repeatAttack, setRepeatAttack] = useState(false)
  const [isSoundPLaying, setIsSoundPlaying] = useState(false)
  const [distance, setDistance] = useState(0)

  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Troll.glb'
  )

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, trollRef)

  function changeAnimation(actualAction) {
    Object.values(actions).forEach((action) => {
      action.stop()
    })

    switch (actualAction) {
      case 'Idle':
      case 'Walk':
      case 'Chase':
      case 'GoBack':
        actions['Walk'].play()
        break
      case 'Attack':
        actions['Punch'].repetitions = 1
        actions['Punch'].play()
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
    trollBody.current.lockRotations(true, true)
  }, [trollBody.current])

  useEffect(() => {
    setActualAction(props.action)
    changeAnimation(props.action)
  }, [actions, props.action])

  useEffect(() => {
    if (props.isPlayerDeath) {
      setActualAction(props.action)
      changeAnimation(props.action)
      setIsSoundPlaying(false)
      setDistance(0)
      setPlayerBody(null)
    }
  }, [props.isPlayerDeath])

  useFrame(({ clock }, delta) => {
    calculateAndSetDistance(playerBody, trollBody, setDistance)
    if (trollBody.current) {
      let velocity = getVelocity(trollBody)
      const trollPosition = trollBody.current.translation()
      const playerPosition = playerBody?.position

      if (actualAction == 'Attack') {
        if (!actions['Punch'].isRunning()) {
          if (repeatAttack) {
            actions['Punch'].reset()
          } else {
            setActualAction('Chase')
            changeAnimation('Chase')
          }
          props.takeLife()
        }

        velocity = normalize(getPlayerDirection(trollPosition, playerPosition))
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
      } else if (actualAction == 'Chase') {
        velocity = normalize(getPlayerDirection(trollPosition, playerPosition))
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        trollBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      } else if (props.action == 'Idle') {
        let nextAction = 'Idle'
        if (trollPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
          nextAction = 'GoBack'
        } else if (trollPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
          nextAction = 'GoBack'
        } else {
          velocity.x = 0
        }
        if (trollPosition.z > props.position[2] + 0.05) {
          velocity.z = -1
          nextAction = 'GoBack'
        } else if (trollPosition.z < props.position[2] - 0.05) {
          velocity.z = 1
          nextAction = 'GoBack'
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        trollBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )

        if (nextAction != actualAction) {
          setActualAction(nextAction)
          changeAnimation(nextAction)
        }
      } else if (props.action == 'Walk') {
        if (trollPosition.z <= props.position[2] - 2) {
          velocity.z = 1
        } else if (trollPosition.z >= props.position[2] + 2) {
          velocity.z = -1
        } else {
          if (velocity.z > 0) {
            velocity.z = 1
          } else {
            velocity.z = -1
          }
        }
        if (trollPosition.x > props.position[0] + 0.05) {
          velocity.x = -1
        } else if (trollPosition.x < props.position[0] - 0.05) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        velocity = normalize(velocity)
        velocity.x = velocity.x * props.speed
        velocity.z = velocity.z * props.speed
        trollBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      }

      setEnemyRotation(velocity, trollBody)
    }
  })

  return (
    <RigidBody
      ref={trollBody}
      position={props.position}
      type="dynamic"
      colliders={false}
      name="trollBody"
    >
      <group
        ref={trollRef}
        {...props}
        dispose={null}
        position={[0, -1.3, 0]}
        scale={1.1}
      >
        <group name="Scene">
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <skinnedMesh
              name="ArmL"
              geometry={nodes.ArmL.geometry}
              material={materials.Skin}
              skeleton={nodes.ArmL.skeleton}
            />
            <skinnedMesh
              name="ArmR"
              geometry={nodes.ArmR.geometry}
              material={materials.CustomMaterial}
              skeleton={nodes.ArmR.skeleton}
            />
            <skinnedMesh
              name="ArmRingL1"
              geometry={nodes.ArmRingL1.geometry}
              material={materials.Gold}
              skeleton={nodes.ArmRingL1.skeleton}
            />
            <skinnedMesh
              name="ArmRingL2"
              geometry={nodes.ArmRingL2.geometry}
              material={materials.Gold}
              skeleton={nodes.ArmRingL2.skeleton}
            />
            <skinnedMesh
              name="ArmRingL3"
              geometry={nodes.ArmRingL3.geometry}
              material={materials.Gold}
              skeleton={nodes.ArmRingL3.skeleton}
            />
            <skinnedMesh
              name="ArmRingL4"
              geometry={nodes.ArmRingL4.geometry}
              material={materials.Gold}
              skeleton={nodes.ArmRingL4.skeleton}
            />
            <skinnedMesh
              name="BackSpikesC"
              geometry={nodes.BackSpikesC.geometry}
              material={materials.Metal}
              skeleton={nodes.BackSpikesC.skeleton}
            />
            <skinnedMesh
              name="BackSpikesL"
              geometry={nodes.BackSpikesL.geometry}
              material={materials.Metal}
              skeleton={nodes.BackSpikesL.skeleton}
            />
            <skinnedMesh
              name="BackSpikesR"
              geometry={nodes.BackSpikesR.geometry}
              material={materials.Metal}
              skeleton={nodes.BackSpikesR.skeleton}
            />
            <skinnedMesh
              name="CalfL"
              geometry={nodes.CalfL.geometry}
              material={materials.LeatherB}
              skeleton={nodes.CalfL.skeleton}
            />
            <skinnedMesh
              name="CalfR"
              geometry={nodes.CalfR.geometry}
              material={materials.LeatherB}
              skeleton={nodes.CalfR.skeleton}
            />
            <skinnedMesh
              name="Chest"
              geometry={nodes.Chest.geometry}
              material={materials.LeatherB}
              skeleton={nodes.Chest.skeleton}
            />
            <skinnedMesh
              name="ForeArmL"
              geometry={nodes.ForeArmL.geometry}
              material={materials.Skin}
              skeleton={nodes.ForeArmL.skeleton}
            />
            <skinnedMesh
              name="Head"
              geometry={nodes.Head.geometry}
              material={materials.Skin}
              skeleton={nodes.Head.skeleton}
            />
            <skinnedMesh
              name="HandL"
              geometry={nodes.HandL.geometry}
              material={materials.Skin}
              skeleton={nodes.HandL.skeleton}
            />
            <skinnedMesh
              name="HandRingL"
              geometry={nodes.HandRingL.geometry}
              material={materials.Metal}
              skeleton={nodes.HandRingL.skeleton}
            />
            <skinnedMesh
              name="HandTubeL1"
              geometry={nodes.HandTubeL1.geometry}
              material={materials.Metal}
              skeleton={nodes.HandTubeL1.skeleton}
            />
            <skinnedMesh
              name="HandTubeL2"
              geometry={nodes.HandTubeL2.geometry}
              material={materials.Metal}
              skeleton={nodes.HandTubeL2.skeleton}
            />
            <skinnedMesh
              name="HandTubeL3"
              geometry={nodes.HandTubeL3.geometry}
              material={materials.Metal}
              skeleton={nodes.HandTubeL3.skeleton}
            />
            <skinnedMesh
              name="HandTubeL4"
              geometry={nodes.HandTubeL4.geometry}
              material={materials.Metal}
              skeleton={nodes.HandTubeL4.skeleton}
            />
            <skinnedMesh
              name="KneeUnifierL1"
              geometry={nodes.KneeUnifierL1.geometry}
              material={materials.Metal}
              skeleton={nodes.KneeUnifierL1.skeleton}
            />
            <skinnedMesh
              name="KneeUnifierL2"
              geometry={nodes.KneeUnifierL2.geometry}
              material={materials.Metal}
              skeleton={nodes.KneeUnifierL2.skeleton}
            />
            <skinnedMesh
              name="KneeUnifierL3"
              geometry={nodes.KneeUnifierL3.geometry}
              material={materials.Metal}
              skeleton={nodes.KneeUnifierL3.skeleton}
            />
            <skinnedMesh
              name="KneeUnifierR1"
              geometry={nodes.KneeUnifierR1.geometry}
              material={materials.Metal}
              skeleton={nodes.KneeUnifierR1.skeleton}
            />
            <skinnedMesh
              name="KneeUnifierR2"
              geometry={nodes.KneeUnifierR2.geometry}
              material={materials.Metal}
              skeleton={nodes.KneeUnifierR2.skeleton}
            />
            <skinnedMesh
              name="KneeUnifierR3"
              geometry={nodes.KneeUnifierR3.geometry}
              material={materials.Metal}
              skeleton={nodes.KneeUnifierR3.skeleton}
            />
            <skinnedMesh
              name="ShoeL"
              geometry={nodes.ShoeL.geometry}
              material={materials.BlackLeather}
              skeleton={nodes.ShoeL.skeleton}
            />
            <skinnedMesh
              name="ShoeR"
              geometry={nodes.ShoeR.geometry}
              material={materials.BlackLeather}
              skeleton={nodes.ShoeR.skeleton}
            />
            <skinnedMesh
              name="ShoulderPadL"
              geometry={nodes.ShoulderPadL.geometry}
              material={materials.LeatherB}
              skeleton={nodes.ShoulderPadL.skeleton}
            />
            <skinnedMesh
              name="ThighL"
              geometry={nodes.ThighL.geometry}
              material={materials.LeatherB}
              skeleton={nodes.ThighL.skeleton}
            />
            <skinnedMesh
              name="ThighR"
              geometry={nodes.ThighR.geometry}
              material={materials.LeatherB}
              skeleton={nodes.ThighR.skeleton}
            />
            <skinnedMesh
              name="ThighRingL1"
              geometry={nodes.ThighRingL1.geometry}
              material={materials.Metal}
              skeleton={nodes.ThighRingL1.skeleton}
            />
            <skinnedMesh
              name="ThighRingL2"
              geometry={nodes.ThighRingL2.geometry}
              material={materials.Metal}
              skeleton={nodes.ThighRingL2.skeleton}
            />
            <skinnedMesh
              name="ThighRingL3"
              geometry={nodes.ThighRingL3.geometry}
              material={materials.Metal}
              skeleton={nodes.ThighRingL3.skeleton}
            />
            <skinnedMesh
              name="ThighRingR1"
              geometry={nodes.ThighRingR1.geometry}
              material={materials.Metal}
              skeleton={nodes.ThighRingR1.skeleton}
            />
            <skinnedMesh
              name="ThighRingR2"
              geometry={nodes.ThighRingR2.geometry}
              material={materials.Metal}
              skeleton={nodes.ThighRingR2.skeleton}
            />
            <skinnedMesh
              name="TighRingR3"
              geometry={nodes.TighRingR3.geometry}
              material={materials.Metal}
              skeleton={nodes.TighRingR3.skeleton}
            />
            <skinnedMesh
              name="Waist"
              geometry={nodes.Waist.geometry}
              material={materials.LeatherB}
              skeleton={nodes.Waist.skeleton}
            />
            <CuboidCollider
              args={[115, 120, 120]}
              onCollisionEnter={(e) => handleTouchPlayer(e)}
              onCollisionExit={(e) => handleStopTouchPlayer(e)}
            />

            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
        <CylinderCollider
          args={[5, 10]}
          sensor
          onIntersectionEnter={(e) => handleWatchPlayer(e)}
          onIntersectionExit={(e) => handleStopWatchPlayer(e)}
        />
        {isSoundPLaying && props.isPlaying && (
          <PositionalAudio
            url="/assets/sounds/troll.mp3"
            autoplay
            distance={distance * 100}
            loop
          />
        )}
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Troll.glb')
