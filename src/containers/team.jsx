import React from "react";
import Nav from "../components/Nav";
import profilepng from "../assets/profile.jpg";

function Team() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#03070F] font-poppins overflow-x-hidden">
      <div className="h-full max-w-[1100px] w-[95%]">
        <Nav />
        <div className="text-white mt-24">
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-[#163C6D] to-[#6036E9] p-[2px] rounded-full inline-block">
              <button className="bg-[#03070F] rounded-full px-6 py-1 w-full h-full text-white text-[15px]">
                Meet our team
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <h1 className="text-white text-[50px] font-semibold z-10 relative">
              Team
            </h1>
            <p className="text-white/50">
              A group of passionate developers committed to building
              innovative and <br />
              impactful solutions. With expertise in frontend,
              backend, and mobile.
            </p>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="absolute right-1/2 top-[50px] w-full h-full flex items-center justify-center z-0">
            <div className="w-[600px] h-[350px] blur-[250px] rounded-full bg-gradient-to-r from-[#08203E] to-[#6036E9] z-0"></div>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-1/2 top-[50px] w-full h-full flex items-center justify-center z-0">
            <div className="w-[600px] h-[350px] blur-[250px] rounded-full bg-gradient-to-r from-[#08203E] to-[#6036E9] z-0"></div>
          </div>
        </div>

        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-6 justify-items-center mt-20">
          <div className="relative p-1.5 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg shadow-lg cursor-pointer">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex items-center space-x-4 w-[300px]">
              <img
                src={profilepng}
                alt="Spadey"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">
                  @Spadey
                </h3>
                <p className="text-black text-sm font-semibold">
                  Backend Developer
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-1.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg shadow-lg cursor-pointer">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex items-center space-x-4 w-[300px]">
              <img
                src={profilepng}
                alt="Berke"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">
                  @Berke
                </h3>
                <p className="text-black text-sm font-semibold">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-1.5 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg shadow-lg cursor-pointer">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex items-center space-x-4 w-[300px]">
              <img
                src={profilepng}
                alt="Aysu"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">
                  @Aysu
                </h3>
                <p className="text-black text-sm font-semibold">
                  Mobile Developer
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-lg cursor-pointer">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex items-center space-x-4 w-[300px]">
              <img
                src={profilepng}
                alt="Can"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">
                  @Yağmur
                </h3>
                <p className="text-black text-sm font-semibold">
                  DevOps Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg cursor-pointer">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex items-center space-x-4 w-[300px]">
              <img
                src={profilepng}
                alt="Eren"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">
                  @Eren
                </h3>
                <p className="text-black text-sm font-semibold">
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-1.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg shadow-lg cursor-pointer">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex items-center space-x-4 w-[300px]">
              <img
                src={profilepng}
                alt="Derya"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">
                  @Eylül
                </h3>
                <p className="text-black text-sm font-semibold">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
