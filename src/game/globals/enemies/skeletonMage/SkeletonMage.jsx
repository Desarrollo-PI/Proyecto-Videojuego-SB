import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function SkeletonMage(props) {
  const skeletonMageRef = useRef()
  const skeletonMageBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/SkeletonMage.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const { actions } = useAnimations(animations, skeletonMageRef)

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
    skeletonMageBody.current.lockRotations(true, true)
  }, [skeletonMageBody.current])

  useEffect(() => {
    actions['Running_A'].timeScale = 0.8
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Idle'].play()
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Running_A'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['1H_Ranged_Shooting'].play()
    } else if (props.action == 3) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Death_A'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (skeletonMageBody.current) {
      const position = skeletonMageBody.current.translation()
      var velocity = skeletonMageBody.current.linvel()
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
        skeletonMageBody.current.setLinvel({ x: velocity.x, y: velocity.y, z: velocity.z }, true)
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
        skeletonMageBody.current.setLinvel({ x: velocity.x, y: velocity.y, z: velocity.z }, true)
      }

      var theta = 0
      if (velocity.z >= 0) {
        theta = Math.atan(velocity.x / velocity.z)
      } else {
        theta = Math.atan(velocity.x / velocity.z) + Math.PI
      }
      skeletonMageBody.current.setRotation(eulerToQuaternion(0, theta, 0))
    }
  })

  return (
    <RigidBody ref={skeletonMageBody} position={props.position} type="dynamic" colliders={false}>
      <group
        ref={skeletonMageRef}
        {...props}
        dispose={null}
        position={[0, -3, 0]}
        scale={0.7}
      >
        <group name="Root_Scene">
          <group name="RootNode">
            <group name="Rig" scale={100}>
              <primitive object={nodes.root} />
            </group>
            <skinnedMesh
              name="Skeleton_Mage_ArmLeft"
              geometry={nodes.Skeleton_Mage_ArmLeft.geometry}
              material={materials.skeleton}
              skeleton={nodes.Skeleton_Mage_ArmLeft.skeleton}
              scale={100}
            />
            <skinnedMesh
              name="Skeleton_Mage_ArmRight"
              geometry={nodes.Skeleton_Mage_ArmRight.geometry}
              material={materials.skeleton}
              skeleton={nodes.Skeleton_Mage_ArmRight.skeleton}
              scale={100}
            />
            <skinnedMesh
              name="Skeleton_Mage_Body"
              geometry={nodes.Skeleton_Mage_Body.geometry}
              material={materials.skeleton}
              skeleton={nodes.Skeleton_Mage_Body.skeleton}
              scale={100}
            />
            <skinnedMesh
              name="Skeleton_Mage_Eyes"
              geometry={nodes.Skeleton_Mage_Eyes.geometry}
              material={materials.Glow}
              skeleton={nodes.Skeleton_Mage_Eyes.skeleton}
              position={[0, 1.216, 0]}
              scale={100}
            />
            <skinnedMesh
              name="Skeleton_Mage_Jaw"
              geometry={nodes.Skeleton_Mage_Jaw.geometry}
              material={materials.skeleton}
              skeleton={nodes.Skeleton_Mage_Jaw.skeleton}
              position={[0, 1.312, -0.033]}
              scale={100}
            />
            <skinnedMesh
              name="Skeleton_Mage_LegLeft"
              geometry={nodes.Skeleton_Mage_LegLeft.geometry}
              material={materials.skeleton}
              skeleton={nodes.Skeleton_Mage_LegLeft.skeleton}
              scale={100}
            />
            <skinnedMesh
              name="Skeleton_Mage_LegRight"
              geometry={nodes.Skeleton_Mage_LegRight.geometry}
              material={materials.skeleton}
              skeleton={nodes.Skeleton_Mage_LegRight.skeleton}
              scale={100}
            />
            <skinnedMesh
              name="Skeleton_Mage_Skull"
              geometry={nodes.Skeleton_Mage_Skull.geometry}
              material={materials.skeleton}
              skeleton={nodes.Skeleton_Mage_Skull.skeleton}
              position={[0, 1.216, 0]}
              scale={100}
            />
            <CuboidCollider args={[0.9, 1.3, 0.7]} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/SkeletonMage.glb')
