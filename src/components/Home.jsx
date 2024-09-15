import React, { useState,useEffect } from "react";
import {
  Menu,
  ShoppingBag,
  Home,
  LayoutGrid,
  Search,
  User,
  Truck,
} from "lucide-react";
import "../styles/home.css"
import WeeklyDrops from "./weeklyDrops";
import CoyuAssurance from "./coyuAssurance";
import ShopByCategories from "./shopByCategory";
import VideoShoppingPromo from "./shopVideoCall";
import BrandShowcase from "./brandsSections";
import BestsellersSection from "./bestSellers";
import StoreLocations from "./stores";
import StoreEvents from "./storeEvents";
import InstagramFeed from "./instaProd";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/assets/homepageImages/homePage1.png",
    "/assets/homepageImages/homePage2.png",
    "/assets/homepageImages/homePage3.png",
    "/assets/homepageImages/homePage4.png",
    // Add more image paths as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleclick();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSlide]); // Dependency array includes currentSlide

  function handleclick() {
    setCurrentSlide((prev) => {
      if (prev !== images.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className="font-['Hanken_Grotesk'] bg-white h-full overflow-scroll w-full max-w-md mx-auto flex flex-col">
      {/* Header */}
      <header className="px-4 py-4 flex justify-between items-center">
        <Menu size={24} />
        <div className="flex items-center">
          <img src="/assets/coyu.png" alt="Oletter" className="relative" />
        </div>
        <ShoppingBag size={24} />
      </header>

      {/* Main Content */}
      <main className="flex-grow relative  px-4 pt-2 pb-14 flex justify-center items-center">
        <div className="relative w-[336px] h-[479px] lg:w-[500px] lg:h-[600px] main-container rounded-full shadow-lg">
          {/* Image */}
          <div className="absolute inset-0 image-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 rounded-full ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Overlay Text */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-xs uppercase mb-1 tracking-wide">
              New Collection
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold">Winter Edit</h2>
          </div>

          {/* Arrow Button */}
          <button
            onClick={handleclick}
            className="absolute bottom-4 right-0 left-0 mx-auto w-6 h-6 bg-white rounded-[4px] flex justify-center items-center p-2 shadow-md"
          >
            <span className="text-black text-sm text-[#3132EB]">→</span>
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </main>

      <section>
        <WeeklyDrops />
        <CoyuAssurance/>
        <ShopByCategories/>
        <VideoShoppingPromo/>
        <BrandShowcase/>
        <BestsellersSection/>
        <StoreLocations/>
        <StoreEvents/>
        <InstagramFeed/>
        <StoreEvents/>
      </section>

      <div className="fixed bottom-0 w-screen">
        {/* Express Delivery Banner */}
        <div className="delivery bg-[#F3F3F3] py-2 px-4 mx-4 -mt-2 flex items-center justify-center gap-1">
          <Truck size={16} className="text-[#393AFB] mr-2" />
          <span className="text-sm font-medium">
            90 MINUTES EXPRESS DELIVERY
          </span>
        </div>

        {/* Footer */}
        <footer className="bg-white py-2 px-4 border-t border-gray-200">
          <div className="flex justify-between items-center relative">
            <div className="flex flex-col items-center">
              <Home size={20} className="text-[#393AFB]" />
              <span className="text-xs mt-1 text-[#393AFB]">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <LayoutGrid size={20} />
              <span className="text-xs mt-1">Categories</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-[#393AFB] bg-white flex items-center justify-center -mt-6">
                <div className="w-11 h-11 rounded-full overflow-hidden">
                  <img
                    src="/assets/homepageImages/stylist.png"
                    alt="Stylist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs mt-1">Stylist</span>
            </div>
            <div className="flex flex-col items-center">
              <Search size={20} />
              <span className="text-xs mt-1">Occasions</span>
            </div>
            <div className="flex flex-col items-center">
              <User size={20} />
              <span className="text-xs mt-1">Profile</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
