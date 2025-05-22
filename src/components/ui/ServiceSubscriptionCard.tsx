import React from 'react';
import { Check } from 'lucide-react';

interface ServiceSubscriptionCardProps {
  title: string;
  price: number;
  frequency: string;
  features: string[];
  onSubscribe: () => void;
  popular?: boolean;
}

const ServiceSubscriptionCard: React.FC<ServiceSubscriptionCardProps> = ({
  title,
  price,
  frequency,
  features,
  onSubscribe,
  popular = false,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${popular ? 'border-2 border-crimson-500 relative' : ''}`}>
      {popular && (
        <div className="bg-crimson-500 text-white text-sm font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/{frequency}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Check className="h-5 w-5 text-crimson-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={onSubscribe}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            popular
              ? 'bg-crimson-600 text-white hover:bg-crimson-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default ServiceSubscriptionCard;