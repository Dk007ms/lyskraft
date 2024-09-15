import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const stores = [
  {
    id: 1,
    name: "Ambience Mall",
    location: "Delhi",
    address: "Ambience Island, Vasant Kunj, Delhi",
    hours: "10:00 AM to 09:00 PM",
    image: "/assets/stores/gurugramStore.png",
  },
  {
    id: 2,
    name: "DLF Mall",
    location: "Delhi",
    address: "DLF Place, Saket, Delhi",
    hours: "11:00 AM to 08:00 PM",
    image: "/assets/stores/gurugramStore.png",
  },
  {
    id: 3,
    name: "Ambience Mall",
    location: "Gurgaon",
    address: "NH 8, DLF Phase 3, Gurgaon",
    hours: "10:00 AM to 09:00 PM",
    image: "/assets/stores/gurugramStore.png",
  },
  {
    id: 4,
    name: "MGF Metropolitan",
    location: "Gurgaon",
    address: "MG Road, Gurgaon",
    hours: "10:30 AM to 08:30 PM",
    image: "/assets/stores/gurugramStore.png",
  },
  // Add more store objects as needed
];

const StoreLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState("Delhi");

  const filteredStores = stores.filter(
    (store) => store.location === selectedLocation
  );

  return (
    <div className="max-w-md mx-auto p-4 font-sans">
      <h2 className="text-lg font-semibold mb-2">OUR STORES</h2>
      <div className="flex space-x-2 mb-4">
        {["Delhi", "Gurgaon"].map((location) => (
          <button
            key={location}
            className={`px-4 py-1 rounded-full text-sm ${
              selectedLocation === location
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setSelectedLocation(location)}
          >
            {location}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{store.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{store.address}</p>
                <p className="text-xs text-gray-600">{store.hours}</p>
                <a
                  href="#"
                  className="text-blue-600 text-xs flex items-center mt-2"
                >
                  VIEW DETAILS <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreLocations;
