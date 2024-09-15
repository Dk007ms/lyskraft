import React from "react";
import { ExternalLink } from "lucide-react";
import "../styles/instaFeed.css";

const instagramPosts = [
  { id: 1, imageUrl: "/assets/instaProd/image1.png" },
  { id: 8, imageUrl: "/assets/instaProd/image4.png" },
  { id: 2, imageUrl: "/assets/instaProd/image2.png" },
  { id: 3, imageUrl: "/assets/instaProd/image3.png" },
  { id: 7, imageUrl: "/assets/instaProd/image4.png" },
  { id: 5, imageUrl: "/assets/instaProd/image5.png" },
  { id: 4, imageUrl: "/assets/instaProd/image4.png" },
  { id: 6, imageUrl: "/assets/instaProd/image6.png" },
];

const InstagramFeed = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 my-8 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">OUR INSTAGRAM @COYU</h2>
        <a
          href="#"
          className="text-blue-600 flex items-center text-sm group transition-colors duration-300 ease-in-out hover:text-blue-800"
        >
          INSTAGRAM
          <ExternalLink
            size={16}
            className="ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </a>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full overflow-auto">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="relative w-32 h-32 overflow-clip group"
          >
            <img
              src={post.imageUrl}
              alt={`Instagram post ${post.id}`}
              className="absolute w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              style={{ objectPosition: "center" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
