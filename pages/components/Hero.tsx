import React from "react";
import config from "../index.json";
import Image from "next/image";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white overflow-x-hidden flex items-center justify-center">
      <div className="px-8 lg:px-32 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:pr-8 space-y-4">
          <h1 className="text-6xl font-bold tracking-wide">
            Hi, my name is  
            <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-red-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              {hero.name}
            </span>
          </h1>
          <h1 className="text-6xl font-bold tracking-wide">{hero.subtitle}</h1>
          <div className="border-2 border-rose-500 rounded w-full lg:w-44 transition-all duration-300 hover:bg-rose-500 hover:border-transparent flex justify-center items-center">
            <a href="#About" className="text-2xl font-bold py-2 px-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 transition-colors duration-300 hover:text-white">
                Know more
            </a>
          </div>
        </div>
        <div className="mt-5 lg:mt-0 lg:pl-8">
          <Image 
            src={hero.image} 
            alt="about" 
            className="shadow-lg" 
            width={300} 
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
