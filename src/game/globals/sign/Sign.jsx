import React, { useEffect, useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Sign = (props) => {
    const {numberSign, handleOnTakeSign, dialogs} = props
    
    const { nodes, materials } = useGLTF('/assets/models/elements/Sign.glb')

    const refSign = useRef()

    const [isInRange, setIsInRange] = useState(false)

    //Aqui creo que debo cambiar algo
    useEffect(() => {
        window.addEventListener('keydown', onTakeSign)
        return () => {
            window.removeEventListener('keydown', onTakeSign)
        }
    }, [isInRange])

    const onEnterCollisionSign = (e) => {
        if (e.rigidBodyObject.name === 'playerBody') {
            dialogs.handleOpenDialogInRange()
            setIsInRange(true)
        }
    }

    const onExitCollisionSign = (e) => {
        if (e.rigidBodyObject.name === 'playerBody') {
            dialogs.closeDialog()
            setIsInRange(false)
        }
    }

    const onTakeSign = (event) => {
        if (event.keyCode === 69 && isInRange) {
            dialogs.closeDialog()
            setIsInRange(true)
            dialogs.handleOnTakeSign(numberSign)
        }
    }

    return (
        <RigidBody 
        colliders="cuboid"
        type='fixed'
        onCollisionEnter={onEnterCollisionSign} onCollisionExit={onExitCollisionSign} 
        ref={refSign}
        {...props}
        >
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sign_1.geometry}
                material={materials['Material.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sign_2.geometry}
                material={materials['Dark Wood']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sign_3.geometry}
                material={materials['Light Wood']}
                />
    </RigidBody>
    )
}

export default Sign
// useGLTF.preload('/Sign.glb')