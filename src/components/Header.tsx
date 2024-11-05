import React, { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">Elevate Global Funding</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-gray-600 hover:text-blue-600 py-2">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600 py-2">About</Link>
            <Link to="/services" className="block text-gray-600 hover:text-blue-600 py-2">Services</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600 py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}