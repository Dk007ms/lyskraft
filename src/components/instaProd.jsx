import React from "react";
import { ArrowRight, Instagram } from "lucide-react";

const instagramPosts = [
  { id: 1, imageUrl: "/assets/instaProd/image3.png" },
  { id: 2, imageUrl: "/assets/instaProd/image2.png" },
  { id: 3, imageUrl: "/assets/instaProd/image3.png" },
  { id: 4, imageUrl: "/assets/instaProd/image4.png" },
  { id: 5, imageUrl: "/assets/instaProd/image5.png" },
  { id: 6, imageUrl: "/assets/instaProd/image2.png" },
];

const InstagramFeed = () => {
  const instagramUrl = "https://www.instagram.com/coyuofficial/";

  return (
    <div className="max-w-7xl mx-auto p-4 my-8 font-sans">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div className="flex items-center">
          <Instagram className="text-pink-500 mr-2" size={24} />
          <h2 className="text-xl font-bold">OUR INSTAGRAM</h2>
          <span className="text-pink-500 ml-2 font-bold">@COYU</span>
        </div>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 flex items-center text-sm font-semibold group transition-colors duration-300 ease-in-out hover:text-pink-600"
        >
          FOLLOW US
          <ArrowRight
            size={18}
            className="ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <img
              src={post.imageUrl}
              alt={`Instagram post ${post.id}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <Instagram
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                size={24}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
