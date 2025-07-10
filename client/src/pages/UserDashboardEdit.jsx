import React, { useEffect, useState } from "react";
import banner from "../assets/banner.jpeg";
// import member from "../assets/member-1.jpg";
import { Link } from "react-router-dom";
import { IoReorderFourOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { toast } from "react-hot-toast";
import api from "../config/api";

const UserDashboardEdit = () => {
  const [userdata, setUserData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

 const [preview,setPreview]=useState("");

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const fileURL = URL.createObjectURL(file);

    setPreview(fileURL);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white font-sans relative">
        {/* Top Banner */}
        <div className="relative mt-[-8%] h-90 bg-gray-200 overflow-hidden rounded-2xl">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-cover absolute "
          />
          <button className="absolute bottom-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-md shadow text-sm">
            Edit Cover
          </button>
        </div>

        <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 md:gap-8 -mt-40">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 ">
            <div className="bg-white shadow rounded-2xl w-96 p-6 absolute">
              <div className="flex flex-col items-center">
                <div>
                  <div className="w-30 h-30  mt-6 rounded-full border-none border-white">
                    <img
                      src={preview || userdata.photo}
                      alt=""
                      className="w-30 h-30 rounded-full object-cover"
                    />
                    <div className="border rounded-full p-2 w-fit absolute bottom-2 right-2 bg-rose-300 hover:bg-blue-500 hover:text-white">
                      <label className="text-2xl" htmlFor="imageUpload">
                        
                      </label>
                      <input
                        type="file"
                        className="hidden"
                        id="imageUpload"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                  <button className=" absolute top-1 right-1 border p-2 rounded ">
                    Save
                  </button>
                </div>
                {/* <img
                  src={member}
                  alt=""
                  className="w-30 h-30  mt-6 rounded-full border-none border-white"
                /> */}
                <h1 className="text-2xl font-semibold mt-2">
                  <b>Name :</b>{" "}
                  <input
                    type="text"
                    name="fullName"
                    value={userdata.fullName}
                    onChange={handelChange}
                    className="p-2 border rounded-lg border-rose-300"
                  />
                </h1>
                <p className="text-sm text-gray-500">
                  <b>Email :</b>
                  {userdata.email}
                </p>
                <h3 className="text-sm text-gray-500">
                  <b>Phone :</b>{" "}
                  <input
                    type="text"
                    name="fullName"
                    value={userdata.phone}
                    onChange={handelChange}
                    className="p-2 border rounded-lg border-rose-300"
                  />
                </h3>
              </div>
              <button className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg">
                {" "}
                
                Save Data
              </button>
              <br />
              <br />
              <hr />

              <ul className="mt-9 space-y-2 text-sm">
                <li className=" text-red-600 hover:bg-fuchsia-300 px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                  <span>
                    <IoReorderFourOutline />
                  </span>{" "}
                  <Link to={"/"}>Order</Link>
                </li>
                <li className="text-red-600 hover:bg-fuchsia-300 px-4 py-2 rounded-lg flex items-center gap-2">
                  <span>
                    <IoMdSettings />
                  </span>
                  <Link to={"/"}>Settings</Link>
                </li>
                <li className="text-red-600 hover:bg-fuchsia-300 px-4 py-2 rounded-lg flex items-center gap-2">
                  <span>
                    <FaLocationDot />
                  </span>
                  <Link to={"/userDashboard"}> Address</Link>
                </li>
                <li className="text-red-600 hover:bg-fuchsia-300 px-4 py-2 rounded-lg flex items-center gap-2">
                  <span>
                    <IoWalletOutline />
                  </span>
                  <Link to={"/"}>My Wallet</Link>
                </li>
                <li className="text-red-600 hover:bg-fuchsia-300   px-4 py-2 rounded-lg flex items-center gap-2">
                  <span>
                    <IoIosNotifications />
                  </span>
                  <Link to={"/"}>Notification</Link>
                </li>
                <li className="text-red-600 hover:bg-fuchsia-300 px-4 py-2 rounded-lg flex items-center gap-2 ">
                  <span>
                    <RiLogoutCircleLine />
                  </span>
                  <Link to={"/"}> Logout</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-4xl">
            <h1 className="text-4xl font-bold mb-4 mt-40 ms-40">Orders</h1>

            {/* Tabs */}
            <div className="bg-gray-100 rounded-lg flex justify-between items-center px-2 py-1 mb-4 ms-36 w-auto">
              <button className="text-red-600 hover:bg-pink-500  px-15 py-3 rounded-lg text-sm font-medium">
                In Progress
              </button>
              <button className="text-red-600 hover:bg-pink-500 rounded-lg px-15 py-3  text-sm">
                Order History
              </button>
              <button className="text-red-600 hover:bg-pink-500 px-15 py-3 rounded-lg ">
                Return Requests
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardEdit;
