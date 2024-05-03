import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useState } from 'react'


export function GreenPotion(props) {
  const { nodes, materials } = useGLTF('/assets/models/collectibles/GreenPotion.glb')

  const [greenPotionCollected, setGreenPotionCollected] = useState(false); 

  const groupRef = useRef();
  const handleGreenPotionCollision = () => {
    setGreenPotionCollected(true); // Actualiza el estado cuando la espada es recogida
  };

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.x += 0.02; // Ajusta la velocidad y dirección de la rotación según tus necesidades
//     }
//   });

  if (greenPotionCollected) {
    return null; 
  }

  return (
    <group ref={groupRef} {...props} dispose={null}>
    <RigidBody type={'fixed'} colliders="cuboid" onCollisionEnter={() => {
            handleGreenPotionCollision();
      }}>
      <group>
        <group>
          <mesh geometry={nodes.Green_potion.geometry} material={materials.Vidro1} />
          <mesh geometry={nodes.Green_potion_1.geometry} material={materials.Lquido1} />
          <mesh geometry={nodes.Green_potion_2.geometry} material={materials.Rolha1} />
        </group>
      </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/GreenPotion.glb')