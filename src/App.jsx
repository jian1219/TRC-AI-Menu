import ARDishViewer from './components/ARDishViewer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        
        {/* Product Details Section */}
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 mb-2 font-semibold">
            Interactive Menu trc
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Classic Brewed Coffee
          </h1>
          <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
            A rich, bold, and warm 3D design that allows the customer to view the product in 3D and test its scale in their own space.
          </p>
          
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-3xl font-mono font-bold text-neutral-100">$4.50</span>
            <span className="text-xs text-neutral-500">AR & 360° Enabled</span>
          </div>
        </div>

        {/* 3D AR Model Viewer Section */}
        <div className="flex flex-col gap-3 justify-center">
          <ARDishViewer />
          <p className="text-xs text-neutral-500 text-center">
            * Tap the AR button to scan a flat surface in your environment.
          </p>
        </div>

      </div>
    </div>
  );
}