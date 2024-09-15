import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const VideoShoppingPromo = () => {
  return (
    <div className="max-w-md mx-auto p-4 rounded-lg my-8">
      <h1 className="text-md font-bold text-left mb-4">
        SHOP FROM OUR STORE VIA VIDEO CALL
      </h1>

      <div className="shopVideoCall">
        <div className="relative aspect-video mb-4">
          <img
            src="/assets/shopVideocall/videoCallStore.png"
            alt="Store stylist showing clothes"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <p className="text-left text-gray-700 mb-6 px-4">
          Let our stylist give you a store tour and show you the perfect items
          for your needs - fast and easy!
        </p>

        <div className="flex py-2 px-2 gap-4">
          <button className="flex-1 text-blue-600 bg-white py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white transition-colors">
            <Phone size={24} />
            VIDEO CALL
          </button>
          <button className="flex-1 text-purple-600 bg-white py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-purple-700 hover:text-white transition-colors">
            <MessageCircle size={24} />
            CHAT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoShoppingPromo;
