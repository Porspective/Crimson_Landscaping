import React from 'react';
import { ShieldCheck, ThumbsUp, Zap, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: 'Professional & Reliable',
      description: `With years of experience and a commitment to excellence, we deliver reliable, high-quality service every time.`
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: 'Satisfaction Guaranteed',
      description: `Your satisfaction is our top priority. If you're not completely satisfied, we'll make it right.`
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Efficient & Reliable',
      description: 'We arrive on time, work efficiently, and deliver exceptional results consistently.'
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: 'High-Quality Equipment',
      description: 'We use professional-grade equipment and eco-friendly cleaning solutions for superior results.'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>
            At Crimson Clean Co, we're committed to providing exceptional service and 
            outstanding results for every client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-crimson-700 mx-auto mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-crimson-700 text-white rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div 
              className="bg-cover bg-center min-h-[300px]"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/5711255/pexels-photo-5711255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
            ></div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Professional Service, <br />Exceptional Results
              </h3>
              <p className="mb-6 text-white/90">
                Our team of experienced professionals is dedicated to providing the highest level of 
                service and delivering exceptional results for every job, no matter how big or small.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-crimson-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trained and experienced technicians</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-crimson-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Safe and effective cleaning techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-crimson-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-crimson-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Attention to detail on every project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;