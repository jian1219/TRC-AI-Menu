import { useState } from 'react';
import DishModel from './components/DishModel';

export default function App() {
  const [selectedDish] = useState({
    name: "Iced Americano & Espresso",
    description: "A rich, bold double shot of specialty espresso poured over cold filtered water and ice.",
    price: "$4.50",
    modelPath: "/model.glb" // Replace with the path to your .glb or .gltf file in the public folder
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        
        {/* Product Details Section */}
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 mb-2 font-semibold">
            Interactive Menu
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {selectedDish.name}
          </h1>
          <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
            {selectedDish.description}
          </p>
          
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-3xl font-mono font-bold text-neutral-100">{selectedDish.price}</span>
            <span className="text-xs text-neutral-500">360° View Enabled</span>
          </div>
          
          <button 
            onClick={() => alert("Added to order!")}
            className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow transition duration-200"
          >
            Add to Cart
          </button>
        </div>

        {/* 3D Model Viewer Section */}
        <div className="flex flex-col gap-3 justify-center">
          <DishModel modelUrl={selectedDish.modelPath} />
          <p className="text-xs text-neutral-500 text-center">
            * Drag to rotate • Scroll to zoom • Pinch to scale
          </p>
        </div>

      </div>
    </div>
  );
}