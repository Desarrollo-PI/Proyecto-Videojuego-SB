import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { useFrame } from '@react-three/fiber'
import { PositionalAudio } from '@react-three/drei'

export default function Incendio({ initRotation, initPosition }) {
  const incendioBodyRef = useRef()
  const { player, setPlayer } = usePlayer()

  function hitObject(e) {
    setPlayer({ ...player, spellIncendio: false })
  }

  useFrame((state, delta) => {
    incendioBodyRef?.current?.setLinvel(
      {
        x: initRotation.x * 10,
        y: 0,
        z: initRotation.z * 10,
      },
      true
    )
    const desplazamiento = {
      x: Math.abs(incendioBodyRef?.current?.translation().x - initPosition[0]),
      z: Math.abs(incendioBodyRef?.current?.translation().z - initPosition[2]),
    }
    const desplazamientoTotal = desplazamiento.x + desplazamiento.z
    if (desplazamientoTotal > 8) {
      setPlayer({ ...player, spellIncendio: false })
    }
  })

  return (
    <RigidBody
      type="kinematicVelocity"
      ref={incendioBodyRef}
      position={initPosition}
      onCollisionEnter={(e) => hitObject(e)}
      name="incendioBody"
    >
      <mesh>
        <sphereGeometry args={[0.05, 16, 8]} />
        <meshStandardMaterial color="Red" />
      </mesh>
    </RigidBody>
  )
}
