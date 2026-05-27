import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Single ball mesh — used inside the shared TechCanvas below.
const TechBall = ({ icon, position }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
      position={position}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// One Canvas for every technology ball. This keeps the design intent of the
// reference (floating 3D balls) without spawning a separate WebGL context per
// tile, which trips most browsers' ~16 simultaneous-context limit.
const Tech = () => {
  const positioned = useMemo(() => {
    const cols = 7;
    const spacingX = 3;
    const spacingY = 3;
    return technologies.map((t, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const offsetX = (col - (cols - 1) / 2) * spacingX;
      const offsetY = -row * spacingY + 1.2;
      return { ...t, position: [offsetX, offsetY, 0] };
    });
  }, []);

  return (
    <div className="w-full h-[420px] sm:h-[460px]">
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 14], fov: 35 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
          />
          {positioned.map((t) => (
            <TechBall key={t.name} icon={t.icon} position={t.position} />
          ))}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
