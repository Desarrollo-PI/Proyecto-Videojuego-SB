import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function WorldLevelOne(props) {
  const { nodes, materials } = useGLTF('/assets/models/worldLevelOne/LevelOneDraft600A.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Floor.geometry} material={materials.Fence01} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.wallMaterial}
        position={[0, -2.98, 0]}
        scale={[3.4, 4, 1]}
      />
      <group position={[0, 0, -10]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.016, -0.479, 0]} scale={[1.254, 1.076, 1.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Roof.geometry}
              material={materials.Material}
              position={[0.113, 0, 0]}
              scale={[0.315, 0.191, 1]}
            />
          </group>
        </group>
      </group>
      <group position={[13, 6.335, -7]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
          position={[0, -6.4, 0]}
          scale={[2.838, 0.112, 9.757]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.001']}
          position={[0, -7.124, 7.975]}
          scale={[1.804, 0.719, 0.626]}
        />
        <group position={[0, -6.398, -7.019]} scale={[2.522, 0.334, 2.852]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={materials['Material.005']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Material.008']}
          position={[0, -6.4, 4.703]}
          scale={[1, 1, 1.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.007']}
          position={[0, -9.579, 1.048]}
          scale={[1, 1, 1.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['Material.007']}
          position={[0, -8.38, 6.389]}
          scale={[1, 1, 0.479]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.004']}
          position={[0, -3.189, 8.794]}
          scale={[0.557, 0.474, 0.353]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.004']}
          position={[0, -5.828, 9.794]}
          scale={[0.338, 0.287, 0.214]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.007']}
          position={[0, -6.694, 2.676]}
          scale={[1.038, 1, 4.835]}
        />
        <group position={[0, -7.906, 9.856]} scale={[2.093, 0.666, 0.419]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={materials['Material.009']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['Material.001']}
          position={[0, -1.816, -7.197]}
          scale={[2.789, 0.156, 3.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.001']}
          position={[0, -4.914, 2.278]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.802, 6.408, 1.802]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.008']}
          position={[0, -5.718, 8.212]}
          scale={[0.059, 0.547, 0.059]}
        />
        <group
          position={[0, -8.403, 5.44]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.035, 0.143, 1.035]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials['Material.006']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.009']}
          position={[0, -4.914, -0.758]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.879, 0.069, 1.879]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials['Material.003']}
          position={[0, -2.981, 7.539]}
          scale={[0.602, 0.63, 0.602]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['Material.001']}
          position={[0, -3.268, 6.11]}
          scale={[0.473, 0.688, 0.473]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['Material.011']}
          position={[0, -3.183, 9.007]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.386, 0.17, 0.386]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['Material.001']}
          position={[0, -2.32, 7.539]}
          scale={[0.391, 1.742, 0.391]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials['Material.001']}
          position={[0, -2.738, -1.217]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.738, 1.732, 0.738]}
        />
        <group
          position={[0, -5.783, 9.618]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.442, 0.17, 0.386]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_1.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_2.geometry}
            material={materials['Material.011']}
          />
        </group>
      </group>
      <group position={[-13, -2.98, -17]} rotation={[0, Math.PI / 2, 0]} scale={[0.25, 0.1, 1.5]}>
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
      </group>
      <group position={[13, -2.98, -17]} rotation={[0, Math.PI / 2, 0]} scale={[0.25, 0.1, 1.5]}>
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
      </group>
      <group position={[-13, 6.335, -88]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['Material.001']}
          position={[0, -1.816, -7.197]}
          scale={[2.789, 0.156, 3.2]}
        />
        <group position={[0, -7.906, 9.856]} scale={[2.093, 0.666, 0.419]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials['Material.009']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Material.007']}
          position={[0, -6.694, 2.676]}
          scale={[1.038, 1, 4.835]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['Material.004']}
          position={[0, -5.828, 9.794]}
          scale={[0.338, 0.287, 0.214]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['Material.004']}
          position={[0, -3.189, 8.794]}
          scale={[0.557, 0.474, 0.353]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['Material.007']}
          position={[0, -8.38, 6.389]}
          scale={[1, 1, 0.479]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['Material.007']}
          position={[0, -9.579, 1.048]}
          scale={[1, 1, 1.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['Material.008']}
          position={[0, -6.4, 4.703]}
          scale={[1, 1, 1.051]}
        />
        <group position={[0, -6.398, -7.019]} scale={[2.522, 0.334, 2.852]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials['Material.005']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials['Material.001']}
          position={[0, -7.124, 7.975]}
          scale={[1.804, 0.719, 0.626]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials['Material.001']}
          position={[0, -6.4, 0]}
          scale={[2.838, 0.112, 9.757]}
        />
        <group
          position={[0, -5.783, 9.618]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.442, 0.17, 0.386]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_2.geometry}
            material={materials['Material.011']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials['Material.001']}
          position={[0, -2.738, -1.217]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.738, 1.732, 0.738]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials['Material.001']}
          position={[0, -2.32, 7.539]}
          scale={[0.391, 1.742, 0.391]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials['Material.011']}
          position={[0, -3.183, 9.007]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.386, 0.17, 0.386]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials['Material.001']}
          position={[0, -3.268, 6.11]}
          scale={[0.473, 0.688, 0.473]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials['Material.003']}
          position={[0, -2.981, 7.539]}
          scale={[0.602, 0.63, 0.602]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials['Material.009']}
          position={[0, -4.914, -0.758]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.879, 0.069, 1.879]}
        />
        <group
          position={[0, -8.403, 5.44]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.035, 0.143, 1.035]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017_1.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017_2.geometry}
            material={materials['Material.006']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials['Material.008']}
          position={[0, -5.718, 8.212]}
          scale={[0.059, 0.547, 0.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials['Material.001']}
          position={[0, -4.914, 2.278]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.802, 6.408, 1.802]}
        />
      </group>
      <group position={[-1.9, 0.5, -25.4]} scale={0.2}>
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
      </group>
      <group position={[1.9, 0.5, -70.4]} rotation={[Math.PI, 0, Math.PI]} scale={0.2}>
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
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Railfloor001.geometry}
        material={materials['Material.017']}
        position={[-16.788, -2.98, 1.861]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass.geometry}
          material={materials['Material.031']}
          position={[33.929, 0, -28.991]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.209, 0.209, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_1.geometry}
          material={materials['Material.031']}
          position={[13.311, 0, -84.153]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.195, 0.195, 0.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_2.geometry}
          material={materials['Material.031']}
          position={[30.537, 0, -93.051]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.186, 0.186, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_3.geometry}
          material={materials['Material.031']}
          position={[9.562, 0, -50.937]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.266, 0.266, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_4.geometry}
          material={materials['Material.031']}
          position={[31.608, 0, -10.801]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.3, 0.3, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_5.geometry}
          material={materials['Material.031']}
          position={[8.134, 0, -54.892]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.279, 0.279, 0.084]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_6.geometry}
          material={materials['Material.031']}
          position={[4.296, 0, -18.512]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.267, 0.267, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_7.geometry}
          material={materials['Material.031']}
          position={[29.823, 0, -96.214]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.275, 0.275, 0.083]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_8.geometry}
          material={materials['Material.031']}
          position={[17.595, 0, -85.34]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.217, 0.217, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_9.geometry}
          material={materials['Material.031']}
          position={[23.129, 0, -60.823]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.172, 0.172, 0.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_10.geometry}
          material={materials['Material.031']}
          position={[21.969, 0, -92.457]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.152, 0.152, 0.046]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_11.geometry}
          material={materials['Material.031']}
          position={[8.491, 0, -48.565]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.251, 0.251, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_12.geometry}
          material={materials['Material.031']}
          position={[33.483, 0, -41.645]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.26, 0.26, 0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_13.geometry}
          material={materials['Material.031']}
          position={[14.56, 0, -62.009]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.193, 0.193, 0.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_14.geometry}
          material={materials['Material.031']}
          position={[12.597, 0, -77.827]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.217, 0.217, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_15.geometry}
          material={materials['Material.031']}
          position={[3.403, 0, -88.108]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.178, 0.178, 0.053]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_16.geometry}
          material={materials['Material.031']}
          position={[21.79, 0, -32.352]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.201, 0.201, 0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_17.geometry}
          material={materials['Material.031']}
          position={[29.377, 0, -64.58]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.245, 0.245, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_18.geometry}
          material={materials['Material.031']}
          position={[12.954, 0, -71.5]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.156, 0.156, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_19.geometry}
          material={materials['Material.031']}
          position={[0.458, 0, -93.841]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.299, 0.299, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_20.geometry}
          material={materials['Material.031']}
          position={[11.883, 0, -85.735]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.195, 0.195, 0.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_21.geometry}
          material={materials['Material.031']}
          position={[17.416, 0, -60.032]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.154, 0.154, 0.046]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_22.geometry}
          material={materials['Material.031']}
          position={[33.304, 0, -82.769]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.22, 0.22, 0.066]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_23.geometry}
          material={materials['Material.031']}
          position={[16.97, 0, -97.993]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.257, 0.257, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_24.geometry}
          material={materials['Material.031']}
          position={[3.225, 0, -82.374]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.211, 0.211, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_25.geometry}
          material={materials['Material.031']}
          position={[16.702, 0, -53.705]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.233, 0.233, 0.07]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_26.geometry}
          material={materials['Material.031']}
          position={[27.949, 0, -66.161]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.161, 0.161, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_27.geometry}
          material={materials['Material.031']}
          position={[7.063, 0, -45.401]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.189, 0.189, 0.057]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_28.geometry}
          material={materials['Material.031']}
          position={[32.233, 0, -63.789]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.167, 0.167, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_29.geometry}
          material={materials['Material.031']}
          position={[20.005, 0, -23.653]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.155, 0.155, 0.046]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_30.geometry}
          material={materials['Material.031']}
          position={[25.45, 0, -81.385]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.185, 0.185, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_31.geometry}
          material={materials['Material.031']}
          position={[-0.97, 0, -90.678]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.286, 0.286, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_32.geometry}
          material={materials['Material.031']}
          position={[31.251, 0, -99.377]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.203, 0.203, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_33.geometry}
          material={materials['Material.031']}
          position={[24.468, 0, -8.627]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.167, 0.167, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_34.geometry}
          material={materials['Material.031']}
          position={[14.114, 0, -99.97]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.288, 0.288, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_35.geometry}
          material={materials['Material.031']}
          position={[2.421, 0, -25.432]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.183, 0.183, 0.055]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_36.geometry}
          material={materials['Material.031']}
          position={[5.188, 0, -2.695]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.2, 0.2, 0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_37.geometry}
          material={materials['Material.031']}
          position={[29.109, 0, -89.887]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.19, 0.19, 0.057]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_38.geometry}
          material={materials['Material.031']}
          position={[14.382, 0, -74.663]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.194, 0.194, 0.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_39.geometry}
          material={materials['Material.031']}
          position={[14.65, 0, -36.702]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.249, 0.249, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_40.geometry}
          material={materials['Material.031']}
          position={[4.474, 0, -5.859]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.179, 0.179, 0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_41.geometry}
          material={materials['Material.031']}
          position={[19.112, 0, -93.248]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.206, 0.206, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_42.geometry}
          material={materials['Material.031']}
          position={[12.24, 0, -65.173]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.171, 0.171, 0.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_43.geometry}
          material={materials['Material.031']}
          position={[34.732, 0, -85.933]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.187, 0.187, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_44.geometry}
          material={materials['Material.031']}
          position={[26.521, 0, -62.998]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.285, 0.285, 0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_45.geometry}
          material={materials['Material.031']}
          position={[7.598, 0, -83.363]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.179, 0.179, 0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_46.geometry}
          material={materials['Material.031']}
          position={[30.805, 0, -67.743]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.207, 0.207, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_47.geometry}
          material={materials['Material.031']}
          position={[20.273, 0, -61.614]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.18, 0.18, 0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_48.geometry}
          material={materials['Material.031']}
          position={[6.884, 0, -77.036]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.272, 0.272, 0.081]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_49.geometry}
          material={materials['Material.031']}
          position={[18.845, 0, -58.451]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.241, 0.241, 0.072]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_50.geometry}
          material={materials['Material.031']}
          position={[32.59, 0, -76.443]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.289, 0.289, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_51.geometry}
          material={materials['Material.031']}
          position={[6.438, 0, -13.767]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.17, 0.17, 0.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_52.geometry}
          material={materials['Material.031']}
          position={[16.256, 0, -91.667]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.292, 0.292, 0.088]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_53.geometry}
          material={materials['Material.031']}
          position={[11.793, 0, -35.12]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.294, 0.294, 0.088]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_54.geometry}
          material={materials['Material.031']}
          position={[6.349, 0, -39.075]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.156, 0.156, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_55.geometry}
          material={materials['Material.031']}
          position={[24.736, 0, -84.549]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.171, 0.171, 0.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_56.geometry}
          material={materials['Material.031']}
          position={[26.61, 0, 0.271]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.226, 0.226, 0.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_57.geometry}
          material={materials['Material.031']}
          position={[0.636, 0, -17.919]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.261, 0.261, 0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_58.geometry}
          material={materials['Material.031']}
          position={[23.932, 0, -27.607]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.254, 0.254, 0.076]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_59.geometry}
          material={materials['Material.031']}
          position={[1.618, 0, -62.207]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.185, 0.185, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_60.geometry}
          material={materials['Material.031']}
          position={[17.506, 0, -34.725]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.217, 0.217, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_61.geometry}
          material={materials['Material.031']}
          position={[8.312, 0, -80.199]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.27, 0.27, 0.081]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_62.geometry}
          material={materials['Material.031']}
          position={[20.808, 0, -63.987]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.239, 0.239, 0.072]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_63.geometry}
          material={materials['Material.031']}
          position={[23.04, 0, -10.208]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.209, 0.209, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_64.geometry}
          material={materials['Material.031']}
          position={[14.739, 0, -87.317]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.25, 0.25, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_65.geometry}
          material={materials['Material.031']}
          position={[22.415, 0, -54.496]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.234, 0.234, 0.07]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_66.geometry}
          material={materials['Material.031']}
          position={[2.243, 0, -0.125]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.198, 0.198, 0.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_67.geometry}
          material={materials['Material.031']}
          position={[-0.346, 0, -78.024]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.212, 0.212, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_68.geometry}
          material={materials['Material.031']}
          position={[32.858, 0, -19.501]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.231, 0.231, 0.069]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_69.geometry}
          material={materials['Material.031']}
          position={[18.22, 0, -26.816]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.204, 0.204, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_70.geometry}
          material={materials['Material.031']}
          position={[5.992, 0, -59.637]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.227, 0.227, 0.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_71.geometry}
          material={materials['Material.031']}
          position={[2.868, 0, -69.72]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.181, 0.181, 0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_72.geometry}
          material={materials['Material.031']}
          position={[28.663, 0, -72.488]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.205, 0.205, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_73.geometry}
          material={materials['Material.031']}
          position={[4.653, 0, -31.166]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.247, 0.247, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_74.geometry}
          material={materials['Material.031']}
          position={[0.993, 0, -30.573]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.208, 0.208, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_75.geometry}
          material={materials['Material.031']}
          position={[16.078, 0, -31.561]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.208, 0.208, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_76.geometry}
          material={materials['Material.031']}
          position={[14.471, 0, -11.395]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.193, 0.193, 0.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_77.geometry}
          material={materials['Material.031']}
          position={[21.076, 0, -26.025]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.286, 0.286, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_78.geometry}
          material={materials['Material.031']}
          position={[25.093, 0, -68.732]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.161, 0.161, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_79.geometry}
          material={materials['Material.031']}
          position={[0.547, 0, -43.227]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.155, 0.155, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_80.geometry}
          material={materials['Material.031']}
          position={[18.398, 0, -96.412]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.237, 0.237, 0.071]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_81.geometry}
          material={materials['Material.031']}
          position={[25.271, 0, -56.078]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.188, 0.188, 0.057]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_82.geometry}
          material={materials['Material.031']}
          position={[16.167, 0, -82.176]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.203, 0.203, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_83.geometry}
          material={materials['Material.031']}
          position={[17.684, 0, -90.085]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.199, 0.199, 0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_84.geometry}
          material={materials['Material.031']}
          position={[23.843, 0, -52.915]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.172, 0.172, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_85.geometry}
          material={materials['Material.031']}
          position={[20.54, 0, -89.294]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.257, 0.257, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_86.geometry}
          material={materials['Material.031']}
          position={[30.091, 0, -70.907]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.28, 0.28, 0.084]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_87.geometry}
          material={materials['Material.031']}
          position={[29.288, 0, -13.965]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.202, 0.202, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_88.geometry}
          material={materials['Material.031']}
          position={[22.772, 0, -48.169]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.262, 0.262, 0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_89.geometry}
          material={materials['Material.031']}
          position={[20.987, 0, -51.333]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.218, 0.218, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_90.geometry}
          material={materials['Material.031']}
          position={[19.826, 0, -99.575]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.171, 0.171, 0.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_91.geometry}
          material={materials['Material.031']}
          position={[28.127, 0, -53.508]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.269, 0.269, 0.081]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_92.geometry}
          material={materials['Material.031']}
          position={[34.643, 0, -35.318]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.277, 0.277, 0.083]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_93.geometry}
          material={materials['Material.031']}
          position={[13.757, 0, -5.068]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.158, 0.158, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_94.geometry}
          material={materials['Material.031']}
          position={[11.526, 0, -73.081]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.189, 0.189, 0.057]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_95.geometry}
          material={materials['Material.031']}
          position={[33.126, 0, -57.462]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.215, 0.215, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_96.geometry}
          material={materials['Material.031']}
          position={[3.85, 0, -50.147]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.237, 0.237, 0.071]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_97.geometry}
          material={materials['Material.031']}
          position={[2.778, 0, -19.105]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.284, 0.284, 0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_98.geometry}
          material={materials['Material.031']}
          position={[5.635, 0, -46.983]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.271, 0.271, 0.081]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_99.geometry}
          material={materials['Material.031']}
          position={[15.81, 0, -69.523]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.255, 0.255, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_100.geometry}
          material={materials['Material.031']}
          position={[17.952, 0, -64.777]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.257, 0.257, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_101.geometry}
          material={materials['Material.031']}
          position={[25.717, 0, -24.444]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.216, 0.216, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_102.geometry}
          material={materials['Material.031']}
          position={[-0.613, 0, -2.102]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.193, 0.193, 0.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_103.geometry}
          material={materials['Material.031']}
          position={[6.706, 0, -51.728]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.3, 0.3, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_104.geometry}
          material={materials['Material.031']}
          position={[28.752, 0, -9.22]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.181, 0.181, 0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_105.geometry}
          material={materials['Material.031']}
          position={[6.527, 0, -64.382]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.249, 0.249, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_106.geometry}
          material={materials['Material.031']}
          position={[11.258, 0, -98.389]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.264, 0.264, 0.079]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_107.geometry}
          material={materials['Material.031']}
          position={[19.469, 0, -4.672]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.25, 0.25, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_108.geometry}
          material={materials['Material.031']}
          position={[17.149, 0, -22.071]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.28, 0.28, 0.084]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_109.geometry}
          material={materials['Material.031']}
          position={[33.393, 0, -92.26]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.161, 0.161, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_110.geometry}
          material={materials['Material.031']}
          position={[31.073, 0, -29.782]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.238, 0.238, 0.071]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_111.geometry}
          material={materials['Material.031']}
          position={[3.76, 0, 0.468]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.282, 0.282, 0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_112.geometry}
          material={materials['Material.031']}
          position={[32.501, 0, -25.828]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.188, 0.188, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_113.geometry}
          material={materials['Material.031']}
          position={[15.988, 0, -56.869]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.292, 0.292, 0.088]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_114.geometry}
          material={materials['Material.031']}
          position={[23.486, 0, -40.261]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.169, 0.169, 0.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_115.geometry}
          material={materials['Material.031']}
          position={[6.616, 0, -1.113]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.226, 0.226, 0.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_116.geometry}
          material={materials['Material.031']}
          position={[30.269, 0, -58.253]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.218, 0.218, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_117.geometry}
          material={materials['Material.031']}
          position={[0.279, 0, -33.736]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.235, 0.235, 0.07]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_118.geometry}
          material={materials['Material.031']}
          position={[21.701, 0, -57.66]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.246, 0.246, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_119.geometry}
          material={materials['Material.031']}
          position={[1.886, 0, -88.701]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.207, 0.207, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_120.geometry}
          material={materials['Material.031']}
          position={[26.967, 0, -94.632]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.291, 0.291, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_121.geometry}
          material={materials['Material.031']}
          position={[5.278, 0, -53.31]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.257, 0.257, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_122.geometry}
          material={materials['Material.031']}
          position={[9.205, 0, -38.284]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.212, 0.212, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_123.geometry}
          material={materials['Material.031']}
          position={[31.34, 0, -48.763]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.286, 0.286, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_124.geometry}
          material={materials['Material.031']}
          position={[4.117, 0, -94.435]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.249, 0.249, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_125.geometry}
          material={materials['Material.031']}
          position={[2.154, 0, -63.393]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.22, 0.22, 0.066]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_126.geometry}
          material={materials['Material.031']}
          position={[29.645, 0, -26.619]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.238, 0.238, 0.071]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_127.geometry}
          material={materials['Material.031']}
          position={[28.395, 0, -97.796]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.29, 0.29, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_128.geometry}
          material={materials['Material.031']}
          position={[16.881, 0, -79.013]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.242, 0.242, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_129.geometry}
          material={materials['Material.031']}
          position={[29.02, 0, -85.142]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.225, 0.225, 0.067]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_130.geometry}
          material={materials['Material.031']}
          position={[10.722, 0, -16.14]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.289, 0.289, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_131.geometry}
          material={materials['Material.031']}
          position={[22.861, 0, -22.862]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.267, 0.267, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_132.geometry}
          material={materials['Material.031']}
          position={[9.83, 0, -95.225]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.177, 0.177, 0.053]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_133.geometry}
          material={materials['Material.031']}
          position={[15.721, 0, -18.908]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.211, 0.211, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_134.geometry}
          material={materials['Material.031']}
          position={[34.464, 0, -10.011]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.214, 0.214, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_135.geometry}
          material={materials['Material.031']}
          position={[31.965, 0, -89.096]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.216, 0.216, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_136.geometry}
          material={materials['Material.031']}
          position={[19.737, 0, -80.595]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.233, 0.233, 0.07]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_137.geometry}
          material={materials['Material.031']}
          position={[12.329, 0, -1.904]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.273, 0.273, 0.082]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_138.geometry}
          material={materials['Material.031']}
          position={[17.327, 0, -9.417]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.166, 0.166, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_139.geometry}
          material={materials['Material.031']}
          position={[9.473, 0, -0.323]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.297, 0.297, 0.089]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_140.geometry}
          material={materials['Material.031']}
          position={[34.375, 0, -73.279]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.208, 0.208, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_141.geometry}
          material={materials['Material.031']}
          position={[0.726, 0, -68.534]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.259, 0.259, 0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_142.geometry}
          material={materials['Material.031']}
          position={[-0.703, 0, -65.371]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.19, 0.19, 0.057]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_143.geometry}
          material={materials['Material.031']}
          position={[30.448, 0, -83.56]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.271, 0.271, 0.081]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_144.geometry}
          material={materials['Material.031']}
          position={[2.332, 0, -50.74]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.162, 0.162, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_145.geometry}
          material={materials['Material.031']}
          position={[8.937, 0, -35.911]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.211, 0.211, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_146.geometry}
          material={materials['Material.031']}
          position={[32.144, 0, -13.174]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.26, 0.26, 0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_147.geometry}
          material={materials['Material.031']}
          position={[12.418, 0, -52.519]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.273, 0.273, 0.082]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_148.geometry}
          material={materials['Material.031']}
          position={[13.578, 0, -17.721]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.283, 0.283, 0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_149.geometry}
          material={materials['Material.031']}
          position={[12.15, 0, -14.558]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.205, 0.205, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_150.geometry}
          material={materials['Material.031']}
          position={[33.036, 0, -6.847]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.276, 0.276, 0.083]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_151.geometry}
          material={materials['Material.031']}
          position={[2.6, 0, -95.028]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.285, 0.285, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_152.geometry}
          material={materials['Material.031']}
          position={[30.626, 0, -42.436]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.248, 0.248, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_153.geometry}
          material={materials['Material.031']}
          position={[30.716, 0, -17.128]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.252, 0.252, 0.076]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_154.geometry}
          material={materials['Material.031']}
          position={[13.935, 0, -30.375]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.212, 0.212, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_155.geometry}
          material={materials['Material.031']}
          position={[13.221, 0, -33.539]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.259, 0.259, 0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_156.geometry}
          material={materials['Material.031']}
          position={[13.668, 0, -68.336]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.221, 0.221, 0.066]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_157.geometry}
          material={materials['Material.031']}
          position={[8.045, 0, -4.277]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.199, 0.199, 0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_158.geometry}
          material={materials['Material.031']}
          position={[5.367, 0, -28.003]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.222, 0.222, 0.066]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_159.geometry}
          material={materials['Material.031']}
          position={[8.669, 0, -73.872]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.206, 0.206, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_160.geometry}
          material={materials['Material.031']}
          position={[14.025, 0, -80.99]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.201, 0.201, 0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_161.geometry}
          material={materials['Material.031']}
          position={[7.866, 0, -16.931]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.198, 0.198, 0.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_162.geometry}
          material={materials['Material.031']}
          position={[27.413, 0, -56.671]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.252, 0.252, 0.076]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_163.geometry}
          material={materials['Material.031']}
          position={[10.097, 0, -69.918]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.227, 0.227, 0.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_164.geometry}
          material={materials['Material.031']}
          position={[31.43, 0, -23.455]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.288, 0.288, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_165.geometry}
          material={materials['Material.031']}
          position={[34.018, 0, -79.606]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.185, 0.185, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_166.geometry}
          material={materials['Material.031']}
          position={[24.646, 0, -33.934]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.272, 0.272, 0.082]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_167.geometry}
          material={materials['Material.031']}
          position={[13.043, 0, -8.231]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.245, 0.245, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_168.geometry}
          material={materials['Material.031']}
          position={[28.038, 0, -2.893]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.285, 0.285, 0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_169.geometry}
          material={materials['Material.031']}
          position={[19.648, 0, -29.98]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.254, 0.254, 0.076]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_170.geometry}
          material={materials['Material.031']}
          position={[8.848, 0, -61.219]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.177, 0.177, 0.053]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_171.geometry}
          material={materials['Material.031']}
          position={[16.435, 0, -15.744]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.184, 0.184, 0.055]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_172.geometry}
          material={materials['Material.031']}
          position={[18.577, 0, -20.489]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.159, 0.159, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_173.geometry}
          material={materials['Material.031']}
          position={[1.975, 0, -38.086]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.283, 0.283, 0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_174.geometry}
          material={materials['Material.031']}
          position={[29.198, 0, -39.272]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.25, 0.25, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_175.geometry}
          material={materials['Material.031']}
          position={[25.896, 0, -11.79]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.263, 0.263, 0.079]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_176.geometry}
          material={materials['Material.031']}
          position={[16.345, 0, -41.052]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.29, 0.29, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_177.geometry}
          material={materials['Material.031']}
          position={[28.931, 0, -34.527]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.211, 0.211, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_178.geometry}
          material={materials['Material.031']}
          position={[26.431, 0, -12.383]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.229, 0.229, 0.069]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_179.geometry}
          material={materials['Material.031']}
          position={[10.008, 0, -19.303]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.257, 0.257, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_180.geometry}
          material={materials['Material.031']}
          position={[8.759, 0, -10.604]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.288, 0.288, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_181.geometry}
          material={materials['Material.031']}
          position={[13.846, 0, -55.683]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.166, 0.166, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_182.geometry}
          material={materials['Material.031']}
          position={[19.559, 0, -55.287]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.23, 0.23, 0.069]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_183.geometry}
          material={materials['Material.031']}
          position={[17.059, 0, -47.379]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.178, 0.178, 0.053]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_184.geometry}
          material={materials['Material.031']}
          position={[3.671, 0, -62.8]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.215, 0.215, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_185.geometry}
          material={materials['Material.031']}
          position={[0.19, 0, -59.044]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.221, 0.221, 0.066]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_186.geometry}
          material={materials['Material.031']}
          position={[26.878, 0, -75.652]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.157, 0.157, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_187.geometry}
          material={materials['Material.031']}
          position={[5.456, 0, -78.617]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.182, 0.182, 0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_188.geometry}
          material={materials['Material.031']}
          position={[24.557, 0, -59.241]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.239, 0.239, 0.072]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_189.geometry}
          material={materials['Material.031']}
          position={[26.164, 0, -87.712]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.23, 0.23, 0.069]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_190.geometry}
          material={materials['Material.031']}
          position={[29.734, 0, -77.233]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.232, 0.232, 0.07]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_191.geometry}
          material={materials['Material.031']}
          position={[22.683, 0, -98.784]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.186, 0.186, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_192.geometry}
          material={materials['Material.031']}
          position={[5.902, 0, -9.022]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.174, 0.174, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_193.geometry}
          material={materials['Material.031']}
          position={[33.215, 0, -32.155]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.265, 0.265, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_194.geometry}
          material={materials['Material.031']}
          position={[33.661, 0, -66.952]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.204, 0.204, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_195.geometry}
          material={materials['Material.031']}
          position={[-0.881, 0, -40.063]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.197, 0.197, 0.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_196.geometry}
          material={materials['Material.031']}
          position={[33.84, 0, -54.299]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.224, 0.224, 0.067]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_197.geometry}
          material={materials['Material.031']}
          position={[7.42, 0, -58.055]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.21, 0.21, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_198.geometry}
          material={materials['Material.031']}
          position={[14.293, 0, -24.048]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.226, 0.226, 0.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass_199.geometry}
          material={materials['Material.031']}
          position={[19.38, 0, -67.941]}
          rotation={[-1.177, -1.427, -1.134]}
          scale={[0.217, 0.217, 0.065]}
        />
      </mesh>
      <group position={[-1.663, 0.956, 0.805]}>
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
      </group>
      <group position={[-1.663, 0.956, -96.715]}>
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
      </group>
      <group position={[0, 0, -45.723]} rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, -0.001]}>
            <group
              position={[0, 157.5, 49.999]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[100, 10, 157.5]}>
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
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CautionLegs.geometry}
              material={materials.legs}
              position={[0, 157.5, 49.999]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[100, 10, 157.5]}
            />
          </group>
        </group>
      </group>
      <group position={[1.029, 0, -45.775]} scale={0.2}>
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
      </group>
      <group position={[-0.971, 0, -45.775]} scale={0.2}>
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
      </group>
      <group position={[-0.971, 0, -49.775]} scale={0.2}>
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
      </group>
      <group position={[1.029, 0, -49.775]} scale={0.2}>
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
      </group>
      <group position={[0, 0, -49.723]} rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 157.5, 50]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 10, 157.5]}>
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
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CautionLegs001.geometry}
            material={materials['legs.001']}
            position={[0, 157.5, 50]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 10, 157.5]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Puddle.geometry}
        material={materials['Material.014']}
        position={[0, 0.001, -47.537]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence.geometry}
        material={materials.Fence01}
        position={[-3.855, 0, -26]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence001.geometry}
        material={materials.Fence01}
        position={[4.2, 0, -2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence002.geometry}
        material={materials.Fence01}
        position={[4.2, 0, -50]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence003.geometry}
        material={materials.Fence01}
        position={[4.2, 0, -74]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence004.geometry}
        material={materials.Fence01}
        position={[-3.855, 0, -50]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence005.geometry}
        material={materials.Fence01}
        position={[-3.855, 0, -74]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence006.geometry}
        material={materials.Fence01}
        position={[-8.901, 0, -23.467]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence007.geometry}
        material={materials.Fence01}
        position={[4.821, 0, -47.317]}
      />
      <group position={[1.707, 1.073, -94.235]} rotation={[0, 0, -1.309]} scale={0.476}>
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
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder.geometry}
        material={materials.brown}
        position={[-10.132, -2.986, -10]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 0.32, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder001.geometry}
        material={materials.brown}
        position={[10.3, -2.986, -40]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 0.32, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder002.geometry}
        material={materials.brown}
        position={[-8.364, -2.986, -53.515]}
        rotation={[0, 0.873, 0]}
        scale={[1, 0.32, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass_200.geometry}
        material={materials['Material.031']}
        position={[-11.292, -3.184, 0.383]}
        rotation={[-1.177, -1.427, -1.134]}
        scale={[0.1, 0.1, 0.03]}
      />
      <group position={[-8.526, -2.98, -59.105]} scale={[0.4, 0.3, 0.4]}>
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
      </group>
      <group position={[8.526, -2.98, -59.105]} scale={[0.4, 0.3, 0.4]}>
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
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[5.035, 5.79, 3.552]}
      />
      <group position={[-8.635, 0.871, 1.654]} scale={[0.3, 1, 0.3]}>
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
      </group>
      <group position={[8.635, 0.871, -95]} scale={[0.3, 1, 0.3]}>
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
      </group>
      <group position={[-8.635, 0.871, -95]} scale={[0.3, 1, 0.3]}>
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
      </group>
      <group position={[8.635, 0.871, 1.654]} scale={[0.3, 1, 0.3]}>
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
      </group>
      <group position={[-0.012, 6.561, -10.185]} scale={[1, 0.2, 1]}>
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
      <group position={[0.016, -0.479, 0]} scale={[1.254, 1.076, 1.15]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BigArch.geometry}
          material={materials['Red.001']}
          position={[0.113, 0, 0]}
          scale={[0.315, 0.191, 1]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/LevelOneDraft600A.glb')
