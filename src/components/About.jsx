import React from "react";
import AboutImage from "../images/me.jpg";

const About = () => {
  return (
    <section id="about" className="space-margin shadow-lg">
      <div className="bg-whitish overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover object-top md:h-full md:w-96"
              src={AboutImage}
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
                I am a fresh graduate and aspiring Web Developer, specializing
                in building and developing websites using web frameworks.
                Currently, I'm focusing on studying the fundamentals of Java, Angular Frameworks
                and other frameworks (e.g., React).
                <br />
                <br />
                I'm looking for opportunities where I can enhance my skills, and
                I'm willing to learn new techniques and knowledge that can help
                for the improvement of my career in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
