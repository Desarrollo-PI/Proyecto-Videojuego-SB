import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { CuboidCollider, CylinderCollider, RigidBody } from '@react-three/rapier'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

export function Goblin(props) {
  const goblinRef = useRef()
  const goblinBody = useRef()
  const [actualAction, setActualAction] = useState(null);
  const [playerBody, setPlayerBody] = useState(null);
  const [repetirAtaque, setRepetirAtaque] = useState(false);
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

  function changeAnimation(actualAction) {
    Object.values(actions).forEach((action) => {
      action.stop()
    })
    if (actualAction == "Idle") {
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Idle'].play()
    } else if (actualAction == "Walk") {
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Walk'].play()
    } else if (actualAction == "Attack") {
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack'].repetitions = 1
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack'].play()
    } else if (actualAction == "Perseguir") {
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Walk'].play()
    } else if (actualAction == "Regresar") {
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Walk'].play()
    }
  }

  const verAlgo = (e) => {
    if (e.rigidBodyObject.name == "playerBody") {
      setPlayerBody(e.rigidBodyObject)
      setActualAction("Perseguir")
      changeAnimation("Perseguir")
    }
  }

  const dejarDeVer = (e) => {
    if (e.rigidBodyObject.name == "playerBody") {
      setActualAction(props.action)
      changeAnimation(props.action)
      setPlayerBody(null)
    }
  }

  const tocarAlgo = (e) => {
    if (e.rigidBodyObject.name == "playerBody") {
      setRepetirAtaque(true)
      setActualAction("Attack")
      changeAnimation("Attack")
    }
  }

  const dejarDeTocar = (e) => {
    if (e.rigidBodyObject.name == "playerBody") {
      setRepetirAtaque(false)
    }
  }

  useEffect(() => {
    goblinBody.current.lockRotations(true, true)
  }, [goblinBody.current])

  useEffect(() => {
    setActualAction(props.action)
    changeAnimation(props.action)
  }, [actions, props.action])

  useFrame(({ clock }, delta) => {
    if (goblinBody.current) {
      const position = goblinBody.current.translation()
      var velocity = goblinBody.current.linvel()
      if (isNaN(velocity.x)) {
        velocity.x = 0
      }
      if (isNaN(velocity.y)) {
        velocity.y = 0
      }
      if (isNaN(velocity.z)) {
        velocity.z = 0
      }
      
      if (actualAction == "Attack") {
        if (!actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack'].isRunning()) {
          if (repetirAtaque) {
            actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack'].reset()
          } else {
            setActualAction("Perseguir")
            changeAnimation("Perseguir")
          }
          props.quitarVida(25)
        }

        var posicionJugador = playerBody.position
        var direccionJugador = { x: 0, y: 0, z: 0 }
        direccionJugador.x = posicionJugador.x - position.x
        direccionJugador.z = posicionJugador.z - position.z
        velocity = normalize(direccionJugador)

      } else if (actualAction == "Perseguir") {
        var posicionJugador = playerBody.position
        var direccionJugador = { x: 0, y: 0, z: 0 }
        direccionJugador.x = posicionJugador.x - position.x
        direccionJugador.z = posicionJugador.z - position.z
        velocity = normalize(direccionJugador)
        goblinBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )

      } else if (props.action == "Idle") {
        var nextAction = "Idle"
        if (position.x > props.position[0] + 0.05) {
          velocity.x = -1
          nextAction = "Regresar"
        } else if (position.x < props.position[0] - 0.05) {
          velocity.x = 1
          nextAction = "Regresar"
        } else {
          velocity.x = 0
        }
        if (position.z > props.position[2] + 0.05) {
          velocity.z = -1
          nextAction = "Regresar"
        } else if (position.z < props.position[2] - 0.05) {
          velocity.z = 1
          nextAction = "Regresar"
        } else {
          velocity.z = 0
        }
        velocity = normalize(velocity)
        goblinBody.current.setLinvel(
          { x: velocity.x, y: velocity.y, z: velocity.z },
          true
        )
        if (actualAction != nextAction) {
          setActualAction(nextAction)
          changeAnimation(nextAction)
        }
      } else if (props.action == "Walk") {
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
      name="goblinBody"
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
            <CuboidCollider args={[0.8, 1.5, 0.6]} onCollisionEnter={(e) => tocarAlgo(e)} onCollisionExit={(e) => dejarDeTocar(e)} />
            <CylinderCollider args={[5, 20]} sensor onIntersectionEnter={(e) => verAlgo(e)} onIntersectionExit={(e) => dejarDeVer(e)} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/enemies/Goblin.glb')
