import React, { useEffect, useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Checkpoint = (props) => {
  const { numberCheckpoint, itsTaken, handleOnTakeCheckpoint, dialogs } = props

  const { nodes, materials } = useGLTF(
    '/assets/models/checkpoints/Checkpoint.glb'
  )

  const refCheckpoint = useRef()

  const [isInRange, setIsInRange] = useState(false)

  useEffect(() => {
    window.addEventListener('keydown', onTakeCheckpoint)
    return () => {
      window.removeEventListener('keydown', onTakeCheckpoint)
    }
  }, [isInRange])

  const onEnterCollisionCheckpoint = () => {
    if (itsTaken) {
      setIsInRange(false)
      dialogs.handleOpenDialogTaken()
      return
    }

    dialogs.handleOpenDialogInRange()
    setIsInRange(true)
  }

  const onExitCollisionCheckpoint = () => {
    dialogs.closeDialog()
    setIsInRange(false)
  }

  const onTakeCheckpoint = (event) => {
    if (event.keyCode === 69 && isInRange) {
      const position = {
        x: refCheckpoint.current.translation().x,
        y: 2.5,
        z: refCheckpoint.current.translation().z - 1,
      }

      handleOnTakeCheckpoint(numberCheckpoint, position)
      setIsInRange(false)
      dialogs.handleOpenDialogTakeIt()
    }
  }

  return (
    <RigidBody
      type="fixed"
      onCollisionEnter={onEnterCollisionCheckpoint}
      onCollisionExit={onExitCollisionCheckpoint}
      ref={refCheckpoint}
      {...props}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint002_1.geometry}
        material={itsTaken ? materials.StoneGold : materials.Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint002_2.geometry}
        material={itsTaken ? materials.StoneGold : materials.Stone}
      />
    </RigidBody>
  )
}

export default Checkpoint
