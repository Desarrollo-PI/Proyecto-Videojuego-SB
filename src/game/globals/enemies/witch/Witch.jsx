import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function Witch(props) {
  const witchRef = useRef()
  const witchBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Witch.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, witchRef)

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

  useEffect(() => {
    witchBody.current.lockRotations(true, true)
  }, [witchBody.current])

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
    actions['Attack'].timeScale = 2
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Idle'].play()
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Walking'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Attack'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (witchBody.current) {
      const position = witchBody.current.translation()
      var velocity = witchBody.current.linvel()
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
        witchBody.current.setLinvel(
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
        witchBody.current.setLinvel(
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
      witchBody.current.setRotation(eulerToQuaternion(0, theta, 0))
    }
  })

  return (
    <RigidBody
      ref={witchBody}
      position={props.position}
      type="dynamic"
      colliders={false}
    >
      <group
        ref={witchRef}
        {...props}
        dispose={null}
        position={[0, -1, 0]}
        scale={0.25}
      >
        <group name="Scene">
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="ChibiWitch">
              <skinnedMesh
                name="ChibiWitch-Mesh"
                geometry={nodes['ChibiWitch-Mesh'].geometry}
                material={materials.DarkBlue}
                skeleton={nodes['ChibiWitch-Mesh'].skeleton}
              />
              <skinnedMesh
                name="ChibiWitch-Mesh_1"
                geometry={nodes['ChibiWitch-Mesh_1'].geometry}
                material={materials.Blue}
                skeleton={nodes['ChibiWitch-Mesh_1'].skeleton}
              />
              <skinnedMesh
                name="ChibiWitch-Mesh_2"
                geometry={nodes['ChibiWitch-Mesh_2'].geometry}
                material={materials.Gold}
                skeleton={nodes['ChibiWitch-Mesh_2'].skeleton}
              />
              <skinnedMesh
                name="ChibiWitch-Mesh_3"
                geometry={nodes['ChibiWitch-Mesh_3'].geometry}
                material={materials.White}
                skeleton={nodes['ChibiWitch-Mesh_3'].skeleton}
              />
              <skinnedMesh
                name="ChibiWitch-Mesh_4"
                geometry={nodes['ChibiWitch-Mesh_4'].geometry}
                material={materials.Skin}
                skeleton={nodes['ChibiWitch-Mesh_4'].skeleton}
              />
              <CuboidCollider args={[200, 200, 400]} />
            </group>
            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Witch.glb')
