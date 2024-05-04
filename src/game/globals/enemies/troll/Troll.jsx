import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function Troll(props) {
  const trollRef = useRef()
  const trollBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Troll.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const { actions } = useAnimations(animations, trollRef)

  function eulerToQuaternion(alpha, beta, gamma) {
    var qx = Math.sin(alpha / 2) * Math.cos(beta / 2) * Math.cos(gamma / 2) - Math.cos(alpha / 2) * Math.sin(beta / 2) * Math.sin(gamma / 2);
    var qy = Math.cos(alpha / 2) * Math.sin(beta / 2) * Math.cos(gamma / 2) + Math.sin(alpha / 2) * Math.cos(beta / 2) * Math.sin(gamma / 2);
    var qz = Math.cos(alpha / 2) * Math.cos(beta / 2) * Math.sin(gamma / 2) - Math.sin(alpha / 2) * Math.sin(beta / 2) * Math.cos(gamma / 2);
    var qw = Math.cos(alpha / 2) * Math.cos(beta / 2) * Math.cos(gamma / 2) + Math.sin(alpha / 2) * Math.sin(beta / 2) * Math.sin(gamma / 2);
    return { x: qx, y: qy, z: qz, w: qw };
  }

  function normalize(vector) {
    var magnitud = Math.sqrt(vector.x ** 2 + vector.z ** 2)
    if (magnitud == 0) {
      return vector
    }
    var normalizedVector = { x: vector.x / magnitud, y: vector.y, z: vector.z / magnitud }
    return normalizedVector
  }

  useEffect(() => {
    trollBody.current.lockRotations(true, true)
  }, [trollBody.current])

  useEffect(() => {
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Idle'].play()
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Walk'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Punch'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (trollBody.current) {
      const position = trollBody.current.translation()
      var velocity = trollBody.current.linvel()
      if (velocity.x == NaN) {
        velocity.x = 0
      }
      if (velocity.y == NaN) {
        velocity.y = 0
      }
      if (velocity.z == NaN) {
        velocity.z = 0
      }

      if (props.action == 0) {
        if (position.x > (props.position[0] + 0.05)) {
          velocity.x = -1
        } else if (position.x < (props.position[0] - 0.05)) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        if (position.z > (props.position[2] + 0.05)) {
          velocity.z = -1
        } else if (position.z < (props.position[2] - 0.05)) {
          velocity.z = 1
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        trollBody.current.setLinvel({ x: velocity.x, y: velocity.y, z: velocity.z }, true)
      }

      if (props.action == 1) {
        if (position.z <= (props.position[2] - 2)) {
          velocity.z = 1
        } else if (position.z >= (props.position[2] + 2)) {
          velocity.z = -1
        } else {
          if (velocity.z > 0) {
            velocity.z = 1
          } else {
            velocity.z = -1
          }
        }
        if (position.x > (props.position[0] + 0.05)) {
          velocity.x = -1
        } else if (position.x < (props.position[0] - 0.05)) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        velocity = normalize(velocity)
        trollBody.current.setLinvel({ x: velocity.x, y: velocity.y, z: velocity.z }, true)
      }

      var theta = 0
      if (velocity.z >= 0) {
        theta = Math.atan(velocity.x / velocity.z)
      } else {
        theta = Math.atan(velocity.x / velocity.z) + Math.PI
      }
      trollBody.current.setRotation(eulerToQuaternion(0, theta, 0))
    }
  })

  return (
    <RigidBody ref={trollBody} position={props.position} type="dynamic" colliders={false}>
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
            <CuboidCollider args={[115, 120, 120]} />
            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Troll.glb')
