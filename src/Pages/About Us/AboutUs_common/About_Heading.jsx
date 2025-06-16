import React from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import { color } from "framer-motion";
import About_common from "../../../component/common_component/About_common";
import { FaImage } from "react-icons/fa6";
import CComponent from "../../../component/common_component/CComponent";

const About_Heading = () => {
  return (
    <div>
      <div className="container px-8">
        <div className="pt-9">
          <div>
            <Common_overlay
              title="Why It’s Called Traideas"
              style={{ color: "black" }}
            />
          </div>
          <div>
            <div>
              <h1 className="pt-6 text-3xl font-bold font-open_sans text-black_color">
                Heading of your choice
              </h1>
              <p className="pt-6 text-base font-semibold text-justify font-open_sans text-black_color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
          <div className="pt-6 pb-12">
            <div className="h-[2px] w-full bg-black_color mx-2"></div>
            <div className="pt-[29px] pb-[30px]">
              <div className="flex justify-between">
                <About_common title="5+" heading="Years of Experiences" />
                <div class="w-[1.5px] h-[120px] bg-black_color  "></div>
                <About_common title="10+" heading="Creative Pros" />
                <div class="w-[2px] h-[120px] bg-black_color  "></div>
                <About_common title="50+" heading="Project Delivered" />
                <div class="w-[1.5px] h-[120px] bg-black_color  "></div>
                <About_common title="20+" heading="Industries Served" />
              </div>
            </div>
            <div className="h-[2px] w-full bg-black_color mx-2 "></div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-between ">
                <div>
                  <div>
                    <Common_overlay
                      title="Our Mission"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div>
                    <h2 className="pt-6 text-3xl font-bold font-open_sans text-black_color">
                      Heading of your choice
                    </h2>
                    <p className="text-base font-semibold text-justify font-open_sans text-black_color w-[503px] pt-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div className="w-[50%] bg-[#808080] h-[50%]  ">
                  <div className="px-[40%] py-[35%] text-[170px] text-white_text_color ">
                    <FaImage />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-[50%] bg-[#808080] h-[50%] ">
                  <div className="px-[35%] py-[35%] text-[170px] text-white_text_color ">
                    <FaImage />
                  </div>
                </div>

                <div>
                  <div>
                    <Common_overlay
                      title="Our Vision"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div>
                    <h2 className="pt-6 text-3xl font-bold font-open_sans text-black_color">
                      Heading of your choice
                    </h2>
                    <p className="text-base font-semibold text-justify font-open_sans text-black_color w-[503px] pt-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-12">
              <Common_overlay
                title="Some of Our Happiness Moment"
                style={{ color: "black" }}
              />
            </div>
            <div className="relative overflow-hidden">
              <div className="flex -mx-10 gap-x-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[370px] bg-[#808080] h-[304px] rounded-xl flex items-center justify-center text-[170px] text-white_text_color"
                  >
                    <FaImage />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Heading;
