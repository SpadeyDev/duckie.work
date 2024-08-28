import React from "react";
import { MarqueeDemo } from "./Marquee";

function Customers() {
  return (
    <div className="flex items-center justify-center w-full text-white mt-56">
      <div className="flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-r from-[#163C6D] to-[#6036E9] p-[2px] rounded-full inline-block">
            <button className="bg-[#03070F] rounded-full px-6 py-1 w-full h-full text-white text-[15px]">
              Our Customers
            </button>
          </div>
        </div>
        <div className="pt-8">
          <h1 className="text-center text-[2.2rem] font-medium">
            What people are saying
          </h1>
        </div>
        <div className="pt-2">
          <p className="text-gray-500 text-center">
            See how Astra empowers businesses of all sizes. Here's{" "}
            <br />
            what real people are saying on Twitter
          </p>
        </div>
        <div className="overflow-x-hidden">
          <MarqueeDemo />
        </div>
      </div>
    </div>
  );
}

export default Customers;
