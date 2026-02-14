import React from "react";
import bgphoto from "../assets/bg-homepage.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/login");
  };

  const handleReadMore = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={bgphoto}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-40 -z-10"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className="bg-pink/11 mt-30 rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Turn Your Dream Into Reality
            </h1>

            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Create unforgettable memories with our premium event planning
              services. From elegant banquet halls to exquisite catering, we
              make your special moments extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleBookNow}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>

              <button
                onClick={handleReadMore}
                className="px-8 py-4 border-2 border-pink-300 text-pink-200 font-semibold rounded-lg hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
