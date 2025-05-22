import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 ${
      isActive
        ? 'text-crimson-700 font-medium border-b-2 border-crimson-700'
        : 'text-gray-800 hover:text-crimson-700'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="C.png" alt="Crimson Clean Co Logo" className="h-8 w-8" />
          <div className="ml-2">
            <span className="text-xl font-bold text-crimson-900">Crimson Clean Co</span>
            <p className="text-xs text-gray-600">Pressure Washing & Mowing Services</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
          <a href="tel:+14054972081" className="flex items-center text-crimson-700 font-medium">
            <PhoneCall className="h-4 w-4 mr-2" />
            (405) 497-2081
          </a>
        </nav>

        {/* Quote Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? 'bg-crimson-50 text-crimson-700 font-medium' : 'text-gray-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? 'bg-crimson-50 text-crimson-700 font-medium' : 'text-gray-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? 'bg-crimson-50 text-crimson-700 font-medium' : 'text-gray-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <a
              href="tel:+14054972081"
              className="flex items-center py-2 px-4 text-crimson-700 font-medium"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              (405) 497-2081
            </a>
            <Link
              to="/contact"
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;