import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function Skeleton(props) {
  const skeletonRef = useRef()
  const skeletonBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Skeleton.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, skeletonRef)

  function eulerToQuaternion(alpha, beta, gamma) {
    var qx =
      Math.sin(alpha / 2) * Math.cos(beta / 2) * Math.cos(gamma / 2) -
      Math.cos(alpha / 2) * Math.sin(beta / 2) * Math.sin(gamma / 2)
    var qy =
      Math.cos(alpha / 2) * Math.sin(beta / 2) * Math.cos(gamma / 2) +
      Math.sin(alpha / 2) * Math.cos(beta / 2) * Math.sin(gamma / 2)
    var qz =
      Math.cos(alpha / 2) * Math.cos(beta / 2) * Math.sin(gamma / 2) -
      Math.sin(alpha / 2) * Math.sin(beta / 2) * Math.cos(gamma / 2)
    var qw =
      Math.cos(alpha / 2) * Math.cos(beta / 2) * Math.cos(gamma / 2) +
      Math.sin(alpha / 2) * Math.sin(beta / 2) * Math.sin(gamma / 2)
    return { x: qx, y: qy, z: qz, w: qw }
  }

  function normalize(vector) {
    var magnitud = Math.sqrt(vector.x ** 2 + vector.z ** 2)
    if (magnitud == 0) {
      return vector
    }
    var normalizedVector = {
      x: vector.x / magnitud,
      y: vector.y,
      z: vector.z / magnitud,
    }
    return normalizedVector
  }

  useEffect(() => {
    skeletonBody.current.lockRotations(true, true)
  }, [skeletonBody.current])

  useEffect(() => {
    actions['SkeletonArmature|Skeleton_Running'].timeScale = 0.8
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['SkeletonArmature|Skeleton_Idle'].play()
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['SkeletonArmature|Skeleton_Running'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['SkeletonArmature|Skeleton_Attack'].play()
    } else if (props.action == 3) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['SkeletonArmature|Skeleton_Death'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (skeletonBody.current) {
      const position = skeletonBody.current.translation()
      var velocity = skeletonBody.current.linvel()
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
        if (position.x > props.position[0] + 0.05) {
          velocity.x = -1
        } else if (position.x < props.position[0] - 0.05) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        if (position.z > props.position[2] + 0.05) {
          velocity.z = -1
        } else if (position.z < props.position[2] - 0.05) {
          velocity.z = 1
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        skeletonBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      }

      if (props.action == 1) {
        if (position.z <= props.position[2] - 2) {
          velocity.z = 1
        } else if (position.z >= props.position[2] + 2) {
          velocity.z = -1
        } else {
          if (velocity.z > 0) {
            velocity.z = 1
          } else {
            velocity.z = -1
          }
        }
        if (position.x > props.position[0] + 0.05) {
          velocity.x = -1
        } else if (position.x < props.position[0] - 0.05) {
          velocity.x = 1
        } else {
          velocity.x = 0
        }
        velocity = normalize(velocity)
        skeletonBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
      }

      var theta = 0
      if (velocity.z >= 0) {
        theta = Math.atan(velocity.x / velocity.z)
      } else {
        theta = Math.atan(velocity.x / velocity.z) + Math.PI
      }
      skeletonBody.current.setRotation(eulerToQuaternion(0, theta, 0))
    }
  })

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
              material={materials.Skeleton}
              skeleton={nodes.Cylinder001.skeleton}
              position={[0, 3.003, 0.124]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <CuboidCollider args={[1.1, 3, 1.1]} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Skeleton.glb')
