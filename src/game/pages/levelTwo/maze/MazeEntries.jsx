import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { usePlayer } from '../../../../providers/player/PlayerProvider'

const MazeEntries = () => {
  const { inMaze, handleInMaze } = usePlayer()

  const handleIntersectionEnter = (e) => {
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
        args={[1.5, 4, 0.4]}
        position={[3.2, 0, -11.2]}
        sensor
        onIntersectionEnter={handleIntersectionEnter}
      />
      <CuboidCollider
        args={[1.5, 4, 0.4]}
        position={[-6.8, 0, -46.9]}
        sensor
        onIntersectionEnter={handleIntersectionEnter}
      />
    </RigidBody>
  )
}

export default MazeEntries
