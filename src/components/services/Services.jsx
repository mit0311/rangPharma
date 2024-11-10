// Services.js
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServicesCard';

const Services = () => {
  const services = [
    {
      icon: 'path/to/prescribing-tools-icon.png',
      title: 'Shot Blasting',
      description: 'Search our formulary list of preferred drugs. Find a pharmacy clinical',
    },
    {
      icon: 'path/to/specialty-medications-icon.png',
      title: 'Copper Slag Blasting',
      description: 'Some patients require specialty drugs for chronic or complex conditions',
    },
    {
      icon: 'path/to/pharmacy-claims-icon.png',
      title: 'Sand Blasting',
      description: 'Search our formulary list of preferred drugs. Find a pharmacy clinical',
    },
    {
        icon: 'path/to/prescribing-tools-icon.png',
        title: 'Protectomastic Coatings',
        description: 'Search our formulary list of preferred drugs. Find a pharmacy clinical',
      },
      {
        icon: 'path/to/specialty-medications-icon.png',
        title: 'Epoxy Coatings',
        description: 'Some patients require specialty drugs for chronic or complex conditions',
      },
      {
        icon: 'path/to/pharmacy-claims-icon.png',
        title: 'PU Coatings',
        description: 'Search our formulary list of preferred drugs. Find a pharmacy clinical',
      },
      {
        icon: 'path/to/prescribing-tools-icon.png',
        title: 'Zinc Silicate / Chromate',
        description: 'Search our formulary list of preferred drugs. Find a pharmacy clinical',
      },
   
    // Add more service items if needed
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  // Automatic page change every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      changePage(currentPage === totalPages - 1 ? 0 : currentPage + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentPage, totalPages]);

  // Function to change the page with animation
  const changePage = (newPage) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setAnimating(false);
    }, 500); // Duration of the animation
  };

  

  // Get the current services
  const currentServices = services.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="py-16 px-4 bg-gray-100" style={{marginTop:"85px"}}>
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transform transition-transform duration-500 ease-in-out ${
            animating ? 'translate-x-full' : ''
          }`}
        >
          {currentServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentPage === index
                ? 'bg-blue-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => changePage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
