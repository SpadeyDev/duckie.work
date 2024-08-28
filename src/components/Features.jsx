import React from "react";
import { AnimatedBeamDemo } from "./AnimatedBeam";

function Features() {
  return (
    <div className="flex items-center justify-center w-full text-white mt-56">
      <div className="flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-r from-[#163C6D] to-[#6036E9] p-[2px] rounded-full inline-block">
            <button className="bg-[#03070F] rounded-full px-6 py-1 w-full h-full text-white text-[15px]">
              Features
            </button>
          </div>
        </div>
        <div className="pt-8">
          <h1 className="text-center text-[2.2rem] font-medium">
            Discover our powerful <br /> features
          </h1>
        </div>
        <div className="pt-2">
          <p className="text-gray-500 text-center">
            Astra offers a range of features to help you build a{" "}
            <br />
            stunning website in no time
          </p>
        </div>

        <div>
          <AnimatedBeamDemo />
        </div>
        <div className="relative">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
            <div className="w-[800px] h-[450px] blur-[250px] rounded-full bg-gradient-to-r from-[#08203E] to-[#6036E9] z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
