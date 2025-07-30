import React, { useState } from "react";

import { Link } from "react-router-dom";
import cont from "../assets/cont.jpg";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
const ContactUS = () => {
  const [contactData, setContactData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(contactData);

    setContactData({
      name: "",
      lastname: "",

      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className=" relative  mt-[-8%] bg-cover bg-center flex items-center justify-center ">
        <img src={cont} alt="" className="absolute -z-1 w-full " />
        <div className=" backdrop-blur-md border-2 border-[#ebb820] rounded-2xl shadow-2xl p-8 w-full max-w-md mt-35">
          <div className="">
            <h1 className="text-4xl font-bold text-center text-red-700 mb-6 font-serif">
              Contact Us
            </h1>

            <form className="space-y-2 " onSubmit={handelSubmit}>
              <div className="flex gap-3.5 ">
                <div>
                  <div className="flex gap-0.5 justify-items-center items-center">
                    <div>
                      <FaUserAlt />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">
                        {" "}
                        First Name
                      </label>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="name"
                    value={contactData.name}
                    onChange={handelChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your First name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={contactData.lastname}
                    onChange={handelChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your Last name"
                  />
                </div>
              </div>

              <div>
                <div className="flex gap-0.5 justify-items-center items-center">
                  <div>
                    {" "}
                    <MdEmail />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium"> Email</label>
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handelChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder=" Enter your email"
                />
              </div>
              <div>
                <div className="flex gap-0.5 justify-items-center items-center">
                  <div><FaPhone /></div>
                  <div><label className="block mb-1 font-medium">Number</label></div>
                </div>
                
                
                <input
                  type="tel"
                  name="phone"
                  value={contactData.phone}
                  onChange={handelChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your Number"
                />
              </div>

              <div>
                <div className="flex gap-0.5 justify-items-center items-center">
                  <div> <MdEmail  className="h-5 w-5"/></div>
                  <div> <label className="block mb-1 font-medium">Message</label></div>
                </div>
               
               
                <textarea
                  name="message"
                  value={contactData.message}
                  onChange={handelChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
