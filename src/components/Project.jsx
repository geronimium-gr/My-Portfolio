import React from "react";
import sample from "../images/img-4.jpg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Project = () => {
  return (
    <section id="slider" className="space-margin shadow-lg bg-whitish">
      <div className="container p-6">
        <div className="">
          <div className="slider-wrapper">
            <div className="">
              <div className="relative flex items-center py-5">
                <div className="flex-grow border-2 border-newYorkPink"></div>
                <span className="p-2 text-gunmetal text-2xl text-center font-bold md:text-3xl">
                  Projects
                </span>
                <div className="flex-grow border-2 border-newYorkPink"></div>
                <div id="controls">
                  <button className="previous p-1">
                    <FaArrowAltCircleLeft size={25} />
                  </button>
                  <button className="next p-1">
                    <FaArrowAltCircleRight size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="my-slider">
              <div className="slide">
                <div className="slide-img bg-project">
                  <a href="http://">View More</a>
                </div>
                <div className="slide-info">
                  <h3 className="project-name">Sample</h3>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus numquam cum aliquam dolore eos blanditiis ut, rem
                    suscipit veritatis ad repudiandae ullam debitis dolores sit
                    deserunt, voluptatibus dolorem quam eaque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
