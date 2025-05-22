import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-crimson-700 py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-white/90 text-lg max-w-xl">
              Get a free quote today and see the difference professional cleaning can make.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-crimson-700 hover:bg-gray-100 btn"
            >
              Get a Free Quote
            </Link>
            <a 
              href="tel:+14055551234" 
              className="bg-crimson-800 text-white hover:bg-crimson-900 btn flex items-center justify-center"
            >
              Call Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;