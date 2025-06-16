import React from "react";
import Common_overlay from "../common_component/Common_overlay";

const Chose_part = () => {
  return (
    <div className="bg-black_color">
      <div className="container px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="pt-6 md:pt-12 lg:pt-[72px]">
                <Common_overlay title="Why Chose Us" style={{ color: "white" }} />
              </div>

              <div className="pt-6 md:pt-9">
                <h3 className="text-2xl font-bold sm:text-3xl font-open_sans text-white_text_color">
                  Heading of your choice
                </h3>
                <p className="text-sm sm:text-base font-semibold font-open_sans text-white_text_color pt-4 sm:pt-6 md:pt-9 w-full lg:w-[520px] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
              </div>
            </div>

            {/* Right Content - Cards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:pt-[114px]">
              {/* Card 1 */}
              <div className="h-auto min-h-[230px] w-full sm:w-[370px] lg:ml-[72px] border-[3px] rounded-2xl">
                <div className="p-4 sm:p-[23px]">
                  <h2 className="text-sm font-semibold sm:text-base text-white_text_color font-open_sans">
                    Reason 1
                  </h2>
                  <h1 className="pt-1 text-xl font-semibold sm:pt-2 sm:text-2xl font-open_sans text-white_text_color">
                    Heading
                  </h1>
                  <p className="pt-1 text-sm font-semibold sm:pt-2 sm:text-base text-white_text_color font-open_sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                  <div className="relative flex justify-end mt-4 sm:mt-0">
                    <div className="absolute left-[21px] top-[11px] h-12 w-[2px] bg-gradient-to-b from-[#8a96e2] to-[#78b76a]"></div>
                    <div className="absolute top-[59px] left-[21px] w-[175px] h-[2px] bg-gradient-to-b from-[#93a1fb] to-[#68a25b]"></div>
                    <div className="absolute top-[59px] right-[124px] h-12 w-[2px] bg-gradient-to-b from-[#8690D1] to-[#9FE38F]"></div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="h-auto min-h-[230px] w-full sm:w-[370px] lg:ml-[72px] border-[3px] rounded-2xl mt-6 md:mt-0">
                <div className="p-4 sm:p-[23px]">
                  <h2 className="text-sm font-semibold sm:text-base text-white_text_color font-open_sans">
                    Reason 2
                  </h2>
                  <h1 className="pt-1 text-xl font-semibold sm:pt-2 sm:text-2xl font-open_sans text-white_text_color">
                    Heading
                  </h1>
                  <p className="pt-1 text-sm font-semibold sm:pt-2 sm:text-base text-white_text_color font-open_sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chose_part;