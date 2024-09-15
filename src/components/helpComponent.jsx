import React from "react";
import { ExternalLink } from "lucide-react";

const WhatsAppPrompt = () => {
  return (
    <div className="flex items-center justify-between bg-[#F4FEFA] p-4 py-8 my-8 mx-4 rounded-lg max-w-md">
      <div>
        <p className="font-semibold text-gray-800 mb-1">
          Need any help? Simply drop us a text.
        </p>
        <a
          href="#"
          className="text-blue-600 flex items-center text-sm font-medium hover:text-blue-800 transition-colors"
        >
          WHATSAPP US
          <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
      <div className="rounded-full p-2">
        <img src="/assets/logos_whatsapp-icon.png" alt="whatsapp" />
      </div>
    </div>
  );
};

export default WhatsAppPrompt;
