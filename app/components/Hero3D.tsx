"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useTexture, Float, Environment } from "@react-three/drei";

const ORBIT_DATA = [
  {
    radius: 1,
    speed: 0.3,
    logos: ["/icons/typescript.svg", "/icons/javascript.svg"],
  }, // Inner (2)
  {
    radius: 2.25,
    speed: 0.2,
    logos: ["/icons/react.svg", "/icons/nextjs.svg", "/icons/python.svg"],
  }, // Middle (3)
  {
    radius: 3.5,
    speed: 0.25,
    logos: [
      "/icons/supabase.svg",
      "/icons/firebase.svg",
      "/icons/git.svg",
      "/icons/prisma.svg",
    ],
  }, // Outer (4)
];

function Cube({
  texturePath,
  radius,
  speed,
  startAngle,
}: {
  texturePath: string;
  radius: number;
  speed: number;
  startAngle: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const originalTexture = useTexture(texturePath);

  const texture = useMemo(() => {
    const t = originalTexture.clone();
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  }, [originalTexture]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ref.current) {
      // 🌀 Use the same speed for the orbit, but offset by the startAngle to maintain gap
      const currentAngle = t * speed + startAngle;

      ref.current.position.x = Math.cos(currentAngle) * radius;
      ref.current.position.y = Math.sin(currentAngle) * radius;
      ref.current.position.z = Math.sin(t * 0.5 + startAngle) * 0.5;

      // 🔄 Individual spin
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;

      // Fix perspective size variation - scale based on z-position
      const zOffset = ref.current.position.z;
      const scale = 1 - zOffset * 0.15;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={ref}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          map={texture}
          color="#ffffff"
          transparent
          roughness={0.1}
          metalness={0.5}
          emissive="#000000"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        {/* 🌑 Soft lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        {/* 🌍 Reflection */}
        <Environment preset="forest" />

        {/* 🌫️ Depth fog */}
        <fog attach="fog" args={["#000000", 12, 22]} />

        {/* 🌀 Tilt group for 3D feel */}
        <group rotation={[0, 0, 0]}>
          {ORBIT_DATA.map((orbit) =>
            orbit.logos.map((path, index) => (
              <Cube
                key={path}
                texturePath={path}
                radius={orbit.radius}
                speed={orbit.speed}
                startAngle={(index / orbit.logos.length) * Math.PI * 2}
              />
            )),
          )}
        </group>

        {/* 🔵 Orbit Rings (match vertical plane) */}
        {ORBIT_DATA.map((orbit, i) => (
          <mesh key={i}>
            <ringGeometry
              args={[orbit.radius - 0.01, orbit.radius + 0.01, 128]}
            />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
}
