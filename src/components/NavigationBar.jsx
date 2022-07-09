import React, { useState } from "react";
import logo from "../images/geronimologowhite.png";
import smalllogo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => setMenu(!menu);

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

          <button
            onClick={openMenu}
            className={`${
              !menu
                ? "absolute inset-y-0 right-0 flex px-4 outline-none md:hidden"
                : "fixed right-0 flex px-4 z-20 outline-none md:hidden "
            }`}
          >
            {!menu ? (
              <FaBars className="self-center text-whitish" size={25} />
            ) : (
              <FaTimes className="self-center text-whitish" size={25} />
            )}
          </button>
        </div>
      </nav>

      <ul
        className={`${
          !menu
            ? "hidden"
            : "fixed z-10 top-0 left-0 w-full h-full bg-gunmetal text-whitish flex flex-col justify-center items-center md:hidden"
        }`}
      >
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
    </>
  );
};

export default NavigationBar;
