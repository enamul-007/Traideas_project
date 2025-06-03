import React from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import { color } from "framer-motion";
import About_common from "../../../component/common_component/About_common";

const About_Heading = () => {
  return (
    <div>
      <div className="container">
        <div>
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
          <div className="pb-[72px] pt-6">
            <div className="h-[2px] w-full bg-black_color "></div>
            <div className="py-[30px]">
              <div className="flex justify-between">
                <About_common title="5+" heading="Years of Experiences" />
                <div class="w-[2px] h-[120px] bg-black_color  "></div>
                <About_common title="10+" heading="Creative Pros" />
                <div class="w-[2px] h-[120px] bg-black_color  "></div>
                <About_common title="50+" heading="Project Delivered" />
                <div class="w-[2px] h-[120px] bg-black_color  "></div>
                <About_common title="20+" heading="Industries Served" />
              </div>
            </div>
            <div className="h-[2px] w-full bg-black_color "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Heading;
