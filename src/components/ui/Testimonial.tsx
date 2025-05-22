import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, location, quote, rating, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-crimson-100 text-crimson-700 flex items-center justify-center font-bold text-xl mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

export default Testimonial;