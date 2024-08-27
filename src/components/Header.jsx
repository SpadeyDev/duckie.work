import React from "react";
import { AnimatedGradientTextDemo } from "./AnimateGradientText";
import Grids from "../assets/grid_2.png";
import CodeEditor from "../assets/code.svg";

function Header() {
  return (
    <div className="text-white flex items-center justify-center mt-36">
      <div className="w-full h-full absolute z-0 opacity-35">
        <img src={Grids} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center z-10">
        <AnimatedGradientTextDemo />
        <h1 className="text-center text-[55px] font-poppins font-medium">
          Build your next idea and <br />
          ship your dream site
        </h1>
        <p className="text-center text-[#c4c5c9] mt-4 font-medium">
          Zero code, maximum speed. Make professional sites easy, fast
          and fun while delivering
          <br /> best-in-class SEO, performance.
        </p>
        <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 to-[#0c1c40] rounded-full p-2 w-[650px] mx-auto mt-8 border-t-[2px] border-white/30">
          <span className="flex items-center text-white text-lg px-4">
            <span className="mr-2">✨</span>
            Start building your dream website now!
          </span>
          <button className="ml-auto bg-blue-600 text-white font-semibold px-6 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors">
            Get Started <span className="ml-2">→</span>
          </button>
        </div>
        <div className="w-[1000px] mt-24">
          <img src={CodeEditor} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
