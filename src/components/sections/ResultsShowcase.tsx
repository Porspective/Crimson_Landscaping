import React, { useState } from 'react';
import BeforeAfter from '../ui/BeforeAfter';
import PaymentModal from '../ui/PaymentModal';

const ResultsShowcase: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const results = [
    {
      title: 'Driveway Transformation',
      beforeImage: './assets/before1.jpg',
      afterImage: './assets/after1.jpg'
    },
    {
      title: 'Lawn Mowing',
      beforeImage: './before2.jpeg',
      afterImage: './after2.jpeg'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2>See the Difference</h2>
          <p>
            Nothing speaks louder than results. Check out these before and after transformations 
            from our recent projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <BeforeAfter
              key={index}
              title={result.title}
              beforeImage={result.beforeImage}
              afterImage={result.afterImage}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to see these amazing results on your property?
          </p>
          <div className="space-x-4">
            <a href="/contact" className="btn-primary">
              Get Your Free Quote Today
            </a>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="btn-secondary"
            >
              Make a Payment
            </button>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </section>
  );
};

export default ResultsShowcase;