import React from "react";
import CComponent from "../../../component/common_component/CComponent";

const About_deatils = () => {
  return (
    <div className="bg-[#484848]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-12 md:py-16 lg:py-[120px]">
          <h2 className="text-xl sm:text-2xl md:text-xl font-bold font-open_sans text-white text-center md:text-left w-full md:w-[80%] lg:w-[460px] uppercase">
            Get a project in mind? so let's discuss with details
          </h2>
          <div className="w-full md:w-auto xs:pl-[30%] sm:pl-[35%]">
            <CComponent text="Contact with us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_deatils;