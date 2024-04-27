import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SkeletonMage(props) {
	const skeletonMageRef = useRef()
	const { nodes, materials, animations } = useGLTF('/assets/models/characters/enemies/SkeletonMage.glb')
	const { actions } = useAnimations(animations, skeletonMageRef)

	useEffect(() => {
		actions['Running_A'].timeScale = 0.8
		if (props.action == 0) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['Idle'].play()
		} else if (props.action == 1) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['Running_A'].play()
		} else if (props.action == 2) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['1H_Ranged_Shooting'].play()
		} else if (props.action == 3) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['Death_A'].play()
		}

	}, [actions, props.action])

	useFrame(({ clock }, delta) => {
		if (props.action == 1) {
			if (skeletonMageRef.current.position.z < Math.sin(clock.getElapsedTime()) * 3 + props.position[2]) {
				skeletonMageRef.current.rotation.y = 0
			} else {
				skeletonMageRef.current.rotation.y = Math.PI
			}
			skeletonMageRef.current.position.z = Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
		}
	})

	return (
		<group ref={skeletonMageRef} {...props} dispose={null} position={props.position} scale={0.7}>
			<group name="Root_Scene">
				<group name="RootNode">
					<group name="Rig" scale={100}>
						<primitive object={nodes.root} />
					</group>
					<skinnedMesh
						name="Skeleton_Mage_ArmLeft"
						geometry={nodes.Skeleton_Mage_ArmLeft.geometry}
						material={materials.skeleton}
						skeleton={nodes.Skeleton_Mage_ArmLeft.skeleton}
						scale={100}
					/>
					<skinnedMesh
						name="Skeleton_Mage_ArmRight"
						geometry={nodes.Skeleton_Mage_ArmRight.geometry}
						material={materials.skeleton}
						skeleton={nodes.Skeleton_Mage_ArmRight.skeleton}
						scale={100}
					/>
					<skinnedMesh
						name="Skeleton_Mage_Body"
						geometry={nodes.Skeleton_Mage_Body.geometry}
						material={materials.skeleton}
						skeleton={nodes.Skeleton_Mage_Body.skeleton}
						scale={100}
					/>
					<skinnedMesh
						name="Skeleton_Mage_Eyes"
						geometry={nodes.Skeleton_Mage_Eyes.geometry}
						material={materials.Glow}
						skeleton={nodes.Skeleton_Mage_Eyes.skeleton}
						position={[0, 1.216, 0]}
						scale={100}
					/>
					<skinnedMesh
						name="Skeleton_Mage_Jaw"
						geometry={nodes.Skeleton_Mage_Jaw.geometry}
						material={materials.skeleton}
						skeleton={nodes.Skeleton_Mage_Jaw.skeleton}
						position={[0, 1.312, -0.033]}
						scale={100}
					/>
					<skinnedMesh
						name="Skeleton_Mage_LegLeft"
						geometry={nodes.Skeleton_Mage_LegLeft.geometry}
						material={materials.skeleton}
						skeleton={nodes.Skeleton_Mage_LegLeft.skeleton}
						scale={100}
					/>
					<skinnedMesh
						name="Skeleton_Mage_LegRight"
						geometry={nodes.Skeleton_Mage_LegRight.geometry}
						material={materials.skeleton}
						skeleton={nodes.Skeleton_Mage_LegRight.skeleton}
						scale={100}
					/>
					<skinnedMesh
						name="Skeleton_Mage_Skull"
						geometry={nodes.Skeleton_Mage_Skull.geometry}
						material={materials.skeleton}
						skeleton={nodes.Skeleton_Mage_Skull.skeleton}
						position={[0, 1.216, 0]}
						scale={100}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/assets/models/characters/enemies/SkeletonMage.glb')
