import React from 'react';
import BeforeAfter from '../ui/BeforeAfter';

const ResultsShowcase: React.FC = () => {
  const results = [
    {
      title: 'Driveway Transformation',
      beforeImage: '',
      afterImage: ''
    },
    {
      title: 'Deck Restoration',
      beforeImage: '',
      afterImage: ''
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
          <a href="/contact" className="btn-primary">
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;