import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import ProfileEditModal from "./profileEditModal";

const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState("");
  const [isEditModelOpen,setIsEditModelOpen]=useState(false);

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

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className=" bg-gray-100 p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
        <button
          className="border p-2 rounded-lg flex gap2 justify-center items-center bg-slate-500 hover:bg-blue-400 hover:text-white text-lg "
          onClick={() =>setIsEditModelOpen(true)}
        >
          <MdModeEditOutline className="text-xl" />
          Edit
        </button>
      </div>
      <div className="p-4 flex gap-6 ">
        <div className=" gap-5 border w-fit rounded-lg bg-amber-100  flex-col justify-center items-center">
          <div className="border w-40 h-40 rounded-full overflow-hidden m-auto ">
            <img
              src={userdata.photo}
              alt="profilePic"
              className="w-40 h-40 object-fit-cover rounded-full"
            />
          </div>
          <div>
            <b> Name:</b> <span>{userdata.fullName}</span>
          </div>
          <div>
            <b>Email:</b> <span>{userdata.email}</span>
          </div>
          <div>
            <b>Phone:</b> <span>{userdata.phone}</span>
          </div>
        </div>

        <div className=" border  p-5 w-2/3 grid gap-5 rounded-lg bg-blue-100">
          <div>
            <b> Gender:</b> <span>{userdata.fgender}</span>
          </div>
          <div>
            <b>Occupation:</b> <span>{userdata.occupation}</span>
          </div>
          <div>
            <b>Address:</b> <span>{userdata.address}</span>
          </div>
          <div>
            <b>City:</b> <span>{userdata.city}</span>
          </div>
          <div>
            <b>District:</b> <span>{userdata.district}</span>
          </div>
          <div>
            <b>State:</b> <span>{userdata.state}</span>
          </div>
          <div>
            <b>Representing:</b> <span>{userdata.representing}</span>
          </div>
        </div>
      </div>

      {/* <div className="bg-white relative mx-auto my-5 w-[50%] border p-6 rounded-lg shadow-md flex justify-center gap-20 items-center">
        <div className="">
          <div className="w-50 h-50 rounded-full">
            <img
              src={userdata.photo}
              alt=""
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          
        </div>
        <div className="grid justify-around gap-5">
          <h3>
            <b>Name :</b> {userdata.fullName}
          </h3>
          <h3>
            <b>Email :</b> {userdata.email}
          </h3>
          <h3>
            <b>Phone :</b> {userdata.phone}
          </h3>
        </div>
        <button
          className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
          onClick={() => navigate("/userDashboardEdit")}
        >
          {" "}
          <CiEdit />
          Edit
        </button>
      </div> */}
      <ProfileEditModal
       isOpen={isEditModelOpen}
      onClose={()=>{
      setIsEditModelOpen(false);
      }
      }
      oldData={userdata}/>
      
    </>
  );
};

export default Profile;
