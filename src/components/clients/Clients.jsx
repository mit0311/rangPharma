import React from 'react';
import ClientImage1 from "../../assets/images/sigma_roto_lining_llp.avif"
import ClientImage from "../../assets/images/sigma_roto_lining_llp.avif"


const clients = [
  { id: 1, src: ClientImage1, alt: 'Client 1' },
  { id: 2, src: ClientImage, alt: 'Client 2' },
  { id: 3, src: ClientImage, alt: 'Client 3' },
  { id: 4, src: ClientImage, alt: 'Client 4' },
  { id: 5, src: ClientImage, alt: 'Client 5' },
  { id: 6, src: ClientImage, alt: 'Client 6' },
  { id: 7, src: ClientImage, alt: 'Client 7' },
  { id: 8, src: ClientImage, alt: 'Client 8' },
  { id: 9, src: ClientImage, alt: 'Client 9' },
  { id: 10, src: ClientImage, alt: 'Client 10' },
];

const Clients= () => {
  return (
    <div className="container mx-auto p-8 text-center mt-32">
      <h2 className="text-lg font-semibold mb-6 tracking-wide text-gray-600">
        Trusted by Business Leaders
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {clients.map(client => (
          <div key={client.id} className="flex justify-center items-center">
            <img src={client.src} alt={client.alt} className="h-16 md:h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
