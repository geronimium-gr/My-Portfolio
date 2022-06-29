import React from "react";
import sample from "../images/img-4.jpg";

const About = () => {
  return (
    <section id="about" className="space-margin shadow-lg">
      <div className="bg-whitish overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-96"
              src={sample}
              alt=""
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* <div className="p-10 md:p-20"></div> */}
            <div className="p-8 place-self-center">
              <div className="relative flex items-center py-5">
                <div className="flex-grow border-2 border-newYorkPink"></div>
                <span className="p-2 text-gunmetal text-2xl text-center font-bold md:text-3xl">
                  About Me
                </span>
                <div className="flex-grow border-2 border-newYorkPink"></div>
              </div>
              <p className="mt-2 text-slate-500">
                Park Jiwon (박지원) was born on March 20, 1998 in Busan, South
                Korea. She was a trainee for JYP Entertainment from 2012-2015,
                leaving shortly after being eliminated from the survival show
                SIXTEEN. In 2017 she became a contestant on the survival show
                Idol School and placed sixth, making her a member of Fromis_9.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
