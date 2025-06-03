import React from "react";
import Transform_bg_img from "../../../assets/Transform_bg_img.png";
import CComponent from "../../../component/common_component/CComponent";

const Transform_part = () => {
  return (
    <div>
      <div className="relative w-full h-[320px]">
        <img
          src={Transform_bg_img}
          alt={Transform_bg_img}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 flex items-center justify-between h-full px-10">
          <div className="container">
            <div className="flex justify-between">
              <h3 className="text-4xl font-bold font-open_sans text-white_text_color w-[570px] uppercase">
              Transform your vision into reality
              </h3>
              <CComponent text={"Get a free Consultation"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform_part;
