import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'
import { usePlayer } from '../../../../providers/player/PlayerProvider'

const Spikes = () => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelTwo/LevelTwo.glb'
  )

  const { imediatelyDeath } = usePlayer()

  const handleIntersectionPlayer = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      imediatelyDeath()
    }
  }

  const handleTouchPlayer = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      imediatelyDeath()
    }
  }

  return (
    <>
      <RigidBody
        colliders={'trimesh'}
        type="fixed"
        onCollisionEnter={handleTouchPlayer}
      >
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes010.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes011.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes012.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes013.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes017.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes018.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes019.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes001.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes002.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes003.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes004.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes006.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes007.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spikes005.geometry}
            material={materials['Metal.001']}
          />
        </group>
        <CuboidCollider
          args={[30, 0.5, 10]}
          position={[0, -20, -60]}
          sensor
          onIntersectionEnter={handleIntersectionPlayer}
        />
      </RigidBody>
    </>
  )
}

export default Spikes
