import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }) {
  // Loads the glTF/GLB file
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.2} />;
}

export default function DishModel({ modelUrl }) {
  return (
    <div className="w-full h-[400px] bg-neutral-900/60 rounded-xl border border-neutral-800 overflow-hidden shadow-inner">
      <Canvas shadows camera={{ fov: 45, position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.4}>
            <Model url={modelUrl} />
          </Stage>
        </Suspense>

        <OrbitControls 
          enableZoom={true} 
          maxPolarAngle={Math.PI / 2} 
          minDistance={1.5} 
          maxDistance={8} 
        />
      </Canvas>
    </div>
  );
}