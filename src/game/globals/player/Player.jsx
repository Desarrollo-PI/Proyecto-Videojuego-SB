import { useEffect, useRef } from 'react'
import { useAvatar } from '../../../providers/avatar/AvatarProvider'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import Ecctrl from 'ecctrl'
import { socket } from '../../../socket/socket-manager'

export default function Player(props) {
  const playerRef = useRef()
  const playerBodyRef = useRef()

  const meshOneRef = useRef()
  const meshTwoRef = useRef()
  const meshThreeRef = useRef()
  const meshFourRef = useRef()
  const meshFiveRef = useRef()
  const meshSixRef = useRef()
  const meshSevenRef = useRef()

  const { avatar, setAvatar } = useAvatar()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/characters/avatar/Auror.glb'
  )
  const { actions } = useAnimations(animations, playerRef)

  const {
    player,
    setPlayer,
    isPoisoned,
    teleportPosition,
    setTeleportPosition,
  } = usePlayer()

  function quaternionToDirection(quaternion) {
    var x = quaternion.x
    var y = quaternion.y
    var z = quaternion.z
    var w = quaternion.w
    var qx = 2 * (x * z + w * y)
    var qy = 2 * (y * z - w * x)
    var qz = 1 - 2 * (x * x + y * y)

    return { x: qx, y: qy, z: qz }
  }

  function normalize(vector) {
    var magnitud = Math.sqrt(vector.x ** 2 + vector.z ** 2)
    if (magnitud === 0) {
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
    setAvatar({
      ...avatar,
      ref: playerRef?.current,
      body: playerBodyRef?.current,
    })
  }, [playerBodyRef?.current, playerRef?.current])

  useEffect(() => {
    if (props.isPlayerDeath && !props.isMenuOpen) {
      actions['Death'].clampWhenFinished = true
      actions['Death'].repetitions = 0
      actions['Death']?.reset().fadeIn(0.5).play()
      return () => {
        if (actions['Death']) actions['Death'].fadeOut(0.5)
      }
    } else {
      actions['Attacking'].timeScale = 2
      actions['Attacking'].clampWhenFinished = true
      actions[avatar.animation]?.reset().fadeIn(0.5).play()
      return () => {
        if (actions[avatar.animation]) actions[avatar.animation].fadeOut(0.5)
      }
    }
  }, [actions, avatar.animation, props.isPlayerDeath])

  useEffect(() => {
    if (isPoisoned) {
      meshOneRef.current.material.color.set('#00FF00')
      meshTwoRef.current.material.color.set('#00FF00')
      meshThreeRef.current.material.color.set('#00FF00')
      meshFourRef.current.material.color.set('#00FF00')
      meshFiveRef.current.material.color.set('#00FF00')
      meshSixRef.current.material.color.set('#00FF00')
      meshSevenRef.current.material.color.set('#00FF00')
    } else {
      meshOneRef.current.material.color.set('#E6E6E6')
      meshTwoRef.current.material.color.set('#E6E6E6')
      meshThreeRef.current.material.color.set('#E6E6E6')
      meshFourRef.current.material.color.set('#E6E6E6')
      meshFiveRef.current.material.color.set('#E6E6E6')
      meshSixRef.current.material.color.set('#E6E6E6')
      meshSevenRef.current.material.color.set('#E6E6E6')
    }
  }, [isPoisoned])

  useEffect(() => {
    if (teleportPosition) {
      playerBodyRef?.current?.setTranslation({
        x: teleportPosition[0],
        y: teleportPosition[1],
        z: teleportPosition[2],
      })
      playerBodyRef?.current?.setRotation({
        x: 0,
        y: 0,
        z: 0,
        w: 0,
      })
      setTeleportPosition(null)
    }
  }, [teleportPosition])

  useFrame(() => {
    if (
      avatar.animation === 'Attacking' &&
      actions['Attacking'].time >= 1.5 &&
      actions['Attacking'].time <= 1.55 &&
      !player[player.selectedSpell]
    ) {
      const direccion = normalize(
        quaternionToDirection(playerBodyRef.current.rotation())
      )
      const posicion = playerBodyRef.current.translation()
      setPlayer({
        ...player,
        [player.selectedSpell]: true,
        spellInitPosition: [
          posicion.x + direccion.x * 0.5,
          posicion.y - 0.25,
          posicion.z + direccion.z * 0.5,
        ],
        spellInitRotation: direccion,
      })
    }
  })

  useEffect(() => {
    return () => {
      socket.off('updates-values-leviosa')
    }
  }, [])

  socket.on('updates-values-leviosa', () => {
    playerBodyRef.current?.setLinvel({ x: 0, y: 15, z: 0 }, true)
  })

  return (
    <>
      <Ecctrl
        camInitDis={props.camInitDis}
        camMaxDis={props.camMaxDis}
        maxVelLimit={props.maxVelLimit}
        sprintMult={props.sprintMult}
        jumpVel={props.jumpVel}
        sprintJumpMult={props.sprintJumpMult}
        position={props.position}
        characterInitDir={props.characterInitDir}
        camInitDir={props.camInitDir}
        name={props.name}
        type={props.type}
        isPlayerDeath={props.isPlayerDeath}
        ref={playerBodyRef}
        isMenuOpen={props.isMenuOpen}
        jugador={1}
        gravityScale={0}
      >
        <group ref={playerRef} name="Scene" scale={0.7} position={[0, -0.9, 0]}>
          <group
            name="Auror"
            position={[-0.059, -0.037, 0.097]}
            rotation={[-0.065, -0.09, -0.041]}
            scale={1.263}
          >
            <skinnedMesh
              name="Cube024"
              geometry={nodes.Cube024.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube024.skeleton}
              castShadow
              receiveShadow
              ref={meshOneRef}
            />
            <skinnedMesh
              name="Cube025"
              geometry={nodes.Cube025.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube025.skeleton}
              castShadow
              receiveShadow
              ref={meshTwoRef}
            />
            <skinnedMesh
              name="Cube026"
              geometry={nodes.Cube026.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube026.skeleton}
              castShadow
              receiveShadow
              ref={meshThreeRef}
            />
            <skinnedMesh
              name="Cube027"
              geometry={nodes.Cube027.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube027.skeleton}
              castShadow
              receiveShadow
              ref={meshFourRef}
            />
            <skinnedMesh
              name="Cube028"
              geometry={nodes.Cube028.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube028.skeleton}
              castShadow
              receiveShadow
              ref={meshFiveRef}
            />
            <skinnedMesh
              name="Cube029"
              geometry={nodes.Cube029.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube029.skeleton}
              castShadow
              receiveShadow
              ref={meshSixRef}
            />
            <skinnedMesh
              name="Cube030"
              geometry={nodes.Cube030.geometry}
              material={materials['Material.003']}
              skeleton={nodes.Cube030.skeleton}
              castShadow
              receiveShadow
              ref={meshSevenRef}
            />
            <group name="Wand">
              <skinnedMesh
                name="Wand_1"
                geometry={nodes.Wand_1.geometry}
                material={materials.mat19}
                skeleton={nodes.Wand_1.skeleton}
              />
              <skinnedMesh
                name="Wand_2"
                geometry={nodes.Wand_2.geometry}
                material={materials.mat20}
                skeleton={nodes.Wand_2.skeleton}
              />
            </group>
            <primitive object={nodes.pelvis} />
          </group>
        </group>
      </Ecctrl>
    </>
  )
}

useGLTF.preload('/assets/models/characters/avatar/Auror.glb')
