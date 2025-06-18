import React from "react";
import Transform_bg_img from "../../../assets/Transform_bg_img.png";
import CComponent from "../../../component/common_component/CComponent";

const Case_discuss_part = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[320px]">
      <img
        src={Transform_bg_img}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-open_sans text-white text-center md:text-left w-full md:w-[570px] uppercase">
              Get a project in mind? so let's discuss with details
            </h3>
            <div className="w-full sm:w-auto xs:pl-[27%]">
              <CComponent text={"So Contact with us"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case_discuss_part;