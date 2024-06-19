import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { useFrame } from '@react-three/fiber'
import { PositionalAudio } from '@react-three/drei'

export default function Leviosa({ initRotation, initPosition }) {
  const leviosaBodyRef = useRef()
  const { player, setPlayer } = usePlayer()

  function hitObject(e) {
    setPlayer({ ...player, spellLeviosa: false })
  }

  useFrame((state, delta) => {
    leviosaBodyRef?.current?.setLinvel(
      {
        x: initRotation.x * 10,
        y: 0,
        z: initRotation.z * 10,
      },
      true
    )
    const desplazamiento = {
      x: Math.abs(leviosaBodyRef?.current?.translation().x - initPosition[0]),
      z: Math.abs(leviosaBodyRef?.current?.translation().z - initPosition[2]),
    }
    const desplazamientoTotal = desplazamiento.x + desplazamiento.z
    if (desplazamientoTotal > 8) {
      setPlayer({ ...player, spellLeviosa: false })
    }
  })

  return (
    <RigidBody
      type="dynamic"
      ref={leviosaBodyRef}
      position={initPosition}
      onCollisionEnter={(e) => hitObject(e)}
      name="leviosaBody"
    >
      <mesh>
        <sphereGeometry args={[0.05, 16, 8]} />
        <meshStandardMaterial color="Yellow" />
      </mesh>
    </RigidBody>
  )
}
