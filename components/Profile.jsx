'use client';
import Image from "next/image";
import Safwat from '../public/images/my.jpg';

export default function Profile() {
  return (
    <>
            <h2 className="text-2xl md:text-3xl font-bold text-mainColor mb-6 text-center">
              My Profile
            </h2>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex flex-wrap md:flex-nowrap">
    
          <div className="avatar-box text-center p-6 md:p-8 md:border-r border-gray-200">
            <Image
              src={Safwat}
              alt="SAFWAT"
              width={180}
              height={120}
              className="rounded-3xl w-64 h-64 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
              Safwat Bilal
            </h3>
            <div className="w-3/4 h-2 bg-gray-200 rounded-full mx-auto mt-3 relative">
              <div
                className="absolute top-0 left-0 h-full bg-mainColor rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="info-box w-full p-6 md:p-8">


            <div className="border-b py-5">
              <h4 className="text-black text-lg font-medium w-full mb-4">
                General Information
              </h4>
              <div className="flex flex-wrap">
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Full Name:</span> <span className="text-mainColor">Safwat Bilal</span> 
                </div>
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Gender:</span> <span className="text-mainColor">Male</span> 
                </div>
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Country:</span> <span className="text-mainColor">Syria</span> 
                </div>
              </div>
            </div>
            <div className="border-b py-5 mt-6">
              <h4 className="text-black text-lg font-medium w-full mb-4">
                Personal Information
              </h4>
              <div className="flex flex-wrap">
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Email:</span> <span className="text-mainColor">safwetbilal65@gmail.com</span> 
                </div>
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Phone:</span> <span className="text-mainColor"> (+963) 943860752</span> 
                </div>
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Date Of Birth:</span>  <span className="text-mainColor">06/06/2003</span> 
                </div>
              </div>
            </div>

           
            <div className="py-5 mt-6">
              <h4 className="text-black text-lg font-medium mb-4">Description</h4>
              <p className="text-sm md:text-base text-mainColor leading-relaxed">
                I am a fourth-year student at the Faculty of Information Engineering at the
                University of Aleppo. Throughout my academic years, I have dedicated most of my time
                to enhancing my problem-solving skills and analyzing algorithms. My passion for
                computer science drives me to continuously learn and improve my skills, particularly
                in competitive programming and software development.
              </p>
            </div>

     
            <div className="border-b py-5 mt-6">
              <h4 className="text-black text-lg font-medium w-full mb-4">Job Information</h4>
              <div className="flex flex-wrap">
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Title:</span>   <span className="text-mainColor">Frontend Developer</span> 
                </div>
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Programming Language:</span> <span className="text-mainColor">React js </span> 
                  and Next js
                </div>
                <div className="text-sm md:text-base w-full sm:w-1/2 lg:w-1/3 mb-3">
                  <span className="font-semibold text-gray-700">Years Of Experience:</span>  <span className="text-mainColor">1.5+ </span> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
