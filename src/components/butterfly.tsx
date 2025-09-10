"use client"
import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

export default function Butterfly({ position = [45, 0, -15] }: { position?: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!)
  const texture = useLoader(THREE.TextureLoader, "/assets/butterfly1.png")

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()

    // Floating
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.9
    ref.current.rotation.z = Math.sin(t * 0.4) * 0.05

    // Wing flap
    const flap = 1 + Math.sin(t * 2) * 0.1
    ref.current.scale.set(flap, 1, 1)
  })

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[75, 75]} />
      <meshBasicMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
        opacity={0.65}
      />
    </mesh>
  )
}
