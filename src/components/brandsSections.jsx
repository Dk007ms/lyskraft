import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import "../styles/brands.css"

const BrandShowcase = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const brands = [
    { name: "Our love", logo: "/assets/brandsSection/ourlove.png" },
    { name: "AAVIDI", logo: "/assets/brandsSection/avidi.png" },
    { name: "BUNKA", logo: "/assets/brandsSection/bynka.png" },
    { name: "QU", logo: "/assets/brandsSection/qu.png" },
    { name: "Linen Bloom", logo: "/assets/brandsSection/linenBloom.png" },
    { name: "KANELLE", logo: "/assets/brandsSection/kanelle.png" },
    { name: "Rhe Ann", logo: "/assets/brandsSection/rihana.png" },
    { name: "Ti", logo: "/assets/brandsSection/Ti.png" },
  ];

  return (
    <div className="my-8 p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-800">OUR BRANDS</h2>
        <button className="text-blue-600 flex items-center text-sm">
          VIEW ALL
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="bg-[#F7F7FC] rounded-lg p-5 relative">
        <div className="text-center relative mb-8 mt-8">
          <img
            src="/assets/brandsSection/brandEllipseVector.png"
            alt="ellipse"
            className="absolute top-4 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto"
          />
          <h3 className="text-5xl font-serif mb-4 text-[#3132EB] relative z-0">
            Curated for you
          </h3>
          <img
            src="/assets/brandsSection/bgStar.png"
            alt="star"
            className="absolute top-8 -left-4 w-11 h-11 rotate-45"
          />
          <img
            src="/assets/brandsSection/bgStar.png"
            alt="star"
            className="absolute -top-12 -right-4 w-11 h-11 -rotate-90"
          />
        </div>
        <div className="overflow-hidden">
          <div
            ref={row1Ref}
            className="flex animate-slideRow1 transition-transform duration-300 ease-in-out"
          >
            {brands.slice(0, 4).map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 flex items-center justify-center h-24 w-1/3 flex-shrink-0 mx-1.5"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div
            ref={row2Ref}
            className="flex mt-3 animate-slideRow2 transition-transform duration-300 ease-in-out"
          >
            {brands.slice(4).map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 flex items-center justify-center h-24 w-1/3 flex-shrink-0 mx-1.5"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
