import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ui/ServiceCard';
import { Droplets, Home, LayoutGrid, CheckCircle, Car, Trash2, Wind } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Lawn Mowing',
      description: 'Keep your lawn looking perfectly manicured with our professional mowing service.',
      icon: <Wind className="h-5 w-5" />,
      imageUrl: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'House Washing',
      description: 'Our soft wash house cleaning service safely removes dirt, grime, mold, mildew, and algae from your home\'s exterior without damaging the surfaces.',
      icon: <Home className="h-5 w-5" />,
      imageUrl: '/house.png'
    },
    {
      title: 'Deck Cleaning',
      description: 'Revitalize your outdoor living space with our specialized deck cleaning service.',
      icon: <LayoutGrid className="h-5 w-5" />,
      imageUrl: '/deck.png'
    },
    {
      title: 'Trash Can Cleaning',
      description: 'Eliminate odors and bacteria with our thorough trash can cleaning service.',
      icon: <Trash2 className="h-5 w-5" />,
      imageUrl: '/trashcan1.png'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Maintain your business\'s professional appearance with our commercial pressure washing services.',
      icon: <Droplets className="h-5 w-5" />,
      imageUrl: '/commercial.png'
    },
    {
      title: 'Driveway Cleaning',
      description: 'Remove stubborn stains, oil spots, and grime from your driveway with our professional pressure washing service.',
      icon: <Car className="h-5 w-5" />,
      imageUrl: '/driveway.png'
    }
  ];

  return (
    <section className="section bg-gray-50" id="services">
      <div className="container-custom">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide comprehensive cleaning and maintenance solutions for residential 
            and commercial properties throughout Oklahoma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;