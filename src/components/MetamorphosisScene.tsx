'use client'

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const MetamorphosisScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: "#ff2b06",
      size: 0.03,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const spherePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const radius = 3.5;

      spherePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      spherePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      spherePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    let animationTime = 0;
    let phase = "chaos";

    const animate = () => {
      requestAnimationFrame(animate);
      animationTime += 0.01;

      const posAttr = particles.geometry.attributes.position;

      for (let i = 0; i < posAttr.count; i++) {
        let x = posAttr.getX(i);
        let y = posAttr.getY(i);
        let z = posAttr.getZ(i);

        if (phase === "chaos") {
          x += (Math.random() - 0.5) * 0.02;
          y += (Math.random() - 0.5) * 0.02;
          z += (Math.random() - 0.5) * 0.02;
        } else {
          const targetX = spherePositions[i * 3];
          const targetY = spherePositions[i * 3 + 1];
          const targetZ = spherePositions[i * 3 + 2];

          x += (targetX - x) * 0.02;
          y += (targetY - y) * 0.02;
          z += (targetZ - z) * 0.02;
        }

        posAttr.setXYZ(i, x, y, z);
      }

      posAttr.needsUpdate = true;

      if (animationTime > 8 && phase === "chaos") phase = "transition";
      if (animationTime > 16 && phase === "transition") phase = "harmony";
      if (animationTime > 28) {
        animationTime = 0;
        phase = "chaos";
      }

      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement)
        mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
};

export default MetamorphosisScene;
