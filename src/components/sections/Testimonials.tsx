import React from 'react';
import Testimonial from '../ui/Testimonial';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Oklahoma City, OK',
      quote: 'Crimson Clean Co did an incredible job on our driveway and house exterior. They were professional, punctual, and the results were amazing. Our house looks brand new!',
      rating: 5
    },
    {
      name: 'Mike Thompson',
      location: 'Edmond, OK',
      quote: 'I was impressed with their attention to detail on our deck cleaning project. They were thorough and carefully protected our plants. Great service at a reasonable price.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Norman, OK',
      quote: `We've been using their weekly mowing service for months now, and our lawn has never looked better. Reliable, consistent quality, and good communication.`,
      rating: 4
    },
    {
      name: 'John Martinez',
      location: 'Moore, OK',
      quote: 'After Crimson Clean Co cleaned our commercial storefront, we received so many compliments from customers. Their team was professional and efficient.',
      rating: 5
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>
            Don't just take our word for it. Here's what some of our satisfied customers 
            have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;