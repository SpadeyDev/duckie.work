import React from "react";

function Newslatter() {
  return (
    <div className="flex items-center justify-center w-full h-[40rem] z-10 mt-32">
      <div className="flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-[50px] font-semibold z-10 relative">
            From Idea to Lunch <br />
            Faster Than Ever
          </h1>
        </div>
        <div className="relative">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
            <div className="w-[400px] h-[400px] blur-[180px] rounded-full bg-gradient-to-r from-[#08203E] to-[#6036E9] z-0"></div>
          </div>
        </div>
        <div className="text-center pt-4 z-10 relative">
          <p className="text-gray-400">
            Build stunning websites with Astra's intuitive drag-and <br />
            -drop builder and powerful AI assistant
          </p>
        </div>
        <div className="text-center relative z-10 pt-8">
          <a
            href="#"
            className="bg-white px-6 py-2 rounded-md hover:bg-white/20"
          >
            Get started for free
          </a>
        </div>
        <div className="mt-48 border border-gray-600/50 p-8 rounded-lg w-[800px] mx-auto text-white">
          <h2 className="text-2xl font-bold mb-2">Join our newsletter</h2>
          <p className="mb-6 text-gray-400">
            Be up to date with everything about AI builder
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-l-lg bg-[#060e1d] text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#08203E] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-r-lg transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-3">
            By subscribing you agree with our{" "}
            <a href="#" className="underline text-blue-500 mt-3">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
