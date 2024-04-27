import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Spider(props) {
	const spiderRef = useRef()
	const { nodes, materials, animations } = useGLTF('/assets/models/characters/enemies/Spider.glb')
	const { actions } = useAnimations(animations, spiderRef)

	useEffect(() => {
		if (props.action == 0) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['SpiderArmature|Spider_Idle'].play()
		} else if (props.action == 1) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['SpiderArmature|Spider_Walk'].play()
		} else if (props.action == 2) {
			Object.values(actions).forEach((action) => {
				action.stop();
			});
			actions['SpiderArmature|Spider_Attack'].play()
		}

	}, [actions, props.action])

	useFrame(({ clock }, delta) => {
		if (props.action == 1) {
			if (spiderRef.current.position.z < Math.sin(clock.getElapsedTime()) * 3 + props.position[2]) {
				spiderRef.current.rotation.y = 0
			} else {
				spiderRef.current.rotation.y = Math.PI
			}
			spiderRef.current.position.z = Math.sin(clock.getElapsedTime()) * 3 + props.position[2]
		}
	})

	return (
		<group ref={spiderRef} {...props} dispose={null} position={props.position} scale={0.9}>
			<group name="Root_Scene">
				<group name="RootNode">
					<group name="SpiderArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<primitive object={nodes.Root} />
					</group>
					<group name="Cube" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<skinnedMesh
							name="Cube_1"
							geometry={nodes.Cube_1.geometry}
							material={materials.Material}
							skeleton={nodes.Cube_1.skeleton}
						/>
						<skinnedMesh
							name="Cube_2"
							geometry={nodes.Cube_2.geometry}
							material={materials['Material.001']}
							skeleton={nodes.Cube_2.skeleton}
						/>
					</group>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/assets/models/characters/enemies/Spider.glb')
