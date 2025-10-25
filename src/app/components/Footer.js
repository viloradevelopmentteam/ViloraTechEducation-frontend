import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#003d98] text-gray-300 px-6 py-5 flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        <div className="text-center md:text-left">
          <h2 className="text-white font-semibold text-lg mb-2">About Us</h2>
          <p className="text-sm leading-relaxed">
            Welcome to ViloraTech Education Institute, your trusted destination for future-ready learning.
            theoretical knowledge but real-world practical expertise through hands-on sessions, live projects, and personalized mentorship.
          </p>
        </div>

              <div className="flex flex-col items-center">
        <h2 className="text-white font-semibold text-lg mb-2">Our Services</h2>
        <ul className="space-y-2 text-sm">
          <li className="hover:underline hover:text-blue-400">› Web Development</li>
          <li className="hover:underline hover:text-blue-400">› UI/UX Design</li>
          <li className="hover:underline hover:text-blue-400">› Management</li>
          <li className="hover:underline hover:text-blue-400">› Digital Marketing</li>
          <li className="hover:underline hover:text-blue-400">› Spoken English</li>
        </ul>
      </div>


        <div className="text-center md:text-lef">
          <h2 className="text-white font-semibold text-lg mb-2">Contact</h2>
          <p>
            Email:{" "}
            <span className="text-sm hover:underline hover:text-blue-400 cursor-pointer">
              Vilora123@gmail.com
            </span>
          </p>
          <p>
            Phone:{" "}
            <span className="text-sm hover:underline hover:text-blue-400 cursor-pointer">
              +91 99440 25562
            </span>
          </p>
          <p>
            Address:{" "}
            <span className="text-sm hover:underline hover:text-blue-400 cursor-pointer">
              Venkata Nager, Puducherry
            </span>
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-white font-semibold text-lg mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-5 text-2xl mt-2">
            <a href="#" className="">
              <FaFacebook />
            </a>
            <a href="#" className="">
              <FaInstagram />
            </a>
            <a href="#" className="">
              <FaLinkedin />
            </a>
            <a href="#" className="">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />

      <div className="flex font-bol text-[15px] mt-5 hover:underline hover:text-blue-400">
        © {new Date().getFullYear()} || All rights reserved.
        {/* ViloraTech Education.com  */}
      </div>
    </div>
  );
};
export default Footer;
