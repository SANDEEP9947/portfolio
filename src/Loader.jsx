import React from "react";

// A modern, stylish loader using Tailwind CSS
export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-t-blue-500 border-gray-200 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-4 border-t-purple-400 border-gray-100 animate-spin-slow"></div>
        <span className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-lg tracking-widest select-none">
          Loading
        </span>
      </div>
    </div>
  );
}

// Add this Loader to your pages where you need a loading state.