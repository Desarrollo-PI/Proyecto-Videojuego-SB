import { useKeyboardControls, OrbitControls } from '@react-three/drei'
import { useAvatar } from '../../../providers/avatar/AvatarProvider'
import { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Howl } from 'howler'
import { socket } from '../../../socket/socket-manager'

export default function Controls({ playerIsDeath, isPlaying }) {
  const { avatar, setAvatar } = useAvatar()
  const [sub, get] = useKeyboardControls()
  const [runSound] = useState(
    new Howl({ src: '/assets/sounds/run.mp3', volume: 0.2 })
  )
  const [walkSound] = useState(
    new Howl({ src: '/assets/sounds/walk.mp3', volume: 0.2 })
  )
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const unsubscribe = sub(
      (state) => ({
        walk:
          state.forward || state.backward || state.leftward || state.rightward,
        run:
          state.run &&
          (state.forward ||
            state.backward ||
            state.leftward ||
            state.rightward),
        jump: state.jump,
        attack: state.attack,
      }),
      ({ walk, run, jump, attack }) => {
        if (jump) {
          setAvatar({ ...avatar, animation: 'Jumping' })
          socket.emit('change-animation', 'Jumping')
        } else if (run) {
          setAvatar({ ...avatar, animation: 'Running' })
          socket.emit('change-animation', 'Running')
        } else if (walk) {
          setAvatar({ ...avatar, animation: 'Walking' })
          socket.emit('change-animation', 'Walking')
        } else if (attack) {
          setAvatar({ ...avatar, animation: 'Attacking' })
          socket.emit('change-animation', 'Attacking')
        } else {
          setAvatar({ ...avatar, animation: 'Idle' })
          socket.emit('change-animation', 'Idle')
        }
      }
    )
    return () => unsubscribe()
  }, [avatar, setAvatar, sub, get])

  useEffect(() => {
    if (play && isPlaying) {
      if (avatar.animation === 'Running') {
        runSound.play()
      } else if (avatar.animation === 'Walking') {
        walkSound.play()
      }

      if (avatar.animation != 'Running') {
        runSound.pause()
      }
      if (avatar.animation != 'Walking') {
        walkSound.pause()
      }
    } else {
      runSound.pause()
      walkSound.pause()
    }
  }, [play, avatar.animation])

  useEffect(() => {
    if (playerIsDeath) {
      runSound.stop()
      walkSound.stop()
      setAvatar({ ...avatar, animation: 'Idle' })
    }
  }, [playerIsDeath])

  useFrame(() => {
    const { forward, backward, leftward, rightward, jump } = get()
    if (forward || backward || leftward || rightward) {
      setPlay(true)
    } else {
      setPlay(false)
    }

    if (avatar.body) {
      socket.emit('moving-player', {
        position: avatar.body?.translation(),
        rotation: avatar.body?.rotation(),
      })
    }

    const pressed = get().back
  })
}
