import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600')", 
          filter: "brightness(0.7)" 
        }}
      />
      
      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Professional<br />
            <span className="text-crimson-100">Pressure Washing</span><br />
            <span className="text-crimson-100">& Mowing Services</span><br />
            in Oklahoma
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-2xl mb-8 animate-slide-up">
            Transforming your property one clean at a time. Crimson Clean Co provides top-quality 
            pressure washing and mowing services for residential and commercial properties.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-crimson-300" />
              <span>Professional & Reliable</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-crimson-300" />
              <span>100% Satisfaction</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-crimson-300" />
              <span>Free Estimates</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link 
              to="/contact" 
              className="btn-primary text-center sm:text-left"
            >
              Get a Free Quote
            </Link>
            <a 
              href="tel:+14054972081" 
              className="btn-secondary text-center sm:text-left flex items-center justify-center"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              (405) 497-2081
            </a>
          </div>
        </div>
      </div>
      
      {/* Trust Badge Bar */}
      <div className="bg-white py-6 shadow-md relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex items-center">
              <Award className="text-crimson-700 h-8 w-8 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Trusted Service</h3>
                <p className="text-gray-600">Serving Oklahoma since 2020</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="flex items-center">
              <div className="bg-crimson-100 p-2 rounded-full text-crimson-700 mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 3L16 7M12 3L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Eco-Friendly</h3>
                <p className="text-gray-600">Safe for your family & pets</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="flex items-center">
              <div className="bg-crimson-100 p-2 rounded-full text-crimson-700 mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L14 14M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quick Response</h3>
                <p className="text-gray-600">Same week service available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;