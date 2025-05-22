import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';
import ServiceSubscriptionCard from '../components/ui/ServiceSubscriptionCard';
import PaymentModal from '../components/ui/PaymentModal';

const ContactPage: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const subscriptionPlans = [
    {
      title: 'Basic Mowing',
      price: 49,
      frequency: 'visit',
      features: [
        'Front and back yard mowing',
        'Edge trimming',
        'Cleanup included',
        'Pay per service',
        'Flexible scheduling'
      ]
    },
    {
      title: 'Monthly Maintenance',
      price: 159,
      frequency: 'month',
      features: [
        'Bi-weekly mowing service',
        'Edge trimming',
        'Blowing and cleanup',
        'Priority scheduling',
        'Seasonal adjustments'
      ],
      popular: true
    },
    {
      title: 'Premium Care',
      price: 259,
      frequency: 'month',
      features: [
        'Weekly mowing service',
        'Edge trimming',
        'Blowing and cleanup',
        'Priority scheduling',
        'Fertilization included',
        'Seasonal adjustments'
      ]
    }
  ];

  const handleSubscribe = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsPaymentModalOpen(true);
  };

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your property? Get in touch for a free quote or 
            to learn more about our services.
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lawn Care Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect lawn care plan for your needs. All plans include professional 
              service with our satisfaction guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {subscriptionPlans.map((plan) => (
              <ServiceSubscriptionCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                frequency={plan.frequency}
                features={plan.features}
                popular={plan.popular}
                onSubscribe={() => handleSubscribe(plan.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6 text-crimson-900">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-crimson-700 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a 
                        href="tel:+14054972081" 
                        className="text-gray-700 hover:text-crimson-700 transition-colors"
                      >
                        (405) 497-2081
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-crimson-700 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a 
                        href="mailto:crimson.clean.com@gmail.com" 
                        className="text-gray-700 hover:text-crimson-700 transition-colors"
                      >
                        crimson.clean.com@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-crimson-700 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-700">Oklahoma City, OK 73142</p>
                      <p className="text-gray-700 mt-1">
                        Serving all of Oklahoma City and surrounding areas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-crimson-700 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Service Areas</h3>
                  <p className="text-gray-700">
                    Oklahoma City • Edmond • Norman • Moore • Yukon • Mustang • Midwest City • Del City • And surrounding areas
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12 bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                title="Crimson Clean Co Location"
                className="w-full h-[400px] rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103908.86437408654!2d-97.65611080673053!3d35.5390528210484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad8a547ef8d281%3A0x33a21274d14f644d!2sOklahoma%20City%2C%20OK!5e0!3m2!1sen!2sus!4v1623252504621!5m2!1sen!2sus" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>
              Have questions about our services? Find answers to our most commonly asked questions below.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-crimson-900">How much does pressure washing cost?</h3>
              <p className="text-gray-700">
                Our pricing depends on the size of the area to be cleaned and the level of cleaning required. We provide free, no-obligation quotes so you'll know exactly what to expect before we begin work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-crimson-900">Are your cleaning methods safe for my property?</h3>
              <p className="text-gray-700">
                Yes, we use appropriate pressure levels and eco-friendly cleaning solutions for each surface. Our technicians are trained to clean effectively without causing damage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-crimson-900">How often should I have my property pressure washed?</h3>
              <p className="text-gray-700">
                We recommend annual cleaning for most surfaces to prevent buildup of dirt, mold, and mildew. However, this can vary based on your property's exposure to the elements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-crimson-900">Do you offer recurring service plans?</h3>
              <p className="text-gray-700">
                Yes, we offer scheduled maintenance plans for both residential and commercial properties. Contact us to discuss a custom plan that meets your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-crimson-900">What areas do you serve?</h3>
              <p className="text-gray-700">
                We serve Oklahoma City and all surrounding areas including Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-crimson-900">What about insurance?</h3>
              <p className="text-gray-700">
                We are currently in the process of obtaining our insurance coverage to better serve and protect our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </div>
  );
};

export default ContactPage;