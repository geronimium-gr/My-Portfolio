import React from "react";
import image from "../images/me.png";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="grid grid-cols-1 h-screen">
      <div className="flex flex-col justify-center px-6 mx-auto space-y-12">
        <h1 className="text-whitish text-5xl font-bold text-center md:text-8xl md:text-left">
          John Paulo Geronimo
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
        <div className="flex justify-center md:justify-start">
          <button
            className="bg-transparent
                      text-whitish font-semibold
                      py-2 px-4 border border-whitish rounded-full 
                      hover:text-newYorkPink hover:bg-whitish hover:border-transparent"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
