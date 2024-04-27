import { Color } from 'three'

const Lights = () => {
  return (
    <>
      <ambientLight color={new Color('#B41CE5')} intensity={4} />
      <directionalLight
        intensity={2}
        position={[0, 0.5, -100]}
        castShadow={true}
      />

      <pointLight intensity={5} position={[10, 0.5, 90]} />
      <pointLight intensity={5} position={[-10, 0.5, 90]} />

      <pointLight intensity={5} position={[10, 0.5, 75]} />
      <pointLight intensity={5} position={[-10, 0.5, 75]} />

      <pointLight intensity={5} position={[10, 0.5, 60]} />
      <pointLight intensity={5} position={[-10, 0.5, 60]} />

      <pointLight intensity={5} position={[10, 0.5, 45]} />
      <pointLight intensity={5} position={[-10, 0.5, 45]} />

      <pointLight intensity={5} position={[10, 0.5, 30]} />
      <pointLight intensity={5} position={[-10, 0.5, 30]} />

      <pointLight intensity={5} position={[10, 0.5, 15]} />
      <pointLight intensity={5} position={[-10, 0.5, 15]} />

      <pointLight intensity={5} position={[10, 0.5, -15]} />
      <pointLight intensity={5} position={[-10, 0.5, -15]} />

      <pointLight intensity={5} position={[10, 0.5, -30]} />
      <pointLight intensity={5} position={[-10, 0.5, -30]} />

      <pointLight intensity={5} position={[10, 0.5, -45]} />
      <pointLight intensity={5} position={[-10, 0.5, -45]} />

      <pointLight intensity={5} position={[10, 0.5, -60]} />
      <pointLight intensity={5} position={[-10, 0.5, -60]} />

      <pointLight intensity={5} position={[10, 0.5, -75]} />
      <pointLight intensity={5} position={[-10, 0.5, -75]} />

      <pointLight intensity={5} position={[10, 0.5, -90]} />
      <pointLight intensity={5} position={[-10, 0.5, -90]} />
    </>
  )
}

export default Lights
