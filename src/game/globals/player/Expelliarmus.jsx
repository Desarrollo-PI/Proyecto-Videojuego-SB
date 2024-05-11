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
			{ x: player.expelliarmusInitRotation.x * 10, y: 0, z: player.expelliarmusInitRotation.z * 10 },
			true
		)
		const desplazamiento = {
			x: Math.abs(expelliarmusBodyRef?.current?.translation().x - player.expelliarmusInitPosition[0]),
			z: Math.abs(expelliarmusBodyRef?.current?.translation().z - player.expelliarmusInitPosition[2])
		}
		const desplazamientoTotal = desplazamiento.x + desplazamiento.z
		if (desplazamientoTotal > 8) {
			setPlayer({ ...player, spellExpelliarmus: false })
		}
	})

	return (
		<RigidBody name="expelliarmusBody" type="kinematicVelocity" ref={expelliarmusBodyRef} position={player.expelliarmusInitPosition} onCollisionEnter={(e) => hitObject(e)}>
			<mesh>
				<sphereGeometry args={[0.05, 16, 8]} />
				<meshStandardMaterial color="Gray" />
			</mesh>
		</RigidBody>
	)
}
