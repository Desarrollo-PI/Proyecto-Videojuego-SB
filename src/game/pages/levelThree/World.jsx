import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import Lights from './Lights'

const withPhysics = (Component, ComponentFixed) => (props) => {
  const ref = useRef()
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelThree/LevelThree.glb'
  )
  return (
    <>
      <RigidBody ref={ref} {...props} type="fixed">
        <Component {...props} />
      </RigidBody>
      <RigidBody {...props} type="fixed" colliders="trimesh">
        <ComponentFixed {...props} />
      </RigidBody>
    </>
  )
}

export const WorldLevelThreeFixed = (props) => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelThree/LevelThree.glb'
  )

  return (
    <>  
                <group>
          <mesh geometry={nodes.GraveYard001_1.geometry} material={materials.grond} />
          <mesh geometry={nodes.GraveYard001_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.GraveYard001_3.geometry} material={materials['grond.001']} />
          <mesh geometry={nodes.GraveYard001_4.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.GraveYard001_5.geometry} material={materials.rock} />
        </group>
        <group>
          <mesh geometry={nodes.GraveYard002_1.geometry} material={materials.grond} />
          <mesh geometry={nodes.GraveYard002_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.GraveYard002_3.geometry} material={materials['grond.001']} />
          <mesh geometry={nodes.GraveYard002_4.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.GraveYard002_5.geometry} material={materials.rock} />
        </group>
        <mesh geometry={nodes.Up.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Sides.geometry} material={materials['Material.004']} />
         <mesh geometry={nodes.Rock001.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock002.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock003.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock004.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock005.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock006.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock007.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock008.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock009.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock010.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock011.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock012.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock013.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock014.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock015.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock016.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock017.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock018.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock020.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock021.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock022.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock023.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock024.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock025.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock026.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock028.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock030.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock031.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock033.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock019.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock029.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock032.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock034.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock035.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock036.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock037.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock038.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock039.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock040.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock041.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock042.geometry} material={materials.Rock} />
        <mesh geometry={nodes.StreetLight.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight001.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight002.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight003.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight004.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight005.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight006.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight007.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight008.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight009.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight010.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight011.geometry} material={materials['HalloweenBits.001']} />
        <mesh geometry={nodes.StreetLight012.geometry} material={materials['HalloweenBits.001']} />
        <group>
          <mesh geometry={nodes.Pine001_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine001_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine001_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine002_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine002_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine002_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine003_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine003_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine003_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine004_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine004_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine004_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine006_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine006_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine006_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine007_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine007_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine007_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine009_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine009_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine009_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine010_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine010_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine010_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine011_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine011_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine011_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine012_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine012_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine012_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine013_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine013_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine013_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine014_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine014_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine014_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine015_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine015_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine015_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine016_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine016_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine016_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine017_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine017_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine017_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine018_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine018_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine018_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine019_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine019_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine019_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine020_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine020_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine020_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine021_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine021_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine021_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine022_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine022_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine022_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine023_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine023_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine023_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine024_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine024_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine024_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine025_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine025_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine025_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine005_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine005_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine005_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine028_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine028_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine028_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine029_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine029_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine029_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine030_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine030_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine030_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine031_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine031_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine031_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine033_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine033_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine033_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine008_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine008_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine008_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine026_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine026_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine026_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine035_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine035_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine035_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine036_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine036_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine036_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine038_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine038_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine038_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine039_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine039_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine039_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine040_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine040_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine040_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine041_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine041_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine041_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine042_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine042_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine042_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine043_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine043_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine043_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine044_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine044_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine044_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine045_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine045_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine045_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine046_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine046_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine046_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine047_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine047_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine047_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine048_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine048_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine048_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine049_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine049_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine049_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine050_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine050_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine050_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine051_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine051_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine051_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine052_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine052_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine052_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine105_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine105_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine105_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine106_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine106_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine106_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine128_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine128_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine128_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine129_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine129_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine129_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine130_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine130_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine130_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine132_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine132_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine132_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine134_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine134_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine134_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine135_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine135_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine135_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine136_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine136_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine136_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine137_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine137_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine137_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine138_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine138_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine138_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine139_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine139_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine139_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine140_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine140_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine140_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine143_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine143_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine143_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine174.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine174_1.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine174_2.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <mesh geometry={nodes.DarkTree002.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree003.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree004.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree005.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree006.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree007.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree008.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree010.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree011.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree012.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree013.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree014.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree015.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree016.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree017.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree019.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree020.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree021.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree022.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree023.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree024.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.DarkTree025.geometry} material={materials['TrunkMaterial.001']} />
        <mesh geometry={nodes.FallenTrunk.geometry} material={materials.Trunk} />
        <group>
          <mesh geometry={nodes.Trunk002_1.geometry} material={materials.Bottom} />
          <mesh geometry={nodes.Trunk002_2.geometry} material={materials.Up} />
        </group>
        <group>
          <mesh geometry={nodes.Trunk003_1.geometry} material={materials.Bottom} />
          <mesh geometry={nodes.Trunk003_2.geometry} material={materials.Up} />
        </group>
        <mesh geometry={nodes.Tomb1003.geometry} material={materials['14___Default.001']} />
        <mesh geometry={nodes.Tomb2003.geometry} material={materials['13___Default.001']} />
        <mesh geometry={nodes.Tomb3002.geometry} material={materials['15___Default.001']} />
        <mesh geometry={nodes.Tomb1001.geometry} material={materials['14___Default.001']} />
        <mesh geometry={nodes.Tomb2002.geometry} material={materials['13___Default.001']} />
        <mesh geometry={nodes.Tomb3001.geometry} material={materials['15___Default.001']} />
        <group>
          <mesh geometry={nodes.Skull001_1.geometry} material={materials['Skull.004']} />
          <mesh geometry={nodes.Skull001_2.geometry} material={materials['Skull_Holes.001']} />
        </group>
        <group>
          <mesh geometry={nodes.Skull002_1.geometry} material={materials['Skull.004']} />
          <mesh geometry={nodes.Skull002_2.geometry} material={materials['Skull_Holes.001']} />
        </group>
        <group>
          <mesh geometry={nodes.Skull003_1.geometry} material={materials['Skull.004']} />
          <mesh geometry={nodes.Skull003_2.geometry} material={materials['Skull_Holes.001']} />
        </group>
        <mesh geometry={nodes.BonePile001.geometry} material={materials['Cemetery_MATSG.001']} />
        <mesh geometry={nodes.BonePile002.geometry} material={materials['Cemetery_MATSG.001']} />
        <mesh geometry={nodes.BonePile003.geometry} material={materials['Cemetery_MATSG.001']} />
        <mesh geometry={nodes.Rock1001.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Rock4001.geometry} material={materials.initialShadingGroup_3} />
        <mesh geometry={nodes.Rock4002.geometry} material={materials.initialShadingGroup_3} />
        <mesh geometry={nodes.Rock5001.geometry} material={materials.initialShadingGroup_1} />
        <mesh geometry={nodes.Rocks001.geometry} material={materials.Material} />
        <mesh geometry={nodes.Rock3001.geometry} material={materials.initialShadingGroup_2} />
        <mesh geometry={nodes.Rocks002.geometry} material={materials.Material} />

    </>
  )
}

export const WorldLevelThree = (props) => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelThree/LevelThree.glb'
  )
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh geometry={nodes.Wall002.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall004.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall003.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall005.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall001.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall006.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall007.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall008.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall009.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall010.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Wall011.geometry} material={materials.Wall6} />
        <mesh geometry={nodes.Checkpoint001.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Checkpoint003.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Checkpoint004.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Checkpoint002.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Ivy013.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy001.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy003.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy002.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy004.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy005.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy006.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy010.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy007.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy008.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy009.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy011.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Ivy012.geometry} material={materials.blinn1SG} />
        <group>
          <mesh geometry={nodes.box001_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box001_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box002_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box002_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box003_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box003_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box004_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box004_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box005_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box005_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box006_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box006_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box007_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box007_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box008_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box008_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box010_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box010_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box011_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box011_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box012_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box012_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box013_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box013_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box014_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box014_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box015_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box015_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box017_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box017_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box018_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box018_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box019_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box019_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box020_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box020_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box021_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box021_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box022_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box022_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box023_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box023_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box024_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box024_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box025_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box025_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box026_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box026_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box027_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box027_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box028_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box028_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box029_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box029_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box030_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box030_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box009_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box009_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box016_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box016_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box031_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box031_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box032_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box032_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box033_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box033_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box034_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box034_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box035_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box035_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box036_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box036_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box037_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box037_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box038_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box038_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box039_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box039_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box040_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box040_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box041_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box041_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.box_1.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.box_2.geometry} material={materials.Wood} />
        </group>
        <group>
          <mesh geometry={nodes.Barrel001_1.geometry} material={materials['DarkWood.001']} />
          <mesh geometry={nodes.Barrel001_2.geometry} material={materials['Wood.001']} />
          <mesh geometry={nodes.Barrel001_3.geometry} material={materials['Stone.001']} />
        </group>
        <group>
          <mesh geometry={nodes.Barrel002_1.geometry} material={materials['DarkWood.001']} />
          <mesh geometry={nodes.Barrel002_2.geometry} material={materials['Wood.001']} />
          <mesh geometry={nodes.Barrel002_3.geometry} material={materials['Stone.001']} />
        </group>
        <group>
          <mesh geometry={nodes.Barrel003_1.geometry} material={materials['DarkWood.001']} />
          <mesh geometry={nodes.Barrel003_2.geometry} material={materials['Wood.001']} />
          <mesh geometry={nodes.Barrel003_3.geometry} material={materials['Stone.001']} />
        </group>
        <group>
          <mesh geometry={nodes.Barrel004_1.geometry} material={materials['DarkWood.001']} />
          <mesh geometry={nodes.Barrel004_2.geometry} material={materials['Wood.001']} />
          <mesh geometry={nodes.Barrel004_3.geometry} material={materials['Stone.001']} />
        </group>
        <group>
          <mesh geometry={nodes.Barrel_1.geometry} material={materials['DarkWood.001']} />
          <mesh geometry={nodes.Barrel_2.geometry} material={materials['Wood.001']} />
          <mesh geometry={nodes.Barrel_3.geometry} material={materials['Stone.001']} />
        </group>
       
        <group>
          <mesh geometry={nodes.Pine053_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine053_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine053_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine054_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine054_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine054_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine055_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine055_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine055_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine056_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine056_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine056_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine057_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine057_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine057_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine058_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine058_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine058_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine059_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine059_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine059_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine060_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine060_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine060_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine061_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine061_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine061_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine062_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine062_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine062_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine063_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine063_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine063_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine064_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine064_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine064_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine065_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine065_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine065_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine066_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine066_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine066_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine067_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine067_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine067_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine068_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine068_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine068_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine069_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine069_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine069_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine070_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine070_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine070_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine071_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine071_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine071_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine072_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine072_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine072_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine073_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine073_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine073_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine074_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine074_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine074_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine075_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine075_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine075_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine076_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine076_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine076_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine077_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine077_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine077_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine078_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine078_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine078_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine079_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine079_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine079_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine080_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine080_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine080_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine081_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine081_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine081_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine082_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine082_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine082_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine083_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine083_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine083_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine088_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine088_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine088_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine086_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine086_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine086_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine087_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine087_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine087_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine089_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine089_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine089_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine090_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine090_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine090_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine091_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine091_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine091_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine092_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine092_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine092_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine093_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine093_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine093_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine094_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine094_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine094_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine095_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine095_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine095_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine098_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine098_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine098_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine100_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine100_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine100_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine102_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine102_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine102_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine103_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine103_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine103_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine104_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine104_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine104_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine107_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine107_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine107_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine108_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine108_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine108_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine109_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine109_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine109_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine110_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine110_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine110_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine111_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine111_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine111_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine112_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine112_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine112_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine113_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine113_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine113_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine114_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine114_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine114_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine115_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine115_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine115_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine116_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine116_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine116_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine117_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine117_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine117_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine118_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine118_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine118_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine119_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine119_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine119_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine120_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine120_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine120_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine121_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine121_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine121_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine122_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine122_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine122_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine123_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine123_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine123_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine124_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine124_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine124_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine125_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine125_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine125_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine126_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine126_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine126_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine027_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine027_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine027_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine037_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine037_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine037_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine085_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine085_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine085_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine127_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine127_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine127_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine032_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine032_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine032_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine034_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine034_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine034_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine084_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine084_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine084_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine141_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine141_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine141_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine142_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine142_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine142_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine144_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine144_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine144_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine145_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine145_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine145_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine146_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine146_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine146_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine147_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine147_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine147_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine148_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine148_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine148_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine149_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine149_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine149_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine150_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine150_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine150_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine151_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine151_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine151_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine152_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine152_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine152_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine153_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine153_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine153_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine154_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine154_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine154_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine155_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine155_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine155_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine156_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine156_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine156_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine157_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine157_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine157_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine158_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine158_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine158_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine160_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine160_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine160_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine161_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine161_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine161_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine162_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine162_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine162_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine163_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine163_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine163_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine164_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine164_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine164_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine165_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine165_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine165_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine166_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine166_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine166_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine167_1.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine167_2.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine167_3.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine168.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine168_1.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine168_2.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine169.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine169_1.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine169_2.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine170.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine170_1.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine170_2.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine171.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine171_1.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine171_2.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine172.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine172_1.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine172_2.geometry} material={materials.LightLeavesMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.Pine173.geometry} material={materials.DarkLeavesMaterial} />
          <mesh geometry={nodes.Pine173_1.geometry} material={materials.TrunkMaterial} />
          <mesh geometry={nodes.Pine173_2.geometry} material={materials.LightLeavesMaterial} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/LevelThree.glb')

const WorldLevelThreeWithPhysics = withPhysics(
  WorldLevelThree,
  WorldLevelThreeFixed
)

export default WorldLevelThreeWithPhysics
