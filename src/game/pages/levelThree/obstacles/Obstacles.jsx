import { Ivy } from '../../../globals/obstacles/Ivy'

const Obstacles = () => {
  return (
    <>
      <Ivy position={[11.8, -0.2, -14]} rotation={[0, Math.PI / 2, 0 ]}/>
      <Ivy position={[17, -0.2, -50]} rotation={[0, Math.PI / 2, 0 ]} scale={[1,1,0.7]}/>
      <Ivy position={[22.2, -0.2, -46]} rotation={[0, Math.PI / 2, 0 ]}/>
      <Ivy position={[-15, -0.2, 4]} />
      <Ivy position={[20, -0.2, -8]} />

      {/* barrera 1 */}
      <Ivy position={[2.8, -0.2, -34]} />
      <Ivy position={[2.8, -0.2, -28]} />
      <Ivy position={[2.8, -0.2, -22]} />
      <Ivy position={[2.8, -0.2, -16]} />

      {/* barrera 2 */}
      <Ivy position={[4.6, -0.2, -44]} rotation={[0, Math.PI / 2, 0 ]}/>
      <Ivy position={[10.6, -0.2, -44]} rotation={[0, Math.PI / 2, 0 ]}/>
    </>
  )
}

export default Obstacles
