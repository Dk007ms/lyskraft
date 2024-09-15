import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const BestsellersSection = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Placeholder data - replace with your actual data and image URLs
  const bestsellers = [
    { id: 1, imageUrl: "/assets/bestSellers/1.png" },
    { id: 2, imageUrl: "/assets/bestSellers/2.png" },
    { id: 3, imageUrl: "/assets/bestSellers/3.png" },
    { id: 4, imageUrl: "/assets/bestSellers/4.png" },
    { id: 5, imageUrl: "/assets/bestSellers/5.png" },
    { id: 6, imageUrl: "/assets/bestSellers/6.png" },
  ];

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">BESTSELLERS</h2>
        <button className="text-blue-600 flex items-center text-sm">
          VIEW ALL
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          ref={row1Ref}
          className="flex transition-transform duration-300 ease-in-out mb-3"
        >
          {bestsellers.slice(0, 3).map((item, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 pr-3">
              <img
                src={item.imageUrl}
                alt={`Bestseller ${item.id}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div
          ref={row2Ref}
          className="flex transition-transform duration-300 ease-in-out"
        >
          {bestsellers.slice(3, 6).map((item, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 pr-3">
              <img
                src={item.imageUrl}
                alt={`Bestseller ${item.id}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestsellersSection;
