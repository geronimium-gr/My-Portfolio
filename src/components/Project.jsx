import React from "react";
import sample from "../images/img-4.jpg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Project = () => {
  const project = [
    {
      id: 1,
      image:
        "https://www.pledis.co.kr/_data/file/bbsData/efd5efba9cf03c3d239fc3476e9f80bb.jpg",
      name: "Project Chaeyoung",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis non consectetur a maiores aliquid sed tenetur odit magnam voluptate! Totam molestias repellat architecto labore voluptatibus, aspernatur enim corporis voluptatem.",
    },
    {
      id: 2,
      image:
        "https://www.pledis.co.kr/_data/file/bbsData/f5bc7b1d43266801bfabe90472efb251.jpg",
      name: "Project Hayoung",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis non consectetur a maiores aliquid sed tenetur odit magnam voluptate! Totam molestias repellat architecto labore voluptatibus, aspernatur enim corporis voluptatem.",
    },
    {
      id: 3,
      image:
        "https://www.pledis.co.kr/_data/file/bbsData/f8a9dd381d920164dd646be18eb355bb.jpg",
      name: "Project Gyuri",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis non consectetur a maiores aliquid sed tenetur odit magnam voluptate! Totam molestias repellat architecto labore voluptatibus, aspernatur enim corporis voluptatem.",
    },
    {
      id: 4,
      image:
        "https://www.pledis.co.kr/_data/file/bbsData/e95d8359fb3c973c0203274eff59624c.jpg",
      name: "Project Jiwon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis non consectetur a maiores aliquid sed tenetur odit magnam voluptate! Totam molestias repellat architecto labore voluptatibus, aspernatur enim corporis voluptatem.",
    },
  ];

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

            <Swiper
              navigation={{ prevEl: ".previous", nextEl: ".next" }}
              rewind={true}
              modules={[Navigation]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {project.map((elem, index) => (
                <SwiperSlide key={elem.id}>
                  <div className="my-slider">
                    <div className="slide md:flex">
                      <div
                        className="slide-img h-52 w-full object-cover"
                        style={{
                          backgroundImage: `url(${elem.image})`,
                        }}
                      >
                        <a href="http://">View More</a>
                      </div>
                      <div className="slide-info w-full pt-3 md:pl-8">
                        <h5 className="text-2xl font-semibold leading-normal mt-0 mb-2 text-newYorkPink">
                          {elem.name}
                        </h5>
                        <p className="mt-2 text-slate-500">
                          {elem.description}
                        </p>
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
