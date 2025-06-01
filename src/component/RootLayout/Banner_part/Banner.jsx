import React from "react";
import Banner_img from "../../../assets/Banner.png";
import Common from "../../common_component/CComponent";
import Navbar from "../../common_component/Navbar";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-sky-300 via-violet-600 to-indigo-600">
      {/* NavBar */}
      <div>
        <Navbar />
      </div>
      {/* NavBar */}

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
              <Common text="We’re here - let’s talk" />
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
