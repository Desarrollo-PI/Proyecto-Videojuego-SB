import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useState } from 'react'

export function ThunderLight(props) {
  const { nodes, materials } = useGLTF('/assets/models/collectibles/ThunderLight.glb')
  const groupRef = useRef();

  const [thunderLightCollected, setThunderLightCollected] = useState(false); 

  const handleThunderLightCollision = () => {
    setThunderLightCollected(true); // Actualiza el estado cuando la espada es recogida
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02; // Ajusta la velocidad y dirección de la rotación según tus necesidades
    }
  });

  if (thunderLightCollected) {
    return null; 
  }
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <RigidBody type={'fixed'} colliders="cuboid" onCollisionEnter={() => {
            handleThunderLightCollision();
      }}>
      <group>
        <mesh geometry={nodes.ThunderLight.geometry} material={materials['Material.006']} />
      </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/ThunderLight.glb')