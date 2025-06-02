import React from "react";
import Common_overlay from "../common_component/Common_overlay";

const Chose_part = () => {
  return (
    <div className="bg-black_color">
      <div className="container overflow-hidden">
        <div className="py-24 ">
          <div className="flex">
            <div>
              <div className="pt-[72px] ">
                <Common_overlay
                  title="Why Chose Us"
                  style={{ color: "white" }}
                />
              </div>

              <div className="pt-9">
                <h3 className="text-3xl font-bold font-open_sans text-white_text_color ">
                  Heading of your choice
                </h3>
                <p className="text-base font-semibold font-open_sans text-white_text_color pt-9 w-[520px] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
              </div>
            </div>
            <div className="pt-[114px]">
              <div>
                <div className="h-[230px] w-[370px]  ml-[72px] border-[3px] rounded-2xl ">
                  <div className="p-[23px]">
                    <h2 className="text-base font-semibold text-white_text_color font-open_sans">
                      Reason 1
                    </h2>
                    <h1 className="pt-2 text-2xl font-semibold font-open_sans text-white_text_color">
                      Heading
                    </h1>
                    <p className="pt-2 text-base font-semibold text-white_text_color font-open_sans">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.{" "}
                    </p>
                    <div>
                      <div className="relative flex left-[155px]">
                        <div className="absolute left-[21px] top-[11px] h-12 w-[2px] bg-gradient-to-b from-[#8a96e2]  to-[#78b76a]"></div>

                        <div className="absolute top-[59px] left-[21px] w-[175px] h-[2px] bg-gradient-to-b from-[#93a1fb]  to-[#68a25b]"></div>
                        <div className="absolute top-[59px] right-[124px]  h-12 w-[2px] bg-gradient-to-b from-[#8690D1]  to-[#9FE38F]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="h-[230px] w-[370px]  ml-[72px] border-[3px] rounded-2xl top-10 ">
                <div className="p-[23px]">
                  <h2 className="text-base font-semibold text-white_text_color font-open_sans">
                    Reason 1
                  </h2>
                  <h1 className="pt-2 text-2xl font-semibold font-open_sans text-white_text_color">
                    Heading
                  </h1>
                  <p className="pt-2 text-base font-semibold text-white_text_color font-open_sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.{" "}
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
