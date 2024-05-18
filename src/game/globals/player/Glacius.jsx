import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { useFrame } from '@react-three/fiber'
import { PositionalAudio } from '@react-three/drei'

export default function Glacius({ initRotation, initPosition }) {
  console.log(initPosition)
  const glaciusBodyRef = useRef()
  const { player, setPlayer } = usePlayer()

  function hitObject(e) {
    setPlayer({ ...player, spellGlacius: false })
  }

  useFrame((state, delta) => {
    glaciusBodyRef?.current?.setLinvel(
      {
        x: initRotation.x * 10,
        y: 0,
        z: initRotation.z * 10,
      },
      true
    )
    const desplazamiento = {
      x: Math.abs(
        glaciusBodyRef?.current?.translation().x -
          initPosition[0]
      ),
      z: Math.abs(
        glaciusBodyRef?.current?.translation().z -
          initPosition[2]
      ),
    }
    const desplazamientoTotal = desplazamiento.x + desplazamiento.z
    if (desplazamientoTotal > 8) {
      setPlayer({ ...player, spellGlacius: false })
    }
  })

  return (
    <RigidBody
      type="kinematicVelocity"
      ref={glaciusBodyRef}
      position={initPosition}
      onCollisionEnter={(e) => hitObject(e)}
      name="glaciusBody"
    >
      <mesh>
        <sphereGeometry args={[0.05, 16, 8]} />
        <meshStandardMaterial color="MediumTurquoise" />
        <PositionalAudio
          url="/assets/sounds/spell.mp3"
          autoplay
          distance={50}
        />
      </mesh>
    </RigidBody>
  )
}
