import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-800">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">EGC Funding</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering real estate investors with flexible financing solutions tailored to their needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/programs', label: 'Programs' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <span>+1 808.757.4053</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <span>info@elevateglobal.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                <span>200 N Vineyard Blvd, Ste. A325 A325 - 5603, Honolulu, HI 96817</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-white font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Contact us today to discuss your investment needs and explore our financing options.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elevate Global Capital Funding. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}