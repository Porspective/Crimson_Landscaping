import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setSubmitError('');
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (formData.phone && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xanjwbql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Explicitly consume the response body as text instead of JSON
        await response.text();
        
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
      } else {
        setSubmitError('Submission failed. Please email us directly or try again later.');
      }
    } catch (error) {
      setSubmitError('Submission failed. Please email us directly or try again later.');
      console.error('Form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center text-crimson-900">Get a Free Quote</h3>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md text-center">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-crimson-500`}
            placeholder="Your name"
          />
          {formErrors.name && <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-crimson-500`}
            placeholder="Your email"
          />
          {formErrors.email && <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-crimson-500`}
            placeholder="(405) 293-5872"
          />
          {formErrors.phone && <p className="mt-1 text-red-500 text-sm">{formErrors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
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
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
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