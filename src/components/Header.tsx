import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/Button";
import { TrendingUp } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <nav className="px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg transform group-hover:scale-105 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Elevate Global Funding
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 mr-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/programs', label: 'Programs' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive(path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
            
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}