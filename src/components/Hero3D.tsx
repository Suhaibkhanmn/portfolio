"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error: maath missing declaration types
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function IcosahedronNode() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    // Rotate the 3D object on every frame
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x -= delta * 0.1;
            meshRef.current.rotation.y -= delta * 0.2;

            // if hovered, pulse scale slightly
            const targetScale = hovered ? 1.1 : 1;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* 1 for radius, 1 for detail to give it that low-poly node look */}
                <icosahedronGeometry args={[2, 1]} />
                <meshStandardMaterial
                    color={hovered ? "#55875d" : "#3b5240"}
                    wireframe
                    wireframeLinewidth={2}
                />
            </mesh>
        </Float>
    );
}

function Starfield() {
    const ref = useRef<any>(null);
    // @ts-ignore: TS misses the second argument for options in maath
    const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 4 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial transparent color="#55875d" size={0.03} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
}

export default function Hero3D() {
    return (
        <div style={{ width: "100%", height: "500px", position: "relative", cursor: "grab" }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Starfield />
                <IcosahedronNode />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                />
            </Canvas>
        </div>
    );
}
