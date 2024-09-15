import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const stores = [
  {
    id: 1,
    name: "Ambience Mall, Vasant Kunj",
    location: "Delhi",
    event: "Collection drop: Evening Glamour",
    date: "26-Aug-2024",
    image: "/assets/storeEvents/eveningGlamour.png",
  },
  {
    id: 2,
    name: "Ambience Mall, Vasant Kunj",
    location: "Delhi",
    event: "Independence Day Special",
    date: "26-Aug-2024",
    image: "/assets/storeEvents/independenceDay.png",
  },
  {
    id: 3,
    name: "Ambience Mall, Gurgaon",
    location: "Gurgaon",
    event: "Fashion Fiesta",
    date: "27-Aug-2024",
    image: "/assets/storeEvents/eveningGlamour.png",
  },
  {
    id: 4,
    name: "MGF Metropolitan, Gurgaon",
    location: "Gurgaon",
    event: "End of Season Sale",
    date: "28-Aug-2024",
    image: "/assets/storeEvents/independenceDay.png",
  },
  // Add more event objects as needed
];

const StoreEvents = () => {
  const [selectedLocation, setSelectedLocation] = useState("Delhi");

  const filteredStores = stores.filter(
    (store) => store.location === selectedLocation
  );

  return (
    <div className="max-w-lg mx-auto p-4 font-sans">
      <h2 className="text-lg font-semibold mb-2">STORE EVENTS</h2>
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
                alt={store.event}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{store.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{store.event}</p>
                <p className="text-xs text-gray-600">{store.date}</p>
                <a
                  href="#"
                  className="text-blue-600 text-xs flex items-center mt-2"
                >
                  BOOK A SLOT <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreEvents;
