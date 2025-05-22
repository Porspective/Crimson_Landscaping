import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import ResultsShowcase from '../components/sections/ResultsShowcase';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <ResultsShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;