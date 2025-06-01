import React from 'react';
import Button from './Button';

const ContactForm = () => (
  <form 
    action="https://formspree.io/f/xanjwbql"
    method="POST"
    className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
  >
    <input type="hidden" name="_next" value="https://crimson-landscaping.com/thank-you" />
    <input type="hidden" name="_subject" value="New Contact Submission" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">Full Name*</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-crimson-500" />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">Email*</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-crimson-500" />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-crimson-500" placeholder="(405) 293-5872" />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
        <select id="service" name="service" className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-crimson-500">
          <option value="">Select service</option>
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
      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
      <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-crimson-500"></textarea>
    </div>

    <div className="mt-8">
      <Button type="submit" variant="primary" className="w-full py-3">
        Get Free Quote
      </Button>
    </div>
  </form>
);

export default ContactForm;