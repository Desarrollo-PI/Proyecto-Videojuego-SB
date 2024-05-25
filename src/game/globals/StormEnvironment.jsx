import React, { useState, useEffect, useRef } from 'react'
import { Environment, PositionalAudio } from '@react-three/drei'
import LightsEnvironment from './LightsEnvironment'
import { useMusic } from '../../providers/music/MusicProvider'

const StormEnvironment = ({
  positionDirectionalLight,
  intensityDirectionalLight,
  intensityAmbientLight,
  isFog,
  nearDementor,
  inMaze,
}) => {
  const [background, setBackground] = useState('#10141b')

  const { positionalSounds, isPlaying } = useMusic()

  const refThunderAudio = useRef()
  const refLevelAudio = useRef()
  const refHeartbeatAudio = useRef()
  const refGameoverAudio = useRef()
  const refWinAudio = useRef()

  useEffect(() => {
    const soundRefs = {
      thunder: refThunderAudio?.current,
      level: refLevelAudio?.current,
      heartbeat: refHeartbeatAudio?.current,
      gameover: refGameoverAudio?.current,
      win: refWinAudio?.current
    };

    
    if (!isPlaying) {
      return;
    }
  
    Object.entries(positionalSounds).forEach(([sound, shouldPlay]) => {
      const audio = soundRefs[sound];
      if (audio) {
        if (shouldPlay) {
          audio.play();
        } 
        else {
          audio.pause();
        }
      } else {
        console.warn(`Reference for ${sound} audio not found.`);
      }
    });
  }, [positionalSounds.thunder, positionalSounds.level, positionalSounds.heartbeat, positionalSounds.gameover, isPlaying]);

  const stormLightsProps = {
    positionDirectionalLight,
    intensityDirectionalLight,
    intensityAmbientLight,
  }

  useEffect(() => {
    const simulateLightning = () => {
      setBackground('#dddddd')

      setTimeout(() => {
        setBackground('#10141b')
      }, 300)
    }

    const intervalId = setInterval(simulateLightning, 7500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Environment preset="night" />
      <LightsEnvironment {...stormLightsProps} />
      <color attach="background" args={[background]} />
      {isFog && (
        <fog
          attach="fog"
          args={['#10141b', 0, nearDementor || inMaze ? 10 : 50]}
        />
      )}
      <PositionalAudio url="/assets/sounds/thunder.mp3" distance={10} loop ref={refThunderAudio}/>
      <PositionalAudio url="/assets/music/level-theme.mp3" distance={10} loop ref={refLevelAudio}/>
      <PositionalAudio url="/assets/music/heartbeat.mp3" distance={10} loop ref={refHeartbeatAudio}/>
      <PositionalAudio url="/assets/music/gameover.mp3" distance={10} loop={false} ref={refGameoverAudio}/>
      <PositionalAudio url="/assets/sounds/win.mp3" distance={10} loop={false} ref={refWinAudio}/>
      
    </>
  )
}

export default StormEnvironment
