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
    <div className="w-full overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <div className="flex flex-col md:flex-row justify-between bg-gradient-to-l from-[#100f0f] to-[#484747] shadow-[0px_10px_30px_rgba(0,0,0,0.5)] rounded-xl">
        {/* Text Content - Always visible */}
        <div className="p-4 sm:p-6 md:pt-[60px] md:pb-[50px] md:pl-[60px] lg:pt-[117px] lg:pb-[85px] lg:pl-[96px] w-full"> {/* Added w-full */}
          <h1 className="text-xl font-bold xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-open_sans text-white_text_color">
            UI UX Design
          </h1>
          <p className="text-xs xs:text-sm sm:text-base font-medium font-open_sans text-white_text_color w-full max-w-[450px] text-justify pt-3 xs:pt-4 sm:pt-6 md:pt-[20px] lg:pt-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>

        {/* Icons Section - Visible from md screens and above */}
        <div className="hidden md:block md:pt-[60px] md:pb-[50px] md:pl-[40px] lg:pt-[117px] lg:pb-[85px] lg:pl-[96px]">
          <div className="flex flex-col gap-4 md:gap-6 group">
            {/* Row 1 */}
            <div className="flex gap-4 pr-4 md:gap-6 md:pr-8">
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  src={Figma_icon}
                  alt="Figma"
                  className="px-3 py-2 md:px-[14px] md:py-[10px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  src={Xd_icon}
                  alt="Adobe XD"
                  className="px-3 py-2 md:px-[14px] md:py-[12px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4 pr-4 md:gap-6 md:pr-8">
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  src={Ai_icon}
                  alt="Adobe Illustrator"
                  className="px-3 py-3 md:px-[16px] md:py-[16px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  src={PS_icon}
                  alt="Photoshop"
                  className="px-3 py-3 md:px-[16px] md:py-[18px] items-center opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-4 pr-4 md:gap-6 md:pr-8">
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  src={Arc_icon}
                  alt="Arc"
                  className="px-3 py-2 md:px-[14px] md:py-[14px] items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100"
                />
              </div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color"></div>
              <div className="text-white_text_color h-[50px] w-[50px] md:h-[66px] md:w-[66px] border-[2px] rounded-lg border-white_text_color overflow-hidden">
                <AnimatedImage
                  src={Dimon_icon}
                  alt="Dimon"
                  className="px-3 py-3 md:px-[14px] md:py-[16px] items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100"
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