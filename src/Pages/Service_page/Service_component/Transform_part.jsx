import React from "react";
import Transform_bg_img from "../../../assets/Transform_bg_img.png";
import CComponent from "../../../component/common_component/CComponent";

const Transform_part = () => {
  return (
    <div>
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[320px]">
        <img
          src={Transform_bg_img}
          alt="Transform your vision background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better text readability */}
        <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-10">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-open_sans text-white_text_color w-full md:w-[570px] uppercase text-center md:text-left">
                Transform your vision into reality
              </h3>
              <div className="w-full md:w-auto xs:pl-[20%]">
                <CComponent text={"Get a free Consultation"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform_part;