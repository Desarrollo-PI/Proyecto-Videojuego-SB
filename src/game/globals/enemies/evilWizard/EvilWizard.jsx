import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function EvilWizard(props) {
  const evilWizardRef = useRef()
  const evilWizardBody = useRef()
  const { scene, materials, animations } = useGLTF(
    '/assets/models/characters/enemies/EvilWizard.glb'
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, evilWizardRef)

  function eulerToQuaternion(alpha, beta, gamma) {
    return { x: 0, y: 0, z: 0, w: 0 }
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
    evilWizardBody.current.lockRotations(true, true)
  }, [evilWizardBody.current])

  useEffect(() => {
    actions['Walking'].timeScale = 0.5
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
    } else if (props.action == 3) {
      Object.values(actions).forEach((action) => {
        action.stop()
      })
      actions['Taunt'].play()
    }
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (evilWizardBody.current) {
      const position = evilWizardBody.current.translation()
      var velocity = evilWizardBody.current.linvel()
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
        evilWizardBody.current.setLinvel(
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
        evilWizardBody.current.setLinvel(
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
      evilWizardBody.current.setRotation(eulerToQuaternion(0, theta, 0))
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
              <CuboidCollider args={[500, 500, 800]} />
            </group>
            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/EvilWizard.glb')
