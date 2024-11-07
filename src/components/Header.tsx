import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/Button";
import { TrendingUp, Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/programs', label: 'Programs' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <nav className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group relative"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent hidden sm:block group-hover:opacity-90 transition-opacity">
                Elevate Global Capital Funding
              </span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent sm:hidden group-hover:opacity-90 transition-opacity">
                EGC Funding
              </span>
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8 mr-8">
                {navigationItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`relative py-2 px-1 text-sm font-medium transition-all duration-300 group ${
                      isActive(path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full transition-all duration-300 transform origin-left ${
                      isActive(path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                ))}
              </nav>
              
              <Button 
                asChild 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 rounded-xl"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors relative"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-2'
                }`} />
                <span className={`absolute left-0 block w-6 h-0.5 bg-gray-600 top-3 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute left-0 block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-4'
                }`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transform transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <nav className="px-4 py-4 space-y-4">
            {navigationItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg ${
                  isActive(path) 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center justify-between">
                  {label}
                  <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${
                    isActive(path) ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`} />
                </span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}