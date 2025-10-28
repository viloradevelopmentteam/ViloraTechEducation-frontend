// import React from 'react';
// import { ArrowRight, Award, CheckCircle, P} from 'lucide-react';
// import student from "../../../public/assets/hero1.jpg";
// import Image from "next/image";




// const Herosection = () => {
//   return ( 
//       <div className="relative   px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-gradient-to-tr from-white to-sky-100/60 ">
//         <div className="grid lg:grid-cols-2 justify-items-center   ">

//           <div className="">
//             <div className=" backdrop-filter backdrop-blur-xl shadow-lg border-2 border-white border-b border-r border-t-0 border-l-0  inline-flex items-center gap-2 bg-gray-100 text-[#174181] px-4 py-2 rounded-lg text-sm font-bold">
//               {/* <Award className="w-4 h-4" /> */}
//             1# LEARNING PLATFORM
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-black/70">
//               Empowering the
//               <span className="block  text-red-700">
//                 Future through
//               </span>
//               <span className="block">Education!!!</span>
//             </h1>

//             <p className="text-lg text-gray-600 leading-relaxed">
//               Develop in-demand skills, boost your confidence, and make your mark in today's dynamic world.
//             </p>

//             <div className="space-y-3 py-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                   <CheckCircle className="w-4 h-4 text-white" />
//                 </div>
//                 <p className="text-gray-700 font-medium">Expert-led courses & certifications</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                   <CheckCircle className="w-4 h-4 text-white" />
//                 </div>
//                 <p className="text-gray-700 font-medium">Learn at your own pace</p>
//               </div>

//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 pt-2">
//               <button className="bg-[#303f75] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
//                 GET ENQUIRY
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>


//           </div>

//           <div className="relativef flex flex-col gap-5">

//             <div className="w-[500px] h-[150px] rounded-2xl bg-gray-50 shadow-md">
//               <div className='px-5 pt-5 flex flex-row justify-between'>
//                 <div className='flex flex-row gap-2'>
//                   <div className='bg-red-400 w-[10px] h-[10px] rounded-full'/>
//                   <div className='bg-yellow-400 w-[10px] h-[10px] rounded-full'/>
//                   <div className='bg-green-400 w-[10px] h-[10px] rounded-full'/>
//                 </div>
//                 <div className='text-black/50 text-[15px]'>
//                   bash
//                 </div>
//               </div>
//             </div>



//              <div class="w-[500px] h-[150px] rounded-2xl bg-gray-50 shadow-md">
//               <div className='px-5 pt-5 flex flex-row justify-between'>
//                 <div className='flex flex-row gap-2'>
//                   <div className='bg-red-400 w-[10px] h-[10px] rounded-full'/>
//                   <div className='bg-yellow-400 w-[10px] h-[10px] rounded-full'/>
//                   <div className='bg-green-400 w-[10px] h-[10px] rounded-full'/>
//                 </div>
//                  <div className='text-black/50 text-[15px]'>
//                   bash
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//       </div>
//   );
// };

// export default Herosection;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaBook, FaUsers } from "react-icons/fa";
import Robot from "../../../public/assets/Robot.png";
import EnquiryForm from "./Enquiryfrom";

const Herosection = () => {
const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        console.log("hello")
    setShowForm(!showForm);
  };
  return (
    <div className="relative  px-4 sm:px-6 lg:px-8 md:py-12 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className=" space-y-6">
          <div className="backdrop-blur-2xl bg-white/60 shadow-2xl border-2 border-white/80 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-blue-700">
            #1 LEARNING PLATFORM
          </div>

          <div className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-blue-900">
            Empowering the
            <span className="block text-red-700">Future through</span>
            <span className="block">Education!!!</span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-medium  w-[400px] md:w-full">
            Develop in-demand skills, boost your confidence, and make your mark in today&apos;s dynamic world.
          </p>

          <div className="space-y-4 md:py-4">
            {[
              "Expert-led courses & certifications",
              "Learn at your own pace",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4 backdrop-blur-2xl bg-white/50 p-2 md:p-5 rounded-2xl border-2 w-[350px] md:w-full border-white/70 shadow-xl"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <p className="text-gray-800 font-semibold ">{text}</p>
              </div>
            ))}
          </div>

          <div onClick={toggleForm} className="ml-20 md:ml-0">
            <button className="flex flex-row items-center  gap-2 w-fit backdrop-blur-xl bg-gradient-to-r from-blue-800 to-blue-950 border-2 border-white/50 text-white px-6 py-2 md:px-10 md:py-3  rounded-full font-bold shadow-2xl hover:scale-105 hover:bg-blue-700 transition-all">
              GET ENQUIRY <FaArrowRight />
            </button>
          </div>
        </div>

        {/* <div className=" hidden md:block h-[700px] w-[600px] -mt-24 ">
          <Image
            src={Robot} alt="Robot" className="w-full h-full object-cover  "
          />
        </div> hidden md:block */}

        <div className=" flex  justify-center  relative h-[700px] w-[650px] -mt-24">
          <Image
            src={Robot}
            alt="Robot"
            className="w-full h-full object-cover"
          />

          <div className="absolute left-1/2  backdrop-blur -top-5 w-12 h-12 bg-white/70 border border-white/80   p-2 rounded-xl ">
            <FaBook className="text-[#286291] text-3xl " />
          </div>

          {/* <div className="absolute bottom-10 right-10 bg-white p-2 rounded-full shadow-lg">
            <FaUsers className="text-green-500 w-6 h-6" />
          </div> */}

        </div>

      </div>



        {showForm ?
        <div>
          <EnquiryForm value={showForm} />
        </div>
        :null}

    </div>
  );
};

export default Herosection;











//  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5 bg-[#e6edf8] text-center">
//               <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r-2 border-gray-300 pb-4 md:pb-0">
//                   <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                       <div className="bg-[#174181] rounded-full shadow-md p-2">
//                           <BiBarChartAlt2 className="text-3xl text-white" />
//                       </div>
//                   </div>
//                   <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                       1000+
//                   </h2>
//                   <p className="text-gray-500 font-semibold text-sm">
//                       Total Courses
//                   </p>
//               </div>

//               <div className="flex flex-col items-center border-b md:border-b-0 md:border-r-2 border-gray-300 pb-4 md:pb-0">
//                   <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                       <div className="bg-[#174181] rounded-full shadow-md p-2">
//                           <FaUsers className="text-3xl text-white" />
//                       </div>
//                   </div>
//                   <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                       5,000
//                   </h2>
//                   <p className="text-gray-500 font-semibold text-sm">
//                       Total Students
//                   </p>
//               </div>

//               <div className="flex flex-col items-center border-r-0 md:border-r-2 border-gray-300">
//                   <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                       <div className="bg-[#174181] rounded-full shadow-md p-2">
//                           <MdMenuBook className="text-3xl text-white" />
//                       </div>
//                   </div>
//                   <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                       200+
//                   </h2>
//                   <p className="text-gray-500 font-semibold text-sm">Study Materials</p>
//               </div>

//               <div className="flex flex-col items-center">
//                   <div className="border-2 border-[#309ed1] p-2 rounded-full">
//                       <div className="bg-[#174181] rounded-full shadow-md p-2">
//                           <FaUsers className="text-3xl text-white" />
//                       </div>
//                   </div>
//                   <h2 className="text-xl md:text-2xl font-bold text-[#0d86be] mt-2">
//                       100+
//                   </h2>
//                   <p className="text-gray-500 font-semibold text-sm">Expert Tutors</p>
//               </div>
//           </div>




