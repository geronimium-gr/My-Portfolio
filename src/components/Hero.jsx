import React from "react";
import image from "../images/me.png";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse item-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="text-whitish max-w-md text-4xl font-bold text-center md:text-6xl md:text-left">
            John Paulo A. Geronimo
          </h1>
          <p className="max-w-md text-2xl text-center font-bold text-whitish md:text-left md:text-3xl">
            Aspiring Web Developer
          </p>
          <div className="flex justify-center space-x-4 md:justify-start">
            <a href="http://">
              <FaFacebook className="text-whitish" size={50} />
            </a>
            <a href="http://">
              <FaTwitter className="text-whitish" size={50} />
            </a>
            <a href="http://">
              <FaGithub className="text-whitish" size={50} />
            </a>
            <a href="http://">
              <FaLinkedin className="text-whitish" size={50} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="mb-4 md:w-[25rem] md:h-[25rem]" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
