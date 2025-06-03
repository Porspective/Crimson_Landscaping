import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);
  setSubmitError(null);

  try {
    const response = await fetch('https://formspree.io/f/yourFormID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      // Handle the JSON response as needed
    } else {
      const text = await response.text();
      // Handle non-JSON response or ignore
    }

    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitError('Submission failed. Please email us directly or try again later.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
    >      
      <h3 className="text-2xl font-bold mb-6 text-center text-crimson-900">Get a Free Quote</h3>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-crimson-500" 
            placeholder="Your name" 
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-crimson-500" 
            placeholder="Your email" 
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-crimson-500" 
            placeholder="(405) 293-5872" 
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
          <select 
            id="service" 
            name="service" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-crimson-500"
          >
            <option value="">Select a service</option>
            <option value="driveway">Driveway Cleaning</option>
            <option value="house">House Washing</option>
            <option value="deck">Deck Cleaning</option>
            <option value="trash">Trash Can Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="mowing">Lawn Mowing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-crimson-500" 
          placeholder="Please provide any additional details about your service needs..."
        ></textarea>
      </div>
      
      <div className="mt-6">
        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          className="py-3 text-lg font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
        </Button>
      </div>
      
      <p className="mt-4 text-sm text-gray-500 text-center">
        We'll get back to you within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;