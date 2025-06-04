import React from "react";
import CComponent from "../../../component/common_component/CComponent";

const About_deatils = () => {
  return (
    <div className="bg-[#484848]">
      <div className="container">
        <div className="flex items-center justify-between py-[120px]">
          <h2 className="text-3xl font-bold font-open_sans text-white_text_color w-[460px] text-justify uppercase">Get a project in mind? so let’s discuss with details</h2>
          <CComponent text="Contact with us" />
        </div>
      </div>
    </div>
  );
};

export default About_deatils;
