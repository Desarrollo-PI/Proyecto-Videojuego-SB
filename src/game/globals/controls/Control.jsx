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
      (state) => ({
        walk: state.forward || state.backward || state.leftward || state.rightward,
        run: state.run && (state.forward || state.backward || state.leftward || state.rightward),
        jump: state.jump,
        attack: state.attack
      }),
      ({ walk, run, jump, attack}) => {
        if (jump) {
          setAvatar({ ...avatar, animation: 'Jumping' })
        } else if (run) {
          setAvatar({ ...avatar, animation: 'Running' })
        } else if (walk) {
          setAvatar({ ...avatar, animation: 'Walking' })
        } else if (attack) {
          setAvatar({ ...avatar, animation: 'Attacking' })
        } else {
          setAvatar({ ...avatar, animation: 'Idle' })
        }
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
