import React from "react";
import { ChevronRight, Heart, ArrowRight } from "lucide-react";

const WeeklyDrops = () => {
  const items = [
    {
      id: 1,
      src: "/assets/weeklyDrops/weeklyMain.png",
      alt: "Fashion item 1",
      label: "NEW BRAND",
      brand: "Stavoss",
    },
    {
      id: 2,
      src: "/assets/weeklyDrops/weekly1.png",
      alt: "Fashion item 2",
    },
    {
      id: 3,
      src: "/assets/weeklyDrops/weekly2.png",
      alt: "Fashion item 3",
    },
    {
      id: 4,
      src: "/assets/weeklyDrops/weekly3.png",
      alt: "Fashion item 4",
    },
    {
      id: 5,
      src: "/assets/weeklyDrops/weekly4.png",
      alt: "Fashion item 5",
    },
    {
      id: 6,
      src: "/assets/weeklyDrops/weekly5.png",
      alt: "Fashion item 6",
    },
  ];

  return (
    <div className="font-sans max-w-md mx-auto my-8 p-4 relative h-full">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">FRESH DROPS OF THE WEEK</h2>
          <a href="#" className="text-blue-600 text-sm flex items-center">
            VIEW ALL <ChevronRight size={16} />
          </a>
        </div>
        <p className="text-sm text-gray-600">300+ styles dropped</p>
      </div>

      <div className="grid grid-cols-3 gap-1 mb-4">
        {/* Main Large Image */}
        <div className="relative col-span-2 row-span-2">
          <img
            src={items[0].src}
            alt={items[0].alt}
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute top-2 right-2 bg-white rounded-full p-1">
            <Heart size={16} />
          </button>
          <div className="flex flex-col justify-center gap-1 px-2 py-1 rounded absolute bottom-0">
            <div className="text-white text-xs">{items[0].label}</div>
            <div className="text-white text-4xl font-semibold">
              {items[0].brand}
            </div>
          </div>
          <button className="absolute bottom-2 right-2 bg-white rounded-sm p-1">
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Smaller Images */}
        {items.slice(1).map((item, index) => (
          <div
            key={item.id}
            className={`relative ${index >= 2 ? "col-span-1" : "col-span-1"}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <h3 className="text-sm font-semibold mb-2 mt-8">
        GET NEW DROPS & OFFERS ON WHATSAPP
      </h3>
      <div className="bg-[#F3F4FF] p-4 py-8 rounded-lg flex flex-col ">
        <div className="flex items-center">
          <div className="flex-1 mr-2">
            <input
              type="tel"
              placeholder="ENTER YOUR NUMBER"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            SUBMIT
          </button>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>NEXT DROP IN</span>
          <div className="flex space-x-2">
            <span>03 DAYS</span>
            <span>15 HRS</span>
            <span>40 MINS</span>
            <span>29 SECS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDrops;
