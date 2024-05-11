import React from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

const Chairs = () => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelOne/LevelOne.glb'
  )

  return (
<RigidBody type='fixed' colliders={false} /*args={[10, 10, 10]}*/ >
<mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft006_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft006_2.geometry}
        material={materials.brown}
      />
        <CuboidCollider args={[0.5, 5, 2.3]} position={[-1.3, 1, -6.9]}/>

        <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft011_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft011_2.geometry}
        material={materials.brown}
      />
      <CuboidCollider args={[0.5, 5, 2.3]} position={[1.3, 1, -6.9]}/>
    
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft009_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft009_2.geometry}
        material={materials.brown}
      />
    <CuboidCollider args={[0.5, 5, 2.3]} position={[-1.3, 1, -26.9]}/>

    <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft002_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft002_2.geometry}
        material={materials.brown}
      />
    <CuboidCollider args={[0.5, 5, 2.3]} position={[1.3, 1, -26.9]}/>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft010_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft010_2.geometry}
        material={materials.brown}
      />
    <CuboidCollider args={[0.5, 5, 2.3]} position={[1.3, 1, -46.9]}/>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft004_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft004_2.geometry}
        material={materials.brown}
      />
    <CuboidCollider args={[0.5, 5, 2.3]} position={[-1.3, 1, -46.9]}/>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft012_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft012_2.geometry}
        material={materials.brown}
      />
      
      <CuboidCollider args={[0.5, 5, 2.3]} position={[-1.3, 1, -87]}/>
    
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft007_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft007_2.geometry}
        material={materials.brown}
      />
      <CuboidCollider args={[0.5, 5, 2.3]} position={[1.3, 1, -87]}/>

</RigidBody>
    )
}

export default Chairs