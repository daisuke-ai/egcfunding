import { Link } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { TrendingUp } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-900">Elevate Global Funding</span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link></li>
          <li><Link to="/programs" className="text-blue-600 hover:text-blue-800 font-medium">Programs</Link></li>
          <li><Link to="/about" className="text-blue-600 hover:text-blue-800 font-medium">About Us</Link></li>
          <li><Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact</Link></li>
        </ul>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link to="/contact">Get Started</Link>
        </Button>
      </nav>
    </header>
  );
}