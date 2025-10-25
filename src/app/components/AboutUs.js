import React from "react";
import Image from "next/image";
import { FaBook, FaChalkboardTeacher, FaUsers, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { aboutDb } from "./DB/AboutUsDb";

const AboutUs = () => {
  return (
    <div className="">
      {aboutDb.map((item) => (
        <div
          key={item.id}
          className="p-5 ">
          <div  className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 p-3 lg:p-10 rounded-3xl backdrop-blur bg-white/35 border-2 border-white/80 shadow-xl">

          <div className="relative flex justify-center items-center md:mt-10 lg:mt-0  rounded-[40px] bg-white h-[450px] md:h-[550px]">

            <Image src={aboutDb[0].Logo} alt="aboutbg" className="rounded-2xl h-[380px] w-[300px] md:h-[450px] md:w-[350px] lg:w-[480px] object-cover"/>

          </div>
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold text-[#c91e23]">
              {item.title}
            </h1>

              <div className="space-y-6  text-gray-700 ">
                <div className="flex gap-3 ">
                  <FaBook className="text-blue-500 text-2xl mt-1" />
                  <p>
                    We provide a <span className="font-semibold">comprehensive curriculum</span> designed to build strong academic
                    and life skills for every student.
                  </p>
                </div>

                <div className="flex  gap-3">
                  <FaChalkboardTeacher className="text-blue-500 text-2xl mt-1" />
                  <p>
                    Our <span className="font-semibold">experienced teaching staff</span> are dedicated to nurturing curiosity and
                    creativity in each learner.
                  </p>
                </div>

                <div className="flex  gap-3">
                  <FaUsers className="text-blue-500 text-2xl mt-1" />
                  <p>
                    We focus on <span className="font-semibold">student-centered learning</span> that encourages teamwork and
                    confidence through interactive sessions.
                  </p>
                </div>

                <div className="flex  gap-3">
                  <FaHandsHelping className="text-blue-500 text-2xl mt-1" />
                  <p>
                    Our institution promotes <span className="font-semibold">community engagement</span> through events, clubs, and
                    outreach activities.
                  </p>
                </div>

                <div className="flex  gap-3">
                  <FaShieldAlt className="text-blue-500 text-2xl mt-1" />
                  <p>
                    We ensure a <span className="font-semibold">safe and supportive environment</span> where every student feels
                    valued and confident to grow.
                  </p>
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