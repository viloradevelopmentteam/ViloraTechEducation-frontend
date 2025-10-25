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
          className="grid grid-cols-1 md:grid-cols-2 gap-5  lg:gap-10  lg:items-center p-3 lg:px-10 "
        >
          <div className="relative flex justify-center items-center md:mt-10 lg:mt-0  rounded-3xl border-4 border-[#174181] h-[450px] md:h-[550px]">
            <div className="absolute w-14 h-14 md:w-16 md:h-16 bg-[#174181] rounded-full -top-4 -left-3 shadow-lg"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12 bg-[#174181] rounded-full translate-x-1/2 translate-y-1/2 shadow-lg"></div>

            {/* <Image
              src={item.Bg}
              alt="Aboutbg"
              className="rounded-2xl h-[380px] w-[300px] md:h-[450px] md:w-[350px] lg:w-[480px] object-cover"
            /> */}

            <Image src={aboutDb[0].Bg} alt="aboutbg" className="rounded-2xl h-[380px] w-[300px] md:h-[450px] md:w-[350px] lg:w-[480px] object-cover"/>

            <div className="absolute bottom-5 right-5 flex gap-4 backdrop-blur-md p-3 rounded-3xl shadow-xl">
              {item.images.map((img, id) => (
                <Image
                  key={id}
                  src={img}
                  alt="Image"
                  className="object-cover h-[150px] w-[120px] md:w-[140px] md:h-[170px] lg:w-[170px] lg:h-[200px] rounded-xl"
                />
            // <Image src={aboutDb[0].img} alt="Student 1" width={300} height={200} />

              ))}
            </div>

          </div>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-[#c91e23]">
              {item.title}
            </h2>

            {/* <div className="flex flex-col gap-5">
            <p className="text-gray-700  text-cente  md:text-lg">
              {item.Content1}
            </p>
              <p className="text-gray-600   md:text-lg">
                {item.Content2}
                </p>
                </div> */}


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

            <div className="flex justify-start mt-6">
              {/* <Image
                src={item.lineImg}
                alt="lineImg"
                className="h-28 md:h-48 w-24 md:w-48 rotate-12"
              /> */}
            <Image src={aboutDb[0].line} alt="Student 1" width={300} height={200} />

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;