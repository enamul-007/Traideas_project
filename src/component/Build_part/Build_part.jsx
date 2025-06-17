import React from "react";
import CComponent from "../common_component/CComponent";
import network_img from "../../assets/network_img.png";

const Build_part = () => {
  return (
    <div className="relative w-full h-auto min-h-[200px] md:h-[320px]">
      <img 
        src={network_img} 
        alt="" 
        className="absolute inset-0 object-cover w-full h-full" 
      />
      <div className="relative z-10 flex items-center justify-between h-full px-4 py-8 md:px-10 md:py-0">
        <div className="container">
          <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0'>
            <h3 className='text-2xl md:text-4xl font-bold font-open_sans text-white_text_color text-center md:text-left max-w-[350px]'>
              Ready to build your project?
            </h3>
            <CComponent 
              text={"Get a free Consultation"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build_part;