import React from "react";
import resume from "../images/Geronimo-John-Paulo-CV.pdf"
import {
  FaFacebook,
  FaTwitterSquare,
  FaGithub,
  FaLinkedin,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="grid grid-cols-1 h-screen">
      <div className="flex flex-col justify-center px-6 mx-auto space-y-12">
        <h1
          id="name"
          className="text-whitish text-5xl font-bold text-center animate-moveLeft md:text-8xl md:text-left"
        >
          John Paulo Geronimo
        </h1>
        <p
          id="name"
          className="text-2xl text-center font-bold text-whitish animate-moveLeft md:text-left md:text-3xl"
        >
          Aspiring Web Developer
        </p>
        <div
          id="name"
          className="flex justify-center space-x-4 animate-moveRight md:justify-start"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://web.facebook.com/seyfriedpaulo.geronimo/"
            className="social-icon hover:bg-[#3b5998]"
          >
            <FaFacebook className="text-whitish" size={50} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/geronimium_gr"
            className="social-icon hover:bg-[#00acee]"
          >
            <FaTwitterSquare className="text-whitish" size={50} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/geronimium-gr"
            className="social-icon hover:bg-[#6e5494]"
          >
            <FaGithub className="text-whitish" size={50} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/john-paulo-geronimo-561a4b240/"
            className="social-icon hover:bg-[#0072b1]"
          >
            <FaLinkedin className="text-whitish" size={50} />
          </a>
        </div>
        <div id="name" className="flex justify-center md:justify-start">
          <a
            href={resume}
            download="Geronimo-Resume"
            className="text-whitish font-semibold group border-[3px] px-6 py-3 my-2 flex items-center hover:text-newYorkPink hover:bg-whitish hover:border-transparent"
          >
            Download CV
            <span className="transition-all duration-300 ease-linear group-hover:hidden">
              <FaAngleRight className="ml-2" />
            </span>
            <span className="transition-all duration-300 ease-linear hidden group-hover:flex">
              <FaAngleDoubleRight className="ml-2" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
