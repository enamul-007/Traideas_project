import React from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import Tecnology_img from "../../../assets/Tecnology_img.png";

const Technology_part = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#001e33e1] to-[#02548aeb]">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="pt-8 md:pt-12">
              <Common_overlay title="Technology" style={{ color: "white" }} />
            </div>

            <div className="pb-12 md:pb-[88px] flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="order-2 w-full lg:order-1 lg:w-1/2">
                <h2 className="pt-6 text-2xl font-bold sm:text-3xl font-open_sans text-white_text_color md:pt-9">
                  AI / ML
                </h2>
                <p className="text-sm sm:text-base font-semibold text-justify font-open_sans text-white_text_color w-full lg:w-[587px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat
                </p>
              </div>
              <div className="flex justify-center order-1 w-full lg:order-2 lg:w-1/2">
                <picture>
                  <img 
                    src={Tecnology_img} 
                    alt="AI/ML Technology" 
                    className="w-full max-w-md mx-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology_part;