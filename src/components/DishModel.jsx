import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { useState } from 'react';

function GeometricDish() {
  const [hovered, setHover] = useState(false);

  return (
    <group 
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.04 : 1}
    >
      {/* Saucer / Plate */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.1, 32]} />
        <meshStandardMaterial color="#faf9f6" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Coffee Cup Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.65, 0.55, 1.0, 32]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.4} />
      </mesh>

      {/* Coffee Liquid Surface */}
      <mesh position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.54, 32]} />
        <meshStandardMaterial color="#3E2723" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Cup Handle */}
      <mesh position={[0.6, 0.0, 0]} castShadow>
        <torusGeometry args={[0.26, 0.06, 16, 100]} />
        <meshStandardMaterial color="#6F4E37" roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function DishModel() {
  return (
    <div className="w-full h-[400px] bg-neutral-900/60 rounded-xl border border-neutral-800 overflow-hidden shadow-inner">
      <Canvas shadows camera={{ fov: 45, position: [0, 1.2, 3.5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
        
        <Stage environment="city" intensity={0.5}>
          <GeometricDish />
        </Stage>

        <OrbitControls 
          enableZoom={true} 
          maxPolarAngle={Math.PI / 2} 
          minDistance={1.5} 
          maxDistance={6} 
        />
      </Canvas>
    </div>
  );
}