import React, { useRef } from 'react'
import Expelliarmus from './Expelliarmus'
import Glacius from './Glacius'
import Incendio from './Incendio'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { PositionalAudio } from '@react-three/drei'
import { useEffect } from 'react'
import { useMusic } from '../../../providers/music/MusicProvider'

const Spells = () => {
  const { player, setPlayer } = usePlayer()
  const { isPlaying } = useMusic()

  const refSpellAudio = useRef()

  useEffect(() => {
    if (
      (player.spellExpelliarmus ||
        player.spellGlacius ||
        player.spellIncendio) &&
      isPlaying
    ) {
      refSpellAudio.current.play()
    }
  }, [player.spellExpelliarmus, player.spellGlacius, player.spellIncendio])

  return (
    <>
      {player.spellExpelliarmus && (
        <Expelliarmus
          initRotation={player.spellInitRotation}
          initPosition={player.spellInitPosition}
        />
      )}
      {player.spellGlacius && (
        <Glacius
          initRotation={player.spellInitRotation}
          initPosition={player.spellInitPosition}
        />
      )}
      {player.spellIncendio && (
        <Incendio
          initRotation={player.spellInitRotation}
          initPosition={player.spellInitPosition}
        />
      )}
      <PositionalAudio
        url="/assets/sounds/spell.mp3"
        distance={50}
        loop={false}
        ref={refSpellAudio}
      />
    </>
  )
}
export default Spells
