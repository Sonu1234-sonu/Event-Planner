import React from "react";
import logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import {Toaster} from "react-hot-toast";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center  align-iteam-centre gap-18 items-center font-bold sticky  top-0 z-99 text-white ">
        <Link to={"/"} >Home</Link>
        <Link to={"/about"} >About</Link>
        <Link to={"/services"}className="text-white">Services</Link>
        <Link to={"/"} ><img src={logo} alt="" className=" mt-5 h-30 w-30 font-bold"/></Link>

        <Link to={"/stories"}  >Stories</Link>
        <Link to={"/gallery"} >Gallery</Link>
        <Link to={"/contact"} >Contact</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </>
  );
};

export default Navbar;