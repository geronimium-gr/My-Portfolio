import React, { useState, useEffect } from "react";
import logo from "../images/geronimologowhite.png";
import smalllogo from "../images/logo.png";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [menu, setMenu] = useState(false);
  const [displayScroll, setdisplayScroll] = useState(false);
  const [colorScroll, setColorScroll] = useState(false);

  const openMenu = () => setMenu(!menu);

  const scrolltoTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 90) {
        setdisplayScroll(true);
        if (window.scrollY > 1000) {
          setColorScroll(true);
          setdisplayScroll(false);
        } else {
          setColorScroll(false);
          setdisplayScroll(true);
        }
      } else {
        setdisplayScroll(false);
        setColorScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Navigation Bar
    <>
      <nav id="navlink" className="relative container mx-auto">
        <div className="flex pt-4 w-full items-center justify-between">
          <div className="p-3 hidden md:flex">
            <img className="w-60" src={logo} alt="" />
          </div>

          <div className="p-3 flex w-full justify-center md:hidden">
            <img className="w-20" src={smalllogo} alt="" />
          </div>

          {/* desktop menu */}
          <div className="hidden space-x-6 text-whitish text-lg font-medium md:flex">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all duration-200 ease-linear hover:scale-110 hover:font-bold"
            >
              About Me
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all duration-200 ease-linear hover:scale-110 hover:font-bold"
            >
              Porfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all duration-200 ease-linear hover:scale-110 hover:font-bold"
            >
              Contact
            </Link>
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

      {/* mobile menu */}
      <ul
        className={`${
          !menu
            ? "hidden"
            : "fixed z-10 top-0 left-0 w-full h-full bg-gunmetal text-whitish flex flex-col justify-center items-center md:hidden"
        }`}
      >
        <li className="py-6 text-4xl">
          <Link
            to="about"
            onClick={openMenu}
            smooth={true}
            duration={500}
            className="text-bold"
          >
            About Me
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="project"
            onClick={openMenu}
            smooth={true}
            duration={500}
            className="text-bold"
          >
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="contact"
            onClick={openMenu}
            smooth={true}
            duration={500}
            className="text-bold"
          >
            Contact
          </Link>
        </li>
      </ul>

      <button
        onClick={scrolltoTop}
        className={`${
          !displayScroll
            ? "hidden"
            : "hidden fixed bottom-[20px] right-[30px] z-30 text-xl bg-gunmetal text-whitish border-none outline-none cursor-pointer p-5 rounded-full animate-bounce md:block"
        }`}
      >
        <FaArrowUp />
      </button>

      <button
        onClick={scrolltoTop}
        className={`${
          !colorScroll
            ? "hidden"
            : "hidden fixed bottom-[20px] right-[30px] z-30 text-xl bg-whitish text-gunmetal border-none outline-none cursor-pointer p-5 rounded-full animate-bounce md:block"
        }`}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default NavigationBar;
