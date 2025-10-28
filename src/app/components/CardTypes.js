"use client";
import React, { useState } from "react";
import Image from "next/image";
import { allCards } from "./DB/CardTypesDB";


const CardTypes = () => {
    const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const getCards = () => {
    if (selectedCategory =="All") {
      return Object.values(allCards).flat();
    }
    return allCards[selectedCategory];
  };
  return (
     <div className="w-full pb-10 bg-sky-100/50">
      <div className="flex flex-col py-5 justify-center items-center  space-y-5 w-full">
        <h1 className="text-4xl font-bold text-[#cf282e]">Popular Topics</h1>

        <div className="flex flex-wrap justify-center gap-4 p-1 w-full ">
          {["All", ...Object.keys(allCards)].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}


                     className={` px-6 py-1 md:px-8 md:py-2 font-semibold uppercase rounded-2xl shadow-lg duration-300  ${selectedCategory === category
                ? "backdrop-blur-xl bg-linear-to-r from-red-600 to-red-800 border-2 border-white/50 scale-105 text-white"
                : "backdrop-blur-xl bg-linear-to-r from-blue-700 to-blue-900 border-2 border-white/50  text-white hover:bg-[#2159a6] "
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 gap-y-16 px-10 mt-10">
          
        {getCards().map((card, index) => (
            <div key={index}
            className="relative flex w-80 flex-col rounded-xl backdrop-blur-2xl bg-white/40 border-2 border-white/80 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90"
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600  h-40  "
              >
                <Image src={card.image} alt={card.title} style={{ width: '100%', height: '100%' }}/>
              </div>
 
            </div>
            <div className="p-6">
              <h5
                className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300"
              >
                {card.title}
              </h5>
              <p
                className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased"
              >
                {card.cont}
              </p>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CardTypes;



      {/* <div className=" px-10">
        <div className="flex gap-8 overflow-x-auto md:p-5 pb-5 p-1">
          {getCards().map((card, index) => (
            <div
              key={index}
            className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300 overflow-hidden"

            >
              <Image src={card.image} alt={card.title} className="w-full h-[250px] "/>
              <div className="p-5 text-center space-y-3">
                <h2 className="text-xl font-bold text-[#174181]">{card.title}</h2>
                <p className="text-gray-600">{card.cont}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}








