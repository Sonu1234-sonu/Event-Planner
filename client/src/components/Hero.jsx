import React from "react";
import bgphoto from "../assets/bg-homepage.jpg";

const Hero = () => {
  return (
   <>
   <div className="mt-[-10%] relative h-200 flex justify-center items-center">
        <img src={bgphoto} alt="" className="absolute -z-1 opacity-120" />

        <div className="grid mt-30 gap-20 justify-items-center bg-gradient-to-r from-red-400/15 to-pink-200/25 rounded-xl p-10 w-3/4">
          <h1 className="text-9xl font-black font-[family-name:var(--customFont)]  text-center bg-[url('12609.webp')] bg-center bg-contain bg-clip-text text-pink-200   p-3">
            Turn Your Dream Into Reality
          </h1>
          <div className="flex gap-10 ">
            <button className="rounded px-10 py-3  text-white  bg-pink-500 hover:bg-pink-600">Book Now</button>
          <button className="rounded px-10 py-3 text-pink-500 border-3 border-pink-500 hover:bg-pink-600 hover:text-white">Read More</button>
          </div>
        </div>
      </div>
   
   </>
  );
};

export default Hero;
