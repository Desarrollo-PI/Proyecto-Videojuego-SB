import { Environment } from '@react-three/drei'

export default function Environments() {
  return (
    <>
      <Environment
        files={'/assets/hdr/kloofendal_misty_morning_puresky_4k.hdr'}
        preset={null}
        background={false}
        ground={{
          height: 20,
          scale: 500,
          radius: 800,
        }}
      />
    </>
  )
}
