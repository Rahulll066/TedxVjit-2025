"use client"
import { useRef } from "react"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function Butterfly({ position = [0, 0, 3] }: { position?: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!)
  const texture = useLoader(THREE.TextureLoader, "/assets/butterfly1.png")
  const { viewport } = useThree()

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()

    // Floating motion
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.9
    ref.current.rotation.z = Math.sin(t * 0.8) * 0.05

    // Wing flap
    const flap = 1 + Math.sin(t * 2) * 0.1
    ref.current.scale.set(flap, 1, 1) 
  })

  // Scale based on breakpoints (stable across devices)
  const size = Math.min(viewport.width, viewport.height) * 0.7

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
        opacity={0.85}
      />
    </mesh>
  )
}
