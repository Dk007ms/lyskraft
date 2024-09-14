import React from "react";
import { CheckCircle } from "lucide-react"; // You can choose a different icon if needed
import "../styles/home.css"

const CoyuAssurance = () => {
  const cards = [
    {
      title: "Premium quality",
      description:
        "Each product is tested in store for premium fabric and exceptional craftsmanship.",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Perfect fit",
      description:
        "Our products are designed to ensure a perfect fit, no matter the size.",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "24x7 Support",
      description:
        "We provide round-the-clock support to ensure a seamless shopping experience.",
      icon: <CheckCircle size={24} />,
    },
  ];

  return (
    <div className="font-sans max-w-md mx-auto p-4">
      {/* Title and Subheading */}
      <div className="text-left mb-4">
        <h3 className="font-bold text-lg">COYU ASSURANCE</h3>
        <p className="text-gray-500">
          Premium quality | Perfect fit | 24x7 Support
        </p>
      </div>

      {/* Carousel / Cards */}
      <div className="relative">
        {/* Add carousel functionality if needed, here it's just a horizontal scrolling container */}
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F4FF] rounded-lg p-4 shadow-md flex-shrink-0 w-64 snap-center delivery"
            >
              <div className="flex items-center mb-2">
                {card.icon}
                <h4 className="ml-2 font-semibold text-lg">{card.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots (if you want them) */}
      <div className="flex justify-center mt-4">
        <span className="inline-block w-2 h-2 mx-1 bg-gray-400 rounded-full"></span>
        <span className="inline-block w-2 h-2 mx-1 bg-black rounded-full"></span>
        <span className="inline-block w-2 h-2 mx-1 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default CoyuAssurance;
