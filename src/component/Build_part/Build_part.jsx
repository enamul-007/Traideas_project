import React from "react";
import CComponent from "../common_component/CComponent";
import network_img from "../../assets/network_img.png";

const Build_part = () => {
  return (
    <div className="relative w-full h-[320px]">
    <img src={network_img} alt="" className="absolute inset-0 object-cover w-full h-full" />
    <div className="relative z-10 flex items-center justify-between h-full px-10">
    <div className="container">
            <div className='flex justify-between'>
                <h3 className='text-4xl font-bold font-open_sans text-white_text_color w-[350px]'>Ready to build your project?</h3>
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
