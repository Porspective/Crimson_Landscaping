import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-crimson-500" />
              <span className="ml-2 text-xl font-bold">Crimson Clean Co</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional pressure washing and mowing services for residential and commercial
              properties in Oklahoma.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crimson-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crimson-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Driveway Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> House Washing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Deck Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-crimson-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Lawn Mowing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-crimson-500 mr-2 mt-0.5" />
                <span className="text-gray-400">Oklahoma City, OK 73142</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-crimson-500 mr-2" />
                <a
                  href="tel:+14054972081"
                  className="text-gray-400 hover:text-crimson-500 transition-colors"
                >
                  (405) 497-2081
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-crimson-500 mr-2" />
                <a
                  href="mailto:crimson.clean.com@gmail.com"
                  className="text-gray-400 hover:text-crimson-500 transition-colors"
                >
                  crimson.clean.com@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-crimson-500 mr-2 mt-0.5" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} Crimson Clean Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;