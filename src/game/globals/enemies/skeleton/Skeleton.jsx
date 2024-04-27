import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Skeleton(props) {
	const skeletonRef = useRef()
	const { nodes, materials, animations } = useGLTF('/assets/models/characters/enemies/Skeleton.glb')
	const { actions } = useAnimations(animations, skeletonRef)

	useEffect(() => {
		actions['SkeletonArmature|Skeleton_Running'].timeScale = 0.8
		if (props.action == 0) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['SkeletonArmature|Skeleton_Idle'].play()
		} else if (props.action == 1) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['SkeletonArmature|Skeleton_Running'].play()
		} else if (props.action == 2) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['SkeletonArmature|Skeleton_Attack'].play()
		} else if (props.action == 3) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['SkeletonArmature|Skeleton_Death'].play()
		}

	}, [actions, props.action])

	useFrame(({ clock }, delta) => {
		if (props.action == 1) {
			if (skeletonRef.current.position.z < Math.sin(clock.getElapsedTime()) * 3 + props.position[2]) {
				skeletonRef.current.rotation.y = 0
			} else {
				skeletonRef.current.rotation.y = Math.PI
			}
			skeletonRef.current.position.z = Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
		}
	})

	return (
		<group ref={skeletonRef} {...props} dispose={null} position={props.position} scale={0.25}>
			<group name="Root_Scene">
				<group name="RootNode">
					<group
						name="SkeletonArmature"
						position={[0.014, 1.355, 0.002]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}>
						<primitive object={nodes.Hips} />
					</group>
					<skinnedMesh
						name="Cylinder001"
						geometry={nodes.Cylinder001.geometry}
						material={materials.Skeleton}
						skeleton={nodes.Cylinder001.skeleton}
						position={[0, 3.003, 0.124]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/assets/models/characters/enemies/Skeleton.glb')
