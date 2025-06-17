import React from "react";
import Common_overlay from "../common_component/Common_overlay";
import work_img1 from "../../assets/Work_img1.png";
import Work_img2 from "../../assets/Work_img2.png";
import Work_img3 from "../../assets/Work_img3.png";

const Work_part = () => {
  return (
    <div className="overflow-hidden">
      <div className="container px-8 mx-auto">
        <div className="pt-8 pb-12 md:pt-[72px] md:pb-[210px]">
          <div>
            <Common_overlay title="Our Works" />
            <h2 className="pt-4 text-xl font-bold sm:text-2xl md:text-3xl font-open_sans text-black_color md:pt-9">
              Case Studies
            </h2>
          </div>
          
          {/* Case Study 1 */}
          <div className="flex flex-col justify-between gap-4 py-4 md:flex-row md:py-8">
            <div className="w-full">
              <img 
                src={work_img1} 
                alt="Consumer Complaint Management system" 
                className="w-full h-auto xs:max-w-[375px] mx-auto xl:max-w-[638px]"
              />
            </div>
            <div className="w-full py-2 md:py-6">
              <h1 className="text-lg font-semibold sm:text-xl md:text-2xl font-open_sans text-black_color">
                Consumer Complaint Management system
              </h1>
              <p className="py-3 text-xs font-medium text-justify sm:text-sm md:text-base font-open_sans md:py-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="text-xs font-semibold underline sm:text-sm md:text-base font-open_sans text-custom_color">
                Check Full Case Study
              </button>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="flex flex-col justify-between gap-4 py-4 md:flex-row-reverse md:py-8">
            <div className="w-full">
              <img 
                src={Work_img2} 
                alt="Pret A Med" 
                className="w-full h-auto xs:max-w-[375px] mx-auto xl:max-w-[638px]"
              />
            </div>
            <div className="w-full py-2 md:py-10">
              <h1 className="text-lg font-semibold sm:text-xl md:text-2xl font-open_sans text-black_color">
                Pret A Med
              </h1>
              <p className="py-3 text-xs font-medium text-justify sm:text-sm md:text-base font-open_sans md:py-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="text-xs font-semibold underline sm:text-sm md:text-base font-open_sans text-custom_color">
                Check Full Case Study
              </button>
            </div>
          </div>
          
          {/* Case Study 3 */}
          <div className="flex flex-col justify-between gap-4 py-4 md:flex-row md:py-8">
            <div className="w-full">
              <img 
                src={Work_img3} 
                alt="Consumer Complaint Management system" 
                className="w-full h-auto xs:max-w-[375px] mx-auto xl:max-w-[638px]"
              />
            </div>
            <div className="w-full py-2 md:py-10">
              <h1 className="text-lg font-semibold sm:text-xl md:text-2xl font-open_sans text-black_color">
                Consumer Complaint Management system
              </h1>
              <p className="py-3 text-xs font-medium text-justify sm:text-sm md:text-base font-open_sans md:py-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="text-xs font-semibold underline sm:text-sm md:text-base font-open_sans text-custom_color">
                Check Full Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work_part;