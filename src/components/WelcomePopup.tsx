import React, { useEffect, useState } from "react";
import welcomeImage from "../assets/Frame 194.png";

const WelcomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-[95%] max-w-3xl text-center">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Text Content First */}
        <div className="mb-4 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 mb-4">
            Welcome to KG PATH! 🚀
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6">
           Master Full Stack Development, AI/ML, and Cloud Architecture — kickstart your tech career with us today!
          </p>
  
        </div>

        {/* Image Below */}
        <div className="w-full">
          <img
            src={welcomeImage}
            alt="Welcome to KGPATH"
            className="w-full h-auto max-h-[400px] object-cover rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
