import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Goblin(props) {
	const goblinRef = useRef()
	const { nodes, materials, animations } = useGLTF('/assets/models/characters/enemies/Goblin.glb')
	const { actions } = useAnimations(animations, goblinRef)

	useEffect(() => {
		if (props.action == 0) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['EnemyArmature|EnemyArmature|EnemyArmature|Idle'].play()
		} else if (props.action == 1) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['EnemyArmature|EnemyArmature|EnemyArmature|Walk'].play()
		} else if (props.action == 2) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack'].play()
		}
		
	}, [actions, props.action])

	useFrame(({ clock }, delta) => {
		if (props.action == 1) {
			if (goblinRef.current.position.z < Math.sin(clock.getElapsedTime()) * 3 + props.position[2]) {
				goblinRef.current.rotation.y = 0
			} else {
				goblinRef.current.rotation.y = Math.PI
			}
			goblinRef.current.position.z = Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
		}
	})

	return (
		<group ref={goblinRef} {...props} dispose={null} position={props.position} scale={0.5}>
			<group name="Root_Scene">
				<group name="RootNode">
					<group name="EnemyArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<primitive object={nodes.Root} />
					</group>
					<skinnedMesh
						name="Goblin"
						geometry={nodes.Goblin.geometry}
						material={materials.Atlas}
						skeleton={nodes.Goblin.skeleton}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={147.976}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/assets/models/characters/enemies/Goblin.glb')
