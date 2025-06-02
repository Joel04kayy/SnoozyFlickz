import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { SoftShadows, RoundedBox } from '@react-three/drei';

const CARD_COUNT = 24;
const RADIUS = 10;
const CARD_WIDTH = 0.7;
const CARD_HEIGHT = 1.8;
const CARD_DEPTH = 0.05;

function Card({ angle }) {
  // Position each card in a circle and rotate to face outward
  const x = Math.sin(angle) * RADIUS;
  const z = Math.cos(angle) * RADIUS;
  return (
    <group position={[x, 0, z]} rotation={[0, angle, 0]}>
      <RoundedBox
        args={[CARD_WIDTH, CARD_HEIGHT, CARD_DEPTH]}
        radius={0.18}
        smoothness={8}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial color={'#fff'} roughness={0.35} metalness={0.1} />
      </RoundedBox>
      {/* Sheen/highlight overlay */}
      <mesh position={[0, 0.4, CARD_DEPTH / 2 + 0.001]}>
        <planeGeometry args={[CARD_WIDTH * 0.92, 0.3]} />
        <meshStandardMaterial color={'#fff'} transparent opacity={0.18} roughness={0.1} metalness={0.8} emissive={'#fff'} emissiveIntensity={0.2} />
      </mesh>
      {/* Soft shadow under card */}
      <mesh position={[0, -CARD_HEIGHT / 2 - 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[CARD_WIDTH * 0.95, 0.5]} />
        <meshStandardMaterial color={'#000'} transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function RotatingRing() {
  const groupRef = useRef();
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.09; // Even slower spin
    }
  });
  return (
    <group ref={groupRef}>
      {Array.from({ length: CARD_COUNT }).map((_, i) => (
        <Card key={i} angle={(i / CARD_COUNT) * Math.PI * 2} />
      ))}
    </group>
  );
}

export default function ThreeScrollWheel() {
  return (
    <div style={{ width: '100%', height: '60vh', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 2, 18], fov: 50 }} shadows gl={{ alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <RotatingRing />
        <SoftShadows size={20} samples={16} focus={0.8} />
      </Canvas>
    </div>
  );
} 