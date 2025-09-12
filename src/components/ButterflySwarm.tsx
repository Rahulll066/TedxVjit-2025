"use client"
import { Canvas } from "@react-three/fiber"
import Butterfly from "./butterfly"
// import Stars from "./Stars"

export default function ButterflySwarm() {
  const butterflyCount = 8
  const positions: [number, number, number][] = []

  for (let i = 0; i < butterflyCount; i++) {
    positions.push([
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 12,
      -10 - Math.random() * 5,
    ])
  }

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 50], fov: 75 }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />

      {/* Stars */}
      {/* <Stars count={2000} /> */}

      {/* Butterflies */}
      
        <Butterfly />
      
    </Canvas>
  )
}
