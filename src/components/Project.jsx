import React from "react";
import sample from "../images/img-4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import List from "../subcomponents/List";
import project from "../data/Data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  return (
    <section id="project" className="space-margin shadow-lg bg-whitish">
      <div className="max-w-full p-6 md:container">
        <div>
          <div className="slider-wrapper group">
            <div>
              <div className="relative flex items-center py-5">
                <div className="flex-grow border-2 border-newYorkPink"></div>
                <span className="p-2 text-gunmetal text-2xl text-center font-bold md:text-3xl">
                  Projects
                </span>
                <div className="flex-grow border-2 border-newYorkPink"></div>
                <div
                  id="controls"
                  className="hidden transition-all duration-300 ease-linear group-hover:flex"
                >
                  <button className="previous p-1">
                    <FaArrowLeft className="text-gunmetal" size={25} />
                  </button>
                  <button className="next p-1">
                    <FaArrowRight className="text-gunmetal" size={25} />
                  </button>
                </div>
              </div>
            </div>

            <Swiper
              navigation={{ prevEl: ".previous", nextEl: ".next" }}
              pagination={{
                dynamicBullets: true,
              }}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: true,
              // }}
              rewind={true}
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {project.map((elem) => (
                <SwiperSlide key={elem.id}>
                  <div className="my-slider">
                    <div className="slide px-3 md:flex">
                      <div
                        className="slide-img h-52 w-full object-cover md:h-auto"
                        style={{
                          backgroundImage: `url(${elem.image})`,
                        }}
                      >
                        <a
                          href={`${elem.website}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-whitish border-2 hover:bg-newYorkPink hover:border-newYorkPink px-4 py-3 my-8 mx-auto flex items-center"
                        >
                          View Site
                        </a>
                        <a
                          href={`${elem.github}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-whitish border-2 hover:bg-newYorkPink hover:border-newYorkPink px-4 py-3 my-8 mx-auto flex items-center"
                        >
                          View Code
                        </a>
                      </div>
                      <div className="slide-info w-full pt-3 md:pl-8 md:h-full">
                        <h5 className="text-2xl font-semibold leading-normal mt-0 mb-2 text-newYorkPink">
                          {elem.name}
                        </h5>
                        <p className="mt-2 text-slate-500">
                          {elem.description}
                        </p>
                        <List project={elem} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
