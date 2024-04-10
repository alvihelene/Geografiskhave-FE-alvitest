import "./splash.scss";
import React from "react";
import Logo from "../../assets/logo/Geografisk_Have_Logo.svg"

const Splash = () => {
  return (
    <div className="Splash">
        <img className="logo" src={Logo} alt="Geografisk Have Logo" />
    </div>
  );
};

export default Splash;