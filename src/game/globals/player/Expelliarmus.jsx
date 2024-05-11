import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { usePlayer } from "../../../providers/player/PlayerProvider"
import { useFrame } from "@react-three/fiber"

export default function Expelliarmus() {
	const expelliarmusBodyRef = useRef()
	const { player, setPlayer } = usePlayer()

	function hitObject(e) {
		setPlayer({ ...player, spellExpelliarmus: false })
	}

	useFrame((state, delta) => {
		expelliarmusBodyRef?.current?.setLinvel(
			{ x: 0, y: 0, z: -10 },
			true
		)
		// console.log(player.expelliarmusInitPosition, player.expelliarmusInitRotation)
	})

	return (
		<RigidBody type="kinematicVelocity" ref={expelliarmusBodyRef} position={player.expelliarmusInitPosition} onCollisionEnter={(e) => hitObject(e)}>
			<mesh>
				<sphereGeometry args={[0.05, 16, 8]} />
				<meshStandardMaterial color="MediumTurquoise" />
			</mesh>
		</RigidBody>
	)
}