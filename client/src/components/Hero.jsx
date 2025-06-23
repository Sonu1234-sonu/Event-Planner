import React from "react";
import bgphoto from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="-mt-30 relative  flex justify-center items-center">
      <img src={bgphoto} alt="" className="absolute -z-1 " />

      <div className="grid justify-items-center mt-72" >
        <h1 className="text-fuchsia-500  text-shadow-cyan-300 text-shadow-lg text-6xl text-center font-bold font-[family-name:var(--customFont) ">
          Turning Dreams into Reality
        </h1>
         <div className="flex justify-items-center gap-5 mt-20">
        <button className= "bg-pink-300 rounded px-4 py-2 text-white hover:bg-pink-500 sm:px-8 sm:py-3 ">Book Now</button>
        <button className="bg-pink-300  rounded px-4 py-2 text-white hover:bg-pink-500 sm:px-8 sm:py-3 ">Read More</button>
      </div>
      </div>
    
    </div>
  );
};

export default Hero;
