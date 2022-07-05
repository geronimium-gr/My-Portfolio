import React from "react";
import logo from "../images/geronimologowhite.png";

const NavigationBar = () => {
  return (
    // Navigation Bar
    <>
      <nav id="navlink" className="relative container mx-auto ">
        <div className="flex pt-4 items-center justify-between">
          <div className="p-3">
            <img className="w-60" src={logo} alt="" />
          </div>
          <div className="hidden space-x-6 md:flex ">
            <a
              href="http://"
              className="text-whitish text-lg font-medium hover:text-dark"
            >
              About Me
            </a>
            <a
              href="http://"
              className="text-whitish text-lg font-medium hover:text-dark"
            >
              Portfolio
            </a>
            <a
              href="http://"
              className="text-whitish text-lg font-medium hover:text-dark"
            >
              Contacts
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
