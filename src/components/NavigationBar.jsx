import React from "react";
import logo from "../images/geronimologowhite.png";
import smalllogo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  return (
    // Navigation Bar
    <>
      <nav id="navlink" className="relative container mx-auto ">
        <div className="flex pt-4 w-full items-center justify-between">
          <div className="p-3 hidden md:flex">
            <img className="w-60" src={logo} alt="" />
          </div>

          <div className="p-3 flex w-full justify-center md:hidden">
            <img className="w-20" src={smalllogo} alt="" />
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
              Contact
            </a>
          </div>

          <div className="absolute inset-y-0 right-0 flex px-4 md:hidden">
            <FaBars className="self-center text-whitish" size={25} />
          </div>
        </div>
      </nav>

      {/* <ul>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul> */}
    </>
  );
};

export default NavigationBar;
