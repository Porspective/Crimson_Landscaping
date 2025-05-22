import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplets, Home, LayoutGrid, CheckCircle, Car, Trash2, Wind, Building
} from 'lucide-react';
import CallToAction from '../components/sections/CallToAction';

const ServiceDetails: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  imageUrl: string;
}> = ({ title, description, icon, benefits, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
    <div className="md:flex">
      <div 
        className="md:w-1/3 h-64 md:h-auto bg-center bg-cover" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="md:w-2/3 p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-crimson-100 rounded-full text-crimson-700 mr-3">
            {icon}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        
        <p className="text-gray-700 mb-6">{description}</p>
        
        <h3 className="text-lg font-semibold mb-3">Benefits:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-crimson-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6">
          <Link to="/contact" className="btn-primary">
            Request This Service
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Driveway Cleaning',
      description: 'Our professional driveway cleaning service removes stubborn stains, oil spots, mold, mildew, and other contaminants that can make your driveway look old and neglected. Using state-of-the-art pressure washing equipment and techniques, we\'ll restore your driveway to like-new condition.',
      icon: <Car className="h-6 w-6" />,
      benefits: [
        'Removes tough oil stains and grease',
        'Prevents slippery mold and mildew growth',
        'Extends the life of your driveway',
        'Enhances your home\'s curb appeal',
        'Prevents weed growth in cracks',
        'Prepares surface for sealing'
      ],
      imageUrl: '/driveway.png'
    },
    {
      title: 'House Washing',
      description: 'Our soft wash house cleaning service safely removes dirt, grime, mold, mildew, and algae from your home\'s exterior without damaging the surfaces. We use specialized equipment and biodegradable cleaning solutions to effectively clean vinyl siding, brick, stucco, and other exterior surfaces.',
      icon: <Home className="h-6 w-6" />,
      benefits: [
        'Removes unsightly mold, mildew, and algae',
        'Prevents damage from organic growth',
        'Improves your home\'s appearance instantly',
        'Extends the life of your siding and paint',
        'Prepares surfaces for painting',
        'Maintains property value'
      ],
      imageUrl: '/house.png'
    },
    {
      title: 'Deck Cleaning',
      description: 'Restore the beauty of your outdoor living space with our professional deck cleaning service. We safely remove dirt, grime, mold, mildew, and algae from your deck surface and railing, bringing back its natural color and extending its lifespan.',
      icon: <LayoutGrid className="h-6 w-6" />,
      benefits: [
        'Removes built-up dirt and organic growth',
        'Restores natural wood color and appearance',
        'Prevents slippery surfaces and accidents',
        'Extends the life of your deck',
        'Prepares wood for staining or sealing',
        'Improves outdoor entertainment areas'
      ],
      imageUrl: '/deck.png'
    },
    {
      title: 'Trash Can Cleaning',
      description: 'Our professional trash can cleaning service eliminates odors, bacteria, and contaminants from your garbage bins. We use specialized equipment and eco-friendly disinfectants to thoroughly clean and sanitize your cans, leaving them fresh and hygienic.',
      icon: <Trash2 className="h-6 w-6" />,
      benefits: [
        'Eliminates foul odors and bacteria',
        'Prevents pest infestations',
        'Reduces health risks for your family',
        'Eco-friendly cleaning solutions',
        'Convenient scheduled service options',
        'Extends the life of your trash cans'
      ],
      imageUrl: '/trashcan1.png'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Our commercial pressure washing services help businesses maintain a clean, professional appearance. We clean storefronts, sidewalks, parking lots, dumpster areas, and other commercial spaces to remove grime, graffiti, gum, oil stains, and more.',
      icon: <Building className="h-6 w-6" />,
      benefits: [
        'Improves business curb appeal',
        'Creates a positive first impression for customers',
        'Maintains property value',
        'Reduces slip and fall hazards',
        'Complies with health regulations',
        'Scheduled maintenance plans available'
      ],
      imageUrl: '/commercial.png'
    },
    {
      title: 'Lawn Mowing',
      description: 'Our professional lawn mowing service keeps your yard looking perfectly manicured year-round. We provide regular mowing with precision cutting techniques, edging, and cleanup to ensure your lawn is the envy of the neighborhood.',
      icon: <Wind className="h-6 w-6" />,
      benefits: [
        'Consistent, professional cuts',
        'Proper grass height for optimal health',
        'Clean edging along sidewalks and driveways',
        'Debris cleanup included',
        'Regular scheduled service available',
        'Seasonal adjustments for grass type'
      ],
      imageUrl: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div>
      {/* Services Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive cleaning and maintenance solutions to keep your 
            property looking its best year-round.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {services.map((service, index) => (
            <ServiceDetails
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              benefits={service.benefits}
              imageUrl={service.imageUrl}
            />
          ))}
          
          {/* Custom Services */}
          <div className="bg-crimson-50 border border-crimson-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Don't see exactly what you're looking for? We offer customized cleaning solutions 
              to meet your specific needs. Contact us to discuss your requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default ServicesPage;