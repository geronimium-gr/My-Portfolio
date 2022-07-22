import React from "react";
import resume from "../images/Geronimo-John-Paulo-Resume.pdf";
import {
  FaFacebook,
  FaTwitterSquare,
  FaGithub,
  FaLinkedin,
  FaDownload,
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
            className="text-whitish p-4 px-6 py-3 font-semibold group border-[3px] relative inline-flex items-center justify-center overflow-hidden border-whitish text-newYorkPink shadow-md transition duration-300 ease-out"
          >
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-whitish text-white duration-300 group-hover:translate-x-0">
              <FaDownload className="text-newYorkPink" size={25} />
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center text-whitish transition-all duration-300 group-hover:translate-x-full">
              Download CV
            </span>
            <span className="invisible relative">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
