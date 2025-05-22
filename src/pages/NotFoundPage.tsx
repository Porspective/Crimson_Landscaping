import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="section bg-gray-50 min-h-[70vh] flex items-center">
      <div className="container-custom text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-crimson-700 mb-4">
            <svg className="w-24 h-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
          
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;