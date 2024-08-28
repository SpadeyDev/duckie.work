import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Features from "../components/Features";
import Customers from "../components/Customers";
import Newslatter from "../components/Newsletter";

function Homepage() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-[500vh] bg-[#03070F] font-poppins">
        <div className="h-full max-w-[1100px] w-[95%]">
          <Nav />
          <Header />
          <Steps />
          <Features />
          <Customers />
          <Newslatter />
        </div>
      </div>
    </>
  );
}

export default Homepage;
