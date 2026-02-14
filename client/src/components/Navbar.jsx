import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
// import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { IoHome } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, isLogin, isAdmin } = useAuth();
  const [navBg, setNavBg] = useState(false);

  const location = useLocation().pathname;
  console.log(location);

  const NavBarDesign = () => {
    location === "/" || location === "/login" || location === "/register"
      ? setNavBg(false)
      : setNavBg(true);
  };

  const handleClick = () => {
    isAdmin ? navigate("/adminpanel") : navigate("/dashboard");
  };

  useEffect(() => {
    NavBarDesign();
  }, [location]);
  return (
    <>
      <div className="flex justify-center h-20 w-full align-iteam-centre gap-18 items-center font-bold  fixed top-0 z-99 bg-transparent text-pink-500">
        <Link to={"/"} className="flex gap-4">
          <IoHome className="h-7" />
          Home
        </Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/"}>
          <img src={logo} alt="" className=" mt-1 h-40 w-40 font-bold " />
        </Link>
        <Link to={"/stories"}>Stories</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact</Link>
        {/* <Link to={"/login"} className="flex gap-4"><IoIosLogIn className="h-7"/>Login</Link> */}

        {isLogin ? (
          <div
            className="flex gap-3 items-center cursor-pointer"
            onClick={handleClick}
          >
            <img
              src={user.photo}
              alt="User Dp"
              className="h-10 w-10 border rounded-full object-cover"
            />
            <span className="text-pink-500">{user.fullName}</span>
          </div>
        ) : (
          <button
            className="border p-3 rounded-md"
            onClick={() => navigate("login")}
          >
            {" "}
            Login to Plan your event{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
