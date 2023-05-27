import React from "react";
import config from "../index.json";

const About = () => {
  const about = config.about;
  return (
    <div id="About" className="px-8 md:px-32 pb-32 bg-gradient-to-r from-orange-400 via-indigo-500 to-purple-500">
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">{about.title}</h1>
      <div className="mt-16 flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 flex justify-center items-center flex-col">
          <div className="pt-8 md:py-0 text-white text-center md:text-left">
            <h1 className="uppercase font-bold text-white text-2xl mb-4">Technical Skills</h1>
            <p>{about.techSkills}</p>
            <h1 className="pt-12 uppercase font-bold text-white text-2xl mb-4">Soft Skills</h1>
            <p>{about.softSkills}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center flex-col">
          <div className="pt-8 md:py-0 text-white text-center md:text-left">
            <h1 className="uppercase font-bold text-white text-2xl mb-4"></h1>
            <p>{about.primary}</p>
            <h1 className="pt-12 uppercase font-bold text-white text-2xl mb-4"></h1>
            <p>{about.secondary}</p>
            <div className="mt-6 border-2 border-white py-2 px-3 w-44 text-center font-bold transition-all duration-300 hover:bg-white hover:text-purple-500">
              <a href={'http://www.google.com'} className="text-white text-l transition-colors duration-300 hover:text-purple-500">View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
