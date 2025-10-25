
"use client";

import React, { useState } from "react";
import Logo from "../../../public/assets/Logo.png";
import Image from "next/image";

import {
  FaBars,
  FaArrowRight,
  FaBookReader,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="">
        <div className=" px-6 py-2  flex items-center justify-between transition-all duration-300">

          <div className="flex items-center gap-3">
            <button className="text-blue-800 text-2xl md:hidden" onClick={toggleSidebar}>
              <FaBars />
            </button>

            <div className="hidden md:block">
              <Image src={Logo} alt="Logo" className="w-32 h-20 object-contain " />
            </div>
          </div>

          <ul className="hidden md:flex flex-row gap-6 w-[70%] justify-evenly lg:gap-12 text-md font-semibold text-gray-800  px-6  py-1 md:py-5 backdrop-blur  bg-white/30 border-2 border-white/80 rounded-full shadow-2xl">

            <li
              onClick={() => {
                document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-800 cursor-pointer"
            >
              Home
            </li>


            <li
              onClick={() => {
                document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-800 cursor-pointer"
            >
              Courses
            </li>


            <li
              onClick={() => {
                document.getElementById("Mission & Vision")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-800 cursor-pointer"
            >
              Mission & Vision
            </li>

            <li
              onClick={() => {
                document.getElementById("AboutUs")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-800 cursor-pointer"
            >
              About Us
            </li>

            <li className="hover:text-blue-800 cursor-pointer">Contact Us</li>
          </ul>

          <div className="hidden md:block">
            <button
              onClick={toggleForm}
              className="cursor-pointer backdrop-blur-xl bg-gradient-to-r from-blue-800 to-blue-950 border-2 border-white/70 px-6 py-3 rounded-full text-white font-bold hover:scale-105 hover:shadow-2xl transition-all shadow-xl flex items-center gap-2"
            >
              Get Enquiry <FaArrowRight />
            </button>
          </div>

          <div className="block md:hidden">
            <div className="bg-red-600 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-2xl shadow-xl border-2 border-white/70">
              <FaBookReader />
            </div>
          </div>

        </div>
      </div>

      <div className="hidden md:block">
        <button
          onClick={toggleForm}
          className="fixed top-80 right-0 z-50 h-[280px] w-[60px] backdrop-blur-xl bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 border-2 border-white/50 rounded-l-3xl shadow-2xl flex flex-col items-center justify-center gap-3 hover:w-[70px] transition-all cursor-pointer group"
        >
          <div className="text-white font-black text-sm rotate-90 origin-center whitespace-nowrap tracking-wider drop-shadow-lg">QUICK ENQUIRY</div>
        </button>
      </div>

      <div className="h-[110px]"></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 backdrop-blur-2xl bg-white/50 border-r-2 border-white/70 shadow-2xl z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/70">
          <div className="flex items-center gap-2 text-red-600 text-2xl font-bold">
            <FaBookReader /> Vilora Tech
          </div>
          <button className="text-gray-400 text-2xl" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col mt-6 space-y-6 text-lg font-semibold px-6 text-gray-800">
          <li className="hover:text-blue-800 cursor-pointer">Home</li>
          <li className="hover:text-blue-800 cursor-pointer">Courses</li>
          <li className="hover:text-blue-800 cursor-pointer">Mission & Vision</li>
          <li className="hover:text-blue-800 cursor-pointer">About Us</li>
          <li className="hover:text-blue-800 cursor-pointer">Contact Us</li>
        </ul>

        <div className="px-6 mt-8">
          <button
            onClick={toggleForm}
            className="w-full bg-gradient-to-r from-blue-800 to-blue-950 text-white font-bold py-3 rounded-full hover:scale-105 hover:shadow-2xl transition-all"
          >
            Get Enquiry
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-20" onClick={toggleSidebar}></div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="fixed z-[101] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-[95%] max-w-lg p-6 border border-white/70">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Get Enquiry</h2>
              <button onClick={toggleForm} className="text-gray-600 text-2xl">
                <FaTimes />
              </button>
            </div>

            <form className="flex flex-col gap-4" onSubmit={ handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="entry.2050310110"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <input
                type="email"
                name="entry.1252054791"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <input
                type="text"
                name="entry.657967908"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <textarea
                name="entry.156992456"
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-800 to-blue-950 text-white font-bold py-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-all"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


// <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5 mt-10 bg-[#e6edf8] text-center">
//           <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r-2 border-gray-300 pb-4 md:pb-0">
//               <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                   <div className="bg-[#174181] rounded-full shadow-md p-2">
//                       <BiBarChartAlt2 className="text-3xl text-white" />
//                   </div>
//               </div>
//               <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                   1000+
//               </h2>
//               <p className="text-gray-500 font-semibold text-sm">
//                   Total Courses
//               </p>
//           </div>

//           <div className="flex flex-col items-center border-b md:border-b-0 md:border-r-2 border-gray-300 pb-4 md:pb-0">
//               <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                   <div className="bg-[#174181] rounded-full shadow-md p-2">
//                       <FaUsers className="text-3xl text-white" />
//                   </div>
//               </div>
//               <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                   5,000
//               </h2>
//               <p className="text-gray-500 font-semibold text-sm">
//                   Total Students
//               </p>
//           </div>

//           <div className="flex flex-col items-center border-r-0 md:border-r-2 border-gray-300">
//               <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                   <div className="bg-[#174181] rounded-full shadow-md p-2">
//                       <MdMenuBook className="text-3xl text-white" />
//                   </div>
//               </div>
//               <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                   200+
//               </h2>
//               <p className="text-gray-500 font-semibold text-sm">Study Materials</p>
//           </div>

//           <div className="flex flex-col items-center">
//               <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                   <div className="bg-[#174181] rounded-full shadow-md p-2">
//                       <FaUsers className="text-3xl text-white" />
//                   </div>
//               </div>
//               <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                   100+
//               </h2>
//               <p className="text-gray-500 font-semibold text-sm">Expert Tutors</p>
//           </div>
//       </div>
