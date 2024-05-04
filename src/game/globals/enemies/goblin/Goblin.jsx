import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function Goblin(props) {
  const goblinRef = useRef()
  const goblinBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Goblin.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, goblinRef)

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
    goblinBody.current.lockRotations(true, true)
  }, [goblinBody.current])

  useEffect(() => {
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Idle'].play()
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Walk'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (goblinBody.current) {
      const position = goblinBody.current.translation()
      var velocity = goblinBody.current.linvel()
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
        goblinBody.current.setLinvel(
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
        goblinBody.current.setLinvel(
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
      goblinBody.current.setRotation(eulerToQuaternion(0, theta, 0))
    }
  })

  return (
    <RigidBody
      ref={goblinBody}
      position={props.position}
      type="dynamic"
      colliders={false}
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
            <CuboidCollider args={[0.8, 1.5, 0.6]} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Goblin.glb')
