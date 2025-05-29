import React from "react";
import Banner_img from "../../../assets/Banner/Banner.png";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="items-center pt-12">
          <div className="flex justify-between ">
            <div>
              <h1 className="w-[332px] font-open_sans font-bold text-4xl text-white_text_color">
                Making technology work for you
              </h1>
              <p className="w-[594px] pt-8 font-semibold text-base text-white_text_color">
                Feels like a team that can think, design, code, and scale your
                product from MVP to Market Ready exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure{" "}
              </p>
            </div>
            <div className="pt-[130px]">
              <h3 className="px-4 py-1 rounded text-white_text_color font-open_sans bg-custom_color">
                We’re here - let’s talk
              </h3>
            </div>
          </div>
          <div className="pl-[135px] pr-[135px] pt-[35px] pb-[135px]">
            <picture>
              <img src={Banner_img} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
