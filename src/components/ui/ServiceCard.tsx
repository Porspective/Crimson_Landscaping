import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div 
        className="h-48 bg-center bg-cover" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-crimson-100 rounded-full text-crimson-700 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to="/services" 
          className="inline-flex items-center text-crimson-700 font-medium hover:text-crimson-800 transition-colors"
        >
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;