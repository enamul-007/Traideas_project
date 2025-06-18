import React from "react";
import Tecnology_img from "../../../assets/Tecnology_img.png";

const CaseStady_project_part = () => {
  return (
    <div className="w-full">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row xl:gap-[150px]">
          {/* Left Column */}
          <div className="w-full space-y-8 lg:w-1/2">
            {[1, 2, 3].map((item) => (
              <div key={`left-${item}`} className="project-card">
                <div className="pt-8 md:pt-12 lg:pt-[53px] xl:pt-5">
                  <picture>
                    <img
                      className="w-full h-auto md:h-[280px] lg:h-[329px] object-cover rounded-3xl xl:w-[650px]  xl:h-[400px]"
                      src={Tecnology_img}
                      alt="Project"
                    />
                  </picture>

                  <h2 className="pt-6 text-xl font-bold md:text-2xl font-open_sans md:pt-9">
                    Project Name
                  </h2>
                  <p className="w-full pt-4 text-sm font-semibold text-justify md:pt-6 font-open_sans md:text-base xl:w-[650px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit a
                  </p>
                </div>
                <div className="flex gap-4 pt-4 md:pt-6 md:gap-7">
                  <button className="bg-[#E0E0E0] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-xs md:text-sm border border-gray-400 hover:bg-black hover:text-white transition-all">
                    Software
                  </button>
                  <button className="bg-[#E0E0E0] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-xs md:text-sm border border-gray-400 hover:bg-black hover:text-white transition-all">
                    Education
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full space-y-8 lg:w-1/2 xl:pt-[158px] xl:pb-[72px]">
            {[1, 2, 3].map((item, index) => (
              <div key={`right-${item}`} className="project-card">
                <div className={`pt-8 md:pt-12 lg:pt-[${index === 0 ? '158px' : '53px'}] xl:pt-5`}>
                  <picture>
                    <img
                      className="w-full h-auto md:h-[280px] lg:h-[329px] object-cover rounded-3xl   xl:w-[650px] xl:h-[400px]"
                      src={Tecnology_img}
                      alt="Project"
                    />
                  </picture>

                  <h2 className="pt-6 text-xl font-bold md:text-2xl font-open_sans md:pt-9">
                    Project Name
                  </h2>
                  <p className="w-full pt-4 text-sm font-semibold text-justify md:pt-6 font-open_sans md:text-base xl:w-[650px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit a
                  </p>
                </div>
                <div className="flex gap-4 pt-4 md:pt-6 md:gap-7">
                  <button className="bg-[#E0E0E0] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-xs md:text-sm border border-gray-400 hover:bg-black hover:text-white transition-all">
                    Software
                  </button>
                  <button className="bg-[#E0E0E0] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-xs md:text-sm border border-gray-400 hover:bg-black hover:text-white transition-all">
                    Education
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStady_project_part;  