"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
export default function EnquiryForm(props) {

  const [showForm, setShowForm] = useState(props.value);

    const toggleForm = () => {
        console.log("hello")
    setShowForm(!showForm);
  };
const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSf4Kc0u6IwbdaOVPy-uDPuMsgr9ef1N11rPqrXdr3MKtogIig/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // necessary to bypass CORS
        }
      );

      alert("✅ Enquiry submitted successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form", error);
      alert("❌ Failed to submit. Try again later.");
    }
  };

  return (
    <>
    {showForm? (
    
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="fixed z-[101] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-[95%] max-w-lg p-6 border border-white/70">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-blue-900">Get Enquiry</h2>
          <button onClick={toggleForm} className="text-gray-600 text-2xl">
            <FaTimes />
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
        ):null}
      

    </>
  );
}



