import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function WorldLevelFourth(props) {
  const { nodes, materials } = useGLTF('/assets/models/worldLevelFourth/LevelFourthDraftA1000.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor004.geometry}
        material={materials['grey.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor001.geometry}
        material={materials['grey.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor003.geometry}
        material={materials['grey.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor005.geometry}
        material={materials['grey.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bridge.geometry}
        material={materials['grey.001']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cliff.geometry} material={materials.Cliff} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle002.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle003.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle004.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle005.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle006.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle007.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls001.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls004.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls005.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls003.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls006.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls002.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls007.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls008.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StoneWalls009.geometry}
        material={materials.Dark_Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow001.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow002.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow003.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow004.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow005.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow006.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow007.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow008.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow009.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow010.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow011.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow012.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow013.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow014.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow015.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow016.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow017.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow018.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow019.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow020.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow021.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow022.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow023.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow024.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow025.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow026.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightWindow027.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Castle001.geometry}
        material={materials['Material.003']}
      />
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torchs_1.geometry}
        material={materials.DarkMetal}
      />
      <mesh castShadow receiveShadow geometry={nodes.Torchs_2.geometry} material={materials.Fire} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torchs001_1.geometry}
        material={materials.DarkMetal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torchs001_2.geometry}
        material={materials.Fire}
      />
    </group>
  )
}

useGLTF.preload('/LevelFourthDraftA1000.glb')