import React from "react";
import Service_banner_img from "../../../assets/Service_banner_img.png";

const Service_banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-300 via-violet-600 to-indigo-600">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="py-8 md:py-12">
              <h2 className="text-3xl font-bold sm:text-4xl font-open_sans text-white_text_color">
                Service
              </h2>
              <p className="text-sm sm:text-base font-semibold font-open_sans text-white_text_color w-full md:w-4/5 lg:w-[770px] text-justify pt-6 sm:pt-10">
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
            <div className="pb-8 md:pb-12">
              <picture>
                <img 
                  className="w-full" 
                  src={Service_banner_img} 
                  alt="Service Banner" 
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_banner;