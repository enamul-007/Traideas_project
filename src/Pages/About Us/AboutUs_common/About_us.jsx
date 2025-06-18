import React from "react";
import About_img from "../../../assets/About_img.png";

const About_us = () => {
  return (
    <div className="w-full">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="mt-6 md:mt-12">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl font-open_sans text-black_color">
              About us
            </h2>
            <p className="text-sm sm:text-base font-semibold font-open_sans text-black_color py-4 sm:py-6 md:py-9 w-full md:w-[90%] lg:w-[770px] xs:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Lorem ipsum dolor sit amet,
              consectetur a
            </p>
          </div>

          <div className="pb-8">
            <picture>
              <img 
                className="object-cover w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[750px] rounded-xl md:rounded-2xl lg:rounded-3xl" 
                src={About_img} 
                alt="About our company" 
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;