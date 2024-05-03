export default function collectibleRotation(ref) {
  if (!ref.current) return
  ref.current.rotation.y += 0.02
}
