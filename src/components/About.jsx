import React from "react";
import sample from "../images/img-4.jpg";

const About = () => {
  return (
    <section id="about" className="pt-15">
      <div className="bg-whitish shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={sample}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              park jiwon
            </div>
            <a
              href="https://"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Fromis 9
            </a>
            <p className="mt-2 text-slate-500">
              Park Jiwon (박지원) was born on March 20, 1998 in Busan, South
              Korea. She was a trainee for JYP Entertainment from 2012-2015,
              leaving shortly after being eliminated from the survival show
              SIXTEEN. In 2017 she became a contestant on the survival show Idol
              School and placed sixth, making her a member of Fromis_9.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
