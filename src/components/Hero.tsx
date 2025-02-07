import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1920"
        alt="Pharmacy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-300 mb-2">Villeurbanne</p>
          <h1 className="text-4xl font-bold text-white mb-4">Pharmacie Grandclément</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero; 