import React from "react";
import Common_overlay from "../common_component/Common_overlay";
import work_img1 from "../../assets/Work_img1.png";
import Work_img2 from "../../assets/Work_img2.png";
import Work_img3 from "../../assets/Work_img3.png";

const Work_part = () => {
  return (
    <div>
      <div className="container">
        <div className=" pt-[72px] pb-[210px]">
          <div>
            <Common_overlay title="Our Works" />
            <h2 className="text-3xl font-bold font-open_sans text-black_color pt-9">
              Case Studies
            </h2>
          </div>
          <div className="flex justify-between py-8">
            <div>
              <picture>
                <img src={work_img1} alt="" />
              </picture>
            </div>
            <div className="py-6">
              <h1 className="text-2xl font-semibold font-open_sans w-[470px] text-black_color ">
                Consumer Complaint Management system
              </h1>
              <p className="text-base font-semibold font-open_sans w-[470px] text-justify py-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
              </p>


              <button className="text-base font-semibold underline font-open_sans text-custom_color">Check Full Case Study</button>
            </div>
          </div>
          <div className="flex justify-between py-8">
          <div className="py-10">
              <h1 className="text-2xl font-semibold font-open_sans w-[470px] text-black_color ">
              Pret A Med
              </h1>
              <p className="text-base font-semibold font-open_sans w-[470px] text-justify py-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
              </p>


              <button className="text-base font-semibold underline font-open_sans text-custom_color">Check Full Case Study</button>
            </div>
            <div>
              <picture>
                <img src={Work_img2} alt="" />
              </picture>
            </div>
            
          </div>
          <div className="flex justify-between py-8">
            <div>
              <picture>
                <img src={Work_img3} alt="" />
              </picture>
            </div>
            <div className="py-10">
              <h1 className="text-2xl font-semibold font-open_sans w-[470px] text-black_color ">
                Consumer Complaint Management system
              </h1>
              <p className="text-base font-semibold font-open_sans w-[470px] text-justify py-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
              </p>


              <button className="text-base font-semibold underline font-open_sans text-custom_color">Check Full Case Study</button>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Work_part;
