import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import loginimg from "../assets/login.jpg";
import api from "../config/api";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    console.log(registerData);
    try {
      const res = await api.post("/auth/register", registerData);
      toast.success(res.data.message);
      setRegisterData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
      });
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`

      );
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center  ">
        <img src={loginimg} alt="" className="absolute  w-full " />
        <div className="backdrop-blur-md bg-white/10 border gap-5 border-white-400 p-9 rounded-2xl shadow-lg w-80 text-white">
          <h2 className="text-center text-2xl font-semibold mb-6 text-fuchsia-300 py-4 rounded-lg">
            {" "}
            Event Palnner Register Now
          </h2>
          <form onSubmit={handelSubmit}>
            <div className="space-y-5 ">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Username"
                  value={registerData.fullName}
                  onChange={handelChange}
                  className="w-full py-2 pl-10 pr-4 text-white placeholder-gray-300 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <span className="absolute left-3 top-2.5 text-white">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-full py-2 pl-10 pr-4 text-white placeholder-gray-300 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={registerData.email}
                  onChange={handelChange}
                />
                <span className="absolute left-3 top-2.5 text-white">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={handelChange}
                  className="w-full py-2 pl-10 pr-4 text-white placeholder-gray-300 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <span className="absolute left-3 top-2.5 text-white">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number "
                  value={registerData.phone}
                  onChange={handelChange}
                  className="w-full py-2 pl-10 pr-4 text-white placeholder-gray-300 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <span className="absolute left-3 top-2.5 text-white">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <button className="mt-6 w-full bg-pink-400 text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition">
              Register
            </button>
            <p className="text-center text-sm mt-4">
              Already have account :
              <Link to={"/login"} className="underline ml-1">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
