import React from "react";
import DuckieLogo from "../assets/logo_4.svg";

function Logo() {
  return (
    <div>
      <img src={DuckieLogo} alt="duckie-logo" className="w-12 h-12" />
    </div>
  );
}

export default Logo;
