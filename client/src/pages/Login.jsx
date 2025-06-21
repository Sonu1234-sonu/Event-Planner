import React from "react";
import loginimg from "../assets/img7.avif"
const Login = () => {
  return (
    <>
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center " >
      <img src={loginimg} alt="" className="absolute  w-full " />
      <div className="backdrop-blur-md bg-white/10 border border-white/30 p-9 rounded-2xl shadow-lg w-80 text-white">
        <h2 className="text-center text-2xl font-semibold mb-6 bg-white/20 py-4 rounded-lg">Login</h2>
        <div className="space-y-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-2 pl-10 pr-4 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span className="absolute left-3 top-2.5 text-white">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 pl-10 pr-4 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span className="absolute left-3 top-2.5 text-white">
              <i className="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm mt-4">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="form-checkbox text-white" />
            Remember me
          </label>
          <a href="#" className="hover:underline">Forgot password?</a>
        </div>
        <button className="mt-6 w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition">
          Login
        </button>
        <p className="text-center text-sm mt-4">
          Don’t have an account? <a href="#" className="underline">Register</a>
        </p>
      </div>
    </div>
      
    </>
  );
};

export default Login;
