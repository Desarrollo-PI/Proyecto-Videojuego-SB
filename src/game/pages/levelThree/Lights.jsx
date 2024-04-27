import { Color } from 'three'

const Lights = () => {
  return (
    <>
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[0.29, 2.8, -0.5]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[-16.5, 2.8, -0.5]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[-16.5, 3.7, -24]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[-11, 6.5, -25]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[10.5, 3.5, -25.5]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[2.6, 6.8, -35]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[10.8, 3.5, -49.6]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[17, 3.5, -45.3]} />
      <pointLight distance={50} color={'#FFC300' } intensity={10} position={[16.5, 3.5, -21]} />

    </>
  )
}

export default Lights
