"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Função para gerar a geometria de estrela 3D (5 pontas)
function createStarGeometry(spikes = 5, outerRadius = 1.2, innerRadius = 0.6) {
  const shape = new THREE.Shape();
  const step = Math.PI / spikes;

  shape.moveTo(0, outerRadius);

  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.sin(i * step) * radius;
    const y = Math.cos(i * step) * radius;
    shape.lineTo(x, y);
  }

  shape.closePath();

  // Extrude = dá profundidade
  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 2,
  };

  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
}

function SpinningStar() {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = createStarGeometry(5, 1.3, 0.6);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.z = Math.sin(t * 0) * 1;
      ref.current.rotation.y = t * 0.8;
    }
  });

  return (
    <mesh ref={ref} geometry={geometry}>
      <meshStandardMaterial
        color="#ff1aff"
        metalness={0.8}
        roughness={0.3}
        emissive="#ff4dd2"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function RotatingStarHero() {
  return (
    <div className="w-300 h-[300px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 3]} intensity={1.5} color="#ff8aff" />
        <SpinningStar />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
