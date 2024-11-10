import React, { useState } from "react";
import ServiceModal from "../servicemodal/ServiceModal";

const ServiceCard = ({ icon, title, description }) => {
  const [openModal, setOpenModal] = useState(false);

  const learnMoreClickHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 ease-out hover:scale-105  hover:shadow-2xl">
        <div className="w-16 h-16 mb-4 transform transition-transform duration-300 ease-out hover:scale-110">
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={learnMoreClickHandler}
        >
          Learn More
        </button>
      </div>
      <ServiceModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={title}
        description={description}
      />
    </>
  );
};

export default ServiceCard;
