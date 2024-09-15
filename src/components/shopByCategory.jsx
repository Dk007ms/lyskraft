import React from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Topwear",
    name2: "Bottomwear",
    image: "/assets/shopByCategory/image1.png",
  },
  { name: "Dresses", name2: "", image: "/assets/shopByCategory/image2.png" },
  {
    name: "Co-ord Sets",
    name2: "",
    image: "/assets/shopByCategory/image3.png",
  },
  {
    name: "Jackets",
    name2: "Jeans",
    image: "/assets/shopByCategory/image4.png",
  },
  { name: "Bags", name2: "", image: "/assets/shopByCategory/image5.png" },
  { name: "Jewellery", name2: "", image: "/assets/shopByCategory/image6.png" },
];

const ShopByCategories = () => {
  return (
    <div className="font-sans max-w-md mx-auto my-8 p-4 bg-white relative">
      {/* Title and View All link */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">SHOP BY CATEGORIES</h2>
        <a href="#" className="text-blue-600 text-sm flex items-center">
          VIEW ALL <ArrowRight size={16} />
        </a>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-2 gap-2 relative">
        {/* First row (Topwear and Bottomwear) */}
        <div className="col-span-1 row-span-2 relative">
          <img
            src={categories[0].image}
            alt={categories[0].name}
            className="w-full h-full object-cover rounded-tl-lg"
          />
          <div className="absolute top-2 left-2 text-white text-sm font-semibold">
            {categories[0].name}
          </div>
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white z-10"></div>
          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
            {categories[0].name2}
          </div>
        </div>
        <div className="col-span-1 row-span-2 relative">
          <img
            src={categories[1].image}
            alt={categories[1].name}
            className="w-full h-full object-cover rounded-tr-lg"
          />
          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
            {categories[1].name}
          </div>
        </div>

        {/* Second and third row */}
        {categories.slice(2).map((category, index) => (
          <div key={category.name} className="relative">
            <img
              src={category.image}
              alt={category.name}
              className={`w-full h-full object-cover ${
                index === 2
                  ? "rounded-bl-lg"
                  : index === 3
                  ? "rounded-br-lg"
                  : ""
              }`}
            />
            <div className="absolute top-2 left-2 text-white text-sm font-semibold">
              {index === 1 ? category.name : category.name2}
            </div>
            {index === 1 ? (
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white z-10"></div>
            ) : (
              ""
            )}
            <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
              {index === 1 ? category.name2 : category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
