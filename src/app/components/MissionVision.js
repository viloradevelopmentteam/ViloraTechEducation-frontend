import React from "react";
import { missionvision } from "./DB/MissionVisionDb";

import Image from "next/image";

const MissionVision = () => {
  return (
    <div className="">
       {missionvision.map((item) => (

    <div 
     key={item.id}
      className ="relative p-6 md:p-8 ">
      <div  className="text-center relative z-10 mb-12">
        <div className="inline-block bg-[#174181] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          WHO WE ARE
        </div>
        <h1 className="text-3xl  md:text-6xl font-bold text-red-700 mb-3">
          Our Mission & Vision
        </h1>
        <p className="text-blue-600 text-base md:text-lg">
          Building tomorrow &apos;s leaders through excellence in education
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 mb-10">
        <div className="relative w-full md:w-1/2 h-[250px] md:h-[350px] object-cover">
          <Image src={missionvision[0].Missioncard1} alt="Missioncard1"   style={{ width: '100%', height: '100%', resizeMode: 'fit' }}/>
          <div className="absolute  bottom-3 hidden md:block -right-8">
  
          <Image src={missionvision[0].Missioncard2} alt="Missioncard1"  className="w-[160px]  h-[170px] border-4 border-slate-100 rounded-3xl object-cover shadow-xl"   />

          </div>
        </div>

        <div className="w-full md:w-[800px] p-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold  text-[#c91e23] mb-4 flex items-center gap-2">
            Our Mission
            <span className="h-1 w-12 bg-gradient-to-r from-blue-500 rounded"></span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our mission is to provide quality education that empowers students with
            knowledge, skills, and values to excel in their chosen paths.
            create a supportive and innovative learning environment for lifelong
            success.
          </p>

          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Quality Education
            </span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Innovation
            </span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Excellence
            </span>
          </div>

        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 mb-10">
        <div className="relative w-full md:w-1/2 h-[250px] md:h-[350px] flex justify-center items-center md:justify-between">
          <div className=" rounded-2xl overflow-hidden w-full  h-full object-cover">
  
         <Image src={missionvision[0].Visioncard1} alt="Visioncard1" className="object-cover w-full h-full" />

          </div>
          <div className="absolute -left-10 md:-left-16 bottom-3 hidden md:block">
   
         <Image src={missionvision[0]. Visioncard2} alt="Visioncard2" className="w-[170px]  h-[180px] border-4 border-slate-100 rounded-3xl object-cover shadow-xl" />

          </div>
        </div>

        <div className="w-full md:w-[800px] p-5 md:p-8 ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#c91e23] mb-4 flex items-center gap-2">
            Our Vision
            <span className="h-1 w-12 bg-gradient-to-r from-blue-500 rounded"></span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our vision is to be a leading educational institution recognized for
            nurturing intellectual curiosity, creativity, and global
            citizenship—preparing students to make a positive impact in the world.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Global Leadership
            </span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Creativity
            </span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Impact
            </span>
          </div>

        </div>

      </div>
        </div>
      ))}
    </div>
  );
};

export default MissionVision;
