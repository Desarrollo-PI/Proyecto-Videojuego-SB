import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

const withPhysics = (Component) => (props) => {
  const ref = useRef()
  return (
    <RigidBody ref={ref} {...props} type="fixed">
      <Component {...props} />
    </RigidBody>
  )
}

export const WorldLevelOne = (props) => {
  const { nodes, materials } = useGLTF(
    '/assets/models/worldLevelOne/LevelOneDraft600AALL.glb'
  )
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.wallMaterial}
      />
      <group position={[13, 6.335, -7]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[13, -6.335, -7]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials['Material.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={materials['Material.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_6.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_7.geometry}
            material={materials['Material.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_8.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_9.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_10.geometry}
            material={materials.Material}
          />
        </group>
      </group>
      <group position={[-13, 6.335, -88]}>
        <group position={[13, -6.335, 88]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={materials['Material.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_3.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_4.geometry}
            material={materials['Material.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_5.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_6.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_7.geometry}
            material={materials['Material.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_8.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_9.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_10.geometry}
            material={materials.Material}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Railfloor001.geometry}
        material={materials['Material.017']}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass.geometry}
          material={materials['Material.031']}
          position={[8.29, -2.98, -66.885]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.642}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_1.geometry}
          material={materials['Material.031']}
          position={[-12.092, -2.98, -42.905]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.072}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_2.geometry}
          material={materials['Material.031']}
          position={[-11.328, -2.98, 1.486]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.853}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_3.geometry}
          material={materials['Material.031']}
          position={[15.679, -2.98, -24.673]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.262}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_4.geometry}
          material={materials['Material.031']}
          position={[-13.366, -2.98, -95.224]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.775}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_5.geometry}
          material={materials['Material.031']}
          position={[-12.347, -2.98, -12.783]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.896}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_6.geometry}
          material={materials['Material.031']}
          position={[-8.44, -2.98, -85.315]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.315}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_7.geometry}
          material={materials['Material.031']}
          position={[-15.574, -2.98, -76.992]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.336}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_8.geometry}
          material={materials['Material.031']}
          position={[6.847, -2.98, -20.115]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_9.geometry}
          material={materials['Material.031']}
          position={[-8.95, -2.98, -2.874]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.714}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_10.geometry}
          material={materials['Material.031']}
          position={[-10.564, -2.98, -33.393]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.895}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_11.geometry}
          material={materials['Material.031']}
          position={[-5.468, -2.98, -11.792]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_12.geometry}
          material={materials['Material.031']}
          position={[0.562, -2.98, -55.39]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.544}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_13.geometry}
          material={materials['Material.031']}
          position={[8.545, -2.98, -28.835]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.646}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_14.geometry}
          material={materials['Material.031']}
          position={[-2.58, -2.98, -66.488]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.679}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_15.geometry}
          material={materials['Material.031']}
          position={[2.77, -2.98, -15.359]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.005}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_16.geometry}
          material={materials['Material.031']}
          position={[-0.457, -2.98, -50.634]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.621}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_17.geometry}
          material={materials['Material.031']}
          position={[3.195, -2.98, -78.775]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.801}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_18.geometry}
          material={materials['Material.031']}
          position={[4.129, -2.98, -18.53]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.201}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_19.geometry}
          material={materials['Material.031']}
          position={[7.696, -2.98, -51.823]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.391}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_20.geometry}
          material={materials['Material.031']}
          position={[-6.827, -2.98, -8.621]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.507}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_21.geometry}
          material={materials['Material.031']}
          position={[-16.678, -2.98, -35.771]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.61}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_22.geometry}
          material={materials['Material.031']}
          position={[12.622, -2.98, -33.591]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.393}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_23.geometry}
          material={materials['Material.031']}
          position={[-5.893, -2.98, -49.841]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.949}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_24.geometry}
          material={materials['Material.031']}
          position={[1.241, -2.98, -61.732]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.34}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_25.geometry}
          material={materials['Material.031']}
          position={[-6.402, -2.98, -30.817]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.267}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_26.geometry}
          material={materials['Material.031']}
          position={[-4.704, -2.98, -22.89]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.343}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_27.geometry}
          material={materials['Material.031']}
          position={[-12.857, -2.98, -76.199]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_28.geometry}
          material={materials['Material.031']}
          position={[-8.865, -2.98, -21.899]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.158}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_29.geometry}
          material={materials['Material.031']}
          position={[-5.383, -2.98, -16.548]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.553}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_30.geometry}
          material={materials['Material.031']}
          position={[-8.101, -2.98, -14.963]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.49}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_31.geometry}
          material={materials['Material.031']}
          position={[-3.005, -2.98, -38.744]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.908}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_32.geometry}
          material={materials['Material.031']}
          position={[-4.194, -2.98, -60.939]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.103}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_33.geometry}
          material={materials['Material.031']}
          position={[14.405, -2.98, -72.235]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_34.geometry}
          material={materials['Material.031']}
          position={[7.271, -2.98, -83.531]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.303}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_35.geometry}
          material={materials['Material.031']}
          position={[-7.846, -2.98, -91.062]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.746}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_36.geometry}
          material={materials['Material.031']}
          position={[14.065, -2.98, -78.577]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.417}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_37.geometry}
          material={materials['Material.031']}
          position={[-9.035, -2.98, -53.607]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.297}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_38.geometry}
          material={materials['Material.031']}
          position={[-12.177, -2.98, -68.272]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.377}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_39.geometry}
          material={materials['Material.031']}
          position={[15.085, -2.98, -69.065]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.42}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_40.geometry}
          material={materials['Material.031']}
          position={[15.169, -2.98, -43.698]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.701}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_41.geometry}
          material={materials['Material.031']}
          position={[5.318, -2.98, -62.921]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.574}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_42.geometry}
          material={materials['Material.031']}
          position={[-1.052, -2.98, -95.026]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.224}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_43.geometry}
          material={materials['Material.031']}
          position={[2.685, -2.98, -14.17]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.755}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_44.geometry}
          material={materials['Material.031']}
          position={[9.734, -2.98, -44.689]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.985}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_45.geometry}
          material={materials['Material.031']}
          position={[12.707, -2.98, -84.324]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.353}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_46.geometry}
          material={materials['Material.031']}
          position={[-5.298, -2.98, -67.281]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_47.geometry}
          material={materials['Material.031']}
          position={[-16.339, -2.98, -19.917]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.072}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_48.geometry}
          material={materials['Material.031']}
          position={[-15.15, -2.98, -64.308]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.114}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_49.geometry}
          material={materials['Material.031']}
          position={[1.071, -2.98, -36.366]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.455}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_50.geometry}
          material={materials['Material.031']}
          position={[8.885, -2.98, -22.493]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.584}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_51.geometry}
          material={materials['Material.031']}
          position={[-16.424, -2.98, -10.404]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.136}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_52.geometry}
          material={materials['Material.031']}
          position={[-5.043, -2.98, -29.231]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.763}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_53.geometry}
          material={materials['Material.031']}
          position={[-8.61, -2.98, -97.998]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.134}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_54.geometry}
          material={materials['Material.031']}
          position={[10.074, -2.98, -57.372]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.739}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_55.geometry}
          material={materials['Material.031']}
          position={[11.518, -2.98, -5.054]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.996}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_56.geometry}
          material={materials['Material.031']}
          position={[2.94, -2.98, -40.725]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.855}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_57.geometry}
          material={materials['Material.031']}
          position={[12.961, -2.98, -27.249]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.77}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_58.geometry}
          material={materials['Material.031']}
          position={[-7.676, -2.98, -78.379]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.936}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_59.geometry}
          material={materials['Material.031']}
          position={[11.772, -2.98, -49.445]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.011}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_60.geometry}
          material={materials['Material.031']}
          position={[-14.895, -2.98, -66.686]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.591}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_61.geometry}
          material={materials['Material.031']}
          position={[5.743, -2.98, -93.044]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.571}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_62.geometry}
          material={materials['Material.031']}
          position={[-14.215, -2.98, -73.028]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.392}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_63.geometry}
          material={materials['Material.031']}
          position={[-7.761, -2.98, -27.646]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.617}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_64.geometry}
          material={materials['Material.031']}
          position={[13.216, -2.98, -1.883]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.931}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_65.geometry}
          material={materials['Material.031']}
          position={[8.036, -2.98, -64.506]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.775}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_66.geometry}
          material={materials['Material.031']}
          position={[-3.939, -2.98, -70.452]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.368}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_67.geometry}
          material={materials['Material.031']}
          position={[-10.733, -2.98, -46.076]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.891}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_68.geometry}
          material={materials['Material.031']}
          position={[-10.224, -2.98, -27.051]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.917}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_69.geometry}
          material={materials['Material.031']}
          position={[-10.479, -2.98, -84.126]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.012}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_70.geometry}
          material={materials['Material.031']}
          position={[-5.638, -2.98, -87.891]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.89}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_71.geometry}
          material={materials['Material.031']}
          position={[-7.591, -2.98, -53.012]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.867}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_72.geometry}
          material={materials['Material.031']}
          position={[5.573, -2.98, -67.677]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.652}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_73.geometry}
          material={materials['Material.031']}
          position={[2.855, -2.98, -66.092]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_74.geometry}
          material={materials['Material.031']}
          position={[1.326, -2.98, -10.999]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.941}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_75.geometry}
          material={materials['Material.031']}
          position={[17.208, -2.98, -48.454]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.736}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_76.geometry}
          material={materials['Material.031']}
          position={[13.896, -2.98, -91.26]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.388}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_77.geometry}
          material={materials['Material.031']}
          position={[-1.476, -2.98, -60.147]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.528}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_78.geometry}
          material={materials['Material.031']}
          position={[-4.024, -2.98, -19.719]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.155}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_79.geometry}
          material={materials['Material.031']}
          position={[-12.432, -2.98, -63.516]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.163}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_80.geometry}
          material={materials['Material.031']}
          position={[7.526, -2.98, -26.457]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.615}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_81.geometry}
          material={materials['Material.031']}
          position={[-14.47, -2.98, -54.003]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.191}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_82.geometry}
          material={materials['Material.031']}
          position={[1.921, -2.98, -58.561]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.836}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_83.geometry}
          material={materials['Material.031']}
          position={[-3.345, -2.98, -26.06]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.742}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_84.geometry}
          material={materials['Material.031']}
          position={[16.953, -2.98, -4.063]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.454}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_85.geometry}
          material={materials['Material.031']}
          position={[-9.205, -2.98, -28.24]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.939}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_86.geometry}
          material={materials['Material.031']}
          position={[1.156, -2.98, -87.099]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.023}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_87.geometry}
          material={materials['Material.031']}
          position={[12.197, -2.98, -11.395]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.898}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_88.geometry}
          material={materials['Material.031']}
          position={[13.386, -2.98, -90.666]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.204}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_89.geometry}
          material={materials['Material.031']}
          position={[-14.131, -2.98, -47.662]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.062}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_90.geometry}
          material={materials['Material.031']}
          position={[-13.451, -2.98, -44.491]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.886}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_91.geometry}
          material={materials['Material.031']}
          position={[-11.753, -2.98, -55.589]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.455}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_92.geometry}
          material={materials['Material.031']}
          position={[-16.593, -2.98, -86.504]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.844}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_93.geometry}
          material={materials['Material.031']}
          position={[-7.251, -2.98, -46.671]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.118}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_94.geometry}
          material={materials['Material.031']}
          position={[1.581, -2.98, -45.878]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.035}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_95.geometry}
          material={materials['Material.031']}
          position={[12.452, -2.98, -46.274]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.636}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_96.geometry}
          material={materials['Material.031']}
          position={[-3.6, -2.98, -83.135]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.58}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_97.geometry}
          material={materials['Material.031']}
          position={[-7.506, -2.98, -2.279]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.838}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_98.geometry}
          material={materials['Material.031']}
          position={[-14.98, -2.98, -15.953]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.156}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_99.geometry}
          material={materials['Material.031']}
          position={[-3.769, -2.98, -95.818]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.962}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_100.geometry}
          material={materials['Material.031']}
          position={[6.762, -2.98, -10.603]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_101.geometry}
          material={materials['Material.031']}
          position={[16.698, -2.98, -29.429]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.416}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_102.geometry}
          material={materials['Material.031']}
          position={[14.575, -2.98, -97.602]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.115}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_103.geometry}
          material={materials['Material.031']}
          position={[-7.166, -2.98, -97.404]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.574}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_104.geometry}
          material={materials['Material.031']}
          position={[3.874, -2.98, -85.117]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.504}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_105.geometry}
          material={materials['Material.031']}
          position={[0.902, -2.98, -49.049]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.836}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_106.geometry}
          material={materials['Material.031']}
          position={[-11.668, -2.98, -4.856]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.383}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_107.geometry}
          material={materials['Material.031']}
          position={[13.726, -2.98, -65.894]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.207}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_108.geometry}
          material={materials['Material.031']}
          position={[2.26, -2.98, -52.22]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.899}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_109.geometry}
          material={materials['Material.031']}
          position={[3.11, -2.98, -28.042]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.766}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_110.geometry}
          material={materials['Material.031']}
          position={[-3.175, -2.98, -51.427]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.079}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_111.geometry}
          material={materials['Material.031']}
          position={[7.016, -2.98, -45.482]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.885}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_112.geometry}
          material={materials['Material.031']}
          position={[11.348, -2.98, -81.153]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.356}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_113.geometry}
          material={materials['Material.031']}
          position={[-6.657, -2.98, -68.866]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.981}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_114.geometry}
          material={materials['Material.031']}
          position={[13.556, -2.98, -14.566]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.673}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_115.geometry}
          material={materials['Material.031']}
          position={[-9.46, -2.98, -66.29]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.569}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_116.geometry}
          material={materials['Material.031']}
          position={[17.293, -2.98, 2.279]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.303}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_117.geometry}
          material={materials['Material.031']}
          position={[-3.684, -2.98, -32.402]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.883}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_118.geometry}
          material={materials['Material.031']}
          position={[-8.271, -2.98, -9.215]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_119.geometry}
          material={materials['Material.031']}
          position={[9.225, -2.98, -35.176]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.846}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_120.geometry}
          material={materials['Material.031']}
          position={[-0.033, -2.98, -12.584]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.444}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_121.geometry}
          material={materials['Material.031']}
          position={[-7.931, -2.98, -40.329]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_122.geometry}
          material={materials['Material.031']}
          position={[-13.791, -2.98, -60.345]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.078}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_123.geometry}
          material={materials['Material.031']}
          position={[5.488, -2.98, -16.944]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.942}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_124.geometry}
          material={materials['Material.031']}
          position={[-12.602, -2.98, -38.149]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.723}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_125.geometry}
          material={materials['Material.031']}
          position={[13.811, -2.98, -40.527]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.952}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_126.geometry}
          material={materials['Material.031']}
          position={[10.329, -2.98, -76.397]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.104}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_127.geometry}
          material={materials['Material.031']}
          position={[-2.071, -2.98, -3.072]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.663}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_128.geometry}
          material={materials['Material.031']}
          position={[2.176, -2.98, -77.586]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.845}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_129.geometry}
          material={materials['Material.031']}
          position={[-7.082, -2.98, -33.987]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.307}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_130.geometry}
          material={materials['Material.031']}
          position={[0.392, -2.98, -30.024]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.896}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_131.geometry}
          material={materials['Material.031']}
          position={[-6.317, -2.98, -81.55]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.773}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_132.geometry}
          material={materials['Material.031']}
          position={[16.274, -2.98, -11.99]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.657}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_133.geometry}
          material={materials['Material.031']}
          position={[6.252, -2.98, -74.019]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.561}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_134.geometry}
          material={materials['Material.031']}
          position={[4.384, -2.98, -94.629]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.571}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_135.geometry}
          material={materials['Material.031']}
          position={[4.554, -2.98, -81.946]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.326}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_136.geometry}
          material={materials['Material.031']}
          position={[16.868, -2.98, -54.796]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.045}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_137.geometry}
          material={materials['Material.031']}
          position={[11.263, -2.98, -30.42]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.585}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_138.geometry}
          material={materials['Material.031']}
          position={[7.781, -2.98, -1.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.942}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_139.geometry}
          material={materials['Material.031']}
          position={[-2.665, -2.98, -15.755]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.263}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_140.geometry}
          material={materials['Material.031']}
          position={[5.233, -2.98, -88.288]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.58}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_141.geometry}
          material={materials['Material.031']}
          position={[0.137, -2.98, -68.074]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.926}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_142.geometry}
          material={materials['Material.031']}
          position={[-13.536, -2.98, -69.857]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.872}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_143.geometry}
          material={materials['Material.031']}
          position={[-14.3, -2.98, -22.295]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.31}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_144.geometry}
          material={materials['Material.031']}
          position={[3.789, -2.98, -34.384]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.949}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_145.geometry}
          material={materials['Material.031']}
          position={[14.235, -2.98, -2.477]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.442}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_146.geometry}
          material={materials['Material.031']}
          position={[-4.619, -2.98, -73.623]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.774}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_147.geometry}
          material={materials['Material.031']}
          position={[16.783, -2.98, -80.162]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.187}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_148.geometry}
          material={materials['Material.031']}
          position={[-1.731, -2.98, -98.196]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.633}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_149.geometry}
          material={materials['Material.031']}
          position={[5.658, -2.98, -42.311]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.695}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_150.geometry}
          material={materials['Material.031']}
          position={[14.66, -2.98, -34.186]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.443}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_151.geometry}
          material={materials['Material.031']}
          position={[14.49, -2.98, -46.869]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.223}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_152.geometry}
          material={materials['Material.031']}
          position={[15, -2.98, -18.331]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.558}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_153.geometry}
          material={materials['Material.031']}
          position={[3.449, -2.98, -21.7]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.805}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_154.geometry}
          material={materials['Material.031']}
          position={[-3.43, -2.98, -7.035]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.703}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_155.geometry}
          material={materials['Material.031']}
          position={[11.857, -2.98, 1.288]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.372}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_156.geometry}
          material={materials['Material.031']}
          position={[-1.222, -2.98, -69.659]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.09}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_157.geometry}
          material={materials['Material.031']}
          position={[4.723, -2.98, -5.846]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.146}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_158.geometry}
          material={materials['Material.031']}
          position={[7.951, -2.98, -89.873]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.131}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_159.geometry}
          material={materials['Material.031']}
          position={[3.704, -2.98, -97.8]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.823}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_160.geometry}
          material={materials['Material.031']}
          position={[-7.336, -2.98, -72.037]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.898}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_161.geometry}
          material={materials['Material.031']}
          position={[-11.498, -2.98, -74.613]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.359}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_162.geometry}
          material={materials['Material.031']}
          position={[8.8, -2.98, -3.468]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.257}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_163.geometry}
          material={materials['Material.031']}
          position={[-11.413, -2.98, -49.247]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.44}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_164.geometry}
          material={materials['Material.031']}
          position={[-1.391, -2.98, -9.414]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.243}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_165.geometry}
          material={materials['Material.031']}
          position={[-10.649, -2.98, -96.809]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.412}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_166.geometry}
          material={materials['Material.031']}
          position={[-12.772, -2.98, -50.832]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.378}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_167.geometry}
          material={materials['Material.031']}
          position={[-9.969, -2.98, -1.685]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.905}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_168.geometry}
          material={materials['Material.031']}
          position={[16.019, -2.98, -37.356]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.076}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_169.geometry}
          material={materials['Material.031']}
          position={[11.093, -2.98, -43.103]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.46}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_170.geometry}
          material={materials['Material.031']}
          position={[10.838, -2.98, -12.981]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_171.geometry}
          material={materials['Material.031']}
          position={[8.12, -2.98, -13.773]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_172.geometry}
          material={materials['Material.031']}
          position={[-11.922, -2.98, -30.222]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.585}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_173.geometry}
          material={materials['Material.031']}
          position={[-9.629, -2.98, -14.368]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.146}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_174.geometry}
          material={materials['Material.031']}
          position={[-15.404, -2.98, -0.892]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.572}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_175.geometry}
          material={materials['Material.031']}
          position={[4.044, -2.98, -9.017]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.702}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_176.geometry}
          material={materials['Material.031']}
          position={[-1.646, -2.98, -34.78]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.932}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_177.geometry}
          material={materials['Material.031']}
          position={[16.189, -2.98, -62.723]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.619}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_178.geometry}
          material={materials['Material.031']}
          position={[5.827, -2.98, -29.628]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.431}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_179.geometry}
          material={materials['Material.031']}
          position={[0.817, -2.98, -74.415]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.346}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_180.geometry}
          material={materials['Material.031']}
          position={[16.443, -2.98, -67.479]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.706}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_181.geometry}
          material={materials['Material.031']}
          position={[-5.808, -2.98, 0.892]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.287}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_182.geometry}
          material={materials['Material.031']}
          position={[-14.725, -2.98, -92.053]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.179}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_183.geometry}
          material={materials['Material.031']}
          position={[-0.202, -2.98, -88.684]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.385}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_184.geometry}
          material={materials['Material.031']}
          position={[-5.723, -2.98, -37.158]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.791}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_185.geometry}
          material={materials['Material.031']}
          position={[9.564, -2.98, -19.322]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.535}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_186.geometry}
          material={materials['Material.031']}
          position={[-0.117, -2.98, -63.317]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.546}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_187.geometry}
          material={materials['Material.031']}
          position={[-2.75, -2.98, -13.377]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.391}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_188.geometry}
          material={materials['Material.031']}
          position={[-0.797, -2.98, -56.976]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_189.geometry}
          material={materials['Material.031']}
          position={[1.411, -2.98, -20.511]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.572}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_190.geometry}
          material={materials['Material.031']}
          position={[-9.544, -2.98, -15.557]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.496}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_191.geometry}
          material={materials['Material.031']}
          position={[6.082, -2.98, -4.261]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.135}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_192.geometry}
          material={materials['Material.031']}
          position={[-1.306, -2.98, -18.926]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_193.geometry}
          material={materials['Material.031']}
          position={[-10.903, -2.98, -20.71]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.871}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_194.geometry}
          material={materials['Material.031']}
          position={[1.836, -2.98, -83.928]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.051}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_195.geometry}
          material={materials['Material.031']}
          position={[-1.986, -2.98, -22.097]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.659}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_196.geometry}
          material={materials['Material.031']}
          position={[-10.818, -2.98, -71.443]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.697}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_197.geometry}
          material={materials['Material.031']}
          position={[-11.158, -2.98, -87.297]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.436}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_198.geometry}
          material={materials['Material.031']}
          position={[16.104, -2.98, -88.089]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.404}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_199.geometry}
          material={materials['Material.031']}
          position={[7.101, -2.98, -96.215]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.258}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Puddle.geometry}
        material={materials['Material.014']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence001.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence002.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence003.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence004.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence005.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence006.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence007.geometry}
        material={materials.Fence01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder001.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder002.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass_200.geometry}
        material={materials['Material.031']}
        position={[-16.335, -2.933, 2.618]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigArch.geometry}
        material={materials['Red.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RailroadLeft_1.geometry}
        material={materials['Wood.006']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RailroadLeft_2.geometry}
        material={materials['Metal.006']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RailroadRight_1.geometry}
        material={materials['Wood.006']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RailroadRight_2.geometry}
        material={materials['Metal.006']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchLeft_2.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchRight_1.geometry}
        material={materials['dark grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BenchRight_2.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WallBricks_1.geometry}
        material={materials['Red.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WallBricks_2.geometry}
        material={materials['Red_Dark.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WallBricks001_1.geometry}
        material={materials['Red.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WallBricks001_2.geometry}
        material={materials['Red_Dark.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CautionPanel.geometry}
        material={materials.sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CautionSign.geometry}
        material={materials.floor_is_wet_sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CautionLegs.geometry}
        material={materials.legs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone_1.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone_2.geometry}
        material={materials['Material.013']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone001_1.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone001_2.geometry}
        material={materials['Material.013']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone002_1.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone002_2.geometry}
        material={materials['Material.013']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone003_1.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone003_2.geometry}
        material={materials['Material.013']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CautionPanel001.geometry}
        material={materials['sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CautionSign001.geometry}
        material={materials['floor_is_wet_sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CautionLegs001.geometry}
        material={materials['legs.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gate_1.geometry}
        material={materials['Stone MAT Two']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gate_2.geometry}
        material={materials['Stone MAT 1']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gate_3.geometry}
        material={materials.PlateFormMAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trees_1.geometry}
        material={materials.look}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trees_2.geometry}
        material={materials['Material.031']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trees001_1.geometry}
        material={materials.look}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trees001_2.geometry}
        material={materials['Material.031']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights_1.geometry}
        material={materials.lamp}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights_2.geometry}
        material={materials.light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights001_1.geometry}
        material={materials.lamp}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights001_2.geometry}
        material={materials.light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights003_1.geometry}
        material={materials.lamp}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights003_2.geometry}
        material={materials.light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights002_1.geometry}
        material={materials.lamp}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLights002_2.geometry}
        material={materials.light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamps_1.geometry}
        material={materials.foco}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamps_2.geometry}
        material={materials.emission}
      />
    </group>
  )
}

useGLTF.preload('/LevelOneDraft600AALL.glb')

const WorldLevelOneWithPhysisc = withPhysics(WorldLevelOne)

export default WorldLevelOneWithPhysisc
