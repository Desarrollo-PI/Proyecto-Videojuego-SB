import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { useFrame } from '@react-three/fiber'
import { PositionalAudio } from '@react-three/drei'

export default function Expelliarmus({ initRotation, initPosition }) {
  const expelliarmusBodyRef = useRef()
  const { player, setPlayer } = usePlayer()

  function hitObject(e) {
    setPlayer({ ...player, spellExpelliarmus: false })
  }

  useFrame((state, delta) => {
    expelliarmusBodyRef?.current?.setLinvel(
      {
        x: initRotation.x * 10,
        y: 0,
        z: initRotation.z * 10,
      },
      true
    )
    const desplazamiento = {
      x: Math.abs(
        expelliarmusBodyRef?.current?.translation().x - initPosition[0]
      ),
      z: Math.abs(
        expelliarmusBodyRef?.current?.translation().z - initPosition[2]
      ),
    }
    const desplazamientoTotal = desplazamiento.x + desplazamiento.z
    if (desplazamientoTotal > 8) {
      setPlayer({ ...player, spellExpelliarmus: false })
    }
  })

  return (
    <RigidBody
      type="kinematicVelocity"
      ref={expelliarmusBodyRef}
      position={initPosition}
      onCollisionEnter={(e) => hitObject(e)}
      name="expelliarmusBody"
    >
      <mesh>
        <sphereGeometry args={[0.05, 16, 8]} />
        <meshStandardMaterial color="Gray" />
        <PositionalAudio
          url="/assets/sounds/spell.mp3"
          autoplay
          distance={50}
        />
      </mesh>
    </RigidBody>
  )
}
