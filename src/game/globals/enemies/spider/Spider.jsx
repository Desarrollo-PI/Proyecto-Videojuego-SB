import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function Spider(props) {
  const spiderRef = useRef()
  const spiderBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Spider.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, spiderRef)

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
    spiderBody.current.lockRotations(true, true)
  }, [spiderBody.current])

  useEffect(() => {
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['SpiderArmature|Spider_Idle'].play()
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['SpiderArmature|Spider_Walk'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['SpiderArmature|Spider_Attack'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (spiderBody.current) {
      const position = spiderBody.current.translation()
      var velocity = spiderBody.current.linvel()
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
        spiderBody.current.setLinvel(
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
        spiderBody.current.setLinvel(
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
      spiderBody.current.setRotation(eulerToQuaternion(0, theta, 0))
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
        scale={0.9}
      >
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
                material={materials.Material}
                skeleton={nodes.Cube_1.skeleton}
              />
              <skinnedMesh
                name="Cube_2"
                geometry={nodes.Cube_2.geometry}
                material={materials['Material.001']}
                skeleton={nodes.Cube_2.skeleton}
              />
              <CuboidCollider args={[0.03, 0.025, 0.01]} />
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Spider.glb')
