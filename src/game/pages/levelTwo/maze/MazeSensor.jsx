import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { usePlayer } from '../../../../providers/player/PlayerProvider'

const MazeSensor = () => {
  const { inMaze, handleInMaze } = usePlayer()

  const handleIntersection = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      if (inMaze) {
        handleInMaze(false)
      } else {
        handleInMaze(true)
      }
    }
  }

  return (
    <RigidBody colliders={false} type="fixed">
      <CuboidCollider
        args={[21.5, 10, 17.7]}
        position={[-1.5, 0, -29]}
        sensor
        onIntersectionEnter={handleIntersection}
        onIntersectionExit={handleIntersection}
      />
    </RigidBody>
  )
}

export default MazeSensor
