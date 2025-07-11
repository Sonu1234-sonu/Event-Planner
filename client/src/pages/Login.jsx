import React, { useState } from "react";
import loginimg from "../assets/login.jpg";
import { Link } from "react-router-dom";
import api from "../config/api";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const formSubmitKro = async (e) => {
    e.preventDefault();
    const logindata = {
      email: email,
      password: password,
    };
       try {
      const res = await api.post("/auth/login", logindata);
      toast.success(res.data.message);
      setPassword("");
      setEmail("");
      navigate("/userDashboard");
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
      console.log(error);
    }
    console.log(logindata);
  };

  return (
    <>
      <div className=" relative min-h-screen bg-cover bg-center flex items-center justify-center ">
        <img src={loginimg} alt="" className="absolute  w-full -z-10 " />
        <div className="backdrop-blur-md bg-white/10 border border-pink-400 p-9 rounded-2xl shadow-lg w-80 text-white">
          <h2 className="text-center text-2xl font-semibold mb-6 text-fuchsia-300 py-4 rounded-lg">
            {" "}
            Event Palnner Login
          </h2>
          <form action="" onSubmit={formSubmitKro}>
            <div className="space-y-5">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <span className="absolute left-3 top-2.5 text-white">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
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
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <button className="mt-6 w-full bg-pink-400 text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition">
              Login
            </button>
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <a href="#" className="underline">
                {" "}
                <Link to={"/register"}>Register</Link>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
