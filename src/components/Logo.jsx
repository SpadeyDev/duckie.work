import React from "react";
import DuckieLogo from "../assets/logo_4.svg";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <img src={DuckieLogo} alt="duckie-logo" className="w-10 h-10" />
      <h1 className="text-white font-semibold text-lg">
        Duckie Works
      </h1>
    </div>
  );
}

export default Logo;
