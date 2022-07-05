import React from "react";
import logo from "../images/geronimologo.png";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="space-margin bg bg-whitish">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div>
            <img className="h-8" src={logo} alt="" />
          </div>

          <div className="flex justify-center space-x-4">
            <a href="http://">
              <FaFacebook className="text-gunmetal" size={50} />
            </a>
            <a href="http://">
              <FaTwitter className="text-gunmetal" size={50} />
            </a>
            <a href="http://">
              <FaGithub className="text-gunmetal" size={50} />
            </a>
            <a href="http://">
              <FaLinkedin className="text-gunmetal" size={50} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
