import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;
  return (
    <div id={projects.title} className="px-8 md:px-16 md:px-32 pb-16 bg-white flex flex-col items-center">
      <h1 className="pt-12 uppercase font-bold text-center text-black text-4xl mb-8">{projects.title}</h1>
      <div className="projects__menu">
        <ul className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          {projects.projects.map((item) => (
            <li key={item.title} className="flex flex-col items-start lg:flex-row mt-12 border rounded-lg p-6 shadow-lg">
              <div className="lg:w-full text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h2>
                <p className="text-lg mb-6">
                  {item.description}
                </p>
                <div className="flex mt-4 justify-center">
                  <div className="bg-white border-2 border-indigo-500 rounded-full ml-2 font-semibold shadow-md">
                    <a href={item.github} target="_blank" rel="noreferrer">                      
                      <span className="block py-2 px-4 bg-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                        Source Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
