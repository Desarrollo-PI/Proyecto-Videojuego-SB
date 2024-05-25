import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { vec3 } from '@react-three/rapier'

const GrassPlatform = (props) => {
  const ref = useRef()
  const meshRef = useRef()
  const { initialPosition, moveDirection, maxPosition, speed } = props

  const { scene, nodes, materials } = useGLTF(
    '/assets/models/elements/GrassPlatform.glb'
  )

  const [frozen, setFrozen] = useState(false)
  const [movSpeed, setMovSpeed] = useState(speed)

  let mov
  useFrame((_, delta) => {
    const stone = ref.current

    if (stone && !frozen) {
      const position = vec3(stone.translation())

      const z = position.z
      const x = position.x

      if (moveDirection === 1) {
        if (position.z < maxPosition) {
          mov = speed
          setMovSpeed(speed)
        } else if (position.z >= initialPosition[2]) {
          mov = -speed
          setMovSpeed(-speed)
        }
      } else if (moveDirection === 2) {
        if (position.x <= maxPosition) {
          mov = speed
          setMovSpeed(speed)
        } else if (position.x >= initialPosition[0]) {
          mov = -speed
          setMovSpeed(-speed)
        }
      } else if (moveDirection === 3) {
        if (position.x >= maxPosition) {
          mov = -speed
          setMovSpeed(-speed)
        } else if (position.x <= initialPosition[0]) {
          mov = speed
          setMovSpeed(speed)
        }
      } else if (moveDirection === 4) {
        if (position.z >= maxPosition) {
          mov = speed
          setMovSpeed(speed)
        } else if (position.z <= initialPosition[2]) {
          mov = -speed
          setMovSpeed(-speed)
        }
      }

      let newTranslation
      if (moveDirection === 1 || moveDirection === 4) {
        newTranslation = {
          x: position.x,
          y: position.y,
          z: position.z + movSpeed,
        }
      } else if (moveDirection === 2 || moveDirection === 3) {
        newTranslation = {
          x: position.x + movSpeed,
          y: position.y,
          z: position.z,
        }
      }

      stone.setTranslation(newTranslation, true)
    }
  })

  function handleFreeze(e) {
    if (e.rigidBodyObject.name === 'glaciusBody') {
      setFrozen((prev) => !prev)
    }
  }

  useEffect(() => {
    if (frozen) {
      setMovSpeed(0)
    } else {
      setMovSpeed(speed)
    }
  }, [frozen])

  return (
    <>
      <RigidBody
        position={initialPosition}
        ref={ref}
        gravityScale={0}
        onCollisionEnter={handleFreeze}
        density={0}
        angularVelocity={[0, 0, 0]}
      >
        <group {...props} dispose={null} scale={[4, 8, 4]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GrassPlatform_1.geometry}
            material={materials.Dirt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GrassPlatform_2.geometry}
            material={materials.Grass}
          />
        </group>
      </RigidBody>
    </>
  )
}

useGLTF.preload('./GrassPlatform.glb')

export default GrassPlatform