import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const withRotation = (Component) => (props) => {
  const ref = useRef()
  const refWorld = useRef()
  useFrame(() => {
    ref.current.rotation.y += 0.005
  })
  return (
    <mesh ref={ref}>
      <Component ref={refWorld} {...props} />
    </mesh>
  )
}

const WorldLevelFourth = (props) => {
  const { nodes, materials } = useGLTF('/assets/preview/LevelFourPreview.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Entrance_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Entrance_2.geometry}
          material={materials.Stone}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor004.geometry}
        material={materials['grey.001']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor001.geometry}
        material={materials['grey.001']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor003.geometry}
        material={materials['grey.001']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor005.geometry}
        material={materials['grey.001']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bridge.geometry}
        material={materials['grey.001']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cliff.geometry}
        material={materials.Cliff}
        position={[-121.72, 0, 155.205]}
      />
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Entrance001_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Entrance001_2.geometry}
          material={materials.Stone}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle.geometry}
        material={materials.Dark_Stone}
        position={[-121.72, 0, 155.205]}
      />
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LionStatue_1.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LionStatue_2.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LionStatue_3.geometry}
          material={materials.Dark_Stone}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue_2.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue_3.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue_4.geometry}
          material={materials.Light}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue001_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue001_2.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue001_3.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WarriorStatue001_4.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle002.geometry}
        material={materials['Material.003']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle003.geometry}
        material={materials['Material.003']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle004.geometry}
        material={materials['Material.003']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle005.geometry}
        material={materials['Material.003']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle006.geometry}
        material={materials['Material.003']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle007.geometry}
        material={materials['Material.003']}
        position={[-121.72, 0, 155.205]}
      />
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_1.geometry}
          material={materials['Wood.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_2.geometry}
          material={materials['DarkWood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_3.geometry}
          material={materials['Metal.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_4.geometry}
          material={materials['DarkMetal.001']}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign_1.geometry}
          material={materials.mat20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign_2.geometry}
          material={materials.mat19}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stones.geometry}
        material={materials.mat22}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle008.geometry}
        material={materials.Dark_Stone}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow001.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow002.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow003.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow004.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow005.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow006.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow007.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow008.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow009.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow010.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow011.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow012.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow013.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow014.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow015.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow016.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow017.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow018.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow019.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow020.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow021.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow022.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow023.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow024.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow025.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow026.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow027.geometry}
        material={materials['Material.002']}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle001.geometry}
        material={materials['Material.003']}
        position={[-121.72, 0, 155.205]}
      />
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree001_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree001_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree002_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree002_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree003_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree003_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree004_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree004_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree005_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree005_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree006_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree006_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree007_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree007_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree008_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree008_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree009_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree009_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree010_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree010_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree011_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree011_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree012_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree012_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree013_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree013_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree014_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree014_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree015_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree015_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree016_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree016_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree017_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree017_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree018_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree018_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree019_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree019_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree020_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree020_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree021_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree021_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree022_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree022_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree023_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree023_2.geometry}
          material={materials.Green}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_1.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_2.geometry}
          material={materials.Green}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush.geometry}
        material={materials.mat9}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush001.geometry}
        material={materials.mat9}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush002.geometry}
        material={materials.mat9}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush003.geometry}
        material={materials.mat9}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush004.geometry}
        material={materials.mat9}
        position={[-121.72, 0, 155.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush005.geometry}
        material={materials.mat9}
        position={[-121.72, 0, 155.205]}
      />
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain_2.geometry}
          material={materials.Stone_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain_3.geometry}
          material={materials['Wood.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain_4.geometry}
          material={materials['Main.001']}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain002_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain002_2.geometry}
          material={materials.Stone_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain002_3.geometry}
          material={materials['Wood.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallMain002_4.geometry}
          material={materials['Main.001']}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond_2.geometry}
          material={materials['Stone_Light.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond_3.geometry}
          material={materials['Wood.005']}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond001_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond001_2.geometry}
          material={materials['Stone_Light.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond001_3.geometry}
          material={materials['Wood.005']}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond002_1.geometry}
          material={materials.Dark_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond002_2.geometry}
          material={materials['Stone_Light.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WallSecond002_3.geometry}
          material={materials['Wood.005']}
        />
      </group>
      <group position={[-121.72, 0, 155.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_2.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_3.geometry}
          material={materials['Material.006']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/LevelFourPreview.glb')

export const WorldLevelFourWithRotation = withRotation(WorldLevelFourth)
