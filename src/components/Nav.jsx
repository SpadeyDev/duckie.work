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
    <div className="sticky top-[1.5rem] z-50 mt-6">
      <div
        className={`h-[2.6rem] flex items-center transition-all ${
          isScrolled
            ? "justify-center border-2 border-gray-600/50 rounded-full max-w-[56%] backdrop-blur-3xl"
            : "justify-between max-w-[100%]"
        } mx-auto`}
      >
        <div className="relative z-10">
          {isScrolled ? null : <Logo />}
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
        {isScrolled ? null : (
          <div className="text-white z-10 bg-gradient-to-r from-[#144684] to-[#6036E9] px-6 h-[2rem] flex items-center justify-center rounded-md transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#6036E9] hover:bg-gradient-to-r hover:from-[#315888] hover:to-[#7150de]">
            <a href="#">Work with us</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
