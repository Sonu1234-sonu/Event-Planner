import React from "react";
import bgphoto from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="-mt-30 relative h-200 flex justify-center items-center">
      <img src={bgphoto} alt="" className="absolute -z-1 " />

      <div className="grid justify-items-center" >
        <h1 className="text-fuchsia-500  text-shadow-cyan-300 text-shadow-lg text-6xl text-center font-bold font-[family-name:var(--customFont) ">
          Turning Dreams into Reality
        </h1>
         <div className="flex justify-items-center gap-5 mt-9">
        <button className="rounded px-5 py-3 bg-pink-400  ">Book Now</button>
        <button className="rounded px-5 py-3 bg-pink-400">Read More</button>
      </div>
      </div>
     
    </div>
  );
};

export default Hero;
