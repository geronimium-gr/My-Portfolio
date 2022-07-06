import React from "react";
import logo from "../images/geronimologo.png";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date();

  return (
    <footer className="space-margin bg bg-whitish">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center md:hidden">
            Copyright &copy; {currentYear.getFullYear()}, All Rights Reserved
          </div>
          <div>
            <img className="h-8" src={logo} alt="" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="http://">
              <FaFacebook className="text-gunmetal" size={40} />
            </a>
            <a href="http://">
              <FaTwitter className="text-gunmetal" size={40} />
            </a>
            <a href="http://">
              <FaGithub className="text-gunmetal" size={40} />
            </a>
            <a href="http://">
              <FaLinkedin className="text-gunmetal" size={40} />
            </a>
          </div>
        </div>

        <div className="flex justify-around text-center space-x-32 md:text-left">
          <div className="flex flex-col space-y-3">
            <div>
              <div className="text-gunmetal text-lg font-bold">Navigation</div>
              <div className="flex-grow border-2 border-newYorkPink"></div>
            </div>
            <a href="http://" className="text-gunmetal font-medium">
              About Me
            </a>
            <a href="http://" className="text-gunmetal font-medium">
              Portfolio
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form action="">
            <div className="flex space-x-3">
              <input
                type="text"
                name=""
                id=""
                className="flex-1 w-full px-4 rounded-full outline outline-1"
                placeholder="Send Message"
              />
              <button className="px-6 py-2 text-whitish rounded-full bg-newYorkPink hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-gunmetal md:block">
            Copyright &copy; {currentYear.getFullYear()}, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
