import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccessPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4">
        <div className="text-green-500 mb-4">
          <CheckCircle className="h-16 w-16 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          We've received your request and will contact you within 24 hours.
        </p>
        <Link
          to="/"
          className="btn-primary inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;