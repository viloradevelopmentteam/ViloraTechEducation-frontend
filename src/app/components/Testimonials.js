import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonialsDb } from "./DB/TestimonialsDb";  

const Testimonials = () => {
  return (

    <div className="bg-blue-100 flex flex-col pb-10 md:px-7 lg:px-8 rounded-3xl">
      <h1 className="text-4xl font-bold text-[#d6181e] m-5 text-center">
        Testimonials
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {testimonialsDb.map((item) => (
          <div
            key={item.id}
            className="border-2 border-dashed border-[#174181] rounded-2xl px-6 py-4 w-[260px] bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center"
          >
            <div className="flex mb-2">
              <FaStar className="text-orange-500 text-xs" />
              <FaStar className="text-orange-500 text-xs" />
              <FaStar className="text-orange-500 text-xs" />
              <FaStar className="text-orange-500 text-xs" />
              <FaStar className="text-orange-500 text-xs" />
            </div>

            <div className="text-gray-600 text-sm italic">
              &quot;{item.text}&quot;
            </div>

            <h2 className="mt-4 font-semibold text-gray-800">{item.name}</h2>
            <span className="text-sm text-gray-500">{item.role}</span>
          </div>
        ))}
      </div>
    </div>


  );


  
};

export default Testimonials;



        