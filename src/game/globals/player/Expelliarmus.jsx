import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { usePlayer } from '../../../providers/player/PlayerProvider'

export default function Expelliarmus() {
  const expelliarmusRef = useRef()
  const { player, setPlayer } = usePlayer()
  if (player.spellExpelliarmus) {
    return (
      <RigidBody>
        <mesh>
          <sphereGeometry args={[0.2, 16, 8]} />
          <meshStandardMaterial color="MediumTurquoise" />
        </mesh>
      </RigidBody>
    )
  }
}
