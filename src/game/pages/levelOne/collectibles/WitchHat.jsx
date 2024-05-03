import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useState } from 'react'

export function WitchHat(props) {
  const { nodes, materials } = useGLTF('/assets/models/collectibles/WitchHat.glb')
  const groupRef = useRef();

  const [witchHatCollected, setWitchHatCollected] = useState(false); 

  const handleWitchHatCollision = () => {
    setWitchHatCollected(true); // Actualiza el estado cuando la espada es recogida
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02; // Ajusta la velocidad y dirección de la rotación según tus necesidades
    }
  });

  if (witchHatCollected) {
    return null; 
  }
  return (
    <group ref={groupRef} {...props} dispose={null} scale={1.5}>
      <RigidBody type={'fixed'} colliders="cuboid" onCollisionEnter={() => {
            handleWitchHatCollision();
      }}>
      <group>
        <group>
          <mesh geometry={nodes.WitchHat001.geometry} material={materials.gold} />
          <mesh geometry={nodes.WitchHat001_1.geometry} material={materials['cloth.001']} />
          <mesh geometry={nodes.WitchHat001_2.geometry} material={materials['Material.007']} />
        </group>
      </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/WitchHat.glb')