import React from "react";
import logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import { IoHome } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-center  align-iteam-centre gap-18 items-center font-bold sticky  top-0 z-99 text-white ">
        <Link to={"/"} className="flex gap-4"><IoHome className="h-7"/>Home</Link>
        <Link to={"/about"}  >About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/"} ><img src={logo} alt="" className=" mt-5 h-30 w-30 font-bold"/></Link>

        <Link to={"/stories"}  >Stories</Link>
        <Link to={"/gallery"} >Gallery</Link>
        <Link to={"/contact"} >Contact</Link>
        <Link to={"/login"} className="flex gap-4"><IoIosLogIn className="h-7"/>Login</Link>
      </div>
    </>
  );
};

export default Navbar;