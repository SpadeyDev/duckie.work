import React from "react";
import { MdDesignServices } from "react-icons/md";
import { SiXcode } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";

function Steps() {
  return (
    <div className="flex items-center justify-center w-full text-white mt-56">
      <div className="flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-r from-[#163C6D] to-[#6036E9] p-[2px] rounded-full inline-block">
            <button className="bg-[#03070F] rounded-full px-8 py-2 w-full h-full text-white">
              The Progress
            </button>
          </div>
        </div>
        <div className="pt-8">
          <h1 className="text-center text-[2.2rem] font-medium">
            Three steps to build your <br />
            dream website
          </h1>
        </div>
        <div className="pt-2">
          <p className="text-gray-500 text-center">
            Turn your vision into reality in just 3 simple steps
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-24">
          <div className="flex-col items-start justify-start w-[350px]">
            <div>
              <MdDesignServices className="w-10 h-10" />
            </div>
            <div className="pt-2">
              <h2>Sign Up</h2>
            </div>
            <div>
              <p className="text-gray-500">
                Create your free account to get started with Astra.
              </p>
            </div>
          </div>
          <div className="border-x border-gray-600 py-20 w-[350px]">
            <div className="flex-col items-start justify-start w-[350px] pl-12">
              <div>
                <SiXcode className="w-10 h-10" />
              </div>
              <div className="pt-2">
                <h2>Sign Up</h2>
              </div>
              <div>
                <p className="text-gray-500">
                  Create your free account to get started with Astra.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[350px]">
            <div className="flex-col items-start justify-start w-[350px] pl-12">
              <div>
                <IoIosRocket className="w-10 h-10" />
              </div>
              <div className="pt-2">
                <h2>Sign Up</h2>
              </div>
              <div>
                <p className="text-gray-500">
                  Create your free account to get started with Astra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
