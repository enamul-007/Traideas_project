import React from "react";
import Figma_icon from "../../assets/Figma_icon.png";
import Xd_icon from "../../assets/Xd_icon.png";
import Ai_icon from "../../assets/Ai_icon.png";
import PS_icon from "../../assets/PS_icon.png";
import Arc_icon from "../../assets/Arc_icon.png";
import Dimon_icon from "../../assets/Dimon_icon.png";
import AnimatedImage from "../Animetion/Card_icon_ani";

const Card_commo = () => {
  return (
    <div>
      <div className=" flex justify-between  bg-gradient-to-l from-[#100f0f] to-[#484747]  shadow-[0px_10px_30px_rgba(0,0,0,0.5)] rounded-xl">
        <div className="pt-[117px] pb-[85px] pl-[96px]">
          <h1 className="text-4xl font-bold font-open_sans text-white_text_color">
            UI UX Design
          </h1>
          <p className="text-base font-medium font-open_sans text-white_text_color w-[450px] text-justify pt-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
          </p>
        </div>
        <div className="pt-[117px] pb-[85px] pl-[96px] ">
          <div className="flex flex-col gap-6 group">
            <div className="flex gap-6 pr-8">
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden ">
                <AnimatedImage
                  src={Figma_icon}
                  alt={Figma_icon}
                  className="px-[14px] py-[10px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  src={Xd_icon}
                  alt=""
                  className="px-[14px] py-[12px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
            </div>
            <div className="flex gap-6 pr-8">
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden ">
                <AnimatedImage
                  src={Ai_icon}
                  alt=""
                  className="px-[16px] py-[16px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  className="px-[16px] py-[18px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                  src={PS_icon}
                  alt=""
                />
              </div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
            </div>
            <div className="flex gap-6 pr-8">
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden ">
                <AnimatedImage
                  className="px-[14px] py-[14px] items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100"
                  src={Arc_icon}
                  alt=""
                />
              </div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[66px] w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  className="px-[14px] py-[16px] items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100"
                  src={Dimon_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_commo;
