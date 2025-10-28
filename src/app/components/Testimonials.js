import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonialsDb } from "./DB/TestimonialsDb";

const Testimonials = () => {
  return (

    <div className=" flex flex-col pb-10 bg-blue-50 ">
      <h1 className="text-5xl font-bold text-[#d6181e] m-5 text-center"> Testimonials</h1>

      <div className="flex flex-wrap gap-6   justify-center ">
        {testimonialsDb.map((item) => (
          <div key={item.id}
            className="w-[420px] bg-white/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-start items-start "
          >
            <div className="px-5 pt-4 pb-2 w-full  border-b border-gray-200">
              <div className="flex gap-2">
                <div className="bg-red-400 w-[10px] h-[10px] rounded-full"></div>
                <div className="bg-yellow-400 w-[10px] h-[10px] rounded-full"></div>
                <div className="bg-green-400 w-[10px] h-[10px] rounded-full"></div>
              </div>
            </div>

            <div className="px-6 py-4 text-center">
              <div className="flex  mb-2">
                <FaStar className="text-orange-500 text-xs" />
                <FaStar className="text-orange-500 text-xs" />
                <FaStar className="text-orange-500 text-xs" />
                <FaStar className="text-orange-500 text-xs" />
                <FaStar className="text-orange-500 text-xs" />
              </div>

              <p className="text-gray-600 text-sm italic">&quot;{item.text}&quot;</p>

              <h2 className="mt-4 font-semibold text-gray-800">{item.name}</h2>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          </div>
        ))}
      </div>

    </div>


  );
};

export default Testimonials;






