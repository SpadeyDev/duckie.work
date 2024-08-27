import React, { useState, useEffect } from "react";
import Logo from "./Logo";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[2.4rem] mt-6 flex items-center justify-between z-50 transition-all ${
        isScrolled
          ? "sticky top-[1.5rem] bg-gray-500 rounded-xl px-8"
          : "sticky top-[1.5rem]"
      }`}
    >
      <div className="absolute inset-0 w-full h-full z-0 backdrop-blur-md"></div>
      <div className="relative z-10">
        <Logo />
      </div>
      <div className="relative z-10">
        <ul className="text-gray-100 flex gap-6 font-normal text-[15px]">
          <li className="transition-all hover:opacity-70 cursor-pointer">
            About
          </li>
          <li className="transition-all hover:opacity-70 cursor-pointer">
            Products
          </li>
          <li className="transition-all hover:opacity-70 cursor-pointer">
            Investments
          </li>
          <li className="transition-all hover:opacity-70 cursor-pointer">
            Publisher
          </li>
          <li className="transition-all hover:opacity-70 cursor-pointer">
            Our Vision
          </li>
          <li className="transition-all hover:opacity-70 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="text-white z-10 bg-gradient-to-r from-[#144684] to-[#6036E9] px-6 h-[2rem] flex items-center justify-center rounded-md transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#6036E9] hover:bg-gradient-to-r hover:from-[#315888] hover:to-[#7150de]">
        <a href="#">Work with us</a>
      </div>
    </div>
  );
}

export default Nav;
