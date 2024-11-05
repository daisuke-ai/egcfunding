import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Private Lending Solutions</h1>
          <p className="text-xl mb-8">Fast, flexible financing for your real estate investments. Get competitive rates and quick approvals.</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
            Apply for Financing <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}