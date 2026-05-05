import React from 'react';
import '@google/model-viewer';

export default function ARDishViewer() {
  return (
    <div className="w-full h-[450px] bg-neutral-900/60 rounded-xl border border-neutral-800 overflow-hidden shadow-inner relative flex items-center justify-center">
      <model-viewer
        src="/model.glb"
        ios-src="/model.usdz"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        shadow-intensity="1"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Custom AR Button */}
        <button 
          slot="ar-button"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-lg transition duration-200 flex items-center gap-3 cursor-pointer border-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.594l6.43-6.43c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
          View in Your Space
        </button>
      </model-viewer>
    </div>
  );
}