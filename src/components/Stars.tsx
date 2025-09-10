"use client"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Stars({ count = 3000 }) {
    const pointsRef = useRef<THREE.Points>(null!)

    // Positions & twinkle offsets
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 800
            pos[i * 3 + 1] = (Math.random() - 0.5) * 600
            pos[i * 3 + 2] = -50 - Math.random() * 600
        }
        return pos
    }, [count])

    useFrame(({ clock }) => {
        if (!pointsRef.current) return
        const material = pointsRef.current.material as THREE.PointsMaterial
        material.opacity = 0.6 + Math.sin(clock.getElapsedTime() * 3) * 0.4
        pointsRef.current.rotation.y = clock.getElapsedTime() * 0.001
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={1.1}
                sizeAttenuation
                transparent
            />
        </points>
    )
}
