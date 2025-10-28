import React from "react";
import Image from "next/image";
import { FaBook, FaChalkboardTeacher, FaUsers, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { aboutDb } from "./DB/AboutUsDb";
import Notebook_ring from "../../../public/assets/Notebook_ring.png";


const AboutUs = () => {
  return (
    <div className="">
      {aboutDb.map((item) => (
        <div key={item.id}
          className="p-5 ">
          <div className="rounded-3xl backdrop-blur bg-white/35 border-2 border-white/80 shadow-md">

            <div className="text-5xl font-bold text-red-700 gap-5 lg:gap-1 p-5">
              <h1 className="flex  justify-center w-full p-3 underline rounded-xl">
                ABOUT US
              </h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 px-5 pb-5 ">

              <div className="relative flex justify-center items-center md:mt-10 lg:mt-0  rounded-lg bg-white h-[450px] md:h-[550px] shadow-[0_0_25px_5px_rgba(0,0,0,0.1)]">
                <Image src={aboutDb[0].Logo} alt="aboutbg" className="rounded-2xl h-[380px] w-[300px] md:h-[450px] md:w-[350px] lg:w-[600px] object-cover" />

              </div>
              <div className="bg-white rounded-lg shadow-[0_0_25px_5px_rgba(0,0,0,0.1)]">
                {/* <h1 className="text-3xl md:text-5xl font-bold text-[#c91e23]">
              {item.title}
            </h1> */}

                <div className="absolute top-1/2   -translate-y-1/2 right-[380px]  z-10">
                  <Image src={Notebook_ring} alt="Notebook_ring" className="object-contai  h-[500px]" />
                </div>

                <div className="space-y-10  text-gray-700 p-5 ps-10 ">
                  <div className="flex gap-3 ">
                    <FaBook className="text-blue-800 text-4xl mt-1" />
                    <p className="text-xl">
                      We provide a <span className="font-semibold">comprehensive curriculum</span> designed to build strong academic
                      and life skills for every student.
                    </p>
                  </div>

                  <div className="flex  gap-3">
                    <FaChalkboardTeacher className="text-blue-800 text-4xl mt-1" />
                    <p className="text-xl">
                      Our <span className="font-semibold">experienced teaching staff</span> are dedicated to nurturing curiosity and
                      creativity in each learner.
                    </p>
                  </div>

                  <div className="flex  gap-3">
                    <FaUsers className="text-blue-800 text-4xl mt-1" />
                    <p className="text-xl">
                      We focus on <span className="font-semibold">student-centered learning</span> that encourages teamwork and
                      confidence through interactive sessions.
                    </p>
                  </div>

                  <div className="flex  gap-3">
                    <FaHandsHelping className="text-blue-800 text-4xl mt-1" />
                    <p className="text-xl">
                      Our institution promotes <span className="font-semibold">community engagement</span> through events, clubs, and
                      outreach activities.
                    </p>
                  </div>

                  <div className="flex  gap-3">
                    <FaShieldAlt className="text-blue-800 text-4xl mt-1" />
                    <p className="text-xl">
                      We ensure a <span className="font-semibold">safe and supportive environment</span> where every student feels
                      valued and confident to grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;