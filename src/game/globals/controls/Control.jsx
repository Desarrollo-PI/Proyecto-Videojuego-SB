import { useKeyboardControls, OrbitControls } from '@react-three/drei'
import { useAvatar } from '../../../providers/avatar/AvatarProvider'
import { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Controls() {
  const { avatar, setAvatar } = useAvatar()
  const [sub, get] = useKeyboardControls()
  const [runSound] = useState(new Audio('/assets/sounds/run.wav'))
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const unsubscribe = sub(
      (state) =>
        state.forward || state.backward || state.leftward || state.rightward,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? 'Walking' : 'Idle' })
      }
    )
    return () => unsubscribe()
  }, [avatar, setAvatar, sub, get])

  useEffect(() => {
    const unsubscribe = sub(
      (state) =>
        state.run &&
        (state.forward || state.backward || state.leftward || state.rightward),
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? 'Running' : 'Idle' })
      }
    )
    return () => unsubscribe()
  }, [avatar, setAvatar, sub, get])

  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.jump,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? 'Jumping' : 'Idle' })
      }
    )
    return () => unsubscribe()
  }, [avatar, setAvatar, sub, get])

  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.attack,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? 'Attacking' : 'Idle' })
      }
    )
    return () => unsubscribe()
  }, [avatar, setAvatar, sub, get])

  // useEffect(() => {
  //   if (play) {
  //     runSound.currentTime = 0
  //     runSound.volume = Math.random()
  //     runSound.play()
  //   } else {
  //     runSound.pause()
  //   }
  // }, [play])

  useFrame(() => {
    const { forward, backward, leftward, rightward } = get()
    if (forward || backward || leftward || rightward) {
      setPlay(true)
      // socket.emit('moving-player', {
      //   position: avatar.rigidBodyAvatarRef?.translation(),
      //   rotation: avatar.rigidBodyAvatarRef?.rotation(),
      // })
    } else {
      setPlay(false)
    }
    const pressed = get().back
  })
}
