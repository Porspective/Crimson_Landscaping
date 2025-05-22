import React from 'react';
import { PhoneCall, ClipboardCheck, Truck, ThumbsUp } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: 'Request a Quote',
      description: 'Contact us by phone or through our website to request a free, no-obligation quote.'
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: 'Schedule Service',
      description: `We'll work with you to find a convenient time for your service appointment.`
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Service Day',
      description: 'Our team arrives on time with professional equipment to complete your project.'
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: 'Enjoy the Results',
      description: 'Sit back and enjoy your beautifully cleaned property with our satisfaction guarantee.'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2>Our Simple Process</h2>
          <p>
            Getting your property looking its best is easy with our straightforward process.
          </p>
        </div>

        <div className="relative">
          {/* Connect line */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-crimson-100 -translate-x-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-crimson-100 text-crimson-700 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;