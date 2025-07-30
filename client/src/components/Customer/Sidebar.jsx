import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../context/authContext";

const Sidebar = ({ active, setActive }) => {
  const { setUser, setIsLogin, setIsAdmin } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await api.get("/auth/logout");
    setUser("");
    sessionStorage.removeItem("EventUser");
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
  };
  return (
    <>
      <div className="w-100 border min-h-[87vh] p-5 flex flex-col justify-between ">
        <div>
          <div className="border-b-2 pb-3 h-fit">
            <span className="text-2xl font-bold">Customer's Dashboard</span>
          </div>

          <div className="py-8 px-5">
            <ul className="grid gap-2">
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white ${
                  active === "overview" && "bg-rose-600 text-white"
                }`}
                onClick={()=>setActive("overview")}
              >
                <FaTachometerAlt /> Overview
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white ${
                  active === "profile" && "bg-rose-600 text-white"
                }`}
                onClick={()=>setActive("profile")}
              >
                <FaUser /> Profile
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white ${
                  active === "bookings" && "bg-rose-600 text-white"
                }`}
                 onClick={()=>setActive("bookings")}
              >
                <FaCalendarCheck /> Bookings
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white ${
                  active === "support" && "bg-rose-600 text-white"
                }`}
                 onClick={()=>setActive("support")}
              >
                <FaLifeRing /> Support
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white ${
                  active === "feedback" && "bg-rose-600 text-white"
                }`}
                 onClick={()=>setActive("feedback")}
              >
                <FaCommentDots /> Feedback
              </li>
            </ul>
          </div>
        </div>
        <div>
        <button
            className="text-lg text-red-600 font-semibold w-full border-2 border-red-300 p-4 rounded-xl flex gap-3 items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:shadow-lg bg-red-50"
            onClick={handleLogout}
          >
            Logout
            <FaSignOutAlt className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;