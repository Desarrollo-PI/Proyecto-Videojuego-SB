import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function Dementor(props) {
  const dementorRef = useRef()
  const dementorBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/Dementor.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const { actions } = useAnimations(animations, dementorRef)

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
    if (props.action == 0) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
    } else if (props.action == 1) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Walking'].play()
    } else if (props.action == 2) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Attacking'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (dementorBody.current) {
      const position = dementorBody.current.translation()
      dementorRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) / 5 + position.y -0.75
    }
  })

  useFrame(({ clock }, delta) => {
    if (dementorBody.current) {
      const position = dementorBody.current.translation()
      var velocity = dementorBody.current.linvel()
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
        dementorBody.current.setLinvel({ x: velocity.x, y: velocity.y, z: velocity.z }, true)
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
        dementorBody.current.setLinvel({ x: velocity.x, y: velocity.y, z: velocity.z }, true)
      }

      var theta = 0
      if (velocity.z >= 0) {
        theta = Math.atan(velocity.x / velocity.z)
      } else {
        theta = Math.atan(velocity.x / velocity.z) + Math.PI
      }
      dementorBody.current.setRotation(eulerToQuaternion(0, theta, 0))
    }
  })

  return (
    <RigidBody ref={dementorBody} position={props.position} type="dynamic" colliders={false}>
      <group
        ref={dementorRef}
        {...props}
        dispose={null}
        position={[0, 0, 0]}
        scale={[1.5, 1.5, 1.5]}
      >
        <group name="Scene">
          <group name="Esqueleto">
            <skinnedMesh
              name="polySurface26"
              geometry={nodes.polySurface26.geometry}
              material={materials.lambert2}
              skeleton={nodes.polySurface26.skeleton}
            />
            <CuboidCollider args={[0.5, 0.75, 0.4]} />
            <primitive object={nodes.Columna} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Dementor.glb')
