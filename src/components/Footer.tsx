import React from 'react';
import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            <span className="font-bold text-white">Elevate Funding</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Elevate Funding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}